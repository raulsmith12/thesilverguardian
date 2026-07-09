const crypto = require("crypto");
const { getDatabasePool } = require("./database");
const {
  sendNewsletterSignupEmail,
  sendNewsletterWelcomeEmail,
  sendSupportPaymentReceiptEmail,
} = require("./emailNotifications");
const {
  createNewsletterSubscriber,
  isDuplicateNewsletterEmailError,
} = require("./newsletterSubscribers");

const SUPPORT_PAYMENT_AMOUNT_CENTS = 100;
const SUPPORT_PAYMENT_CURRENCY = "USD";
const paymentMethods = ["card", "apple_pay", "google_pay"];
const terminalStatuses = ["completed", "declined"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeEmail(value) {
  return normalizeText(value).toLowerCase();
}

function isSupportPaymentMethod(value) {
  return paymentMethods.includes(value);
}

function createPublicId() {
  return crypto.randomUUID();
}

function hashPayload(value) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(value))
    .digest("hex");
}

function getProcessorSessionUrl() {
  return process.env.PAYMENT_PROCESSOR_SESSION_URL?.trim();
}

function getProcessorApiKey() {
  return process.env.PAYMENT_PROCESSOR_API_KEY?.trim();
}

function getProcessorName() {
  return process.env.PAYMENT_PROCESSOR_NAME?.trim() || "custom";
}

function getProcessorWebhookSecret() {
  return process.env.PAYMENT_PROCESSOR_WEBHOOK_SECRET?.trim();
}

function toPaymentResponse(row) {
  return {
    paymentId: row.public_id,
    status: row.status,
    amountCents: row.amount_cents,
    currency: row.currency,
  };
}

function isPaymentProcessorConfigured() {
  return Boolean(getProcessorSessionUrl() && getProcessorApiKey());
}

function validateSupportPayment(body) {
  const source = body && typeof body === "object" ? body : {};
  const paymentMethod = normalizeText(source.paymentMethod);
  const data = {
    firstName: normalizeText(source.firstName),
    lastName: normalizeText(source.lastName),
    email: normalizeEmail(source.email),
    paymentMethod: isSupportPaymentMethod(paymentMethod) ? paymentMethod : "card",
    subscribeToNewsletter: source.subscribeToNewsletter === true,
  };
  const errors = {};

  if (!data.firstName) {
    errors.firstName = "Required";
  } else if (data.firstName.length > 100) {
    errors.firstName = "Must be 100 characters or fewer";
  }

  if (!data.lastName) {
    errors.lastName = "Required";
  } else if (data.lastName.length > 100) {
    errors.lastName = "Must be 100 characters or fewer";
  }

  if (!data.email) {
    errors.email = "Required";
  } else if (data.email.length > 320) {
    errors.email = "Must be 320 characters or fewer";
  } else if (!emailPattern.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!isSupportPaymentMethod(paymentMethod)) {
    errors.paymentMethod = "Choose card, Apple Pay, or Google Pay";
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
    };
  }

  return {
    ok: true,
    data,
  };
}

async function getSupportPaymentByPublicId(publicId) {
  const [rows] = await getDatabasePool().execute(
    `
      SELECT *
      FROM support_payments
      WHERE public_id = ?
      LIMIT 1
    `,
    [publicId],
  );

  return rows[0] ?? null;
}

async function getSupportPaymentStatus(publicId) {
  const row = await getSupportPaymentByPublicId(publicId);

  return row ? toPaymentResponse(row) : null;
}

async function insertPendingSupportPayment(input) {
  const publicId = createPublicId();
  const [result] = await getDatabasePool().execute(
    `
      INSERT INTO support_payments (
        public_id,
        first_name,
        last_name,
        email,
        amount_cents,
        currency,
        status,
        payment_method,
        processor_name,
        subscribe_to_newsletter
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      publicId,
      input.firstName,
      input.lastName,
      input.email,
      SUPPORT_PAYMENT_AMOUNT_CENTS,
      SUPPORT_PAYMENT_CURRENCY,
      "pending",
      input.paymentMethod,
      getProcessorName(),
      input.subscribeToNewsletter,
    ],
  );

  return {
    id: result.insertId,
    publicId,
  };
}

async function updateProcessorAttempt(publicId, status, details = {}) {
  await getDatabasePool().execute(
    `
      UPDATE support_payments
      SET
        status = ?,
        processor_payment_id = COALESCE(?, processor_payment_id),
        processor_status = COALESCE(?, processor_status),
        processor_payload_sha256 = COALESCE(?, processor_payload_sha256),
        processed_at = CASE WHEN ? IN ('completed', 'declined') THEN CURRENT_TIMESTAMP ELSE processed_at END,
        updated_at = CURRENT_TIMESTAMP
      WHERE public_id = ?
    `,
    [
      status,
      details.processorPaymentId ?? null,
      details.processorStatus ?? null,
      details.processorPayloadHash ?? null,
      status,
      publicId,
    ],
  );
}

async function requestProcessorPayment(input, publicId) {
  const sessionUrl = getProcessorSessionUrl();
  const apiKey = getProcessorApiKey();

  if (!sessionUrl || !apiKey) {
    await updateProcessorAttempt(publicId, "declined", {
      processorStatus: "processor_not_configured",
    });

    return {
      status: "declined",
      reason: "processor_not_configured",
    };
  }

  const requestBody = {
    referenceId: publicId,
    amountCents: SUPPORT_PAYMENT_AMOUNT_CENTS,
    currency: SUPPORT_PAYMENT_CURRENCY,
    paymentMethod: input.paymentMethod,
    customer: {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
    },
  };

  const response = await fetch(sessionUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  const data = await response.json().catch(() => null);
  const processorStatus = data?.status ?? `http_${response.status}`;
  const processorPaymentId = data?.paymentId ?? data?.id ?? null;
  const status =
    response.ok && processorStatus === "completed"
      ? "completed"
      : response.ok && processorStatus !== "declined"
        ? "processing"
        : "declined";

  await updateProcessorAttempt(publicId, status, {
    processorPaymentId,
    processorStatus,
    processorPayloadHash: hashPayload(data),
  });

  return {
    status,
    reason: status === "declined" ? "payment_declined" : undefined,
  };
}

async function completeSupportPaymentWorkflow(row) {
  if (!row.receipt_email_sent_at) {
    try {
      await sendSupportPaymentReceiptEmail({
        firstName: row.first_name,
        lastName: row.last_name,
        email: row.email,
        amountCents: row.amount_cents,
        currency: row.currency,
      });
      await getDatabasePool().execute(
        `
          UPDATE support_payments
          SET receipt_email_sent_at = CURRENT_TIMESTAMP
          WHERE public_id = ?
        `,
        [row.public_id],
      );
    } catch (error) {
      console.error("Support payment receipt email failed", error);
    }
  }

  if (row.subscribe_to_newsletter && !row.newsletter_processed_at) {
    const subscriber = {
      name: `${row.first_name} ${row.last_name}`.trim(),
      email: row.email,
    };
    let shouldNotifyTeamOfNewsletterSignup = true;
    let shouldSendNewsletterWelcome = true;

    try {
      await createNewsletterSubscriber(subscriber);
    } catch (error) {
      if (isDuplicateNewsletterEmailError(error)) {
        shouldNotifyTeamOfNewsletterSignup = false;
      } else {
        shouldNotifyTeamOfNewsletterSignup = false;
        shouldSendNewsletterWelcome = false;
        console.error("Support payment newsletter signup failed", error);
      }
    }

    try {
      if (shouldNotifyTeamOfNewsletterSignup) {
        await sendNewsletterSignupEmail(subscriber);
      }

      if (shouldSendNewsletterWelcome) {
        await sendNewsletterWelcomeEmail(subscriber);
      }

      await getDatabasePool().execute(
        `
          UPDATE support_payments
          SET newsletter_processed_at = CURRENT_TIMESTAMP
          WHERE public_id = ?
        `,
        [row.public_id],
      );
    } catch (error) {
      console.error("Support payment newsletter email failed", error);
    }
  }
}

async function createSupportPayment(input) {
  const payment = await insertPendingSupportPayment(input);
  const processorResult = await requestProcessorPayment(input, payment.publicId);
  const row = await getSupportPaymentByPublicId(payment.publicId);

  if (!row) {
    throw new Error("Support payment record was not found after creation");
  }

  if (row.status === "completed") {
    await completeSupportPaymentWorkflow(row);
  }

  return {
    ...toPaymentResponse(row),
    reason: processorResult.reason,
  };
}

async function recordSupportPaymentProcessorResult(body, providedSecret) {
  const expectedSecret = getProcessorWebhookSecret();

  if (!expectedSecret || providedSecret !== expectedSecret) {
    return {
      ok: false,
      status: 401,
      error: "unauthorized",
    };
  }

  const source = body && typeof body === "object" ? body : {};
  const publicId = normalizeText(source.referenceId);
  const processorPaymentId = normalizeText(source.paymentId);
  const processorStatus = normalizeText(source.status);
  const amountCents = Number(source.amountCents);
  const currency = normalizeText(source.currency).toUpperCase();

  if (
    !publicId ||
    !processorPaymentId ||
    !terminalStatuses.includes(processorStatus) ||
    amountCents !== SUPPORT_PAYMENT_AMOUNT_CENTS ||
    currency !== SUPPORT_PAYMENT_CURRENCY
  ) {
    return {
      ok: false,
      status: 400,
      error: "validation_error",
    };
  }

  await updateProcessorAttempt(publicId, processorStatus, {
    processorPaymentId,
    processorStatus,
    processorPayloadHash: hashPayload(body),
  });
  const row = await getSupportPaymentByPublicId(publicId);

  if (!row) {
    return {
      ok: false,
      status: 404,
      error: "not_found",
    };
  }

  if (row.status === "completed") {
    await completeSupportPaymentWorkflow(row);
  }

  return {
    ok: true,
    status: 200,
    payment: toPaymentResponse(row),
  };
}

module.exports = {
  createSupportPayment,
  getSupportPaymentStatus,
  isPaymentProcessorConfigured,
  recordSupportPaymentProcessorResult,
  validateSupportPayment,
};

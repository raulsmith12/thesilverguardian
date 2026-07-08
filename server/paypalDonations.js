const { getDatabasePool } = require("./database");
const {
  sendNewsletterSignupEmail,
  sendNewsletterWelcomeEmail,
  sendPaypalDonationThankYouEmail,
} = require("./emailNotifications");
const {
  createNewsletterSubscriber,
  isDuplicateNewsletterEmailError,
} = require("./newsletterSubscribers");

const PAYPAL_SANDBOX_API_BASE_URL = "https://api-m.sandbox.paypal.com";
const PAYPAL_LIVE_API_BASE_URL = "https://api-m.paypal.com";
const DONATION_AMOUNT_CENTS = 100;
const DONATION_CURRENCY = "USD";

class PaypalApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = "PaypalApiError";
    this.status = status;
    this.details = details;
  }
}

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getPaypalApiBaseUrl() {
  return process.env.PAYPAL_MODE === "live"
    ? PAYPAL_LIVE_API_BASE_URL
    : PAYPAL_SANDBOX_API_BASE_URL;
}

function getFrontendBaseUrl() {
  return (
    process.env.FRONTEND_BASE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

function getDonationReturnUrl(status, options = {}) {
  const url = new URL("/fundraising", getFrontendBaseUrl());
  url.searchParams.set("paypal", status);

  if (options.skipNewsletterSignup) {
    url.searchParams.set("newsletterOptOut", "true");
  }

  return url.toString();
}

function parseAmountCents(value) {
  const amount = Number.parseFloat(value ?? "");

  if (!Number.isFinite(amount)) {
    return 0;
  }

  return Math.round(amount * 100);
}

function getDonorName(order) {
  const givenName = order.payer?.name?.given_name?.trim() ?? "";
  const surname = order.payer?.name?.surname?.trim() ?? "";
  const fullName = `${givenName} ${surname}`.trim();

  return fullName || "PayPal donor";
}

async function getPaypalAccessToken() {
  const credentials = Buffer.from(
    `${getRequiredEnv("PAYPAL_CLIENT_ID")}:${getRequiredEnv(
      "PAYPAL_CLIENT_SECRET",
    )}`,
  ).toString("base64");

  const response = await fetch(`${getPaypalApiBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.access_token) {
    throw new PaypalApiError(
      "PayPal access token request failed",
      response.status,
      data,
    );
  }

  return data.access_token;
}

async function paypalRequest(path, init = {}) {
  const accessToken = await getPaypalAccessToken();
  const response = await fetch(`${getPaypalApiBaseUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new PaypalApiError("PayPal API request failed", response.status, data);
  }

  return data;
}

async function createPaypalDonationOrder(options = {}) {
  const order = await paypalRequest("/v2/checkout/orders", {
    method: "POST",
    headers: {
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: DONATION_CURRENCY,
            value: "1.00",
          },
          description: "Score a Goal Campaign donation",
        },
      ],
      application_context: {
        brand_name: "The Silver Guardian",
        landing_page: "NO_PREFERENCE",
        shipping_preference: "NO_SHIPPING",
        user_action: "PAY_NOW",
        return_url: getDonationReturnUrl("return", options),
        cancel_url: getDonationReturnUrl("cancel", options),
      },
    }),
  });

  const approvalUrl = order.links?.find((link) => link.rel === "approve")?.href;

  if (!approvalUrl) {
    throw new Error("PayPal did not return an approval URL");
  }

  return {
    orderId: order.id,
    approvalUrl,
  };
}

async function getPaypalOrder(orderId) {
  return paypalRequest(`/v2/checkout/orders/${orderId}`);
}

async function capturePaypalOrder(orderId) {
  return paypalRequest(`/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Prefer: "return=representation",
    },
  });
}

async function paypalDonationEmailExists(email) {
  const [rows] = await getDatabasePool().execute(
    `
      SELECT id
      FROM paypal_donations
      WHERE email_normalized = LOWER(?)
      LIMIT 1
    `,
    [email],
  );

  return rows.length > 0;
}

async function captureAndRecordPaypalDonation(orderId, options = {}) {
  const approvedOrder = await getPaypalOrder(orderId);
  const email = approvedOrder.payer?.email_address?.trim().toLowerCase();

  if (!email) {
    throw new Error("PayPal order did not include a payer email address");
  }

  if (await paypalDonationEmailExists(email)) {
    return {
      ok: false,
      reason: "duplicate_email",
    };
  }

  const capture = await capturePaypalOrder(orderId);
  const donorName = getDonorName(capture);
  const capturedPayment = capture.purchase_units?.[0]?.payments?.captures?.[0];
  const amountCents = parseAmountCents(capturedPayment?.amount?.value);
  const currency = capturedPayment?.amount?.currency_code ?? DONATION_CURRENCY;

  if (
    capturedPayment?.status !== "COMPLETED" ||
    amountCents !== DONATION_AMOUNT_CENTS ||
    currency !== DONATION_CURRENCY
  ) {
    throw new Error("PayPal capture did not match the expected donation");
  }

  const [result] = await getDatabasePool().execute(
    `
      INSERT INTO paypal_donations (
        name,
        email,
        amount_cents,
        currency,
        status,
        paypal_order_id,
        paypal_capture_id,
        paypal_payer_id,
        raw_payload
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      donorName,
      email,
      amountCents,
      currency,
      "completed",
      orderId,
      capturedPayment.id ?? null,
      capture.payer?.payer_id ?? approvedOrder.payer?.payer_id ?? null,
      JSON.stringify(capture),
    ],
  );

  try {
    await sendPaypalDonationThankYouEmail({
      name: donorName,
      email,
      amountCents,
      currency,
    });
  } catch (error) {
    console.error("PayPal donor thank-you email failed", error);
  }

  if (!options.skipNewsletterSignup) {
    const subscriber = {
      name: donorName,
      email,
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
        console.error("PayPal donor newsletter signup failed", error);
      }
    }

    try {
      if (shouldNotifyTeamOfNewsletterSignup) {
        await sendNewsletterSignupEmail(subscriber);
      }

      if (shouldSendNewsletterWelcome) {
        await sendNewsletterWelcomeEmail(subscriber);
      }
    } catch (error) {
      console.error("PayPal donor newsletter email failed", error);
    }
  }

  return {
    ok: true,
    id: result.insertId,
  };
}

function isDuplicatePaypalDonationError(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ER_DUP_ENTRY"
  );
}

module.exports = {
  PaypalApiError,
  captureAndRecordPaypalDonation,
  createPaypalDonationOrder,
  isDuplicatePaypalDonationError,
  paypalDonationEmailExists,
};

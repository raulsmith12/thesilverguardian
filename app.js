const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const {
  createContactSubmission,
  isDuplicateContactEmailError,
  validateContactSubmission,
} = require("./server/contactSubmissions");
const { closeDatabasePool, pingDatabase } = require("./server/database");
const {
  sendContactSubmissionEmail,
  sendNewsletterSignupEmail,
  sendNewsletterWelcomeEmail,
  verifyEmailTransport,
} = require("./server/emailNotifications");
const {
  createNewsletterSubscriber,
  isDuplicateNewsletterEmailError,
  validateNewsletterSubscriber,
} = require("./server/newsletterSubscribers");
const {
  createSupportPayment,
  getSupportPaymentStatus,
  isPaymentProcessorConfigured,
  recordSupportPaymentProcessorResult,
  validateSupportPayment,
} = require("./server/supportPayments");

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;
const apiBuild = {
  sourceVersion: "support-payment-processor-20260709",
  gitSha:
    process.env.GIT_SHA ??
    process.env.COMMIT_SHA ??
    process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.RENDER_GIT_COMMIT ??
    process.env.RAILWAY_GIT_COMMIT_SHA ??
    null,
};

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("New Node app is live");
});

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    version: "fresh-node-app-001",
    sourceVersion: apiBuild.sourceVersion,
    timestamp: new Date().toISOString(),
  });
});

app.get("/health/version", (_req, res) => {
  res.json({
    ok: true,
    ...apiBuild,
    nodeEnv: process.env.NODE_ENV ?? null,
    paymentProcessorConfigured: isPaymentProcessorConfigured(),
    frontendBaseUrl:
      process.env.FRONTEND_BASE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? null,
    timestamp: new Date().toISOString(),
  });
});

app.get("/health/database", async (_req, res) => {
  try {
    await pingDatabase();

    res.json({
      ok: true,
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Database health check failed", error);

    res.status(503).json({
      ok: false,
      database: "unavailable",
      timestamp: new Date().toISOString(),
    });
  }
});

app.get("/health/email", async (_req, res) => {
  try {
    await verifyEmailTransport();

    res.json({
      ok: true,
      email: "ready",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Email health check failed", error);

    res.status(503).json({
      ok: false,
      email: "unavailable",
      timestamp: new Date().toISOString(),
    });
  }
});

app.post("/contact", async (req, res) => {
  const validation = validateContactSubmission(req.body);

  if (!validation.ok) {
    res.status(400).json({
      ok: false,
      error: "validation_error",
      fields: validation.errors,
    });
    return;
  }

  try {
    const id = await createContactSubmission(validation.data);
    await sendContactSubmissionEmail(validation.data);

    res.status(201).json({
      ok: true,
      id,
    });
  } catch (error) {
    if (isDuplicateContactEmailError(error)) {
      res.status(409).json({
        ok: false,
        error: "duplicate_email",
      });
      return;
    }

    console.error("Contact submission workflow failed", error);

    res.status(500).json({
      ok: false,
      error: "server_error",
    });
  }
});

app.post("/newsletter", async (req, res) => {
  const validation = validateNewsletterSubscriber(req.body);

  if (!validation.ok) {
    res.status(400).json({
      ok: false,
      error: "validation_error",
      fields: validation.errors,
    });
    return;
  }

  try {
    const id = await createNewsletterSubscriber(validation.data);
    await sendNewsletterSignupEmail(validation.data);
    await sendNewsletterWelcomeEmail(validation.data);

    res.status(201).json({
      ok: true,
      id,
    });
  } catch (error) {
    if (isDuplicateNewsletterEmailError(error)) {
      res.status(409).json({
        ok: false,
        error: "duplicate_email",
      });
      return;
    }

    console.error("Newsletter signup workflow failed", error);

    res.status(500).json({
      ok: false,
      error: "server_error",
    });
  }
});

app.post("/support-payments", async (req, res) => {
  const validation = validateSupportPayment(req.body);

  if (!validation.ok) {
    res.status(400).json({
      ok: false,
      error: "validation_error",
      fields: validation.errors,
    });
    return;
  }

  try {
    const payment = await createSupportPayment(validation.data);
    const statusCode = payment.status === "declined" ? 402 : 201;

    res.status(statusCode).json({
      ok: true,
      ...payment,
    });
  } catch (error) {
    console.error("Support payment creation failed", error);

    res.status(500).json({
      ok: false,
      error: "support_payment_error",
    });
  }
});

app.get("/support-payments/:paymentId", async (req, res) => {
  const paymentId =
    typeof req.params.paymentId === "string" ? req.params.paymentId.trim() : "";

  if (!paymentId) {
    res.status(400).json({
      ok: false,
      error: "validation_error",
    });
    return;
  }

  try {
    const payment = await getSupportPaymentStatus(paymentId);

    if (!payment) {
      res.status(404).json({
        ok: false,
        error: "not_found",
      });
      return;
    }

    res.json({
      ok: true,
      ...payment,
    });
  } catch (error) {
    console.error("Support payment status lookup failed", error);

    res.status(500).json({
      ok: false,
      error: "support_payment_status_error",
    });
  }
});

app.post("/support-payments/webhook", async (req, res) => {
  try {
    const result = await recordSupportPaymentProcessorResult(
      req.body,
      req.get("x-payment-processor-secret"),
    );

    if (!result.ok) {
      res.status(result.status).json({
        ok: false,
        error: result.error,
      });
      return;
    }

    res.status(result.status).json({
      ok: true,
      ...result.payment,
    });
  } catch (error) {
    console.error("Support payment webhook failed", error);

    res.status(500).json({
      ok: false,
      error: "support_payment_webhook_error",
    });
  }
});

function startServer() {
  const server = app.listen(port, () => {
    console.log(`The Silver Guardian backend is running on port ${port}`);
  });

  async function shutdown(signal) {
    console.log(`Received ${signal}. Closing backend resources.`);

    server.close(async () => {
      await closeDatabasePool();
      process.exit(0);
    });
  }

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = app;
module.exports.startServer = startServer;

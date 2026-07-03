import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  createContactSubmission,
  isDuplicateContactEmailError,
  validateContactSubmission,
} from "./contactSubmissions";
import { closeDatabasePool, pingDatabase } from "./database";
import {
  sendContactSubmissionEmail,
  sendNewsletterSignupEmail,
  sendNewsletterWelcomeEmail,
  verifyEmailTransport,
} from "./emailNotifications";
import {
  createNewsletterSubscriber,
  isDuplicateNewsletterEmailError,
  validateNewsletterSubscriber,
} from "./newsletterSubscribers";
import {
  captureAndRecordPaypalDonation,
  createPaypalDonationOrder,
  isDuplicatePaypalDonationError,
} from "./paypalDonations";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "the-silver-guardian-api",
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

app.post("/paypal/orders", async (_req, res) => {
  try {
    const order = await createPaypalDonationOrder();

    res.status(201).json({
      ok: true,
      ...order,
    });
  } catch (error) {
    console.error("PayPal order creation failed", error);

    res.status(500).json({
      ok: false,
      error: "paypal_order_error",
    });
  }
});

app.post("/paypal/orders/:orderId/capture", async (req, res) => {
  const orderId =
    typeof req.params.orderId === "string" ? req.params.orderId.trim() : "";

  if (!orderId) {
    res.status(400).json({
      ok: false,
      error: "validation_error",
    });
    return;
  }

  try {
    const result = await captureAndRecordPaypalDonation(orderId);

    if (!result.ok) {
      res.status(409).json({
        ok: false,
        error: result.reason,
      });
      return;
    }

    res.status(201).json({
      ok: true,
      id: result.id,
    });
  } catch (error) {
    if (isDuplicatePaypalDonationError(error)) {
      res.status(409).json({
        ok: false,
        error: "duplicate_email",
      });
      return;
    }

    console.error("PayPal capture workflow failed", error);

    res.status(500).json({
      ok: false,
      error: "paypal_capture_error",
    });
  }
});

const server = app.listen(port, () => {
  console.log(`The Silver Guardian backend is running on port ${port}`);
});

async function shutdown(signal: NodeJS.Signals) {
  console.log(`Received ${signal}. Closing backend resources.`);

  server.close(async () => {
    await closeDatabasePool();
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

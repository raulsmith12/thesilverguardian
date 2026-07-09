# Database

This directory contains the first MySQL schema for the site backend.

## Tables

- `newsletter_subscribers`: registered newsletter subscribers with `name`, unique `email`, and `date_joined`.
- `contact_form_submissions`: contact form records with `name`, unique `email`, `subject`, `message`, and `submitted_at`.
- `paypal_donations`: PayPal donation records with donor identity, indexed `email`, amount, currency, PayPal identifiers, status, and raw webhook/order payload storage.
- `support_payments`: $1 support payment records for the custom processor. The table stores customer identity, chosen payment method, status, processor identifiers, and a SHA-256 payload hash only. It intentionally does not store card numbers, CVV, wallet tokens, or raw processor payloads.

The tables are intentionally independent. Email uniqueness is enforced for newsletter subscribers and contact form submissions with generated lowercase email columns and unique keys. Support payments can include repeated customer emails, while public payment IDs and processor payment IDs remain unique. Support payments are constrained to exactly 100 cents in USD.

Apply the schema with a MySQL client:

```bash
mysql --host="$DB_HOST" --port="$DB_PORT" --user="$DB_USER" --password="$DB_PASSWORD" "$DB_NAME" < database/schema.sql
```

## Backend Notifications

The Express backend sends email notifications for contact form submissions and newsletter signups. Configure these SMTP variables before enabling form submissions in an environment:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=notifications@example.com
SMTP_PASSWORD=password
MAIL_FROM="The Silver Guardian <notifications@example.com>"
MAIL_TO=team@thesilverguardian.com
```

Use `GET /api/health/email` to verify the SMTP transport.

## Payment Processor

The custom processor integration expects a processor-side tokenized/hosted payment flow. The site must not collect or store raw card data. Configure these variables once processor details are available:

```bash
PAYMENT_PROCESSOR_NAME=custom
PAYMENT_PROCESSOR_SESSION_URL=https://processor.example.com/payments
PAYMENT_PROCESSOR_API_KEY=processor-api-key
PAYMENT_PROCESSOR_WEBHOOK_SECRET=shared-webhook-secret
```

Processor requests are locked to `$1.00 USD` by the backend and database. Webhook payloads must report `referenceId`, `paymentId`, `status`, `amountCents`, and `currency`.

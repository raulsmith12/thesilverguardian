# Database

This directory contains the first MySQL schema for the site backend.

## Tables

- `newsletter_subscribers`: registered newsletter subscribers with `name`, unique `email`, and `date_joined`.
- `contact_form_submissions`: contact form records with `name`, unique `email`, `subject`, `message`, and `submitted_at`.
- `paypal_donations`: PayPal donation records with donor identity, unique `email`, amount, currency, PayPal identifiers, status, and raw webhook/order payload storage.

The tables are intentionally independent. Email uniqueness is enforced with generated lowercase email columns and unique keys.

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

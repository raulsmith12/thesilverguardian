-- Initial MySQL schema for The Silver Guardian.
-- Tables are intentionally independent; no foreign keys are required for these records.

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  email_normalized VARCHAR(320) GENERATED ALWAYS AS (LOWER(email)) STORED,
  date_joined TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY newsletter_subscribers_email_unique (email_normalized)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  email_normalized VARCHAR(320) GENERATED ALWAYS AS (LOWER(email)) STORED,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY contact_form_submissions_email_unique (email_normalized)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS paypal_donations (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  email_normalized VARCHAR(320) GENERATED ALWAYS AS (LOWER(email)) STORED,
  amount_cents INT UNSIGNED NOT NULL,
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  status VARCHAR(50) NOT NULL,
  paypal_order_id VARCHAR(255),
  paypal_capture_id VARCHAR(255),
  paypal_payer_id VARCHAR(255),
  raw_payload JSON,
  donated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY paypal_donations_email_index (email_normalized),
  UNIQUE KEY paypal_donations_order_id_unique (paypal_order_id),
  UNIQUE KEY paypal_donations_capture_id_unique (paypal_capture_id),
  CONSTRAINT paypal_donations_amount_positive CHECK (amount_cents > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

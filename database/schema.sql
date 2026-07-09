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

CREATE TABLE IF NOT EXISTS support_payments (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  public_id CHAR(36) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(320) NOT NULL,
  email_normalized VARCHAR(320) GENERATED ALWAYS AS (LOWER(email)) STORED,
  amount_cents SMALLINT UNSIGNED NOT NULL DEFAULT 100,
  currency CHAR(3) NOT NULL DEFAULT 'USD',
  status ENUM('pending', 'processing', 'completed', 'declined') NOT NULL DEFAULT 'pending',
  payment_method ENUM('card', 'apple_pay', 'google_pay') NOT NULL,
  processor_name VARCHAR(100) NOT NULL DEFAULT 'custom',
  processor_payment_id VARCHAR(255),
  processor_status VARCHAR(100),
  processor_payload_sha256 CHAR(64),
  subscribe_to_newsletter BOOLEAN NOT NULL DEFAULT FALSE,
  receipt_email_sent_at TIMESTAMP NULL,
  newsletter_processed_at TIMESTAMP NULL,
  processed_at TIMESTAMP NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY support_payments_public_id_unique (public_id),
  UNIQUE KEY support_payments_processor_payment_id_unique (processor_payment_id),
  KEY support_payments_email_index (email_normalized),
  KEY support_payments_status_index (status),
  CONSTRAINT support_payments_exact_amount CHECK (amount_cents = 100),
  CONSTRAINT support_payments_currency_usd CHECK (currency = 'USD'),
  CONSTRAINT support_payments_no_card_payload CHECK (processor_payload_sha256 IS NULL OR CHAR_LENGTH(processor_payload_sha256) = 64)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS petition_signatures (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(320) NOT NULL,
  email_normalized VARCHAR(320) GENERATED ALWAYS AS (LOWER(email)) STORED,
  postal_code VARCHAR(20) NOT NULL,
  signed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY petition_signatures_email_unique (email_normalized)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

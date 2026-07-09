ALTER TABLE paypal_donations
  DROP INDEX paypal_donations_email_unique,
  ADD INDEX paypal_donations_email_index (email_normalized);

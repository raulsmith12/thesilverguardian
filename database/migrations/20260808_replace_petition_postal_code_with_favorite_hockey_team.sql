ALTER TABLE petition_signatures
  ADD COLUMN favorite_hockey_team VARCHAR(255) NULL AFTER email_normalized;

UPDATE petition_signatures
SET favorite_hockey_team = 'Not provided (legacy signature)'
WHERE favorite_hockey_team IS NULL;

ALTER TABLE petition_signatures
  MODIFY COLUMN favorite_hockey_team VARCHAR(255) NOT NULL,
  DROP COLUMN postal_code;

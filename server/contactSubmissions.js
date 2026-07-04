const { getDatabasePool } = require("./database");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLength(value, fieldName, maxLength, errors) {
  if (!value) {
    errors[fieldName] = "Required";
    return;
  }

  if (value.length > maxLength) {
    errors[fieldName] = `Must be ${maxLength} characters or fewer`;
  }
}

function validateContactSubmission(body) {
  const source = body && typeof body === "object" ? body : {};

  const data = {
    name: normalizeText(source.name),
    email: normalizeText(source.email).toLowerCase(),
    subject: normalizeText(source.subject),
    message: normalizeText(source.message),
  };

  const errors = {};

  validateLength(data.name, "name", 255, errors);
  validateLength(data.email, "email", 320, errors);
  validateLength(data.subject, "subject", 255, errors);
  validateLength(data.message, "message", 5000, errors);

  if (data.email && !emailPattern.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
    };
  }

  return {
    ok: true,
    data,
  };
}

async function createContactSubmission(input) {
  const [result] = await getDatabasePool().execute(
    `
      INSERT INTO contact_form_submissions (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `,
    [input.name, input.email, input.subject, input.message],
  );

  return result.insertId;
}

function isDuplicateContactEmailError(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ER_DUP_ENTRY"
  );
}

module.exports = {
  createContactSubmission,
  isDuplicateContactEmailError,
  validateContactSubmission,
};

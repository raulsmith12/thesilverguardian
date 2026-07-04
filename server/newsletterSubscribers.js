const { getDatabasePool } = require("./database");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validateNewsletterSubscriber(body) {
  const source = body && typeof body === "object" ? body : {};

  const data = {
    name: normalizeText(source.name),
    email: normalizeText(source.email).toLowerCase(),
  };

  const errors = {};

  if (!data.name) {
    errors.name = "Required";
  } else if (data.name.length > 255) {
    errors.name = "Must be 255 characters or fewer";
  }

  if (!data.email) {
    errors.email = "Required";
  } else if (data.email.length > 320) {
    errors.email = "Must be 320 characters or fewer";
  } else if (!emailPattern.test(data.email)) {
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

async function createNewsletterSubscriber(input) {
  const [result] = await getDatabasePool().execute(
    `
      INSERT INTO newsletter_subscribers (name, email)
      VALUES (?, ?)
    `,
    [input.name, input.email],
  );

  return result.insertId;
}

function isDuplicateNewsletterEmailError(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ER_DUP_ENTRY"
  );
}

module.exports = {
  createNewsletterSubscriber,
  isDuplicateNewsletterEmailError,
  validateNewsletterSubscriber,
};

import type { ResultSetHeader } from "mysql2";
import { getDatabasePool } from "./database";

export type NewsletterSubscriberInput = {
  name: string;
  email: string;
};

type ValidationResult =
  | {
      ok: true;
      data: NewsletterSubscriberInput;
    }
  | {
      ok: false;
      errors: Partial<Record<keyof NewsletterSubscriberInput, string>>;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateNewsletterSubscriber(body: unknown): ValidationResult {
  const source =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  const data = {
    name: normalizeText(source.name),
    email: normalizeText(source.email).toLowerCase(),
  };

  const errors: Partial<Record<keyof NewsletterSubscriberInput, string>> = {};

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

export async function createNewsletterSubscriber(
  input: NewsletterSubscriberInput,
) {
  const [result] = await getDatabasePool().execute<ResultSetHeader>(
    `
      INSERT INTO newsletter_subscribers (name, email)
      VALUES (?, ?)
    `,
    [input.name, input.email],
  );

  return result.insertId;
}

export function isDuplicateNewsletterEmailError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ER_DUP_ENTRY"
  );
}

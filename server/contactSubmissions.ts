import type { ResultSetHeader } from "mysql2";
import { getDatabasePool } from "./database";

export type ContactSubmissionInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ValidationResult =
  | {
      ok: true;
      data: ContactSubmissionInput;
    }
  | {
      ok: false;
      errors: Partial<Record<keyof ContactSubmissionInput, string>>;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLength(
  value: string,
  fieldName: keyof ContactSubmissionInput,
  maxLength: number,
  errors: Partial<Record<keyof ContactSubmissionInput, string>>,
) {
  if (!value) {
    errors[fieldName] = "Required";
    return;
  }

  if (value.length > maxLength) {
    errors[fieldName] = `Must be ${maxLength} characters or fewer`;
  }
}

export function validateContactSubmission(body: unknown): ValidationResult {
  const source =
    body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  const data = {
    name: normalizeText(source.name),
    email: normalizeText(source.email).toLowerCase(),
    subject: normalizeText(source.subject),
    message: normalizeText(source.message),
  };

  const errors: Partial<Record<keyof ContactSubmissionInput, string>> = {};

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

export async function createContactSubmission(input: ContactSubmissionInput) {
  const [result] = await getDatabasePool().execute<ResultSetHeader>(
    `
      INSERT INTO contact_form_submissions (name, email, subject, message)
      VALUES (?, ?, ?, ?)
    `,
    [input.name, input.email, input.subject, input.message],
  );

  return result.insertId;
}

export function isDuplicateContactEmailError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ER_DUP_ENTRY"
  );
}

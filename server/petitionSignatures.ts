import type { ResultSetHeader } from "mysql2";
import { getDatabasePool } from "./database";

export type PetitionSignatureInput = { name: string; email: string; postalCode: string; consent: true };
type ValidationResult = { ok: true; data: PetitionSignatureInput } | { ok: false; errors: Partial<Record<keyof PetitionSignatureInput, string>> };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const normalizeText = (value: unknown) => typeof value === "string" ? value.trim() : "";

export function validatePetitionSignature(body: unknown): ValidationResult {
  const source = body && typeof body === "object" ? body as Record<string, unknown> : {};
  const data = { name: normalizeText(source.name), email: normalizeText(source.email).toLowerCase(), postalCode: normalizeText(source.postalCode), consent: source.consent === true };
  const errors: Partial<Record<keyof PetitionSignatureInput, string>> = {};
  if (!data.name) errors.name = "Required"; else if (data.name.length > 255) errors.name = "Must be 255 characters or fewer";
  if (!data.email) errors.email = "Required"; else if (data.email.length > 320) errors.email = "Must be 320 characters or fewer"; else if (!emailPattern.test(data.email)) errors.email = "Enter a valid email address";
  if (!data.postalCode) errors.postalCode = "Required"; else if (data.postalCode.length > 20) errors.postalCode = "Must be 20 characters or fewer";
  if (!data.consent) errors.consent = "Required";
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data: data as PetitionSignatureInput };
}

export async function createPetitionSignature(input: PetitionSignatureInput) {
  const [result] = await getDatabasePool().execute<ResultSetHeader>(`INSERT INTO petition_signatures (name, email, postal_code) VALUES (?, ?, ?)`, [input.name, input.email, input.postalCode]);
  return result.insertId;
}

export function isDuplicatePetitionEmailError(error: unknown) {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ER_DUP_ENTRY";
}

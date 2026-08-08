const { getDatabasePool } = require("./database");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const normalizeText = (value) => (typeof value === "string" ? value.trim() : "");

function validatePetitionSignature(body) {
  const source = body && typeof body === "object" ? body : {};
  const data = {
    name: normalizeText(source.name),
    email: normalizeText(source.email).toLowerCase(),
    favoriteHockeyTeam: normalizeText(source.favoriteHockeyTeam),
    consent: source.consent === true,
  };
  const errors = {};

  if (!data.name) errors.name = "Required";
  else if (data.name.length > 255) errors.name = "Must be 255 characters or fewer";
  if (!data.email) errors.email = "Required";
  else if (data.email.length > 320) errors.email = "Must be 320 characters or fewer";
  else if (!emailPattern.test(data.email)) errors.email = "Enter a valid email address";
  if (!data.favoriteHockeyTeam) errors.favoriteHockeyTeam = "Required";
  else if (data.favoriteHockeyTeam.length > 255) errors.favoriteHockeyTeam = "Must be 255 characters or fewer";
  if (!data.consent) errors.consent = "Required";

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

async function createPetitionSignature(input) {
  const [result] = await getDatabasePool().execute(
    `INSERT INTO petition_signatures (name, email, favorite_hockey_team) VALUES (?, ?, ?)`,
    [input.name, input.email, input.favoriteHockeyTeam],
  );
  return result.insertId;
}

function isDuplicatePetitionEmailError(error) {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ER_DUP_ENTRY";
}

module.exports = { createPetitionSignature, isDuplicatePetitionEmailError, validatePetitionSignature };

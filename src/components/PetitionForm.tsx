"use client";

import { type FormEvent, useState } from "react";
import { apiBaseUrl } from "@/lib/api";
import {
  emailValidationPattern,
  emailValidationTitle,
} from "@/lib/formValidation";

type Status = { type: "idle" | "success" | "error"; message: string };

export function PetitionForm({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`${apiBaseUrl}/petition`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          favoriteHockeyTeam: formData.get("favoriteHockeyTeam"),
          consent: formData.get("consent") === "on",
        }),
      });

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            response.status === 409
              ? isFrench
                ? "Une signature a déjà été enregistrée avec cette adresse courriel."
                : "This email address has already signed the petition."
              : isFrench
                ? "Votre signature n’a pas pu être ajoutée. Veuillez réessayer."
                : "Your signature could not be added. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: isFrench
          ? "Merci. Votre signature a été ajoutée."
          : "Thank you. Your signature has been added.",
      });
    } catch {
      setStatus({
        type: "error",
        message: isFrench
          ? "Votre signature n’a pas pu être ajoutée. Veuillez réessayer."
          : "Your signature could not be added. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="petition-form" onSubmit={handleSubmit}>
      <div className="petition-form__fields">
        <label>
          <span>{isFrench ? "Nom complet" : "Full name"}</span>
          <input name="name" type="text" autoComplete="name" maxLength={255} required />
        </label>
        <label>
          <span>{isFrench ? "Courriel" : "Email address"}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={320}
            pattern={emailValidationPattern}
            title={isFrench ? "Entrez une adresse courriel valide." : emailValidationTitle}
            required
          />
        </label>
        <label>
          <span>
            {isFrench
              ? "Équipe professionnelle nord-américaine de hockey préférée"
              : "Favorite professional North American hockey team"}
          </span>
          <input name="favoriteHockeyTeam" type="text" maxLength={255} required />
        </label>
      </div>

      <label className="petition-form__consent">
        <input name="consent" type="checkbox" required />
        <span>
          {isFrench
            ? "Je confirme mon appui à la vision de The Silver Guardian et j’accepte que ma signature soit comptée."
            : "I support The Silver Guardian initiative and agree to have my signature counted."}
        </span>
      </label>

      {status.type !== "idle" ? (
        <p className={`form-status form-status--${status.type}`} role="status">
          {status.message}
        </p>
      ) : null}

      <button className="site-button site-button--secondary" type="submit" disabled={isSubmitting}>
        {isSubmitting
          ? isFrench
            ? "Ajout en cours…"
            : "Adding signature…"
          : isFrench
            ? "Signer la pétition"
            : "Sign the petition"}
      </button>
      <p className="petition-form__privacy">
        {isFrench
          ? "Votre courriel ne sera pas affiché publiquement."
          : "Your email address will not be displayed publicly."}
      </p>
    </form>
  );
}

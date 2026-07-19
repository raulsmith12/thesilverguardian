"use client";

import { type FormEvent, useState } from "react";
import { apiBaseUrl } from "@/lib/api";
import {
  emailValidationPattern,
  emailValidationTitle,
} from "@/lib/formValidation";

type ContactFormStatus =
  | {
      type: "idle";
      message: "";
    }
  | {
      type: "success" | "error";
      message: string;
    };

export function ContactForm({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";
  const [status, setStatus] = useState<ContactFormStatus>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus({
      type: "idle",
      message: "",
    });

    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        const fallbackMessage =
          response.status === 409
            ? isFrench
              ? "Nous avons déjà reçu un message associé à cette adresse courriel."
              : "We already have a contact message for that email address."
            : isFrench
              ? "Votre message n’a pas pu être envoyé. Veuillez réessayer."
              : "Your message could not be sent. Please try again.";

        setStatus({
          type: "error",
          message: fallbackMessage,
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: isFrench ? "Votre message a été envoyé." : "Your message has been sent.",
      });
    } catch {
      setStatus({
        type: "error",
        message: isFrench
          ? "Votre message n’a pas pu être envoyé. Veuillez réessayer."
          : "Your message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label>
          <span>{isFrench ? "Nom" : "Name"}</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <label>
          <span>{isFrench ? "Courriel" : "Email"}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            maxLength={320}
            pattern={emailValidationPattern}
            title={emailValidationTitle}
            required
          />
        </label>
      </div>

      <label>
        <span>{isFrench ? "Objet" : "Subject"}</span>
        <input name="subject" type="text" maxLength={255} required />
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" rows={6} maxLength={5000} required />
      </label>

      {status.type !== "idle" ? (
        <p className={`form-status form-status--${status.type}`} role="status">
          {status.message}
        </p>
      ) : null}

      <button
        className="site-button site-button--primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? isFrench
            ? "Envoi en cours…"
            : "Sending..."
          : isFrench
            ? "Envoyer le message"
            : "Send Message"}
      </button>

      <p className="contact-form__disclaimer">
        {isFrench
          ? "Afin de protéger adéquatement l’intégrité de sa marque, The Silver Guardian LLC se réserve le droit de refuser ses services à toute personne, en tout temps et pour quelque raison que ce soit."
          : "In order to properly protect brand integrity, The Silver Guardian LLC reserves the right to refuse service to any person at any time or for any reason."}
      </p>
    </form>
  );
}

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

export function ContactForm() {
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
            ? "We already have a contact message for that email address."
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
        message: "Your message has been sent.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <label>
          <span>Email</span>
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
        <span>Subject</span>
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
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

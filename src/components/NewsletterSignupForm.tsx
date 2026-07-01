"use client";

import { type FormEvent, useState } from "react";
import { apiBaseUrl } from "@/lib/api";
import {
  emailValidationPattern,
  emailValidationTitle,
} from "@/lib/formValidation";

type NewsletterStatus =
  | {
      type: "idle";
      message: "";
    }
  | {
      type: "success" | "error";
      message: string;
    };

export function NewsletterSignupForm() {
  const [status, setStatus] = useState<NewsletterStatus>({
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
      const response = await fetch(`${apiBaseUrl}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
        }),
      });

      if (!response.ok) {
        const fallbackMessage =
          response.status === 409
            ? "That email address is already signed up."
            : "Signup could not be completed. Please try again.";

        setStatus({
          type: "error",
          message: fallbackMessage,
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: "You are signed up for the newsletter.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Signup could not be completed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
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
        {isSubmitting ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}

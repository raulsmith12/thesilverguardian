import nodemailer, { type Transporter } from "nodemailer";
import type { ContactSubmissionInput } from "./contactSubmissions";
import type { NewsletterSubscriberInput } from "./newsletterSubscribers";

const DEFAULT_SMTP_PORT = 587;
const DEFAULT_MAIL_TO = "team@thesilverguardian.com";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getSmtpPort() {
  const rawPort = process.env.SMTP_PORT;

  if (!rawPort) {
    return DEFAULT_SMTP_PORT;
  }

  const port = Number.parseInt(rawPort, 10);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a positive integer");
  }

  return port;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

let transporter: Transporter | undefined;

function getEmailTransporter() {
  if (!transporter) {
    const port = getSmtpPort();

    transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port,
      secure: port === 465,
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getRequiredEnv("SMTP_PASSWORD"),
      },
    });
  }

  return transporter;
}

function getMailFrom() {
  return getRequiredEnv("MAIL_FROM");
}

function getMailTo() {
  return process.env.MAIL_TO || DEFAULT_MAIL_TO;
}

export async function verifyEmailTransport() {
  await getEmailTransporter().verify();
}

export async function sendContactSubmissionEmail(
  submission: ContactSubmissionInput,
) {
  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safeSubject = escapeHtml(submission.subject);
  const safeMessage = escapeHtml(submission.message).replaceAll("\n", "<br>");

  await getEmailTransporter().sendMail({
    from: getMailFrom(),
    to: getMailTo(),
    replyTo: submission.email,
    subject: `New contact form submission: ${submission.subject}`,
    text: [
      "A new contact form submission was received.",
      "",
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Subject: ${submission.subject}`,
      "",
      submission.message,
    ].join("\n"),
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
  });
}

export async function sendNewsletterSignupEmail(
  subscriber: NewsletterSubscriberInput,
) {
  const safeName = escapeHtml(subscriber.name);
  const safeEmail = escapeHtml(subscriber.email);

  await getEmailTransporter().sendMail({
    from: getMailFrom(),
    to: getMailTo(),
    replyTo: subscriber.email,
    subject: "New newsletter signup",
    text: [
      "A new newsletter signup was received.",
      "",
      `Name: ${subscriber.name}`,
      `Email: ${subscriber.email}`,
    ].join("\n"),
    html: `
      <h2>New newsletter signup</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
    `,
  });
}

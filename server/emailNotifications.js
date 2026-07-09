const nodemailer = require("nodemailer");

const DEFAULT_SMTP_PORT = 587;
const DEFAULT_MAIL_TO = "team@thesilverguardian.com";

function getRequiredEnv(name) {
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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

let transporter;

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

async function verifyEmailTransport() {
  await getEmailTransporter().verify();
}

async function sendContactSubmissionEmail(submission) {
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

async function sendNewsletterSignupEmail(subscriber) {
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

async function sendNewsletterWelcomeEmail(subscriber) {
  const safeName = escapeHtml(subscriber.name);

  await getEmailTransporter().sendMail({
    from: getMailFrom(),
    to: subscriber.email,
    subject: "Welcome to The Silver Guardian newsletter",
    text: [
      `Hello ${subscriber.name},`,
      "",
      "Thank you for subscribing to The Silver Guardian newsletter.",
      "We will send future announcements, campaign updates, and community news to this email address.",
      "",
      "You are welcome to unsubscribe at any time.",
      "",
      "The Silver Guardian",
    ].join("\n"),
    html: `
      <p>Hello ${safeName},</p>
      <p>Thank you for subscribing to The Silver Guardian newsletter.</p>
      <p>We will send future announcements, campaign updates, and community news to this email address.</p>
      <p>You are welcome to unsubscribe at any time.</p>
      <p>The Silver Guardian</p>
    `,
  });
}

async function sendPaypalDonationThankYouEmail(donation) {
  const safeName = escapeHtml(donation.name);
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: donation.currency,
  }).format(donation.amountCents / 100);

  await getEmailTransporter().sendMail({
    from: getMailFrom(),
    to: donation.email,
    subject: "Thank you for donating to The Silver Guardian",
    text: [
      `Hello ${donation.name},`,
      "",
      `Thank you for your ${amount} donation through PayPal to The Silver Guardian.`,
      "Your support helps demonstrate community care for families affected by pediatric cancer, heart disease, and related conditions.",
      "",
      "The Silver Guardian",
    ].join("\n"),
    html: `
      <p>Hello ${safeName},</p>
      <p>Thank you for your ${amount} donation through PayPal to The Silver Guardian.</p>
      <p>Your support helps demonstrate community care for families affected by pediatric cancer, heart disease, and related conditions.</p>
      <p>The Silver Guardian</p>
    `,
  });
}

async function sendSupportPaymentReceiptEmail(payment) {
  const fullName = `${payment.firstName} ${payment.lastName}`.trim();
  const safeName = escapeHtml(fullName);
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: payment.currency,
  }).format(payment.amountCents / 100);

  await getEmailTransporter().sendMail({
    from: getMailFrom(),
    to: payment.email,
    subject: "Thank you for supporting The Silver Guardian",
    text: [
      `Hello ${fullName},`,
      "",
      `Thank you for your ${amount} support payment to The Silver Guardian.`,
      "Your support helps demonstrate community care for families affected by pediatric cancer, heart disease, and related conditions.",
      "",
      "The Silver Guardian",
    ].join("\n"),
    html: `
      <p>Hello ${safeName},</p>
      <p>Thank you for your ${amount} support payment to The Silver Guardian.</p>
      <p>Your support helps demonstrate community care for families affected by pediatric cancer, heart disease, and related conditions.</p>
      <p>The Silver Guardian</p>
    `,
  });
}

module.exports = {
  sendContactSubmissionEmail,
  sendNewsletterSignupEmail,
  sendNewsletterWelcomeEmail,
  sendPaypalDonationThankYouEmail,
  sendSupportPaymentReceiptEmail,
  verifyEmailTransport,
};

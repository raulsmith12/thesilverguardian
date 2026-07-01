export const databaseTables = {
  newsletterSubscribers: "newsletter_subscribers",
  contactFormSubmissions: "contact_form_submissions",
  paypalDonations: "paypal_donations",
} as const;

export type NewsletterSubscriber = {
  id: number;
  name: string;
  email: string;
  dateJoined: string;
};

export type NewNewsletterSubscriber = {
  name: string;
  email: string;
};

export type ContactFormSubmission = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
};

export type NewContactFormSubmission = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type PaypalDonationStatus =
  | "created"
  | "approved"
  | "captured"
  | "completed"
  | "failed"
  | "refunded";

export type PaypalDonation = {
  id: number;
  name: string;
  email: string;
  amountCents: number;
  currency: string;
  status: PaypalDonationStatus;
  paypalOrderId: string | null;
  paypalCaptureId: string | null;
  paypalPayerId: string | null;
  rawPayload: unknown | null;
  donatedAt: string;
  createdAt: string;
};

export type NewPaypalDonation = {
  name: string;
  email: string;
  amountCents: number;
  currency?: string;
  status: PaypalDonationStatus;
  paypalOrderId?: string | null;
  paypalCaptureId?: string | null;
  paypalPayerId?: string | null;
  rawPayload?: unknown | null;
};

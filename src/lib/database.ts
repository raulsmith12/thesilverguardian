export const databaseTables = {
  newsletterSubscribers: "newsletter_subscribers",
  contactFormSubmissions: "contact_form_submissions",
  paypalDonations: "paypal_donations",
  supportPayments: "support_payments",
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

export type SupportPaymentStatus =
  | "pending"
  | "processing"
  | "completed"
  | "declined";

export type SupportPaymentMethod = "card" | "apple_pay" | "google_pay";

export type SupportPayment = {
  id: number;
  publicId: string;
  firstName: string;
  lastName: string;
  email: string;
  amountCents: 100;
  currency: "USD";
  status: SupportPaymentStatus;
  paymentMethod: SupportPaymentMethod;
  processorName: string;
  processorPaymentId: string | null;
  processorStatus: string | null;
  processorPayloadSha256: string | null;
  subscribeToNewsletter: boolean;
  receiptEmailSentAt: string | null;
  newsletterProcessedAt: string | null;
  processedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

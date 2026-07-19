import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact The Silver Guardian, join the newsletter, or learn how your business can support innovative pediatric care and community initiatives.",
  path: "/contact/",
  keywords: [
    "contact The Silver Guardian",
    "Silver Guardian newsletter",
    "support pediatric care",
    "business community support",
    "pediatric charity contact",
  ],
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Contact Us</h1>
          </div>
        </section>

        <section
          className="page-content page-content--green"
          aria-label="Contact content"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="contact-layout">
              <section className="contact-email" aria-labelledby="email-title">
                <p className="section-kicker" id="email-title">
                  Email
                </p>
                <a href="mailto:team@thesilverguardian.com">
                  team@thesilverguardian.com
                </a>
              </section>

              <section
                className="newsletter-signup"
                aria-labelledby="newsletter-title"
              >
                <div>
                  <p className="section-kicker">Newsletter</p>
                  <h2 id="newsletter-title">Sign Up Here</h2>
                  <p>
                    Join the Silver Guardian newsletter for future announcements and progress updates.
                  </p>
                </div>

                <NewsletterSignupForm />
              </section>

              <section className="business-owner-callout">
                <h3>Business Owners:</h3>
                <p>
                  If you are a business owner and wish to help support The
                  Silver Guardian,{" "}
                  <a href="mailto:team@thesilverguardian.com?subject=QR%20Code%20Request">
                    click here
                  </a>{" "}
                  to request a QR code
                </p>
              </section>

              <section
                className="general-contact"
                aria-labelledby="general-contact-title"
              >
                <div>
                  <p className="section-kicker">General Contact</p>
                  <h2 className="section-title" id="general-contact-title">
                    Send Us a Message
                  </h2>
                </div>

                <ContactForm />
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

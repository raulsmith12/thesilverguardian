import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";

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

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

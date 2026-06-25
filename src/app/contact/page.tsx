import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

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

        <section className="page-content" aria-label="Contact content">
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
                  <h2 id="newsletter-title">Sign up for updates</h2>
                  <p>
                    Join the Silver Guardian newsletter for future announcements and progress updates.
                  </p>
                </div>

                <form className="newsletter-form">
                  <label>
                    <span>Name</span>
                    <input
                      name="newsletter_name"
                      type="text"
                      autoComplete="name"
                    />
                  </label>

                  <label>
                    <span>Email</span>
                    <input
                      name="newsletter_email"
                      type="email"
                      autoComplete="email"
                    />
                  </label>

                  <button className="site-button site-button--primary" type="submit">
                    Sign Up
                  </button>
                </form>
              </section>

              <form className="contact-form">
                <div className="contact-form__row">
                  <label>
                    <span>Name</span>
                    <input name="name" type="text" autoComplete="name" />
                  </label>

                  <label>
                    <span>Email</span>
                    <input name="email" type="email" autoComplete="email" />
                  </label>
                </div>

                <label>
                  <span>Subject</span>
                  <input name="subject" type="text" />
                </label>

                <label>
                  <span>Message</span>
                  <textarea name="message" rows={6} />
                </label>

                <button className="site-button site-button--primary" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

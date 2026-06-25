import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Privacy Policy</h1>
          </div>
        </section>

        <section className="page-content" aria-label="Privacy policy content">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <article className="privacy-policy">
              <p className="section-kicker">Last updated June 21, 2026</p>

              <section>
                <h2>Overview</h2>
                <p>
                  The Silver Guardian respects the privacy of people who visit this website, contact us, participate in community support efforts, or otherwise share information with us. This policy explains the basic ways we handle information.
                </p>
              </section>

              <section>
                <h2>Information We May Collect</h2>
                <p>
                  We may collect information that you choose to provide, such as your name, email address, phone number, message details, event interest, support-related communications, or other information you submit through a form or direct contact.
                </p>
                <p>
                  We may also receive basic technical information from normal website operation, such as browser type, device information, pages visited, and general usage information.
                </p>
              </section>

              <section>
                <h2>How We Use Information</h2>
                <p>
                  We use information to respond to inquiries, communicate about The Silver Guardian, coordinate community support efforts, improve the website, and maintain appropriate records for our activities.
                </p>
              </section>

              <section>
                <h2>Information Sharing</h2>
                <p>
                  We do not sell personal information. We do not provide personal information to third-party data brokers. We do not share personal information for third-party marketing purposes.
                </p>
                <p>
                  We may share information only when needed to operate the website, respond to your request, support a service you asked us to provide, comply with legal obligations, protect our organization, or with your permission.
                </p>
              </section>

              <section>
                <h2>Public Display of Information</h2>
                <p>
                  We will not display a person&apos;s name, likeness, or story on this website unless the affected party has specifically granted permission.
                </p>
              </section>

              <section>
                <h2>Security and Retention</h2>
                <p>
                  We take reasonable steps to protect information submitted to us. No website or electronic communication system can be guaranteed completely secure, but we aim to limit access and keep information only as long as reasonably needed for the purposes described in this policy.
                </p>
              </section>

              <section>
                <h2>Your Choices</h2>
                <p>
                  You may contact us to request that we update, correct, or remove personal information you have provided to us, subject to any legal or operational recordkeeping needs.
                </p>
              </section>

              <section>
                <h2>Contact</h2>
                <p>
                  Questions about this privacy policy can be sent to{" "}
                  <a href="mailto:team@thesilverguardian.com">
                    team@thesilverguardian.com
                  </a>
                  .
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

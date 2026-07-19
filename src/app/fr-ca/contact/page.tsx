import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Nous joindre",
  description:
    "Communiquez avec The Silver Guardian, abonnez-vous à l’infolettre ou découvrez comment votre entreprise peut appuyer les soins pédiatriques novateurs.",
  path: "/fr-ca/contact/",
  locale: "fr-CA",
  keywords: [
    "joindre The Silver Guardian",
    "infolettre Silver Guardian",
    "appuyer les soins pédiatriques",
    "soutien des entreprises",
  ],
});

export default function FrenchContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Nous joindre</h1>
          </div>
        </section>

        <section className="page-content page-content--green" aria-label="Coordonnées">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="contact-layout">
              <section className="contact-email" aria-labelledby="email-title-fr">
                <p className="section-kicker" id="email-title-fr">Courriel</p>
                <a href="mailto:team@thesilverguardian.com">team@thesilverguardian.com</a>
              </section>

              <section className="newsletter-signup" aria-labelledby="newsletter-title-fr">
                <div>
                  <p className="section-kicker">Infolettre</p>
                  <h2 id="newsletter-title-fr">Inscrivez-vous ici</h2>
                  <p>Abonnez-vous à l’infolettre de The Silver Guardian pour recevoir les annonces et les nouvelles sur nos progrès.</p>
                </div>
                <NewsletterSignupForm locale="fr-CA" />
              </section>

              <section className="business-owner-callout">
                <h3>Propriétaires d’entreprise :</h3>
                <p>Si vous êtes propriétaire d’une entreprise et souhaitez appuyer The Silver Guardian, <a href="mailto:team@thesilverguardian.com?subject=Demande%20de%20code%20QR">cliquez ici</a> pour demander un code QR.</p>
              </section>

              <section className="general-contact" aria-labelledby="general-contact-title-fr">
                <div>
                  <p className="section-kicker">Demande générale</p>
                  <h2 className="section-title" id="general-contact-title-fr">Envoyez-nous un message</h2>
                </div>
                <ContactForm locale="fr-CA" />
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

import type { Metadata } from "next";
import { InitiativeAlliesContent } from "@/components/InitiativeAlliesContent";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Alliés de l’initiative",
  description: "Les alliés de l’initiative de The Silver Guardian seront annoncés bientôt.",
  path: "/fr-ca/initiative-allies/",
  locale: "fr-CA",
  keywords: ["Alliés de l’initiative", "The Silver Guardian"],
});

export default function InitiativeAlliesPage() {
  return (
    <div className="flex flex-col">
      <Navigation locale="fr-CA" />
      <main>
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Alliés de l’initiative</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-8">
            <InitiativeAlliesContent locale="fr-CA" />
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

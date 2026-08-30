import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SeedsOfHopeFestivalContent } from "@/components/SeedsOfHopeFestivalContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Festival Seeds of Hope",
  description:
    "Découvrez le festival musical et caritatif Seeds of Hope prévu par The Silver Guardian et sa vision d’accorder chaque année 32 souhaits liés au hockey sur glace.",
  path: "/fr-ca/seeds-of-hope-festival/",
  locale: "fr-CA",
  keywords: [
    "festival Seeds of Hope",
    "festival musical caritatif",
    "souhaits liés au hockey",
    "événement caritatif cancer pédiatrique",
  ],
});

export default function FrenchSeedsOfHopeFestivalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Festival Seeds of Hope</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <SeedsOfHopeFestivalContent locale="fr-CA" />
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

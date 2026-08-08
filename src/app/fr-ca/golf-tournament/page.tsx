import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GolfTournamentContent } from "@/components/GolfTournamentContent";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tournoi de golf",
  description:
    "Découvrez les tournois de golf caritatifs annuels prévus par The Silver Guardian pour soutenir les communautés touchées par le cancer et les maladies cardiaques pédiatriques.",
  path: "/fr-ca/golf-tournament/",
  locale: "fr-CA",
  keywords: [
    "tournoi de golf",
    "tournoi de golf caritatif",
    "collecte de fonds cancer pédiatrique",
    "collecte de fonds maladies cardiaques pédiatriques",
  ],
});

export default function FrenchGolfTournamentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Tournoi de golf</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <GolfTournamentContent locale="fr-CA" />
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

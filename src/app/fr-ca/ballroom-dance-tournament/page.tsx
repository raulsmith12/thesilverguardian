import type { Metadata } from "next";
import { BallroomDanceTournamentContent } from "@/components/BallroomDanceTournamentContent";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tournoi de danse de salon",
  description:
    "Découvrez le tournoi annuel de danse de salon prévu par The Silver Guardian pour soutenir les communautés touchées par le cancer et les maladies cardiaques pédiatriques.",
  path: "/fr-ca/ballroom-dance-tournament/",
  locale: "fr-CA",
  keywords: [
    "tournoi de danse de salon",
    "concours de danse caritatif",
    "collecte de fonds thérapie par le mouvement",
    "collecte de fonds cancer pédiatrique",
  ],
});

export default function FrenchBallroomDanceTournamentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Tournoi de danse de salon</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <BallroomDanceTournamentContent locale="fr-CA" />
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

import type { Metadata } from "next";
import { BallroomDanceTournamentContent } from "@/components/BallroomDanceTournamentContent";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ballroom Dance Tournament",
  description:
    "Learn about The Silver Guardian's planned annual ballroom dance tournament supporting pediatric cancer and heart disease communities through movement and resilience.",
  path: "/ballroom-dance-tournament/",
  keywords: [
    "ballroom dance tournament",
    "charity dance competition",
    "movement therapy fundraiser",
    "pediatric cancer fundraiser",
    "The Silver Guardian fundraising",
  ],
});

export default function BallroomDanceTournamentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Ballroom Dance Tournament</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <BallroomDanceTournamentContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

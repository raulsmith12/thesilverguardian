import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GolfTournamentContent } from "@/components/GolfTournamentContent";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Golf Tournament",
  description:
    "Learn about The Silver Guardian's planned annual charity golf tournaments supporting pediatric cancer and heart disease communities.",
  path: "/golf-tournament/",
  keywords: [
    "golf tournament",
    "charity golf tournament",
    "pediatric cancer fundraiser",
    "pediatric heart disease fundraiser",
    "The Silver Guardian fundraising",
  ],
});

export default function GolfTournamentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Golf Tournament</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <GolfTournamentContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

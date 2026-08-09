import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FundraisingContent } from "@/components/FundraisingContent";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Score a Goal Fundraising Campaign",
  description:
    "Support The Silver Guardian through the Score a Goal campaign and upcoming community events benefiting pediatric cancer and heart disease communities.",
  path: "/fundraising/",
  keywords: [
    "Score a Goal campaign",
    "pediatric cancer fundraiser",
    "pediatric heart disease fundraiser",
    "hockey fundraising",
    "The Silver Guardian fundraising",
  ],
});

export default function FundraisingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Score a Goal</h1>
          </div>
        </section>

        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <FundraisingContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

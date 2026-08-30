import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SeedsOfHopeFestivalContent } from "@/components/SeedsOfHopeFestivalContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Seeds of Hope Festival",
  description:
    "Learn about The Silver Guardian's planned Seeds of Hope music and charity festival and its vision for granting 32 ice hockey-related wishes each year.",
  path: "/seeds-of-hope-festival/",
  keywords: [
    "Seeds of Hope Festival",
    "charity music festival",
    "hockey wish granting",
    "pediatric cancer charity event",
    "The Silver Guardian events",
  ],
});

export default function SeedsOfHopeFestivalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Seeds of Hope Festival</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <SeedsOfHopeFestivalContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

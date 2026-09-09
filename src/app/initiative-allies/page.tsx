import type { Metadata } from "next";
import { InitiativeAlliesContent } from "@/components/InitiativeAlliesContent";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Initiative Allies",
  description: "The Silver Guardian’s initiative allies are coming soon.",
  path: "/initiative-allies/",
  keywords: ["Initiative Allies", "The Silver Guardian"],
});

export default function InitiativeAlliesPage() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <main>
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Initiative Allies</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-8">
            <InitiativeAlliesContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

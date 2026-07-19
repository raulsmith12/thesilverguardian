import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FundraisingContent } from "@/components/FundraisingContent";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Campagne de financement Marquez un but",
  description:
    "Appuyez The Silver Guardian grâce à la campagne Marquez un but et aux événements communautaires au profit des communautés touchées par le cancer et les maladies cardiaques pédiatriques.",
  path: "/fr-ca/fundraising/",
  locale: "fr-CA",
  keywords: [
    "campagne Marquez un but",
    "collecte de fonds cancer pédiatrique",
    "collecte de fonds maladies cardiaques pédiatriques",
    "financement hockey",
    "tournoi de golf caritatif",
  ],
});

export default function FrenchFundraisingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Marquez un but</h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <FundraisingContent locale="fr-CA" />
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

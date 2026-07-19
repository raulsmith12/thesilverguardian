import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "32 souhaits dans 32 villes",
  description:
    "Découvrez l’objectif de The Silver Guardian : réaliser chaque année 32 souhaits liés au hockey pour des enfants dans 32 villes nord-américaines.",
  path: "/fr-ca/32-wishes/",
  locale: "fr-CA",
  keywords: [
    "32 souhaits dans 32 villes",
    "souhaits de hockey pour enfants",
    "souhaits cancer pédiatrique",
    "soutien maladies cardiaques pédiatriques",
    "organisme hockey pour enfants",
  ],
});

export default function FrenchWishesPage() {
  const wishes = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>32 souhaits dans 32 villes</h1>
          </div>
        </section>
        <section className="page-content">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="wishes-intro">
              <p>L’un de nos objectifs est de réaliser chaque année 32 souhaits liés au hockey sur glace pour de courageux enfants dans 32 villes, lors d’un seul événement conçu pour répandre l’espoir et la joie au sein de la communauté touchée par le cancer et les maladies cardiaques pédiatriques.</p>
              <p>Revenez régulièrement pour découvrir quels membres de la communauté nord-américaine du hockey professionnel ont accepté de s’associer à nous dans cette initiative.</p>
            </div>
            <div className="wishes-grid">
              {["Ouest", "Est"].map((region) => (
                <section className="wishes-region" aria-labelledby={`region-${region}`} key={region}>
                  <h2 id={`region-${region}`}>{region}</h2>
                  <h4 className="text-center">Qui sera le premier?</h4>
                  <div className="wishes-placeholder-grid">
                    {wishes.map((wishNumber) => (
                      <article className="wish-skyline-card" key={`${region}-${wishNumber}`} aria-label={`${region}, souhait ${wishNumber}`}>
                        <div className="wish-skyline-card__sky" aria-hidden="true">
                          <div className="wish-skyline-card__buildings">
                            {[42, 61, 50, 72, 47, 57].map((height, index) => (
                              <span
                                className={`wish-building wish-building--${["flat", "step", "slope", "antenna", "cap", "dome"][index]}`}
                                key={index}
                                style={{ height: `${height + ((wishNumber + index) % 5)}%`, width: `${11 + (index % 4)}%` }}
                              />
                            ))}
                          </div>
                        </div>
                        <span>Souhait {wishNumber}</span>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

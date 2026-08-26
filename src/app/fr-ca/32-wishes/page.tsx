import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WishSignatureCount } from "@/components/WishProgress";
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
  const regions = {
    Ouest: ["Anaheim", "Calgary", "Chicago", "Dallas", "Denver", "Edmonton", "Los Angeles", "Minnesota", "Nashville", "San Jose", "Seattle", "St. Louis", "Utah", "Vancouver", "Vegas", "Winnipeg"],
    Est: ["Boston", "Buffalo", "Carolina", "Columbus", "Detroit", "Florida", "Long Island", "Montreal", "New Jersey", "New York", "Ottawa", "Philadelphia", "Pittsburgh", "Tampa", "Toronto", "Washington DC"],
  } as const;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16"><h1>32 souhaits dans 32 villes</h1></div>
        </section>
        <section className="page-content">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="wishes-intro">
              <p>L’un de nos objectifs est de réaliser chaque année 32 souhaits liés au hockey sur glace pour de courageux enfants dans 32 villes, lors d’un seul événement conçu pour répandre l’espoir et la joie au sein de la communauté touchée par le cancer et les maladies cardiaques pédiatriques.</p>
              <p>Revenez régulièrement pour découvrir quels membres de la communauté nord-américaine du hockey professionnel ont accepté de s’associer à nous dans cette initiative.</p>
            </div>
            <aside className="petition-cta" aria-labelledby="wishes-petition-title-fr">
              <div><p className="section-kicker">Faites entendre votre voix</p><h2 id="wishes-petition-title-fr">Aidez à faire avancer les 32 souhaits</h2><p>Manifestez votre appui à la vision en ajoutant votre nom à la pétition communautaire.</p></div>
              <Link className="site-button site-button--secondary" href="/fr-ca/more-info/#petition">Signer la pétition des 32 souhaits</Link>
            </aside>
            <div className="wishes-grid">
              {Object.entries(regions).map(([region, cities]) => (
                <section className="wishes-region" aria-labelledby={`region-${region}`} key={region}>
                  <h2 id={`region-${region}`}>{region}</h2>
                  <h4 className="text-center">Qui sera le premier?</h4>
                  <div className="wishes-placeholder-grid">
                    {cities.map((city, wishIndex) => (
                      <article className="wish-skyline-card" key={city} aria-label={`Silhouette urbaine de ${city}`}>
                        <div className="wish-skyline-card__sky" aria-hidden="true">
                          <div className="wish-skyline-card__buildings">
                            {[42, 61, 50, 72, 47, 57].map((height, index) => (
                              <span className={`wish-building wish-building--${["flat", "step", "slope", "antenna", "cap", "dome"][index]}`} key={index} style={{ height: `${height + ((wishIndex + index) % 5)}%`, width: `${11 + (index % 4)}%` }} />
                            ))}
                          </div>
                        </div>
                        <h3>{city}</h3>
                        <WishSignatureCount city={city} locale="fr-CA" />
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

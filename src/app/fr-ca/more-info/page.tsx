import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PetitionForm } from "@/components/PetitionForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Calendrier prévisionnel de l’initiative",
  description: "Découvrez le parcours proposé par The Silver Guardian vers un hôpital pédiatrique novateur et signez la pétition communautaire.",
  path: "/fr-ca/more-info/",
  locale: "fr-CA",
  keywords: ["parcours de The Silver Guardian", "hôpital pédiatrique", "pétition communautaire"],
});

const milestones = [
  ["01", "Prévente du concept", "Créer un premier élan grâce à un concept de droits de marque pour des unités hospitalières associées aux organisations professionnelles de hockey.", "La proposition prévoit deux ailes de 16 unités, soit 32 possibilités d’association."],
  ["02", "Centres de thérapie par le mouvement et 32 souhaits", "Amorcer le développement du réseau de centres de thérapie par le mouvement et planifier le festival Seeds of Hope 2027.", "Le festival servirait de moteur à l’initiative annuelle 32 souhaits dans 32 villes."],
  ["03", "The Silver Gryphon et activités de financement", "Établir l’organisme caritatif proposé et lancer des activités communautaires de financement récurrentes.", "Le concept comprend des activités annuelles de golf et de danse de salon."],
  ["04", "Choix du site", "Réaliser une évaluation complète des emplacements possibles pour l’hôpital pédiatrique proposé.", "La projection actuelle vise le nord-ouest de la Géorgie, entre Atlanta et Chattanooga, au Tennessee."],
  ["05", "Première pelletée de terre", "Passer de la planification à la construction lorsque l’appui, le site, les autorisations, le financement et les partenariats seront réunis.", "La vision à long terme est un hôpital pédiatrique axé sur la recherche et les soins en cancérologie et en santé cardiovasculaire."],
];

export default function MoreInfoFrenchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="more-info-hero">
          <div className="more-info-hero__glow" aria-hidden="true" />
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <p className="section-kicker">De la vision à l’action</p><h1>Calendrier prévisionnel de l’initiative</h1>
            <p>Un parcours proposé pour transformer l’énergie communautaire en un lieu novateur de soins et de recherche pédiatriques.</p>
            <a className="site-button site-button--secondary" href="#petition">Manifester votre appui</a>
          </div>
        </section>
        <section className="timeline-section" aria-labelledby="timeline-title">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="timeline-intro"><div><p className="section-kicker">Le parcours proposé</p><h2 id="timeline-title">Un plan par étapes</h2></div><p>Chaque jalon dépend de la participation communautaire, d’études de faisabilité, du financement, des examens réglementaires et de partenaires qualifiés. Ces étapes présentent une orientation, et non des dates d’achèvement annoncées.</p></div>
            <ol className="action-timeline">{milestones.map(([number, title, summary, detail]) => <li className="action-timeline__item" key={number}><article className="action-timeline__card"><div className="action-timeline__number" aria-hidden="true">{number}</div><div><h3>{title}</h3><p>{summary}</p><p className="action-timeline__detail">{detail}</p></div><span className="action-timeline__arrow" aria-hidden="true">↗</span></article></li>)}</ol>
          </div>
        </section>
        <section id="petition" className="petition-section" aria-labelledby="petition-title">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="petition-section__copy"><p className="section-kicker">Faites entendre votre voix</p><h2 id="petition-title">Appuyez la vision</h2><p>Signez la pétition communautaire pour montrer que les familles, les personnes engagées et les membres de la communauté souhaitent faire avancer des idées audacieuses en soins pédiatriques.</p><div className="petition-section__note"><span aria-hidden="true">✓</span><p>Votre signature témoigne de votre appui; elle ne constitue ni un don ni un engagement financier.</p></div></div>
            <PetitionForm locale="fr-CA" />
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

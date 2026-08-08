import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import danceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import generalExerciseImage from "@/img/gabin-vallet-J154nEkpzlQ-unsplash.jpg";
import kickboxingImage from "@/img/lorenzo-fatto-offidani-de5OZMjb5ww-unsplash.jpg";
import hockeyLoungeImage from "@/img/hockey-goal.jpg";
import physicalTherapyImage from "@/img/gabin-vallet-J154nEkpzlQ-unsplash.jpg";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Centres de thérapie par le mouvement",
  description:
    "Découvrez le concept de centres de thérapie par le mouvement de The Silver Guardian, axé sur la danse, la boxe sans contact et l’exercice adapté.",
  path: "/fr-ca/movement-therapy-center/",
  locale: "fr-CA",
  keywords: ["centre de thérapie par le mouvement", "exercice pour patients atteints de cancer", "boxe sans contact", "danse communautaire santé", "exercice adapté"],
});

const stats = [
  { title: "Danse", image: danceImage, alt: "Danseurs en prestation", summary: "Une revue systématique de programmes de danse communautaire a relevé des améliorations de la capacité fonctionnelle, de la fatigue, de la qualité de vie et des symptômes dépressifs chez des personnes vivant avec le cancer, comparativement à l’absence d’intervention. Les auteurs ont jugé la danse réalisable et agréable pour de nombreux participants.", details: "Consultez la revue scientifique sur les effets des programmes de danse communautaire chez les personnes vivant avec le cancer :", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10400145/" },
  { title: "Boxe sans contact", image: kickboxingImage, alt: "Athlète s’entraînant avec des gants de boxe", summary: "Une étude sur un programme communautaire de boxe a observé une association avec une amélioration de l’équilibre et une réduction du risque de chute chez des personnes atteintes de la maladie de Parkinson. Cette étude observationnelle ne permet pas, à elle seule, d’établir un effet causal.", details: "Consultez l’étude scientifique sur ce programme communautaire de boxe adapté :", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8758155/" },
  { title: "Exercice général", image: generalExerciseImage, alt: "Athlète s’exerçant dans un centre d’entraînement", summary: "Une revue indexée par la National Library of Medicine présente des données selon lesquelles un exercice prescrit de façon appropriée peut soutenir la santé cardiovasculaire, la capacité physique, la fatigue et la qualité de vie pendant et après un traitement contre le cancer. L’activité doit être adaptée avec l’aide de professionnels de la santé qualifiés.", details: "Consultez la revue scientifique sur l’exercice et la qualité de vie des personnes atteintes de cancer :", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11264125/" },
  { title: "Salon sur le thème du hockey", image: hockeyLoungeImage, alt: "But de hockey illuminé dans une patinoire intérieure", summary: "Le concept proposé comprend un salon sur le thème du hockey où les participants et les membres de la communauté pourraient échanger après des activités de mouvement ou d’autres services offerts de façon indépendante.", details: null, url: null },
  { title: "Espace de physiothérapie et de soins esthétiques", image: physicalTherapyImage, alt: "Groupe participant à une séance d’exercice guidée à l’extérieur", summary: "Le concept proposé comprend un espace où des physiothérapeutes agréés pourraient évaluer les participants de façon indépendante et recommander des exercices adaptés. Toute activité de physiothérapie nécessiterait des professionnels qualifiés, une évaluation individuelle et une coordination avec l’équipe soignante de chaque participant. Tout service de soins esthétiques devrait également être offert par du personnel qualifié, selon des protocoles appropriés.", details: null, url: null },
];

export default function FrenchMovementTherapyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact"><div className="mx-auto w-full max-w-6xl px-6 py-16"><h1>Centres de thérapie par le mouvement</h1></div></section>
        <section className="page-content"><div className="mx-auto w-full max-w-6xl px-6 py-16">
          <section className="movement-intro"><p>The Silver Guardian explore le développement d’un réseau de centres de thérapie par le mouvement axés sur des activités artistiques, adaptées et inspirées du sport. Il s’agit d’un concept communautaire en développement, et non d’un service clinique en activité. Tout futur programme lié à la santé nécessiterait des professionnels qualifiés, des mesures de protection appropriées et des conseils médicaux individualisés. Revenez consulter les détails confirmés.</p></section>
          <section className="stats-section" aria-labelledby="stats-title-fr"><h2 id="stats-title-fr">Recherche et espaces proposés</h2><div className="stats-grid">
            {stats.map((stat) => <article className="stats-card" key={stat.title}><h3>{stat.title}</h3><div className="stats-card__image"><Image src={stat.image} alt={stat.alt} fill placeholder="blur" sizes="(max-width: 767px) 100vw, 50vw" unoptimized /></div><p>{stat.summary}</p>{stat.details ? <p>{stat.details}</p> : null}{stat.url ? <a className="stats-card__link" href={stat.url} target="_blank" rel="noopener noreferrer">En savoir plus</a> : null}</article>)}
          </div></section>
        </div></section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

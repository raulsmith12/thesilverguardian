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
  { title: "Danse", image: danceImage, alt: "Danseurs en prestation", summary: "Selon Oxford Academic au Royaume-Uni, seulement 45 minutes de danse communautaire par semaine peuvent améliorer la santé d’une personne atteinte de cancer.", details: "Pour en savoir plus, consultez l’étude officielle ci-dessous sur les effets de la danse communautaire et la façon dont elle aide les personnes atteintes de cancer dans leur combat :", url: "https://academic.oup.com/heapro/article/38/4/daad077/7236781?login=false" },
  { title: "Boxe sans contact", image: kickboxingImage, alt: "Athlète s’entraînant avec des gants de boxe", summary: "Selon la National Library of Medicine à Bethesda, au Maryland, la boxe sans contact, particulièrement en contexte communautaire, peut améliorer la qualité de vie des personnes atteintes de la maladie de Parkinson.", details: "Pour en savoir plus, consultez l’étude officielle ci-dessous sur les effets de la boxe communautaire sans contact et la façon dont elle aide les personnes atteintes de Parkinson à préserver leur mobilité :", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8758155/" },
  { title: "Exercice général", image: generalExerciseImage, alt: "Athlète s’exerçant dans un centre d’entraînement", summary: "Selon la National Library of Medicine à Bethesda, au Maryland, l’exercice adapté aux besoins particuliers d’une personne peut avoir un effet positif sur sa qualité de vie pendant son parcours avec le cancer.", details: "Pour en savoir plus, consultez l’étude officielle ci-dessous sur les effets de l’exercice général pendant le parcours avec le cancer :", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11264125/" },
  { title: "Salon de hockey sur glace", image: hockeyLoungeImage, alt: "But de hockey illuminé dans une patinoire intérieure", summary: "Afin de remonter le moral des personnes atteintes de cancer pendant leur parcours, ainsi que celui de la communauté en général, les centres de thérapie par le mouvement intégreront un salon novateur sur le thème du hockey sur glace. Cet espace favorisera les échanges après l’exercice ou les soins reçus dans l’espace de physiothérapie et de soins esthétiques.", details: null, url: null },
  { title: "Espace de physiothérapie et de soins esthétiques", image: physicalTherapyImage, alt: "Groupe participant à une séance d’exercice guidée à l’extérieur", summary: "Physiothérapie : Pour les personnes atteintes de cancer, l’exercice général et la physiothérapie vont habituellement de pair. Afin de faciliter l’accès à ces deux activités essentielles, les centres de thérapie par le mouvement intégreront un espace où des physiothérapeutes qualifiés pourront guider les programmes d’exercice pendant le parcours avec le cancer. Soins esthétiques : Chez certaines personnes, les traitements peuvent éprouver la peau et nuire à l’image corporelle, ce qui augmente le stress et réduit le moral. Les centres chercheront à contrer cette tendance en facilitant l’accès à des techniciennes et techniciens qualifiés en soins de la peau dans la portion de l’espace consacrée aux soins esthétiques.", details: null, url: null },
];

export default function FrenchMovementTherapyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact"><div className="mx-auto w-full max-w-6xl px-6 py-16"><h1>Centres de thérapie par le mouvement</h1></div></section>
        <section className="page-content"><div className="mx-auto w-full max-w-6xl px-6 py-16">
          <section className="movement-intro"><p>The Silver Guardian contribuera aux soins quotidiens des patients et des communautés en investissant directement dans un réseau unique de centres de thérapie par le mouvement, afin de favoriser une meilleure qualité de vie grâce à des activités physiques artistiques et sportives. Revenez bientôt pour plus de détails.</p></section>
          <section className="stats-section" aria-labelledby="stats-title-fr"><h2 id="stats-title-fr">Approches et espaces proposés</h2><div className="stats-grid">
            {stats.map((stat) => <article className="stats-card" key={stat.title}><h3>{stat.title}</h3><div className="stats-card__image"><Image src={stat.image} alt={stat.alt} fill placeholder="blur" sizes="(max-width: 767px) 100vw, 50vw" unoptimized /></div><p>{stat.summary}</p>{stat.details ? <p>{stat.details}</p> : null}{stat.url ? <a className="stats-card__link" href={stat.url} target="_blank" rel="noopener noreferrer">En savoir plus</a> : null}</article>)}
          </div></section>
        </div></section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

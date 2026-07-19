import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import newsletterImage from "@/img/charlesdeluvio-FdDkfYFHqe4-unsplash.jpg";
import movementTherapyImage from "@/img/lorenzo-fatto-offidani-de5OZMjb5ww-unsplash.jpg";
import scoreGoalImage from "@/img/samantha-gades-iks9hBNKa6E-unsplash.jpg";
import silverGuardianLogo from "@/img/silver-guardian-logo.png";
import wishesImage from "@/img/vitolda-klein-OD1_HupXwxI-unsplash.jpg";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Soins pédiatriques novateurs et soutien communautaire",
  description:
    "Découvrez la mission de The Silver Guardian : inspirer l’espoir et la guérison grâce aux soins pédiatriques, aux souhaits liés au hockey, au financement et à la thérapie par le mouvement.",
  path: "/fr-ca/",
  locale: "fr-CA",
  keywords: [
    "The Silver Guardian",
    "soins pédiatriques",
    "soutien cancer pédiatrique",
    "soutien maladies cardiaques pédiatriques",
    "organisme hockey",
    "soutien communautaire",
  ],
});

const callouts = [
  { title: "Marquez un but", text: "Des événements saisonniers et des campagnes communautaires aideront à réunir les ressources nécessaires pour construire et soutenir le concept d’établissement de soins.", url: "/fr-ca/fundraising/", image: scoreGoalImage, alt: "Joueur de hockey sur glace près du but" },
  { title: "32 souhaits dans 32 villes", text: "Chaque année, l’un de nos objectifs est de réaliser 32 souhaits liés au hockey pour de courageux enfants dans 32 villes aux États-Unis et au Canada.", url: "/fr-ca/32-wishes/", image: wishesImage, alt: "Enfants debout dans un champ ensoleillé" },
  { title: "Thérapie par le mouvement", text: "Des centres novateurs de thérapie par le mouvement encourageront les patients et les membres de la communauté à développer leur force grâce à l’exercice artistique et compétitif.", url: "/fr-ca/movement-therapy-center/", image: movementTherapyImage, alt: "Athlète s’entraînant avec des gants de boxe" },
  { title: "Infolettre", text: "Nos nouvelles vous permettront de suivre les progrès réalisés à mesure que les objectifs, les partenariats et les concepts prennent forme.", url: "/fr-ca/contact/", image: newsletterImage, alt: "Personne écrivant dans un carnet" },
];

export default function FrenchHomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section id="home" className="hero-section">
          <div className="mx-auto flex min-h-[620px] w-full max-w-6xl items-center px-6 py-20 lg:max-w-[84rem]">
            <div>
              <h1 className="hero-title font-semibold leading-tight tracking-normal">
                <Image src={silverGuardianLogo} alt="" className="brand-logo hero-title__logo" priority unoptimized />
                <span>The Silver Guardian</span>
              </h1>
              <p className="hero-message mt-13 max-w-3xl">Une expérience novatrice en soins pédiatriques</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="site-button site-button--secondary" href="/fr-ca/contact/">Nous joindre</a>
                <a className="site-button site-button--outline" href="/fr-ca/fundraising/">En savoir plus</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-note-section">
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            <p>The Silver Guardian réunit des propriétaires d’entreprise et des défenseurs de la communauté afin de mobiliser l’appui envers un établissement novateur de soins pédiatriques. Son thème de hockey sur glace, adapté aux enfants, vise à inspirer l’espoir et la guérison face à des maladies potentiellement mortelles, principalement le cancer et les maladies cardiaques.</p>
            <p>Merci,</p><p>L’équipe de The Silver Guardian</p>
          </div>
        </section>

        <section id="fundraising" className="content-section">
          <div className="home-callouts-heading"><div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-10"><div className="max-w-3xl">
            <p className="section-kicker">Façons d’aider</p>
            <h2 className="section-title">Chaque geste d’appui contribue à faire avancer la mission.</h2>
          </div></div></div>
          <div className="feature-callout-list">
            {callouts.map(({ title, text, url, image, alt }) => (
              <div key={title} className="feature-callout"><div className="feature-callout__inner">
                <div className="feature-callout__image" style={{ position: "relative" }}><Image src={image} alt={alt} fill placeholder="blur" sizes="(max-width: 767px) 30vw, 22rem" unoptimized /></div>
                <div className="feature-callout__content"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-7">{text}</p><a className="feature-link" href={url}>En savoir plus</a></div>
              </div></div>
            ))}
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

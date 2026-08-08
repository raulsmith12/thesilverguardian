import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import danceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import generalExerciseImage from "@/img/lorenzo-fatto-offidani-de5OZMjb5ww-unsplash.jpg";
import hockeyLoungeImage from "@/img/hockey-goal.jpg";
import physicalTherapyImage from "@/img/gabin-vallet-J154nEkpzlQ-unsplash.jpg";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Movement Therapy Centers",
  description:
    "Explore The Silver Guardian's movement therapy center concept using dance, non-contact boxing, and adapted exercise to support quality of life.",
  path: "/movement-therapy-center/",
  keywords: [
    "movement therapy center",
    "exercise for cancer patients",
    "non-contact boxing therapy",
    "community dance health",
    "adapted exercise",
    "The Silver Guardian movement therapy",
  ],
});

export default function MovementTherapyCenterPage() {
  const stats = [
    {
      title: "Dancing",
      image: danceImage,
      alt: "Dancers performing together",
      summary:
        "A systematic review of community dance programs found improvements in functional capacity, fatigue, quality of life, and depression among people living with cancer compared with no intervention. The authors described dance as feasible and enjoyable for many participants.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10400145/",
    },
    {
      title: "General Exercise",
      image: generalExerciseImage,
      alt: "Athlete exercising in a gym",
      summary:
        "A review indexed by the National Library of Medicine describes evidence that appropriately prescribed exercise, such as non-contact boxing, can support cardiovascular health, physical function, fatigue, and quality of life during and after cancer treatment. Exercise should be adapted with guidance from qualified healthcare professionals.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11264125/",
    },
    {
      title: "Ice Hockey Lounge",
      image: hockeyLoungeImage,
      alt: "Illuminated ice hockey goal in an indoor rink",
      summary:
        "The proposed center concept includes an ice hockey-themed lounge where participants and community members could socialize after movement activities or other independently provided services.",
      url: null,
    },
    {
      title: "Physical Therapy",
      image: physicalTherapyImage,
      alt: "Group taking part in an outdoor guided exercise session",
      summary:
        "The proposed concept includes space where licensed physical therapists could independently assess participants and guide appropriate exercise plans. Any physical therapy would require qualified providers, individual assessment, and coordination with each participant’s care team.",
      url: null,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Movement Therapy Centers</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <section className="movement-intro">
              <p>
                The Silver Guardian will empower a network of movement therapy centers focused on artistic, adapted, and sport-inspired activity. This is a developing community concept, not an operating clinical service. Any future health-related programming would require qualified professionals, appropriate safeguards, and individual medical guidance. Please check back for confirmed details.
              </p>
            </section>

            <section className="stats-section" aria-labelledby="stats-title">
              <h2 id="stats-title">Research and proposed spaces</h2>
              <div className="stats-grid">
                {stats.map((stat) => (
                  <article className="stats-card" key={stat.title}>
                    <h3>{stat.title}</h3>
                    <div className="stats-card__image">
                      <Image
                        src={stat.image}
                        alt={stat.alt}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 767px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                    <p>{stat.summary}</p>
                    {stat.url ? (
                      <a
                        className="stats-card__link"
                        href={stat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

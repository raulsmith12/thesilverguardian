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
        "According to Oxford Academic in the United Kingdom, just 45 minutes of community dancing per week can improve the health of a cancer patient.",
      url: "https://academic.oup.com/heapro/article/38/4/daad077/7236781?login=false",
    },
    {
      title: "General Exercise",
      image: generalExerciseImage,
      alt: "Athlete exercising in a gym",
      summary:
        "According to the National Library of Medicine in Bethesda, MD, general exercise, such as non-contact boxing, can provide significant cardiovascular health improvement for patients on their cancer journey.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11264125/",
    },
    {
      title: "Ice Hockey Lounge",
      image: hockeyLoungeImage,
      alt: "Illuminated ice hockey goal in an indoor rink",
      summary:
        "To increase morale for cancer patients on their journey and for the community in general, the Movement Therapy Centers will incorporate an innovative ice hockey lounge to encourage socialization after exercising or receiving care in the Physical Therapy/Esthetic Care suite.",
      url: null,
    },
    {
      title: "Physical Therapy/Aesthetic Care Suite",
      image: physicalTherapyImage,
      alt: "Group taking part in an outdoor guided exercise session",
      summary:
        "PT: For cancer patients, general exercise and physical therapy typically go hand in hand. To increase ease of access to both essential activities, the Movement Therapy Centers will incorporate a suite where licensed Physical Therapists can help guide exercise regimens for patients on their cancer journey. Aesthetic: For some cancer patients, treatment can be very hard on the skin and overall body image, thus increasing stress and reducing morale. The Movement Therapy Centers will seek to reverse this trend by increasing ease of access to reputable skin care technicians through the Aesthetic Care portion of our Physical Therapy suite.",
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
                The Silver Guardian will be contributing to the everyday care of patients and communities by directly investing in a chain of unique &ldquo;movement therapy centers&rdquo; to encourage positive quality of life through artistic and competitive exercise. Please check back soon for more details.
              </p>
            </section>

            <section className="stats-section" aria-labelledby="stats-title">
              <h2 id="stats-title">Stats</h2>
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

import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import danceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import generalExerciseImage from "@/img/gabin-vallet-J154nEkpzlQ-unsplash.jpg";
import kickboxingImage from "@/img/lorenzo-fatto-offidani-de5OZMjb5ww-unsplash.jpg";
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
      details:
        "Please visit the website listed below containing a formal research study on the effects of community dancing and how it helps cancer patients in their fight to survive:",
      url: "https://academic.oup.com/heapro/article/38/4/daad077/7236781?login=false",
    },
    {
      title: "Non-Contact Boxing",
      image: kickboxingImage,
      alt: "Athlete training with boxing gloves",
      summary:
        "According to the National Library of Medicine in Bethesda, MD, Non-contact boxing, particularly in a community setting, can increase the quality of life for patients with Parkinson's Disease, a mobility impairing condition.",
      details:
        "Please visit the website listed below containing a formal research study on the effects of Non-contact, community boxing and how it helps Parkinson's patients in their fight to maintain their mobility:",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8758155/",
    },
    {
      title: "General Exercise",
      image: generalExerciseImage,
      alt: "Athlete exercising in a gym",
      summary:
        "According to the National Library of Medicine in Bethesda, MD, exercise in general, when adapted to a patient's specific needs, can positively impact the quality of life for patients on their cancer journey.",
      details:
        "Please visit the website listed below containing a formal research study on the effects of general exercise and the cancer journey:",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11264125/",
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
                        sizes="(max-width: 767px) 100vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <p>{stat.summary}</p>
                    <p>{stat.details}</p>
                    <a
                      className="stats-card__link"
                      href={stat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
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

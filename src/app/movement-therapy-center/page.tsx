import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import danceImage from "@/img/preillumination-seth-cNlQpTstCK8-unsplash.jpg";
import generalExerciseImage from "@/img/gabin-vallet-J154nEkpzlQ-unsplash.jpg";
import kickboxingImage from "@/img/alex-harmuth-R1ODafbCoIY-unsplash.jpg";

export default function MovementTherapyCenterPage() {
  const stats = [
    {
      title: "Dance",
      image: danceImage,
      alt: "Dancers performing together",
    },
    {
      title: "Kickboxing / Boxing",
      image: kickboxingImage,
      alt: "Athlete training with boxing gloves",
    },
    {
      title: "General Exercise",
      image: generalExerciseImage,
      alt: "Athlete exercising in a gym",
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
                The Silver Guardian will be contributing to the nonclinical care of patients by directly investing in a chain of specially designed “movement therapy” centers that encourage patients battling cancer and other mobility limiting diseases,
                such as Parkinson’s disease, as well as the general community, to positively improve their health through both artistic and competitive exercise. Please check back soon for more details.
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
                    <p>Coming soon</p>
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

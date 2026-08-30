import Image, { type StaticImageData } from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import ballroomDanceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import cancerTreatmentImage from "@/img/cancertreatmentstockphoto.jpg";
import hockeyArenaImage from "@/img/hockey arena stock photo.jpg";
import boxingImage from "@/img/lorenzo-fatto-offidani-de5OZMjb5ww-unsplash.jpg";
import type { Locale } from "@/lib/i18n";

const panels: Array<{
  title: string;
  image: StaticImageData;
  alt: string;
}> = [
  {
    title: "Competitive Ballroom Dance",
    image: ballroomDanceImage,
    alt: "A ballroom dance couple performing in a grand hall",
  },
  {
    title: "Non-Contact Boxing",
    image: boxingImage,
    alt: "A boxer practicing with a heavy bag",
  },
  {
    title: "Ice Hockey Coffee Lounge",
    image: hockeyArenaImage,
    alt: "An ice hockey arena",
  },
  {
    title: "Physical Therapy Suites",
    image: cancerTreatmentImage,
    alt: "A child sitting with a healthcare professional",
  },
];

export function MovementTherapyCenter({ locale }: { locale: Locale }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale={locale} />
      <main className="flex-1">
        <section
          className="flex w-full flex-wrap"
          aria-label="Movement Therapy Center spaces"
        >
          {panels.map((panel) => (
            <article
              className="mx-[3%] my-[0.4rem] w-[44%] overflow-hidden bg-white"
              key={panel.title}
            >
              <Image
                className="aspect-video h-auto w-full object-cover"
                src={panel.image}
                alt={panel.alt}
                sizes="44vw"
              />
              <h2 className="px-2 py-3 text-center text-lg font-bold text-[var(--color-primary)] sm:text-2xl">
                {panel.title}
              </h2>
            </article>
          ))}
        </section>
        <p className="mx-auto w-[94%] py-4 text-sm leading-relaxed text-[var(--color-charcoal)]">
          <strong>Disclaimer:</strong> The Silver Guardian Initiative uses the
          term “movement therapy” to refer to the idea of encouraging to be
          active emotionally, mentally, physically, and socially, whether that
          is preparing for a ballroom dance competition, working out with a
          punching bag, sitting down to enjoy a comforting beverage, or
          attending a treatment session with a licensed physical therapist.
        </p>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

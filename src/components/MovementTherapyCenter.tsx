import Image, { type StaticImageData } from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import ballroomDanceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import cancerTreatmentImage from "@/img/cancertreatmentstockphoto.jpg";
import hockeyArenaImage from "@/img/hockey arena stock photo.jpg";
import boxingImage from "@/img/group-of-women-kickboxing-together-at-gym-3062328787.jpg";
import silverGuardianLogo from "@/img/silver-guardian-logo.png";
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
    alt: "Women practicing non-contact kickboxing with heavy bags in a gym",
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
  const isFrench = locale === "fr-CA";

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale={locale} />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>
              {isFrench
                ? "Centres de thérapie par le mouvement"
                : "Movement Therapy Centers"}
            </h1>
          </div>
        </section>
        <section className="page-content page-content--green">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="rounded-lg bg-white p-6 text-center text-[var(--color-charcoal)] shadow-lg md:hidden">
              <p className="m-0 leading-relaxed">
                {isFrench
                  ? "Pour en savoir plus sur les Centres de thérapie par le mouvement, veuillez consulter cette page sur un ordinateur de bureau."
                  : "For more information about the Movement Therapy Centers, please visit this page on a desktop device."}
              </p>
            </div>

            <div
              className="hidden grid-cols-3 grid-rows-3 gap-5 md:grid"
              aria-label={
                isFrench
                  ? "Espaces des Centres de thérapie par le mouvement"
                  : "Movement Therapy Center spaces"
              }
            >
              <MovementTherapyCard panel={panels[0]} />
              <div aria-hidden="true" />
              <MovementTherapyCard panel={panels[1]} />
              <div aria-hidden="true" />
              <div className="flex items-center justify-center p-6">
                <Image
                  alt={isFrench ? "Logo de The Silver Guardian" : "The Silver Guardian logo"}
                  className="h-auto w-full max-w-52 drop-shadow-lg"
                  src={silverGuardianLogo}
                />
              </div>
              <div aria-hidden="true" />
              <MovementTherapyCard panel={panels[2]} />
              <div aria-hidden="true" />
              <MovementTherapyCard panel={panels[3]} />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

function MovementTherapyCard({ panel }: { panel: (typeof panels)[number] }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-4 text-center text-lg font-bold text-[var(--color-primary)] lg:text-xl">
        {panel.title}
      </h2>
      <Image
        alt={panel.alt}
        className="aspect-video h-auto w-full rounded-md object-cover"
        sizes="(min-width: 1152px) 352px, 30vw"
        src={panel.image}
        unoptimized
      />
    </article>
  );
}

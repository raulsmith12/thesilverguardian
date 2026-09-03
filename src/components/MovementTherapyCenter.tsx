import Image, { type StaticImageData } from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import ballroomDanceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import hockeyArenaImage from "@/img/hockey arena stock photo.jpg";
import boxingImage from "@/img/group-of-women-kickboxing-together-at-gym-3062328787.jpg";
import physicalTherapyImage from "@/img/pexels-photo-6111616-433984468.jpg";
import silverGuardianLogo from "@/img/silver-guardian-w-child.png";
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
    title: "Ice Hockey Coffee Lounges",
    image: hockeyArenaImage,
    alt: "An ice hockey arena",
  },
  {
    title: "Physical Therapy Suites",
    image: physicalTherapyImage,
    alt: "A physical therapist guiding a man through a resistance exercise",
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
              <Image
                alt={isFrench ? "Logo de The Silver Guardian" : "The Silver Guardian logo"}
                className="mx-auto mb-6 h-auto w-full max-w-44 drop-shadow-lg"
                src={silverGuardianLogo}
              />
              <p className="m-0 leading-relaxed">
                {isFrench
                  ? "Pour en savoir plus sur les Centres de thérapie par le mouvement, veuillez consulter cette page sur un ordinateur de bureau."
                  : "For more information about the Movement Therapy Centers, please visit this page on a desktop device."}
              </p>
            </div>

            <div
              className="hidden grid-cols-3 grid-rows-3 md:grid"
              aria-label={
                isFrench
                  ? "Espaces des Centres de thérapie par le mouvement"
                  : "Movement Therapy Center spaces"
              }
            >
              <div className="flex flex-col [&>article]:flex-1">
                <a
                  className="mb-3 block text-center font-bold text-white underline underline-offset-4"
                  href="https://academic.oup.com/heapro/article/38/4/daad077/7236781?login=false"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {isFrench
                    ? "Pour plus d’information sur les bienfaits de la danse de salon, veuillez consulter cette étude d’Oxford"
                    : "For more information regarding the benefits of ballroom dance, please refer to this Oxford study"}
                </a>
                <MovementTherapyCard panel={panels[0]} />
              </div>
              <div className="flex items-center justify-center text-center text-5xl font-black text-[#ffd700] xl:text-6xl">
                Featuring:
              </div>
              <MovementTherapyCard panel={panels[1]} />
              <div aria-hidden="true" />
              <div className="flex items-center justify-center">
                <Image
                  alt={isFrench ? "Logo de The Silver Guardian" : "The Silver Guardian logo"}
                  className="h-auto w-[135%] max-w-none drop-shadow-lg"
                  src={silverGuardianLogo}
                />
              </div>
              <div aria-hidden="true" />
              <MovementTherapyCard panel={panels[2]} />
              <div aria-hidden="true" />
              <div>
                <MovementTherapyCard panel={panels[3]} />
                <a
                  className="mt-3 block text-center font-bold underline underline-offset-4 text-white"
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12314216/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {isFrench
                    ? "Pour plus d’information, veuillez consulter cette étude clinique d’Oxford"
                    : "For more information please refer to this clinical study on the benefits of physical therapy"}
                </a>
              </div>
            </div>

            <aside className="mt-10 hidden rounded-lg bg-white p-6 text-[var(--color-charcoal)] shadow-lg md:block">
              <p className="m-0 leading-relaxed">
                <strong>Disclaimer:</strong> The Silver Guardian Initiative uses the term “movement therapy” to refer to the idea of encouraging patients to be active emotionally, mentally, physically, and socially, whether that is preparing for a ballroom dance competition, working out with a punching bag, sitting down to enjoy a comforting beverage, or attending a treatment session with a licensed physical therapist.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

function MovementTherapyCard({ panel }: { panel: (typeof panels)[number] }) {
  return (
    <article className="overflow-hidden rounded-lg bg-[var(--color-primary)] p-4 shadow-lg">
      <h2 className="mb-4 text-center text-lg font-bold text-white lg:text-xl">
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

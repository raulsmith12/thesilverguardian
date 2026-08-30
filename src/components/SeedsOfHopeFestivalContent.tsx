import Image from "next/image";
import seedsOfHopeImage from "@/img/vitolda-klein-OD1_HupXwxI-unsplash.jpg";

export function SeedsOfHopeFestivalContent({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";

  return (
    <section
      className="fundraising-grid fundraising-grid--single"
      aria-label="Seeds of Hope Festival"
    >
      <article className="fundraising-card">
        <p className="fundraising-card__season">
          {isFrench ? "À compter de 2027" : "Beginning in 2027"}
        </p>
        <h2>Seeds of Hope Festival</h2>
        <div className="fundraising-card__image">
          <Image
            src={seedsOfHopeImage}
            alt={
              isFrench
                ? "Trois enfants profitant d’un champ ensoleillé"
                : "Three children enjoying a sunlit field"
            }
            fill
            placeholder="blur"
            sizes="(max-width: 767px) 100vw, 760px"
            unoptimized
          />
        </div>
        <p>
          {isFrench
            ? "Un festival musical et caritatif unique est en préparation afin de créer une vague d’espoir grâce à une célébration communautaire et à l’octroi annuel de 32 souhaits liés au hockey sur glace."
            : "A one-of-a-kind music and charity festival is being developed to create a cascade of hope through community celebration and the annual granting of 32 ice hockey-related wishes."}
        </p>
        <span>{isFrench ? "À venir" : "Coming soon"}</span>
      </article>
    </section>
  );
}

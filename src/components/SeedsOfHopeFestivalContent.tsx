import Image from "next/image";
import seedsOfHopeImage from "@/img/Festival Logo.jpg";

export function SeedsOfHopeFestivalContent({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";

  return (
    <section
      className="fundraising-grid fundraising-grid--single"
      aria-label="Seeds of Hope Festival"
    >
      <article className="fundraising-card">
        <h2>Seeds of Hope Festival</h2>
        <div className="fundraising-card__image fundraising-card__image--festival-logo">
          <Image
            src={seedsOfHopeImage}
            alt={
              isFrench
                ? "Logo du festival Seeds of Hope avec un phénix"
                : "Seeds of Hope Festival logo featuring a phoenix"
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
        <a
          className="site-button site-button--primary"
          href={isFrench ? "/fr-ca/contact/#newsletter-title-fr" : "/contact/#newsletter-title"}
        >
          {isFrench
            ? "Pour rester au courant de cet événement et des autres événements à venir, veuillez vous inscrire à notre infolettre."
            : "To stay up to date on this and other future events, please signup for our newsletter."}
        </a>
      </article>
    </section>
  );
}

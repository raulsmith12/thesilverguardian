import Image from "next/image";
import golfTournamentImage from "@/img/Golf-Tournament-2301669502.jpg";

export function GolfTournamentContent({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";

  return (
    <section
      className="fundraising-grid fundraising-grid--single"
      aria-label={isFrench ? "Tournoi de golf" : "Golf Tournament"}
    >
      <article className="fundraising-card">
        <p className="fundraising-card__season">
          {isFrench ? "Printemps / Été / Automne" : "Spring / Summer / Fall"}
        </p>
        <h2>{isFrench ? "Tournois de golf annuels" : "Annual Golf Tournaments"}</h2>
        <div className="fundraising-card__image">
          <Image
            src={golfTournamentImage}
            alt={isFrench ? "Balle de golf sur un té devant un bois de départ" : "Golf ball on a tee in front of a driver"}
            fill
            placeholder="blur"
            sizes="(max-width: 767px) 100vw, 760px"
            unoptimized
          />
        </div>
        <p>
          {isFrench
            ? "Les événements de golf caritatifs seront des occasions privilégiées de démontrer notre appui à la communauté touchée par le cancer et les maladies cardiaques pédiatriques."
            : "Charity golf events will be signature opportunities to demonstrate support for the pediatric cancer/heart disease community."}
        </p>
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

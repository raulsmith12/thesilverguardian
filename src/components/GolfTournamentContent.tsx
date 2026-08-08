import Image from "next/image";
import golfTournamentImage from "@/img/e4f884df0b93d4eb7d893f327084b05c3ccbf956-1.jpg";

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
            alt={isFrench ? "Balle de golf près d’un trou sur un terrain de golf" : "Golf ball resting beside a hole on a golf course"}
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
        <span>{isFrench ? "À venir" : "Coming soon"}</span>
      </article>
    </section>
  );
}

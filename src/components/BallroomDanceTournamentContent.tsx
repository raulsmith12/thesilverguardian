import Image from "next/image";
import ballroomDanceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";

export function BallroomDanceTournamentContent({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";

  return (
    <section
      className="fundraising-grid fundraising-grid--single"
      aria-label={isFrench ? "Tournoi de danse de salon" : "Ballroom Dance Tournament"}
    >
      <article className="fundraising-card">
        <p className="fundraising-card__season">{isFrench ? "Hiver" : "Winter"}</p>
        <h2>{isFrench ? "Tournoi annuel de danse de salon" : "Annual Ballroom Dance Tournament"}</h2>
        <div className="fundraising-card__image">
          <Image
            src={ballroomDanceImage}
            alt={isFrench ? "Danseurs de salon en prestation" : "Ballroom dancers performing together"}
            fill
            placeholder="blur"
            sizes="(max-width: 767px) 100vw, 760px"
            unoptimized
          />
        </div>
        <p>
          {isFrench
            ? "Un concours de danse de salon unique est en préparation afin de renforcer les communautés touchées par le cancer et les maladies cardiaques pédiatriques grâce au mouvement artistique et au dépassement de soi."
            : "A one of a kind ballroom dance competition is being developed to strengthen pediatric cancer/heart disease communities through artistic movement and competitive resilience."}
        </p>
        <span>{isFrench ? "À venir" : "Coming soon"}</span>
      </article>
    </section>
  );
}

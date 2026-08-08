"use client";

import Image from "next/image";
import scoreAGoalImage from "@/img/hockey-goal.png";

export function FundraisingContent({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";
  return (
    <div className="fundraising-layout">
      <section className="fundraising-intro">
        <div>
          <h2 className="section-title">
            {isFrench ? "Campagne communautaire" : "Community Campaign"}
          </h2>
        </div>
        <p>
          {isFrench
            ? "The Silver Guardian prépare des événements saisonniers afin de mobiliser l’appui aux communautés touchées par des maladies pédiatriques comme le cancer et les maladies cardiaques. Les détails sont toujours en cours de préparation; inscrivez-vous à notre infolettre pour recevoir des nouvelles régulièrement."
            : "The Silver Guardian is preparing seasonal events to help demonstrate support for communities battling pediatric conditions such as cancer and heart disease. Event details are still being finalized, please sign up to receive regular updates via our newsletter."}
        </p>
      </section>

      <section className="fundraising-grid" aria-label={isFrench ? "Options de collecte de fonds" : "Fundraising options"}>
        <article className="fundraising-card fundraising-card--featured">
          <p className="fundraising-card__season">{isFrench ? "Campagne Marquez un but" : "Score a Goal Campaign"}</p>
          <h3>{isFrench ? "1 $ par personne" : "$1 Per Person"}</h3>
          <div className="fundraising-card__image">
            <Image
              src={scoreAGoalImage}
              alt={isFrench ? "Joueur de hockey sur glace effectuant un tir" : "Ice hockey player taking a shot"}
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <p>
            {isFrench ? (
              <>Connaissez-vous une personne touchée par le cancer?<br /><br />Êtes-vous amateur de hockey sur glace?<br /><br />Si oui, versez 1 $ pour témoigner de votre appui communautaire à cette initiative.<br /><br />Nous demandons que les contributions correspondent au nombre exact de personnes dans le ménage immédiat : 4 personnes = 4 $.<br /><br />(À la fin de la campagne, ces contributions seront remises à un organisme caritatif reconnu dans le domaine du cancer, qui contribue à renforcer le réseau de soutien des familles traversant ensemble le parcours du cancer.)</>
            ) : (
              <>Do you know someone who has been affected by cancer?<br /><br />Are you an ice hockey fan?<br /><br />If so, please contribute $1 as a demonstration of community support for this initiative.<br /><br />We ask that tokens of support be limited to the exact number of people in immediate households: 4 people = $4.<br /><br />(At the end of the campaign, these tokens of support will be donated to a meaningful, cancer related charity focused on strengthening the support network for families walking the cancer journey together.)</>
            )}
          </p>
          <a target="_blank" className="dbox-donation-page-button" href="https://donorbox.org/score-a-goal?" style={{background: "rgb(0,28,87)", color: "white", textDecoration: "none", fontFamily: "Verdana, sans-serif", display: "block", gap: "8px", width: "100%", fontSize: "16px", fontWeight: "bold", borderRadius: "5px", lineHeight: "24px", padding: "8px 24px", margin: "auto"}}>
            {isFrench ? "Appuyer la campagne" : "Support Here"}
          </a>
        </article>

        <aside className="petition-cta petition-cta--fundraising" aria-labelledby="fundraising-petition-title">
          <div>
            <p className="section-kicker">{isFrench ? "Faites entendre votre voix" : "Add your voice"}</p>
            <h2 id="fundraising-petition-title">
              {isFrench ? "Soutenez The Silver Guardian" : "Stand With The Silver Guardian"}
            </h2>
          </div>
          <a
            className="site-button site-button--secondary"
            href={isFrench ? "/fr-ca/more-info/#petition" : "/more-info/#petition"}
          >
            {isFrench ? "Signer la pétition des 32 souhaits" : "Sign the 32 Wishes petition"}
          </a>
        </aside>

        <section
          className="fundraising-tracker"
          aria-label={isFrench ? "Suivi de la collecte de fonds" : "Fundraising tracker"}
        >
          <h2>{isFrench ? "Suivi de l’objectif" : "Goal Tracker"}</h2>
          <script src="https://donorbox.org/widget.js" async={true}></script>
          <iframe height="93px" width="100%" src="https://donorbox.org/embed/score-a-goal?donation_meter_color=%23001c57&only_donation_meter=true&preview=true" style={{minWidth: "250px", minHeight: "90px", maxHeight: "none", maxWidth: "none"}} seamless name="donorbox" frameBorder="0"> </iframe>
        </section>
      </section>
    </div>
  );
}

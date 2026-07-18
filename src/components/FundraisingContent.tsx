"use client";

import Image from "next/image";
import ballroomDanceImage from "@/img/c3a93a8777a0af0f74eb8ff120553e56fb08dd2d-1.jpeg";
import golfTournamentImage from "@/img/e4f884df0b93d4eb7d893f327084b05c3ccbf956-1.jpg";
import scoreAGoalImage from "@/img/samantha-gades-iks9hBNKa6E-unsplash.jpg";

export function FundraisingContent() {

  return (
    <div className="fundraising-layout">
      <section className="fundraising-intro">
        <div>
          <h2 className="section-title">
            Community Campaign
          </h2>
        </div>
        <p>
          The Silver Guardian is preparing seasonal events to help demonstrate support for communities battling pediatric conditions such as cancer and heart disease. Event details are still being finalized, please sign up to receive regular updates via our newsletter.
        </p>
      </section>

      <section className="fundraising-grid" aria-label="Fundraising options">
        <article className="fundraising-card">
          <p className="fundraising-card__season">Spring / Summer / Fall</p>
          <h3>Annual Golf Tournaments</h3>
          <div className="fundraising-card__image">
            <Image
              src={golfTournamentImage}
              alt="Golf ball resting beside a hole on a golf course"
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <p>
            Charity golf events will be signature opportunities to demonstrate support for the pediatric cancer/heart disease community.
          </p>
          <span>Coming soon</span>
        </article>

        <article className="fundraising-card fundraising-card--featured">
          <p className="fundraising-card__season">Score a Goal Campaign</p>
          <h3>$1 Per Person</h3>
          <div className="fundraising-card__image">
            <Image
              src={scoreAGoalImage}
              alt="Ice hockey player taking a shot"
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <p>
            Do you know someone who has been affected by cancer?<br /><br />
            Are you an ice hockey fan?<br /><br />
            If so, please contribute $1 as a demonstration of community support for this initiative.<br /><br />
            We ask that tokens of support be limited to the exact number of people in immediate households: 4 people = $4.<br /><br />
            (At the end of the campaign, these tokens of support will be donated to a meaningful, cancer related charity focused on strengthening the support network for families walking the cancer journey together.)
          </p>
          <a target="_blank" className="dbox-donation-page-button" href="https://donorbox.org/score-a-goal?" style={{background: "rgb(0,28,87)", color: "white", textDecoration: "none", fontFamily: "Verdana, sans-serif", display: "block", gap: "8px", width: "100%", fontSize: "16px", fontWeight: "bold", borderRadius: "5px", lineHeight: "24px", padding: "8px 24px", margin: "auto"}}>
            Support Here
          </a>
        </article>

        <section
          className="fundraising-tracker"
          aria-label="Fundraising tracker"
        >
          <h2>Goal Tracker</h2>
          <script src="https://donorbox.org/widget.js" async={true}></script>
          <iframe height="93px" width="100%" src="https://donorbox.org/embed/score-a-goal?donation_meter_color=%23001c57&only_donation_meter=true&preview=true" style={{minWidth: "250px", minHeight: "90px", maxHeight: "none", maxWidth: "none"}} seamless name="donorbox" frameBorder="0"> </iframe>

        </section>

        <article className="fundraising-card">
          <p className="fundraising-card__season">Winter</p>
          <h3>Annual Ballroom Dance Tournament</h3>
          <div className="fundraising-card__image">
            <Image
              src={ballroomDanceImage}
              alt="Ballroom dancers performing together"
              fill
              placeholder="blur"
              sizes="(max-width: 767px) 100vw, 33vw"
              unoptimized
            />
          </div>
          <p>
            A one of a kind ballroom dance competition is being developed to strengthen pediatric cancer/heart disease communities through artistic movement and competitive resilience.
          </p>
          <span>Coming soon</span>
        </article>
      </section>
    </div>
  );
}

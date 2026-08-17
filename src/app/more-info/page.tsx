import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PetitionForm } from "@/components/PetitionForm";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projected Initiative Timeline",
  description:
    "Explore The Silver Guardian's proposed path toward an innovative pediatric hospital and sign the community petition to show your support.",
  path: "/more-info/",
  keywords: [
    "Silver Guardian hospital timeline",
    "pediatric hospital initiative",
    "pediatric cancer research hospital",
    "community support petition",
  ],
});

const milestones = [
  {
    number: "01",
    title: "Concept presale",
    summary: "Establish proof-of-concept support through the presale of hospital-pod branding rights to the professional hockey organizations across North America.",
    detail: "The proposal envisions two wings of 16 pods each, creating 32 potential club-aligned opportunities.",
  },
  {
    number: "02",
    title: "Movement & 32 Wishes",
    summary: "Begin developing the Movement Therapy Center network and planning the inaugural 32 Wishes event.",
    detail: "The Movement Therapy Center network is designed to strategically strengthen the cancer patient support network in local communities.",
  },
  {
    number: "03",
    title: "The Silver Gryphon & Seasonal Fundraisers",
    summary: "Establish the proposed charity research hospital organization and launch recurring community fundraising events.",
    detail: "Seasonal fundraisers will be annual golf and ballroom-dance events designed to grow awareness and gather support.",
  },
  {
    number: "04",
    title: "Site Selection",
    summary: "Complete a thorough site-selection evaluation for the proposed pediatric cancer/cardiovascular research hospital.",
    detail: "Currently, the site projection focus is on the southeastern United States, between Atlanta, GA and Chattanooga, TN.",
  },
  {
    number: "05",
    title: "Break Ground",
    summary: "Move from planning to construction once the required support, site, approvals, funding, and partnerships are in place.",
    detail: "The long-term vision is a pediatric hospital focused on cancer and cardiovascular care with a kid-friendly ice hockey theme.",
  },
];

export default function MoreInfoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="more-info-hero">
          <div className="more-info-hero__glow" aria-hidden="true" />
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <p className="section-kicker">From vision to action</p>
            <h1>Projected Initiative Timeline</h1>
            <p>
              A proposed path for turning community energy into an innovative pediatric care and research destination.
            </p>
            <a className="site-button site-button--secondary" href="#petition">
              Show your support
            </a>
          </div>
        </section>

        <section className="timeline-section" aria-labelledby="timeline-title">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="timeline-intro">
              <div>
                <p className="section-kicker">The proposed journey</p>
                <h2 id="timeline-title">A plan built in stages</h2>
              </div>
              <p>
                Each milestone depends on community participation and qualified development partners. This is meant to illustrate the initiative&rsquo;s projected direction; completion dates have not yet been announced.
                {" "}<Link href="/kid-friendly-research-hospital/">Read the careful vision for a kid-friendly research hospital environment.</Link>
              </p>
            </div>

            <ol className="action-timeline">
              {milestones.map((milestone) => (
                <li className="action-timeline__item" key={milestone.number}>
                  <article className="action-timeline__card">
                    <div className="action-timeline__number" aria-hidden="true">{milestone.number}</div>
                    <div>
                      <h3>{milestone.title}</h3>
                      <p>{milestone.summary}</p>
                      <p className="action-timeline__detail">{milestone.detail}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="petition" className="petition-section" aria-labelledby="petition-title">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="petition-section__copy">
              <p className="section-kicker">Add your voice</p>
              <h2 id="petition-title">Stand With The Silver Guardian</h2>
              <p>
                Please sign the 32 Wishes Petition to show that families, advocates, and communities embrace a holistic approach to caring for children affected by pediatric cancer.
              </p>
              <div className="petition-section__note">
                <span aria-hidden="true">✓</span>
                <p>Your signature demonstrates non-monetary support only.</p>
              </div>
            </div>
            <PetitionForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

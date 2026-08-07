import type { Metadata } from "next";
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
    summary: "Build early momentum through a hospital-pod branding concept for professional hockey organizations across North America.",
    detail: "The proposal envisions two wings of 16 pods each, creating 32 potential club-aligned opportunities.",
  },
  {
    number: "02",
    title: "Movement centers & 32 Wishes",
    summary: "Begin developing the Movement Therapy Center network and planning the 2027 Seeds of Hope Festival.",
    detail: "The festival is envisioned as a vehicle for the annual 32 Wishes in 32 Cities initiative.",
  },
  {
    number: "03",
    title: "The Silver Gryphon & fundraisers",
    summary: "Establish the proposed charitable organization and launch recurring community fundraising events.",
    detail: "The concept includes annual golf and ballroom-dance events designed to grow awareness and support.",
  },
  {
    number: "04",
    title: "Site selection",
    summary: "Complete a thorough site-selection evaluation for the proposed pediatric hospital.",
    detail: "The current projection focuses on northwest Georgia, between Atlanta and Chattanooga, Tennessee.",
  },
  {
    number: "05",
    title: "Break ground",
    summary: "Move from planning to construction once the required support, site, approvals, funding, and partnerships are in place.",
    detail: "The long-term vision is a pediatric hospital focused on cancer and cardiovascular research and care.",
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
                Each milestone depends on community participation, feasibility work, fundraising, regulatory review, and qualified clinical and development partners. These stages describe the initiative’s direction; they are not announced completion dates.
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
                    <span className="action-timeline__arrow" aria-hidden="true">↗</span>
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
              <h2 id="petition-title">Stand behind the vision</h2>
              <p>
                Sign the community petition to show that families, advocates, and neighbors want bold ideas for pediatric care to keep moving forward.
              </p>
              <div className="petition-section__note">
                <span aria-hidden="true">✓</span>
                <p>Your signature demonstrates support; it does not create a donation or financial commitment.</p>
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

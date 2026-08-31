import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Overview",
  description:
    "Learn how The Silver Guardian brings together pediatric research, movement therapy, ice hockey, wish granting, and community support.",
  path: "/overview/",
  keywords: [
    "The Silver Guardian overview",
    "pediatric cancer support",
    "pediatric heart disease support",
    "movement therapy",
    "hockey wish granting",
  ],
});

const overviewSections = [
  {
    number: "01",
    title: "What is The Silver Guardian?",
    paragraphs: [
      "The Silver Guardian is an innovative initiative to empower and inspire a holistic approach to helping members of the community who are battling life-threatening illness, such as pediatric cancer and heart disease. Through this initiative we hope to increase the quality of life, not only for these individuals, but the support network that surrounds them.",
      "It is our intention to make a generational impact across all three major care points of the journey: Clinically via the founding of a new pediatric cancer and heart disease research facility, Non-clinically via the establishment of a unique chain of “Movement Therapy Centers” in communities across the US and Canada, and Charitably through the coordination of hockey related wish granting at an annual, one of a kind music/charity festival.",
    ],
  },
  {
    number: "02",
    title: "Why Ice Hockey?",
    paragraphs: [
      "Ice hockey requires intentional focus and specialized equipment to participate. Similarly, it requires these same elements to provide effective care holistically to pediatric cancer and heart disease patients in our communities. The sport of ice hockey also provides a unique platform to boost morale and a positive fighting spirit in patients who battle for their lives every day against impossible odds.",
    ],
  },
  {
    number: "03",
    title: "Why Ballroom Dancing and Boxing?",
    paragraphs: [
      "Not everyone has access to or possesses the ability to play the sport of ice hockey, however, participating in competitive ballroom dancing and non-contact boxing provides a very similar, hands on opportunity to strengthen bodies and minds in a similar way through artistically competitive activities. It is our intention to increase access to these immensely beneficial activities in innovative ways throughout the US and Canada.",
      "Our facilities would also incorporate a unique Ice Hockey Lounge based on a European coffee house design, and a Physical Therapy suite which will help bridge the gap between clinical and non-clinical support for these courageous individuals who have had their world radically altered by life threatening illness, such as pediatric cancer and heart disease.",
    ],
  },
  {
    number: "04",
    title: "Why Wish Granting?",
    paragraphs: [
      "Annual wish granting has the potential to start a cascade of hope amongst patients whose lives have been radically altered by life threatening illness, such as pediatric cancer and heart disease. In light of this fact, we have a vision to annually grant 32 ice hockey related wishes at a single, innovative music festival event, starting in 2027.",
    ],
  },
];

export default function OverviewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="overview-hero">
          <div className="overview-hero__mark" aria-hidden="true">32</div>
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h1>Overview</h1>
          </div>
        </section>

        <section className="overview-details" aria-label="About The Silver Guardian">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            {overviewSections.map((section) => (
              <article className="overview-detail" key={section.number}>
                <div className="overview-detail__number" aria-hidden="true">
                  {section.number}
                </div>
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="overview-help" aria-labelledby="overview-help-title">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 id="overview-help-title">How You Can Help</h2>
            <p>
              You can help The Silver Guardian Initiative bring this vision to life
              in two unique ways. One, you can sign our non-monetary, 32 Wishes
              petition which will allow your voice to be heard in support of patients
              battling life threatening illness, such as pediatric cancer and heart
              disease, across every professional ice hockey market in the US and
              Canada. Two, you can participate monetarily through our Score a Goal
              campaign. This campaign is essentially a tangible petition that will
              demonstrate the resolve of the community to strengthen the support
              network for patients battling life threatening illness, specifically cancer.
            </p>
            <p>
              Once we have adequately demonstrated this community support to the
              North American, professional ice hockey community, we will donate the
              proceeds of the Score a Goal campaign to a charity organization focused
              specifically on helping cancer patients overcome the obstacles they face
              in everyday life when they are not receiving treatment in a clinical environment.
            </p>
            <div className="overview-help__actions">
              <Link className="site-button site-button--secondary" href="/32-wishes">
                Sign the 32 Wishes Petition
              </Link>
              <Link className="site-button site-button--outline" href="/fundraising">
                Explore Score a Goal
              </Link>
            </div>
          </div>
        </section>

        <section className="overview-message" aria-labelledby="team-message-title">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 id="team-message-title">A Message from The Silver Guardian Team</h2>
            </div>
            <div className="overview-message__copy">
              <p>
                The Silver Guardian is a group of business owners and community advocates who have joined forces to promote this innovative, holistic vision inspiring hope and healing in the face of life-threatening conditions, primarily childhood cancer and heart disease.
              </p>
              <p>&nbsp;</p>
              <p>
                We thank you in advance for your generous support both through the 32 Wishes Petition and the Score a Goal Campaign. We also encourage you to visit the rest our website pages to discover a more in depth explanation of this innovative vision inspired by the sport of ice hockey!
              </p>
              <p className="overview-message__signature">
                Thank you,<br />
                <strong>The Silver Guardian Team</strong>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

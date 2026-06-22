import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section id="home" className="hero-section">
          <div className="mx-auto flex min-h-[620px] w-full max-w-6xl items-center px-6 py-20">
            <div>
              <h1 className="hero-title font-semibold leading-tight tracking-normal">
                The Silver Guardian
              </h1>
              <p className="hero-message mt-5 max-w-3xl">
                Support a New Kind of Pediatric Care Experience
              </p>
              <p className="hero-copy mt-6 max-w-3xl">
                The Silver Guardian is gathering community support for a
                proposed charitable pediatric cancer and cardiovascular research
                hospital concept designed to bring hope, healing, and
                family-centered care to children facing life-threatening
                conditions.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="site-button site-button--secondary"
                  href="/contact"
                >
                  Contact Us
                </a>
                <a
                  className="site-button site-button--outline"
                  href="#fundraising"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-note-section">
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            <p>
              The Silver Guardian is a group of anonymous business owners and
              community advocates who have joined together to gather community
              support for a new charitable pediatric cancer/cardiovascular
              hospital facility with a family friendly ice hockey theme. Please
              visit the pages of this website to see how you can demonstrate
              your support for brave children and their families in their fight
              for survival. Thank you, The Silver Guardian
            </p>
          </div>
        </section>

        <section id="fundraising" className="content-section">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="max-w-3xl">
              <p className="section-kicker">Ways to help</p>
              <h2 className="section-title">
                Every act of support helps move the mission forward.
              </h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              [
                "Fundraising",
                "Seasonal events and community campaigns will help gather the resources needed to support the hospital concept and the families it aims to serve.",
              ],
              [
                "Movement Therapy",
                "Future movement therapy centers will encourage patients, families, and community members to build strength through artistic and competitive exercise.",
              ],
              [
                "Newsletter",
                "Progress updates will keep supporters connected as fundraising, partnerships, and community programs continue to take shape.",
              ],
            ].map(([title, text]) => (
              <div key={title} className="feature-callout">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7">
                  {text}
                </p>
                <a className="feature-link" href="#">
                  Learn more
                </a>
              </div>
            ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

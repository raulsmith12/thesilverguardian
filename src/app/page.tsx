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
                Support an Innovative Pediatric Care Experience
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
                  href="/fundraising"
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
              The Silver Guardian is a group of anonymous business owners and community advocates who have joined together to gather community support for an innovative pediatric care facility with a kid friendly ice hockey theme designed to inspire hope and healing in the face of life threatening conditions, primarily cancer and heart disease.
            </p>
            <p>Thank you,</p>
            <p>The Silver Guardian Team</p>
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
                "Score a Goal",
                "Seasonal events and community campaigns will help gather the resources needed to both construct and support the care facility concept.",
                "/fundraising",
              ],
              [
                "32 Wishes in 32 Cities",
                "Every year, one of our goals is to grant 32 hockey related wishes to brave kids in 32 cities across the US and Canada.",
                "/32-wishes",
              ],
              [
                "Movement Therapy",
                "Innovative movement therapy centers will encourage patients and community members to build strength through artistic and competitive exercise.",
                "/movement-therapy-center",
              ],
              [
                "Newsletter",
                "Progress updates will keep you connected as goals, partnerships, and concepts continue to take shape.",
                "/contact",
              ],
            ].map(([title, text, url]) => (
              <div key={title} className="feature-callout">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7">
                  {text}
                </p>
                <a className="feature-link" href={url}>
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

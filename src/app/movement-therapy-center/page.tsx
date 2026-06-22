import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function MovementTherapyCenterPage() {
  const stats = ["Dance", "Kickboxing / Boxing", "General Exercise"];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Movement Therapy Center</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <section className="movement-intro">
              <p>
                The Silver Guardian will be contributing to the nonclinical care of patients by directly investing in a chain of specially designed “movement therapy” centers that encourage patients battling cancer and other mobility limiting diseases,
                such as Parkinson’s disease, as well as the general community, to positively improve their health through both artistic and competitive exercise. Please check back soon for more details.
              </p>
            </section>

            <section className="stats-section" aria-labelledby="stats-title">
              <h2 id="stats-title">Stats</h2>
              <div className="stats-grid">
                {stats.map((stat) => (
                  <article className="stats-card" key={stat}>
                    <h3>{stat}</h3>
                    <p>Coming soon</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

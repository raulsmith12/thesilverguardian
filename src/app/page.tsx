import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid min-h-[620px] w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Protection with precision
              </p>
              <h1 className="text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
                The Silver Guardian
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                A modern guardian platform for people who need clear guidance,
                dependable oversight, and calm support when the stakes are high.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-md bg-cyan-300 px-6 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
                  href="#"
                >
                  Request a Consultation
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30">
              <div className="grid gap-4">
                {[
                  ["Response", "Clear next steps for urgent decisions."],
                  ["Oversight", "Organized care, assets, and communication."],
                  ["Continuity", "Steady support as situations evolve."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-md border border-white/10 bg-slate-900/70 p-5"
                  >
                    <h2 className="text-base font-semibold text-white">
                      {title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
            {[
              "Trusted planning",
              "Human-centered support",
              "Documented accountability",
            ].map((item) => (
              <div key={item} className="border-l-4 border-cyan-400 pl-5">
                <h2 className="text-xl font-semibold text-slate-950">
                  {item}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Practical infrastructure for responsible decisions, clean
                  communication, and confidence across every engagement.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

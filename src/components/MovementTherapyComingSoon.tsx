import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import type { Locale } from "@/lib/i18n";

export function MovementTherapyComingSoon({ locale }: { locale: Locale }) {
  const isFrench = locale === "fr-CA";

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale={locale} />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>{isFrench ? "Bientôt disponible" : "Coming Soon"}</h1>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

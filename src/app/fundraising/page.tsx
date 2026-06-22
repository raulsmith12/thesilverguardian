import { Footer } from "@/components/Footer";
import { FundraisingContent } from "@/components/FundraisingContent";
import { Navigation } from "@/components/Navigation";

export default function FundraisingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Fundraiser Efforts</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <FundraisingContent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

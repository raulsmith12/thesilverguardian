import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cancer Prevention",
  description:
    "Cancer prevention information from The Silver Guardian is coming soon.",
  path: "/cancer-prevention/",
  keywords: [
    "cancer prevention",
    "childhood cancer awareness",
    "The Silver Guardian",
  ],
});

export default function CancerPreventionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Cancer Prevention</h1>
          </div>
        </section>
        <section aria-labelledby="cancer-prevention-status">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center">
            <svg
              aria-label="Gold childhood cancer awareness ribbon"
              className="mb-8 h-auto w-40 drop-shadow-lg sm:w-52"
              role="img"
              viewBox="0 0 220 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gold-ribbon" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f8dc72" />
                  <stop offset="0.5" stopColor="#d4af37" />
                  <stop offset="1" stopColor="#a67c00" />
                </linearGradient>
              </defs>
              <path
                d="M70 18c-24 33-30 66-17 99 9 23 25 42 45 59L39 282h49l37-76 40 76h49l-61-109c21-19 36-39 43-61 10-32 2-64-24-94l-35 29c16 19 21 35 16 50-5 16-19 32-42 49-24-19-39-36-44-52-4-14 1-30 16-48L70 18Z"
                fill="url(#gold-ribbon)"
              />
              <path
                d="M83 46c20 25 43 50 70 71 7-12 10-23 10-34 0-12-6-24-18-37l27-28c26 30 34 62 24 94-7 22-22 42-43 61l-28 33-27-30 13-30c23-17 37-33 42-49 5-15 0-31-16-50L83 46Z"
                fill="#b68c13"
                opacity="0.42"
              />
            </svg>
            <h2
              className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl"
              id="cancer-prevention-status"
            >
              Check Back Soon for More Details
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

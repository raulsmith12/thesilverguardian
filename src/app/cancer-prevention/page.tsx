import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import silverGuardianLogo from "@/img/silver-guardian-w-child.png";
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
      <main className="flex flex-1 flex-col">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>Cancer Prevention</h1>
          </div>
        </section>
        <section
          aria-labelledby="cancer-prevention-status"
          className="page-content page-content--green flex-1"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center">
            <Image
              alt="The Silver Guardian logo"
              className="mb-8 h-auto w-40 drop-shadow-lg sm:w-52"
              src={silverGuardianLogo}
            />
            <h2
              className="text-2xl font-bold text-white sm:text-3xl"
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

import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { kidFriendlyResearchHospitalContent } from "@/lib/kidFriendlyResearchHospitalContent";
import { createPageMetadata } from "@/lib/seo";

const content = kidFriendlyResearchHospitalContent["fr-CA"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/fr-ca/kid-friendly-research-hospital/",
  locale: "fr-CA",
  keywords: content.keywords,
});

export default function KidFriendlyResearchHospitalPage() {
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

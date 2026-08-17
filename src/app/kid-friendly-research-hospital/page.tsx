import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { kidFriendlyResearchHospitalContent } from "@/lib/kidFriendlyResearchHospitalContent";
import { createPageMetadata } from "@/lib/seo";

const content = kidFriendlyResearchHospitalContent.en;

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/kid-friendly-research-hospital/",
  keywords: content.keywords,
});

export default function KidFriendlyResearchHospitalPage() {
  return <GeoTargetPage content={content} locale="en" />;
}

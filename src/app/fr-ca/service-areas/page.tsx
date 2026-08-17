import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { serviceAreasLandingContent } from "@/lib/serviceAreaContent";
import { createPageMetadata } from "@/lib/seo";

const content = serviceAreasLandingContent["fr-CA"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/fr-ca/service-areas/",
  locale: "fr-CA",
  keywords: content.keywords,
});

export default function FrenchServiceAreasPage() {
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

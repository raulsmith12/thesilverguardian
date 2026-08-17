import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { unitedStatesServiceAreaContent } from "@/lib/serviceAreaContent";
import { createPageMetadata } from "@/lib/seo";

const content = unitedStatesServiceAreaContent["fr-CA"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/fr-ca/service-areas/united-states/",
  locale: "fr-CA",
  keywords: content.keywords,
});

export default function FrenchUnitedStatesPage() {
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

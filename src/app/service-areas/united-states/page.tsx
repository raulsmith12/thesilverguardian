import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { unitedStatesServiceAreaContent } from "@/lib/serviceAreaContent";
import { createPageMetadata } from "@/lib/seo";

const content = unitedStatesServiceAreaContent.en;

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/service-areas/united-states/",
  keywords: content.keywords,
});

export default function UnitedStatesPage() {
  return <GeoTargetPage content={content} locale="en" />;
}

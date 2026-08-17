import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { serviceAreasLandingContent } from "@/lib/serviceAreaContent";
import { createPageMetadata } from "@/lib/seo";

const content = serviceAreasLandingContent.en;

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/service-areas/",
  keywords: content.keywords,
});

export default function ServiceAreasPage() {
  return <GeoTargetPage content={content} locale="en" />;
}

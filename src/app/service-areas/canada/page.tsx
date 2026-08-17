import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { canadaServiceAreaContent } from "@/lib/serviceAreaContent";
import { createPageMetadata } from "@/lib/seo";

const content = canadaServiceAreaContent.en;

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/service-areas/canada/",
  keywords: content.keywords,
});

export default function CanadaPage() {
  return <GeoTargetPage content={content} locale="en" />;
}

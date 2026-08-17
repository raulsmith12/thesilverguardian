import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { canadaServiceAreaContent } from "@/lib/serviceAreaContent";
import { createPageMetadata } from "@/lib/seo";

const content = canadaServiceAreaContent["fr-CA"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/fr-ca/service-areas/canada/",
  locale: "fr-CA",
  keywords: content.keywords,
});

export default function FrenchCanadaPage() {
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

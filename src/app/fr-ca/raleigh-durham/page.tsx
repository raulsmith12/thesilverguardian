import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { raleighDurhamLandingContent } from "@/lib/raleighDurhamContent";
import { createPageMetadata } from "@/lib/seo";

const content = raleighDurhamLandingContent["fr-CA"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/fr-ca/raleigh-durham/",
  locale: "fr-CA",
  keywords: content.keywords,
});

export default function FrenchRaleighDurhamPage() {
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

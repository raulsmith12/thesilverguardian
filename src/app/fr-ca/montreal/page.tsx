import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { montrealLandingContent } from "@/lib/montrealContent";
import { createPageMetadata } from "@/lib/seo";

const content = montrealLandingContent["fr-CA"];

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/fr-ca/montreal/",
  locale: "fr-CA",
  keywords: content.keywords,
});

export default function FrenchMontrealPage() {
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

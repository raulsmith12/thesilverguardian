import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { lavalLandingContent } from "@/lib/lavalContent";
import { createPageMetadata } from "@/lib/seo";

const content = lavalLandingContent["fr-CA"];
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/fr-ca/laval/", locale: "fr-CA", keywords: content.keywords });

export default function FrenchLavalPage() {
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { seattleLandingContent } from "@/lib/seattleContent";
import { createPageMetadata } from "@/lib/seo";

const content = seattleLandingContent.en;
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/seattle/", keywords: content.keywords });

export default function SeattlePage() {
  return <GeoTargetPage content={content} locale="en" />;
}

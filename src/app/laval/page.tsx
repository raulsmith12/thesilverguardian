import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { lavalLandingContent } from "@/lib/lavalContent";
import { createPageMetadata } from "@/lib/seo";

const content = lavalLandingContent.en;
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/laval/", keywords: content.keywords });

export default function LavalPage() {
  return <GeoTargetPage content={content} locale="en" />;
}

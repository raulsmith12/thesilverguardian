import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { montrealLandingContent } from "@/lib/montrealContent";
import { createPageMetadata } from "@/lib/seo";

const content = montrealLandingContent.en;

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/montreal/",
  keywords: content.keywords,
});

export default function MontrealPage() {
  return <GeoTargetPage content={content} locale="en" />;
}

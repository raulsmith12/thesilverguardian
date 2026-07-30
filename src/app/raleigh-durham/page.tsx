import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { raleighDurhamLandingContent } from "@/lib/raleighDurhamContent";
import { createPageMetadata } from "@/lib/seo";

const content = raleighDurhamLandingContent.en;

export const metadata: Metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: "/raleigh-durham/",
  keywords: content.keywords,
});

export default function RaleighDurhamPage() {
  return <GeoTargetPage content={content} locale="en" />;
}

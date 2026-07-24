import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { terrebonneLandingContent } from "@/lib/terrebonneContent";
import { createPageMetadata } from "@/lib/seo";
const content = terrebonneLandingContent.en;
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/terrebonne/", keywords: content.keywords });
export default function TerrebonnePage() { return <GeoTargetPage content={content} locale="en" />; }

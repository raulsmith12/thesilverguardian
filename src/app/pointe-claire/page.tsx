import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { pointeClaireLandingContent } from "@/lib/pointeClaireContent";
import { createPageMetadata } from "@/lib/seo";
const content = pointeClaireLandingContent.en;
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/pointe-claire/", keywords: content.keywords });
export default function PointeClairePage() { return <GeoTargetPage content={content} locale="en" />; }

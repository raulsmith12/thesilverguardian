import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { brossardLandingContent } from "@/lib/brossardContent";
import { createPageMetadata } from "@/lib/seo";
const content = brossardLandingContent.en;
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/brossard/", keywords: content.keywords });
export default function BrossardPage() { return <GeoTargetPage content={content} locale="en" />; }

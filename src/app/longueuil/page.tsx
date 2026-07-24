import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { longueuilLandingContent } from "@/lib/longueuilContent";
import { createPageMetadata } from "@/lib/seo";

const content = longueuilLandingContent.en;
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/longueuil/", keywords: content.keywords });
export default function LongueuilPage() { return <GeoTargetPage content={content} locale="en" />; }

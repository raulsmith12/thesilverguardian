import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { brossardLandingContent } from "@/lib/brossardContent";
import { createPageMetadata } from "@/lib/seo";
const content = brossardLandingContent["fr-CA"];
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/fr-ca/brossard/", locale: "fr-CA", keywords: content.keywords });
export default function FrenchBrossardPage() { return <GeoTargetPage content={content} locale="fr-CA" />; }

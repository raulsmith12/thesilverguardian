import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { terrebonneLandingContent } from "@/lib/terrebonneContent";
import { createPageMetadata } from "@/lib/seo";
const content = terrebonneLandingContent["fr-CA"];
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/fr-ca/terrebonne/", locale: "fr-CA", keywords: content.keywords });
export default function FrenchTerrebonnePage() { return <GeoTargetPage content={content} locale="fr-CA" />; }

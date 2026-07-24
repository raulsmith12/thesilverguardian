import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { pointeClaireLandingContent } from "@/lib/pointeClaireContent";
import { createPageMetadata } from "@/lib/seo";
const content = pointeClaireLandingContent["fr-CA"];
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/fr-ca/pointe-claire/", locale: "fr-CA", keywords: content.keywords });
export default function FrenchPointeClairePage() { return <GeoTargetPage content={content} locale="fr-CA" />; }

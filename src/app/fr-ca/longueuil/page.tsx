import type { Metadata } from "next";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { longueuilLandingContent } from "@/lib/longueuilContent";
import { createPageMetadata } from "@/lib/seo";

const content = longueuilLandingContent["fr-CA"];
export const metadata: Metadata = createPageMetadata({ title: content.title, description: content.description, path: "/fr-ca/longueuil/", locale: "fr-CA", keywords: content.keywords });
export default function FrenchLongueuilPage() { return <GeoTargetPage content={content} locale="fr-CA" />; }

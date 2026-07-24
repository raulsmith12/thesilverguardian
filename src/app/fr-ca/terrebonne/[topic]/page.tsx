import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { getTerrebonneTopicContent, terrebonneTopicSlugs } from "@/lib/terrebonneContent";
import { createPageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return terrebonneTopicSlugs.map((topic) => ({ topic })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { topic } = await params; const content = getTerrebonneTopicContent(topic, "fr-CA"); if (!content) return {}; return createPageMetadata({ title: content.title, description: content.description, path: `/fr-ca/terrebonne/${topic}/`, locale: "fr-CA", keywords: content.keywords }); }
export default async function FrenchTerrebonneTopicPage({ params }: Props) { const { topic } = await params; const content = getTerrebonneTopicContent(topic, "fr-CA"); if (!content) notFound(); return <GeoTargetPage content={content} locale="fr-CA" />; }

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { getLongueuilTopicContent, longueuilTopicSlugs } from "@/lib/longueuilContent";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return longueuilTopicSlugs.map((topic) => ({ topic })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { topic } = await params; const content = getLongueuilTopicContent(topic, "fr-CA"); if (!content) return {}; return createPageMetadata({ title: content.title, description: content.description, path: `/fr-ca/longueuil/${topic}/`, locale: "fr-CA", keywords: content.keywords }); }
export default async function FrenchLongueuilTopicPage({ params }: Props) { const { topic } = await params; const content = getLongueuilTopicContent(topic, "fr-CA"); if (!content) notFound(); return <GeoTargetPage content={content} locale="fr-CA" />; }

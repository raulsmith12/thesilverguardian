import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { getPointeClaireTopicContent, pointeClaireTopicSlugs } from "@/lib/pointeClaireContent";
import { createPageMetadata } from "@/lib/seo";
type Props = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return pointeClaireTopicSlugs.map((topic) => ({ topic })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { topic } = await params; const content = getPointeClaireTopicContent(topic, "en"); if (!content) return {}; return createPageMetadata({ title: content.title, description: content.description, path: `/pointe-claire/${topic}/`, keywords: content.keywords }); }
export default async function PointeClaireTopicPage({ params }: Props) { const { topic } = await params; const content = getPointeClaireTopicContent(topic, "en"); if (!content) notFound(); return <GeoTargetPage content={content} locale="en" />; }

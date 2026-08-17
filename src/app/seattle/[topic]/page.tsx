import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { getSeattleTopicContent, seattleTopicSlugs } from "@/lib/seattleContent";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ topic: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return seattleTopicSlugs.map((topic) => ({ topic })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const content = getSeattleTopicContent(topic, "en");
  if (!content) return {};
  return createPageMetadata({ title: content.title, description: content.description, path: `/seattle/${topic}/`, keywords: content.keywords });
}

export default async function SeattleTopicPage({ params }: Props) {
  const { topic } = await params;
  const content = getSeattleTopicContent(topic, "en");
  if (!content) notFound();
  return <GeoTargetPage content={content} locale="en" />;
}

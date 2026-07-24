import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { getMontrealTopicContent, montrealTopicSlugs } from "@/lib/montrealContent";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return montrealTopicSlugs.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const content = getMontrealTopicContent(topic, "en");
  if (!content) return {};
  return createPageMetadata({ title: content.title, description: content.description, path: `/montreal/${topic}/`, keywords: content.keywords });
}

export default async function MontrealTopicPage({ params }: Props) {
  const { topic } = await params;
  const content = getMontrealTopicContent(topic, "en");
  if (!content) notFound();
  return <GeoTargetPage content={content} locale="en" />;
}

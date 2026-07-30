import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { getRaleighDurhamTopicContent, raleighDurhamTopicSlugs } from "@/lib/raleighDurhamContent";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return raleighDurhamTopicSlugs.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const content = getRaleighDurhamTopicContent(topic, "fr-CA");
  if (!content) return {};
  return createPageMetadata({ title: content.title, description: content.description, path: `/fr-ca/raleigh-durham/${topic}/`, locale: "fr-CA", keywords: content.keywords });
}

export default async function FrenchRaleighDurhamTopicPage({ params }: Props) {
  const { topic } = await params;
  const content = getRaleighDurhamTopicContent(topic, "fr-CA");
  if (!content) notFound();
  return <GeoTargetPage content={content} locale="fr-CA" />;
}

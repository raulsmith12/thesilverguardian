import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { createPageMetadata } from "@/lib/seo";
import {
  getWashingtonAreaTopicContent,
  washingtonAreaSlugs,
  washingtonAreaTopicSlugs,
} from "@/lib/washingtonAreaContent";

type Props = { params: Promise<{ serviceArea: string; topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return washingtonAreaSlugs.flatMap((serviceArea) =>
    washingtonAreaTopicSlugs.map((topic) => ({ serviceArea, topic })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceArea, topic } = await params;
  const content = getWashingtonAreaTopicContent(serviceArea, topic, "en");
  if (!content) return {};

  return createPageMetadata({
    title: content.title,
    description: content.description,
    path: `/${serviceArea}/${topic}/`,
    keywords: content.keywords,
  });
}

export default async function WashingtonServiceAreaTopicPage({ params }: Props) {
  const { serviceArea, topic } = await params;
  const content = getWashingtonAreaTopicContent(serviceArea, topic, "en");
  if (!content) notFound();

  return <GeoTargetPage content={content} locale="en" />;
}

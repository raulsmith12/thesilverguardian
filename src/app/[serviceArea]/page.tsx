import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeoTargetPage } from "@/components/GeoTargetPage";
import { createPageMetadata } from "@/lib/seo";
import { getWashingtonAreaContent, washingtonAreaSlugs } from "@/lib/washingtonAreaContent";

type Props = { params: Promise<{ serviceArea: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return washingtonAreaSlugs.map((serviceArea) => ({ serviceArea })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceArea } = await params;
  const content = getWashingtonAreaContent(serviceArea, "en");
  if (!content) return {};
  return createPageMetadata({ title: content.title, description: content.description, path: `/${serviceArea}/`, keywords: content.keywords });
}

export default async function WashingtonServiceAreaPage({ params }: Props) {
  const { serviceArea } = await params;
  const content = getWashingtonAreaContent(serviceArea, "en");
  if (!content) notFound();
  return <GeoTargetPage content={content} locale="en" />;
}

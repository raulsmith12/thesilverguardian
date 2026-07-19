import type { Metadata } from "next";
import { getLocalizedAlternates, type Locale } from "@/lib/i18n";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = new URL(
  configuredSiteUrl || "https://thesilverguardian.com",
);

export const SITE_NAME = "The Silver Guardian";

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords: string[];
  locale?: Locale;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  locale = "en",
}: PageMetadata): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: getLocalizedAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: locale === "fr-CA" ? "fr_CA" : "en_US",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

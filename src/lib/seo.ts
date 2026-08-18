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

// Keep city-targeted and service-area SEO pages live while temporarily asking
// crawlers not to index them. Remove the matching route from this set to make a
// page family indexable again.
const temporarilyNonIndexableGeoRoutes = new Set([
  "bellevue",
  "brossard",
  "everett",
  "gig-harbor",
  "laval",
  "longueuil",
  "montreal",
  "pointe-claire",
  "raleigh-durham",
  "renton",
  "seattle",
  "service-areas",
  "tacoma",
  "terrebonne",
]);

function isTemporarilyNonIndexableGeoPage(path: PageMetadata["path"]) {
  const segments = path.split("/").filter(Boolean);
  const route = segments[0] === "fr-ca" ? segments[1] : segments[0];

  return route ? temporarilyNonIndexableGeoRoutes.has(route) : false;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  locale = "en",
}: PageMetadata): Metadata {
  const isTemporarilyNonIndexable = isTemporarilyNonIndexableGeoPage(path);

  return {
    title,
    description,
    keywords,
    alternates: getLocalizedAlternates(path, locale),
    ...(isTemporarilyNonIndexable
      ? { robots: { index: false, follow: true } }
      : {}),
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

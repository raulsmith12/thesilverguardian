import type { Metadata } from "next";
import socialPreviewImage from "@/img/silver-guardian-w-child.png";
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

// Keep service-area directory pages live while temporarily asking crawlers not
// to index them.
const temporarilyNonIndexableGeoRoutes = new Set([
  "service-areas",
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
  const previewImage = {
    url: new URL(socialPreviewImage.src, SITE_URL).toString(),
    width: socialPreviewImage.width,
    height: socialPreviewImage.height,
    alt: locale === "fr-CA"
      ? "Logo de The Silver Guardian avec un enfant et des rubans dorés"
      : "The Silver Guardian logo with a child and gold awareness ribbons",
  };

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
      images: [previewImage],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [previewImage],
    },
  };
}

export type Locale = "en" | "fr-CA";

export const DEFAULT_LOCALE: Locale = "en";
export const FRENCH_PREFIX = "/fr-ca";

export function localizedPath(path: string, locale: Locale): string {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;

  return locale === "fr-CA"
    ? `${FRENCH_PREFIX}${normalizedPath}`
    : normalizedPath;
}

export function getLocalizedAlternates(path: string, locale: Locale = "en") {
  const englishPath = path.startsWith(`${FRENCH_PREFIX}/`)
    ? path.slice(FRENCH_PREFIX.length)
    : path;

  return {
    canonical: locale === "fr-CA" ? localizedPath(englishPath, locale) : englishPath,
    languages: {
      "en-US": englishPath,
      "fr-CA": localizedPath(englishPath, "fr-CA"),
      "x-default": englishPath,
    },
  };
}

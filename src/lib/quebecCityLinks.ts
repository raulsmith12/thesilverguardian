import type { Locale } from "@/lib/i18n";

const cities = [
  { slug: "montreal", name: "Montréal" },
  { slug: "laval", name: "Laval" },
  { slug: "longueuil", name: "Longueuil" },
  { slug: "brossard", name: "Brossard" },
  { slug: "terrebonne", name: "Terrebonne" },
  { slug: "pointe-claire", name: "Pointe-Claire" },
] as const;

export function getQuebecCityLinks(locale: Locale, currentCity: string) {
  const isFrench = locale === "fr-CA";
  return cities.filter((city) => city.slug !== currentCity).map((city) => ({
    href: `/${city.slug}/`,
    label: isFrench ? `soutien aux soins pédiatriques à ${city.name}` : `pediatric care support in ${city.name}`,
    description: isFrench ? `Découvrez la page locale et les ressources de ${city.name}.` : `Explore the local landing page and resources for ${city.name}.`,
  }));
}

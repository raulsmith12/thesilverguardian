import type { Locale } from "@/lib/i18n";
import type { GeoPageContent } from "@/lib/geoPageContent";
import pediatricEnvironmentHero from "@/img/generated/pediatric-environment-hero.webp";
import hockeyPlayerImage from "@/img/gerhard-crous-doivHPaG-Vw-unsplash.jpg";
import hockeyArenaImage from "@/img/hockey arena stock photo.jpg";

const commonImages = [
  { src: hockeyPlayerImage, alt: "Hockey player taking a shot during an indoor community game" },
  { src: pediatricEnvironmentHero, alt: "Welcoming accessible pediatric family lounge with subtle ice-hockey-inspired details" },
];

const commonFrenchImages = [
  { src: hockeyPlayerImage, alt: "Joueur de hockey effectuant un tir pendant une partie communautaire intérieure" },
  { src: pediatricEnvironmentHero, alt: "Salon familial pédiatrique accueillant, accessible et subtilement inspiré du hockey sur glace" },
];

export const serviceAreasLandingContent: Record<Locale, GeoPageContent> = {
  en: {
    title: "Service Areas",
    description: "Explore the countries connected to The Silver Guardian’s developing community vision.",
    keywords: ["The Silver Guardian service areas", "United States", "Canada", "community support"],
    eyebrow: "Service areas",
    heading: "A vision for communities across North America",
    introduction: "The Silver Guardian’s long-term vision considers communities across the United States and Canada. These directories provide country-level context only and do not announce an operating program, facility, healthcare partnership or available benefit in any particular city.",
    imageLabel: "North American communities",
    imageAlt: "Community support across the United States and Canada",
    heroAsset: { src: hockeyArenaImage, alt: "Interior of an ice hockey arena" },
    supportingImageAssets: commonImages,
    sections: [{
      heading: "Choose a country directory",
      paragraphs: ["Learn how the broader vision relates to the United States and Canada. City-specific resource pages are not currently published."],
      links: [
        { href: "/service-areas/united-states/", label: "United States", description: "Read the country-level overview." },
        { href: "/service-areas/canada/", label: "Canada", description: "Read the country-level overview." },
      ],
    }],
    relatedHeading: "Explore the wider mission",
    relatedLinks: [
      { href: "/32-wishes/", label: "32 Wishes", description: "Explore the North American hockey-wish vision." },
      { href: "/movement-therapy-center/", label: "Movement Therapy Centers", description: "Read about the developing movement concept." },
    ],
    faqHeading: "Service-area FAQ",
    faqs: [
      { question: "Does a service-area page mean a local program is active?", answer: "No. These pages provide country-level context and do not announce a local program, partner, facility or registration process." },
      { question: "Are city-specific pages currently available?", answer: "No. The previously published city-specific resource pages have been removed." },
    ],
    closingHeading: "Explore the initiative",
    closingText: "Review the initiative’s current programs and proposals to understand what is available and what remains a long-term vision.",
    ctaLabel: "View the Overview",
    ctaHref: "/overview/",
  },
  "fr-CA": {
    title: "Zones desservies",
    description: "Découvrez les pays liés à la vision communautaire en développement de The Silver Guardian.",
    keywords: ["zones desservies The Silver Guardian", "États-Unis", "Canada", "soutien communautaire"],
    eyebrow: "Zones desservies",
    heading: "Une vision pour les communautés nord-américaines",
    introduction: "La vision à long terme de The Silver Guardian concerne des communautés aux États-Unis et au Canada. Ces répertoires fournissent uniquement un contexte national et n’annoncent aucun programme actif, établissement, partenariat de soins ou avantage offert dans une ville particulière.",
    imageLabel: "Communautés nord-américaines",
    imageAlt: "Soutien communautaire aux États-Unis et au Canada",
    heroAsset: { src: hockeyArenaImage, alt: "Intérieur d’un aréna de hockey sur glace" },
    supportingImageAssets: commonFrenchImages,
    sections: [{
      heading: "Choisir un répertoire national",
      paragraphs: ["Découvrez comment la vision générale concerne les États-Unis et le Canada. Aucune page municipale spécifique n’est actuellement publiée."],
      links: [
        { href: "/service-areas/united-states/", label: "États-Unis", description: "Consultez l’aperçu national." },
        { href: "/service-areas/canada/", label: "Canada", description: "Consultez l’aperçu national." },
      ],
    }],
    relatedHeading: "Explorer la mission élargie",
    relatedLinks: [
      { href: "/32-wishes/", label: "32 souhaits", description: "Découvrez la vision nord-américaine de souhaits liés au hockey." },
      { href: "/movement-therapy-center/", label: "Centres de thérapie par le mouvement", description: "Découvrez le concept de mouvement en développement." },
    ],
    faqHeading: "FAQ sur les zones desservies",
    faqs: [
      { question: "Une page de zone signifie-t-elle qu’un programme local est actif?", answer: "Non. Ces pages fournissent un contexte national et n’annoncent aucun programme local, partenaire, établissement ou processus d’inscription." },
      { question: "Des pages municipales sont-elles actuellement offertes?", answer: "Non. Les pages de ressources municipales précédemment publiées ont été retirées." },
    ],
    closingHeading: "Explorer l’initiative",
    closingText: "Consultez les programmes et propositions actuels afin de comprendre ce qui est offert et ce qui demeure une vision à long terme.",
    ctaLabel: "Voir l’aperçu",
    ctaHref: "/overview/",
  },
};

function countryContent(locale: Locale, country: "United States" | "Canada"): GeoPageContent {
  const isFrench = locale === "fr-CA";
  const countryLabel = country === "United States" && isFrench ? "États-Unis" : country;
  const englishLocation = country === "United States" ? "the United States" : "Canada";
  const frenchLocation = country === "United States" ? "aux États-Unis" : "au Canada";

  return {
    title: isFrench ? `Zones desservies — ${countryLabel}` : `${country} Service Areas`,
    description: isFrench
      ? `Découvrez le contexte national de la vision communautaire de The Silver Guardian ${frenchLocation}.`
      : `Explore country-level context for The Silver Guardian’s developing community vision in ${englishLocation}.`,
    keywords: [countryLabel, "The Silver Guardian", isFrench ? "soutien communautaire" : "community support"],
    eyebrow: isFrench ? "Contexte national" : "Country overview",
    heading: isFrench ? `La vision de The Silver Guardian — ${countryLabel}` : `The Silver Guardian’s vision in ${englishLocation}`,
    introduction: isFrench
      ? `The Silver Guardian envisage une incidence communautaire à long terme ${frenchLocation}. Cette page ne désigne aucune ville précise et n’annonce aucun programme actif, emplacement, partenariat ou inscription.`
      : `The Silver Guardian envisions long-term community impact in ${englishLocation}. This page does not designate specific cities or announce an active program, location, partnership or registration process.`,
    imageLabel: countryLabel,
    imageAlt: isFrench ? `Vision communautaire ${frenchLocation}` : `Community vision in ${englishLocation}`,
    heroAsset: { src: hockeyArenaImage, alt: isFrench ? "Intérieur d’un aréna de hockey sur glace" : "Interior of an ice hockey arena" },
    supportingImageAssets: isFrench ? commonFrenchImages : commonImages,
    sections: [{
      heading: isFrench ? "Une portée nationale, sans promesse locale" : "Country-wide scope without local promises",
      paragraphs: [isFrench
        ? "Les futurs programmes ou événements nécessiteraient des partenaires qualifiés, des emplacements confirmés, des mesures de protection et des annonces distinctes. Aucune page municipale spécifique n’est actuellement publiée."
        : "Any future program or event would require qualified partners, confirmed locations, safeguards and separate announcements. City-specific resource pages are not currently published."],
    }],
    relatedHeading: isFrench ? "Explorer la mission" : "Explore the mission",
    relatedLinks: [
      { href: "/overview/", label: isFrench ? "Aperçu" : "Overview", description: isFrench ? "Découvrez les trois points d’impact." : "Learn about the three points of impact." },
      { href: "/32-wishes/", label: isFrench ? "32 souhaits" : "32 Wishes", description: isFrench ? "Découvrez la vision des souhaits liés au hockey." : "Explore the hockey-wish vision." },
    ],
    faqHeading: isFrench ? "FAQ nationale" : "Country overview FAQ",
    faqs: [{
      question: isFrench ? "Des villes précises sont-elles actuellement désignées?" : "Are specific cities currently designated?",
      answer: isFrench ? "Non. Aucune page municipale spécifique n’est actuellement publiée." : "No. City-specific resource pages are not currently published.",
    }],
    closingHeading: isFrench ? "Rester informé" : "Stay informed",
    closingText: isFrench ? "Consultez les pages principales de l’initiative pour obtenir les renseignements actuellement confirmés." : "Use the initiative’s main pages for currently confirmed information.",
    ctaLabel: isFrench ? "Voir l’aperçu" : "View the Overview",
    ctaHref: "/overview/",
  };
}

export const unitedStatesServiceAreaContent: Record<Locale, GeoPageContent> = {
  en: countryContent("en", "United States"),
  "fr-CA": countryContent("fr-CA", "United States"),
};

export const canadaServiceAreaContent: Record<Locale, GeoPageContent> = {
  en: countryContent("en", "Canada"),
  "fr-CA": countryContent("fr-CA", "Canada"),
};

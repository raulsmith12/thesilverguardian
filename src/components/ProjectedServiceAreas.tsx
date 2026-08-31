import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import canadaFlag from "@/img/generated/canada-flag.webp";
import unitedStatesFlag from "@/img/generated/united-states-flag.webp";
import hockeyHero from "@/img/hockey-hero-rising-stockcake.jpg";
import { localizedPath, type Locale } from "@/lib/i18n";

type Region = {
  name: string;
  population: string;
  capital: string;
  largestCity: string;
  teams: string;
  landmarks: string;
};

type CountrySection = {
  name: string;
  introduction: string;
  flag: StaticImageData;
  flagAlt: string;
  regions: Region[];
};

const serviceAreas: Record<Locale, CountrySection[]> = {
  en: [
    {
      name: "United States",
      introduction:
        "The projected United States focus connects established and growing hockey communities across the South, Mountain West, and Pacific Northwest.",
      flag: unitedStatesFlag,
      flagAlt: "Flag of the United States with stars and stripes",
      regions: [
        {
          name: "Florida",
          population: "23,462,518 (July 1, 2025 estimate)",
          capital: "Tallahassee",
          largestCity: "Jacksonville",
          teams: "Florida Panthers and Tampa Bay Lightning",
          landmarks: "Everglades National Park, Kennedy Space Center, and Walt Disney World",
        },
        {
          name: "Nevada",
          population: "3,282,188 (July 1, 2025 estimate)",
          capital: "Carson City",
          largestCity: "Las Vegas",
          teams: "Vegas Golden Knights",
          landmarks: "Las Vegas Strip, Hoover Dam, and Lake Tahoe",
        },
        {
          name: "North and South Carolina",
          population: "16,768,242 combined (July 1, 2025 estimates)",
          capital: "Raleigh and Columbia",
          largestCity: "Charlotte and Charleston",
          teams: "Carolina Hurricanes",
          landmarks: "Outer Banks, Great Smoky Mountains, and Charleston Historic District",
        },
        {
          name: "Tennessee",
          population: "7,315,076 (July 1, 2025 estimate)",
          capital: "Nashville",
          largestCity: "Nashville",
          teams: "Nashville Predators",
          landmarks: "Great Smoky Mountains, Graceland, and the Grand Ole Opry",
        },
        {
          name: "Washington",
          population: "8,001,020 (July 1, 2025 estimate)",
          capital: "Olympia",
          largestCity: "Seattle",
          teams: "Seattle Kraken",
          landmarks: "Space Needle, Mount Rainier, and Chihuly Garden and Glass",
        },
      ],
    },
    {
      name: "Canada",
      introduction:
        "The projected Canadian focus includes Alberta, British Columbia, Ontario, and Quebec, four provinces with deep hockey traditions and large, diverse communities.",
      flag: canadaFlag,
      flagAlt: "National flag of Canada with a red maple leaf",
      regions: [
        {
          name: "Alberta",
          population: "5,057,077 (April 1, 2026 estimate)",
          capital: "Edmonton",
          largestCity: "Calgary",
          teams: "Calgary Flames and Edmonton Oilers",
          landmarks: "Banff National Park, Jasper National Park, and West Edmonton Mall",
        },
        {
          name: "British Columbia",
          population: "5,646,420 (April 1, 2026 estimate)",
          capital: "Victoria",
          largestCity: "Vancouver",
          teams: "Vancouver Canucks",
          landmarks: "Stanley Park, Whistler, and Pacific Rim National Park Reserve",
        },
        {
          name: "Ontario",
          population: "16,103,890 (April 1, 2026 estimate)",
          capital: "Toronto",
          largestCity: "Toronto",
          teams: "Toronto Maple Leafs and Ottawa Senators",
          landmarks: "CN Tower, Niagara Falls, and Parliament Hill",
        },
        {
          name: "Quebec",
          population: "9,016,222 (April 1, 2026 estimate)",
          capital: "Quebec City",
          largestCity: "Montreal",
          teams: "Montreal Canadiens",
          landmarks: "Old Quebec, Château Frontenac, and Mont-Tremblant",
        },
      ],
    },
  ],
  "fr-CA": [
    {
      name: "États-Unis",
      introduction:
        "La portée américaine projetée relie des communautés de hockey établies et en croissance dans le Sud, l’Ouest montagneux et le Nord-Ouest du Pacifique.",
      flag: unitedStatesFlag,
      flagAlt: "Drapeau des États-Unis avec ses étoiles et ses bandes",
      regions: [
        {
          name: "Floride",
          population: "23 462 518 (estimation au 1er juillet 2025)",
          capital: "Tallahassee",
          largestCity: "Jacksonville",
          teams: "Panthers de la Floride et Lightning de Tampa Bay",
          landmarks: "Parc national des Everglades, Centre spatial Kennedy et Walt Disney World",
        },
        {
          name: "Nevada",
          population: "3 282 188 (estimation au 1er juillet 2025)",
          capital: "Carson City",
          largestCity: "Las Vegas",
          teams: "Golden Knights de Vegas",
          landmarks: "Las Vegas Strip, barrage Hoover et lac Tahoe",
        },
        {
          name: "Caroline du Nord et Caroline du Sud",
          population: "16 768 242 au total (estimations au 1er juillet 2025)",
          capital: "Raleigh et Columbia",
          largestCity: "Charlotte et Charleston",
          teams: "Hurricanes de la Caroline",
          landmarks: "Outer Banks, Great Smoky Mountains et quartier historique de Charleston",
        },
        {
          name: "Tennessee",
          population: "7 315 076 (estimation au 1er juillet 2025)",
          capital: "Nashville",
          largestCity: "Nashville",
          teams: "Predators de Nashville",
          landmarks: "Great Smoky Mountains, Graceland et Grand Ole Opry",
        },
        {
          name: "État de Washington",
          population: "8 001 020 (estimation au 1er juillet 2025)",
          capital: "Olympia",
          largestCity: "Seattle",
          teams: "Kraken de Seattle",
          landmarks: "Space Needle, mont Rainier et Chihuly Garden and Glass",
        },
      ],
    },
    {
      name: "Canada",
      introduction:
        "La portée canadienne projetée comprend l’Alberta, la Colombie-Britannique, l’Ontario et le Québec, quatre provinces aux profondes traditions de hockey et aux communautés nombreuses et diversifiées.",
      flag: canadaFlag,
      flagAlt: "Drapeau national du Canada avec une feuille d’érable rouge",
      regions: [
        {
          name: "Alberta",
          population: "5 057 077 (estimation au 1er avril 2026)",
          capital: "Edmonton",
          largestCity: "Calgary",
          teams: "Flames de Calgary et Oilers d’Edmonton",
          landmarks: "Parc national Banff, parc national Jasper et West Edmonton Mall",
        },
        {
          name: "Colombie-Britannique",
          population: "5 646 420 (estimation au 1er avril 2026)",
          capital: "Victoria",
          largestCity: "Vancouver",
          teams: "Canucks de Vancouver",
          landmarks: "Parc Stanley, Whistler et réserve de parc national Pacific Rim",
        },
        {
          name: "Ontario",
          population: "16 103 890 (estimation au 1er avril 2026)",
          capital: "Toronto",
          largestCity: "Toronto",
          teams: "Maple Leafs de Toronto et Sénateurs d’Ottawa",
          landmarks: "Tour CN, chutes Niagara et Colline du Parlement",
        },
        {
          name: "Québec",
          population: "9 016 222 (estimation au 1er avril 2026)",
          capital: "Québec",
          largestCity: "Montréal",
          teams: "Canadiens de Montréal",
          landmarks: "Vieux-Québec, Château Frontenac et Mont-Tremblant",
        },
      ],
    },
  ],
};

export function ProjectedServiceAreas({ locale }: { locale: Locale }) {
  const isFrench = locale === "fr-CA";
  const labels = isFrench
    ? {
        eyebrow: "Portée communautaire proposée",
        heading: "Zones desservies prévues",
        introduction:
          "The Silver Guardian envisage une portée communautaire qui se développera par étapes aux États-Unis et au Canada. Les régions ci-dessous constituent le point de départ prévu de cette vision.",
        population: "Population",
        capital: "Capitale",
        largestCity: "Plus grande ville",
        teams: "Équipe(s) de hockey locale(s)",
        landmarks: "Reconnue pour",
        notice:
          "Ces zones sont projetées. Leur inclusion n’annonce aucun programme actif, établissement, événement, partenariat ni processus d’inscription dans une province, un État ou une ville.",
        sources: "Sources démographiques",
        canadaSource: "Statistique Canada",
        usSource: "U.S. Census Bureau",
        cta: "Découvrir la vision complète",
      }
    : {
        eyebrow: "Proposed community reach",
        heading: "Projected Service Areas",
        introduction:
          "The Silver Guardian envisions a community reach that grows in stages across the United States and Canada. The regions below are the projected starting point for this vision.",
        population: "Population Size",
        capital: "Capital City",
        largestCity: "Largest City",
        teams: "Home Ice Hockey Team(s)",
        landmarks: "Known For",
        notice:
          "These are projected service areas. Inclusion does not announce an active program, facility, event, partnership, or registration process in any province, state, or city.",
        sources: "Population sources",
        canadaSource: "Statistics Canada",
        usSource: "U.S. Census Bureau",
        cta: "Explore the full vision",
      };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale={locale} />
      <main className="flex-1">
        <section className="service-areas-hero">
          <Image
            src={hockeyHero}
            alt=""
            fill
            priority
            sizes="100vw"
            unoptimized
          />
          <div className="service-areas-hero__overlay" />
          <div className="service-areas-hero__content">
            <p className="section-kicker">{labels.eyebrow}</p>
            <h1>{labels.heading}</h1>
            <p>{labels.introduction}</p>
          </div>
        </section>

        <div className="service-areas-content">
          <p className="service-areas-notice">{labels.notice}</p>

          {serviceAreas[locale].map((country) => (
            <section className="service-country" key={country.name}>
              <div className="service-country__header">
                <div className="service-country__flag">
                  <Image
                    src={country.flag}
                    alt={country.flagAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 3rem), 34rem"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="section-kicker">{labels.heading}</p>
                  <h2>{country.name}</h2>
                  <p>{country.introduction}</p>
                </div>
              </div>

              <div className="service-region-grid">
                {country.regions.map((region) => (
                  <article className="service-region-card" key={region.name}>
                    <h3>{region.name}</h3>
                    <ul>
                      <li><strong>{labels.population}:</strong> {region.population}</li>
                      <li><strong>{labels.capital}:</strong> {region.capital}</li>
                      <li><strong>{labels.largestCity}:</strong> {region.largestCity}</li>
                      <li><strong>{labels.teams}:</strong> {region.teams}</li>
                      <li><strong>{labels.landmarks}:</strong> {region.landmarks}</li>
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <aside className="service-areas-sources">
            <strong>{labels.sources}:</strong>{" "}
            <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1710000901" rel="noopener noreferrer" target="_blank">
              {labels.canadaSource}
            </a>{" "}
            ·{" "}
            <a href="https://www.census.gov/quickfacts/" rel="noopener noreferrer" target="_blank">
              {labels.usSource}
            </a>
          </aside>

          <div className="service-areas-action">
            <Link className="site-button site-button--secondary" href={localizedPath("/overview", locale)}>
              {labels.cta}
            </Link>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

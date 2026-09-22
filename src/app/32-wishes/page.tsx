import type { Metadata } from "next";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import anaheimImage from "@/img/0CAD6E6D-D0BA-49FA-9C50-54A8CB29EEF0.jpeg";
import bostonImage from "@/img/37D0B9CB-FA7F-4352-A827-1988CE836B36.jpeg";
import buffaloImage from "@/img/E92CB8AE-08B7-45A7-BB03-60BB7A921CC6.jpeg";
import calgaryImage from "@/img/00B1565F-6D54-4D8C-8B2F-2C8BE49881FA.jpeg";
import chicagoImage from "@/img/2FD23278-24DB-4F7F-A63B-7DECB243D52B.jpeg";
import coloradoImage from "@/img/2C3066F6-BF53-420A-8B5A-AD296A714B19.jpeg";
import dallasImage from "@/img/5BEF0750-76AE-4E6B-8A65-03619B07A0FC.jpeg";
import edmontonImage from "@/img/10FA096D-7F2B-4517-8774-6281C75587C0.jpeg";
import losAngelesImage from "@/img/7EFE1B20-6F55-4B05-8078-8237F640A133.jpeg";
import minnesotaImage from "@/img/7EDC0FF4-1C3D-40CB-B858-69F5D2563FFA.jpeg";
import nashvilleImage from "@/img/25C22C75-B2F7-4BBC-8D2B-F5C5897D93C0.jpeg";
import sanJoseImage from "@/img/B519AD6B-03E6-4741-A643-1F198A24842D.jpeg";
import seattleImage from "@/img/4ED020C1-8681-4AA1-A02C-7FA7214F86F6.jpeg";
import stLouisImage from "@/img/115AAD96-9008-46EB-8D56-AABB9128F719.jpeg";
import utahImage from "@/img/13A5D2EC-39CF-4663-8D0E-46BCB10889F5.jpeg";
import vancouverImage from "@/img/5CC2837A-06C4-48A9-95EA-045A1A76CCA8.jpeg";
import vegasImage from "@/img/13F159C3-9E36-4D97-853C-2720B8C103A0.jpeg";
import winnipegImage from "@/img/5403F140-1B4C-4899-8EE7-14802B036C9A.jpeg";
import columbusImage from "@/img/A53A4CDD-A36E-42F9-B706-5B3D6905D942.jpeg";
import detroitImage from "@/img/6DFDDE6E-A8E4-47A1-B2A2-89D42E7F6149.jpeg";
import floridaImage from "@/img/39FC2AA9-084A-4E23-B101-21837314617E.jpeg";
import longIslandImage from "@/img/B7055CC7-F8A1-4ACF-A808-C0BF1FC5BDAF.jpeg";
import montrealImage from "@/img/CFEB02BA-2936-42B4-9C6B-B373D2588C76.jpeg";
import newJerseyImage from "@/img/1ED02E63-F630-48F8-A366-E257F7F8D19F.jpeg";
import newYorkImage from "@/img/6444487A-76E3-4A9A-BACA-0398A1C134C8.jpeg";
import ottawaImage from "@/img/BD982F8D-D493-4BC9-B026-04C21E15D803.jpeg";
import philadelphiaImage from "@/img/3CCD3D9A-83F3-4B1D-8D45-1D0DE885379D.jpeg";
import pittsburghImage from "@/img/FE7681D0-1700-4388-A972-C735BA228C50.jpeg";
import tampaImage from "@/img/D6B6E0E1-A7EA-44D9-A4F4-3F4787237010.jpeg";
import torontoImage from "@/img/FAD24A8E-E82B-4963-97F4-108F942A9617.jpeg";
import washingtonDCImage from "@/img/E7728361-D246-4A5D-B391-170BB627C3A7.jpeg";
import { CarolinaWishImage } from "@/components/CarolinaWishImage";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WishSignatureCount } from "@/components/WishProgress";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "32 Wishes for 32 Cities",
  description:
    "Learn about The Silver Guardian's goal to grant 32 hockey-related wishes to children in 32 North American cities each year.",
  path: "/32-wishes/",
  keywords: [
    "32 Wishes for 32 Cities",
    "hockey wishes for children",
    "pediatric cancer wishes",
    "pediatric heart disease support",
    "children's hockey charity",
    "The Silver Guardian wishes",
  ],
});

type RoofStyle = "antenna" | "cap" | "dome" | "flat" | "slope" | "step";

type Building = {
  height: number;
  roof: RoofStyle;
  width: number;
};

type Skyline = {
  buildings: Building[];
  region: "East" | "West";
  wishNumber: number;
};

const westSkylines: Skyline[] = [
  {
    region: "West",
    wishNumber: 1,
    buildings: [
      { height: 36, width: 13, roof: "flat" },
      { height: 54, width: 14, roof: "cap" },
      { height: 44, width: 12, roof: "slope" },
      { height: 70, width: 10, roof: "antenna" },
      { height: 48, width: 15, roof: "flat" },
      { height: 60, width: 13, roof: "step" },
    ],
  },
  {
    region: "West",
    wishNumber: 2,
    buildings: [
      { height: 42, width: 15, roof: "flat" },
      { height: 50, width: 11, roof: "slope" },
      { height: 66, width: 13, roof: "cap" },
      { height: 38, width: 14, roof: "flat" },
      { height: 58, width: 12, roof: "step" },
      { height: 47, width: 15, roof: "dome" },
    ],
  },
  {
    region: "West",
    wishNumber: 3,
    buildings: [
      { height: 34, width: 12, roof: "flat" },
      { height: 46, width: 16, roof: "step" },
      { height: 72, width: 12, roof: "flat" },
      { height: 52, width: 13, roof: "cap" },
      { height: 41, width: 15, roof: "slope" },
      { height: 63, width: 11, roof: "antenna" },
    ],
  },
  {
    region: "West",
    wishNumber: 4,
    buildings: [
      { height: 39, width: 14, roof: "dome" },
      { height: 55, width: 13, roof: "flat" },
      { height: 45, width: 11, roof: "slope" },
      { height: 68, width: 14, roof: "step" },
      { height: 50, width: 13, roof: "cap" },
      { height: 37, width: 15, roof: "flat" },
    ],
  },
  {
    region: "West",
    wishNumber: 5,
    buildings: [
      { height: 48, width: 13, roof: "flat" },
      { height: 62, width: 12, roof: "step" },
      { height: 40, width: 16, roof: "flat" },
      { height: 74, width: 11, roof: "cap" },
      { height: 55, width: 14, roof: "slope" },
      { height: 44, width: 13, roof: "dome" },
    ],
  },
  {
    region: "West",
    wishNumber: 6,
    buildings: [
      { height: 37, width: 15, roof: "slope" },
      { height: 59, width: 13, roof: "cap" },
      { height: 51, width: 11, roof: "antenna" },
      { height: 43, width: 14, roof: "flat" },
      { height: 69, width: 13, roof: "step" },
      { height: 46, width: 14, roof: "flat" },
    ],
  },
  {
    region: "West",
    wishNumber: 7,
    buildings: [
      { height: 45, width: 14, roof: "flat" },
      { height: 53, width: 12, roof: "dome" },
      { height: 64, width: 15, roof: "flat" },
      { height: 48, width: 11, roof: "slope" },
      { height: 76, width: 10, roof: "antenna" },
      { height: 41, width: 16, roof: "step" },
    ],
  },
  {
    region: "West",
    wishNumber: 8,
    buildings: [
      { height: 33, width: 13, roof: "flat" },
      { height: 57, width: 15, roof: "slope" },
      { height: 49, width: 12, roof: "cap" },
      { height: 71, width: 13, roof: "flat" },
      { height: 52, width: 11, roof: "step" },
      { height: 43, width: 16, roof: "flat" },
    ],
  },
  {
    region: "West",
    wishNumber: 9,
    buildings: [
      { height: 40, width: 16, roof: "flat" },
      { height: 61, width: 11, roof: "antenna" },
      { height: 47, width: 13, roof: "dome" },
      { height: 67, width: 14, roof: "step" },
      { height: 35, width: 12, roof: "slope" },
      { height: 56, width: 14, roof: "cap" },
    ],
  },
  {
    region: "West",
    wishNumber: 10,
    buildings: [
      { height: 43, width: 14, roof: "step" },
      { height: 52, width: 15, roof: "flat" },
      { height: 38, width: 11, roof: "slope" },
      { height: 73, width: 12, roof: "cap" },
      { height: 46, width: 15, roof: "flat" },
      { height: 58, width: 12, roof: "dome" },
    ],
  },
  {
    region: "West",
    wishNumber: 11,
    buildings: [
      { height: 35, width: 15, roof: "flat" },
      { height: 64, width: 13, roof: "step" },
      { height: 49, width: 12, roof: "flat" },
      { height: 56, width: 14, roof: "slope" },
      { height: 70, width: 11, roof: "antenna" },
      { height: 42, width: 15, roof: "cap" },
    ],
  },
  {
    region: "West",
    wishNumber: 12,
    buildings: [
      { height: 46, width: 13, roof: "dome" },
      { height: 39, width: 15, roof: "flat" },
      { height: 65, width: 13, roof: "cap" },
      { height: 51, width: 11, roof: "step" },
      { height: 60, width: 14, roof: "flat" },
      { height: 44, width: 14, roof: "slope" },
    ],
  },
  {
    region: "West",
    wishNumber: 13,
    buildings: [
      { height: 41, width: 14, roof: "flat" },
      { height: 58, width: 13, roof: "slope" },
      { height: 75, width: 11, roof: "step" },
      { height: 45, width: 16, roof: "flat" },
      { height: 54, width: 12, roof: "cap" },
      { height: 37, width: 14, roof: "dome" },
    ],
  },
  {
    region: "West",
    wishNumber: 14,
    buildings: [
      { height: 32, width: 13, roof: "slope" },
      { height: 50, width: 15, roof: "flat" },
      { height: 62, width: 12, roof: "dome" },
      { height: 48, width: 13, roof: "cap" },
      { height: 72, width: 12, roof: "antenna" },
      { height: 44, width: 15, roof: "step" },
    ],
  },
  {
    region: "West",
    wishNumber: 15,
    buildings: [
      { height: 44, width: 16, roof: "flat" },
      { height: 56, width: 11, roof: "cap" },
      { height: 39, width: 14, roof: "step" },
      { height: 69, width: 13, roof: "flat" },
      { height: 53, width: 12, roof: "slope" },
      { height: 47, width: 14, roof: "dome" },
    ],
  },
  {
    region: "West",
    wishNumber: 16,
    buildings: [
      { height: 38, width: 15, roof: "flat" },
      { height: 60, width: 14, roof: "step" },
      { height: 52, width: 11, roof: "slope" },
      { height: 77, width: 10, roof: "cap" },
      { height: 43, width: 16, roof: "flat" },
      { height: 57, width: 12, roof: "antenna" },
    ],
  },
];

const eastSkylines: Skyline[] = [
  {
    region: "East",
    wishNumber: 1,
    buildings: [
      { height: 52, width: 10, roof: "flat" },
      { height: 68, width: 11, roof: "step" },
      { height: 46, width: 12, roof: "cap" },
      { height: 76, width: 9, roof: "antenna" },
      { height: 58, width: 10, roof: "flat" },
      { height: 64, width: 11, roof: "dome" },
      { height: 43, width: 12, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 2,
    buildings: [
      { height: 47, width: 11, roof: "cap" },
      { height: 63, width: 10, roof: "flat" },
      { height: 81, width: 9, roof: "step" },
      { height: 55, width: 12, roof: "slope" },
      { height: 70, width: 10, roof: "flat" },
      { height: 50, width: 11, roof: "dome" },
      { height: 61, width: 10, roof: "antenna" },
    ],
  },
  {
    region: "East",
    wishNumber: 3,
    buildings: [
      { height: 56, width: 11, roof: "flat" },
      { height: 44, width: 12, roof: "slope" },
      { height: 72, width: 10, roof: "cap" },
      { height: 66, width: 11, roof: "step" },
      { height: 84, width: 9, roof: "antenna" },
      { height: 52, width: 10, roof: "flat" },
      { height: 46, width: 12, roof: "dome" },
    ],
  },
  {
    region: "East",
    wishNumber: 4,
    buildings: [
      { height: 49, width: 12, roof: "flat" },
      { height: 74, width: 10, roof: "dome" },
      { height: 59, width: 11, roof: "cap" },
      { height: 88, width: 8, roof: "step" },
      { height: 54, width: 12, roof: "flat" },
      { height: 67, width: 10, roof: "slope" },
      { height: 45, width: 11, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 5,
    buildings: [
      { height: 53, width: 10, roof: "step" },
      { height: 61, width: 11, roof: "flat" },
      { height: 78, width: 9, roof: "antenna" },
      { height: 48, width: 12, roof: "cap" },
      { height: 69, width: 10, roof: "dome" },
      { height: 57, width: 11, roof: "flat" },
      { height: 42, width: 12, roof: "slope" },
    ],
  },
  {
    region: "East",
    wishNumber: 6,
    buildings: [
      { height: 45, width: 11, roof: "flat" },
      { height: 70, width: 10, roof: "cap" },
      { height: 62, width: 12, roof: "flat" },
      { height: 83, width: 9, roof: "antenna" },
      { height: 51, width: 11, roof: "dome" },
      { height: 76, width: 10, roof: "step" },
      { height: 55, width: 11, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 7,
    buildings: [
      { height: 58, width: 10, roof: "dome" },
      { height: 46, width: 12, roof: "flat" },
      { height: 75, width: 10, roof: "step" },
      { height: 64, width: 11, roof: "cap" },
      { height: 82, width: 8, roof: "antenna" },
      { height: 50, width: 12, roof: "slope" },
      { height: 60, width: 10, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 8,
    buildings: [
      { height: 51, width: 12, roof: "slope" },
      { height: 66, width: 10, roof: "flat" },
      { height: 57, width: 11, roof: "cap" },
      { height: 79, width: 9, roof: "step" },
      { height: 47, width: 12, roof: "flat" },
      { height: 71, width: 10, roof: "dome" },
      { height: 54, width: 11, roof: "antenna" },
    ],
  },
  {
    region: "East",
    wishNumber: 9,
    buildings: [
      { height: 43, width: 12, roof: "flat" },
      { height: 59, width: 11, roof: "dome" },
      { height: 86, width: 9, roof: "antenna" },
      { height: 67, width: 10, roof: "step" },
      { height: 52, width: 12, roof: "cap" },
      { height: 73, width: 10, roof: "flat" },
      { height: 48, width: 11, roof: "slope" },
    ],
  },
  {
    region: "East",
    wishNumber: 10,
    buildings: [
      { height: 55, width: 10, roof: "cap" },
      { height: 69, width: 11, roof: "flat" },
      { height: 47, width: 12, roof: "dome" },
      { height: 80, width: 9, roof: "step" },
      { height: 62, width: 10, roof: "flat" },
      { height: 75, width: 9, roof: "antenna" },
      { height: 50, width: 12, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 11,
    buildings: [
      { height: 48, width: 11, roof: "slope" },
      { height: 72, width: 10, roof: "step" },
      { height: 60, width: 12, roof: "flat" },
      { height: 85, width: 8, roof: "antenna" },
      { height: 54, width: 11, roof: "dome" },
      { height: 65, width: 10, roof: "cap" },
      { height: 45, width: 12, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 12,
    buildings: [
      { height: 57, width: 10, roof: "flat" },
      { height: 42, width: 12, roof: "cap" },
      { height: 77, width: 9, roof: "dome" },
      { height: 63, width: 11, roof: "step" },
      { height: 89, width: 8, roof: "antenna" },
      { height: 51, width: 12, roof: "flat" },
      { height: 68, width: 10, roof: "slope" },
    ],
  },
  {
    region: "East",
    wishNumber: 13,
    buildings: [
      { height: 46, width: 12, roof: "dome" },
      { height: 64, width: 10, roof: "flat" },
      { height: 74, width: 10, roof: "antenna" },
      { height: 55, width: 11, roof: "slope" },
      { height: 82, width: 9, roof: "step" },
      { height: 59, width: 11, roof: "cap" },
      { height: 49, width: 12, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 14,
    buildings: [
      { height: 50, width: 11, roof: "flat" },
      { height: 68, width: 10, roof: "dome" },
      { height: 58, width: 12, roof: "cap" },
      { height: 91, width: 8, roof: "antenna" },
      { height: 70, width: 10, roof: "step" },
      { height: 44, width: 12, roof: "flat" },
      { height: 61, width: 11, roof: "slope" },
    ],
  },
  {
    region: "East",
    wishNumber: 15,
    buildings: [
      { height: 52, width: 12, roof: "cap" },
      { height: 76, width: 9, roof: "step" },
      { height: 63, width: 11, roof: "flat" },
      { height: 48, width: 12, roof: "slope" },
      { height: 87, width: 9, roof: "antenna" },
      { height: 56, width: 10, roof: "dome" },
      { height: 69, width: 10, roof: "flat" },
    ],
  },
  {
    region: "East",
    wishNumber: 16,
    buildings: [
      { height: 44, width: 12, roof: "flat" },
      { height: 67, width: 10, roof: "cap" },
      { height: 81, width: 9, roof: "step" },
      { height: 53, width: 11, roof: "dome" },
      { height: 73, width: 10, roof: "flat" },
      { height: 92, width: 8, roof: "antenna" },
      { height: 57, width: 11, roof: "slope" },
    ],
  },
];

const westCities = [
  "Anaheim", "Calgary", "Chicago", "Colorado", "Dallas", "Edmonton", "Los Angeles", "Minnesota", "Nashville",
  "San Jose", "Seattle", "St. Louis", "Utah", "Vancouver", "Vegas", "Winnipeg",
] as const;

const eastCities = [
  "Boston", "Buffalo", "Carolina", "Columbus", "Detroit", "Florida", "Long Island", "Montreal", "New Jersey", "New York",
  "Ottawa", "Philadelphia", "Pittsburgh", "Tampa", "Toronto", "Washington DC",
] as const;

const remainingWishImages: Record<string, StaticImageData> = {
  "Colorado": coloradoImage,
  "Dallas": dallasImage,
  "Edmonton": edmontonImage,
  "Los Angeles": losAngelesImage,
  "Minnesota": minnesotaImage,
  "Nashville": nashvilleImage,
  "San Jose": sanJoseImage,
  "Seattle": seattleImage,
  "St. Louis": stLouisImage,
  "Utah": utahImage,
  "Vancouver": vancouverImage,
  "Vegas": vegasImage,
  "Winnipeg": winnipegImage,
  "Columbus": columbusImage,
  "Detroit": detroitImage,
  "Florida": floridaImage,
  "Long Island": longIslandImage,
  "Montreal": montrealImage,
  "New Jersey": newJerseyImage,
  "New York": newYorkImage,
  "Ottawa": ottawaImage,
  "Philadelphia": philadelphiaImage,
  "Pittsburgh": pittsburghImage,
  "Tampa": tampaImage,
  "Toronto": torontoImage,
  "Washington DC": washingtonDCImage,
};

function SkylineCard({ skyline, city, locale = "en" }: { skyline: Skyline; city: string; locale?: "en" | "fr-CA" }) {
  const remainingImage = remainingWishImages[city];
  const card = (
    <article
      className="wish-skyline-card"
      aria-label={`${city} wish`}
    >
      {city === "Anaheim" ? (
        <Image
          className="wish-skyline-card__image"
          src={anaheimImage}
          alt="Anaheim at dusk with palm trees and illuminated streets, labeled #anaheim #32wishes"
        />
      ) : city === "Boston" ? (
        <Image
          className="wish-skyline-card__image"
          src={bostonImage}
          alt="Boston harbor and skyline at dusk, labeled #32wishes #boston"
        />
      ) : city === "Buffalo" ? (
        <Image
          className="wish-skyline-card__image"
          src={buffaloImage}
          alt="Buffalo skyline at sunset, labeled #buffalo #32wishes"
        />
      ) : city === "Calgary" ? (
        <Image
          className="wish-skyline-card__image"
          src={calgaryImage}
          alt="Calgary skyline and illuminated bridge at dusk, labeled #calgary #32wishes"
        />
      ) : city === "Carolina" ? (
        <CarolinaWishImage />
      ) : city === "Chicago" ? (
        <Image
          className="wish-skyline-card__image"
          src={chicagoImage}
          alt="Chicago skyline along Lake Michigan with sailboats, labeled #chicago #32wishes"
        />
      ) : remainingImage ? (
        <Image
          className="wish-skyline-card__image"
          src={remainingImage}
          alt={`${city} cityscape, labeled with the city name and #32wishes`}
        />
      ) : (
      <div className="wish-skyline-card__sky" aria-hidden="true">
        <div className="wish-skyline-card__buildings">
          {skyline.buildings.map((building, index) => (
            <span
              className={`wish-building wish-building--${building.roof}`}
              key={`${skyline.region}-${skyline.wishNumber}-${index}`}
              style={{
                height: `${building.height}%`,
                width: `${building.width}%`,
              }}
            />
          ))}
        </div>
      </div>
      )}
      <h3>
        {city}
        {city === "Anaheim" && (
          <>
            <br />
            <span>(orange, white, black)</span>
          </>
        )}
        {city === "Boston" && (
          <>
            <br />
            <span>(gold, black, white)</span>
          </>
        )}
        {city === "Buffalo" && (
          <>
            <br />
            <span>(gold, dark blue, white)</span>
          </>
        )}
        {city === "Calgary" && (
          <>
            <br />
            <span>(red, yellow, white)</span>
          </>
        )}
        {city === "Carolina" && (
          <>
            <br />
            <span>(red, black, gray)</span>
          </>
        )}
        {city === "Chicago" && (
          <>
            <br />
            <span>(red, black, yellow)</span>
          </>
        )}
        {city === "Colorado" && (
          <>
            <br />
            <span>(white, burgundy, teal)</span>
          </>
        )}
        {city === "Columbus" && (
          <>
            <br />
            <span>(dark blue, red, white)</span>
          </>
        )}
        {city === "Dallas" && (
          <>
            <br />
            <span>(emerald green, black, white, gray)</span>
          </>
        )}
        {city === "Detroit" && (
          <>
            <br />
            <span>(red and white)</span>
          </>
        )}
        {city === "Edmonton" && (
          <>
            <br />
            <span>(dark blue, orange, white)</span>
          </>
        )}
      </h3>
      <WishSignatureCount city={city} locale={locale} />
    </article>
  );

  return city === "Anaheim" || city === "Boston" || city === "Buffalo" || city === "Calgary" || city === "Carolina" || city === "Chicago" || city === "Colorado" || city === "Columbus" || city === "Dallas" || city === "Detroit" || city === "Edmonton" ? (
    <Link href="/more-info/#petition" style={{ color: "inherit", textDecoration: "none" }}>
      {card}
    </Link>
  ) : card;
}

function WishesContent({ locale = "en" }: { locale?: "en" | "fr-CA" }) {
  const isFrench = locale === "fr-CA";

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale={locale} />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>{isFrench ? "32 souhaits dans 32 villes" : "32 Wishes for 32 Cities"}</h1>
          </div>
        </section>

        <section className="page-content page-content--green">
          <div className="w-full">
            <div className="mx-auto w-full page-content--gold">
              <div className="px-6 py-16 max-w-6xl mx-auto">
                <aside className="petition-cta" aria-labelledby="wishes-petition-title">
                  <div>
                    <p className="section-kicker">Add your voice</p>
                    <h2 id="wishes-petition-title">Help move 32 Wishes forward</h2>
                    <p>Show your support for the vision by adding your name to the community petition.</p>
                  </div>
                  <Link className="site-button site-button--secondary" href="/more-info/#petition">
                    Sign the 32 Wishes petition
                  </Link>
                </aside>
              </div>
            </div>

            <div className="wishes-grid px-6 py-16">
              <section className="wishes-region" aria-labelledby="west-title">
                <h2 id="west-title">{isFrench ? "Ouest" : "West"}</h2>
                <h4 className="text-center">{isFrench ? "Qui sera le premier?" : "Who Will Be First?"}</h4>
                <div className="wishes-placeholder-grid">
                  {westSkylines.map((skyline, index) => (
                    <SkylineCard
                      key={`${skyline.region}-${skyline.wishNumber}`}
                      skyline={skyline}
                      city={westCities[index]}
                      locale={locale}
                    />
                  ))}
                </div>
              </section>

              <section className="wishes-region" aria-labelledby="east-title">
                <h2 id="east-title">{isFrench ? "Est" : "East"}</h2>
                <h4 className="text-center">{isFrench ? "Qui sera le premier?" : "Who Will Be First?"}</h4>
                <div className="wishes-placeholder-grid">
                  {eastSkylines.map((skyline, index) => (
                    <SkylineCard
                      key={`${skyline.region}-${skyline.wishNumber}`}
                      skyline={skyline}
                      city={eastCities[index]}
                      locale={locale}
                    />
                  ))}
                </div>
              </section>
            </div>

            <div className="px-6 py-16 max-w-6xl mx-auto">
              <aside className="wishes-note">
                <p>
                  <strong>Note:</strong>{"\u00a0"}Don&apos;t have a favorite hockey team to sign the 32 Wishes Petition with? Feel free to pick one with a cancer awareness color you would like to support.
                </p>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </div>
  );
}

export default function WishesPage() {
  return <WishesContent />;
}

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

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

function SkylineCard({ skyline }: { skyline: Skyline }) {
  return (
    <article
      className="wish-skyline-card"
      aria-label={`${skyline.region} ${skyline.wishNumber} skyline silhouette`}
    >
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
      <span>Wish {skyline.wishNumber}</span>
    </article>
  );
}

export default function WishesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <h1>32 Wishes for 32 Cities</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="wishes-intro">
              <p>
                One of our goals is to annually grant 32 ice hockey related
                wishes to 32 brave children in 32 cities at a single event
                designed to spread hope and joy within the pediatric
                cancer/heart disease community.
              </p>
              <p>
                Please check back regularly to see which members of the North
                American professional ice hockey community have agreed to
                partner with us in this endeavor, as well as hospital concept.
              </p>
            </div>

            <div className="wishes-grid">
              <section className="wishes-region" aria-labelledby="west-title">
                <h2 id="west-title">West</h2>
                <h4 className="text-center">Who Will Be First?</h4>
                <div className="wishes-placeholder-grid">
                  {westSkylines.map((skyline) => (
                    <SkylineCard
                      key={`${skyline.region}-${skyline.wishNumber}`}
                      skyline={skyline}
                    />
                  ))}
                </div>
              </section>

              <section className="wishes-region" aria-labelledby="east-title">
                <h2 id="east-title">East</h2>
                <h4 className="text-center">Who Will Be First?</h4>
                <div className="wishes-placeholder-grid">
                  {eastSkylines.map((skyline) => (
                    <SkylineCard
                      key={`${skyline.region}-${skyline.wishNumber}`}
                      skyline={skyline}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

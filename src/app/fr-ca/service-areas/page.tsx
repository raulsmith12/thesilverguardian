import type { Metadata } from "next";
import { ProjectedServiceAreas } from "@/components/ProjectedServiceAreas";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Zones desservies prévues",
  description: "Découvrez les zones desservies prévues de The Silver Guardian dans certaines régions des États-Unis et du Canada.",
  path: "/fr-ca/service-areas/",
  locale: "fr-CA",
  keywords: ["zones desservies prévues", "États-Unis", "Canada", "The Silver Guardian"],
});

export default function FrenchServiceAreasPage() {
  return <ProjectedServiceAreas locale="fr-CA" />;
}

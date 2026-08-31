import type { Metadata } from "next";
import { ProjectedServiceAreas } from "@/components/ProjectedServiceAreas";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projected Service Areas",
  description: "Explore The Silver Guardian’s projected service areas across selected United States and Canadian regions.",
  path: "/service-areas/",
  keywords: ["projected service areas", "United States", "Canada", "The Silver Guardian"],
});

export default function ServiceAreasPage() {
  return <ProjectedServiceAreas locale="en" />;
}

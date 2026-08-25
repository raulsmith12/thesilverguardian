import type { Metadata } from "next";
import { MovementTherapyComingSoon } from "@/components/MovementTherapyComingSoon";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Movement Therapy Centers | Coming Soon",
  description: "The Silver Guardian’s Movement Therapy Centers content is coming soon.",
  path: "/movement-therapy-center/",
  keywords: ["movement therapy centers", "The Silver Guardian"],
});

export default function MovementTherapyCenterPage() {
  return <MovementTherapyComingSoon locale="en" />;
}

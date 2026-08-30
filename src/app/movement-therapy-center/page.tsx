import type { Metadata } from "next";
import { MovementTherapyCenter } from "@/components/MovementTherapyCenter";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Movement Therapy Centers",
  description: "Explore spaces for ballroom dance, non-contact boxing, ice hockey community, and physical therapy at The Silver Guardian’s Movement Therapy Center.",
  path: "/movement-therapy-center/",
  keywords: ["movement therapy centers", "The Silver Guardian"],
});

export default function MovementTherapyCenterPage() {
  return <MovementTherapyCenter locale="en" />;
}

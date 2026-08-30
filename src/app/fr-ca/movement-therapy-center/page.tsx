import type { Metadata } from "next";
import { MovementTherapyCenter } from "@/components/MovementTherapyCenter";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Centres de thérapie par le mouvement",
  description: "Découvrez les espaces consacrés à la danse de salon, à la boxe sans contact, au hockey sur glace et à la physiothérapie du Centre de thérapie par le mouvement.",
  path: "/fr-ca/movement-therapy-center/",
  locale: "fr-CA",
  keywords: ["centres de thérapie par le mouvement", "The Silver Guardian"],
});

export default function FrenchMovementTherapyPage() {
  return <MovementTherapyCenter locale="fr-CA" />;
}

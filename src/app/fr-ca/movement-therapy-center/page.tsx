import type { Metadata } from "next";
import { MovementTherapyComingSoon } from "@/components/MovementTherapyComingSoon";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Centres de thérapie par le mouvement | Bientôt",
  description: "Le contenu des Centres de thérapie par le mouvement de The Silver Guardian sera bientôt disponible.",
  path: "/fr-ca/movement-therapy-center/",
  locale: "fr-CA",
  keywords: ["centres de thérapie par le mouvement", "The Silver Guardian"],
});

export default function FrenchMovementTherapyPage() {
  return <MovementTherapyComingSoon locale="fr-CA" />;
}

import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description:
    "Consultez la politique de confidentialité de The Silver Guardian et découvrez comment les renseignements sont recueillis, utilisés, protégés, conservés et communiqués.",
  path: "/fr-ca/privacy/",
  locale: "fr-CA",
  keywords: [
    "politique de confidentialité The Silver Guardian",
    "confidentialité du site Web",
    "renseignements personnels",
    "protection des données",
  ],
});

export default function FrenchPrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale="fr-CA" />
      <main className="flex-1">
        <section className="page-hero page-hero--compact">
          <div className="mx-auto w-full max-w-6xl px-6 py-16"><h1>Politique de confidentialité</h1></div>
        </section>
        <section className="page-content" aria-label="Politique de confidentialité">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <article className="privacy-policy">
              <p className="section-kicker">Dernière mise à jour : 21 juin 2026</p>
              <section><h2>Aperçu</h2><p>The Silver Guardian respecte la vie privée des personnes qui visitent ce site Web, communiquent avec nous, participent à nos efforts de soutien communautaire ou nous transmettent autrement des renseignements. La présente politique explique les principales façons dont nous traitons ces renseignements.</p></section>
              <section><h2>Renseignements que nous pouvons recueillir</h2><p>Nous pouvons recueillir les renseignements que vous choisissez de fournir, notamment votre nom, votre adresse courriel, votre numéro de téléphone, le contenu de votre message, votre intérêt pour un événement, vos communications liées au soutien ou tout autre renseignement soumis au moyen d’un formulaire ou d’une communication directe.</p><p>Nous pouvons également recevoir des renseignements techniques de base liés au fonctionnement normal du site, comme le type de navigateur, les renseignements sur l’appareil, les pages visitées et des données générales d’utilisation.</p></section>
              <section><h2>Utilisation des renseignements</h2><p>Nous utilisons les renseignements pour répondre aux demandes, communiquer au sujet de The Silver Guardian, coordonner les efforts de soutien communautaire, améliorer le site Web et tenir les dossiers appropriés relativement à nos activités.</p></section>
              <section><h2>Communication des renseignements</h2><p>Nous ne vendons pas de renseignements personnels. Nous ne fournissons pas de renseignements personnels à des courtiers en données tiers et ne les communiquons pas à des fins de marketing par des tiers.</p><p>Nous pouvons communiquer des renseignements uniquement lorsque cela est nécessaire pour exploiter le site, répondre à votre demande, offrir un service que vous avez demandé, respecter une obligation légale, protéger notre organisation ou avec votre consentement.</p></section>
              <section><h2>Affichage public des renseignements</h2><p>Nous n’afficherons pas le nom, l’image ou l’histoire d’une personne sur ce site Web sans l’autorisation expresse de la partie concernée.</p></section>
              <section><h2>Sécurité et conservation</h2><p>Nous prenons des mesures raisonnables pour protéger les renseignements qui nous sont transmis. Aucun site Web ni système de communication électronique ne peut être garanti entièrement sécuritaire, mais nous cherchons à limiter l’accès aux renseignements et à ne les conserver que pendant la durée raisonnablement nécessaire aux fins décrites dans la présente politique.</p></section>
              <section><h2>Vos choix</h2><p>Vous pouvez communiquer avec nous pour demander la mise à jour, la correction ou la suppression des renseignements personnels que vous nous avez fournis, sous réserve de toute obligation légale ou opérationnelle de conservation des dossiers.</p></section>
              <section><h2>Nous joindre</h2><p>Les questions concernant la présente politique de confidentialité peuvent être envoyées à <a href="mailto:team@thesilverguardian.com">team@thesilverguardian.com</a>.</p></section>
            </article>
          </div>
        </section>
      </main>
      <Footer locale="fr-CA" />
    </div>
  );
}

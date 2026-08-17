import type { Locale } from "@/lib/i18n";
import { getMovementTherapyLocalSections } from "@/lib/movementTherapyGeoContent";
import { getQuebecCityLinks } from "@/lib/quebecCityLinks";
import {
  getMontrealTopicContent,
  montrealLandingContent,
  montrealTopicSlugs,
  type MontrealPageContent,
  type MontrealTopicSlug,
} from "@/lib/montrealContent";

export const lavalTopicSlugs = montrealTopicSlugs;
export type LavalTopicSlug = MontrealTopicSlug;

function localizeText(value: string) {
  return value
    .replaceAll("Greater Montreal", "Laval and the North Shore")
    .replaceAll("Grand Montréal", "Laval et la Rive-Nord")
    .replaceAll("Montreal", "Laval")
    .replaceAll("Montréal", "Laval")
    .replaceAll("montreal", "laval")
    .replaceAll("montréalaise", "lavalloise")
    .replaceAll("montréalais", "lavallois");
}

function transformContent(content: MontrealPageContent): MontrealPageContent {
  return {
    ...content,
    title: localizeText(content.title),
    description: localizeText(content.description),
    keywords: content.keywords.map(localizeText),
    eyebrow: localizeText(content.eyebrow),
    heading: localizeText(content.heading),
    introduction: localizeText(content.introduction),
    imageLabel: localizeText(content.imageLabel),
    imageAlt: localizeText(content.imageAlt),
    supportingImages: content.supportingImages?.map((image) => ({ label: localizeText(image.label), alt: localizeText(image.alt) })),
    sections: content.sections.map((section) => ({
      heading: localizeText(section.heading),
      paragraphs: section.paragraphs.map(localizeText),
      bullets: section.bullets?.map(localizeText),
    })),
    relatedHeading: localizeText(content.relatedHeading),
    relatedLinks: content.relatedLinks.map((link) => ({
      href: link.href.replace("/montreal/", "/laval/"),
      label: localizeText(link.label),
      description: localizeText(link.description),
    })),
    faqHeading: localizeText(content.faqHeading),
    faqs: content.faqs.map((faq) => ({ question: localizeText(faq.question), answer: localizeText(faq.answer) })),
    closingHeading: localizeText(content.closingHeading),
    closingText: localizeText(content.closingText),
    ctaLabel: content.ctaLabel,
    ctaHref: content.ctaHref,
  };
}

const localSections: Record<LavalTopicSlug, Record<Locale, MontrealPageContent["sections"]>> = {
  "pediatric-cancer": {
    en: [
      { heading: "Pediatric cancer support across Laval’s neighbourhoods", paragraphs: ["Laval is one island, but families experience it through distinct neighbourhoods such as Chomedey, Sainte-Dorothée, Vimont, Duvernay and Laval-des-Rapides. A child’s care journey may involve crossing the Rivière des Prairies into Montreal for specialized appointments while school, work and family routines remain in Laval. Highway congestion, bridge crossings, winter weather and the timing of public transit can turn a short distance on a map into a demanding day. Community support should begin with that practical reality and avoid assuming that families can easily add another fixed appointment to their schedule.", "A Laval-focused initiative can reduce that burden by planning flexible participation, communicating clearly in French and English and considering activities that meet families closer to home. Local businesses, recreation groups and hockey organizations already connect people across the island. Their value is not clinical expertise; it is their ability to build awareness, offer practical event knowledge and help an accurate message reach neighbourhood networks. Medical questions, treatment decisions and referrals must remain with qualified pediatric teams." ] },
      { heading: "A local pathway from awareness to sustained support", paragraphs: ["Useful community involvement can begin small. A Laval organization can review The Silver Guardian’s stated goals, decide whether fundraising or the wish initiative fits its mission and identify one realistic contribution. That might mean sharing verified information, supporting an accessible event or introducing organizers to someone with relevant operational experience. A defined role is more valuable than a broad promise, particularly while the community initiatives remain in development and no Laval clinical program or location has been announced.", "As the initiative develops, supporters should look for milestones that answer local questions: how families from Laval would participate, how bilingual communication will work, how privacy will be protected and how funds relate to the stated independent community goals. Publishing those answers creates accountability and gives families a way to distinguish a confirmed opportunity from an aspiration. For children facing cancer, accuracy is part of compassionate support because it protects their time, privacy and expectations." ] },
    ],
    "fr-CA": [
      { heading: "Le soutien au cancer pédiatrique dans les quartiers de Laval", paragraphs: ["Laval forme une île, mais les familles la vivent à travers des quartiers distincts comme Chomedey, Sainte-Dorothée, Vimont, Duvernay et Laval-des-Rapides. Le parcours d’un enfant peut exiger de traverser la rivière des Prairies vers Montréal pour des rendez-vous spécialisés, tandis que l’école, le travail et la vie familiale se poursuivent à Laval. La circulation, les ponts, l’hiver et le transport collectif peuvent transformer une courte distance en journée exigeante. Un appui communautaire doit reconnaître cette réalité plutôt que d’ajouter un horaire rigide.", "Une initiative lavalloise peut réduire ce fardeau grâce à une participation souple, à des communications claires en français et en anglais et à des activités plus près du domicile. Les entreprises, groupes récréatifs et organismes de hockey relient déjà les gens de l’île. Leur rôle n’est pas clinique : ils peuvent sensibiliser, apporter une expérience pratique des événements et diffuser un message exact. Les questions médicales, les traitements et les recommandations demeurent la responsabilité des équipes pédiatriques qualifiées." ] },
      { heading: "De la sensibilisation locale à un appui durable", paragraphs: ["La participation peut commencer modestement. Un organisme lavallois peut étudier les objectifs de The Silver Guardian, choisir entre le financement et les souhaits, puis définir une contribution réaliste. Il peut diffuser de l’information vérifiée, soutenir une activité accessible ou présenter une personne possédant une expertise opérationnelle. Un rôle précis vaut mieux qu’une vaste promesse, surtout puisque les initiatives communautaires demeurent en développement et qu’aucun programme clinique ni emplacement à Laval n’est annoncé.", "À mesure que l’initiative avance, les gens devraient chercher des réponses aux questions locales : comment les familles de Laval participeront-elles, comment les communications bilingues fonctionneront-elles, comment la vie privée sera-t-elle protégée et comment les fonds serviront-ils les objectifs pédiatriques? La publication de ces réponses crée une responsabilité et distingue une possibilité confirmée d’une aspiration. Pour les enfants atteints de cancer, l’exactitude protège le temps, la vie privée et les attentes." ] },
    ],
  },
  "hockey-themed-wishes": {
    en: [
      { heading: "A hockey wish shaped by life in Laval", paragraphs: ["Hockey in Laval is experienced in municipal arenas, neighbourhood associations, school programs, outdoor winter rinks and family routines. A child may be interested in playing, collecting memorabilia, watching a team, learning about equipment or simply sharing ice hockey with a parent or sibling. That range matters when planning a wish. The starting point should be the child’s own connection to hockey, not a predetermined arena visit or publicity opportunity.", "The city’s island geography also shapes logistics. Families may be travelling between eastern and western Laval, crossing into Montreal for care or coordinating with relatives on the North Shore. A wish should consider transportation, bridge traffic, winter conditions, mobility equipment, fatigue and the possibility that treatment changes the schedule. A shorter local experience or an adapted indoor format can be every bit as meaningful when it is chosen around the child." ] },
      { heading: "Building the Laval hockey relationships a wish needs", paragraphs: ["A future wish requires more than enthusiasm. It needs a confirmed participant process, family consent, appropriate health guidance, accessible logistics, a realistic budget and partners who understand their responsibilities. Laval’s youth hockey groups, recreation networks, arena community and local businesses may each offer useful connections, but those connections should be developed carefully before an experience is announced.", "The Silver Guardian’s 32 Wishes in 32 Cities goal gives local relationship-building a clear purpose. Supporters can explain the goal accurately, introduce qualified contacts and help identify accessibility or bilingual communication needs. They should not promise selection, a date, a player appearance or a particular format until those details are confirmed. Honest planning protects the child while giving a future Laval wish the strongest chance of becoming a positive, lasting memory." ] },
    ],
    "fr-CA": [
      { heading: "Un souhait de hockey inspiré de la vie à Laval", paragraphs: ["À Laval, le hockey se vit dans les arénas municipaux, les associations de quartier, les programmes scolaires, les patinoires extérieures et les habitudes familiales. Un enfant peut aimer jouer, collectionner des souvenirs, regarder une équipe, découvrir l’équipement ou partager le hockey sur glace avec un proche. Cette diversité compte : le point de départ doit être le lien personnel de l’enfant avec le hockey, et non une visite d’aréna ou une occasion publicitaire déjà déterminée.", "La géographie insulaire influence aussi la logistique. Une famille peut traverser Laval d’est en ouest, se rendre à Montréal pour des soins ou coordonner des proches de la Rive-Nord. Le souhait doit tenir compte du transport, des ponts, de l’hiver, de la mobilité, de la fatigue et des changements de traitement. Une expérience locale plus courte ou un format intérieur adapté peut être tout aussi significatif lorsqu’il respecte l’enfant." ] },
      { heading: "Créer les relations lavalloises nécessaires au souhait", paragraphs: ["Un futur souhait demande plus que de l’enthousiasme. Il faut un processus confirmé, le consentement familial, des indications de santé appropriées, une logistique accessible, un budget réaliste et des partenaires qui comprennent leur rôle. Les groupes de hockey jeunesse, les réseaux récréatifs, les communautés d’aréna et les entreprises de Laval peuvent créer des liens utiles, mais ces liens doivent être développés avant toute annonce.", "L’objectif 32 souhaits dans 32 villes donne un but précis à ce travail. Les gens peuvent expliquer fidèlement l’initiative, présenter des contacts qualifiés et faire ressortir les besoins d’accessibilité ou de communication bilingue. Ils ne devraient promettre ni sélection, ni date, ni présence d’un joueur, ni format particulier avant confirmation. Une planification honnête protège l’enfant et favorise un souvenir positif durable." ] },
    ],
  },
  "hospital-wishes": {
    en: [
      { heading: "Hospital wishes for families travelling from Laval", paragraphs: ["A Laval child receiving specialized care may spend significant time travelling across the Rivière des Prairies and back home again. The day can involve bridge traffic, parking or transit connections in addition to appointments, procedures and recovery. A supportive wish should not add another complicated obligation. It should offer flexible timing, a clear rescheduling plan and a format that respects the child’s energy, infection precautions and care guidance.", "The family’s home community remains important during that journey. A Laval-based element may allow siblings or caregivers to participate more easily, reduce travel or connect the experience to a familiar arena and neighbourhood. That does not mean every wish should happen locally. It means planners should ask where the child will be most comfortable instead of assuming that the largest venue creates the greatest value." ] },
      { heading: "Safe coordination and clear boundaries", paragraphs: ["Hospital-connected wishes require formal permission, privacy safeguards and coordination with the people responsible for the child’s care. Outside organizers cannot arrive at a unit informally or ask families to disclose medical information through an unsecured channel. Any future referral process should state who is eligible, why information is collected, who can access it and what families can expect after applying.", "No such Laval referral pathway is announced here. The Silver Guardian is building support for its wider hockey-wish goal, and this page should be read as information about that goal rather than an application. Laval community groups can prepare by learning about accessibility, bilingual consent and family-centred planning. Clear boundaries are not an obstacle to generosity; they are how a supportive experience respects a child’s safety and dignity." ] },
    ],
    "fr-CA": [
      { heading: "Des souhaits pour les familles qui se déplacent depuis Laval", paragraphs: ["Un enfant lavallois qui reçoit des soins spécialisés peut passer beaucoup de temps à traverser la rivière des Prairies puis à revenir à la maison. La journée comprend la circulation sur les ponts, le stationnement ou le transport collectif, en plus des rendez-vous, des interventions et du rétablissement. Un souhait ne devrait pas ajouter une obligation complexe. Il doit offrir un horaire souple, une façon claire de reporter et un format respectueux de l’énergie, des précautions et des consignes de soins.", "La communauté d’origine demeure importante pendant ce parcours. Un élément organisé à Laval peut faciliter la participation de la fratrie ou des proches, réduire les déplacements et relier l’expérience à un aréna ou un quartier familier. Cela ne signifie pas que chaque souhait doit être local, mais que les organisateurs doivent demander où l’enfant sera le plus à l’aise plutôt que de privilégier automatiquement le plus grand lieu." ] },
      { heading: "Une coordination sécuritaire et des limites claires", paragraphs: ["Les souhaits liés à l’hôpital exigent des autorisations formelles, des mesures de protection de la vie privée et une coordination avec les personnes responsables des soins. Un organisateur externe ne peut arriver dans une unité sans entente ni demander des renseignements médicaux par un canal non sécurisé. Tout futur processus devrait expliquer l’admissibilité, la raison de la collecte, l’accès aux données et les étapes suivant une demande.", "Aucun processus de demande lavallois n’est annoncé ici. The Silver Guardian mobilise un appui pour son objectif élargi de souhaits; cette page informe plutôt qu’elle ne reçoit des demandes. Les groupes de Laval peuvent se préparer en comprenant l’accessibilité, le consentement bilingue et la planification familiale. Des limites claires ne nuisent pas à la générosité : elles protègent la sécurité et la dignité de l’enfant." ] },
    ],
  },
  "movement-therapy": {
    en: getMovementTherapyLocalSections("laval", "en"),
    "fr-CA": getMovementTherapyLocalSections("laval", "fr-CA"),
  },
};

export const lavalLandingContent: Record<Locale, MontrealPageContent> = {
  en: {
    ...transformContent(montrealLandingContent.en),
    title: "Pediatric Care Support in Laval",
    description: "Explore The Silver Guardian’s Laval vision for pediatric care support, hockey-themed wishes and community-led fundraising.",
    eyebrow: "Laval, Quebec",
    heading: "Pediatric care and hockey-inspired hope in Laval",
    introduction: "Laval families facing pediatric cancer or heart disease may balance care across the region with school, work, bridge travel and everyday life on Île Jésus. The Silver Guardian’s vision gives local businesses, hockey groups and residents a way to explore community support for a independent movement and hockey-wish concepts.",
    sections: [
      { heading: "A mission connected to Laval", paragraphs: ["From Chomedey and Sainte-Dorothée to Vimont, Duvernay and Laval-des-Rapides, local families are connected through neighbourhood organizations, recreation and hockey. Those networks can help a clearly defined pediatric support mission reach people without implying that an operating program already exists.", "The Silver Guardian is developing independent community fundraising, movement and wish initiatives. No Laval movement program, wish event or healthcare affiliation is announced here."], bullets: ["Independent community support inspired by hockey and accessible movement", "A focus on children facing life-threatening conditions, primarily cancer and heart disease", "Community fundraising and relationship-building for future progress"] },
      { heading: "Why local context matters", paragraphs: ["Laval sits between Montreal and the North Shore, and families may cross bridges or use transit for specialized appointments. Winter conditions, travel time, accessibility and bilingual communication should shape any future activity. A responsible initiative asks how a family will participate before deciding where or when an experience should happen."] },
      { heading: "How to explore the initiative", paragraphs: ["Residents and organizations can begin with the focused Laval pages below, review the existing fundraising and wish goals and follow confirmed updates. Support should grow through clear roles, accurate claims and practical milestones rather than assumptions about services that are not yet available."] },
    ],
    relatedHeading: "Explore the Laval initiative",
    relatedLinks: [
      ...transformContent(montrealLandingContent.en).relatedLinks.filter((link) => link.href.startsWith("/laval/") && link.href !== "/laval/"),
      ...getQuebecCityLinks("en", "laval"),
    ],
  },
  "fr-CA": {
    ...transformContent(montrealLandingContent["fr-CA"]),
    title: "Soutien aux soins pédiatriques à Laval",
    description: "Découvrez la vision lavalloise de The Silver Guardian : soins pédiatriques, souhaits de hockey et financement communautaire.",
    eyebrow: "Laval, Québec",
    heading: "Des soins pédiatriques et de l’espoir inspiré du hockey à Laval",
    introduction: "Les familles lavalloises touchées par le cancer ou une maladie cardiaque pédiatrique peuvent concilier les soins régionaux, l’école, le travail, les ponts et la vie quotidienne sur l’île Jésus. La vision de The Silver Guardian permet aux entreprises, aux groupes de hockey et aux résidents d’explorer un appui communautaire pour un initiatives indépendantes de mouvement et de souhaits liés au hockey.",
    sections: [
      { heading: "Une mission liée à Laval", paragraphs: ["De Chomedey et Sainte-Dorothée à Vimont, Duvernay et Laval-des-Rapides, les familles sont reliées par les organismes de quartier, les loisirs et le hockey. Ces réseaux peuvent faire connaître une mission précise sans laisser croire qu’un programme est déjà en activité.", "The Silver Guardian développe des initiatives communautaires indépendantes de financement, de mouvement et de souhaits. Aucun programme de mouvement, événement de souhait ou lien avec un fournisseur de soins lavallois n’est annoncé ici."], bullets: ["Un soutien communautaire indépendant inspiré du hockey et du mouvement accessible", "Une attention aux maladies potentiellement mortelles, surtout le cancer et les maladies cardiaques", "Du financement et des relations communautaires pour de futurs progrès"] },
      { heading: "Pourquoi le contexte local compte", paragraphs: ["Laval se trouve entre Montréal et la Rive-Nord, et des familles traversent les ponts ou utilisent le transport collectif pour des rendez-vous spécialisés. L’hiver, les déplacements, l’accessibilité et les communications bilingues devraient orienter toute future activité. Une initiative responsable demande d’abord comment la famille peut participer."] },
      { heading: "Comment découvrir l’initiative", paragraphs: ["Les résidents et les organismes peuvent consulter les pages lavalloises ci-dessous, étudier les objectifs de financement et de souhaits, puis suivre les mises à jour confirmées. L’appui doit grandir grâce à des rôles clairs, des affirmations exactes et des étapes concrètes."] },
    ],
    relatedHeading: "Découvrir l’initiative lavalloise",
    relatedLinks: [
      ...transformContent(montrealLandingContent["fr-CA"]).relatedLinks.filter((link) => link.href.startsWith("/laval/") && link.href !== "/laval/"),
      ...getQuebecCityLinks("fr-CA", "laval"),
    ],
  },
};

export function getLavalTopicContent(slug: string, locale: Locale) {
  if (!lavalTopicSlugs.includes(slug as LavalTopicSlug)) return undefined;
  const source = getMontrealTopicContent(slug, locale);
  if (!source) return undefined;
  const content = transformContent(source);
  return {
    ...content,
    sections: [...localSections[slug as LavalTopicSlug][locale], ...content.sections],
  };
}

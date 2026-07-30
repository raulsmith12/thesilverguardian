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

export const brossardTopicSlugs = montrealTopicSlugs;
export type BrossardTopicSlug = MontrealTopicSlug;

function localizeText(value: string) {
  return value
    .replaceAll("Greater Montreal", "Brossard and the South Shore")
    .replaceAll("Grand Montréal", "Brossard et la Rive-Sud")
    .replaceAll("Montreal", "Brossard")
    .replaceAll("Montréal", "Brossard")
    .replaceAll("montreal", "brossard")
    .replaceAll("montréalaise", "brossardoise")
    .replaceAll("montréalais", "brossardois");
}

function transformContent(content: MontrealPageContent): MontrealPageContent {
  return {
    ...content,
    title: localizeText(content.title), description: localizeText(content.description), keywords: content.keywords.map(localizeText),
    eyebrow: localizeText(content.eyebrow), heading: localizeText(content.heading), introduction: localizeText(content.introduction),
    imageLabel: localizeText(content.imageLabel), imageAlt: localizeText(content.imageAlt),
    supportingImages: content.supportingImages?.map((image) => ({ label: localizeText(image.label), alt: localizeText(image.alt) })),
    sections: content.sections.map((section) => ({ heading: localizeText(section.heading), paragraphs: section.paragraphs.map(localizeText), bullets: section.bullets?.map(localizeText) })),
    relatedHeading: localizeText(content.relatedHeading),
    relatedLinks: content.relatedLinks.filter((link) => !["/laval/", "/longueuil/", "/brossard/"].includes(link.href)).map((link) => ({ href: link.href.replace("/montreal/", "/brossard/"), label: localizeText(link.label), description: localizeText(link.description) })),
    faqHeading: localizeText(content.faqHeading), faqs: content.faqs.map((faq) => ({ question: localizeText(faq.question), answer: localizeText(faq.answer) })),
    closingHeading: localizeText(content.closingHeading), closingText: localizeText(content.closingText), ctaLabel: content.ctaLabel, ctaHref: content.ctaHref,
  };
}

const localSections: Record<BrossardTopicSlug, Record<Locale, MontrealPageContent["sections"]>> = {
  "pediatric-cancer": {
    en: [
      { heading: "Pediatric cancer support shaped around Brossard families", paragraphs: ["A Brossard family may coordinate specialized pediatric appointments across the St. Lawrence while keeping school, employment, sibling care and everyday routines moving on the South Shore. The Champlain Bridge, Autoroutes 10, 15 and 30, the Panama transit hub and the Du Quartier and Brossard corridors can all be part of that journey. Congestion, winter weather and a child’s changing energy can turn a familiar trip into a demanding day. Community support should account for those realities rather than add another inflexible commitment.", "Brossard is also home to families who communicate in French, English and many other languages. A child-focused initiative should use clear bilingual public information and plan for language access when families need it. Local businesses, cultural groups, recreation organizations and hockey associations can help accurate information reach different communities. Their contribution is practical and social, not clinical: diagnosis, treatment and medical referrals always belong with qualified pediatric professionals." ] },
      { heading: "Turning local interest into dependable support", paragraphs: ["Support can begin with one defined action. A Brossard organization might share verified information, contribute to an accessible fundraising activity or introduce someone with relevant event, transportation or family-service experience. A clear commitment is more useful than a broad promise, especially while The Silver Guardian’s community initiatives remain in development and no Brossard clinical program, partner site or opening date has been announced.", "Residents can evaluate progress by asking how funds connect to the stated independent community goals, what family privacy protections exist and which milestones have actually been completed. They can also ask how organizers will accommodate treatment changes, mobility needs, language preferences and travel across the South Shore. Published answers help families distinguish confirmed opportunities from future goals. For a household facing pediatric cancer, accuracy is not merely administrative; it protects time, expectations and sensitive information." ] },
    ],
    "fr-CA": [
      { heading: "Un soutien au cancer pédiatrique adapté aux familles de Brossard", paragraphs: ["Une famille de Brossard peut coordonner des rendez-vous pédiatriques spécialisés de l’autre côté du Saint-Laurent tout en maintenant l’école, le travail, la fratrie et le quotidien sur la Rive-Sud. Le pont Samuel-De Champlain, les autoroutes 10, 15 et 30, le terminus Panama ainsi que les secteurs Du Quartier et Brossard peuvent faire partie du trajet. La circulation, l’hiver et l’énergie changeante de l’enfant peuvent rendre une journée exigeante. L’appui communautaire devrait reconnaître cette réalité plutôt qu’ajouter une obligation rigide.", "Brossard accueille aussi des familles qui communiquent en français, en anglais et dans plusieurs autres langues. Une initiative centrée sur l’enfant devrait présenter une information publique bilingue claire et prévoir l’accès linguistique nécessaire. Les entreprises, groupes culturels, organismes récréatifs et associations de hockey peuvent diffuser une information exacte. Leur contribution est pratique et sociale, non clinique : les diagnostics, les traitements et les recommandations appartiennent aux professionnels pédiatriques qualifiés." ] },
      { heading: "Transformer l’intérêt local en appui fiable", paragraphs: ["L’appui peut commencer par une action précise. Un organisme de Brossard peut diffuser des renseignements vérifiés, contribuer à une activité de financement accessible ou présenter une personne expérimentée en événements, en transport ou en services familiaux. Un engagement clair vaut mieux qu’une promesse générale, surtout puisque les initiatives communautaires demeurent en développement et qu’aucun programme clinique, site partenaire ou calendrier d’ouverture à Brossard n’est annoncé.", "Les résidents peuvent demander comment les fonds servent la vision, quelles protections de la vie privée existent et quelles étapes sont terminées. Ils peuvent aussi vérifier l’adaptation aux changements de traitement, à la mobilité, aux préférences linguistiques et aux déplacements. Des réponses publiées distinguent les possibilités confirmées des objectifs futurs. Pour une famille touchée par le cancer pédiatrique, l’exactitude protège le temps, les attentes et les renseignements sensibles." ] },
    ],
  },
  "hockey-themed-wishes": {
    en: [
      { heading: "A hockey wish that reflects a Brossard child", paragraphs: ["Hockey in Brossard can mean minor-hockey programs, municipal arenas, school activities, outdoor winter skating or a family tradition shared at home. One child may want to be near the ice, while another cares most about jerseys, equipment, team stories or watching with relatives. A meaningful wish begins by learning what the sport represents to that child. It should not begin with a fixed venue, a publicity plan or the assumption that every young hockey fan wants the same experience.", "South Shore logistics influence what is comfortable. A family may travel through the Panama area, use major highway corridors or cross the Champlain Bridge for treatment. Fatigue, traffic, winter conditions, mobility equipment and infection precautions can all change a plan. A shorter local experience, a quiet indoor alternative or an activity adapted around the child may be more memorable than a large event when it is personal and easy for the family to navigate." ] },
      { heading: "Building Brossard partnerships before making promises", paragraphs: ["A future hockey wish needs a responsible participant process, family consent, relevant guidance from the care team, accessible transportation, a budget, contingency plans and partners who understand their roles. Hockey organizations, arena communities, businesses and cultural networks may each offer a useful connection. Those relationships should be confirmed before organizers announce a date, participant, player appearance or specific experience.", "The Silver Guardian’s 32 Wishes in 32 Cities goal gives that relationship-building direction. Brossard supporters can explain the initiative accurately, identify language and accessibility needs and make qualified introductions without implying that applications are open. If an opportunity is later confirmed, the child and family should control privacy and public participation. That balance allows a diverse community to contribute while keeping the wish focused on joy, dignity and safety." ] },
    ],
    "fr-CA": [
      { heading: "Un souhait de hockey qui ressemble à l’enfant de Brossard", paragraphs: ["À Brossard, le hockey peut passer par le hockey mineur, les arénas municipaux, les écoles, le patinage extérieur ou une tradition familiale. Un enfant peut vouloir s’approcher de la glace; un autre préfère les chandails, l’équipement, les histoires d’équipe ou un match avec ses proches. Un souhait significatif commence par ce que le sport représente pour l’enfant. Il ne devrait pas commencer par un lieu fixe, une stratégie publicitaire ou l’idée que tous les jeunes partisans désirent la même chose.", "La logistique de la Rive-Sud influence le confort. Une famille peut passer par Panama, utiliser les grands axes ou traverser le pont Champlain pour les traitements. La fatigue, la circulation, l’hiver, la mobilité et les précautions contre les infections peuvent changer le plan. Une activité locale plus courte, une option calme à l’intérieur ou un format adapté peut devenir plus mémorable qu’un grand événement lorsqu’il est personnel et simple pour la famille." ] },
      { heading: "Bâtir des partenariats avant de faire des promesses", paragraphs: ["Un futur souhait exige un processus responsable, le consentement familial, des indications pertinentes de l’équipe de soins, un transport accessible, un budget, des solutions de rechange et des partenaires aux rôles clairs. Les organismes de hockey, les communautés d’aréna, les entreprises et les réseaux culturels peuvent créer des liens utiles. Ces relations doivent être confirmées avant d’annoncer date, participant, joueur ou expérience précise.", "L’objectif 32 souhaits dans 32 villes donne une direction à ce travail. Les gens de Brossard peuvent expliquer fidèlement l’initiative, cerner les besoins linguistiques et d’accessibilité et présenter des contacts sans laisser croire que les demandes sont ouvertes. Si une possibilité est confirmée, l’enfant et sa famille devraient contrôler la vie privée et la participation publique. Cet équilibre garde le souhait axé sur la joie, la dignité et la sécurité." ] },
    ],
  },
  "hospital-wishes": {
    en: [
      { heading: "Hospital wishes for children travelling from Brossard", paragraphs: ["A child from Brossard may cross the river repeatedly during specialized treatment. The day can include a highway or transit trip, bridge conditions, parking, waiting and recovery before the family returns to the South Shore. A supportive wish should fit around the clinical schedule, not compete with it. Flexible timing, a clear cancellation approach and an alternate format reduce pressure when an appointment changes or the child suddenly needs rest.", "A local component may make it easier for siblings and caregivers to participate, but a Brossard location is not automatically the right choice. The child may prefer an opportunity elsewhere, or health guidance may require a quieter setting. Organizers should ask what is safe, accessible and personally meaningful instead of measuring the value of a wish by distance, crowd size or public attention." ] },
      { heading: "Clear permission, privacy and referral boundaries", paragraphs: ["Hospital-connected wishes require formal permission and coordination. Visitor rules, infection-control precautions, food restrictions, mobility needs and photography policies can affect every detail. Families should never be asked to send medical records through ordinary messages. Any future application process should explain eligibility, why information is collected, who can review it, expected timelines and what happens when demand exceeds capacity.", "No Brossard referral process or hospital partnership is announced here. The Silver Guardian is building community and hockey relationships for its broader wish goal, so this page is informational rather than an application. Brossard advocates can prepare responsibly by understanding bilingual consent, language access, privacy and adaptable logistics. Those safeguards do not diminish generosity; they make a future experience worthy of a family’s confidence." ] },
    ],
    "fr-CA": [
      { heading: "Des souhaits pour les enfants qui se déplacent depuis Brossard", paragraphs: ["Un enfant de Brossard peut traverser souvent le fleuve pendant des traitements spécialisés. La journée comprend parfois l’autoroute ou le transport collectif, le pont, le stationnement, l’attente et le rétablissement avant le retour sur la Rive-Sud. Un souhait devrait s’adapter à l’horaire clinique plutôt que lui faire concurrence. Un horaire souple, des modalités d’annulation claires et un autre format réduisent la pression lorsqu’un rendez-vous change ou que l’enfant doit se reposer.", "Un élément local peut faciliter la participation de la fratrie et des proches, mais Brossard n’est pas automatiquement le meilleur lieu. L’enfant peut préférer une possibilité ailleurs, ou les consignes de santé peuvent exiger un milieu plus calme. Les organisateurs devraient rechercher la sécurité, l’accessibilité et la signification personnelle plutôt que mesurer le souhait par la distance, la foule ou l’attention publique." ] },
      { heading: "Autorisations, vie privée et limites des demandes", paragraphs: ["Les souhaits liés à l’hôpital exigent des autorisations et une coordination formelles. Les règles de visite, les précautions contre les infections, l’alimentation, la mobilité et la photographie influencent les détails. Une famille ne devrait jamais transmettre un dossier médical par un message ordinaire. Tout futur processus devrait expliquer l’admissibilité, la collecte, l’accès aux renseignements, les délais et la gestion d’une demande supérieure à la capacité.", "Aucun processus de demande ni partenariat hospitalier à Brossard n’est annoncé ici. The Silver Guardian développe des relations pour son objectif élargi; cette page informe sans recevoir de demandes. Les défenseurs locaux peuvent comprendre le consentement bilingue, l’accès linguistique, la vie privée et la logistique adaptable. Ces protections rendent une future expérience digne de la confiance familiale." ] },
    ],
  },
  "movement-therapy": {
    en: getMovementTherapyLocalSections("brossard", "en"),
    "fr-CA": getMovementTherapyLocalSections("brossard", "fr-CA"),
  },
};

export const brossardLandingContent: Record<Locale, MontrealPageContent> = {
  en: {
    ...transformContent(montrealLandingContent.en), title: "Pediatric Care Support in Brossard", description: "Explore The Silver Guardian’s Brossard vision for pediatric care support, hockey-themed wishes and community fundraising.", eyebrow: "Brossard, Quebec", heading: "Pediatric care and hockey-inspired hope in Brossard", introduction: "Brossard families facing pediatric cancer or heart disease may balance regional treatment with school, work, river crossings and everyday South Shore life. The Silver Guardian’s vision gives residents, businesses, cultural groups and hockey communities a way to explore support for a independent movement and hockey-wish concepts.",
    sections: [
      { heading: "A mission connected to Brossard", paragraphs: ["Brossard’s neighbourhood, cultural, recreation and business networks connect families with many languages and experiences. Those relationships can help a clearly defined pediatric support mission reach people without implying that an operating program already exists.", "The Silver Guardian is developing independent community fundraising, movement and wish initiatives. No Brossard movement program, wish event or healthcare affiliation is announced here."], bullets: ["Independent community support inspired by hockey and accessible movement", "A focus primarily on pediatric cancer and heart disease", "Community fundraising and relationship-building for future progress"] },
      { heading: "Why Brossard context matters", paragraphs: ["Families may use South Shore highway and transit corridors or cross the Champlain Bridge for specialized appointments. Winter travel, congestion, accessibility and language preferences should shape future activities. Responsible planning starts with the family’s actual journey."] },
      { heading: "How to explore the initiative", paragraphs: ["Use the focused Brossard pages below, review the current fundraising and wishes goals and follow verified progress. Useful support grows through clear roles, inclusive communication and confirmed milestones rather than assumptions about unavailable services."] },
    ], relatedHeading: "Explore the Brossard initiative",
    relatedLinks: [
      ...transformContent(montrealLandingContent.en).relatedLinks.filter((link) => link.href.startsWith("/brossard/") && link.href !== "/brossard/"),
      ...getQuebecCityLinks("en", "brossard"),
    ],
  },
  "fr-CA": {
    ...transformContent(montrealLandingContent["fr-CA"]), title: "Soutien aux soins pédiatriques à Brossard", description: "Découvrez la vision brossardoise de The Silver Guardian : soins pédiatriques, souhaits de hockey et financement communautaire.", eyebrow: "Brossard, Québec", heading: "Des soins pédiatriques et de l’espoir inspiré du hockey à Brossard", introduction: "Les familles de Brossard touchées par le cancer ou une maladie cardiaque pédiatrique peuvent concilier les traitements régionaux, l’école, le travail, les traversées du fleuve et la vie sur la Rive-Sud. La vision de The Silver Guardian permet aux résidents, entreprises, groupes culturels et communautés de hockey d’explorer un appui.",
    sections: [
      { heading: "Une mission liée à Brossard", paragraphs: ["Les réseaux de quartier, culturels, récréatifs et commerciaux de Brossard relient des familles aux langues et aux expériences variées. Ces relations peuvent faire connaître une mission pédiatrique précise sans laisser croire qu’un programme fonctionne déjà.", "The Silver Guardian développe des initiatives communautaires indépendantes de financement, de mouvement et de souhaits. Aucun programme de mouvement, événement de souhait ou lien avec un fournisseur de soins brossardois n’est annoncé ici."], bullets: ["Un soutien communautaire indépendant inspiré du hockey et du mouvement accessible", "Une attention surtout au cancer et aux maladies cardiaques pédiatriques", "Du financement et des relations communautaires pour de futurs progrès"] },
      { heading: "Pourquoi le contexte de Brossard compte", paragraphs: ["Les familles peuvent utiliser les axes routiers et collectifs de la Rive-Sud ou traverser le pont Champlain pour des rendez-vous spécialisés. L’hiver, la circulation, l’accessibilité et les préférences linguistiques devraient orienter les futures activités."] },
      { heading: "Comment découvrir l’initiative", paragraphs: ["Consultez les pages de Brossard ci-dessous, découvrez les objectifs actuels et suivez les progrès vérifiés. Un appui utile repose sur des rôles clairs, des communications inclusives et des étapes confirmées."] },
    ], relatedHeading: "Découvrir l’initiative brossardoise",
    relatedLinks: [
      ...transformContent(montrealLandingContent["fr-CA"]).relatedLinks.filter((link) => link.href.startsWith("/brossard/") && link.href !== "/brossard/"),
      ...getQuebecCityLinks("fr-CA", "brossard"),
    ],
  },
};

export function getBrossardTopicContent(slug: string, locale: Locale) {
  if (!brossardTopicSlugs.includes(slug as BrossardTopicSlug)) return undefined;
  const source = getMontrealTopicContent(slug, locale); if (!source) return undefined;
  const content = transformContent(source);
  return { ...content, sections: [...localSections[slug as BrossardTopicSlug][locale], ...content.sections] };
}

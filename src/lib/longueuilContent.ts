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

export const longueuilTopicSlugs = montrealTopicSlugs;
export type LongueuilTopicSlug = MontrealTopicSlug;

function localizeText(value: string) {
  return value
    .replaceAll("Greater Montreal", "Longueuil and the South Shore")
    .replaceAll("Grand Montréal", "Longueuil et la Rive-Sud")
    .replaceAll("Montreal", "Longueuil")
    .replaceAll("Montréal", "Longueuil")
    .replaceAll("montreal", "longueuil")
    .replaceAll("montréalaise", "longueuilloise")
    .replaceAll("montréalais", "longueuillois");
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
    relatedLinks: content.relatedLinks
      .filter((link) => link.href !== "/laval/")
      .map((link) => ({ href: link.href.replace("/montreal/", "/longueuil/"), label: localizeText(link.label), description: localizeText(link.description) })),
    faqHeading: localizeText(content.faqHeading),
    faqs: content.faqs.map((faq) => ({ question: localizeText(faq.question), answer: localizeText(faq.answer) })),
    closingHeading: localizeText(content.closingHeading),
    closingText: localizeText(content.closingText),
    ctaLabel: content.ctaLabel,
    ctaHref: content.ctaHref,
  };
}

const localSections: Record<LongueuilTopicSlug, Record<Locale, MontrealPageContent["sections"]>> = {
  "pediatric-cancer": {
    en: [
      { heading: "Pediatric cancer support across Longueuil", paragraphs: ["Families in Vieux-Longueuil, Saint-Hubert and Greenfield Park can experience a pediatric cancer journey differently even though they share one city. A day of specialized care may involve Route 132, the Jacques Cartier Bridge, the métro at Longueuil–Université-de-Sherbrooke or another connection across the St. Lawrence River. Appointments, school, employment and sibling care all continue around that travel. Snow, congestion and a child’s changing energy can make an otherwise short trip demanding, so community activity should offer flexibility rather than another rigid obligation.", "A Longueuil-focused initiative can respond by using clear French and English communication, considering accessible local venues and offering alternate dates or formats. Businesses, neighbourhood organizations, recreation groups and hockey associations can help accurate information move through South Shore networks. Their role is to support awareness, logistics and relationships—not to provide medical advice, decide eligibility or suggest an affiliation with a children’s hospital." ] },
      { heading: "Building useful support on the South Shore", paragraphs: ["A local organization can begin by reviewing The Silver Guardian’s stated community fundraising, movement and wish goals, then choosing a commitment it can sustain. It might share verified campaign information, help make an event accessible or connect organizers with someone experienced in family-centred operations. Those bounded contributions are more useful than a general promise, particularly because no Longueuil movement program, healthcare affiliation or confirmed event date has been announced.", "Supporters should look for future milestones that answer practical South Shore questions. How would a child participate when treatment changes suddenly? What transportation and accessibility barriers have been considered? How will consent and personal information be protected? How do collected funds connect to the stated goals? Clear answers let families and community partners distinguish confirmed activity from a developing concept. For families facing pediatric cancer, that accuracy respects scarce time and protects expectations." ] },
    ],
    "fr-CA": [
      { heading: "Le soutien au cancer pédiatrique partout à Longueuil", paragraphs: ["Les familles du Vieux-Longueuil, de Saint-Hubert et de Greenfield Park peuvent vivre différemment un parcours de cancer pédiatrique. Une journée de soins spécialisés peut passer par la route 132, le pont Jacques-Cartier, le métro Longueuil–Université-de-Sherbrooke ou une autre liaison au-dessus du Saint-Laurent. Les rendez-vous, l’école, le travail et la fratrie doivent continuer malgré ces déplacements. La neige, la circulation et l’énergie changeante de l’enfant peuvent rendre un trajet exigeant; une activité communautaire devrait donc rester souple.", "Une initiative longueuilloise peut répondre avec des communications claires en français et en anglais, des lieux locaux accessibles et des dates ou formats de rechange. Les entreprises, organismes de quartier, groupes récréatifs et associations de hockey peuvent diffuser de l’information exacte dans les réseaux de la Rive-Sud. Leur rôle concerne la sensibilisation, la logistique et les relations, et non les conseils médicaux, l’admissibilité ou une affiliation hospitalière." ] },
      { heading: "Bâtir un appui utile sur la Rive-Sud", paragraphs: ["Un organisme local peut d’abord étudier les objectifs de soins et de souhaits de The Silver Guardian, puis choisir un engagement durable. Il peut diffuser les renseignements vérifiés, améliorer l’accessibilité d’une activité ou présenter une personne qui connaît les opérations centrées sur les familles. Ces contributions précises valent mieux qu’une promesse générale, puisqu’aucun programme clinique, site ou calendrier d’ouverture à Longueuil n’est annoncé.", "Les prochaines étapes devraient répondre à des questions concrètes : comment participer si un traitement change soudainement? Quels obstacles de transport et d’accessibilité sont prévus? Comment le consentement et les renseignements personnels seront-ils protégés? Comment les fonds servent-ils les objectifs déclarés? Des réponses claires distinguent une activité confirmée d’un concept en développement. Cette exactitude respecte le temps des familles et protège leurs attentes." ] },
    ],
  },
  "hockey-themed-wishes": {
    en: [
      { heading: "A hockey wish rooted in Longueuil", paragraphs: ["Longueuil’s hockey culture grows through municipal arenas, minor hockey, school programs, outdoor rinks and family traditions across its three boroughs. One child may dream about stepping onto the ice, while another is interested in jerseys, equipment, team history or watching with a sibling. A meaningful wish begins with that individual connection. It should not begin with a predetermined venue, public appearance or assumption that every hockey fan wants the same experience.", "Location matters on the South Shore. A family may be travelling between boroughs, connecting through the métro or crossing into Montreal for care. Bridge traffic, winter conditions, mobility equipment, fatigue and infection precautions can all change the plan. A shorter experience near home, a quiet setting or an adapted hockey activity may be more joyful than a large event when it reflects the child’s needs and interests." ] },
      { heading: "From Longueuil hockey connections to a confirmed plan", paragraphs: ["A responsible wish requires a defined participant process, family consent, appropriate guidance from the child’s care team, accessible logistics, a budget and partners who accept clear roles. Minor-hockey groups, arena communities, local businesses and recreation leaders may each contribute useful knowledge, but an introduction is not a confirmed wish. Organizers should verify every essential element before presenting an experience as available.", "The Silver Guardian’s 32 Wishes in 32 Cities goal gives those relationships a purpose. Longueuil supporters can explain the goal accurately, identify bilingual and accessibility needs and introduce qualified contacts without promising a player, team, date or selection. If a wish is confirmed later, communication should centre the child’s preferences and privacy rather than participating brands. That discipline helps community enthusiasm become a safe and personal memory." ] },
    ],
    "fr-CA": [
      { heading: "Un souhait de hockey ancré à Longueuil", paragraphs: ["La culture du hockey longueuilloise se développe dans les arénas municipaux, le hockey mineur, les écoles, les patinoires extérieures et les traditions familiales des trois arrondissements. Un enfant peut rêver de patiner; un autre préfère les chandails, l’équipement, l’histoire d’une équipe ou un match avec la fratrie. Un souhait significatif commence par ce lien individuel, et non par un lieu, une apparition publique ou l’idée que tous les partisans désirent la même expérience.", "Le lieu compte sur la Rive-Sud. Une famille peut se déplacer entre les arrondissements, prendre le métro ou traverser vers Montréal pour des soins. La circulation sur les ponts, l’hiver, la mobilité, la fatigue et les précautions contre les infections peuvent changer le plan. Une activité plus courte près du domicile, un milieu calme ou un format adapté peut procurer davantage de joie lorsqu’il respecte les besoins de l’enfant." ] },
      { heading: "Des relations de hockey au plan confirmé", paragraphs: ["Un souhait responsable exige un processus défini, le consentement familial, des indications appropriées de l’équipe de soins, une logistique accessible, un budget et des partenaires aux rôles clairs. Les groupes de hockey mineur, les communautés d’aréna, les entreprises et les responsables des loisirs peuvent contribuer, mais une présentation ne constitue pas un souhait confirmé. Tous les éléments essentiels doivent être vérifiés avant d’annoncer une expérience.", "L’objectif 32 souhaits dans 32 villes donne un but à ces relations. Les gens de Longueuil peuvent présenter fidèlement l’objectif, cerner les besoins bilingues et d’accessibilité et créer des liens sans promettre joueur, équipe, date ou sélection. Si un souhait est confirmé, les communications devraient privilégier les préférences et la vie privée de l’enfant plutôt que les marques participantes." ] },
    ],
  },
  "hospital-wishes": {
    en: [
      { heading: "Hospital wishes for Longueuil families", paragraphs: ["A Longueuil child receiving specialized pediatric care may cross the St. Lawrence repeatedly during treatment. The day can include Route 132, a bridge or métro trip, parking and waiting before the clinical schedule even begins. A supportive wish should not force a family to protect an inflexible reservation when an appointment runs late or the child needs rest. A clear rescheduling option and an alternate format help the experience remain supportive.", "A South Shore component may sometimes reduce travel and make it easier for siblings or caregivers to participate. In other cases, the child may prefer an opportunity elsewhere. The correct choice depends on the child, family, care guidance and confirmed partners. Organizers should ask where the experience is safest and most comfortable instead of assuming that a larger or more public setting is automatically better." ] },
      { heading: "Privacy, permission and realistic referral information", paragraphs: ["Hospital-connected activity requires formal permission and cannot be arranged through an informal arrival at a care unit. Infection-control rules, visitor limits, photography policies, food restrictions and mobility needs can all affect what is possible. Families should never be asked to submit diagnoses or records through an unsecured message. A future process would need to explain eligibility, information handling, decision timelines and the limits of what can be offered.", "No Longueuil referral pathway is announced on this page. The Silver Guardian is developing community and hockey relationships for its broader wish goal, so the page provides information rather than accepting applications. Local advocates can still prepare responsibly by learning about bilingual consent, accessibility and family-centred logistics. Clear boundaries protect children and create a stronger foundation for any future opportunity." ] },
    ],
    "fr-CA": [
      { heading: "Des souhaits à l’hôpital pour les familles de Longueuil", paragraphs: ["Un enfant longueuillois qui reçoit des soins pédiatriques spécialisés peut traverser souvent le Saint-Laurent pendant ses traitements. La journée peut inclure la route 132, un pont ou le métro, le stationnement et l’attente avant même l’horaire clinique. Un souhait ne devrait pas obliger la famille à protéger une réservation rigide lorsqu’un rendez-vous se prolonge ou que l’enfant doit se reposer. Une option de report et un autre format maintiennent le soutien.", "Un élément organisé sur la Rive-Sud peut parfois réduire les déplacements et faciliter la participation de la fratrie ou des proches. Dans d’autres cas, l’enfant peut préférer une possibilité ailleurs. Le bon choix dépend de l’enfant, de la famille, des consignes de soins et des partenaires confirmés. Les organisateurs devraient privilégier la sécurité et le confort plutôt que la taille ou la visibilité du lieu." ] },
      { heading: "Vie privée, autorisations et demandes réalistes", paragraphs: ["Une activité liée à l’hôpital exige une autorisation formelle et ne peut être organisée par une arrivée informelle dans une unité. Les mesures contre les infections, les limites de visiteurs, la photographie, l’alimentation et la mobilité influencent les possibilités. Une famille ne devrait jamais transmettre un diagnostic ou un dossier par un message non sécurisé. Un futur processus devrait expliquer l’admissibilité, la gestion des renseignements, les délais et les limites de l’offre.", "Aucun processus de demande longueuillois n’est annoncé ici. The Silver Guardian développe des relations communautaires et sportives pour son objectif élargi; la page informe sans accepter de demandes. Les défenseurs locaux peuvent néanmoins comprendre le consentement bilingue, l’accessibilité et la logistique familiale. Des limites claires protègent les enfants et préparent une éventuelle possibilité." ] },
    ],
  },
  "movement-therapy": {
    en: getMovementTherapyLocalSections("longueuil", "en"),
    "fr-CA": getMovementTherapyLocalSections("longueuil", "fr-CA"),
  },
};

export const longueuilLandingContent: Record<Locale, MontrealPageContent> = {
  en: {
    ...transformContent(montrealLandingContent.en),
    title: "Pediatric Care Support in Longueuil",
    description: "Explore The Silver Guardian’s Longueuil vision for pediatric care support, hockey-themed wishes and community fundraising.",
    eyebrow: "Longueuil, Quebec",
    heading: "Pediatric care and hockey-inspired hope in Longueuil",
    introduction: "Longueuil families facing pediatric cancer or heart disease may balance treatment across the region with school, work, river crossings and daily life on the South Shore. The Silver Guardian’s vision gives local residents, businesses and hockey groups a way to explore support for a independent movement and hockey-wish concepts.",
    sections: [
      { heading: "A mission connected to Longueuil", paragraphs: ["Vieux-Longueuil, Saint-Hubert and Greenfield Park are connected through neighbourhood organizations, recreation, transit and hockey. Those networks can help a clearly defined pediatric support mission reach families without suggesting that an operating program already exists.", "The Silver Guardian is developing independent community fundraising, movement and wish initiatives. No Longueuil movement program, wish event or healthcare affiliation is announced here."], bullets: ["Independent community support inspired by hockey and accessible movement", "A focus primarily on pediatric cancer and heart disease", "Community fundraising and relationship-building for future progress"] },
      { heading: "Why South Shore context matters", paragraphs: ["Families may use Route 132, bridges, buses or the Longueuil métro for specialized appointments. Winter travel, congestion, accessibility and bilingual communication should shape future activities. Responsible planning starts with the family’s real journey rather than the easiest venue for organizers."] },
      { heading: "How to explore the initiative", paragraphs: ["Use the focused Longueuil resources below to understand each part of the mission, review the current fundraising and wishes goals and follow verified progress. Useful support grows through clear roles and confirmed milestones rather than assumptions about services that are not available."] },
    ],
    relatedHeading: "Explore the Longueuil initiative",
    relatedLinks: [
      ...transformContent(montrealLandingContent.en).relatedLinks.filter((link) => link.href.startsWith("/longueuil/") && link.href !== "/longueuil/"),
      ...getQuebecCityLinks("en", "longueuil"),
    ],
  },
  "fr-CA": {
    ...transformContent(montrealLandingContent["fr-CA"]),
    title: "Soutien aux soins pédiatriques à Longueuil",
    description: "Découvrez la vision longueuilloise de The Silver Guardian : soins pédiatriques, souhaits de hockey et financement communautaire.",
    eyebrow: "Longueuil, Québec",
    heading: "Des soins pédiatriques et de l’espoir inspiré du hockey à Longueuil",
    introduction: "Les familles longueuilloises touchées par le cancer ou une maladie cardiaque pédiatrique peuvent concilier les traitements régionaux, l’école, le travail, les traversées du fleuve et la vie sur la Rive-Sud. La vision de The Silver Guardian permet d’explorer un appui pour un initiatives indépendantes de mouvement et de souhaits liés au hockey.",
    sections: [
      { heading: "Une mission liée à Longueuil", paragraphs: ["Le Vieux-Longueuil, Saint-Hubert et Greenfield Park sont reliés par les organismes de quartier, les loisirs, le transport et le hockey. Ces réseaux peuvent faire connaître une mission pédiatrique précise sans laisser croire qu’un programme fonctionne déjà.", "The Silver Guardian développe des initiatives communautaires indépendantes de financement, de mouvement et de souhaits. Aucun programme de mouvement, événement de souhait ou lien avec un fournisseur de soins longueuillois n’est annoncé ici."], bullets: ["Un soutien communautaire indépendant inspiré du hockey et du mouvement accessible", "Une attention surtout au cancer et aux maladies cardiaques pédiatriques", "Du financement et des relations communautaires pour de futurs progrès"] },
      { heading: "Pourquoi le contexte de la Rive-Sud compte", paragraphs: ["Les familles peuvent emprunter la route 132, les ponts, les autobus ou le métro de Longueuil pour des rendez-vous spécialisés. L’hiver, la circulation, l’accessibilité et les communications bilingues devraient orienter les futures activités. Une planification responsable part du véritable parcours familial."] },
      { heading: "Comment découvrir l’initiative", paragraphs: ["Consultez les ressources longueuilloises ci-dessous, découvrez les objectifs actuels de financement et de souhaits, puis suivez les progrès vérifiés. Un appui utile repose sur des rôles clairs et des étapes confirmées plutôt que sur des services non disponibles."] },
    ],
    relatedHeading: "Découvrir l’initiative longueuilloise",
    relatedLinks: [
      ...transformContent(montrealLandingContent["fr-CA"]).relatedLinks.filter((link) => link.href.startsWith("/longueuil/") && link.href !== "/longueuil/"),
      ...getQuebecCityLinks("fr-CA", "longueuil"),
    ],
  },
};

export function getLongueuilTopicContent(slug: string, locale: Locale) {
  if (!longueuilTopicSlugs.includes(slug as LongueuilTopicSlug)) return undefined;
  const source = getMontrealTopicContent(slug, locale);
  if (!source) return undefined;
  const content = transformContent(source);
  return { ...content, sections: [...localSections[slug as LongueuilTopicSlug][locale], ...content.sections] };
}

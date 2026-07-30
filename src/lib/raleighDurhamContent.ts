import type { Locale } from "@/lib/i18n";
import {
  getMontrealTopicContent,
  montrealLandingContent,
  type MontrealPageContent,
} from "@/lib/montrealContent";

export const raleighDurhamTopicSlugs = ["pediatric-cancer", "hockey-themed-wishes", "hospital-wishes"] as const;
export type RaleighDurhamTopicSlug = (typeof raleighDurhamTopicSlugs)[number];

function localizeText(value: string) {
  return value
    .replaceAll("Greater Montreal", "the Raleigh–Durham Triangle")
    .replaceAll("Grand Montréal", "Triangle de Raleigh–Durham")
    .replaceAll("Montreal", "Raleigh–Durham")
    .replaceAll("Montréal", "Raleigh–Durham")
    .replaceAll("montreal", "raleigh-durham")
    .replaceAll("montréalaise", "de Raleigh–Durham")
    .replaceAll("montréalais", "de Raleigh–Durham")
    .replaceAll("Quebec", "North Carolina")
    .replaceAll("Québec", "Caroline du Nord")
    .replaceAll("French and English", "English and the other languages families use")
    .replaceAll("français et en anglais", "anglais et dans les autres langues utilisées par les familles")
    .replaceAll("bilingual", "accessible multilingual")
    .replaceAll("bilingues", "multilingues accessibles")
    .replaceAll("bilingue", "multilingue accessible")
    .replaceAll("a accessible multilingual city", "a multilingual region")
    .replaceAll("ville multilingue accessible", "région multilingue")
    .replaceAll("Laval, the South Shore, the West Island", "Cary, Chapel Hill, surrounding Triangle communities")
    .replaceAll("Laval, de la Rive-Sud, de l’Ouest-de-l’Île", "Cary, de Chapel Hill et des communautés voisines du Triangle")
    .replaceAll("du North Carolina", "de North Carolina")
    .replaceAll("du Caroline du Nord", "de Caroline du Nord")
    .replaceAll("travel time and winter conditions", "travel time and severe weather")
    .replaceAll("les déplacements et les conditions hivernales", "les déplacements et les intempéries")
    .replaceAll("a region spread across the island and surrounding communities", "a region spread across several counties and surrounding communities")
    .replaceAll("une région qui dépasse l’île", "une région répartie dans plusieurs comtés")
    .replaceAll("Winter weather", "Severe weather")
    .replaceAll("La météo hivernale", "Les intempéries")
    .replaceAll("outdoor rinks, local teams and hockey history are woven into winter life", "community rinks, local teams and hockey traditions connect fans across the Triangle")
    .replaceAll("across the island, the Raleigh–Durham Triangle", "across the Raleigh–Durham Triangle")
    .replaceAll("traverser l’île, le Triangle de Raleigh–Durham", "traverser le Triangle de Raleigh–Durham")
    .replaceAll("neighbourhoods across the island, nearby suburbs", "neighbourhoods across Raleigh and Durham, nearby suburbs")
    .replaceAll("différents quartiers de l’île, des banlieues", "différents quartiers de Raleigh et Durham, des banlieues")
    .replaceAll("bridges, public transit, winter conditions", "highways, public transit, severe weather")
    .replaceAll("les ponts, le transport collectif, l’hiver", "les autoroutes, le transport collectif, les intempéries");
}

function transformContent(content: MontrealPageContent): MontrealPageContent {
  return {
    ...content,
    heroImage: "raleigh-durham",
    title: localizeText(content.title),
    description: localizeText(content.description),
    keywords: content.keywords.map(localizeText),
    eyebrow: localizeText(content.eyebrow),
    heading: localizeText(content.heading),
    introduction: localizeText(content.introduction),
    imageLabel: localizeText(content.imageLabel),
    imageAlt: localizeText(content.imageAlt),
    supportingImages: content.supportingImages?.map((image) => ({ label: localizeText(image.label), alt: localizeText(image.alt) })),
    sections: content.sections.map((section) => ({ heading: localizeText(section.heading), paragraphs: section.paragraphs.map(localizeText), bullets: section.bullets?.map(localizeText) })),
    relatedHeading: localizeText(content.relatedHeading),
    relatedLinks: content.relatedLinks
      .filter((link) => !["/laval/", "/longueuil/", "/brossard/", "/terrebonne/", "/pointe-claire/"].includes(link.href))
      .map((link) => ({ href: link.href.replace("/montreal/", "/raleigh-durham/"), label: localizeText(link.label), description: localizeText(link.description) })),
    faqHeading: localizeText(content.faqHeading),
    faqs: content.faqs.map((faq) => ({ question: localizeText(faq.question), answer: localizeText(faq.answer) })),
    closingHeading: localizeText(content.closingHeading),
    closingText: localizeText(content.closingText),
    ctaLabel: content.ctaLabel,
    ctaHref: content.ctaHref,
  };
}

const localSections: Record<RaleighDurhamTopicSlug, Record<Locale, MontrealPageContent["sections"]>> = {
  "pediatric-cancer": {
    en: [
      { heading: "Pediatric cancer support across Raleigh–Durham", paragraphs: ["Families in Raleigh, Durham, Cary, Chapel Hill and nearby Triangle communities may coordinate specialized pediatric cancer appointments while keeping school, work, sibling care and recovery moving at home. A day can involve I-40, I-440, I-540, NC 147, local streets and travel between Wake, Durham and Orange counties. Congestion, construction, summer heat, storms and a child’s changing energy can turn a familiar trip into a demanding one. Community support should recognize that uncertainty instead of requiring every family to attend a fixed activity at one location.", "The Triangle brings together families from many cultural and language communities. Clear public information, appropriate language access and accessible participation are therefore practical requirements, not optional additions. Businesses, schools, universities, recreation organizations, faith communities and hockey groups can help reliable information reach local networks. Their role is community awareness and logistics. Diagnosis, cancer treatment, medical advice, referrals and decisions about participation must remain with qualified pediatric professionals and the child’s family."] },
      { heading: "Turning Triangle interest into dependable action", paragraphs: ["A Raleigh–Durham organization can begin by reviewing The Silver Guardian’s stated community fundraising, movement and wish goals, then choosing one contribution it can sustain. That might mean sharing verified campaign information, making a fundraising activity easier to access or introducing someone with relevant transportation, event, family-service or accessibility experience. A defined role is more useful than a broad promise while the community initiatives remain in development and no Raleigh–Durham clinical program, site, partner or opening date has been announced.", "Supporters can evaluate progress by asking how funds relate to the stated pediatric vision, what family privacy protections are planned and which milestones have actually been completed. They should also ask how treatment changes, mobility, travel across the Triangle, weather and language needs would affect participation. Published answers help families distinguish confirmed opportunities from developing ideas. For a household managing pediatric cancer, accurate information protects limited time, personal data and emotional expectations."] },
    ],
    "fr-CA": [
      { heading: "Le soutien au cancer pédiatrique dans Raleigh–Durham", paragraphs: ["Les familles de Raleigh, Durham, Cary, Chapel Hill et des communautés voisines du Triangle peuvent coordonner des rendez-vous spécialisés en cancer pédiatrique tout en maintenant l’école, le travail, les soins à la fratrie et le rétablissement à la maison. Une journée peut comprendre les autoroutes I-40, I-440 et I-540, la NC 147, les rues locales et des déplacements entre les comtés de Wake, Durham et Orange. La congestion, les travaux, la chaleur, les orages et l’énergie changeante de l’enfant peuvent compliquer un trajet familier. L’appui communautaire devrait reconnaître cette incertitude plutôt qu’imposer une activité fixe.", "Le Triangle réunit des familles de nombreuses cultures et langues. Une information publique claire, un accès linguistique approprié et une participation accessible sont donc essentiels. Les entreprises, écoles, universités, organismes récréatifs, communautés religieuses et groupes de hockey peuvent diffuser une information fiable. Leur rôle concerne la sensibilisation et la logistique communautaires. Le diagnostic, les traitements, les conseils médicaux, les recommandations et les décisions de participation demeurent la responsabilité des professionnels pédiatriques qualifiés et de la famille." ] },
      { heading: "Transformer l’intérêt du Triangle en action fiable", paragraphs: ["Un organisme de Raleigh–Durham peut d’abord examiner les objectifs de soins et de souhaits de The Silver Guardian, puis choisir une contribution durable. Il pourrait diffuser des renseignements vérifiés, améliorer l’accessibilité d’une activité de financement ou présenter une personne expérimentée en transport, en événements, en services familiaux ou en accessibilité. Un rôle défini vaut mieux qu’une promesse générale puisque les initiatives communautaires demeurent en développement et qu’aucun programme clinique, emplacement, partenaire ou calendrier d’ouverture dans Raleigh–Durham n’est annoncé.", "Les gens peuvent demander comment les fonds servent la vision pédiatrique, quelles protections de la vie privée sont prévues et quelles étapes sont réellement terminées. Ils devraient aussi vérifier l’effet des changements de traitement, de la mobilité, des déplacements dans le Triangle, de la météo et des besoins linguistiques. Des réponses publiées permettent de distinguer les possibilités confirmées des idées en développement et protègent le temps, les renseignements personnels et les attentes des familles." ] },
    ],
  },
  "hockey-themed-wishes": {
    en: [
      { heading: "A hockey-themed wish shaped around a Triangle child", paragraphs: ["Hockey in Raleigh–Durham can mean youth programs, community rinks, college connections, professional-game traditions or simply watching with family and friends. One child may want to skate, while another cares about a jersey, equipment, meeting someone connected to the sport or sharing a game-day moment with relatives. A meaningful hockey-themed wish starts with that child’s interests and energy. It should not begin with a predetermined venue, publicity plan or assumption that every young fan wants the same experience.", "Travel across Raleigh, Durham and the surrounding Triangle affects what is comfortable. Treatment schedules, fatigue, mobility equipment, infection precautions, I-40 traffic and severe weather can change a plan quickly. A shorter activity close to home, a quiet indoor option, an adapted hockey experience or a remote element may be more valuable than a large public event. The best format is the one that reduces strain, follows relevant care guidance and reflects what the child genuinely enjoys." ] },
      { heading: "Build Raleigh–Durham hockey relationships before making promises", paragraphs: ["A responsible wish needs a defined participant process, family consent, relevant care guidance, an accessible plan, a budget, contingency options and partners who understand their roles. Triangle hockey organizations, rink communities, schools, universities, event professionals and businesses may each contribute useful experience. An introduction is not a confirmation, however. No date, participant, athlete appearance, ticket package or specific experience should be promoted until the essential permissions and resources are secured.", "The Silver Guardian’s 32 Wishes in 32 Cities goal gives Raleigh–Durham relationship-building a clear direction, but this page does not announce an application period or confirmed local wish. Supporters can explain the initiative accurately, identify transportation, language and accessibility questions and make qualified introductions without implying that a program is already operating. If a wish is eventually confirmed, the child and family should control privacy, photography and public participation." ] },
    ],
    "fr-CA": [
      { heading: "Un souhait de hockey adapté à un enfant du Triangle", paragraphs: ["Dans Raleigh–Durham, le hockey peut évoquer les programmes jeunesse, les patinoires communautaires, les liens universitaires, les traditions de matchs professionnels ou simplement un moment partagé en famille. Un enfant peut vouloir patiner; un autre préfère un chandail, de l’équipement, une rencontre liée au sport ou un match avec ses proches. Un souhait significatif commence par les intérêts et l’énergie de cet enfant, et non par un lieu prédéterminé, une stratégie publicitaire ou l’idée que tous les jeunes partisans souhaitent la même expérience.", "Les déplacements entre Raleigh, Durham et les communautés du Triangle influencent le confort. Les traitements, la fatigue, les appareils de mobilité, les précautions contre les infections, la circulation sur l’I-40 et les intempéries peuvent modifier un plan. Une activité plus courte près du domicile, une option calme à l’intérieur, une expérience adaptée ou un élément à distance peut être préférable à un grand événement public lorsqu’elle réduit les efforts et respecte les consignes de soins." ] },
      { heading: "Bâtir les relations de hockey avant de faire une promesse", paragraphs: ["Un souhait responsable exige un processus défini, le consentement familial, des indications de soins pertinentes, un plan accessible, un budget, des solutions de rechange et des partenaires aux rôles clairs. Les organismes de hockey, communautés de patinoire, écoles, universités, professionnels d’événements et entreprises du Triangle peuvent contribuer. Une présentation ne constitue toutefois pas une confirmation; aucune date, aucun participant, aucune présence d’athlète et aucune expérience ne devraient être annoncés avant d’avoir obtenu les autorisations et ressources essentielles.", "L’objectif 32 souhaits dans 32 villes donne une direction au travail relationnel dans Raleigh–Durham, mais cette page n’annonce ni période de demande ni souhait local confirmé. Les gens peuvent expliquer fidèlement l’initiative, cerner les questions de transport, de langue et d’accessibilité et présenter des contacts sans laisser croire qu’un programme fonctionne déjà. Si un souhait est confirmé, l’enfant et sa famille devraient contrôler la vie privée, les photos et la participation publique." ] },
    ],
  },
  "hospital-wishes": {
    en: [
      { heading: "Hospital wishes for Raleigh–Durham families", paragraphs: ["A child receiving specialized care in the Triangle may move among home, outpatient appointments and hospital stays while caregivers manage traffic, parking, work, school and sibling schedules. A supportive hospital wish should fit around the clinical day rather than compete with it. Flexible timing, a clear cancellation approach and an alternate format reduce pressure when an appointment runs late, a treatment plan changes or the child unexpectedly needs rest.", "A Raleigh–Durham element may make it easier for siblings and caregivers to participate, but the nearest venue is not automatically the right choice. The child may prefer an opportunity elsewhere, a care team may recommend a quieter setting or the experience may need to take place in a room rather than a public space. Organizers should ask what is safe, accessible and personally meaningful instead of measuring a wish by travel distance, audience size or public attention." ] },
      { heading: "Permission, privacy and honest referral information", paragraphs: ["Hospital-connected wishes require formal permission and coordination. Infection-control precautions, visitor limits, food restrictions, photography policies, mobility needs and hospital operations can affect every detail. Families should never be asked to send medical records through ordinary email or social messages. Any future referral process should explain eligibility, why information is collected, who may review it, expected response times and what happens when demand exceeds available opportunities.", "No Raleigh–Durham referral process or hospital partnership is announced here. The Silver Guardian is developing community and hockey relationships for its broader wish goal, so this page provides information rather than accepting applications. Triangle advocates can prepare responsibly by understanding consent, privacy, accessibility, language access and adaptable family logistics. These safeguards do not reduce generosity; they help a future experience earn trust and protect a child’s dignity." ] },
    ],
    "fr-CA": [
      { heading: "Des souhaits à l’hôpital pour les familles de Raleigh–Durham", paragraphs: ["Un enfant qui reçoit des soins spécialisés dans le Triangle peut se déplacer entre le domicile, les rendez-vous externes et les séjours hospitaliers pendant que ses proches gèrent la circulation, le stationnement, le travail, l’école et la fratrie. Un souhait à l’hôpital devrait s’adapter à la journée clinique plutôt que lui faire concurrence. Un horaire souple, des modalités d’annulation claires et un autre format réduisent la pression lorsqu’un rendez-vous se prolonge, qu’un traitement change ou que l’enfant doit se reposer.", "Un élément dans Raleigh–Durham peut faciliter la participation des proches, mais le lieu le plus proche n’est pas automatiquement le meilleur. L’enfant peut préférer une possibilité ailleurs, une équipe de soins peut recommander un milieu plus calme ou l’expérience peut devoir se dérouler dans une chambre. Les organisateurs devraient privilégier la sécurité, l’accessibilité et la signification personnelle plutôt que la distance, la foule ou l’attention publique." ] },
      { heading: "Autorisations, vie privée et information honnête", paragraphs: ["Les souhaits liés à l’hôpital exigent des autorisations et une coordination formelles. Les précautions contre les infections, les limites de visiteurs, l’alimentation, les politiques de photographie, la mobilité et les activités hospitalières influencent chaque détail. Une famille ne devrait jamais transmettre un dossier médical par courriel ordinaire ou message social. Tout futur processus devrait expliquer l’admissibilité, la raison de la collecte, l’accès aux renseignements, les délais et la gestion d’une demande supérieure aux possibilités.", "Aucun processus de demande ni partenariat hospitalier dans Raleigh–Durham n’est annoncé ici. The Silver Guardian développe des relations communautaires et sportives pour son objectif élargi; cette page informe sans recevoir de demandes. Les défenseurs du Triangle peuvent se préparer en comprenant le consentement, la vie privée, l’accessibilité, l’accès linguistique et une logistique familiale adaptable. Ces protections favorisent la confiance et respectent la dignité de l’enfant." ] },
    ],
  },
};

const landingLinks = (locale: Locale) => {
  const isFrench = locale === "fr-CA";
  return raleighDurhamTopicSlugs.map((topic) => ({
    href: `/raleigh-durham/${topic}/`,
    label: isFrench
      ? ({ "pediatric-cancer": "soutien au cancer pédiatrique", "hockey-themed-wishes": "souhaits sur le thème du hockey", "hospital-wishes": "souhaits à l’hôpital" }[topic] + " à Raleigh–Durham")
      : ({ "pediatric-cancer": "pediatric cancer support", "hockey-themed-wishes": "hockey-themed wishes", "hospital-wishes": "hospital wishes" }[topic] + " in Raleigh–Durham"),
    description: isFrench ? "Consultez la ressource locale détaillée pour le Triangle." : "Explore the detailed local resource for the Triangle.",
  }));
};

export const raleighDurhamLandingContent: Record<Locale, MontrealPageContent> = {
  en: {
    ...transformContent(montrealLandingContent.en),
    title: "Pediatric Care Support in Raleigh–Durham",
    description: "Explore Raleigh–Durham pediatric care support, hockey wishes and community fundraising through The Silver Guardian’s developing vision.",
    keywords: ["Raleigh-Durham pediatric care support", "pediatric cancer Raleigh", "pediatric cancer Durham", "hockey wishes North Carolina"],
    eyebrow: "Raleigh–Durham, North Carolina",
    heading: "Pediatric care and hockey-inspired hope in Raleigh–Durham",
    introduction: "Families across Raleigh, Durham and the Triangle facing pediatric cancer or heart disease may balance regional care with school, work, travel and everyday family life. The Silver Guardian’s vision gives residents, businesses and hockey communities a way to explore support for a independent movement and hockey-wish concepts.",
    sections: [
      { heading: "A mission connected to the Triangle", paragraphs: ["Raleigh–Durham’s neighbourhood, school, university, recreation, cultural and business networks connect families across Wake, Durham, Orange and nearby counties. Those relationships can help a clearly defined pediatric support mission reach people without suggesting that an operating program already exists.", "The Silver Guardian is developing independent community fundraising, movement and wish initiatives. No Raleigh–Durham movement program, wish event or healthcare affiliation is announced here."], bullets: ["Independent community support inspired by hockey and accessible movement", "A focus primarily on pediatric cancer and heart disease", "Community fundraising and relationship-building for future progress"] },
      { heading: "Why Raleigh–Durham context matters", paragraphs: ["Families may travel on I-40 and other Triangle routes between home, school, work and specialized appointments. Congestion, severe weather, accessibility, parking and language access should shape future activities. Responsible planning begins with a family’s actual journey rather than a generic map of the region."] },
      { heading: "How to explore the initiative", paragraphs: ["Use the focused Raleigh–Durham resources below, review the current fundraising and wishes goals and follow verified progress. Useful support grows through clear roles, careful family protections and confirmed milestones rather than assumptions about services that are not available."] },
    ],
    relatedHeading: "Explore the Raleigh–Durham initiative",
    relatedLinks: landingLinks("en"),
  },
  "fr-CA": {
    ...transformContent(montrealLandingContent["fr-CA"]),
    title: "Soutien pédiatrique à Raleigh–Durham",
    description: "Découvrez la vision de soutien pédiatrique, de souhaits de hockey et de financement communautaire à Raleigh–Durham.",
    keywords: ["soutien pédiatrique Raleigh-Durham", "cancer pédiatrique Raleigh", "cancer pédiatrique Durham", "souhaits hockey Caroline du Nord"],
    eyebrow: "Raleigh–Durham, Caroline du Nord",
    heading: "Des soins pédiatriques et de l’espoir inspiré du hockey à Raleigh–Durham",
    introduction: "Les familles de Raleigh, Durham et du Triangle touchées par le cancer ou une maladie cardiaque pédiatrique peuvent concilier les soins régionaux, l’école, le travail, les déplacements et la vie quotidienne. La vision de The Silver Guardian permet aux résidents, entreprises et communautés de hockey d’explorer un appui à un initiatives indépendantes de mouvement et de souhaits liés au hockey.",
    sections: [
      { heading: "Une mission liée au Triangle", paragraphs: ["Les réseaux de quartier, scolaires, universitaires, récréatifs, culturels et commerciaux de Raleigh–Durham relient des familles des comtés de Wake, Durham, Orange et des environs. Ces relations peuvent faire connaître une mission pédiatrique précise sans laisser croire qu’un programme fonctionne déjà.", "The Silver Guardian développe des initiatives communautaires indépendantes de financement, de mouvement et de souhaits. Aucun programme de mouvement, événement de souhait ou lien avec un fournisseur de soins dans Raleigh–Durham n’est annoncé ici."], bullets: ["Un soutien communautaire indépendant inspiré du hockey et du mouvement accessible", "Une attention surtout au cancer et aux maladies cardiaques pédiatriques", "Du financement et des relations communautaires pour de futurs progrès"] },
      { heading: "Pourquoi le contexte de Raleigh–Durham compte", paragraphs: ["Les familles peuvent emprunter l’I-40 et d’autres routes du Triangle entre le domicile, l’école, le travail et les rendez-vous spécialisés. La congestion, les intempéries, l’accessibilité, le stationnement et l’accès linguistique devraient orienter les futures activités."] },
      { heading: "Comment découvrir l’initiative", paragraphs: ["Consultez les ressources de Raleigh–Durham ci-dessous, découvrez les objectifs actuels et suivez les progrès vérifiés. Un appui utile repose sur des rôles clairs, des protections familiales et des étapes confirmées plutôt que sur des services non disponibles."] },
    ],
    relatedHeading: "Découvrir l’initiative de Raleigh–Durham",
    relatedLinks: landingLinks("fr-CA"),
  },
};

export function getRaleighDurhamTopicContent(slug: string, locale: Locale) {
  if (!raleighDurhamTopicSlugs.includes(slug as RaleighDurhamTopicSlug)) return undefined;
  const source = getMontrealTopicContent(slug, locale);
  if (!source) return undefined;
  const content = transformContent(source);
  return { ...content, sections: [...localSections[slug as RaleighDurhamTopicSlug][locale], ...content.sections] };
}

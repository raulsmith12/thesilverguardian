import type { Locale } from "@/lib/i18n";
import { montrealExpansions } from "@/lib/montrealExpansions";

export const montrealTopicSlugs = [
  "pediatric-cancer",
  "hockey-themed-wishes",
  "hospital-wishes",
  "childrens-hospital",
] as const;

export type MontrealTopicSlug = (typeof montrealTopicSlugs)[number];

type Faq = { question: string; answer: string };
type Section = { heading: string; paragraphs: string[]; bullets?: string[] };
type RelatedLink = { href: string; label: string; description: string };

export type MontrealPageContent = {
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heading: string;
  introduction: string;
  imageLabel: string;
  imageAlt: string;
  supportingImages?: { label: string; alt: string }[];
  supportingImageSet?: "hockey-wishes" | "pediatric-care" | "childrens-hospital" | "hospital-wishes";
  sections: Section[];
  relatedHeading: string;
  relatedLinks: RelatedLink[];
  faqHeading: string;
  faqs: Faq[];
  closingHeading: string;
  closingText: string;
  ctaLabel: string;
  ctaHref: string;
};

const enBaseLinks: RelatedLink[] = [
  { href: "/montreal/pediatric-cancer/", label: "pediatric cancer support in Montreal", description: "See how community support can complement a child’s clinical care." },
  { href: "/montreal/hockey-themed-wishes/", label: "hockey-themed wishes in Montreal", description: "Explore a wish concept shaped by Montreal’s connection to hockey." },
  { href: "/montreal/hospital-wishes/", label: "hospital wishes for Montreal children", description: "Learn how a thoughtful wish can create a positive milestone during treatment." },
  { href: "/montreal/childrens-hospital/", label: "children’s hospital support in Montreal", description: "Understand the proposed pediatric care environment and its community role." },
];

const enLavalLink: RelatedLink = { href: "/laval/", label: "pediatric care support in Laval", description: "Explore the neighbouring Laval initiative and its locally focused resources." };
const enLongueuilLink: RelatedLink = { href: "/longueuil/", label: "pediatric care support in Longueuil", description: "Explore the neighbouring Longueuil initiative and its South Shore resources." };
const enBrossardLink: RelatedLink = { href: "/brossard/", label: "pediatric care support in Brossard", description: "Explore the neighbouring Brossard initiative and its South Shore resources." };
const enTerrebonneLink: RelatedLink = { href: "/terrebonne/", label: "pediatric care support in Terrebonne", description: "Explore the Terrebonne initiative and its North Shore resources." };
const enPointeClaireLink: RelatedLink = { href: "/pointe-claire/", label: "pediatric care support in Pointe-Claire", description: "Explore the Pointe-Claire initiative and its West Island resources." };

const frBaseLinks: RelatedLink[] = [
  { href: "/montreal/pediatric-cancer/", label: "soutien au cancer pédiatrique à Montréal", description: "Voyez comment l’appui communautaire peut compléter les soins cliniques d’un enfant." },
  { href: "/montreal/hockey-themed-wishes/", label: "souhaits sur le thème du hockey à Montréal", description: "Découvrez un concept de souhait inspiré par le lien de Montréal avec le hockey." },
  { href: "/montreal/hospital-wishes/", label: "souhaits à l’hôpital pour les enfants de Montréal", description: "Découvrez comment un souhait attentionné peut créer un moment positif pendant les traitements." },
  { href: "/montreal/childrens-hospital/", label: "soutien aux hôpitaux pour enfants à Montréal", description: "Comprenez le milieu de soins pédiatriques proposé et son rôle communautaire." },
];

const frLavalLink: RelatedLink = { href: "/laval/", label: "soutien aux soins pédiatriques à Laval", description: "Découvrez l’initiative voisine de Laval et ses ressources adaptées au contexte local." };
const frLongueuilLink: RelatedLink = { href: "/longueuil/", label: "soutien aux soins pédiatriques à Longueuil", description: "Découvrez l’initiative voisine de Longueuil et ses ressources pour la Rive-Sud." };
const frBrossardLink: RelatedLink = { href: "/brossard/", label: "soutien aux soins pédiatriques à Brossard", description: "Découvrez l’initiative voisine de Brossard et ses ressources pour la Rive-Sud." };
const frTerrebonneLink: RelatedLink = { href: "/terrebonne/", label: "soutien aux soins pédiatriques à Terrebonne", description: "Découvrez l’initiative de Terrebonne et ses ressources pour la Rive-Nord." };
const frPointeClaireLink: RelatedLink = { href: "/pointe-claire/", label: "soutien aux soins pédiatriques à Pointe-Claire", description: "Découvrez l’initiative de Pointe-Claire et ses ressources pour l’Ouest-de-l’Île." };

export const montrealLandingContent: Record<Locale, MontrealPageContent> = {
  en: {
    title: "Pediatric Care Support in Montreal",
    description: "Explore The Silver Guardian’s Montreal vision for pediatric care support, hockey-themed wishes and community-led fundraising.",
    keywords: ["Montreal pediatric care support", "pediatric cancer Montreal", "hockey wishes Montreal", "children's hospital Montreal"],
    eyebrow: "Montreal, Quebec",
    heading: "Pediatric care and hockey-inspired hope in Montreal",
    introduction: "Montreal families facing pediatric cancer or heart disease often balance treatment, travel, school and everyday family life at the same time. The Silver Guardian’s vision brings local supporters around two connected goals: a kid-friendly, hockey-themed pediatric care concept and meaningful hockey-related wishes for children across North America.",
    imageLabel: "Placeholder: Montreal community and hockey image",
    imageAlt: "Placeholder for a Montreal community and hockey photograph",
    sections: [
      { heading: "A mission that fits Montreal", paragraphs: ["Hockey is part of Montreal’s shared language, across neighbourhood rinks, school teams and generations of fans. That makes the city a natural setting for an environment designed to feel familiar and encouraging to children during difficult care journeys.", "The Silver Guardian is currently building community support for this vision. The proposed facility is a concept, and no opening date or clinical services are being advertised on this page."], bullets: ["A child-focused setting shaped around an ice hockey theme", "Support for families affected primarily by pediatric cancer and heart disease", "A wider goal of granting 32 hockey-related wishes in 32 North American cities each year"] },
      { heading: "Why Montreal families and supporters may get involved", paragraphs: ["A serious diagnosis can make childhood feel organized around appointments and uncertainty. Community-backed experiences can give a child something personal to anticipate while helping local businesses, hockey groups and residents direct their energy toward a defined mission.", "Support may take the form of participating in fundraising, sharing the initiative or helping build the relationships needed for future wishes. Medical decisions and referrals always remain with a child’s family and qualified care team."] },
      { heading: "How The Silver Guardian approaches the work", paragraphs: ["The organization connects business owners and community advocates around practical, visible initiatives. Seasonal events and the Score a Goal campaign are intended to gather resources for the pediatric care concept, while 32 Wishes in 32 Cities focuses on hockey-related moments for children.", "The approach is community-first and incremental: explain the goal clearly, build support, develop partnerships and share progress as plans take shape."] },
    ],
    relatedHeading: "Explore the Montreal initiative",
    relatedLinks: [...enBaseLinks, enLavalLink, enLongueuilLink, enBrossardLink, enTerrebonneLink, enPointeClaireLink],
    faqHeading: "Frequently asked questions about Montreal",
    faqs: [
      { question: "Does The Silver Guardian operate a children’s hospital in Montreal?", answer: "No. The Silver Guardian is gathering support for an innovative pediatric care facility concept; this page does not announce an operating hospital or opening date." },
      { question: "Are the Montreal programs available in English and French?", answer: "The initiative is presented in both English and Canadian French so families and supporters can understand the mission in either language. Specific future program details will be shared as they are confirmed." },
      { question: "Who is the initiative intended to support?", answer: "The mission centres on children facing life-threatening conditions, primarily cancer and heart disease, as well as the families and communities around them." },
      { question: "How can a Montreal organization take the next step?", answer: "It can begin by reviewing the fundraising and 32 Wishes initiatives, then choose the part of the mission that best fits its community goals." },
    ],
    closingHeading: "Help shape the next chapter in Montreal",
    closingText: "Explore the active initiatives, share the vision with people who care about pediatric health and hockey, and consider where your organization or community can contribute.",
    ctaLabel: "Explore ways to support the mission",
    ctaHref: "/fundraising/",
  },
  "fr-CA": {
    title: "Soutien aux soins pédiatriques à Montréal",
    description: "Découvrez la vision montréalaise de The Silver Guardian : soins pédiatriques, souhaits de hockey et financement communautaire.",
    keywords: ["soutien soins pédiatriques Montréal", "cancer pédiatrique Montréal", "souhaits hockey Montréal", "hôpital pour enfants Montréal"],
    eyebrow: "Montréal, Québec",
    heading: "Des soins pédiatriques et de l’espoir inspiré du hockey à Montréal",
    introduction: "À Montréal, les familles touchées par le cancer ou une maladie cardiaque pédiatrique doivent souvent concilier les traitements, les déplacements, l’école et la vie familiale. La vision de The Silver Guardian rassemble les gens d’ici autour de deux objectifs liés : un concept de soins pédiatriques accueillant sur le thème du hockey et des souhaits mémorables liés au hockey pour des enfants en Amérique du Nord.",
    imageLabel: "Espace réservé : image de Montréal, de la communauté et du hockey",
    imageAlt: "Espace réservé pour une photo de la communauté montréalaise et du hockey",
    sections: [
      { heading: "Une mission qui rejoint Montréal", paragraphs: ["Le hockey fait partie du langage commun de Montréal, des patinoires de quartier aux équipes scolaires, en passant par plusieurs générations de partisans. La ville constitue donc un milieu naturel pour imaginer un environnement familier et encourageant pour les enfants pendant un parcours de soins difficile.", "The Silver Guardian mobilise actuellement l’appui communautaire envers cette vision. L’établissement proposé demeure un concept; cette page n’annonce ni ouverture ni services cliniques."], bullets: ["Un environnement centré sur l’enfant et inspiré du hockey sur glace", "Un appui aux familles principalement touchées par le cancer et les maladies cardiaques pédiatriques", "Un objectif élargi : réaliser chaque année 32 souhaits liés au hockey dans 32 villes nord-américaines"] },
      { heading: "Pourquoi les familles et les gens de Montréal peuvent s’impliquer", paragraphs: ["Un diagnostic grave peut faire en sorte que l’enfance s’organise autour des rendez-vous et de l’incertitude. Des expériences soutenues par la communauté peuvent offrir à l’enfant un moment personnel à anticiper et permettre aux entreprises, aux groupes de hockey et aux résidents d’appuyer une mission précise.", "L’appui peut prendre la forme d’une participation au financement, d’un partage de l’initiative ou de la création de liens nécessaires à de futurs souhaits. Les décisions médicales et les recommandations relèvent toujours de la famille et de l’équipe de soins qualifiée."] },
      { heading: "L’approche de The Silver Guardian", paragraphs: ["L’organisme réunit des propriétaires d’entreprise et des défenseurs de la communauté autour d’initiatives concrètes et visibles. Les activités saisonnières et la campagne Marquez un but visent à réunir des ressources pour le concept de soins pédiatriques, tandis que 32 souhaits dans 32 villes met l’accent sur des moments liés au hockey pour les enfants.", "L’approche est communautaire et progressive : présenter clairement l’objectif, mobiliser l’appui, développer des partenariats et communiquer les progrès à mesure que les plans se précisent."] },
    ],
    relatedHeading: "Découvrir l’initiative montréalaise",
    relatedLinks: [...frBaseLinks, frLavalLink, frLongueuilLink, frBrossardLink, frTerrebonneLink, frPointeClaireLink],
    faqHeading: "Questions fréquentes sur Montréal",
    faqs: [
      { question: "The Silver Guardian exploite-t-il un hôpital pour enfants à Montréal?", answer: "Non. The Silver Guardian mobilise un appui pour un concept novateur d’établissement de soins pédiatriques; cette page n’annonce pas un hôpital en activité ni une date d’ouverture." },
      { question: "Les programmes montréalais sont-ils offerts en français et en anglais?", answer: "L’initiative est présentée en français canadien et en anglais afin que les familles et les gens qui l’appuient puissent comprendre la mission dans les deux langues. Les détails des futurs programmes seront communiqués une fois confirmés." },
      { question: "À qui s’adresse l’initiative?", answer: "La mission est axée sur les enfants atteints de maladies potentiellement mortelles, principalement le cancer et les maladies cardiaques, ainsi que sur leurs familles et leurs communautés." },
      { question: "Quelle est la prochaine étape pour un organisme montréalais?", answer: "Il peut d’abord découvrir les initiatives de financement et 32 souhaits, puis choisir le volet qui correspond le mieux à ses objectifs communautaires." },
    ],
    closingHeading: "Contribuez au prochain chapitre à Montréal",
    closingText: "Découvrez les initiatives en cours, faites connaître la vision aux personnes sensibles à la santé pédiatrique et au hockey, puis voyez comment votre organisme ou votre communauté peut contribuer.",
    ctaLabel: "Découvrir comment soutenir la mission",
    ctaHref: "/fundraising/",
  },
};

const topicContent: Record<MontrealTopicSlug, Record<Locale, MontrealPageContent>> = {
  "pediatric-cancer": {
    en: {
      title: "Pediatric Cancer Support in Montreal",
      description: "Learn how The Silver Guardian’s Montreal vision connects pediatric cancer support, hockey-themed hope and community action.",
      keywords: ["pediatric cancer Montreal", "childhood cancer support Montreal", "Montreal pediatric cancer charity"], eyebrow: "Montreal pediatric cancer support", heading: "Community support for Montreal children facing cancer",
      introduction: "For a Montreal family, pediatric cancer can mean long treatment schedules, disrupted routines and emotional strain that reaches well beyond the hospital room. The Silver Guardian’s mission is to inspire hope and healing by building support for a kid-friendly pediatric care concept and hockey-related wishes.",
      imageLabel: "Placeholder: child-friendly hockey environment", imageAlt: "Placeholder for a child-friendly hockey-themed care environment",
      sections: [
        { heading: "Why support beyond treatment matters", paragraphs: ["Clinical care is only one part of a family’s experience. Children may miss school, friendships and ordinary milestones, while caregivers coordinate work, transportation and time with siblings. A positive goal or familiar theme can create a welcome point of focus.", "The Silver Guardian does not provide medical advice or cancer treatment. Its role is to rally community support around environments and experiences intended to complement, never replace, care from qualified pediatric professionals."] },
        { heading: "A hockey connection rooted in Montreal", paragraphs: ["In Montreal, hockey can connect a child to a neighbourhood rink, a favourite player or a family ritual during winter. The proposed care concept uses that recognizable setting to make a difficult experience feel less clinical and more child-centred."], bullets: ["A kid-friendly ice hockey theme designed to encourage hope", "Community fundraising through seasonal events and Score a Goal", "Hockey-related wishes through the 32 Wishes in 32 Cities goal"] },
        { heading: "How community support moves the idea forward", paragraphs: ["The process begins with awareness and sustained local participation. Residents, businesses and hockey communities can learn about the mission, support fundraising activity and help develop connections for future wishes.", "Plans and partnerships take time. The Silver Guardian’s current website asks supporters to follow progress as the care facility concept and related initiatives continue to take shape."] },
      ], relatedHeading: "Related Montreal resources", relatedLinks: enBaseLinks.filter((link) => !link.href.endsWith("pediatric-cancer/")), faqHeading: "Pediatric cancer support FAQ",
      faqs: [
        { question: "Does The Silver Guardian provide pediatric cancer treatment in Montreal?", answer: "No. It is building support for a pediatric care facility concept and related community initiatives, not offering diagnosis, treatment or medical advice." },
        { question: "Is this support only for children who play hockey?", answer: "No. Hockey is the theme and a source of encouraging experiences; a child does not need to be a hockey player to connect with the mission." },
        { question: "What conditions are central to the mission?", answer: "The current mission primarily identifies pediatric cancer and heart disease among the life-threatening conditions it hopes to address." },
        { question: "How can Montreal’s hockey community help?", answer: "Teams, businesses and fans can build awareness, take part in fundraising and help form the community relationships needed for future hockey-related wishes." },
      ], closingHeading: "Turn local care into visible support", closingText: "Learn how Score a Goal is intended to gather resources for the pediatric care vision and decide whether it aligns with the way you want to support Montreal families.", ctaLabel: "Explore Score a Goal", ctaHref: "/fundraising/",
    },
    "fr-CA": {
      title: "Soutien au cancer pédiatrique à Montréal", description: "Découvrez comment la vision montréalaise de The Silver Guardian unit soutien au cancer pédiatrique, hockey et action communautaire.", keywords: ["cancer pédiatrique Montréal", "soutien cancer enfant Montréal", "organisme cancer pédiatrique Montréal"], eyebrow: "Soutien au cancer pédiatrique à Montréal", heading: "Un appui communautaire pour les enfants de Montréal atteints de cancer",
      introduction: "Pour une famille montréalaise, le cancer pédiatrique peut entraîner de longs traitements, bouleverser les habitudes et causer une pression émotionnelle qui dépasse largement la chambre d’hôpital. The Silver Guardian veut inspirer l’espoir et la guérison en mobilisant un appui pour un concept de soins adapté aux enfants et des souhaits liés au hockey.", imageLabel: "Espace réservé : environnement de hockey adapté aux enfants", imageAlt: "Espace réservé pour un environnement de soins sur le thème du hockey",
      sections: [
        { heading: "Pourquoi l’appui au-delà des traitements est important", paragraphs: ["Les soins cliniques ne représentent qu’une partie de l’expérience familiale. Les enfants peuvent manquer l’école, leurs amis et des étapes ordinaires, tandis que les proches concilient le travail, les déplacements et les besoins de la fratrie. Un objectif positif ou un thème familier peut offrir un précieux point de repère.", "The Silver Guardian n’offre ni conseil médical ni traitement du cancer. Son rôle consiste à mobiliser la communauté autour d’environnements et d’expériences qui complètent, sans jamais remplacer, les soins de professionnels pédiatriques qualifiés."] },
        { heading: "Un lien avec le hockey bien ancré à Montréal", paragraphs: ["À Montréal, le hockey peut relier un enfant à la patinoire du quartier, à son joueur préféré ou à un rituel familial de l’hiver. Le concept de soins proposé s’appuie sur cet univers reconnaissable pour rendre une expérience difficile moins clinique et davantage centrée sur l’enfant."], bullets: ["Un thème de hockey sur glace adapté aux enfants et conçu pour encourager l’espoir", "Du financement communautaire au moyen d’activités saisonnières et de Marquez un but", "Des souhaits liés au hockey dans le cadre de l’objectif 32 souhaits dans 32 villes"] },
        { heading: "Comment l’appui communautaire fait avancer l’idée", paragraphs: ["Le processus commence par la sensibilisation et une participation locale soutenue. Les résidents, les entreprises et les communautés de hockey peuvent découvrir la mission, appuyer le financement et contribuer à créer des liens pour de futurs souhaits.", "Les plans et les partenariats demandent du temps. The Silver Guardian invite actuellement les gens à suivre les progrès à mesure que le concept de soins et les initiatives connexes prennent forme."] },
      ], relatedHeading: "Ressources connexes à Montréal", relatedLinks: frBaseLinks.filter((link) => !link.href.endsWith("pediatric-cancer/")), faqHeading: "FAQ sur le soutien au cancer pédiatrique",
      faqs: [
        { question: "The Silver Guardian traite-t-il le cancer pédiatrique à Montréal?", answer: "Non. L’organisme mobilise un appui pour un concept de soins pédiatriques et des initiatives communautaires; il n’offre ni diagnostic, ni traitement, ni conseil médical." },
        { question: "Le soutien s’adresse-t-il seulement aux enfants qui jouent au hockey?", answer: "Non. Le hockey est le thème et une source d’expériences encourageantes; l’enfant n’a pas besoin d’être joueur pour se reconnaître dans la mission." },
        { question: "Quelles maladies sont au cœur de la mission?", answer: "La mission actuelle nomme principalement le cancer et les maladies cardiaques pédiatriques parmi les affections potentiellement mortelles qu’elle souhaite aborder." },
        { question: "Comment la communauté montréalaise du hockey peut-elle aider?", answer: "Les équipes, les entreprises et les partisans peuvent sensibiliser leur entourage, participer au financement et contribuer aux liens nécessaires à de futurs souhaits liés au hockey." },
      ], closingHeading: "Transformer l’engagement local en appui concret", closingText: "Découvrez comment Marquez un but vise à réunir des ressources pour la vision de soins pédiatriques et voyez si l’initiative correspond à votre façon de soutenir les familles de Montréal.", ctaLabel: "Découvrir Marquez un but", ctaHref: "/fundraising/",
    },
  },
  "hockey-themed-wishes": {
    en: {
      title: "Hockey-Themed Wishes in Montreal", description: "Explore hockey-themed wishes for Montreal children through The Silver Guardian’s 32 Wishes in 32 Cities goal.", keywords: ["hockey-themed wishes Montreal", "hockey wishes for children Montreal", "Montreal hockey charity"], eyebrow: "Hockey-themed wishes in Montreal", heading: "Hockey-themed wishes for Montreal children", introduction: "A hockey wish can give a child facing cancer or heart disease a milestone that feels entirely their own. In a city where outdoor rinks, local teams and hockey history are woven into winter life, Montreal offers a meaningful setting for The Silver Guardian’s 32 Wishes in 32 Cities goal.", imageLabel: "Placeholder: Montreal hockey wish experience", imageAlt: "Placeholder for a child enjoying a hockey-themed wish in Montreal",
      sections: [
        { heading: "Why a hockey wish can be meaningful", paragraphs: ["Treatment can narrow a child’s world to appointments and recovery. A wish can reopen it for a day by focusing on a favourite sport, team tradition or hockey dream. The value lies in listening to what matters to the child and creating a positive memory around it.", "The Silver Guardian’s stated annual goal is 32 hockey-related wishes for brave children in 32 cities across the United States and Canada, delivered through one event intended to spread hope and joy."] },
        { heading: "What a Montreal wish would require", paragraphs: ["A responsible wish depends on confirmed partners, practical planning and the child’s health and accessibility needs. Details should be coordinated with the family and appropriate care professionals before an experience is promised."], bullets: ["Understand the child’s hockey interest and preferred experience", "Confirm timing, accessibility and family considerations", "Coordinate participating hockey and community partners", "Protect the child’s privacy and share only approved details"] },
        { heading: "Built through hockey-community relationships", paragraphs: ["The initiative is designed to bring community advocates together with members of the North American professional hockey community. Montreal supporters can help by expanding awareness and building credible relationships that may make future wishes possible.", "No specific Montreal wish recipient, partner or event date is announced here. Confirmed updates should come from The Silver Guardian’s published channels."] },
      ], relatedHeading: "Continue exploring Montreal support", relatedLinks: enBaseLinks.filter((link) => !link.href.endsWith("hockey-themed-wishes/")), faqHeading: "Hockey-themed wishes FAQ",
      faqs: [
        { question: "Is a Montreal hockey wish currently scheduled?", answer: "No Montreal date or recipient is announced on this page. The organization will share details as partners and plans are confirmed." },
        { question: "What is 32 Wishes in 32 Cities?", answer: "It is The Silver Guardian’s goal to grant 32 hockey-related wishes to children in 32 North American cities each year through one hope-focused event." },
        { question: "Would a child need to attend a game?", answer: "Not necessarily. A wish should reflect the child’s interests, health, accessibility needs and confirmed opportunities; no single format is promised." },
        { question: "Can a Montreal hockey organization participate?", answer: "Organizations can learn about the initiative and consider whether their community relationships, visibility or fundraising activity align with the wish goal." },
      ], closingHeading: "Help make room for a future Montreal wish", closingText: "Learn more about the 32-city goal and share it with Montreal hockey supporters who may be able to help turn a carefully planned wish into a lasting memory.", ctaLabel: "Explore 32 Wishes in 32 Cities", ctaHref: "/32-wishes/",
    },
    "fr-CA": {
      title: "Souhaits de hockey à Montréal", description: "Découvrez les souhaits sur le thème du hockey pour les enfants de Montréal et l’objectif 32 souhaits dans 32 villes.", keywords: ["souhaits hockey Montréal", "souhait hockey enfant Montréal", "organisme hockey Montréal"], eyebrow: "Souhaits sur le thème du hockey à Montréal", heading: "Des souhaits sur le thème du hockey pour les enfants de Montréal", introduction: "Un souhait lié au hockey peut offrir à un enfant atteint de cancer ou d’une maladie cardiaque un moment qui lui appartient vraiment. Dans une ville où les patinoires extérieures, les équipes locales et l’histoire du hockey rythment l’hiver, Montréal représente un milieu significatif pour l’objectif 32 souhaits dans 32 villes de The Silver Guardian.", imageLabel: "Espace réservé : expérience de souhait de hockey à Montréal", imageAlt: "Espace réservé pour un enfant vivant un souhait de hockey à Montréal",
      sections: [
        { heading: "Pourquoi un souhait de hockey peut compter", paragraphs: ["Les traitements peuvent réduire le quotidien d’un enfant aux rendez-vous et au rétablissement. Un souhait peut élargir son horizon pendant une journée en mettant de l’avant son sport préféré, une tradition d’équipe ou un rêve lié au hockey. L’essentiel est d’écouter ce qui lui tient à cœur et de créer un souvenir positif.", "L’objectif annuel déclaré de The Silver Guardian est de réaliser 32 souhaits liés au hockey pour de courageux enfants dans 32 villes des États-Unis et du Canada, dans le cadre d’un événement destiné à répandre l’espoir et la joie."] },
        { heading: "Ce qu’exigerait un souhait à Montréal", paragraphs: ["Un souhait responsable repose sur des partenaires confirmés, une planification pratique ainsi que les besoins de santé et d’accessibilité de l’enfant. Les détails doivent être coordonnés avec la famille et les professionnels de soins appropriés avant de promettre une expérience."], bullets: ["Comprendre l’intérêt de l’enfant pour le hockey et l’expérience souhaitée", "Confirmer le moment, l’accessibilité et les besoins familiaux", "Coordonner les partenaires du hockey et de la communauté", "Protéger la vie privée de l’enfant et ne communiquer que les renseignements autorisés"] },
        { heading: "Des liens bâtis dans la communauté du hockey", paragraphs: ["L’initiative vise à rapprocher les défenseurs de la communauté et des membres du hockey professionnel nord-américain. Les gens de Montréal peuvent accroître la visibilité et créer des relations crédibles susceptibles de rendre de futurs souhaits possibles.", "Aucun bénéficiaire, partenaire ou événement montréalais précis n’est annoncé ici. Les mises à jour confirmées devraient provenir des canaux publiés par The Silver Guardian."] },
      ], relatedHeading: "Poursuivre la découverte du soutien à Montréal", relatedLinks: frBaseLinks.filter((link) => !link.href.endsWith("hockey-themed-wishes/")), faqHeading: "FAQ sur les souhaits de hockey",
      faqs: [
        { question: "Un souhait de hockey est-il actuellement prévu à Montréal?", answer: "Aucune date ni aucun bénéficiaire montréalais n’est annoncé sur cette page. L’organisme communiquera les détails lorsque les partenaires et les plans seront confirmés." },
        { question: "Qu’est-ce que 32 souhaits dans 32 villes?", answer: "C’est l’objectif de The Silver Guardian de réaliser chaque année 32 souhaits liés au hockey pour des enfants de 32 villes nord-américaines au moyen d’un événement axé sur l’espoir." },
        { question: "L’enfant devrait-il assister à un match?", answer: "Pas nécessairement. Le souhait devrait tenir compte de ses intérêts, de sa santé, de ses besoins d’accessibilité et des possibilités confirmées; aucun format unique n’est promis." },
        { question: "Un organisme de hockey montréalais peut-il participer?", answer: "Un organisme peut découvrir l’initiative et déterminer si ses liens communautaires, sa visibilité ou ses activités de financement correspondent à l’objectif des souhaits." },
      ], closingHeading: "Préparer le terrain pour un futur souhait montréalais", closingText: "Découvrez l’objectif des 32 villes et faites-le connaître aux gens du hockey montréalais qui pourraient contribuer à transformer un souhait bien planifié en souvenir durable.", ctaLabel: "Découvrir 32 souhaits dans 32 villes", ctaHref: "/32-wishes/",
    },
  },
  "hospital-wishes": {
    en: {
      title: "Hospital Wishes for Children in Montreal", description: "Learn how hospital wishes can offer hopeful moments for Montreal children facing cancer or heart disease.", keywords: ["hospital wishes Montreal", "children's hospital wishes Montreal", "pediatric patient wishes Montreal"], eyebrow: "Hospital wishes in Montreal", heading: "Hopeful hospital wishes for Montreal children", introduction: "When a child’s routine revolves around hospital care, a personal wish can create a positive milestone to anticipate. The Silver Guardian’s hockey-related wish goal is intended for children facing pediatric cancer and heart disease in communities across North America, including cities with a strong hockey identity such as Montreal.", imageLabel: "Placeholder: child receiving a hospital-friendly wish", imageAlt: "Placeholder for a child-friendly wish experience connected to hospital care",
      sections: [
        { heading: "When families may look for a wish experience", paragraphs: ["Families may explore a wish when treatment is prolonged, normal activities have been interrupted or a child needs an encouraging focus outside their diagnosis. A well-considered wish respects the realities of care while recognizing the child as a whole person.", "A wish is not a clinical service, financial benefit or substitute for treatment. Eligibility, timing and scope would depend on a confirmed program and the circumstances of each child."] },
        { heading: "A child-first planning approach", paragraphs: ["Hospital-connected experiences require care, flexibility and clear permission. The child’s energy, mobility, infection precautions, privacy and family schedule can all shape what is realistic."], bullets: ["Begin with the child’s interests rather than a standard package", "Work within guidance from the family and care team", "Plan an accessible alternative if travel or attendance is not possible", "Confirm partners before presenting an experience as available"] },
        { heading: "How hockey can meet a child where they are", paragraphs: ["A hockey-related wish does not have to depend on being in an arena. Depending on confirmed opportunities, the theme could be adapted around the child’s abilities and care setting. The important point is a personal, safe and positive experience—not the size of the event.", "The Silver Guardian is developing community support and hockey relationships for its wider 32 Wishes goal. This page does not accept referrals or promise a Montreal wish at this stage."] },
      ], relatedHeading: "More Montreal information", relatedLinks: enBaseLinks.filter((link) => !link.href.endsWith("hospital-wishes/")), faqHeading: "Hospital wishes FAQ",
      faqs: [
        { question: "Can I refer a child for a Montreal hospital wish now?", answer: "This page does not announce an active referral process. Families should rely on confirmed eligibility and application information published by the organization." },
        { question: "Are hospital wishes part of medical treatment?", answer: "No. A wish is a supportive experience and does not replace medical, psychosocial or financial services provided by qualified professionals." },
        { question: "Could a wish be adapted for a child who cannot leave the hospital?", answer: "A responsible program should consider health, mobility and care-setting limitations. The actual format would depend on permissions, safety guidance and confirmed partners." },
        { question: "Does The Silver Guardian work for a specific Montreal hospital?", answer: "No Montreal hospital affiliation is stated on this page. The Silver Guardian is an independent community initiative building support for its own pediatric care and wish concepts." },
      ], closingHeading: "Keep the child at the centre of the wish", closingText: "Explore the wider wish initiative to understand its goals, then follow confirmed progress as community and hockey relationships develop.", ctaLabel: "Learn about the 32 Wishes goal", ctaHref: "/32-wishes/",
    },
    "fr-CA": {
      title: "Souhaits à l’hôpital pour enfants à Montréal", description: "Découvrez comment des souhaits à l’hôpital peuvent offrir de l’espoir aux enfants de Montréal atteints de cancer ou de maladie cardiaque.", keywords: ["souhaits hôpital Montréal", "souhaits enfants hospitalisés Montréal", "souhait patient pédiatrique Montréal"], eyebrow: "Souhaits à l’hôpital à Montréal", heading: "Des souhaits porteurs d’espoir pour les enfants hospitalisés à Montréal", introduction: "Lorsque le quotidien d’un enfant s’organise autour des soins hospitaliers, un souhait personnel peut devenir un moment positif à anticiper. L’objectif de souhaits liés au hockey de The Silver Guardian vise les enfants atteints de cancer et de maladies cardiaques pédiatriques dans des communautés nord-américaines, notamment des villes à forte identité hockey comme Montréal.", imageLabel: "Espace réservé : souhait adapté à un enfant hospitalisé", imageAlt: "Espace réservé pour une expérience de souhait adaptée aux soins hospitaliers",
      sections: [
        { heading: "Quand une famille peut envisager un souhait", paragraphs: ["Une famille peut explorer cette possibilité lorsque les traitements se prolongent, que les activités habituelles sont interrompues ou que l’enfant a besoin d’un objectif encourageant au-delà de son diagnostic. Un souhait bien pensé respecte les réalités des soins tout en reconnaissant l’enfant dans son ensemble.", "Un souhait n’est ni un service clinique, ni une aide financière, ni un remplacement des traitements. L’admissibilité, le moment et la portée dépendraient d’un programme confirmé et de la situation de chaque enfant."] },
        { heading: "Une planification centrée sur l’enfant", paragraphs: ["Les expériences liées à l’hôpital demandent de la prudence, de la souplesse et des autorisations claires. L’énergie, la mobilité, les précautions contre les infections, la vie privée et l’horaire familial peuvent tous déterminer ce qui est réaliste."], bullets: ["Commencer par les intérêts de l’enfant plutôt que par une formule standard", "Respecter les indications de la famille et de l’équipe de soins", "Prévoir une option accessible si un déplacement est impossible", "Confirmer les partenaires avant de présenter une expérience comme disponible"] },
        { heading: "Amener le hockey là où se trouve l’enfant", paragraphs: ["Un souhait lié au hockey ne doit pas nécessairement se dérouler dans un aréna. Selon les possibilités confirmées, le thème pourrait s’adapter aux capacités de l’enfant et à son milieu de soins. Ce qui compte est une expérience personnelle, sécuritaire et positive, et non l’ampleur de l’événement.", "The Silver Guardian développe l’appui communautaire et les relations dans le hockey pour son objectif élargi de 32 souhaits. Cette page n’accepte pas de demandes et ne promet pas de souhait à Montréal pour le moment."] },
      ], relatedHeading: "Autres renseignements pour Montréal", relatedLinks: frBaseLinks.filter((link) => !link.href.endsWith("hospital-wishes/")), faqHeading: "FAQ sur les souhaits à l’hôpital",
      faqs: [
        { question: "Puis-je proposer maintenant un enfant pour un souhait à Montréal?", answer: "Cette page n’annonce aucun processus de demande actif. Les familles devraient se fier aux renseignements officiels sur l’admissibilité et les demandes publiés par l’organisme." },
        { question: "Les souhaits à l’hôpital font-ils partie du traitement médical?", answer: "Non. Un souhait est une expérience de soutien et ne remplace pas les services médicaux, psychosociaux ou financiers offerts par des professionnels qualifiés." },
        { question: "Un souhait peut-il être adapté à un enfant qui ne peut quitter l’hôpital?", answer: "Un programme responsable devrait tenir compte de la santé, de la mobilité et des contraintes du milieu de soins. Le format dépendrait des autorisations, des consignes de sécurité et des partenaires confirmés." },
        { question: "The Silver Guardian travaille-t-il pour un hôpital montréalais précis?", answer: "Aucune affiliation avec un hôpital montréalais n’est indiquée ici. The Silver Guardian est une initiative communautaire indépendante qui mobilise un appui pour ses propres concepts de soins et de souhaits." },
      ], closingHeading: "Placer l’enfant au cœur du souhait", closingText: "Découvrez l’initiative globale pour comprendre ses objectifs, puis suivez les progrès confirmés à mesure que les relations communautaires et sportives se développent.", ctaLabel: "Découvrir l’objectif des 32 souhaits", ctaHref: "/32-wishes/",
    },
  },
  "childrens-hospital": {
    en: {
      title: "Children’s Hospital Support in Montreal", description: "Explore The Silver Guardian’s vision for child-friendly pediatric care support connected to Montreal’s hockey community.", keywords: ["children's hospital Montreal", "pediatric care facility Montreal", "children's hospital support Montreal"], eyebrow: "Children’s hospital support in Montreal", heading: "A child-friendly pediatric care vision for Montreal", introduction: "Montreal is a regional centre for specialized pediatric care, and families may travel across the island, Greater Montreal and other parts of Quebec for a child’s appointments. The Silver Guardian’s vision is to build community support for a separate, kid-friendly pediatric care facility concept inspired by ice hockey.", imageLabel: "Placeholder: pediatric care space with hockey details", imageAlt: "Placeholder for a welcoming pediatric care space inspired by hockey",
      sections: [
        { heading: "What The Silver Guardian is proposing", paragraphs: ["The current concept is an innovative pediatric care environment designed to inspire hope and healing for children facing life-threatening conditions, primarily cancer and heart disease. Its hockey theme is intended to make the setting feel engaging and familiar rather than institutional.", "This is a developing concept, not an operating children’s hospital. The website does not publish a Montreal site, construction schedule, clinical team or opening date."] },
        { heading: "Why the care environment matters", paragraphs: ["Children and caregivers can spend significant time in care settings. Clear wayfinding, welcoming spaces, age-appropriate activity and a sense of identity can influence how that time feels, even though the environment never replaces high-quality clinical care."], bullets: ["Design around the child’s experience and comfort", "Use hockey as an encouraging theme rather than a barrier to access", "Make room for family and community connection", "Develop the concept alongside qualified clinical, accessibility and operational expertise"] },
        { heading: "A community-supported path forward", paragraphs: ["The Silver Guardian brings business owners and community advocates together to gather support. Its Score a Goal campaign and planned seasonal events are intended to help fund the construction and ongoing support of the care facility concept.", "For Montreal, credible progress would require transparent planning, appropriate health-sector leadership, accessibility, bilingual communication and durable local partnerships. Those details should be confirmed before any facility claims are made."] },
      ], relatedHeading: "Explore connected Montreal initiatives", relatedLinks: enBaseLinks.filter((link) => !link.href.endsWith("childrens-hospital/")), faqHeading: "Children’s hospital support FAQ",
      faqs: [
        { question: "Is The Silver Guardian building a children’s hospital in Montreal now?", answer: "No active Montreal construction project is announced on this page. The organization is gathering support for a pediatric care facility concept." },
        { question: "Would this replace existing Montreal pediatric hospitals?", answer: "No such claim is made. The concept is described as a community-supported pediatric care experience, and any future role would require qualified planning and confirmed partnerships." },
        { question: "Would care be available in French and English?", answer: "No operating details are confirmed. In Montreal, bilingual communication would be an important planning consideration for families, staff and community partners." },
        { question: "How is the proposed facility connected to hockey wishes?", answer: "Both are parts of The Silver Guardian’s mission: one focuses on a hockey-themed pediatric care environment, while 32 Wishes in 32 Cities focuses on positive hockey-related experiences for children." },
      ], closingHeading: "Support a carefully built pediatric care vision", closingText: "Review the fundraising approach and the organization’s current goals, then decide how you can help build informed, sustainable community support in Montreal.", ctaLabel: "See the fundraising approach", ctaHref: "/fundraising/",
    },
    "fr-CA": {
      title: "Soutien aux hôpitaux pour enfants à Montréal", description: "Découvrez la vision de The Silver Guardian pour des soins pédiatriques accueillants liés à la communauté montréalaise du hockey.", keywords: ["hôpital pour enfants Montréal", "établissement soins pédiatriques Montréal", "soutien hôpital enfants Montréal"], eyebrow: "Soutien aux hôpitaux pour enfants à Montréal", heading: "Une vision de soins pédiatriques accueillants pour Montréal", introduction: "Montréal est un centre régional de soins pédiatriques spécialisés, et les familles peuvent traverser l’île, le Grand Montréal ou d’autres régions du Québec pour les rendez-vous d’un enfant. The Silver Guardian souhaite mobiliser un appui communautaire pour un concept distinct d’établissement de soins pédiatriques adapté aux enfants et inspiré du hockey sur glace.", imageLabel: "Espace réservé : milieu de soins pédiatriques avec détails de hockey", imageAlt: "Espace réservé pour un milieu de soins pédiatriques accueillant inspiré du hockey",
      sections: [
        { heading: "Ce que propose The Silver Guardian", paragraphs: ["Le concept actuel est un environnement novateur de soins pédiatriques conçu pour inspirer l’espoir et la guérison chez les enfants atteints de maladies potentiellement mortelles, principalement le cancer et les maladies cardiaques. Le thème du hockey vise à rendre le milieu attrayant et familier plutôt qu’institutionnel.", "Il s’agit d’un concept en développement, et non d’un hôpital pour enfants en activité. Le site Web ne présente aucun emplacement montréalais, calendrier de construction, équipe clinique ou date d’ouverture."] },
        { heading: "Pourquoi le milieu de soins compte", paragraphs: ["Les enfants et leurs proches peuvent passer beaucoup de temps dans les milieux de soins. Une orientation claire, des espaces accueillants, des activités adaptées à l’âge et une identité propre peuvent influencer cette expérience, même si l’environnement ne remplace jamais des soins cliniques de qualité."], bullets: ["Concevoir autour de l’expérience et du confort de l’enfant", "Utiliser le hockey comme thème encourageant sans créer d’obstacle à l’accès", "Faire une place aux liens familiaux et communautaires", "Développer le concept avec une expertise clinique, opérationnelle et en accessibilité"] },
        { heading: "Une voie soutenue par la communauté", paragraphs: ["The Silver Guardian réunit des propriétaires d’entreprise et des défenseurs de la communauté pour mobiliser l’appui. Sa campagne Marquez un but et ses activités saisonnières prévues visent à financer la construction et le soutien continu du concept d’établissement de soins.", "À Montréal, des progrès crédibles exigeraient une planification transparente, un leadership approprié en santé, l’accessibilité, des communications bilingues et des partenariats locaux durables. Ces éléments devraient être confirmés avant toute affirmation sur un établissement."] },
      ], relatedHeading: "Découvrir les initiatives montréalaises connexes", relatedLinks: frBaseLinks.filter((link) => !link.href.endsWith("childrens-hospital/")), faqHeading: "FAQ sur le soutien aux hôpitaux pour enfants",
      faqs: [
        { question: "The Silver Guardian construit-il actuellement un hôpital pour enfants à Montréal?", answer: "Aucun projet de construction actif à Montréal n’est annoncé ici. L’organisme mobilise un appui pour un concept d’établissement de soins pédiatriques." },
        { question: "Ce projet remplacerait-il les hôpitaux pédiatriques actuels de Montréal?", answer: "Aucune affirmation de ce genre n’est faite. Le concept est présenté comme une expérience de soins pédiatriques soutenue par la communauté; tout rôle futur nécessiterait une planification qualifiée et des partenariats confirmés." },
        { question: "Les soins seraient-ils offerts en français et en anglais?", answer: "Aucun détail opérationnel n’est confirmé. À Montréal, les communications bilingues représenteraient un élément important de la planification pour les familles, le personnel et les partenaires." },
        { question: "Quel est le lien entre l’établissement proposé et les souhaits de hockey?", answer: "Les deux font partie de la mission de The Silver Guardian : l’un vise un milieu de soins sur le thème du hockey, tandis que 32 souhaits dans 32 villes vise des expériences positives liées au hockey." },
      ], closingHeading: "Appuyer une vision de soins bâtie avec rigueur", closingText: "Découvrez l’approche de financement et les objectifs actuels de l’organisme, puis voyez comment contribuer à un appui communautaire informé et durable à Montréal.", ctaLabel: "Voir l’approche de financement", ctaHref: "/fundraising/",
    },
  },
};

export function getMontrealTopicContent(slug: string, locale: Locale) {
  if (!montrealTopicSlugs.includes(slug as MontrealTopicSlug)) return undefined;
  const content = topicContent[slug as MontrealTopicSlug][locale];
  const isFrench = locale === "fr-CA";
  return {
    ...content,
    supportingImageSet:
      slug === "hockey-themed-wishes"
        ? ("hockey-wishes" as const)
        : slug === "pediatric-cancer"
          ? ("pediatric-care" as const)
          : slug === "childrens-hospital"
            ? ("childrens-hospital" as const)
            : slug === "hospital-wishes"
              ? ("hospital-wishes" as const)
              : undefined,
    sections: [...content.sections, ...montrealExpansions[slug][locale]],
    supportingImages: [
      {
        label: isFrench ? "Espace réservé : soutien communautaire à Montréal" : "Placeholder: Montreal community support",
        alt: isFrench ? `Espace réservé illustrant le soutien communautaire pour ${content.eyebrow.toLowerCase()}` : `Placeholder illustrating community support for ${content.eyebrow.toLowerCase()}`,
      },
      {
        label: isFrench ? "Espace réservé : expérience pédiatrique adaptée" : "Placeholder: child-friendly pediatric experience",
        alt: isFrench ? `Espace réservé illustrant une expérience adaptée aux enfants pour ${content.eyebrow.toLowerCase()}` : `Placeholder illustrating a child-friendly experience for ${content.eyebrow.toLowerCase()}`,
      },
    ],
  };
}

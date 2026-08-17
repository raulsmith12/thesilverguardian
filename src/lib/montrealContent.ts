import type { Locale } from "@/lib/i18n";
import type { StaticImageData } from "next/image";
import { montrealExpansions } from "@/lib/montrealExpansions";

export const montrealTopicSlugs = [
  "pediatric-cancer",
  "hockey-themed-wishes",
  "hospital-wishes",
  "movement-therapy",
] as const;

export type MontrealTopicSlug = (typeof montrealTopicSlugs)[number];

type Faq = { question: string; answer: string };
type Section = { heading: string; paragraphs: string[]; bullets?: string[]; links?: RelatedLink[] };
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
  heroImage?: "raleigh-durham" | "placeholder";
  heroAsset?: { src: StaticImageData; alt: string };
  supportingImages?: { label: string; alt: string }[];
  supportingImageAssets?: { src: StaticImageData; alt: string }[];
  supportingImageSet?: "hockey-wishes" | "pediatric-care" | "hospital-wishes" | "movement-therapy";
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
  { href: "/montreal/movement-therapy/", label: "movement therapy in Montreal", description: "Explore a community movement concept built around accessible artistic and competitive activity." },
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
  { href: "/montreal/movement-therapy/", label: "thérapie par le mouvement à Montréal", description: "Découvrez un concept communautaire fondé sur des activités artistiques et compétitives accessibles." },
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
    keywords: ["Montreal pediatric care support", "pediatric cancer Montreal", "hockey wishes Montreal", "movement therapy Montreal"],
    eyebrow: "Montreal, Quebec",
    heading: "Pediatric care and hockey-inspired hope in Montreal",
    introduction: "Montreal families facing pediatric cancer or heart disease often balance treatment, travel, school and everyday family life at the same time. The Silver Guardian brings local supporters around independent community initiatives involving movement, fundraising and meaningful hockey-related wishes for children across North America.",
    imageLabel: "Placeholder: Montreal community and hockey image",
    imageAlt: "Placeholder for a Montreal community and hockey photograph",
    sections: [
      { heading: "A mission that fits Montreal", paragraphs: ["Hockey is part of Montreal’s shared language, across neighbourhood rinks, school teams and generations of fans. That connection can help independent community activities feel familiar and encouraging to children during difficult care journeys.", "The Silver Guardian is building community support for movement, fundraising and wish concepts. These are independent initiatives, not hospital programs or clinical services."], bullets: ["Accessible movement opportunities with artistic and competitive elements", "Community support for families affected primarily by pediatric cancer and heart disease", "A wider goal of granting 32 hockey-related wishes in 32 North American cities each year"] },
      { heading: "Why Montreal families and supporters may get involved", paragraphs: ["A serious diagnosis can make childhood feel organized around appointments and uncertainty. Community-backed experiences can give a child something personal to anticipate while helping local businesses, hockey groups and residents direct their energy toward a defined mission.", "Support may take the form of participating in fundraising, sharing the initiative or helping build the relationships needed for future wishes. Medical decisions and referrals always remain with a child’s family and qualified care team."] },
      { heading: "How The Silver Guardian approaches the work", paragraphs: ["The organization connects business owners and community advocates around practical, visible initiatives. Seasonal events and the Score a Goal campaign support its independent community mission, while 32 Wishes in 32 Cities focuses on hockey-related moments and the movement concept explores accessible activity.", "The approach is community-first and incremental: explain each goal clearly, build support, develop appropriate relationships and share progress as plans take shape."] },
    ],
    relatedHeading: "Explore the Montreal initiative",
    relatedLinks: [...enBaseLinks, enLavalLink, enLongueuilLink, enBrossardLink, enTerrebonneLink, enPointeClaireLink],
    faqHeading: "Frequently asked questions about Montreal",
    faqs: [
      { question: "Is The Silver Guardian affiliated with a Montreal hospital?", answer: "No. The Silver Guardian does not own, operate, manage, direct or represent any hospital or healthcare provider. Its initiatives are independent community concepts." },
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
    keywords: ["soutien soins pédiatriques Montréal", "cancer pédiatrique Montréal", "souhaits hockey Montréal", "thérapie par le mouvement Montréal"],
    eyebrow: "Montréal, Québec",
    heading: "Des soins pédiatriques et de l’espoir inspiré du hockey à Montréal",
    introduction: "À Montréal, les familles touchées par le cancer ou une maladie cardiaque pédiatrique doivent souvent concilier les traitements, les déplacements, l’école et la vie familiale. The Silver Guardian rassemble les gens d’ici autour d’initiatives communautaires indépendantes liées au mouvement, au financement et à des souhaits de hockey pour des enfants en Amérique du Nord.",
    imageLabel: "Espace réservé : image de Montréal, de la communauté et du hockey",
    imageAlt: "Espace réservé pour une photo de la communauté montréalaise et du hockey",
    sections: [
      { heading: "Une mission qui rejoint Montréal", paragraphs: ["Le hockey fait partie du langage commun de Montréal, des patinoires de quartier aux équipes scolaires, en passant par plusieurs générations de partisans. Ce lien peut rendre des activités communautaires indépendantes familières et encourageantes pendant un parcours difficile.", "The Silver Guardian mobilise l’appui envers des concepts de mouvement, de financement et de souhaits. Il ne s’agit ni de programmes hospitaliers ni de services cliniques."], bullets: ["Des possibilités de mouvement accessibles aux dimensions artistiques et compétitives", "Un appui communautaire aux familles principalement touchées par le cancer et les maladies cardiaques pédiatriques", "Un objectif élargi : réaliser chaque année 32 souhaits liés au hockey dans 32 villes nord-américaines"] },
      { heading: "Pourquoi les familles et les gens de Montréal peuvent s’impliquer", paragraphs: ["Un diagnostic grave peut faire en sorte que l’enfance s’organise autour des rendez-vous et de l’incertitude. Des expériences soutenues par la communauté peuvent offrir à l’enfant un moment personnel à anticiper et permettre aux entreprises, aux groupes de hockey et aux résidents d’appuyer une mission précise.", "L’appui peut prendre la forme d’une participation au financement, d’un partage de l’initiative ou de la création de liens nécessaires à de futurs souhaits. Les décisions médicales et les recommandations relèvent toujours de la famille et de l’équipe de soins qualifiée."] },
      { heading: "L’approche de The Silver Guardian", paragraphs: ["L’organisme réunit des propriétaires d’entreprise et des défenseurs de la communauté autour d’initiatives concrètes et visibles. Les activités saisonnières et Marquez un but soutiennent sa mission communautaire indépendante, 32 souhaits met l’accent sur des moments liés au hockey et le concept de mouvement explore l’activité accessible.", "L’approche est communautaire et progressive : présenter clairement chaque objectif, mobiliser l’appui, développer des relations appropriées et communiquer les progrès à mesure que les plans se précisent."] },
    ],
    relatedHeading: "Découvrir l’initiative montréalaise",
    relatedLinks: [...frBaseLinks, frLavalLink, frLongueuilLink, frBrossardLink, frTerrebonneLink, frPointeClaireLink],
    faqHeading: "Questions fréquentes sur Montréal",
    faqs: [
      { question: "The Silver Guardian est-il affilié à un hôpital de Montréal?", answer: "Non. The Silver Guardian ne possède, n’exploite, ne gère, ne dirige et ne représente aucun hôpital ni fournisseur de soins. Ses initiatives sont des concepts communautaires indépendants." },
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
      introduction: "For a Montreal family, pediatric cancer can mean long treatment schedules, disrupted routines and emotional strain that reaches well beyond the hospital room. The Silver Guardian’s independent community mission is to encourage hope through fundraising, movement ideas and hockey-related wishes without directing or providing care.",
      imageLabel: "Placeholder: child-friendly hockey environment", imageAlt: "Placeholder for a child-friendly hockey-themed care environment",
      sections: [
        { heading: "Why support beyond treatment matters", paragraphs: ["Clinical care is only one part of a family’s experience. Children may miss school, friendships and ordinary milestones, while caregivers coordinate work, transportation and time with siblings. A positive goal or familiar theme can create a welcome point of focus.", "The Silver Guardian does not provide medical advice or cancer treatment. Its role is to rally community support around environments and experiences intended to complement, never replace, care from qualified pediatric professionals."] },
        { heading: "A hockey connection rooted in Montreal", paragraphs: ["In Montreal, hockey can connect a child to a neighbourhood rink, a favourite player or a family ritual during winter. Independent community experiences can use that recognizable setting to create an encouraging point of focus outside clinical care."], bullets: ["A kid-friendly ice hockey theme designed to encourage hope", "Community fundraising through seasonal events and Score a Goal", "Hockey-related wishes through the 32 Wishes in 32 Cities goal"] },
        { heading: "How community support moves the idea forward", paragraphs: ["The process begins with awareness and sustained local participation. Residents, businesses and hockey communities can learn about the mission, support fundraising activity and help develop connections for future wishes and accessible movement opportunities.", "Plans and relationships take time. The Silver Guardian asks supporters to follow verified progress as its independent community initiatives take shape. It does not control hospital services, care decisions or referrals."] },
      ], relatedHeading: "Related Montreal resources", relatedLinks: enBaseLinks.filter((link) => !link.href.endsWith("pediatric-cancer/")), faqHeading: "Pediatric cancer support FAQ",
      faqs: [
        { question: "Does The Silver Guardian provide pediatric cancer treatment in Montreal?", answer: "No. It is an independent community initiative and does not offer diagnosis, treatment, medical advice or hospital services." },
        { question: "Is this support only for children who play hockey?", answer: "No. Hockey is the theme and a source of encouraging experiences; a child does not need to be a hockey player to connect with the mission." },
        { question: "What conditions are central to the mission?", answer: "The current mission primarily identifies pediatric cancer and heart disease among the life-threatening conditions it hopes to address." },
        { question: "How can Montreal’s hockey community help?", answer: "Teams, businesses and fans can build awareness, take part in fundraising and help form the community relationships needed for future hockey-related wishes." },
      ], closingHeading: "Turn local concern into visible support", closingText: "Learn how Score a Goal supports The Silver Guardian’s independent community mission and decide whether it aligns with the way you want to support Montreal families.", ctaLabel: "Explore Score a Goal", ctaHref: "/fundraising/",
    },
    "fr-CA": {
      title: "Cancer pédiatrique à Montréal", description: "Découvrez comment la vision montréalaise de The Silver Guardian unit soutien au cancer pédiatrique, hockey et action communautaire.", keywords: ["cancer pédiatrique Montréal", "soutien cancer enfant Montréal", "organisme cancer pédiatrique Montréal"], eyebrow: "Soutien au cancer pédiatrique à Montréal", heading: "Un appui communautaire pour les enfants de Montréal atteints de cancer",
      introduction: "Pour une famille montréalaise, le cancer pédiatrique peut entraîner de longs traitements, bouleverser les habitudes et causer une pression émotionnelle qui dépasse largement la chambre d’hôpital. La mission communautaire indépendante de The Silver Guardian vise à encourager l’espoir par le financement, le mouvement et des souhaits liés au hockey, sans diriger ni fournir de soins.", imageLabel: "Espace réservé : environnement de hockey adapté aux enfants", imageAlt: "Espace réservé pour un environnement de soins sur le thème du hockey",
      sections: [
        { heading: "Pourquoi l’appui au-delà des traitements est important", paragraphs: ["Les soins cliniques ne représentent qu’une partie de l’expérience familiale. Les enfants peuvent manquer l’école, leurs amis et des étapes ordinaires, tandis que les proches concilient le travail, les déplacements et les besoins de la fratrie. Un objectif positif ou un thème familier peut offrir un précieux point de repère.", "The Silver Guardian n’offre ni conseil médical ni traitement du cancer. Son rôle consiste à mobiliser la communauté autour d’environnements et d’expériences qui complètent, sans jamais remplacer, les soins de professionnels pédiatriques qualifiés."] },
        { heading: "Un lien avec le hockey bien ancré à Montréal", paragraphs: ["À Montréal, le hockey peut relier un enfant à la patinoire du quartier, à son joueur préféré ou à un rituel familial de l’hiver. Des expériences communautaires indépendantes peuvent utiliser cet univers reconnaissable pour créer un point d’encouragement à l’extérieur des soins cliniques."], bullets: ["Un thème de hockey sur glace adapté aux enfants et conçu pour encourager l’espoir", "Du financement communautaire au moyen d’activités saisonnières et de Marquez un but", "Des souhaits liés au hockey dans le cadre de l’objectif 32 souhaits dans 32 villes"] },
        { heading: "Comment l’appui communautaire fait avancer l’idée", paragraphs: ["Le processus commence par la sensibilisation et une participation locale soutenue. Les résidents, les entreprises et les communautés de hockey peuvent découvrir la mission, appuyer le financement et contribuer à créer des liens pour de futurs souhaits et des possibilités de mouvement accessible.", "Les plans et les relations demandent du temps. The Silver Guardian invite les gens à suivre les progrès vérifiés de ses initiatives communautaires indépendantes. L’organisme ne contrôle ni les services hospitaliers, ni les décisions de soins, ni les recommandations."] },
      ], relatedHeading: "Ressources connexes à Montréal", relatedLinks: frBaseLinks.filter((link) => !link.href.endsWith("pediatric-cancer/")), faqHeading: "FAQ sur le soutien au cancer pédiatrique",
      faqs: [
        { question: "The Silver Guardian traite-t-il le cancer pédiatrique à Montréal?", answer: "Non. Il s’agit d’une initiative communautaire indépendante qui n’offre ni diagnostic, ni traitement, ni conseil médical, ni service hospitalier." },
        { question: "Le soutien s’adresse-t-il seulement aux enfants qui jouent au hockey?", answer: "Non. Le hockey est le thème et une source d’expériences encourageantes; l’enfant n’a pas besoin d’être joueur pour se reconnaître dans la mission." },
        { question: "Quelles maladies sont au cœur de la mission?", answer: "La mission actuelle nomme principalement le cancer et les maladies cardiaques pédiatriques parmi les affections potentiellement mortelles qu’elle souhaite aborder." },
        { question: "Comment la communauté montréalaise du hockey peut-elle aider?", answer: "Les équipes, les entreprises et les partisans peuvent sensibiliser leur entourage, participer au financement et contribuer aux liens nécessaires à de futurs souhaits liés au hockey." },
      ], closingHeading: "Transformer l’engagement local en appui concret", closingText: "Découvrez comment Marquez un but soutient la mission communautaire indépendante et voyez si l’initiative correspond à votre façon de soutenir les familles de Montréal.", ctaLabel: "Découvrir Marquez un but", ctaHref: "/fundraising/",
    },
  },
  "hockey-themed-wishes": {
    en: {
      title: "Hockey-Themed Wishes in Montreal", description: "Explore hockey-themed wishes for Montreal children through The Silver Guardian’s 32 Wishes in 32 Cities goal.", keywords: ["hockey-themed wishes Montreal", "hockey wishes for children Montreal", "Montreal hockey charity"], eyebrow: "Hockey-themed wishes in Montreal", heading: "Hockey-themed wishes for Montreal children", introduction: "A hockey wish can give a child facing cancer or heart disease a milestone that feels entirely their own. In a city where outdoor rinks, local teams and hockey history are woven into winter life, Montreal offers a meaningful setting for The Silver Guardian’s 32 Wishes in 32 Cities goal.", imageLabel: "Placeholder: Montreal hockey wish experience", imageAlt: "Placeholder for a child enjoying a hockey-themed wish in Montreal",
      sections: [
        { heading: "Why a hockey wish can be meaningful", paragraphs: ["Treatment can narrow a child’s world to appointments and recovery. A wish can reopen it for a day by focusing on a favourite part of ice hockey, a hockey-club tradition or a hockey dream. The value lies in listening to what matters to the child and creating a positive memory around it.", "The Silver Guardian’s stated annual goal is 32 hockey-related wishes for brave children in 32 cities across the United States and Canada, delivered through one event intended to spread hope and joy."] },
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
        { heading: "Pourquoi un souhait de hockey peut compter", paragraphs: ["Les traitements peuvent réduire le quotidien d’un enfant aux rendez-vous et au rétablissement. Un souhait peut élargir son horizon pendant une journée en mettant de l’avant son activité de hockey sur glace préférée, une tradition d’équipe ou un rêve lié au hockey. L’essentiel est d’écouter ce qui lui tient à cœur et de créer un souvenir positif.", "L’objectif annuel déclaré de The Silver Guardian est de réaliser 32 souhaits liés au hockey pour de courageux enfants dans 32 villes des États-Unis et du Canada, dans le cadre d’un événement destiné à répandre l’espoir et la joie."] },
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
      title: "Hospital Wishes for Children in Montreal", description: "Learn how hospital wishes can offer hopeful moments for Montreal children facing cancer or heart disease.", keywords: ["hospital wishes Montreal", "hospital wishes for children Montreal", "pediatric patient wishes Montreal"], eyebrow: "Hospital wishes in Montreal", heading: "Hopeful hospital wishes for Montreal children", introduction: "When a child’s routine revolves around hospital care, a personal wish can create a positive milestone to anticipate. The Silver Guardian’s independent hockey-related wish goal is intended for children facing pediatric cancer and heart disease; it is not a hospital program and does not direct care.", imageLabel: "Placeholder: child receiving a hospital-friendly wish", imageAlt: "Placeholder for a child-friendly wish experience connected to hospital care",
      sections: [
        { heading: "When families may look for a wish experience", paragraphs: ["Families may explore a wish when treatment is prolonged, normal activities have been interrupted or a child needs an encouraging focus outside their diagnosis. A well-considered wish respects the realities of care while recognizing the child as a whole person.", "A wish is not a clinical service, financial benefit or substitute for treatment. Eligibility, timing and scope would depend on a confirmed program and the circumstances of each child."] },
        { heading: "A child-first planning approach", paragraphs: ["Hospital-connected experiences require care, flexibility and clear permission. The child’s energy, mobility, infection precautions, privacy and family schedule can all shape what is realistic."], bullets: ["Begin with the child’s interests rather than a standard package", "Work within guidance from the family and care team", "Plan an accessible alternative if travel or attendance is not possible", "Confirm partners before presenting an experience as available"] },
        { heading: "How hockey can meet a child where they are", paragraphs: ["A hockey-related wish does not have to depend on being in an arena. Depending on confirmed opportunities, the theme could be adapted around the child’s abilities and care setting. The important point is a personal, safe and positive experience—not the size of the event.", "The Silver Guardian is developing community support and hockey relationships for its wider 32 Wishes goal. This page does not accept referrals or promise a Montreal wish at this stage."] },
      ], relatedHeading: "More Montreal information", relatedLinks: enBaseLinks.filter((link) => !link.href.endsWith("hospital-wishes/")), faqHeading: "Hospital wishes FAQ",
      faqs: [
        { question: "Can I refer a child for a Montreal hospital wish now?", answer: "This page does not announce an active referral process. Families should rely on confirmed eligibility and application information published by the organization." },
        { question: "Are hospital wishes part of medical treatment?", answer: "No. A wish is a supportive experience and does not replace medical, psychosocial or financial services provided by qualified professionals." },
        { question: "Could a wish be adapted for a child who cannot leave the hospital?", answer: "A responsible program should consider health, mobility and care-setting limitations. The actual format would depend on permissions, safety guidance and confirmed partners." },
        { question: "Does The Silver Guardian work for a specific Montreal hospital?", answer: "No. The Silver Guardian does not own, operate, manage, direct or represent any hospital or healthcare provider. Its wish concept is independent." },
      ], closingHeading: "Keep the child at the centre of the wish", closingText: "Explore the wider wish initiative to understand its goals, then follow confirmed progress as community and hockey relationships develop.", ctaLabel: "Learn about the 32 Wishes goal", ctaHref: "/32-wishes/",
    },
    "fr-CA": {
      title: "Souhaits hospitaliers à Montréal", description: "Découvrez comment des souhaits à l’hôpital peuvent offrir de l’espoir aux enfants de Montréal atteints de cancer ou de maladie cardiaque.", keywords: ["souhaits hôpital Montréal", "souhaits enfants hospitalisés Montréal", "souhait patient pédiatrique Montréal"], eyebrow: "Souhaits à l’hôpital à Montréal", heading: "Des souhaits porteurs d’espoir pour les enfants hospitalisés à Montréal", introduction: "Lorsque le quotidien d’un enfant s’organise autour des soins hospitaliers, un souhait personnel peut devenir un moment positif à anticiper. L’objectif de souhaits liés au hockey de The Silver Guardian vise les enfants atteints de cancer et de maladies cardiaques pédiatriques dans des communautés nord-américaines, notamment des villes à forte identité hockey comme Montréal.", imageLabel: "Espace réservé : souhait adapté à un enfant hospitalisé", imageAlt: "Espace réservé pour une expérience de souhait adaptée aux soins hospitaliers",
      sections: [
        { heading: "Quand une famille peut envisager un souhait", paragraphs: ["Une famille peut explorer cette possibilité lorsque les traitements se prolongent, que les activités habituelles sont interrompues ou que l’enfant a besoin d’un objectif encourageant au-delà de son diagnostic. Un souhait bien pensé respecte les réalités des soins tout en reconnaissant l’enfant dans son ensemble.", "Un souhait n’est ni un service clinique, ni une aide financière, ni un remplacement des traitements. L’admissibilité, le moment et la portée dépendraient d’un programme confirmé et de la situation de chaque enfant."] },
        { heading: "Une planification centrée sur l’enfant", paragraphs: ["Les expériences liées à l’hôpital demandent de la prudence, de la souplesse et des autorisations claires. L’énergie, la mobilité, les précautions contre les infections, la vie privée et l’horaire familial peuvent tous déterminer ce qui est réaliste."], bullets: ["Commencer par les intérêts de l’enfant plutôt que par une formule standard", "Respecter les indications de la famille et de l’équipe de soins", "Prévoir une option accessible si un déplacement est impossible", "Confirmer les partenaires avant de présenter une expérience comme disponible"] },
        { heading: "Amener le hockey là où se trouve l’enfant", paragraphs: ["Un souhait lié au hockey ne doit pas nécessairement se dérouler dans un aréna. Selon les possibilités confirmées, le thème pourrait s’adapter aux capacités de l’enfant et à son milieu de soins. Ce qui compte est une expérience personnelle, sécuritaire et positive, et non l’ampleur de l’événement.", "The Silver Guardian développe l’appui communautaire et les relations dans le hockey pour son objectif élargi de 32 souhaits. Cette page n’accepte pas de demandes et ne promet pas de souhait à Montréal pour le moment."] },
      ], relatedHeading: "Autres renseignements pour Montréal", relatedLinks: frBaseLinks.filter((link) => !link.href.endsWith("hospital-wishes/")), faqHeading: "FAQ sur les souhaits à l’hôpital",
      faqs: [
        { question: "Puis-je proposer maintenant un enfant pour un souhait à Montréal?", answer: "Cette page n’annonce aucun processus de demande actif. Les familles devraient se fier aux renseignements officiels sur l’admissibilité et les demandes publiés par l’organisme." },
        { question: "Les souhaits à l’hôpital font-ils partie du traitement médical?", answer: "Non. Un souhait est une expérience de soutien et ne remplace pas les services médicaux, psychosociaux ou financiers offerts par des professionnels qualifiés." },
        { question: "Un souhait peut-il être adapté à un enfant qui ne peut quitter l’hôpital?", answer: "Un programme responsable devrait tenir compte de la santé, de la mobilité et des contraintes du milieu de soins. Le format dépendrait des autorisations, des consignes de sécurité et des partenaires confirmés." },
        { question: "The Silver Guardian travaille-t-il pour un hôpital montréalais précis?", answer: "Non. The Silver Guardian ne possède, n’exploite, ne gère, ne dirige et ne représente aucun hôpital ni fournisseur de soins. Son concept de souhaits est indépendant." },
      ], closingHeading: "Placer l’enfant au cœur du souhait", closingText: "Découvrez l’initiative globale pour comprendre ses objectifs, puis suivez les progrès confirmés à mesure que les relations communautaires et liées au hockey sur glace se développent.", ctaLabel: "Découvrir l’objectif des 32 souhaits", ctaHref: "/32-wishes/",
    },
  },
  "movement-therapy": {
    en: {
      title: "Movement Therapy in Montreal", description: "Explore Montreal movement therapy ideas centred on accessible artistic and competitive activity through an independent community initiative.", keywords: ["movement therapy Montreal", "adaptive movement Montreal", "accessible exercise Montreal"], eyebrow: "Movement therapy in Montreal", heading: "Movement therapy and accessible activity in Montreal", introduction: "Movement can support confidence, expression and connection when activities are adapted to the person rather than expecting every participant to move in the same way. The Silver Guardian is exploring an independent community concept for artistic and competitive movement opportunities in Montreal. It does not currently provide clinical therapy, rehabilitation or medical exercise services.", imageLabel: "People participating in an adapted movement activity", imageAlt: "Participants completing an accessible group movement exercise",
      sections: [
        { heading: "What movement therapy means on this page", paragraphs: ["Movement therapy is used here as a broad keyword for structured activity that may combine mobility, rhythm, dance, balance, active play and adapted exercise. The term does not mean that The Silver Guardian offers regulated healthcare or a prescribed treatment. A participant’s medical needs, rehabilitation plan and exercise limits must be determined by the participant, family and qualified professionals.", "The community concept focuses on motivation and participation. An activity might use music, creative movement, individual challenges or team formats to make movement feel purposeful. The appropriate format depends on age, ability, energy, sensory preferences, communication and access needs. No single routine or competitive standard is suitable for everyone."] },
        { heading: "Why accessible movement matters in Montreal", paragraphs: ["Montreal offers recreation, arts, ice hockey and community spaces across many neighbourhoods, yet access can still be shaped by cost, transportation, language, physical design and scheduling. A responsible future initiative would need to consider winter travel, métro and bus access, adapted transportation, accessible washrooms, quiet space, caregiver participation and clear communication in French and English.", "Accessibility also means allowing different ways to take part. A person may move while seated, use mobility equipment, need additional rest, avoid loud music or prefer a smaller group. Progress should be defined around individual goals and a positive experience, not comparison with another participant. Community activity can be ambitious while still respecting choice and limits."] },
        { heading: "An independent community role", paragraphs: ["The Silver Guardian does not own, operate, manage, direct or represent any hospital, clinic or healthcare provider. It has no authority over clinical care, hospital programs, referrals or rehabilitation decisions. Any movement activity it may later confirm would be an independent community initiative and would require clearly defined supervision, safety practices, accessibility measures and participant information.", "No Montreal movement therapy centre, location, schedule, instructor team, eligibility process or opening date is announced on this page. Supporters should treat the idea as a developing concept and rely only on published details. Accurate language protects participants and allows potential community organizations to evaluate involvement without assuming a healthcare affiliation."] },
      ], relatedHeading: "Related Montreal resources", relatedLinks: enBaseLinks.filter((link) => !link.href.endsWith("movement-therapy/")), faqHeading: "Movement therapy FAQ",
      faqs: [
        { question: "Does The Silver Guardian currently provide movement therapy in Montreal?", answer: "No. This page describes a developing independent community concept; it does not announce an operating program, centre or clinical service." },
        { question: "Is movement therapy medical treatment?", answer: "Not as described here. Medical treatment, rehabilitation and prescribed exercise belong with qualified professionals. The contemplated initiative focuses on accessible community activity." },
        { question: "Would participants need ice hockey experience?", answer: "No. A responsible movement program should adapt activities to different abilities, energy levels and interests rather than require an ice hockey background." },
        { question: "Is The Silver Guardian connected to a hospital?", answer: "No. It does not own, operate, manage, direct or represent any hospital or healthcare provider." },
      ], closingHeading: "Explore movement as a community opportunity", closingText: "Review the existing movement therapy concept and follow confirmed updates as The Silver Guardian defines what an accessible community initiative could involve.", ctaLabel: "Explore movement therapy", ctaHref: "/movement-therapy-center/",
    },
    "fr-CA": {
      title: "Thérapie par le mouvement à Montréal", description: "Découvrez à Montréal un concept indépendant de thérapie par le mouvement axé sur des activités artistiques et compétitives accessibles.", keywords: ["thérapie par le mouvement Montréal", "mouvement adapté Montréal", "exercice accessible Montréal"], eyebrow: "Thérapie par le mouvement à Montréal", heading: "La thérapie par le mouvement et l’activité accessible à Montréal", introduction: "Le mouvement peut soutenir la confiance, l’expression et les liens lorsque l’activité s’adapte à la personne plutôt que d’exiger une même façon de bouger. The Silver Guardian explore un concept communautaire indépendant d’activités artistiques et compétitives à Montréal. L’organisme n’offre actuellement ni thérapie clinique, ni réadaptation, ni exercice médical.", imageLabel: "Personnes participant à une activité de mouvement adaptée", imageAlt: "Participants réalisant un exercice de groupe accessible",
      sections: [
        { heading: "Le sens de thérapie par le mouvement sur cette page", paragraphs: ["L’expression thérapie par le mouvement sert ici de mot-clé général pour une activité structurée pouvant réunir mobilité, rythme, danse, équilibre, jeu actif et exercice adapté. Elle ne signifie pas que The Silver Guardian offre des soins réglementés ou un traitement prescrit. Les besoins médicaux, le plan de réadaptation et les limites d’exercice relèvent de la personne, de sa famille et de professionnels qualifiés.", "Le concept communautaire porte sur la motivation et la participation. Une activité peut employer la musique, le mouvement créatif, des défis individuels ou des formats d’équipe. Le format approprié dépend de l’âge, des capacités, de l’énergie, des préférences sensorielles, de la communication et de l’accessibilité. Une seule routine ou norme compétitive ne convient pas à tout le monde."] },
        { heading: "Pourquoi le mouvement accessible compte à Montréal", paragraphs: ["Montréal propose des espaces récréatifs, artistiques, liés au hockey sur glace et communautaires dans de nombreux quartiers, mais l’accès dépend parfois du coût, du transport, de la langue, de l’aménagement et des horaires. Une future initiative responsable devrait considérer l’hiver, le métro, les autobus, le transport adapté, les toilettes accessibles, un espace calme, la participation des proches et des communications claires en français et en anglais.", "L’accessibilité signifie aussi permettre différentes façons de participer. Une personne peut bouger en position assise, utiliser une aide à la mobilité, avoir besoin de pauses, éviter la musique forte ou préférer un petit groupe. Le progrès devrait correspondre aux objectifs individuels et à une expérience positive plutôt qu’à une comparaison avec autrui."] },
        { heading: "Un rôle communautaire indépendant", paragraphs: ["The Silver Guardian ne possède, n’exploite, ne gère, ne dirige et ne représente aucun hôpital, clinique ou fournisseur de soins. Il n’exerce aucune autorité sur les soins cliniques, les programmes hospitaliers, les recommandations ou la réadaptation. Toute activité de mouvement éventuellement confirmée constituerait une initiative communautaire indépendante et exigerait un encadrement, des pratiques de sécurité, des mesures d’accessibilité et une information claire.", "Aucun centre, lieu, horaire, groupe d’instructeurs, processus d’admissibilité ou date d’ouverture pour la thérapie par le mouvement à Montréal n’est annoncé. Il faut considérer l’idée comme un concept en développement et se fier uniquement aux détails publiés. Une formulation exacte protège les participants et permet aux organismes d’évaluer leur implication sans supposer une affiliation au réseau de la santé."] },
      ], relatedHeading: "Ressources connexes à Montréal", relatedLinks: frBaseLinks.filter((link) => !link.href.endsWith("movement-therapy/")), faqHeading: "FAQ sur la thérapie par le mouvement",
      faqs: [
        { question: "The Silver Guardian offre-t-il actuellement de la thérapie par le mouvement à Montréal?", answer: "Non. Cette page décrit un concept communautaire indépendant en développement; elle n’annonce aucun programme, centre ou service clinique en activité." },
        { question: "La thérapie par le mouvement est-elle un traitement médical?", answer: "Pas dans le sens décrit ici. Les traitements, la réadaptation et les exercices prescrits relèvent des professionnels qualifiés. Le concept concerne une activité communautaire accessible." },
        { question: "Faudrait-il avoir de l’expérience en hockey sur glace?", answer: "Non. Un programme responsable devrait adapter les activités aux capacités, à l’énergie et aux intérêts plutôt qu’exiger une expérience du hockey sur glace." },
        { question: "The Silver Guardian est-il lié à un hôpital?", answer: "Non. Il ne possède, n’exploite, ne gère, ne dirige et ne représente aucun hôpital ni fournisseur de soins." },
      ], closingHeading: "Explorer le mouvement comme possibilité communautaire", closingText: "Découvrez le concept existant et suivez les mises à jour confirmées pendant que The Silver Guardian précise ce qu’une initiative communautaire accessible pourrait comprendre.", ctaLabel: "Découvrir la thérapie par le mouvement", ctaHref: "/movement-therapy-center/",
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
          : slug === "movement-therapy"
            ? ("movement-therapy" as const)
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

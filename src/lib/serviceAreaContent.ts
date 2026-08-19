import type { Locale } from "@/lib/i18n";
import type { MontrealPageContent } from "@/lib/montrealContent";
import bellevueCommunityHero from "@/img/generated/bellevue-community-hero.webp";
import pediatricEnvironmentHero from "@/img/generated/pediatric-environment-hero.webp";
import seattleCommunityHero from "@/img/generated/seattle-community-hero.webp";
import tacomaCommunityHero from "@/img/generated/tacoma-community-hero.webp";
import hockeyPlayerImage from "@/img/gerhard-crous-doivHPaG-Vw-unsplash.jpg";
import montrealSkylineImage from "@/img/marc-olivier-jodoin-BG9oZ15a4Xk-unsplash.jpg";

export const serviceAreasLandingContent: Record<Locale, MontrealPageContent> = {
  en: {
    title: "Service Areas",
    description: "Browse The Silver Guardian’s U.S. and Canadian community resource directories and learn what a published service area represents.",
    keywords: ["The Silver Guardian service areas", "United States service areas", "Canada service areas", "community support resources"],
    eyebrow: "Service-area directory",
    heading: "Explore The Silver Guardian’s service areas",
    introduction: "This directory organizes The Silver Guardian’s published community resources by country. Each listing offers local context for developing pediatric-support, movement and hockey-wish concepts. A listed area is an informational resource—not an announcement of an operating program, facility, healthcare partnership or available benefit.",
    imageLabel: "North American service-area communities",
    imageAlt: "United States and Canadian community resource directories",
    heroAsset: { src: seattleCommunityHero, alt: "Community members overlooking Seattle, one of The Silver Guardian’s published United States service areas" },
    supportingImageAssets: [
      { src: tacomaCommunityHero, alt: "Community members walking along Tacoma’s accessible waterfront" },
      { src: montrealSkylineImage, alt: "Montreal skyline across the St. Lawrence River representing Canadian community resources" },
    ],
    sections: [
      {
        heading: "Choose a country directory",
        paragraphs: ["The United States directory currently groups published resources in Washington, beginning with Seattle and nearby communities. The Canada directory explains the organization’s Canadian coverage and links readers to relevant mission resources. Both directories are intended to grow only when useful local information and accurate boundaries are ready to publish."],
        links: [
          { href: "/service-areas/united-states/", label: "United States service areas", description: "Browse published U.S. city and regional resources." },
          { href: "/service-areas/canada/", label: "Canada service areas", description: "Browse the Canadian service-area directory and related resources." },
        ],
      },
      {
        heading: "What a service-area listing means",
        paragraphs: ["A city or region appears in this directory because The Silver Guardian has published an informational page about that local context. The listing does not establish a program boundary, confirm a future location, open registration or imply that a hospital, healthcare provider or public agency participates in an initiative.", "Readers should use each local page to understand the concept being discussed, the needs that may shape community planning and the limits of what is currently available. Any future activity, partnership, event or location would require separate confirmation."],
      },
    ],
    relatedHeading: "Country directories",
    relatedLinks: [
      { href: "/service-areas/united-states/", label: "United States", description: "Explore published resources organized under the U.S. directory." },
      { href: "/service-areas/canada/", label: "Canada", description: "Explore Canadian community information and related resources." },
    ],
    faqHeading: "Service-area directory FAQ",
    faqs: [
      { question: "Does a listed service area have an active program?", answer: "Not necessarily. A listing means that an informational local resource is published. Any active program, event, partner or registration process would need a separate confirmed announcement." },
      { question: "Can a family request medical care here?", answer: "No. The Silver Guardian does not provide diagnosis, treatment, referrals or hospital services through this directory." },
      { question: "Will additional cities be listed?", answer: "The directory can expand as responsible, locally useful resources are prepared and the organization can accurately explain what is proposed and what remains unconfirmed." },
    ],
    closingHeading: "Start with a country directory",
    closingText: "Choose the United States or Canada to review the community resources currently organized under that country.",
    ctaLabel: "Explore United States service areas",
    ctaHref: "/service-areas/united-states/",
  },
  "fr-CA": {
    title: "Zones desservies",
    description: "Parcourez les répertoires américains et canadiens de The Silver Guardian et découvrez ce qu’une zone publiée représente.",
    keywords: ["zones desservies The Silver Guardian", "zones desservies États-Unis", "zones desservies Canada", "ressources communautaires"],
    eyebrow: "Répertoire des zones desservies",
    heading: "Explorer les zones desservies de The Silver Guardian",
    introduction: "Ce répertoire organise par pays les ressources communautaires publiées par The Silver Guardian. Chaque inscription présente le contexte local de concepts en développement liés au soutien pédiatrique, au mouvement et aux souhaits de hockey. Une zone inscrite constitue une ressource d’information; elle n’annonce aucun programme actif, établissement, partenariat de soins ou avantage disponible.",
    imageLabel: "Communautés des zones nord-américaines",
    imageAlt: "Répertoires communautaires des États-Unis et du Canada",
    heroAsset: { src: seattleCommunityHero, alt: "Membres de la communauté devant Seattle, une zone américaine publiée par The Silver Guardian" },
    supportingImageAssets: [
      { src: tacomaCommunityHero, alt: "Membres de la communauté sur le front de mer accessible de Tacoma" },
      { src: montrealSkylineImage, alt: "Panorama de Montréal depuis le fleuve Saint-Laurent représentant les ressources canadiennes" },
    ],
    sections: [
      {
        heading: "Choisir un répertoire national",
        paragraphs: ["Le répertoire des États-Unis regroupe actuellement les ressources publiées dans l’État de Washington, à commencer par Seattle et les communautés voisines. Le répertoire du Canada explique la couverture canadienne de l’organisme et dirige les lecteurs vers les ressources pertinentes de sa mission. Les deux répertoires ne devraient évoluer que lorsque de l’information locale utile et des limites exactes sont prêtes à être publiées."],
        links: [
          { href: "/service-areas/united-states/", label: "Zones desservies aux États-Unis", description: "Parcourez les ressources municipales et régionales américaines publiées." },
          { href: "/service-areas/canada/", label: "Zones desservies au Canada", description: "Parcourez le répertoire canadien et les ressources connexes." },
        ],
      },
      {
        heading: "Ce que signifie une zone inscrite",
        paragraphs: ["Une ville ou une région figure dans le répertoire parce que The Silver Guardian a publié une page d’information sur son contexte local. L’inscription ne définit aucun territoire de programme, ne confirme aucun futur emplacement, n’ouvre aucune inscription et ne laisse entendre la participation d’un hôpital, d’un fournisseur de soins ou d’un organisme public.", "Chaque page locale permet de comprendre le concept présenté, les besoins qui pourraient orienter la planification communautaire et les limites de ce qui est actuellement disponible. Toute activité, tout partenariat, événement ou emplacement futur nécessiterait une confirmation distincte."],
      },
    ],
    relatedHeading: "Répertoires nationaux",
    relatedLinks: [
      { href: "/service-areas/united-states/", label: "États-Unis", description: "Découvrez les ressources publiées dans le répertoire américain." },
      { href: "/service-areas/canada/", label: "Canada", description: "Découvrez l’information communautaire canadienne et les ressources connexes." },
    ],
    faqHeading: "FAQ sur le répertoire des zones",
    faqs: [
      { question: "Une zone inscrite possède-t-elle un programme actif?", answer: "Pas nécessairement. Une inscription signifie qu’une ressource locale d’information est publiée. Tout programme, événement, partenaire ou processus d’inscription actif nécessiterait une annonce confirmée distincte." },
      { question: "Une famille peut-elle demander des soins ici?", answer: "Non. The Silver Guardian ne fournit aucun diagnostic, traitement, recommandation ou service hospitalier par ce répertoire." },
      { question: "D’autres villes seront-elles ajoutées?", answer: "Le répertoire peut évoluer à mesure que des ressources locales responsables sont préparées et que l’organisme peut expliquer exactement ce qui est proposé et ce qui demeure non confirmé." },
    ],
    closingHeading: "Commencer par un répertoire national",
    closingText: "Choisissez les États-Unis ou le Canada pour consulter les ressources communautaires actuellement organisées sous ce pays.",
    ctaLabel: "Explorer les zones américaines",
    ctaHref: "/service-areas/united-states/",
  },
};

export const unitedStatesServiceAreaContent: Record<Locale, MontrealPageContent> = {
  en: {
    title: "United States Service Areas",
    description: "Explore published U.S. service-area resources for The Silver Guardian’s developing pediatric, movement and hockey-wish concepts.",
    keywords: ["The Silver Guardian United States", "pediatric support service areas", "movement therapy service areas", "hockey wishes United States"],
    eyebrow: "United States service areas",
    heading: "Explore The Silver Guardian’s U.S. service areas",
    introduction: "The Silver Guardian publishes local resources so communities can understand its developing pediatric-support, movement and hockey-wish concepts in a relevant local context. A listed service area identifies an informational page and a community in which relationships may be explored; it does not announce an operating program, facility, healthcare partnership or available benefit.",
    imageLabel: "Published United States service-area communities",
    imageAlt: "Published Silver Guardian community resources in the United States",
    heroAsset: { src: seattleCommunityHero, alt: "Community members overlooking the Seattle skyline in Washington" },
    supportingImageAssets: [
      { src: tacomaCommunityHero, alt: "People using an accessible waterfront route in Tacoma, Washington" },
      { src: bellevueCommunityHero, alt: "Multigenerational community group walking through a Bellevue urban park" },
    ],
    sections: [
      { heading: "Washington", paragraphs: ["Seattle is the central published Washington service-area hub, joined by locally focused pages for Tacoma, Renton, Bellevue, Gig Harbor and Everett. Each page discusses transportation, accessibility, family logistics and community relationships while keeping every proposed initiative separate from healthcare providers and public agencies."], links: [
        { href: "/seattle/", label: "Seattle", description: "Open the main Seattle hub and its focused resources." },
        { href: "/tacoma/", label: "Tacoma", description: "Explore the Pierce County and Tacoma Narrows context." },
        { href: "/renton/", label: "Renton", description: "Explore the south King County crossroads context." },
        { href: "/bellevue/", label: "Bellevue", description: "Explore the Eastside and Lake Washington context." },
        { href: "/gig-harbor/", label: "Gig Harbor", description: "Explore the peninsula and bridge-access context." },
        { href: "/everett/", label: "Everett", description: "Explore the Snohomish County and north-corridor context." },
      ], bullets: ["Kid-friendly research hospital environments in Seattle", "Movement Therapy Centers in Seattle"] },
      { heading: "Potential Movement Therapy Center locations", paragraphs: ["Gig Harbor, Washington, and Jupiter, Florida, are identified as potential locations for study, not selected properties or announced centers. Local review should consider visitor patterns, current and past hockey presence, the food scene, common forms of exercise, transportation, accessibility and the organizations that could responsibly operate each element.", "Jupiter does not yet have a dedicated service-area page, venue, operator, program, registration process or opening date. Gig Harbor has an informational page only. Naming either community preserves a planning direction without promising that a center will open."], bullets: ["Gig Harbor, Washington — published informational resource", "Jupiter, Florida — potential location for future local study"] },
      { heading: "How to read a service-area page", paragraphs: ["Each city hub links to focused resources that explain what The Silver Guardian proposes, why the local context matters and which safeguards would be needed before an activity could be announced. These pages do not accept referrals or registrations. They do not establish eligibility, promise a wish, identify a future site or claim a partnership.", "Additional states and cities can be added after locally useful content and responsible boundaries are prepared. Publishing a city name is not the same as launching a service there. Supporters should rely on confirmed details on the relevant page and avoid representing exploratory conversations as approved programs."] },
    ],
    relatedHeading: "Published U.S. city resources",
    relatedLinks: [
      { href: "/seattle/", label: "Seattle, Washington", description: "Explore the Seattle hub and its focused resources." },
      { href: "/tacoma/", label: "Tacoma, Washington", description: "Explore Tacoma’s local service-area resource." },
      { href: "/renton/", label: "Renton, Washington", description: "Explore Renton’s local service-area resource." },
      { href: "/bellevue/", label: "Bellevue, Washington", description: "Explore Bellevue’s local service-area resource." },
      { href: "/gig-harbor/", label: "Gig Harbor, Washington", description: "Explore Gig Harbor’s local service-area resource." },
      { href: "/everett/", label: "Everett, Washington", description: "Explore Everett’s local service-area resource." },
    ],
    faqHeading: "United States service-area FAQ",
    faqs: [
      { question: "Does a listed city have an operating Silver Guardian program?", answer: "Not necessarily. A listing means that a local informational resource is published. Any operating activity, partner, location or registration would need to be announced separately." },
      { question: "Can a family request medical care through a service-area page?", answer: "No. The Silver Guardian does not provide referrals, diagnosis, treatment or hospital services through these pages." },
      { question: "Will more U.S. cities be added?", answer: "The page is designed to grow as responsible, locally useful resources are prepared and the organization confirms what it can accurately communicate." },
    ],
    closingHeading: "Start with the published Seattle resources",
    closingText: "Review the Seattle hub for local context, clear limitations and links to the two focused concepts currently presented for the city.",
    ctaLabel: "Explore Seattle",
    ctaHref: "/seattle/",
  },
  "fr-CA": {
    title: "Zones desservies aux États-Unis",
    description: "Découvrez les ressources américaines de The Silver Guardian sur les concepts pédiatriques, le mouvement et les souhaits de hockey.",
    keywords: ["The Silver Guardian États-Unis", "zones de soutien pédiatrique", "thérapie par le mouvement États-Unis", "souhaits hockey États-Unis"],
    eyebrow: "Zones desservies aux États-Unis",
    heading: "Explorer les zones américaines de The Silver Guardian",
    introduction: "The Silver Guardian publie des ressources locales afin que les communautés comprennent ses concepts en développement liés au soutien pédiatrique, au mouvement et aux souhaits de hockey. Une zone inscrite désigne une page d’information et une communauté où des relations pourraient être explorées; elle n’annonce aucun programme, établissement, partenariat de soins ou avantage disponible.",
    imageLabel: "Communautés américaines publiées",
    imageAlt: "Ressources communautaires américaines publiées par The Silver Guardian",
    heroAsset: { src: seattleCommunityHero, alt: "Membres de la communauté devant le panorama de Seattle, dans l’État de Washington" },
    supportingImageAssets: [
      { src: tacomaCommunityHero, alt: "Personnes utilisant un parcours accessible sur le front de mer de Tacoma" },
      { src: bellevueCommunityHero, alt: "Groupe communautaire multigénérationnel dans un parc urbain de Bellevue" },
    ],
    sections: [
      { heading: "Washington", paragraphs: ["Seattle est le principal carrefour publié dans l’État de Washington, accompagné de pages locales pour Tacoma, Renton, Bellevue, Gig Harbor et Everett. Chaque page aborde le transport, l’accessibilité, la logistique familiale et les relations communautaires tout en séparant les concepts proposés des fournisseurs de soins et organismes publics."], links: [
        { href: "/seattle/", label: "Seattle", description: "Ouvrez le carrefour principal et ses ressources ciblées." },
        { href: "/tacoma/", label: "Tacoma", description: "Découvrez le contexte du comté de Pierce et de Tacoma Narrows." },
        { href: "/renton/", label: "Renton", description: "Découvrez le contexte du carrefour du sud du comté de King." },
        { href: "/bellevue/", label: "Bellevue", description: "Découvrez le contexte de l’Eastside et du lac Washington." },
        { href: "/gig-harbor/", label: "Gig Harbor", description: "Découvrez le contexte de la péninsule et du pont." },
        { href: "/everett/", label: "Everett", description: "Découvrez le contexte du comté de Snohomish et du corridor nord." },
      ], bullets: ["Milieux d’hôpitaux de recherche adaptés aux enfants à Seattle", "Centres de thérapie par le mouvement à Seattle"] },
      { heading: "Emplacements potentiels d’un Centre de thérapie par le mouvement", paragraphs: ["Gig Harbor, dans l’État de Washington, et Jupiter, en Floride, sont identifiés comme des emplacements potentiels à étudier, et non comme des propriétés choisies ou des centres annoncés. L’examen local devrait tenir compte du tourisme, de la présence actuelle et passée du hockey, de la scène culinaire, des exercices courants, du transport, de l’accessibilité et des organismes capables d’exploiter chaque élément.", "Jupiter n’a encore aucune page locale, aucun lieu, exploitant, programme, processus d’inscription ou date d’ouverture. Gig Harbor possède seulement une ressource d’information. Nommer ces communautés n’est pas une promesse d’ouverture."] },
      { heading: "Comment lire une page de zone", paragraphs: ["Chaque carrefour municipal mène à des ressources qui expliquent ce que The Silver Guardian propose, pourquoi le contexte local compte et quelles protections seraient nécessaires avant d’annoncer une activité. Ces pages n’acceptent ni recommandation ni inscription et ne promettent aucun souhait, lieu ou partenariat.", "D’autres États et villes pourront être ajoutés lorsque du contenu local utile et des limites responsables seront préparés. Publier le nom d’une ville ne signifie pas y lancer un service. Il faut se fier aux détails confirmés sur la page pertinente."] },
    ],
    relatedHeading: "Ressources municipales américaines publiées",
    relatedLinks: [
      { href: "/seattle/", label: "Seattle, Washington", description: "Découvrez le carrefour de Seattle et ses ressources ciblées." },
      { href: "/tacoma/", label: "Tacoma, Washington", description: "Découvrez la ressource locale de Tacoma." },
      { href: "/renton/", label: "Renton, Washington", description: "Découvrez la ressource locale de Renton." },
      { href: "/bellevue/", label: "Bellevue, Washington", description: "Découvrez la ressource locale de Bellevue." },
      { href: "/gig-harbor/", label: "Gig Harbor, Washington", description: "Découvrez la ressource locale de Gig Harbor." },
      { href: "/everett/", label: "Everett, Washington", description: "Découvrez la ressource locale d’Everett." },
    ],
    faqHeading: "FAQ sur les zones américaines",
    faqs: [
      { question: "Une ville inscrite possède-t-elle un programme actif?", answer: "Pas nécessairement. L’inscription signifie qu’une ressource locale est publiée. Toute activité, tout partenaire, lieu ou processus d’inscription devrait être annoncé séparément." },
      { question: "Une famille peut-elle demander des soins par cette page?", answer: "Non. The Silver Guardian n’offre aucune recommandation, aucun diagnostic, traitement ou service hospitalier par ces pages." },
      { question: "D’autres villes américaines seront-elles ajoutées?", answer: "La page pourra évoluer à mesure que des ressources locales responsables sont préparées et que l’organisme confirme ce qu’il peut communiquer exactement." },
    ],
    closingHeading: "Commencer par les ressources de Seattle",
    closingText: "Consultez le carrefour de Seattle pour découvrir le contexte local, les limites claires et les deux concepts ciblés présentés pour la ville.",
    ctaLabel: "Explorer Seattle",
    ctaHref: "/seattle/",
  },
};

export const canadaServiceAreaContent: Record<Locale, MontrealPageContent> = {
  en: {
    title: "Canada Service Areas",
    description: "Explore The Silver Guardian’s published Canadian community resources and the boundaries of its developing independent concepts.",
    keywords: ["The Silver Guardian Canada", "Canadian service areas", "pediatric support communities Canada", "hockey wish communities Canada"],
    eyebrow: "Canada service areas",
    heading: "Explore The Silver Guardian’s Canadian service areas",
    introduction: "The Silver Guardian’s Canadian resources provide local context for independent community concepts connected to pediatric support, movement and hockey-related wishes. A city listing identifies published information, not an operating program, clinical service, healthcare affiliation or promise of assistance.",
    imageLabel: "Published Canadian community resources",
    imageAlt: "Published Silver Guardian community resources in Canada",
    heroAsset: { src: montrealSkylineImage, alt: "Montreal skyline across the St. Lawrence River representing Canadian service-area resources" },
    supportingImageAssets: [
      { src: hockeyPlayerImage, alt: "Hockey player taking a shot during an indoor community game" },
      { src: pediatricEnvironmentHero, alt: "Welcoming accessible pediatric family lounge with subtle ice-hockey-inspired details" },
    ],
    sections: [
      { heading: "Quebec communities", paragraphs: ["Published Canadian French resources currently cover Montreal, Laval, Longueuil, Brossard, Terrebonne and Pointe-Claire. Each page addresses local travel, language, accessibility and community relationships without suggesting that a healthcare program or partnership exists."], bullets: ["Montreal", "Laval", "Longueuil", "Brossard", "Terrebonne", "Pointe-Claire"] },
      { heading: "Mississauga as a potential Movement Therapy Center location", paragraphs: ["Mississauga, Ontario, is identified for potential local study, not as a selected property or operating center. A responsible review would examine its visitor destinations, Greater Toronto hockey connections, diverse food scene, popular indoor and outdoor exercise, transportation and accessibility before considering a venue or operator.", "No Mississauga service-area page, partnership, property, class, registration process or opening date is currently announced. The label records a planning possibility only."] },
      { heading: "A directory that grows with verified information", paragraphs: ["The directory can expand when a community resource has substantive local information, accurate limitations and useful links. The Silver Guardian does not define a service area merely by placing a name on a map. Any future activity would need its own confirmed operator, location, safeguards and public details."] },
    ],
    relatedHeading: "Explore the wider Canadian mission",
    relatedLinks: [
      { href: "/32-wishes/", label: "32 Wishes in 32 Cities", description: "Explore the wider North American hockey-wish goal and city signature trackers." },
      { href: "/movement-therapy-center/", label: "Movement Therapy Centers", description: "Read the general framework for a developing accessible movement concept." },
    ],
    faqHeading: "Canada service-area FAQ",
    faqs: [
      { question: "Does The Silver Guardian operate healthcare services in Canada?", answer: "No. The published city pages describe independent community concepts and do not represent hospitals or healthcare providers." },
      { question: "Why are local pages available in Canadian French?", answer: "The local resources are designed to provide equally useful information in Canadian French and English as route coverage is expanded." },
      { question: "Does a city page mean registration is open?", answer: "No. Registration, referrals and applications are not implied by a city page and would require a separate confirmed announcement." },
    ],
    closingHeading: "Understand the concept before assuming availability",
    closingText: "Use the published resources to learn what is proposed, what remains unconfirmed and how community participation may develop responsibly.",
    ctaLabel: "Explore 32 Wishes",
    ctaHref: "/32-wishes/",
  },
  "fr-CA": {
    title: "Zones desservies au Canada",
    description: "Découvrez les ressources canadiennes publiées par The Silver Guardian et les limites de ses concepts communautaires en développement.",
    keywords: ["The Silver Guardian Canada", "zones desservies Canada", "soutien pédiatrique Canada", "communautés souhaits hockey"],
    eyebrow: "Zones desservies au Canada",
    heading: "Explorer les zones canadiennes de The Silver Guardian",
    introduction: "Les ressources canadiennes de The Silver Guardian présentent le contexte local de concepts communautaires indépendants liés au soutien pédiatrique, au mouvement et aux souhaits de hockey. Une ville inscrite désigne de l’information publiée, et non un programme actif, un service clinique, une affiliation ou une promesse d’aide.",
    imageLabel: "Ressources communautaires canadiennes publiées",
    imageAlt: "Ressources communautaires canadiennes publiées par The Silver Guardian",
    heroAsset: { src: montrealSkylineImage, alt: "Panorama de Montréal depuis le fleuve Saint-Laurent représentant les zones canadiennes" },
    supportingImageAssets: [
      { src: hockeyPlayerImage, alt: "Joueur de hockey effectuant un tir pendant une partie communautaire intérieure" },
      { src: pediatricEnvironmentHero, alt: "Salon familial pédiatrique accueillant, accessible et subtilement inspiré du hockey sur glace" },
    ],
    sections: [
      { heading: "Communautés du Québec", paragraphs: ["Les ressources canadiennes françaises publiées couvrent Montréal, Laval, Longueuil, Brossard, Terrebonne et Pointe-Claire. Chaque page aborde les déplacements, la langue, l’accessibilité et les relations communautaires sans laisser croire à un programme ou partenariat de soins."], bullets: ["Montréal", "Laval", "Longueuil", "Brossard", "Terrebonne", "Pointe-Claire"] },
      { heading: "Mississauga comme emplacement potentiel", paragraphs: ["Mississauga, en Ontario, est identifiée pour une étude locale éventuelle, et non comme une propriété choisie ou un centre actif. Un examen responsable porterait sur les destinations touristiques, les liens avec le hockey du Grand Toronto, la diversité culinaire, les exercices intérieurs et extérieurs, le transport et l’accessibilité avant d’envisager un lieu ou un exploitant.", "Aucune page locale, entente, propriété, classe, inscription ou date d’ouverture à Mississauga n’est annoncée. Cette désignation indique seulement une possibilité de planification."] },
      { heading: "Un répertoire qui évolue avec l’information vérifiée", paragraphs: ["Le répertoire peut s’élargir lorsqu’une ressource contient une information locale substantielle, des limites exactes et des liens utiles. The Silver Guardian ne définit pas une zone simplement en ajoutant un nom sur une carte. Toute future activité nécessiterait son propre exploitant, lieu, mesures de protection et détails confirmés."] },
    ],
    relatedHeading: "Explorer la mission canadienne élargie",
    relatedLinks: [
      { href: "/32-wishes/", label: "32 souhaits dans 32 villes", description: "Découvrez l’objectif nord-américain de souhaits de hockey et le suivi des signatures par ville." },
      { href: "/movement-therapy-center/", label: "Centres de thérapie par le mouvement", description: "Consultez le cadre général d’un concept de mouvement accessible en développement." },
    ],
    faqHeading: "FAQ sur les zones canadiennes",
    faqs: [
      { question: "The Silver Guardian exploite-t-il des soins au Canada?", answer: "Non. Les pages municipales décrivent des concepts communautaires indépendants et ne représentent aucun hôpital ou fournisseur de soins." },
      { question: "Pourquoi les pages locales sont-elles offertes en français canadien?", answer: "Les ressources visent à fournir une information également utile en français canadien et en anglais à mesure que la couverture des routes s’élargit." },
      { question: "Une page municipale signifie-t-elle que les inscriptions sont ouvertes?", answer: "Non. Une page municipale n’implique aucune inscription, recommandation ou demande; celles-ci exigeraient une annonce confirmée distincte." },
    ],
    closingHeading: "Comprendre le concept avant de supposer sa disponibilité",
    closingText: "Utilisez les ressources publiées pour comprendre ce qui est proposé, ce qui demeure non confirmé et comment la participation communautaire pourrait évoluer.",
    ctaLabel: "Explorer 32 souhaits",
    ctaHref: "/32-wishes/",
  },
};

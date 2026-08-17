import type { Locale } from "@/lib/i18n";
import { kidFriendlyResearchHospitalContent } from "@/lib/kidFriendlyResearchHospitalContent";
import type { MontrealPageContent } from "@/lib/montrealContent";
import { movementTherapyCenterContent } from "@/lib/movementTherapyCenterContent";
import type { StaticImageData } from "next/image";
import bellevueCommunityHero from "@/img/generated/bellevue-community-hero.webp";
import everettCommunityHero from "@/img/generated/everett-community-hero.webp";
import gigHarborCommunityHero from "@/img/generated/gig-harbor-community-hero.webp";
import movementStudioHero from "@/img/generated/movement-studio-hero.webp";
import pediatricEnvironmentHero from "@/img/generated/pediatric-environment-hero.webp";
import rentonCommunityHero from "@/img/generated/renton-community-hero.webp";
import tacomaCommunityHero from "@/img/generated/tacoma-community-hero.webp";

export const washingtonAreaSlugs = ["tacoma", "renton", "bellevue", "gig-harbor", "everett"] as const;
export type WashingtonAreaSlug = (typeof washingtonAreaSlugs)[number];
export const washingtonAreaTopicSlugs = ["kid-friendly-research-hospitals", "movement-therapy-centers"] as const;
export type WashingtonAreaTopicSlug = (typeof washingtonAreaTopicSlugs)[number];

const areaHeroAssets: Record<WashingtonAreaSlug, StaticImageData> = {
  tacoma: tacomaCommunityHero,
  renton: rentonCommunityHero,
  bellevue: bellevueCommunityHero,
  "gig-harbor": gigHarborCommunityHero,
  everett: everettCommunityHero,
};

type AreaDetail = {
  name: string;
  titleEn: string;
  titleFr: string;
  descriptionEn: string;
  descriptionFr: string;
  introductionEn: string;
  introductionFr: string;
  localSectionsEn: MontrealPageContent["sections"];
  localSectionsFr: MontrealPageContent["sections"];
};

const details: Record<WashingtonAreaSlug, AreaDetail> = {
  tacoma: {
    name: "Tacoma",
    titleEn: "Pediatric Community Support in Tacoma",
    titleFr: "Soutien pédiatrique à Tacoma",
    descriptionEn: "Explore Tacoma resources for careful pediatric-environment, accessible movement and hockey-inspired community concepts.",
    descriptionFr: "Découvrez les ressources de Tacoma sur les milieux pédiatriques, le mouvement accessible et les concepts inspirés du hockey.",
    introductionEn: "Tacoma families facing pediatric cancer or another debilitating condition may coordinate care and daily life across Pierce County while navigating I-5, SR 16, neighborhood streets and the Tacoma Narrows connection. The Silver Guardian’s Tacoma hub presents independent community concepts for child-friendly environments, adaptable movement and hockey-inspired hope without announcing a local program or healthcare affiliation.",
    introductionFr: "À Tacoma, les familles touchées par un cancer pédiatrique ou une autre condition invalidante peuvent concilier les soins et la vie quotidienne dans le comté de Pierce tout en empruntant l’I-5, la SR 16, les rues de quartier et le passage de Tacoma Narrows. Ce carrefour présente des concepts communautaires indépendants sans annoncer de programme local ni d’affiliation médicale.",
    localSectionsEn: [
      { heading: "Tacoma travel and neighborhood context", paragraphs: ["A family’s route may begin in North Tacoma, the Hilltop area, South Tacoma, the Eastside or a community beyond city limits. Trips can involve Pierce Transit, regional connections, I-5 congestion, SR 16 or the Tacoma Narrows Bridge. Hills, construction, weather, parking and transfers may change how manageable a future activity feels, particularly when a child’s energy changes during the day.", "A responsible Tacoma plan would identify one real venue and explain its entrances, accessible routes, transit options, parking, session length and cancellation approach. Calling an activity Pierce County-wide would not make it equally reachable for every household. Flexible formats and clear travel information should be part of early planning, not details added after publicity begins."] },
      { heading: "Build on Tacoma’s community knowledge without claiming a partner", paragraphs: ["Tacoma has established parks, arts, neighborhood, youth, disability and recreation networks. The city’s planning materials emphasize accessible multimodal connections and inclusive public spaces, which provide useful questions for any community concept. They do not establish a relationship with The Silver Guardian, and no public organization is represented as endorsing this page.", "Potential supporters can contribute local knowledge about transportation, family schedules, accessible facilities and culturally useful communication. An introduction remains exploratory until roles, insurance, permissions, safeguards and resources are documented. No Tacoma center, pediatric environment, wish event, instructor team or registration process is announced."] },
    ],
    localSectionsFr: [
      { heading: "Les déplacements et les quartiers de Tacoma", paragraphs: ["Une famille peut venir de North Tacoma, Hilltop, South Tacoma, Eastside ou d’une communauté voisine. Les trajets peuvent comprendre Pierce Transit, des correspondances régionales, l’I-5, la SR 16 ou le pont de Tacoma Narrows. Les collines, les travaux, la météo, le stationnement et les correspondances influencent la faisabilité d’une future activité, surtout lorsque l’énergie d’un enfant change.", "Un plan responsable préciserait un lieu réel, ses entrées, ses parcours accessibles, le transport, le stationnement, la durée et les modalités d’annulation. Présenter une activité comme couvrant tout le comté de Pierce ne la rend pas également accessible. Les formats souples et l’information de déplacement doivent faire partie de la planification initiale."] },
      { heading: "Respecter les connaissances communautaires sans revendiquer de partenaire", paragraphs: ["Tacoma possède des réseaux établis de parcs, d’arts, de quartiers, de jeunesse, de défense des personnes handicapées et de loisirs. Les documents municipaux insistent sur les connexions multimodales accessibles et les espaces inclusifs, ce qui offre des questions utiles. Cela ne crée aucune relation avec The Silver Guardian et aucun organisme public n’appuie cette page.", "Les gens peuvent partager leur connaissance du transport, des horaires familiaux, des installations accessibles et des communications culturellement utiles. Une présentation demeure exploratoire jusqu’à la documentation des rôles, assurances, autorisations et ressources. Aucun centre, milieu pédiatrique, souhait, groupe d’instructeurs ou processus d’inscription à Tacoma n’est annoncé."] },
    ],
  },
  renton: {
    name: "Renton",
    titleEn: "Pediatric Community Support in Renton",
    titleFr: "Soutien pédiatrique à Renton",
    descriptionEn: "Explore Renton resources for child-friendly environments, adaptable movement and responsible ice-hockey-inspired community support.",
    descriptionFr: "Découvrez les ressources de Renton sur les milieux adaptés aux enfants, le mouvement et l’appui inspiré du hockey sur glace.",
    introductionEn: "Renton sits at a south King County crossroads where families may move among neighborhoods, the Cedar River and Lake Washington area, community destinations and regional care. I-405, SR 167, Rainier Avenue, buses and local streets can all shape the day. This hub explains The Silver Guardian’s developing concepts without suggesting that a Renton facility, provider partnership or program exists.",
    introductionFr: "Renton se trouve à un carrefour du sud du comté de King, où les familles se déplacent entre les quartiers, la Cedar River, le lac Washington, les destinations communautaires et les soins régionaux. L’I-405, la SR 167, Rainier Avenue, l’autobus et les rues locales peuvent façonner la journée. Ce carrefour explique des concepts en développement sans laisser croire à un établissement ou programme local.",
    localSectionsEn: [
      { heading: "Plan around Renton’s crossroads rather than a single map point", paragraphs: ["A household in the Highlands, Kennydale, downtown Renton or the Benson area may face a different route and time commitment. I-405 and SR 167 congestion, bus connections, construction, severe weather and parking can affect arrival. Families already coordinating appointments, school, work and sibling care benefit from precise information and the ability to cancel without pressure.", "Renton’s public recreation information includes community facilities, arts, dance, fitness and adaptive opportunities. That demonstrates the importance of varied participation and clear facility rules, but it does not make the City or any program a Silver Guardian partner. A future concept would need its own approved location, leadership, accessibility review and participant protections."] },
      { heading: "Connect Renton support to a defined, honest role", paragraphs: ["Local businesses, neighborhood groups, recreation leaders, disability advocates and families may identify useful questions about space, transportation and communication. Support should begin with one defined contribution rather than a promise to launch a center or healthcare environment. The responsible operator would need to control programming, privacy, safety and day-to-day decisions.", "The Silver Guardian currently offers information, not registration. It does not operate a Renton Movement Therapy Center, hospital environment, clinical service or wish program. A future announcement should identify the operator, location, schedule, costs, intended participants and limits before asking families to make plans."] },
    ],
    localSectionsFr: [
      { heading: "Planifier autour du carrefour de Renton", paragraphs: ["Un ménage des Highlands, de Kennydale, du centre-ville ou du secteur Benson peut avoir un trajet et un horaire différents. La congestion sur l’I-405 et la SR 167, les correspondances, les travaux, la météo et le stationnement influencent l’arrivée. Les familles qui coordonnent déjà les rendez-vous, l’école, le travail et la fratrie ont besoin d’une information précise et d’une annulation sans pression.", "L’information publique de Renton présente des installations communautaires, des arts, de la danse, de l’activité physique et des possibilités adaptées. Cela illustre l’importance de différents modes de participation, mais ne fait pas de la Ville un partenaire. Tout futur concept nécessiterait son propre lieu approuvé, encadrement, examen d’accessibilité et protections."] },
      { heading: "Relier l’appui de Renton à un rôle honnête", paragraphs: ["Les entreprises, groupes de quartier, responsables de loisirs, défenseurs des personnes handicapées et familles peuvent cerner des questions sur l’espace, le transport et la communication. L’appui devrait commencer par une contribution définie plutôt que par une promesse de centre ou de milieu de soins. L’exploitant responsable contrôlerait la programmation, la vie privée et la sécurité.", "The Silver Guardian offre actuellement de l’information, et non des inscriptions. Il n’exploite aucun Centre de thérapie par le mouvement, milieu hospitalier, service clinique ou programme de souhait à Renton. Toute annonce future devrait préciser l’exploitant, le lieu, l’horaire, les coûts, les participants et les limites."] },
    ],
  },
  bellevue: {
    name: "Bellevue",
    titleEn: "Pediatric Support in Bellevue, WA",
    titleFr: "Soutien pédiatrique à Bellevue",
    descriptionEn: "Explore Bellevue resources for pediatric environments, accessible movement and careful ice-hockey-inspired community concepts.",
    descriptionFr: "Découvrez les ressources de Bellevue sur les milieux pédiatriques, le mouvement accessible et les concepts inspirés du hockey sur glace.",
    introductionEn: "Bellevue families may coordinate school, work, care and community life across a growing Eastside city connected by I-405, SR 520, I-90, buses, light rail and routes across Lake Washington. The Silver Guardian’s Bellevue hub explores locally relevant child-friendly environment and adaptable movement concepts while making clear that no local facility, healthcare relationship or active program is announced.",
    introductionFr: "À Bellevue, les familles peuvent concilier l’école, le travail, les soins et la vie communautaire dans une ville de l’Eastside reliée par l’I-405, la SR 520, l’I-90, l’autobus, le train léger et les passages du lac Washington. Ce carrefour explore des concepts locaux tout en précisant qu’aucun établissement, lien médical ou programme actif n’est annoncé.",
    localSectionsEn: [
      { heading: "Bellevue access changes by neighborhood and travel mode", paragraphs: ["Downtown, Crossroads, Factoria, BelRed and neighborhoods near Lake Washington do not share one travel pattern. A family may use the 2 Line, a bus, paratransit, walking, rolling with a mobility device or driving. Bridge traffic, I-405 congestion, construction, transfers, hills and the distance from a station to the final entrance can all matter.", "Bellevue’s transportation resources promote multiple ways to travel and its public accessibility work addresses sidewalks, signals, facilities and inclusive programming. Those examples reinforce the need for universal design and accurate wayfinding; they do not imply City involvement with The Silver Guardian. A future venue would require its own accessibility and route review."] },
      { heading: "A diverse Eastside community needs usable information", paragraphs: ["Bellevue residents use many languages and come from varied cultural backgrounds. A future activity should explain its purpose, cost, physical demands, accommodations, supervision and cancellation rules in language that families can understand. Translation alone is not enough if the underlying process remains confusing or inaccessible.", "The Silver Guardian does not currently operate a Bellevue center, pediatric setting, class, research activity or wish program. Businesses and community organizations can review the concepts and identify practical needs, but they should not recruit participants, collect health information or represent an exploratory conversation as a confirmed partnership."] },
    ],
    localSectionsFr: [
      { heading: "L’accès à Bellevue varie selon le quartier et le transport", paragraphs: ["Downtown, Crossroads, Factoria, BelRed et les quartiers près du lac Washington n’ont pas le même trajet. Une famille peut utiliser la ligne 2, l’autobus, le transport adapté, la marche, un appareil de mobilité ou la voiture. La circulation sur les ponts et l’I-405, les travaux, les correspondances, les collines et la distance entre une station et l’entrée comptent.", "Les ressources de transport de Bellevue encouragent plusieurs modes et les travaux publics d’accessibilité concernent trottoirs, signaux, installations et programmation inclusive. Ces exemples rappellent l’importance de la conception universelle, sans impliquer la Ville. Un futur lieu exigerait sa propre vérification."] },
      { heading: "Une communauté diversifiée a besoin d’information utilisable", paragraphs: ["Les résidents de Bellevue utilisent de nombreuses langues et viennent de différents milieux culturels. Une future activité devrait expliquer son objectif, son coût, ses exigences physiques, ses accommodements, son encadrement et ses règles d’annulation dans une langue comprise par les familles. La traduction ne suffit pas si le processus demeure confus ou inaccessible.", "The Silver Guardian n’exploite actuellement aucun centre, milieu pédiatrique, cours, recherche ou programme de souhait à Bellevue. Les entreprises et organismes peuvent cerner les besoins pratiques, mais ne devraient recruter personne, recueillir de renseignements médicaux ou présenter une conversation comme partenariat confirmé."] },
    ],
  },
  "gig-harbor": {
    name: "Gig Harbor",
    titleEn: "Pediatric Support in Gig Harbor, WA",
    titleFr: "Soutien pédiatrique à Gig Harbor",
    descriptionEn: "Explore Gig Harbor resources for child-friendly environments, adaptable movement and careful community support concepts.",
    descriptionFr: "Découvrez les ressources de Gig Harbor sur les milieux adaptés aux enfants, le mouvement et l’appui communautaire prudent.",
    introductionEn: "Gig Harbor families may coordinate daily life on the west side of Tacoma Narrows while traveling among the waterfront, Uptown, Purdy, Tacoma and other regional destinations. SR 16, the Tacoma Narrows Bridge, local roads and limited transit options can make location and timing especially important. This hub presents independent Silver Guardian concepts without announcing local services or partnerships.",
    introductionFr: "À Gig Harbor, les familles peuvent concilier la vie quotidienne à l’ouest de Tacoma Narrows et des déplacements entre le secteur riverain, Uptown, Purdy, Tacoma et d’autres destinations. La SR 16, le pont de Tacoma Narrows, les routes locales et les options de transport limitées rendent le lieu et l’horaire particulièrement importants. Ce carrefour n’annonce aucun service ni partenariat local.",
    localSectionsEn: [
      { heading: "Peninsula geography must shape a Gig Harbor plan", paragraphs: ["A waterfront location, an Uptown location and a site closer to Purdy would create different trips. Some participants may use Route 100, an on-demand option, a seasonal connector or a private vehicle; others may depend on a caregiver. Bridge traffic, parking, hills, weather and the distance between a stop and an entrance can affect whether a short activity is realistic.", "A future project should state whether it is intended for Gig Harbor city residents, the wider peninsula or Pierce County. That label should match the actual venue and transportation plan. Short formats, clear cancellation rules and remote or take-home alternatives may be more useful than assuming every family can cross the bridge or reach the waterfront on a fixed schedule."] },
      { heading: "Keep waterfront enthusiasm separate from confirmed activity", paragraphs: ["Gig Harbor’s waterfront identity, local events and community connections may inspire ice hockey, movement or family-oriented ideas. Public popularity does not remove the need for permits, insurance, accessibility, supervision, privacy and appropriate capacity. No transit agency, City office, recreation organization or healthcare provider is identified as a Silver Guardian partner.", "The Silver Guardian currently publishes information only. It does not operate a Gig Harbor movement center, child-friendly healthcare environment, clinical service or wish program. Supporters can identify local barriers and potential expertise, but no one should promise a location, participant opportunity or opening date."] },
    ],
    localSectionsFr: [
      { heading: "La géographie de la péninsule doit guider le plan", paragraphs: ["Un lieu sur le front de mer, à Uptown ou près de Purdy entraînerait des trajets différents. Certaines personnes peuvent utiliser la route 100, un service sur demande, une liaison saisonnière ou une voiture; d’autres dépendent d’un proche. La circulation sur le pont, le stationnement, les collines, la météo et la distance entre l’arrêt et l’entrée influencent la faisabilité.", "Un futur projet devrait préciser s’il vise la ville, la péninsule ou le comté de Pierce. Cette désignation doit correspondre au lieu et au plan de transport réels. Des formats courts, des annulations claires et des options à distance peuvent être plus utiles que de supposer que chaque famille peut traverser le pont à heure fixe."] },
      { heading: "Séparer l’enthousiasme du front de mer des activités confirmées", paragraphs: ["L’identité du front de mer, les événements locaux et les relations communautaires peuvent inspirer des idées de hockey sur glace, de mouvement ou de famille. Leur popularité n’élimine pas les permis, assurances, règles d’accessibilité, l’encadrement, la vie privée et la capacité. Aucun transporteur, bureau municipal, organisme de loisirs ou fournisseur de soins n’est présenté comme partenaire.", "The Silver Guardian publie actuellement de l’information seulement. Il n’exploite aucun centre, milieu de santé adapté aux enfants, service clinique ou programme de souhait à Gig Harbor. Les gens peuvent cerner les obstacles et l’expertise locale, sans promettre de lieu, de participation ou de date."] },
    ],
  },
  everett: {
    name: "Everett",
    titleEn: "Pediatric Community Support in Everett",
    titleFr: "Soutien pédiatrique à Everett",
    descriptionEn: "Explore Everett resources for pediatric environments, accessible movement and responsible ice-hockey-inspired community concepts.",
    descriptionFr: "Découvrez les ressources d’Everett sur les milieux pédiatriques, le mouvement accessible et les concepts inspirés du hockey sur glace.",
    introductionEn: "Everett families may coordinate care and everyday routines across Snohomish County while navigating I-5, US 2, Evergreen Way, local buses and trips south toward Seattle or east across the region. The Silver Guardian’s Everett hub discusses careful community concepts for pediatric environments, adaptable movement and hockey-inspired support without implying an operating program.",
    introductionFr: "À Everett, les familles peuvent concilier les soins et la vie quotidienne dans le comté de Snohomish tout en empruntant l’I-5, l’US 2, Evergreen Way, les autobus locaux et les routes vers Seattle ou l’est de la région. Ce carrefour présente des concepts prudents sans laisser croire à un programme actif.",
    localSectionsEn: [
      { heading: "Everett planning should connect the venue to the actual route", paragraphs: ["Downtown Everett, neighborhoods along Evergreen Way, the waterfront, Silver Lake and communities beyond city limits create different travel needs. Everett Transit, regional buses, driving, walking and mobility devices may form part of a trip. I-5 traffic, the US 2 connection, rail crossings, weather, parking and transfers can affect reliability.", "Everett’s public park information maps amenities alongside bus stops and bike routes, and its planning materials emphasize inclusive and accessible public spaces. Those resources offer a useful model for describing access; they do not indicate a Silver Guardian partnership. Any future activity needs a site-specific route, accessibility and safety review."] },
      { heading: "Snohomish County interest must become a defined Everett role", paragraphs: ["Community organizations, recreation leaders, arts groups, disability advocates, businesses and families may bring valuable experience. Their first contribution can be a practical question: who is responsible, who can participate, what adaptation is available and what happens when care or weather changes the plan? Clear answers should come before a public launch.", "No Everett Movement Therapy Center, kid-friendly healthcare project, healthcare affiliation, wish event or registration is announced. The Silver Guardian should publish an operator, venue, schedule, safeguards and confirmed partner roles before describing any opportunity as available."] },
    ],
    localSectionsFr: [
      { heading: "Relier un futur lieu d’Everett au trajet réel", paragraphs: ["Le centre-ville, les quartiers le long d’Evergreen Way, le front de mer, Silver Lake et les communautés hors des limites municipales ont différents besoins de déplacement. Everett Transit, les autobus régionaux, la voiture, la marche et les appareils de mobilité peuvent faire partie du trajet. La circulation sur l’I-5, l’US 2, les passages ferroviaires, la météo, le stationnement et les correspondances influencent la fiabilité.", "L’information publique sur les parcs d’Everett associe les commodités aux arrêts d’autobus et aux pistes cyclables, et la planification insiste sur l’inclusion. Ces ressources offrent un modèle pour décrire l’accès, sans indiquer de partenariat. Toute activité future exige une vérification propre au lieu."] },
      { heading: "Transformer l’intérêt du comté de Snohomish en rôle défini", paragraphs: ["Les organismes communautaires, responsables de loisirs, groupes artistiques, défenseurs des personnes handicapées, entreprises et familles peuvent apporter une expérience utile. Leur première contribution peut être une question pratique : qui est responsable, qui participe, quelles adaptations existent et que se passe-t-il lorsque les soins ou la météo modifient le plan? Les réponses doivent précéder le lancement.", "Aucun Centre de thérapie par le mouvement, projet de santé adapté aux enfants, lien médical, événement de souhait ou processus d’inscription à Everett n’est annoncé. The Silver Guardian devrait publier l’exploitant, le lieu, l’horaire, les protections et les rôles confirmés avant de présenter une possibilité comme disponible."] },
    ],
  },
};

const areaLinks = (locale: Locale, current: WashingtonAreaSlug): MontrealPageContent["relatedLinks"] => {
  const isFrench = locale === "fr-CA";
  return [
    { href: `/${current}/kid-friendly-research-hospitals/`, label: isFrench ? `hôpitaux de recherche adaptés aux enfants à ${details[current].name}` : `kid-friendly research hospitals in ${details[current].name}`, description: isFrench ? "Découvrez la vision locale d’un milieu pédiatrique inspiré du hockey sur glace et dirigé par un fournisseur volontaire." : "Explore the local vision for a provider-led, ice-hockey-inspired pediatric environment." },
    { href: `/${current}/movement-therapy-centers/`, label: isFrench ? `centres de thérapie par le mouvement à ${details[current].name}` : `Movement Therapy Centers in ${details[current].name}`, description: isFrench ? "Découvrez le concept local de mouvement communautaire artistique, adapté et accessible." : "Explore the local concept for artistic, adapted and accessible community movement." },
    { href: "/seattle/", label: isFrench ? "carrefour de Seattle" : "Seattle service-area hub", description: isFrench ? "Explorez les ressources principales de Seattle et ses deux concepts ciblés." : "Explore Seattle’s main resources and two focused concepts." },
    { href: "/service-areas/united-states/", label: isFrench ? "zones desservies aux États-Unis" : "United States service areas", description: isFrench ? "Consultez toutes les ressources publiées sous Washington." : "See all published Washington resources in the national directory." },
    ...washingtonAreaSlugs.filter((slug) => slug !== current).map((slug) => ({
      href: `/${slug}/`,
      label: details[slug].name,
      description: isFrench ? "Découvrez cette ressource voisine de l’État de Washington." : "Explore this neighboring Washington service-area resource.",
    })),
  ];
};

export function getWashingtonAreaContent(slug: string, locale: Locale): MontrealPageContent | undefined {
  if (!washingtonAreaSlugs.includes(slug as WashingtonAreaSlug)) return undefined;
  const areaSlug = slug as WashingtonAreaSlug;
  const detail = details[areaSlug];
  const isFrench = locale === "fr-CA";
  const localSections = isFrench ? detail.localSectionsFr : detail.localSectionsEn;

  return {
    title: isFrench ? detail.titleFr : detail.titleEn,
    description: isFrench ? detail.descriptionFr : detail.descriptionEn,
    keywords: isFrench
      ? [`soutien pédiatrique ${detail.name}`, `mouvement accessible ${detail.name}`, `milieu adapté aux enfants ${detail.name}`, `souhaits hockey ${detail.name}`]
      : [`pediatric community support ${detail.name}`, `accessible movement ${detail.name}`, `kid-friendly environment ${detail.name}`, `hockey wishes ${detail.name}`],
    eyebrow: `${detail.name}, Washington`,
    heading: isFrench ? `Soutien communautaire pédiatrique à ${detail.name}` : `Pediatric community support in ${detail.name}, Washington`,
    introduction: isFrench ? detail.introductionFr : detail.introductionEn,
    imageLabel: isFrench ? `Communauté de ${detail.name}` : `${detail.name} community`,
    imageAlt: isFrench ? `Scène inclusive d’appui communautaire à ${detail.name}` : `Inclusive community-support scene in ${detail.name}, Washington`,
    heroAsset: { src: areaHeroAssets[areaSlug], alt: isFrench ? `Membres de la communauté dans un espace public accessible de ${detail.name}, Washington` : `Community members enjoying an accessible public space in ${detail.name}, Washington` },
    supportingImageAssets: [
      { src: pediatricEnvironmentHero, alt: isFrench ? "Salon familial pédiatrique accessible et subtilement inspiré du hockey sur glace" : "Accessible pediatric family lounge with subtle ice-hockey-inspired details" },
      { src: movementStudioHero, alt: isFrench ? "Cours communautaire inclusif avec options de mouvement assises et debout" : "Inclusive community class with seated and standing movement options" },
    ],
    sections: [
      ...localSections,
      {
        heading: isFrench ? `Deux concepts à explorer à ${detail.name}` : `Two concepts to explore in ${detail.name}`,
        paragraphs: isFrench
          ? ["La vision d’un hôpital de recherche adapté aux enfants concerne un milieu non clinique inspiré du hockey sur glace qui ne pourrait être envisagé qu’avec un fournisseur volontaire dirigeant les décisions, la sécurité et la vie privée. Aucun hôpital, chantier, recherche, programme ou partenariat local n’est annoncé.", "Le concept des Centres de thérapie par le mouvement concerne des activités communautaires artistiques, adaptées et inspirées du hockey sur glace. Il ne constitue ni traitement, ni physiothérapie, ni réadaptation. Aucun lieu, cours, instructeur, horaire ou processus d’inscription local n’est confirmé."]
          : ["The kid-friendly research hospital vision concerns a non-clinical, ice-hockey-inspired environment that could only be considered if a willing healthcare provider led decisions, safety and privacy. No local hospital, construction, research, program or partnership is announced.", "The Movement Therapy Centers concept concerns artistic, adapted and ice-hockey-inspired community activity. It is not treatment, physical therapy or rehabilitation. No local venue, class, instructor, schedule or registration process is confirmed."],
        bullets: isFrench ? ["Des décisions cliniques laissées aux professionnels qualifiés", "Des options de mouvement accessibles sans promesse de résultat", "Des rôles communautaires confirmés avant toute annonce"] : ["Clinical decisions left to qualified professionals", "Accessible movement options without outcome promises", "Community roles confirmed before any announcement"],
      },
      {
        heading: isFrench ? "Comment utiliser cette page de zone" : "How to use this service-area page",
        paragraphs: isFrench
          ? ["Cette page aide les familles, entreprises et organismes à comprendre la vision et à poser des questions locales utiles. Elle n’accepte ni dossier médical, recommandation, demande de souhait ou inscription. Une ville publiée désigne une ressource d’information, et non un service disponible.", "Les gens peuvent consulter les concepts généraux, partager uniquement les renseignements vérifiés et suivre les mises à jour. Ils ne devraient pas utiliser le nom de The Silver Guardian pour recruter des participants, recueillir des renseignements de santé ou promettre un partenaire, un lieu ou une date."]
          : ["This page helps families, businesses and organizations understand the vision and ask useful local questions. It does not accept medical records, referrals, wish applications or registrations. A published city identifies an informational resource, not an available service.", "Supporters can review the general concepts, share only verified information and follow updates. They should not use The Silver Guardian’s name to recruit participants, collect health information or promise a partner, venue or date."],
      },
    ],
    relatedHeading: isFrench ? "Explorer les ressources voisines" : "Explore neighboring service-area resources",
    relatedLinks: areaLinks(locale, areaSlug),
    faqHeading: isFrench ? `FAQ sur la zone de ${detail.name}` : `${detail.name} service-area FAQ`,
    faqs: [
      { question: isFrench ? `The Silver Guardian offre-t-il actuellement des services à ${detail.name}?` : `Does The Silver Guardian currently offer services in ${detail.name}?`, answer: isFrench ? "Non. Cette page décrit des concepts en développement et n’annonce aucun programme, établissement, événement ou processus d’inscription actif." : "No. This page describes developing concepts and does not announce an operating program, facility, event or registration process." },
      { question: isFrench ? "Cette page annonce-t-elle un partenariat médical?" : "Does this page announce a healthcare partnership?", answer: isFrench ? `Non. The Silver Guardian ne possède, n’exploite, ne gère, ne dirige et ne représente aucun hôpital ou fournisseur de soins à ${detail.name}.` : `No. The Silver Guardian does not own, operate, manage, direct or represent a hospital or healthcare provider in ${detail.name}.` },
      { question: isFrench ? "Peut-on demander un souhait ou s’inscrire à une activité?" : "Can someone request a wish or register for an activity?", answer: isFrench ? "Non. Aucun processus local de demande ou d’inscription n’est ouvert. Une possibilité confirmée nécessiterait une annonce distincte avec des détails complets." : "No. No local application or registration process is open. A confirmed opportunity would require a separate announcement with complete details." },
      { question: isFrench ? "Pourquoi les déplacements locaux sont-ils décrits?" : "Why does the page discuss local travel?", answer: isFrench ? "Le transport, l’accessibilité, la météo et l’énergie peuvent déterminer si une future activité est réellement utilisable. Leur description aide à éviter une planification générique." : "Transportation, accessibility, weather and changing energy can determine whether a future activity is genuinely usable. Describing them helps avoid generic planning." },
      { question: isFrench ? "Comment un organisme local peut-il contribuer?" : "How can a local organization contribute?", answer: isFrench ? "Il peut d’abord examiner les limites publiées, cerner un besoin pratique et discuter d’un rôle précis sans présenter la conversation comme un partenariat confirmé." : "It can begin by reviewing the published boundaries, identifying one practical need and discussing a defined role without presenting the conversation as a confirmed partnership." },
    ],
    closingHeading: isFrench ? "Relier le contexte local à des étapes responsables" : "Connect local context to responsible next steps",
    closingText: isFrench ? `Comparez les ressources de ${detail.name}, Seattle et des communautés voisines, puis suivez seulement les détails confirmés pendant que The Silver Guardian explore des relations responsables.` : `Compare the ${detail.name}, Seattle and neighboring resources, then follow only confirmed details as The Silver Guardian explores responsible relationships.`,
    ctaLabel: isFrench ? "Explorer le carrefour de Seattle" : "Explore the Seattle hub",
    ctaHref: "/seattle/",
  };
}

function areaSeriesLinks(locale: Locale, areaSlug: WashingtonAreaSlug): MontrealPageContent["relatedLinks"] {
  const isFrench = locale === "fr-CA";
  const name = details[areaSlug].name;

  return [
    { href: `/${areaSlug}/`, label: isFrench ? `carrefour de ${name}` : `${name} service-area hub`, description: isFrench ? "Revenez à l’aperçu local, aux limites du projet et aux ressources voisines." : "Return to the local overview, project boundaries and neighboring resources." },
    { href: `/${areaSlug}/kid-friendly-research-hospitals/`, label: isFrench ? `hôpitaux de recherche adaptés aux enfants à ${name}` : `kid-friendly research hospitals in ${name}`, description: isFrench ? "Explorez une vision de milieux pédiatriques inspirés du hockey sur glace et dirigés par des fournisseurs volontaires." : "Explore a vision for provider-led pediatric environments inspired by ice hockey." },
    { href: `/${areaSlug}/movement-therapy-centers/`, label: isFrench ? `centres de thérapie par le mouvement à ${name}` : `Movement Therapy Centers in ${name}`, description: isFrench ? "Découvrez un concept accessible de mouvement artistique, adapté et inspiré du hockey sur glace." : "Explore an accessible concept for artistic, adapted and ice-hockey-inspired movement." },
  ];
}

function topicLocalSections(
  detail: AreaDetail,
  locale: Locale,
  isHospital: boolean,
): MontrealPageContent["sections"] {
  const localSections = locale === "fr-CA" ? detail.localSectionsFr : detail.localSectionsEn;

  if (locale === "fr-CA") {
    return [
      ...localSections,
      isHospital
        ? {
            heading: `Un milieu adapté aux enfants à ${detail.name} doit être dirigé par le fournisseur`,
            paragraphs: [
              `Le contexte local de ${detail.name} peut aider à poser des questions sur les trajets, l’accessibilité, le repos des proches et l’expérience des enfants, mais seul un fournisseur de soins volontaire pourrait décider si un élément inspiré du hockey sur glace convient à son établissement. Il devrait diriger la prévention des infections, la sécurité, la vie privée, les activités cliniques, les installations et toute interaction avec les patients. The Silver Guardian n’a annoncé aucune entente avec un fournisseur local et ne peut approuver une conception, un chantier ou une recherche.`,
              `Une idée communautaire pourrait concerner des œuvres facultatives, une signalisation claire, du mobilier approuvé ou des éléments calmes que les enfants peuvent apprécier sans effort physique. Elle ne devrait jamais imposer le hockey sur glace, une marque, une photo ou une activité publique. Les déplacements et les réalités familiales décrits sur cette page devraient guider les décisions pratiques seulement après la confirmation d’un lieu et d’un rôle écrit pour chaque organisme.`,
            ],
          }
        : {
            heading: `Un futur concept de mouvement à ${detail.name} exige un lieu précis`,
            paragraphs: [
              `L’expression Centres de thérapie par le mouvement ne désigne actuellement aucun centre à ${detail.name}. Une future activité devrait d’abord confirmer un exploitant et un lieu, puis publier des renseignements concrets sur les entrées, les surfaces, les toilettes, le transport, le stationnement, le bruit, le repos et les accommodements. Les trajets et obstacles locaux décrits sur cette page montrent pourquoi une simple étiquette municipale ne suffit pas.`,
              `La danse, le rythme, l’équilibre, les jeux adaptés ou des exercices sans contact inspirés du hockey sur glace pourraient offrir plusieurs façons de participer, notamment assis, debout, avec un appareil de mobilité, en observation ou dans un format peu stimulant. Ils demeureraient des activités communautaires, et non un traitement, une physiothérapie ou une réadaptation. Aucun cours, instructeur, tarif, horaire ou processus d’inscription local n’est annoncé.`,
            ],
          },
    ];
  }

  return [
    ...localSections,
    isHospital
      ? {
          heading: `A ${detail.name} kid-friendly environment must remain provider-led`,
          paragraphs: [
            `${detail.name}’s local context can help frame questions about travel, accessibility, caregiver rest and children’s experiences, but only a willing healthcare provider could decide whether an ice-hockey-inspired element belongs in its setting. That provider would lead infection prevention, safety, privacy, clinical operations, facilities decisions and every patient interaction. The Silver Guardian has announced no local provider agreement and cannot approve a design, construction project or research activity.`,
            `A community-supported idea might involve optional artwork, clear wayfinding, approved furnishings or quiet features that children can enjoy without physical effort. It should never require interest in ice hockey, display a brand without permission, or make a photograph or public activity part of care. The travel and family realities described on this page should guide practical planning only after a location and each organization’s written role are confirmed.`,
          ],
        }
      : {
          heading: `A future ${detail.name} movement concept needs a specific site`,
          paragraphs: [
            `Movement Therapy Centers does not currently identify an operating center in ${detail.name}. A future activity would first need a confirmed operator and venue, followed by practical public information about entrances, surfaces, washrooms, transportation, parking, noise, rest areas and accommodations. The local routes and barriers described on this page show why a citywide label cannot replace a site-specific accessibility review.`,
            `Dance, rhythm, balance, adapted games or non-contact ice-hockey-inspired drills could offer seated, standing, mobility-device, observation-based and low-sensory ways to participate. They would remain community activities, not treatment, physical therapy or rehabilitation. No local class, instructor, fee, schedule or registration process is announced, and no one should change medical care or exercise based on this page.`,
          ],
        },
  ];
}

export function getWashingtonAreaTopicContent(
  serviceArea: string,
  topic: string,
  locale: Locale,
): MontrealPageContent | undefined {
  if (!washingtonAreaSlugs.includes(serviceArea as WashingtonAreaSlug)) return undefined;
  if (!washingtonAreaTopicSlugs.includes(topic as WashingtonAreaTopicSlug)) return undefined;

  const areaSlug = serviceArea as WashingtonAreaSlug;
  const detail = details[areaSlug];
  const isFrench = locale === "fr-CA";
  const isHospital = topic === "kid-friendly-research-hospitals";
  const base = isHospital
    ? kidFriendlyResearchHospitalContent[locale]
    : movementTherapyCenterContent[locale];
  const seriesLinks = areaSeriesLinks(locale, areaSlug);

  return {
    ...base,
    title: isHospital
      ? isFrench
        ? `Hôpital pour enfants à ${detail.name}`
        : `Kid-Friendly Hospital ${detail.name}`
      : isFrench
        ? `Thérapie par le mouvement à ${detail.name}`
        : `Movement Therapy Centers ${detail.name}`,
    description: isHospital
      ? isFrench
        ? `Découvrez comment un milieu pédiatrique inspiré du hockey sur glace pourrait être envisagé à ${detail.name} sous la direction d’un fournisseur volontaire.`
        : `Explore how a provider-led, ice-hockey-inspired kid-friendly pediatric environment could be considered in ${detail.name} with clear boundaries.`
      : isFrench
        ? `Découvrez un concept prudent et accessible de centres de thérapie par le mouvement à ${detail.name}, axé sur des activités adaptées.`
        : `Explore a careful concept for accessible Movement Therapy Centers in ${detail.name} built around artistic and adapted activity.`,
    keywords: isHospital
      ? isFrench
        ? [`hôpitaux de recherche adaptés aux enfants ${detail.name}`, `milieu pédiatrique ${detail.name}`, `hôpital inspiré du hockey sur glace ${detail.name}`]
        : [`kid-friendly research hospitals ${detail.name}`, `children's research hospital ${detail.name}`, `ice-hockey-themed pediatric environment ${detail.name}`]
      : isFrench
        ? [`centres de thérapie par le mouvement ${detail.name}`, `exercice adapté ${detail.name}`, `mouvement accessible ${detail.name}`]
        : [`Movement Therapy Centers ${detail.name}`, `adapted exercise ${detail.name}`, `accessible movement ${detail.name}`],
    eyebrow: isHospital
      ? isFrench
        ? `Milieux pédiatriques à ${detail.name}`
        : `${detail.name} pediatric environments`
      : isFrench
        ? `Mouvement accessible à ${detail.name}`
        : `Accessible movement in ${detail.name}`,
    heading: isHospital
      ? isFrench
        ? `Une vision d’hôpitaux de recherche adaptés aux enfants à ${detail.name}`
        : `A vision for kid-friendly research hospitals in ${detail.name}`
      : isFrench
        ? `Des centres de thérapie par le mouvement accessibles à ${detail.name}`
        : `Accessible Movement Therapy Centers in ${detail.name}`,
    introduction: isHospital
      ? isFrench
        ? `À ${detail.name}, un milieu pédiatrique inspiré du hockey sur glace devrait respecter les soins, les déplacements, la vie privée, l’accessibilité et les choix de chaque famille. The Silver Guardian explore comment il pourrait soutenir un élément non clinique seulement si un fournisseur volontaire en dirige la portée et les protections. Aucun partenariat, hôpital, chantier ou programme de recherche local n’est annoncé.`
        : `In ${detail.name}, an ice-hockey-inspired pediatric environment would need to respect care, travel, privacy, accessibility and each family’s choices. The Silver Guardian is exploring how it could support a non-clinical element only if a willing healthcare provider led its scope and safeguards. No local partnership, hospital, construction project or research program is announced.`
      : isFrench
        ? `À ${detail.name}, un concept de mouvement utile devrait tenir compte des trajets locaux, de l’accessibilité, d’une énergie changeante et du besoin de participer sans pression. The Silver Guardian explore des activités communautaires artistiques et adaptées; il n’offre actuellement aucun centre, traitement, cours ou processus d’inscription local.`
        : `In ${detail.name}, a useful movement concept would need to account for local travel, accessibility, changing energy and the ability to participate without pressure. The Silver Guardian is exploring artistic and adapted community activity; it does not currently offer a local center, treatment, class or registration process.`,
    imageLabel: isFrench
      ? isHospital
        ? `Milieu pédiatrique à ${detail.name}`
        : `Mouvement accessible à ${detail.name}`
      : isHospital
        ? `${detail.name} pediatric environment`
        : `Accessible movement in ${detail.name}`,
    imageAlt: isFrench
      ? isHospital
        ? `Milieu pédiatrique accueillant inspiré du hockey sur glace à ${detail.name}`
        : `Activité communautaire de mouvement accessible à ${detail.name}`
      : isHospital
        ? `Welcoming ice-hockey-inspired pediatric environment in ${detail.name}`
        : `Accessible community movement activity in ${detail.name}`,
    heroAsset: base.heroAsset,
    supportingImageAssets: base.supportingImageAssets,
    sections: [
      ...topicLocalSections(detail, locale, isHospital),
      ...base.sections,
    ],
    relatedHeading: isFrench ? `Explorer les trois ressources de ${detail.name}` : `Explore all three ${detail.name} resources`,
    relatedLinks: [
      ...seriesLinks.filter((link) => !link.href.endsWith(`/${topic}/`)),
      { href: "/service-areas/united-states/", label: isFrench ? "zones desservies aux États-Unis" : "United States service areas", description: isFrench ? "Consultez le répertoire national et les autres ressources publiées dans l’État de Washington." : "See the national directory and other published Washington resources." },
    ],
    faqHeading: isHospital
      ? isFrench
        ? `FAQ sur les milieux pédiatriques à ${detail.name}`
        : `${detail.name} kid-friendly hospital FAQ`
      : isFrench
        ? `FAQ sur le mouvement à ${detail.name}`
        : `${detail.name} movement center FAQ`,
    faqs: [
      {
        question: isFrench ? `Ce concept est-il actuellement offert à ${detail.name}?` : `Is this concept currently available in ${detail.name}?`,
        answer: isFrench ? "Non. Aucun lieu, partenaire, programme, service, horaire ou processus d’inscription local n’est annoncé." : "No. No local location, partner, program, service, schedule or registration process is announced.",
      },
      ...base.faqs,
    ],
    closingHeading: isFrench ? `Revenir au carrefour de ${detail.name}` : `Return to the ${detail.name} service-area hub`,
    closingText: isFrench ? `Comparez les ressources de ${detail.name} et suivez uniquement les mises à jour confirmées pendant l’exploration de relations et de protections responsables.` : `Compare the ${detail.name} resources and follow only confirmed updates as The Silver Guardian explores responsible relationships and safeguards.`,
    ctaLabel: isFrench ? `Explorer le carrefour de ${detail.name}` : `Explore the ${detail.name} hub`,
    ctaHref: `/${areaSlug}/`,
  };
}

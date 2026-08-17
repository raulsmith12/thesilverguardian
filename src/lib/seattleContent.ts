import type { Locale } from "@/lib/i18n";
import movementStudioHero from "@/img/generated/movement-studio-hero.webp";
import pediatricEnvironmentHero from "@/img/generated/pediatric-environment-hero.webp";
import seattleCommunityHero from "@/img/generated/seattle-community-hero.webp";
import { kidFriendlyResearchHospitalContent } from "@/lib/kidFriendlyResearchHospitalContent";
import type { MontrealPageContent } from "@/lib/montrealContent";
import { movementTherapyCenterContent } from "@/lib/movementTherapyCenterContent";

export const seattleTopicSlugs = ["kid-friendly-research-hospitals", "movement-therapy-centers"] as const;
export type SeattleTopicSlug = (typeof seattleTopicSlugs)[number];

const seattleLinks = (locale: Locale): MontrealPageContent["relatedLinks"] => locale === "fr-CA"
  ? [
      { href: "/seattle/", label: "carrefour de Seattle", description: "Revenez à l’aperçu des ressources de Seattle et de leurs limites." },
      { href: "/seattle/kid-friendly-research-hospitals/", label: "hôpitaux de recherche adaptés aux enfants à Seattle", description: "Explorez une vision prudente de milieux pédiatriques inspirés du sport et dirigés par des fournisseurs volontaires." },
      { href: "/seattle/movement-therapy-centers/", label: "centres de thérapie par le mouvement à Seattle", description: "Découvrez un concept communautaire accessible axé sur le mouvement artistique, adapté et inspiré du sport." },
    ]
  : [
      { href: "/seattle/", label: "Seattle service-area hub", description: "Return to the overview of Seattle resources and their boundaries." },
      { href: "/seattle/kid-friendly-research-hospitals/", label: "kid-friendly research hospitals in Seattle", description: "Explore a careful vision for provider-led pediatric environments inspired by sports." },
      { href: "/seattle/movement-therapy-centers/", label: "Movement Therapy Centers in Seattle", description: "Explore an accessible community concept for artistic, adapted and sport-inspired movement." },
    ];

export const seattleLandingContent: Record<Locale, MontrealPageContent> = {
  en: {
    title: "Pediatric Community Support in Seattle, WA",
    description: "Explore Seattle resources for kid-friendly pediatric environments, accessible movement concepts and hockey-inspired community support.",
    keywords: ["Seattle pediatric community support", "kid-friendly research hospital Seattle", "movement therapy centers Seattle", "hockey wishes Seattle"],
    eyebrow: "Seattle, Washington",
    heading: "Pediatric support concepts and hockey-inspired hope in Seattle",
    introduction: "Seattle families navigating pediatric cancer or another debilitating condition may balance care, school, work, changing energy and travel across a city shaped by water, hills and distinct neighborhoods. The Silver Guardian’s Seattle hub explains how its independent kid-friendly environment, movement and hockey-wish concepts could be explored locally without implying an operating program or healthcare affiliation.",
    imageLabel: "Seattle skyline and community",
    imageAlt: "Seattle skyline and inclusive community-support scene",
    heroAsset: { src: seattleCommunityHero, alt: "Community members overlooking the Seattle skyline and Space Needle on a soft overcast day" },
    supportingImageAssets: [
      { src: pediatricEnvironmentHero, alt: "Welcoming provider-designed pediatric family lounge with accessible seating and subtle sports-inspired details" },
      { src: movementStudioHero, alt: "Inclusive community movement class with seated and standing options in an accessible studio" },
    ],
    sections: [
      { heading: "A Seattle service-area hub built around accurate information", paragraphs: ["Seattle’s neighborhoods extend from the north end through downtown, West Seattle and communities around Lake Washington. Families may combine walking, mobility devices, buses, light rail, ferries or driving, and a route that works one day may be difficult when fatigue, weather, construction or an appointment changes. Local planning should describe the actual location, access and time commitment instead of treating Seattle as one interchangeable service area.", "The Silver Guardian does not currently operate a Seattle center, hospital program, wish event or clinical service. The city hub gathers locally relevant information and gives potential supporters a responsible starting point. Any future project would require its own qualified leadership, confirmed partner roles, safety measures, privacy protections and public details before families could rely on it."] },
      { heading: "Three connected Seattle resources", paragraphs: ["Use the focused pages below to explore two different concepts. The kid-friendly research hospital page discusses how a willing healthcare provider could lead decisions about a sports-inspired pediatric environment. The Movement Therapy Centers page discusses adaptable community activity and the boundaries between recreation, rehabilitation and medical care.", "Seattle also appears in the West section of 32 Wishes in 32 Cities. That broader initiative tracks community petition signatures connected to each hockey market. A city tracker demonstrates public support; it does not announce a selected child, event, partner, benefit or application process."] },
      { heading: "Local relationships before public promises", paragraphs: ["Seattle has established recreation, arts, disability, youth, transportation and neighborhood networks. Those networks can offer valuable local knowledge, but mentioning them does not imply their participation. The Silver Guardian should treat every conversation as exploratory until responsibilities, resources and permissions are documented.", "Useful early questions include whether information is accessible, whether a participant can request an accommodation, how caregivers would be involved, what transportation barriers exist and which organization is responsible for day-to-day delivery. Publishing clear answers is more helpful than announcing a broad vision without an operational plan."] },
    ],
    relatedHeading: "Explore all Seattle resources",
    relatedLinks: [...seattleLinks("en").slice(1), { href: "/service-areas/united-states/", label: "United States service areas", description: "See all published Washington resources in the national directory." }, { href: "/tacoma/", label: "Tacoma", description: "Explore the neighboring Pierce County resource." }, { href: "/renton/", label: "Renton", description: "Explore the neighboring south King County resource." }, { href: "/bellevue/", label: "Bellevue", description: "Explore the neighboring Eastside resource." }, { href: "/gig-harbor/", label: "Gig Harbor", description: "Explore the neighboring peninsula resource." }, { href: "/everett/", label: "Everett", description: "Explore the neighboring Snohomish County resource." }],
    faqHeading: "Seattle service-area FAQ",
    faqs: [
      { question: "Does The Silver Guardian currently operate services in Seattle?", answer: "No. The Seattle pages describe developing independent concepts and do not announce an operating center, healthcare program, wish event or registration process." },
      { question: "Is The Silver Guardian affiliated with a Seattle hospital or public agency?", answer: "No affiliation is announced. The organization does not own, operate, manage, direct or represent a Seattle hospital, healthcare provider or public agency." },
      { question: "Why does local transportation matter?", answer: "A useful future activity would need to account for Seattle’s distinct neighborhoods, hills, water crossings and the different ways families travel, including transit, ferries and mobility devices." },
      { question: "What does Seattle’s 32 Wishes tracker show?", answer: "It shows petition signatures associated with Seattle’s hockey market against the initiative’s community goal. It does not show program eligibility or promise a wish." },
    ],
    closingHeading: "Explore the focused Seattle concepts",
    closingText: "Review both focused pages, compare their responsibilities and follow only confirmed updates as local relationships and safeguards are explored.",
    ctaLabel: "Explore Seattle’s kid-friendly environment vision",
    ctaHref: "/seattle/kid-friendly-research-hospitals/",
  },
  "fr-CA": {
    title: "Soutien communautaire pédiatrique à Seattle",
    description: "Découvrez les ressources de Seattle sur les milieux pédiatriques, le mouvement accessible et l’appui communautaire inspiré du hockey.",
    keywords: ["soutien pédiatrique Seattle", "hôpital adapté aux enfants Seattle", "thérapie par le mouvement Seattle", "souhaits hockey Seattle"],
    eyebrow: "Seattle, Washington",
    heading: "Soutien pédiatrique et espoir inspiré du hockey à Seattle",
    introduction: "À Seattle, les familles touchées par un cancer pédiatrique ou une autre condition invalidante peuvent concilier les soins, l’école, le travail, une énergie changeante et les déplacements dans une ville façonnée par l’eau, les collines et des quartiers distincts. Ce carrefour présente les concepts indépendants de The Silver Guardian sans laisser croire à un programme actif ou à une affiliation médicale.",
    imageLabel: "Panorama et communauté de Seattle",
    imageAlt: "Panorama de Seattle et scène inclusive d’appui communautaire",
    heroAsset: { src: seattleCommunityHero, alt: "Membres de la communauté devant le panorama de Seattle et la Space Needle par temps couvert" },
    supportingImageAssets: [
      { src: pediatricEnvironmentHero, alt: "Salon familial pédiatrique accessible, conçu par un fournisseur et subtilement inspiré du sport" },
      { src: movementStudioHero, alt: "Cours communautaire inclusif offrant des options de mouvement assises et debout" },
    ],
    sections: [
      { heading: "Un carrefour de Seattle fondé sur une information exacte", paragraphs: ["Les quartiers de Seattle s’étendent du nord au centre-ville, à West Seattle et autour du lac Washington. Les familles peuvent combiner la marche, les appareils de mobilité, l’autobus, le train léger, le traversier ou la voiture. Un trajet peut devenir difficile lorsque la fatigue, la météo, les travaux ou un rendez-vous changent. Une planification locale doit décrire le lieu, l’accès et le temps requis plutôt que de traiter Seattle comme une zone uniforme.", "The Silver Guardian n’exploite actuellement aucun centre, programme hospitalier, événement de souhait ou service clinique à Seattle. Le carrefour rassemble une information locale et donne un point de départ responsable. Tout futur projet nécessiterait un encadrement qualifié, des rôles confirmés, des mesures de sécurité, des protections de la vie privée et des détails publics."] },
      { heading: "Trois ressources reliées pour Seattle", paragraphs: ["Les pages ciblées présentent deux concepts distincts. La page sur les hôpitaux de recherche adaptés aux enfants explique comment un fournisseur volontaire pourrait diriger les décisions sur un milieu pédiatrique inspiré du sport. La page des Centres de thérapie par le mouvement aborde l’activité communautaire adaptable et la distinction entre loisirs, réadaptation et soins.", "Seattle figure aussi dans la section Ouest de 32 souhaits dans 32 villes. Ce projet suit les signatures de pétition liées à chaque marché de hockey. Un indicateur municipal témoigne d’un appui public; il n’annonce aucun enfant, événement, partenaire, avantage ou processus de demande."] },
      { heading: "Des relations locales avant les promesses publiques", paragraphs: ["Seattle possède des réseaux établis de loisirs, d’arts, de défense des personnes handicapées, de jeunesse, de transport et de quartiers. Ils peuvent offrir une connaissance locale utile, mais leur mention ne signifie pas qu’ils participent. Toute conversation demeure exploratoire jusqu’à la documentation des responsabilités, ressources et autorisations.", "Les premières questions utiles concernent l’accessibilité de l’information, les demandes d’accommodement, le rôle des proches, les obstacles de transport et l’organisme responsable des activités quotidiennes. Des réponses publiques claires sont plus utiles qu’une vaste vision sans plan opérationnel."] },
    ],
    relatedHeading: "Explorer toutes les ressources de Seattle",
    relatedLinks: [...seattleLinks("fr-CA").slice(1), { href: "/service-areas/united-states/", label: "zones desservies aux États-Unis", description: "Consultez toutes les ressources de Washington dans le répertoire national." }, { href: "/tacoma/", label: "Tacoma", description: "Découvrez la ressource voisine du comté de Pierce." }, { href: "/renton/", label: "Renton", description: "Découvrez la ressource voisine du sud du comté de King." }, { href: "/bellevue/", label: "Bellevue", description: "Découvrez la ressource voisine de l’Eastside." }, { href: "/gig-harbor/", label: "Gig Harbor", description: "Découvrez la ressource voisine de la péninsule." }, { href: "/everett/", label: "Everett", description: "Découvrez la ressource voisine du comté de Snohomish." }],
    faqHeading: "FAQ sur la zone de Seattle",
    faqs: [
      { question: "The Silver Guardian exploite-t-il des services à Seattle?", answer: "Non. Les pages de Seattle décrivent des concepts indépendants en développement et n’annoncent aucun centre, programme de soins, événement de souhait ou processus d’inscription." },
      { question: "The Silver Guardian est-il affilié à un hôpital ou organisme public de Seattle?", answer: "Aucune affiliation n’est annoncée. L’organisme ne possède, n’exploite, ne gère, ne dirige et ne représente aucun hôpital, fournisseur de soins ou organisme public de Seattle." },
      { question: "Pourquoi le transport local compte-t-il?", answer: "Une future activité utile devrait tenir compte des quartiers, des collines, des traversées d’eau et des différentes façons de voyager, notamment le transport collectif, les traversiers et les appareils de mobilité." },
      { question: "Que montre le suivi 32 souhaits de Seattle?", answer: "Il montre les signatures associées au marché de hockey de Seattle par rapport à l’objectif communautaire. Il ne représente aucune admissibilité et ne promet aucun souhait." },
    ],
    closingHeading: "Explorer les concepts ciblés de Seattle",
    closingText: "Consultez les deux pages ciblées, comparez leurs responsabilités et suivez uniquement les mises à jour confirmées pendant l’exploration des relations et protections locales.",
    ctaLabel: "Explorer la vision d’un milieu adapté aux enfants",
    ctaHref: "/seattle/kid-friendly-research-hospitals/",
  },
};

const localHospitalSections: Record<Locale, MontrealPageContent["sections"]> = {
  en: [
    { heading: "A Seattle kid-friendly research hospital concept starts with the provider", paragraphs: ["A Seattle pediatric environment could only be shaped inside a healthcare setting if the responsible provider chose to participate and led every decision. Clinical operations, infection prevention, facilities, child-life practice, accessibility, privacy and family experience would determine what belongs in the space. The Silver Guardian has no announced Seattle provider agreement and cannot approve a design, patient interaction, research activity or construction project.", "A sports-inspired idea might use optional artwork, wayfinding, quiet interactive features or spaces where a child can engage without physical effort. Seattle’s hockey culture may provide a familiar theme, but no professional organization is identified as a partner. Branding, athlete appearances, fundraising recognition and photography would each require separate permission and should never displace the child’s comfort or the provider’s clinical responsibilities."] },
    { heading: "Seattle travel and family logistics should shape planning", paragraphs: ["Seattle families may travel from Ballard, Rainier Valley, West Seattle, Northgate or communities across Lake Washington and Puget Sound. A care day can involve buses, light rail, ferries, mobility devices, bridges, I-5 or local streets. Parking, hills, weather, construction and transfers can add uncertainty. A supportive environment should reduce demands once a family arrives rather than creating another required activity or public event.", "Any community element should offer flexible timing, calm alternatives, readable directions and places for caregivers and siblings when the provider considers them appropriate. No child should need to demonstrate enthusiasm for sports or participate in publicity. A family’s decision to decline an environmental feature, photograph or story should have no effect on care."] },
    { heading: "Research language requires precise Seattle boundaries", paragraphs: ["Research hospital is a search phrase and a long-term idea, not a claim that The Silver Guardian conducts research in Seattle. The organization does not recruit study participants, obtain consent for research, collect clinical data, oversee protocols or interpret findings. Those responsibilities remain with qualified research institutions and their ethics and privacy processes.", "If a provider-led environmental project were ever confirmed, public materials should identify exactly what community funding supports and what it does not. Supporting artwork, furnishings or an approved family space would not make The Silver Guardian a hospital builder or research sponsor. Until written agreements exist, every Seattle discussion remains exploratory."] },
  ],
  "fr-CA": [
    { heading: "Un concept adapté aux enfants à Seattle commence par le fournisseur", paragraphs: ["Un milieu pédiatrique de Seattle ne pourrait être aménagé dans un établissement de santé que si le fournisseur responsable choisissait de participer et dirigeait chaque décision. Les activités cliniques, la prévention des infections, les installations, l’expérience de l’enfant, l’accessibilité, la vie privée et les familles détermineraient ce qui convient. The Silver Guardian n’a annoncé aucun accord avec un fournisseur de Seattle et ne peut approuver une conception, une interaction avec un patient, une recherche ou une construction.", "Une idée inspirée du sport pourrait comprendre des œuvres facultatives, une signalisation, des éléments interactifs calmes ou des espaces accessibles sans effort physique. La culture du hockey de Seattle peut offrir un thème familier, mais aucun organisme professionnel n’est présenté comme partenaire. Les marques, présences d’athlètes, reconnaissances et photos exigeraient des autorisations distinctes et ne devraient jamais écarter le confort de l’enfant."] },
    { heading: "Les déplacements et la logistique familiale doivent guider la planification", paragraphs: ["Les familles peuvent venir de Ballard, Rainier Valley, West Seattle, Northgate ou de communautés autour du lac Washington et de Puget Sound. Une journée de soins peut comprendre autobus, train léger, traversier, appareil de mobilité, pont, I-5 ou rues locales. Le stationnement, les collines, la météo, les travaux et les correspondances ajoutent de l’incertitude. Un milieu accueillant devrait réduire les exigences à l’arrivée plutôt que créer une activité obligatoire.", "Tout élément communautaire devrait proposer un horaire souple, des options calmes, des indications lisibles et une place pour les proches lorsque le fournisseur le juge approprié. Aucun enfant ne devrait devoir aimer le sport ou participer à la publicité. Le refus d’une activité, d’une photo ou d’un récit ne doit jamais influencer les soins."] },
    { heading: "Le mot recherche exige des limites précises à Seattle", paragraphs: ["Hôpital de recherche est une expression de recherche et une idée à long terme, non une affirmation que The Silver Guardian mène des recherches à Seattle. L’organisme ne recrute aucun participant, n’obtient aucun consentement de recherche, ne recueille aucune donnée clinique, ne supervise aucun protocole et n’interprète aucun résultat. Ces responsabilités appartiennent aux établissements qualifiés et à leurs processus d’éthique et de confidentialité.", "Si un projet environnemental dirigé par un fournisseur était confirmé, les communications devraient préciser ce que finance l’appui communautaire. Des œuvres, du mobilier ou un espace familial approuvé ne feraient pas de The Silver Guardian un constructeur d’hôpital ou un promoteur de recherche. Sans entente écrite, toute discussion à Seattle demeure exploratoire."] },
  ],
};

const localMovementSections: Record<Locale, MontrealPageContent["sections"]> = {
  en: [
    { heading: "Movement Therapy Centers in Seattle would need a neighborhood-scale plan", paragraphs: ["Seattle has community and recreation spaces across central, north, south, southwest and northwest neighborhoods, but that does not mean any location is available to The Silver Guardian. A future movement pilot would need an approved operator and venue, then a practical description of entrances, transit, parking, hills, surfaces, washrooms, equipment, noise and caregiver space. A citywide label cannot replace those site-specific details.", "Travel options may include buses, light rail, ferries, walking, rolling with a mobility device or driving. A participant managing fatigue or an unpredictable care schedule may need a short session, easy cancellation and a quiet place to rest. Location decisions should be based on actual access and community feedback, not on a landmark address or a desire for visibility."] },
    { heading: "Seattle already understands that recreation requires adaptation", paragraphs: ["Seattle’s public recreation information recognizes specialized programs and accommodations for people with disabilities. That local context offers useful planning questions, but it does not establish a partnership or allow The Silver Guardian to claim another organization’s experience. Any future activity would need its own trained leadership, accommodation process, participant information and responsibility for safety.", "Dance, balance, rhythmic movement, adapted games or non-contact boxing-inspired drills could be considered only after the intended participants and safeguards are clear. Seated, standing, observation-based and low-sensory options should be planned from the start. No activity should be presented as treatment, prescribed exercise or a substitute for rehabilitation."] },
    { heading: "From Seattle interest to a confirmed pilot", paragraphs: ["An exploratory conversation with a community center, instructor, disability advocate, funder or healthcare professional is not an operating program. Before announcing a pilot, organizers would need written roles, insurance, background and qualification checks where appropriate, emergency procedures, consent, accessibility information, a budget and a feedback process.", "The Silver Guardian currently announces no Seattle Movement Therapy Center, partner, class, fee, registration or opening date. Supporters can read the framework, identify practical barriers and follow verified updates. They should not recruit participants, collect health information or promise that a Seattle activity is coming."] },
  ],
  "fr-CA": [
    { heading: "Les Centres de Seattle exigeraient un plan à l’échelle du quartier", paragraphs: ["Seattle possède des espaces communautaires et récréatifs dans ses secteurs centraux, nord, sud, sud-ouest et nord-ouest, mais aucun lieu n’est pour autant disponible à The Silver Guardian. Un futur projet pilote nécessiterait un exploitant et un lieu approuvés, puis une description des entrées, du transport, du stationnement, des collines, des surfaces, des toilettes, du matériel, du bruit et de la place pour les proches. Une étiquette municipale ne remplace pas ces détails.", "Les déplacements peuvent se faire en autobus, train léger, traversier, à pied, avec un appareil de mobilité ou en voiture. Une personne qui gère la fatigue ou un horaire de soins imprévisible peut avoir besoin d’une séance courte, d’une annulation facile et d’un lieu calme. Le choix du lieu devrait reposer sur l’accès réel et la rétroaction communautaire, et non sur sa visibilité."] },
    { heading: "Seattle reconnaît déjà que les loisirs exigent des adaptations", paragraphs: ["L’information publique sur les loisirs à Seattle reconnaît les programmes spécialisés et les accommodements pour les personnes handicapées. Ce contexte fournit des questions utiles, mais ne crée aucun partenariat et ne permet pas à The Silver Guardian de revendiquer l’expérience d’un autre organisme. Toute activité exigerait son propre encadrement formé, processus d’accommodement, information et responsabilité de sécurité.", "La danse, l’équilibre, le rythme, les jeux adaptés ou des exercices de boxe sans contact ne pourraient être envisagés qu’après avoir défini les participants et protections. Des options assises, debout, d’observation et peu stimulantes devraient être prévues dès le début. Aucune activité ne devrait être présentée comme traitement, exercice prescrit ou remplacement de la réadaptation."] },
    { heading: "De l’intérêt de Seattle à un projet pilote confirmé", paragraphs: ["Une conversation avec un centre communautaire, un instructeur, un défenseur des personnes handicapées, un bailleur de fonds ou un professionnel de la santé n’est pas un programme actif. Avant toute annonce, il faudrait des rôles écrits, une assurance, les vérifications pertinentes, des procédures d’urgence, le consentement, l’information sur l’accessibilité, un budget et un processus de rétroaction.", "The Silver Guardian n’annonce actuellement aucun Centre, partenaire, cours, tarif, inscription ou date d’ouverture à Seattle. Les gens peuvent lire le cadre, cerner les obstacles et suivre les mises à jour vérifiées. Ils ne devraient pas recruter de participants, recueillir de renseignements médicaux ou promettre une activité."] },
  ],
};

export function getSeattleTopicContent(slug: string, locale: Locale): MontrealPageContent | undefined {
  if (!seattleTopicSlugs.includes(slug as SeattleTopicSlug)) return undefined;
  const isFrench = locale === "fr-CA";
  const isHospital = slug === "kid-friendly-research-hospitals";
  const base = isHospital ? kidFriendlyResearchHospitalContent[locale] : movementTherapyCenterContent[locale];

  return {
    ...base,
    title: isHospital
      ? (isFrench ? "Hôpitaux adaptés aux enfants à Seattle" : "Kid-Friendly Research Hospital Seattle")
      : (isFrench ? "Thérapie par le mouvement à Seattle" : "Movement Therapy Centers in Seattle"),
    description: isHospital
      ? (isFrench ? "Découvrez une vision prudente de milieux de recherche pédiatrique à Seattle, conçus avec des fournisseurs volontaires et inspirés du sport." : "Explore a careful vision for kid-friendly research hospital environments in Seattle shaped with willing providers and inspired by sports.")
      : (isFrench ? "Découvrez un concept prudent de centres de thérapie par le mouvement accessibles, artistiques et adaptés à Seattle." : "Explore a careful concept for accessible Movement Therapy Centers in Seattle built around artistic and adapted activity."),
    keywords: isHospital
      ? (isFrench ? ["hôpitaux de recherche adaptés aux enfants Seattle", "milieu pédiatrique Seattle", "hôpital sportif Seattle"] : ["kid-friendly research hospitals Seattle", "children's research hospital Seattle", "sports-themed pediatric environment Seattle"])
      : (isFrench ? ["centres de thérapie par le mouvement Seattle", "exercice adapté Seattle", "mouvement accessible Seattle"] : ["Movement Therapy Centers Seattle", "adapted exercise Seattle", "accessible movement Seattle"]),
    eyebrow: isHospital
      ? (isFrench ? "Milieux pédiatriques à Seattle" : "Seattle pediatric environments")
      : (isFrench ? "Mouvement accessible à Seattle" : "Accessible movement in Seattle"),
    heading: isHospital
      ? (isFrench ? "Une vision d’hôpitaux de recherche adaptés aux enfants à Seattle" : "A vision for kid-friendly research hospitals in Seattle")
      : (isFrench ? "Des centres de thérapie par le mouvement accessibles à Seattle" : "Accessible Movement Therapy Centers in Seattle"),
    introduction: isHospital
      ? (isFrench ? "À Seattle, un milieu pédiatrique inspiré du sport devrait respecter les soins, les déplacements, la vie privée, l’accessibilité et les choix de chaque famille. The Silver Guardian explore comment soutenir un projet non clinique uniquement si un fournisseur volontaire en dirige la portée et les protections. Aucun partenariat, hôpital ou projet de construction à Seattle n’est annoncé." : "In Seattle, a sports-inspired pediatric environment would need to respect care, travel, privacy, accessibility and each family’s choices. The Silver Guardian is exploring how it could support a non-clinical project only if a willing healthcare provider led its scope and safeguards. No Seattle partnership, hospital or construction project is announced.")
      : (isFrench ? "À Seattle, un concept de mouvement utile devrait tenir compte des quartiers, des collines, du transport, de l’accessibilité et d’une énergie changeante. The Silver Guardian explore des activités communautaires artistiques et adaptées; il n’offre actuellement aucun centre, traitement, réadaptation, cours ou processus d’inscription à Seattle." : "In Seattle, a useful movement concept would need to account for neighborhoods, hills, transportation, accessibility and changing energy. The Silver Guardian is exploring artistic and adapted community activity; it does not currently offer a Seattle center, treatment, rehabilitation, class or registration process."),
    sections: [...(isHospital ? localHospitalSections[locale] : localMovementSections[locale]), ...base.sections],
    relatedHeading: isFrench ? "Explorer les trois ressources de Seattle" : "Explore all three Seattle resources",
    relatedLinks: seattleLinks(locale).filter((link) => !link.href.endsWith(`/${slug}/`)),
    faqs: [
      { question: isFrench ? "Ce concept est-il actuellement offert à Seattle?" : "Is this concept currently available in Seattle?", answer: isFrench ? "Non. Aucun lieu, partenaire, programme, service, horaire ou processus d’inscription à Seattle n’est annoncé." : "No. No Seattle location, partner, program, service, schedule or registration process is announced." },
      ...base.faqs,
    ],
    closingHeading: isFrench ? "Revenir au carrefour de Seattle" : "Return to the Seattle service-area hub",
    closingText: isFrench ? "Comparez les ressources de Seattle et suivez uniquement les mises à jour confirmées pendant que The Silver Guardian explore des relations et des protections responsables." : "Compare the Seattle resources and follow only confirmed updates as The Silver Guardian explores responsible relationships and safeguards.",
    ctaLabel: isFrench ? "Explorer le carrefour de Seattle" : "Explore the Seattle hub",
    ctaHref: "/seattle/",
  };
}

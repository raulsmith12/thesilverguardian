import type { StaticImageData } from "next/image";

type Faq = { question: string; answer: string };
type RelatedLink = { href: string; label: string; description: string };
type Section = {
  heading: string;
  headingLevel?: 2 | 3;
  paragraphs: string[];
  bullets?: string[];
  links?: RelatedLink[];
};

export type GeoPageContent = {
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heading: string;
  introduction: string;
  imageLabel: string;
  imageAlt: string;
  heroAsset?: { src: StaticImageData; alt: string };
  heroSecondaryAsset?: { src: StaticImageData; alt: string };
  supportingImages?: { label: string; alt: string }[];
  supportingImageAssets?: { src: StaticImageData; alt: string }[];
  supportingImageSet?: "hockey-wishes" | "pediatric-care" | "hospital-wishes" | "movement-therapy";
  flowBanner?: {
    beforeHeading: string;
    eyebrow: string;
    title: string;
    href?: string;
    linkLabel?: string;
  };
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

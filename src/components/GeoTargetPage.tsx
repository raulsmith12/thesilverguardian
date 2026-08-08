import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { localizedPath, type Locale } from "@/lib/i18n";
import type { MontrealPageContent } from "@/lib/montrealContent";
import montrealSkylineImage from "@/img/marc-olivier-jodoin-BG9oZ15a4Xk-unsplash.jpg";
import hockeyPlayerImage from "@/img/gerhard-crous-doivHPaG-Vw-unsplash.jpg";
import neonHockeyGoalImage from "@/img/hockey-goal.jpg";
import pediatricianWithBabyImage from "@/img/aditya-romansa-5zp0jym2w9M-unsplash.jpg";
import pediatricianWithTeddyImage from "@/img/derek-finch-Gi8Q8IfpxdY-unsplash.jpg";
import hospitalTeddyImage from "@/img/ortopediatri-cocuk-ortopedi-akademisi-8JjW4xVwQqc-unsplash.jpg";
import childWithPediatricianImage from "@/img/national-cancer-institute-vbuR2q56EZM-unsplash.jpg";
import raleighDurhamSkylineImage from "@/img/tj-wallace-qa5ouCk-Xoo-unsplash.jpg";
import movementTrainingImage from "@/img/lorenzo-fatto-offidani-de5OZMjb5ww-unsplash.jpg";
import groupMovementImage from "@/img/gabin-vallet-J154nEkpzlQ-unsplash.jpg";

export function GeoTargetPage({ content, locale }: { content: MontrealPageContent; locale: Locale }) {
  const isRaleighDurham = content.heroImage === "raleigh-durham";
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation locale={locale} />
      <main className="flex-1">
        <section className="geo-hero">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="geo-eyebrow">{content.eyebrow}</p>
              <h1>{content.heading}</h1>
              <p className="geo-intro">{content.introduction}</p>
            </div>
            <div className="geo-hero-image">
              <Image
                src={isRaleighDurham ? raleighDurhamSkylineImage : montrealSkylineImage}
                alt={isRaleighDurham
                  ? locale === "fr-CA"
                    ? "Vue du centre-ville de Raleigh, en Caroline du Nord, près des voies ferrées"
                    : "View of downtown Raleigh, North Carolina near railroad tracks"
                  : locale === "fr-CA"
                    ? "Vue de Montréal, Québec, Canada depuis le fleuve Saint-Laurent"
                    : "View of Montreal, Quebec, Canada from the St. Lawrence River"}
                fill
                placeholder="blur"
                priority
                sizes="(max-width: 767px) calc(100vw - 3rem), 40vw"
                unoptimized
              />
            </div>
          </div>
        </section>

        <div className="geo-content mx-auto w-full max-w-4xl px-6 py-16">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}

          <section className="geo-independent-role" aria-labelledby="independent-role-heading">
            <h2 id="independent-role-heading">{locale === "fr-CA" ? "Un rôle communautaire indépendant" : "An independent community role"}</h2>
            <p>{locale === "fr-CA"
              ? "The Silver Guardian ne possède, n’exploite, ne gère, ne dirige et ne représente aucun hôpital, clinique ni fournisseur de soins. L’organisme n’exerce aucune autorité sur les soins, les décisions médicales, les programmes hospitaliers ou les recommandations. Toute initiative présentée sur cette page est indépendante et ne doit pas être interprétée comme un service clinique ou une affiliation hospitalière."
              : "The Silver Guardian does not own, operate, manage, direct or represent any hospital, clinic or healthcare provider. The organization has no authority over care, medical decisions, hospital programs or referrals. Every initiative described on this page is independent and should not be interpreted as a clinical service or hospital affiliation."}</p>
          </section>

          {content.supportingImageSet === "hockey-wishes" && (
            <div className="geo-supporting-images" aria-label={locale === "fr-CA" ? "Images de hockey" : "Hockey images"}>
              <div className="geo-supporting-image">
                <Image
                  src={hockeyPlayerImage}
                  alt={locale === "fr-CA" ? "Joueur de hockey tirant une rondelle pour tenter de marquer un but" : "Hockey player shooting a puck for a potential goal"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="geo-supporting-image">
                <Image
                  src={neonHockeyGoalImage}
                  alt={locale === "fr-CA" ? "But de hockey vide éclairé en bleu néon" : "Empty hockey goal lit up in neon blue"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          )}

          {content.supportingImageSet === "pediatric-care" && (
            <div className="geo-supporting-images" aria-label={locale === "fr-CA" ? "Images de soins pédiatriques" : "Pediatric care images"}>
              <div className="geo-supporting-image">
                <Image
                  src={pediatricianWithBabyImage}
                  alt={locale === "fr-CA" ? "Pédiatre prenant soin d’un bébé" : "Pediatrician caring for baby"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="geo-supporting-image">
                <Image
                  src={pediatricianWithTeddyImage}
                  alt={locale === "fr-CA" ? "Pédiatre prenant soin d’un ourson en peluche pendant des soins pédiatriques" : "Pediatrician caring for stuffed teddy bear during pediatric care"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          )}

          {content.supportingImageSet === "hospital-wishes" && (
            <div className="geo-supporting-images" aria-label={locale === "fr-CA" ? "Images de souhaits à l’hôpital" : "Hospital wish images"}>
              <div className="geo-supporting-image">
                <Image
                  src={hospitalTeddyImage}
                  alt={locale === "fr-CA" ? "Enfant devant un pédiatre pouvant potentiellement recevoir un souhait à l’hôpital" : "Child in front of pediatrician potentially getting a hospital wish"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="geo-supporting-image">
                <Image
                  src={childWithPediatricianImage}
                  alt={locale === "fr-CA" ? "Dessin inspirant dans un hôpital encourageant les enfants à ne jamais abandonner" : "Inspirational drawing in hospital urging kids to never give up"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          )}

          {content.supportingImageSet === "movement-therapy" && (
            <div className="geo-supporting-images" aria-label={locale === "fr-CA" ? "Images de thérapie par le mouvement" : "Movement therapy images"}>
              <div className="geo-supporting-image">
                <Image
                  src={movementTrainingImage}
                  alt={locale === "fr-CA" ? "Athlète participant à un entraînement de mouvement avec des gants de boxe" : "Athlete participating in movement training with boxing gloves"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="geo-supporting-image">
                <Image
                  src={groupMovementImage}
                  alt={locale === "fr-CA" ? "Groupe participant à des exercices de mouvement adaptés à l’extérieur" : "Group participating in adapted outdoor movement exercises"}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </div>
          )}

          {!content.supportingImageSet && content.supportingImages && (
            <div className="geo-supporting-images" aria-label={locale === "fr-CA" ? "Images de soutien" : "Supporting images"}>
              {content.supportingImages.map((image) => (
                <div className="geo-image-placeholder" role="img" aria-label={image.alt} key={image.alt}>
                  <span aria-hidden="true">{image.label}</span>
                </div>
              ))}
            </div>
          )}

          <section aria-labelledby="related-geo-pages">
            <h2 id="related-geo-pages">{content.relatedHeading}</h2>
            <div className="geo-related-grid">
              {content.relatedLinks.map((link) => (
                <article key={link.href}>
                  <h3><Link href={localizedPath(link.href, locale)}>{link.label}</Link></h3>
                  <p>{link.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="geo-faq-heading">
            <h2 id="geo-faq-heading">{content.faqHeading}</h2>
            <div className="geo-faq-list">
              {content.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="geo-closing">
            <h2>{content.closingHeading}</h2>
            <p>{content.closingText}</p>
            <Link className="site-button site-button--secondary" href={localizedPath(content.ctaHref, locale)}>{content.ctaLabel}</Link>
          </section>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

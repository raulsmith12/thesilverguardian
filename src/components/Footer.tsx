import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const isFrench = locale === "fr-CA";

  return (
    <footer id="contact" className="site-footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year}. {isFrench ? "Tous droits réservés. Site créé par" : "All rights reserved. Site created by"} <a href="https://galacticdigitalstudios.com" target="_blank" rel="noopener noreferrer">Galactic Digital Studios</a>.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link className="transition" href={localizedPath("/", locale)}>
            {isFrench ? "Accueil" : "Home"}
          </Link>
          <Link className="transition" href={localizedPath("/privacy", locale)}>
            {isFrench ? "Confidentialité" : "Privacy"}
          </Link>
          <Link className="transition" href={localizedPath("/overview", locale)}>
            {isFrench ? "Aperçu" : "Overview"}
          </Link>
          <Link className="transition" href={localizedPath("/contact", locale)}>
            {isFrench ? "Nous joindre" : "Contact"}
          </Link>
          <a
            aria-label={isFrench ? "The Silver Guardian sur Instagram" : "The Silver Guardian on Instagram"}
            className="transition"
            href="https://www.instagram.com/silverguardian09"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect height="18" rx="5" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" fill="currentColor" r="1" />
            </svg>
          </a>
          <a
            aria-label={isFrench ? "The Silver Guardian sur Facebook" : "The Silver Guardian on Facebook"}
            className="transition"
            href="https://www.facebook.com/share/19R2nB27o5/?mibextid=wwXIfr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 21v-8h2.75l.41-3.2H13.5V7.76c0-.93.26-1.56 1.59-1.56h1.7V3.34a22.8 22.8 0 0 0-2.48-.13c-2.45 0-4.13 1.5-4.13 4.25V9.8H7.4V13h2.78v8h3.32Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

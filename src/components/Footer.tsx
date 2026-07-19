import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const isFrench = locale === "fr-CA";

  return (
    <footer id="contact" className="site-footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year}. {isFrench ? "Tous droits réservés. Site créé par" : "All rights reserved. Site created by"} <a href="https://galacticdigitalstudios.com" target="_blank" rel="noopener noreferrer">Galactic Digital Studios</a>.</p>
        <div className="flex gap-5">
          <Link className="transition" href={localizedPath("/", locale)}>
            {isFrench ? "Accueil" : "Home"}
          </Link>
          <Link className="transition" href={localizedPath("/privacy", locale)}>
            {isFrench ? "Confidentialité" : "Privacy"}
          </Link>
          <Link className="transition" href={localizedPath("/contact", locale)}>
            {isFrench ? "Nous joindre" : "Contact"}
          </Link>
        </div>
      </div>
    </footer>
  );
}

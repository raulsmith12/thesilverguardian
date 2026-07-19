"use client";

import { usePathname, useRouter } from "next/navigation";
import { type ChangeEvent, useEffect } from "react";
import { FRENCH_PREFIX } from "@/lib/i18n";

function languagePath(pathname: string, language: "en" | "fr-CA") {
  const englishPath = pathname.startsWith(FRENCH_PREFIX)
    ? pathname.slice(FRENCH_PREFIX.length) || "/"
    : pathname;

  return language === "fr-CA"
    ? `${FRENCH_PREFIX}${englishPath === "/" ? "/" : englishPath}`
    : englishPath;
}

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const language = pathname.startsWith(FRENCH_PREFIX) ? "fr-CA" : "en";

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("silver-guardian-language");

    if ((savedLanguage === "en" || savedLanguage === "fr-CA") && savedLanguage !== language) {
      router.replace(languagePath(pathname, savedLanguage));
    }
  }, [language, pathname, router]);

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLanguage = event.target.value as "en" | "fr-CA";
    window.localStorage.setItem("silver-guardian-language", nextLanguage);
    router.push(languagePath(pathname, nextLanguage));
  }

  return (
    <div className="language-tab">
      <label htmlFor="site-language">
        <span className="sr-only">
          {language === "fr-CA" ? "Choisir la langue" : "Choose language"}
        </span>
        <select
          id="site-language"
          aria-label={language === "fr-CA" ? "Choisir la langue" : "Choose language"}
          value={language}
          onChange={handleChange}
        >
          <option value="en">English</option>
          <option value="fr-CA">Français (Canada)</option>
        </select>
      </label>
    </div>
  );
}

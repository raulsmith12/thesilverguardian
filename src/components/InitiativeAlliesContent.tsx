import type { Locale } from "@/lib/i18n";

export function InitiativeAlliesContent({ locale = "en" }: { locale?: Locale }) {
  return (
    <div className="initiative-allies">
      <div className="initiative-allies__circles" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => (
          <div className="initiative-allies__circle" key={index}>?</div>
        ))}
      </div>
      <h2>{locale === "fr-CA" ? "Revenez bientôt" : "Check Back Soon"}</h2>
    </div>
  );
}

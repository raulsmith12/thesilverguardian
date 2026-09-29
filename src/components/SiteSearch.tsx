"use client";

import { useEffect, useRef, useState } from "react";
import { searchPages, type SearchPage } from "@/lib/siteSearch";
import type { Locale } from "@/lib/i18n";

let cachedPages: SearchPage[] | undefined;

export function SiteSearch({ locale, open, onClose }: { locale: Locale; open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState<SearchPage[] | undefined>(cachedPages);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const french = locale === "fr-CA";
  const title = french ? "Rechercher sur le site" : "Search the site";

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    input.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  useEffect(() => {
    if (!open || pages) return;
    const controller = new AbortController();
    fetch("/search-index.json", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Search index unavailable");
        return response.json() as Promise<SearchPage[]>;
      })
      .then((data) => { cachedPages = data; setPages(data); })
      .catch((reason) => { if (reason.name !== "AbortError") setError(true); });
    return () => controller.abort();
  }, [open, pages, attempt]);

  const results = searchPages(pages ?? [], query, locale);
  const close = () => dialog.current?.close();

  return (
    <>
      <dialog ref={dialog} className="site-search" aria-labelledby="site-search-title" onClose={onClose} onClick={(event) => { if (event.target === dialog.current) close(); }}>
        <div className="site-search__panel">
          <div className="site-search__heading">
            <h2 id="site-search-title">{title}</h2>
            <button type="button" className="site-search__close" onClick={close} aria-label={french ? "Fermer" : "Close search"}>×</button>
          </div>
          <label htmlFor="site-search-input">{french ? "Que recherchez-vous?" : "What are you looking for?"}</label>
          <input ref={input} id="site-search-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={french ? "Rechercher un sujet, une ville, un événement…" : "Search topics, cities, events…"} autoComplete="off" />
          <p className="site-search__status" role="status">
            {error ? (french ? "La recherche est indisponible. Veuillez réessayer." : "Search is unavailable. Please try again.")
              : !pages ? (french ? "Chargement…" : "Loading search…")
              : !query.trim() ? (french ? "Saisissez des mots pour explorer le site." : "Enter keywords to explore the site.")
              : results.length ? (french ? `${results.length} résultat(s)` : `${results.length} result${results.length === 1 ? "" : "s"}`)
              : (french ? "Aucun résultat. Essayez d’autres mots." : "No results found. Try different keywords.")}
          </p>
          {error && <button type="button" onClick={() => { setError(false); setAttempt(attempt + 1); }}>{french ? "Réessayer" : "Try again"}</button>}
          <ul className="site-search__results">
            {results.map((result) => <li key={result.url}><a href={result.url} onClick={close}><h3>{result.title}</h3><p>{result.excerpt}</p><span>{result.url}</span></a></li>)}
          </ul>
        </div>
      </dialog>
    </>
  );
}

export type SearchPage = { url: string; title: string; text: string; locale: string };

export function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function searchPages(pages: SearchPage[], query: string, locale: string) {
  const terms = normalizeSearch(query).match(/[\p{L}\p{N}]+/gu) ?? [];
  if (!terms.length) return [];
  return pages.flatMap((page) => {
    const title = normalizeSearch(page.title);
    const content = normalizeSearch(page.text);
    if (!terms.every((term) => `${title} ${content}`.includes(term))) return [];
    const score = terms.reduce((total, term) => total + (title.includes(term) ? 10 : 1), 0) + (page.locale === locale ? 2 : 0);
    const position = Math.max(0, content.indexOf(terms[0] ?? ""));
    const start = Math.max(0, page.text.lastIndexOf(' ', Math.max(0, position - 60)));
    const excerpt = `${start ? '…' : ''}${page.text.slice(start, start + 220).trim()}${page.text.length > start + 220 ? '…' : ''}`;
    return [{ ...page, score, excerpt }];
  }).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

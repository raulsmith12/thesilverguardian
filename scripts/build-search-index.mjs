import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Index rendered main content so shared navigation, scripts, and footers do not
// produce false matches. New statically exported routes are included automatically.
const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
function plainText(html) {
  return html
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\/?(?:p|div|section|article|h[1-6]|li|ul|ol|br|hr|td|th|tr|aside)\b[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (match, entity) => {
      if (entity[0] !== '#') return entities[entity] ?? match;
      const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
      return code <= 0x10ffff ? String.fromCodePoint(code) : match;
    })
    .replace(/\s+/g, ' ').trim();
}
async function collect(directory) {
  const pages = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('_') || entry.name === '404') continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) pages.push(...await collect(file));
    else if (entry.name === 'index.html') {
      const html = await readFile(file, 'utf8');
      const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
      if (!main) continue;
      const relative = path.relative('out', directory).split(path.sep).join('/');
      const url = relative ? `/${relative}/` : '/';
      const title = plainText(main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? url);
      pages.push({ url, title, text: plainText(main), locale: url.startsWith('/fr-ca/') ? 'fr-CA' : 'en' });
    }
  }
  return pages;
}
const pages = (await collect('out')).sort((a, b) => a.url.localeCompare(b.url));
if (!pages.length) throw new Error('No searchable exported pages found.');
const json = JSON.stringify(pages);
await writeFile('out/search-index.json', json);
// Keep the most recent built index available to next dev as well.
await writeFile('public/search-index.json', json);
console.log(`Search index generated: ${pages.length} pages.`);

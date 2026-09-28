# Site search

The final navigation button opens a keyboard-accessible search dialog. Search runs in the browser and includes English and French page content, prioritizing title matches and the current language. All query words must occur in a result; matching ignores case and accents.

`npm run build` and `npm run export:frontend` generate `out/search-index.json` from the exported HTML. The index contains each page’s main content, excluding shared navigation and footers, and automatically includes newly exported routes. Deploy the full `out` directory as usual.

A copy is written to `public/search-index.json` for local development. Run a build before testing search on a fresh checkout, and rebuild after content changes to refresh the development index. Both index copies are generated and ignored by Git.

Run search checks after building:

```sh
npx tsx --test scripts/site-search.test.ts
```

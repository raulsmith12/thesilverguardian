<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project content standards

- For city-targeted SEO/AEO page series, follow [`docs/geotarget-seo-pages.md`](docs/geotarget-seo-pages.md).
- Keep image rendering compatible with `output: "export"`. Preserve the global
  `images.unoptimized` setting unless a static-export-compatible custom image
  loader is intentionally introduced; do not rely on Next.js runtime image
  optimization.

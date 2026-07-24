# Geotarget SEO/AEO page standard

Use this standard when adding a city or regional page series to The Silver Guardian website.

## Required page set and routing

- Add one city landing page and one focused page per approved keyword.
- Keep English at `/{city}/...` and Canadian French at `/fr-ca/{city}/...`.
- Use matching slugs across languages so the existing locale helper can create canonical and `hreflang` alternates.
- Add every route to `src/app/sitemap.ts`.
- Prefer the shared `GeoTargetPage` component and city content data pattern. Extend the pattern for another city instead of copying the full page markup.

## Copy requirements

- Write a keyword-relevant H1 and clear H2 headings.
- Open by connecting the topic to real needs of families or supporters in the target city.
- Include credible local details that affect the subject; do not merely replace a city name in generic copy.
- Explain why a reader may need or support the initiative, what The Silver Guardian currently offers or proposes, and how its process or community approach works.
- Base all claims on current website content. Distinguish goals and concepts from operating programs, facilities, partners or dates.
- Do not imply clinical services, medical advice, eligibility, hospital affiliation or confirmed events unless the site contains verified details.
- Do not include testimonials or contact details in page copy.
- Avoid unsupported phrases such as “premier provider,” “cutting-edge solutions,” “your trusted partner” and “one-stop shop.”
- Add natural internal links using descriptive anchor text, an FAQ with realistic questions and direct answers, and a closing next step without contact information.
- Provide equally useful Canadian French localization rather than a shortened translation.
- Each keyword-targeted page must contain at least 1,000 words of useful, visible body copy in each language. Metadata and structured-data-only text do not count toward this minimum. The city landing page may be shorter when it functions primarily as a navigation hub.

## SEO and AEO implementation

- Keep each metadata title at 60 characters or fewer and each description at 160 characters or fewer.
- Include the target query and city naturally in the title, description, H1, body and at least one subheading where appropriate.
- Generate canonical and English/French alternate URLs through `createPageMetadata`.
- Render FAQ content visibly and include matching `FAQPage` structured data.
- Use one descriptive H1, semantic sections, lists where helpful and concise, self-contained answers that AI search systems can quote accurately.
- Include at least three relevant images on every keyword-targeted page. Until approved images are supplied, render three clearly labelled image placeholders with distinct, useful alternative text.

## Quality checks

- Run `npm run lint` and `npm run build`.
- Verify title and description lengths in both languages.
- Verify that every localized keyword page contains at least 1,000 visible words and at least three images or image placeholders.
- Confirm every internal link, canonical alternate and sitemap URL uses the intended locale.
- Review all copy for unsupported operational claims and accidental contact information.

# Salem Pain Clinic

Next.js website for Salem Pain & Palliative Care Clinic. Run these commands from the `salem-pain-clinic` directory.

```sh
npm ci
cp .env.local.example .env.local
npm run dev
```

Open [localhost:3000](http://localhost:3000). The pages work without credentials. Fill in the email settings to send contact requests through Resend, or configure a webhook. Common clinic questions work without an API key. Set `GEMINI_API_KEY` for other chat questions.

```sh
npm run build
npx playwright install chromium
npm run test:e2e
```

Clinic hours, address, and phone numbers live in `lib/constants.js`. The site design is documented in [DESIGN.md](DESIGN.md). GitHub Actions runs the build and Playwright suite from this directory. Vercel hosts the site using this directory as its project root.

## Search and local discovery

The canonical origin is `https://www.thesalempainclinic.com`. Vercel permanently redirects the apex domain to it with HTTP 308, preserving paths and query strings. English uses the existing eight public URLs; Tamil uses `/ta` and `/ta/...`. Middleware resolves the language from the URL, so both versions render complete content without JavaScript or cookies. Header and footer links preserve the language. Each page declares its own canonical URL and reciprocal `en-IN`, `ta-IN` and `x-default` alternates, following [Google's multilingual site guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

- `lib/seo.js` is the page title, description, language-link and clinic/doctor schema source. Translate new strings in `lib/tamil.json`.
- `components/StructuredData.js` renders page and breadcrumb schema. FAQ schema uses the same `lib/faq.js` answers as the visible page. Do not add ratings, social profiles, qualifications or medical outcome claims without verified sources. Structured data does not guarantee a special search appearance.
- `/sitemap.xml` generates all 16 public URLs and their language alternates. Dates are omitted rather than reporting invented modification dates. Add new public pages to `pages` in `lib/seo.js`.
- `/robots.txt` allows rendering resources and excludes API endpoints. Missing pages return 404 with `noindex`; API responses carry `X-Robots-Tag: noindex, nofollow`.
- `/og` generates the 1200 × 630 branded social preview at build time. Page metadata is included in the initial HTML head for search and share crawlers.
- The clinic map coordinates match its Google Maps listing. PIN **636004** was confirmed by the owner on 10 November 2026; opening hours match the Business Profile. Keep name, address, phones and hours consistent when changing either source.

Run `npm run build`, `npm run lint` and `npm run test:e2e` before release. The 19-test suite covers raw HTML metadata and schema on all 16 URLs, crawl resources, real 404s, language navigation, mobile layout, contact form states and clinic chat. Contact delivery is mocked in browser tests. Use `PLAYWRIGHT_BASE_URL` to run against a separately built local server.

Google Search Console and Business Profile already exist. Submit the canonical sitemap in the domain property after route changes, and inspect important new URLs. Google's crawl, indexing and ranking decisions are separate from passing website tests. Review Search Console coverage and queries after Google has recrawled; use real, clinician-reviewed content to address patient questions rather than creating duplicate location or keyword pages.

Release verification, 10 November 2026: production build and lint passed; all 19 local regression tests passed and all five SEO checks passed against production. Mobile Lighthouse on the live English homepage measured performance 99, accessibility 100, best practices 100 and SEO 100 (previously 98/100/100/92); Tamil measured 98/100/100/100. LCP was 1.6 seconds for English and 2.3 seconds for Tamil, with CLS 0 for both in those runs; lab results vary with network and device. Search Console fetched the submitted sitemap successfully and discovered all 16 URLs. Indexing requests for `/ta` and `/contact` were accepted into Google’s crawl queue; this is not confirmation that those pages are indexed yet. Business Profile now shows the canonical HTTPS website URL and owner-confirmed PIN 636004. Its existing “Hospital” category was retained; review whether a more specific category accurately represents the registered practice before changing it.

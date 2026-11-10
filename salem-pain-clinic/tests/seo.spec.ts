import { test, expect } from '@playwright/test';

const origin = 'https://www.thesalempainclinic.com';
const paths = ['/', '/services', '/about', '/contact', '/faq', '/privacy', '/terms', '/disclaimer'];
const localPath = (path: string, language: string) => language === 'ta' ? '/ta' + (path === '/' ? '' : path) : path;

for (const language of ['en', 'ta']) {
  test(`${language} pages deliver complete search metadata and structured data without JavaScript`, async ({ request }) => {
    const titles = new Set();
    for (const path of paths) {
      const localized = localPath(path, language);
      const response = await request.get(localized, { headers: { Cookie: `clinic-language=${language === 'ta' ? 'en' : 'ta'}`, 'x-clinic-language': language === 'ta' ? 'en' : 'ta' } });
      expect(response.status(), localized).toBe(200);
      const html = await response.text();
      expect(html).toContain(`<html lang="${language}"`);
      const head = html.split('</head>')[0];
      const title = head.match(/<title>(.*?)<\/title>/)?.[1];
      expect(title).toBeTruthy();
      expect(titles.has(title), `Unique title for ${localized}`).toBe(false);
      titles.add(title);
      expect(head).toMatch(/<meta name="description" content="[^"]+"/);
      expect(new URL(head.match(/rel="canonical" href="([^"]+)"/)![1]).href).toBe(origin + localized);
      for (const [lang, url] of [['en-IN', path], ['ta-IN', localPath(path, 'ta')], ['x-default', path]]) {
        const alternate = head.match(new RegExp(`hrefLang="${lang}" href="([^"]+)"`));
        expect(new URL(alternate![1]).href).toBe(origin + url);
      }
      expect(new URL(head.match(/property="og:url" content="([^"]+)"/)![1]).href).toBe(origin + localized);
      expect(head).toContain(`property="og:image" content="${origin}/og"`);
      expect(head).not.toContain('noindex');
      const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
      const nodes = graphs.flatMap(graph => graph['@graph'] || [graph]);
      expect(nodes.filter(node => node['@type'] === 'MedicalClinic')).toHaveLength(1);
      expect(nodes.some(node => node['@id'] === `${origin}${localized}#webpage`)).toBe(true);
      expect(nodes.find(node => node['@type'] === 'Person').honorificSuffix).toBe('MBBS, MD, DA, DFID');
      expect(nodes.find(node => node['@type'] === 'MedicalClinic').geo.longitude).toBe(78.128784);
      if (path !== '/') expect(nodes.find(node => node['@type'] === 'BreadcrumbList').itemListElement).toHaveLength(2);
      if (path === '/faq') {
        const faq = nodes.find(node => node['@type'] === 'FAQPage');
        expect(faq.mainEntity).toHaveLength(15);
        if (language === 'ta') expect(faq.mainEntity[0].name).toMatch(/[\u0B80-\u0BFF]/);
      }
      expect(html).not.toContain('x-debug-');
    }
  });
}

test('sitemap, robots and share image expose only valid public resources', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.ok()).toBe(true);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  expect(new Set(urls).size).toBe(16);
  for (const path of paths) for (const language of ['en', 'ta']) expect(urls).toContain(origin + localPath(path, language));
  expect(xml).not.toContain('2025-');
  expect(xml).toContain('hreflang="ta-IN"');
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toContain('Disallow: /api/');
  expect(robots).not.toContain('Disallow: /_next/');
  expect(robots).toContain(`${origin}/sitemap.xml`);
  const og = await request.get('/og');
  expect(og.status()).toBe(200);
  expect(og.headers()['content-type']).toContain('image/png');
  const png = await og.body();
  expect(png.readUInt32BE(16)).toBe(1200);
  expect(png.readUInt32BE(20)).toBe(630);
});

test('missing pages return 404 and cannot be indexed', async ({ request }) => {
  for (const path of ['/missing-seo-check', '/ta/missing-seo-check', '/ta/api/chat']) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(404);
    expect(await response.text()).toContain('noindex');
  }
});

test('Tamil navigation uses crawlable URLs and search metadata follows client navigation', async ({ page }) => {
  await page.goto('/ta');
  await expect(page.getByRole('link', { name: 'Switch to English' })).toHaveAttribute('href', '/');
  const nav = page.locator('.landing-nav');
  await expect(nav.locator('a[href="/ta/services"]')).toHaveCount(1);
  await nav.locator('a[href="/ta/services"]').click();
  await expect(page).toHaveURL(/\/ta\/services$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ta');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', origin + '/ta/services');
  await page.getByRole('link', { name: 'Switch to English' }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', origin + '/services');
});

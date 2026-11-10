import { pages, pageUrl, languageAlternates } from '@/lib/seo';

export default function sitemap() {
  return Object.keys(pages).flatMap(path => ['en', 'ta'].map(language => ({
    url: pageUrl(path, language), alternates: { languages: languageAlternates(path) },
  })));
}

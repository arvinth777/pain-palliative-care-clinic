import { getLanguage } from '@/lib/server-language';
import { pages, pageUrl } from '@/lib/seo';
import { WEBSITE_URL } from '@/lib/constants';
import { faqCategories } from '@/lib/faq';

export default function StructuredData({ data, id }) {
  return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export async function PageSchema({ path }) {
  const { language, t } = await getLanguage();
  const url = pageUrl(path, language);
  const page = {
    '@type': path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : path === '/faq' ? 'FAQPage' : 'WebPage',
    '@id': `${url}#webpage`, url, name: t(pages[path].title), description: t(pages[path].description),
    inLanguage: language === 'ta' ? 'ta-IN' : 'en-IN', isPartOf: { '@id': `${WEBSITE_URL}/#website` }, about: { '@id': `${WEBSITE_URL}/#clinic` },
  };
  if (path === '/about') page.mainEntity = { '@id': `${WEBSITE_URL}/#doctor` };
  if (path === '/faq') page.mainEntity = faqCategories.flatMap(category => category.faqs.map(({ question, answer }) => ({ '@type': 'Question', name: t(question), acceptedAnswer: { '@type': 'Answer', text: t(answer) } })));
  const graph = [page];
  if (path !== '/') {
    page.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('Home'), item: pageUrl('/', language) },
      { '@type': 'ListItem', position: 2, name: t(pages[path].label), item: url },
    ] });
  }
  return <StructuredData id="page-schema" data={{ '@context': 'https://schema.org', '@graph': graph }} />;
}

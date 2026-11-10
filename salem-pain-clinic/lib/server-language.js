import { headers } from 'next/headers';
import { translator } from './i18n';

export async function getLanguage() {
  const language = (await headers()).get('x-clinic-language') === 'ta' ? 'ta' : 'en';
  return { language, t: translator(language) };
}

export async function localizeMetadata(metadata) {
  const { language, t } = await getLanguage();
  if (language === 'en') return metadata;
  const title = t(metadata.title);
  const description = t(metadata.description);
  return {
    ...metadata, title, description,
    ...(metadata.openGraph && { openGraph: { ...metadata.openGraph, title, description, siteName: t('Salem Pain Clinic'), locale: 'ta_IN' } }),
    ...(metadata.twitter && { twitter: { ...metadata.twitter, title, description } }),
  };
}

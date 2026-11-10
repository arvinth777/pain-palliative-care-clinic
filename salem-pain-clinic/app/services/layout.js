import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';

export default function Layout({ children }) {
  return <><PageSchema path="/services" />{children}</>;
}

export function generateMetadata() {
  return pageMetadata('/services');
}

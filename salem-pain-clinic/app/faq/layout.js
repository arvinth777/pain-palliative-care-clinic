import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';

export default function Layout({ children }) {
  return <><PageSchema path="/faq" />{children}</>;
}

export function generateMetadata() {
  return pageMetadata('/faq');
}

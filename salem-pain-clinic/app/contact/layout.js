import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';

export default function Layout({ children }) {
  return <><PageSchema path="/contact" />{children}</>;
}

export function generateMetadata() {
  return pageMetadata('/contact');
}

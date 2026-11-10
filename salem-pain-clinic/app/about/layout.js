import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';

export default function Layout({ children }) {
  return <><PageSchema path="/about" />{children}</>;
}

export function generateMetadata() {
  return pageMetadata('/about');
}

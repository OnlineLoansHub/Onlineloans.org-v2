import { getCanonicalUrl } from '@/config/seo';
import { usePathname } from 'next/navigation';

interface CanonicalUrlProps {
  path?: string;
}

export const CanonicalUrl = ({ path }: CanonicalUrlProps) => {
  const pathname = usePathname();
  const canonicalPath = path || pathname || '/';
  const url = getCanonicalUrl(canonicalPath);

  return <link rel="canonical" href={url} />;
};


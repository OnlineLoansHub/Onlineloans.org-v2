import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Us - OnlineLoans.org',
  description:
    'Learn about OnlineLoans.org - your trusted partner for comparing personal and business loans. We empower smarter financial choices with transparent, comprehensive comparisons from top lenders. Free to use, no hidden fees.',
  keywords:
    'about OnlineLoans.org, financial comparison, loan comparison platform, financial services, transparent lending, loan marketplace, financial education, trusted loan comparison',
  path: '/about-us',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Us - OnlineLoans.org',
  description:
    'Learn about OnlineLoans.org - your trusted partner for comparing loans, insurance, and investment products. We empower smarter financial choices with transparent, comprehensive comparisons.',
  keywords:
    'about OnlineLoans.org, financial comparison, loan comparison platform, financial services, transparent lending',
  path: '/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


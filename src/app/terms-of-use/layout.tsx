import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Terms of Use - OnlineLoans.org',
  description:
    'Read the Terms of Use for OnlineLoans.org. Understand the terms and conditions for using our loan comparison platform.',
  keywords: 'terms of use, terms and conditions, online loans, legal terms',
  path: '/terms-of-use',
});

export default function TermsOfUseLayout({ children }: { children: React.ReactNode }) {
  return children;
}

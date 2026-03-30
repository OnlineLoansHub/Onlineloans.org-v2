import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Affiliate Program - OnlineLoans.org',
  description:
    'Apply to the OnlineLoans.org affiliate program. Promote loan comparison experiences with compliant tracking and sub-IDs. We review partners and provide onboarding after approval.',
  keywords:
    'OnlineLoans.org affiliate program, loan affiliate program, business loan affiliates, finance affiliate marketing, loan comparison affiliate, affiliate tracking, sub-ID tracking, compliant financial marketing, small business loan traffic, fintech affiliate',
  path: '/affiliates',
});

export default function AffiliatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

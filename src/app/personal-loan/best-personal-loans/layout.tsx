import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Personal Loans 2025 - Compare Lenders',
  description:
    'Compare the best personal loans of 2025 from top lenders. Find fast funding options with competitive rates, flexible terms, and same-day approval. Compare LightStream, SoFi, Upstart, and more.',
  keywords:
    'best personal loans, personal loans 2025, compare personal loan lenders, best personal loan rates, fast personal loans, personal loan comparison, debt consolidation loans, low interest personal loans, personal loan reviews, top personal loan companies',
  path: '/personal-loan/best-personal-loans',
  image: '/og/personal-loans-hero.png',
  type: 'website',
});

export default function BestPersonalLoansLayout({ children }: { children: React.ReactNode }) {
  return children;
}

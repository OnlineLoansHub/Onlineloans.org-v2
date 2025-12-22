import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Business Loans 2026 - Compare Lenders',
  description:
    'Compare the best business loans of 2026 from top lenders. Find fast funding options with competitive rates, flexible terms, and 24-72 hour approval. Compare Biz2Credit, Lendio, OnDeck, and more.',
  keywords:
    'best business loans, business loans 2026, compare business lenders, best business loan rates, fast business funding, business loan comparison, SBA loans, merchant cash advance, business line of credit, small business loans, top business loan companies',
  path: '/business-loan/best-business-loans',
  image: '/og/business-loans-hero.png',
  type: 'website',
});

export default function BestBusinessLoansLayout({ children }: { children: React.ReactNode }) {
  return children;
}

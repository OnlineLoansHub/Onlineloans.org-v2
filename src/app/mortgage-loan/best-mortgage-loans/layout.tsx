import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Mortgage Loans 2026 - Compare Lenders',
  description:
    'Compare the best mortgage loans of 2026 from top lenders. Find competitive rates, flexible terms, and fast pre-approval. Compare SoFi, LendingTree, NerdWallet, Credible, and more.',
  keywords:
    'best mortgage loans, mortgage loans 2026, compare mortgage lenders, best mortgage rates, home loans, mortgage refinance, FHA loans, VA loans, conventional loans, mortgage comparison, lowest mortgage rates, mortgage pre-approval',
  path: '/mortgage-loan/best-mortgage-loans',
  image: '/og/mortgage-loans-hero.png',
  type: 'website',
});

export default function BestMortgageLoansLayout({ children }: { children: React.ReactNode }) {
  return children;
}

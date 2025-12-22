import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Auto Loans 2026 - Compare Car Loans',
  description:
    'Compare the best auto loans of 2026 from top lenders. Find competitive rates, flexible terms, and fast approval for new and used cars. Compare SoFi, LightStream, LendingTree, Credible, and more.',
  keywords:
    'best auto loans, auto loans 2026, compare auto loan lenders, car loans, auto loan rates, car financing, compare auto loans, new car loans, used car loans, auto loan refinance, lowest auto loan rates, car loan pre-approval',
  path: '/auto-loan/best-auto-loans',
  image: '/og/auto-loans-hero.png',
  type: 'website',
});

export default function BestAutoLoansLayout({ children }: { children: React.ReactNode }) {
  return children;
}

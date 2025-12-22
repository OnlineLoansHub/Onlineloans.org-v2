import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Student Loans 2026 - Compare Lenders',
  description:
    'Compare the best student loans of 2026 from top lenders. Find competitive rates, flexible repayment options, and fast approval. Compare SoFi, Credible, LendingTree, NerdWallet, and more.',
  keywords:
    'best student loans, student loans 2026, compare student loan lenders, student loan refinancing, private student loans, federal student loans, best student loan rates, student loan comparison, low interest student loans, student loan consolidation',
  path: '/student-loan/best-student-loans',
  image: '/og/student-loans-hero.png',
  type: 'website',
});

export default function BestStudentLoansLayout({ children }: { children: React.ReactNode }) {
  return children;
}

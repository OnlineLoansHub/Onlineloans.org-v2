import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Personal Loans of 2025 | Compare Top Lenders',
  description:
    'Compare the best personal loans of 2025 and explore lenders offering fast funding and competitive rates.',
  keywords: 'best personal loans, personal loans 2025, compare lenders',
  path: '/personal-loan/best-personal-loans',
  image: '/og/personal-loans-hero.png',
  type: 'website',
});

export default function BestPersonalLoansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


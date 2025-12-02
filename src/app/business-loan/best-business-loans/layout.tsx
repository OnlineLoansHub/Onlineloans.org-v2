import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Business Loans of 2025 | Compare Top Lenders',
  description:
    'Compare the best business loans of 2025 and explore lenders offering fast funding and flexible terms.',
  keywords: 'best business loans, business funding 2025, compare lenders',
  path: '/business-loan/best-business-loans',
  image: '/og/business-loans-hero.png',
  type: 'website',
});

export default function BestBusinessLoansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


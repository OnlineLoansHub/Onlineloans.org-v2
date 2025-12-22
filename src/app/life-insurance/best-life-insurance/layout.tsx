import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Life Insurance 2026 - Compare Policies',
  description:
    'Compare the best life insurance policies of 2026 from top providers. Find competitive rates, flexible coverage options, and fast approval. Compare Haven Life, Policygenius, Bestow, Ladder, and more.',
  keywords:
    'best life insurance, life insurance 2026, compare life insurance, term life insurance, whole life insurance, life insurance quotes, life insurance rates, life insurance comparison, affordable life insurance, life insurance reviews, best life insurance companies',
  path: '/life-insurance/best-life-insurance',
  image: '/og/life-insurance-hero.png',
  type: 'website',
});

export default function BestLifeInsuranceLayout({ children }: { children: React.ReactNode }) {
  return children;
}


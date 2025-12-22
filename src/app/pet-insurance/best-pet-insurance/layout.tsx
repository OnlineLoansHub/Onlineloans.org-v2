import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Best Pet Insurance 2026 - Compare Plans',
  description:
    'Compare the best pet insurance plans of 2026 from top providers. Find comprehensive coverage, competitive rates, and fast claims processing. Compare Healthy Paws, ASPCA, Embrace, Petplan, and more.',
  keywords:
    'best pet insurance, pet insurance 2026, compare pet insurance, dog insurance, cat insurance, pet health insurance, pet insurance plans, pet insurance coverage, affordable pet insurance, pet insurance reviews, best pet insurance companies',
  path: '/pet-insurance/best-pet-insurance',
  image: '/og/pet-insurance-hero.png',
  type: 'website',
});

export default function BestPetInsuranceLayout({ children }: { children: React.ReactNode }) {
  return children;
}

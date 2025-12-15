import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

const publishedDate = new Date('2025-01-15');
const modifiedDate = new Date();

export const metadata: Metadata = generateSEOMetadata({
  title: 'California Payday Loans 2025 - Laws & Providers',
  description:
    'Complete guide to payday loans in California. Learn about state laws, legality, fees, and compare the best online payday loan providers.',
  keywords:
    'payday loans California, online payday loans California, California payday loan laws, payday loans legal California, best payday loans California, payday loan lenders California, cash advance California, California payday loan regulations',
  path: '/personal-loan/payday-loans/california',
  image: '/og-image.png',
  type: 'article',
  author: 'Michael Thompson',
  publishedTime: publishedDate.toISOString(),
  modifiedTime: modifiedDate.toISOString(),
});

export default function PaydayLoansCaliforniaLayout({ children }: { children: React.ReactNode }) {
  return children;
}

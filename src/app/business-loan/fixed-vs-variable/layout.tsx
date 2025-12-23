import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

const publishedDate = new Date('2025-01-15');
const modifiedDate = new Date();

export const metadata: Metadata = generateSEOMetadata({
  title: 'Are Small Business Loans Fixed or Variable?',
  description:
    'Learn the difference between fixed and variable rate business loans. Compare pros, cons, and real examples to choose the best option for your small business financing needs.',
  keywords:
    'fixed rate business loans, variable rate business loans, small business loan rates, fixed vs variable loans, business loan interest rates, SBA loan rates, prime rate business loans, SOFR business loans',
  path: '/business-loan/fixed-vs-variable',
  image: '/og-image.png',
  type: 'article',
  author: 'James',
  publishedTime: publishedDate.toISOString(),
  modifiedTime: modifiedDate.toISOString(),
});

export default function FixedVsVariableLayout({ children }: { children: React.ReactNode }) {
  return children;
}

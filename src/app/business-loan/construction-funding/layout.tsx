import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Construction Business Loans Guide',
  description:
    'Complete guide to construction business loans. Learn how they work, types of financing, how to apply, and find the best lenders. Compare equipment financing and working capital loans.',
  keywords:
    'construction loans, construction business loans, construction financing, construction equipment financing, construction working capital, construction project funding, construction loan application, best construction loans, construction funding options, contractor loans, construction company loans, equipment loans for construction, construction invoice financing, SBA construction loans',
  path: '/business-loan/construction-funding',
  type: 'article',
  author: 'Michael Chen',
  publishedTime: '2025-01-15T00:00:00Z',
  modifiedTime: new Date().toISOString(),
});

export default function ConstructionFundingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

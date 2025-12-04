import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'LendingTree Review: Comprehensive Overview for Personal Loans | OnlineLoans.org',
  description:
    "Complete LendingTree review for personal loans. Learn how LendingTree works, compare personal loan offers, understand pros and cons, and find out if it's the right marketplace for your borrowing needs. Get multiple loan quotes with one application.",
  keywords:
    'LendingTree review, LendingTree personal loans, LendingTree marketplace, compare personal loans, LendingTree pros and cons, online loan marketplace, personal loan comparison, LendingTree customer reviews, LendingTree personal loan rates, best personal loan marketplace, compare personal loan lenders',
  path: '/personal-loan/lendingtree-review',
  type: 'article',
  author: 'Sarah Martinez',
  publishedTime: '2025-12-04T00:00:00Z',
  modifiedTime: new Date().toISOString(),
  image: '/images/brands-logos/lendingtree-logo.jpg',
});

export default function LendingTreeReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}

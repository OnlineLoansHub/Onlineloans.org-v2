import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Restaurant Funding Guide - How Loans Work',
  description:
    'Complete guide to restaurant funding. Learn how restaurant loans work, types of financing, how to apply, and find the best lenders. Compare working capital and equipment loans.',
  keywords:
    'restaurant funding, restaurant loans, how restaurant loans work, restaurant financing guide, restaurant working capital, restaurant equipment financing, merchant cash advance restaurants, restaurant loan application, best restaurant loans, restaurant funding options',
  path: '/business-loan/restaurant-funding',
  type: 'article',
});

export default function RestaurantFundingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

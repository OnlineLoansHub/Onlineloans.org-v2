import type { Metadata } from 'next';
import HomePage from '@/components/HomePage/HomePage';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Compare Loans & Financial Products',
  description:
    'Compare personal loans, business loans, insurance, and credit cards. Get matched with trusted lenders, explore rankings and reviews, and apply online in minutes.',
  keywords:
    'online loans, personal loans, business loans, loan comparison, best loan rates, compare loans, fast approval loans, secure online loans, debt consolidation, small business loans, loan marketplace, insurance comparison, credit cards',
  path: '/',
});

export default function Home() {
  return <HomePage />;
}

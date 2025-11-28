import type { Metadata } from 'next';
import DynamicHomePage from '@/features/dynamicHomePage/dynamicHomePage';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Online Loans®',
  description:
    'Compare and apply for personal and business loans online. Get approved in minutes with competitive rates from top lenders. Fast, secure, and trusted by thousands of customers.',
  keywords:
    'online loans, personal loans, business loans, fast approval, secure loans, instant loans, loan comparison, compare loans, best loan rates, quick loans, unsecured loans, debt consolidation, small business loans',
  path: '/',
});

export default function Home() {
  return (
    <DynamicHomePage
      title={
        <>
          Compare and choose <br />
          top financial products
        </>
      }
    />
  );
}

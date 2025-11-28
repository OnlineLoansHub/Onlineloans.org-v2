import type { Metadata } from 'next';
import DynamicHomePage from '@/features/dynamicHomePage/dynamicHomePage';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Online Loans®',
  description:
    'Get approved for personal and business loans online in minutes. Fast, secure, and trusted by thousands of customers. Compare rates and apply now.',
  keywords:
    'online loans, personal loans, business loans, fast approval, secure loans, instant loans, loan comparison',
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

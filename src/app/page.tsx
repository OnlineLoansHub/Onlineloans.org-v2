import type { Metadata } from 'next';
import DynamicHomePage from '@/features/dynamicHomePage/dynamicHomePage';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Compare Loans & Financial Products',
  description:
    'Compare personal loans, business loans, insurance, and credit cards. Get matched with trusted lenders, explore rankings and reviews, and apply online in minutes.',
  keywords:
    'online loans, personal loans, business loans, loan comparison, best loan rates, compare loans, instant loans, fast approval loans, secure online loans, unsecured loans, debt consolidation loans, small business loans, loan marketplace, loan comparison platform, best loan websites, easy online loan approval, compare personal loan offers, business loan marketplace, lender ratings, lender reviews, lender score reviews, transparent loan comparison, low credit loan options, fast funding online, unsecured loan alternatives, small business funding options, emergency loan finder, tailored loan matches, financial products ranking, trusted lender reviews, simple loan application online, same day loan information, bad credit loan resources, insurance comparison, online insurance quotes, insurance plan comparison tool, insurance products online, credit cards, credit card comparison, beginner credit card guide, low interest credit cards, online credit card comparer, financial product reviews, financial product rankings',
  path: '/',
});

export default function Home() {
  return (
    <DynamicHomePage
      title={
        <>
          Money when <br />
          you need it. <br />
          Fast, easy, secure.
        </>
      }
    />
  );
}

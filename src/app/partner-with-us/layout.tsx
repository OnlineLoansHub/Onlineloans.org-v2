import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Partner With Us - OnlineLoans.org',
  description:
    'Partner with OnlineLoans.org to access high-quality loan leads and premium financial traffic. We help lenders acquire customers and support media buyers with reliable payouts and smart routing.',
  keywords:
    'loan lead generation, financial leads, partner with OnlineLoans.org, loan affiliate network, lender lead provider, high quality loan leads, performance marketing loans, financial affiliate program, lender partnerships, buy loan leads, sell loan leads, media buyer partnerships, finance traffic network, compliant loan leads, lead distribution platform, loan traffic partners, financial services marketing, affiliate lead marketplace, lender acquisition solutions, fintech partnerships',
  path: '/partner-with-us',
});

export default function PartnerWithUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

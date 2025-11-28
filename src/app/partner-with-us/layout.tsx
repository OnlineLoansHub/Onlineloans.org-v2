import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Partner With Us - OnlineLoans.org',
  description:
    'Partner with OnlineLoans.org to access high-quality, compliant loan leads and premium financial traffic. We help lenders acquire customers at scale and support media buyers and affiliates with reliable payouts, smart routing, and top-tier brand connections. Grow your financial business with a trusted, transparent performance partner.',
  keywords:
    'loan lead generation, financial leads, partner with OnlineLoans.org, loan affiliate network, lender lead provider, high quality loan leads, performance marketing loans, financial affiliate program, lender partnerships, buy loan leads, sell loan leads, media buyer partnerships, finance traffic network, compliant loan leads, lead distribution platform, loan traffic partners, financial services marketing, affiliate lead marketplace, lender acquisition solutions, fintech partnerships',
  path: '/partner-with-us',
});

export default function PartnerWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


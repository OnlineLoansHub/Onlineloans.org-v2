import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Partner With Us - OnlineLoans.org',
  description:
    'Partner with OnlineLoans.org to reach valuable consumers at the right moment. High ROI at scale, top quality traffic, and massive exposure for your financial products.',
  keywords:
    'partner with onlineloans, affiliate program, financial partnerships, loan affiliate, financial services partnership',
  path: '/partner-with-us',
});

export default function PartnerWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


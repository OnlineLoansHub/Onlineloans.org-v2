import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/config/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - OnlineLoans.org',
  description:
    'Contact OnlineLoans.org for questions, support, or inquiries. We are here to help you with your loan comparison needs.',
  keywords: 'contact, customer support, help, online loans contact',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


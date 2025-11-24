import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { SkipToContent } from '@/components/accessibility/SkipToContent';
import { DefaultStructuredData } from '@/seo/StructuredData';
import { generateMetadata as generateSEOMetadata, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/config/seo';
import '@/styles/index.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: 'Online Loans®',
    description:
      'Get approved for personal and business loans online in minutes. Fast, secure, and trusted by thousands of customers. Compare rates and apply now.',
    keywords:
      'online loans, personal loans, business loans, fast approval, secure loans, instant loans, loan comparison',
    path: '/',
    image: DEFAULT_OG_IMAGE,
  }),
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo/onlineloans-logo.png',
  },
  manifest: '/manifest.json',
  other: {
    'dns-prefetch': 'https://fonts.gstatic.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <DefaultStructuredData />
        <SkipToContent />
        <Header />
        <main id="main-content" className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

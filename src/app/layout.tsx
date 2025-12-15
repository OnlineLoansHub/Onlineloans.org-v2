import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/layout/Header/Header';
import { LegacyBanner } from '@/components/layout/LegacyBanner/LegacyBanner';
import { ExploreToggle } from '@/components/layout/ExploreToggle/ExploreToggle';
import { SkipToContent } from '@/components/accessibility/SkipToContent';
import { DefaultStructuredData } from '@/seo/StructuredData';
import { generateMetadata as generateSEOMetadata, DEFAULT_OG_IMAGE } from '@/config/seo';
import { ExploreToggleProvider } from '@/contexts/ExploreToggleContext';
import { FooterWrapper } from '@/components/layout/Footer/FooterWrapper';
import { ImpressionTracker } from '@/components/analytics/ImpressionTracker';
import '@/styles/index.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.onlineloans.org'),
  ...generateSEOMetadata({
    title: 'Online Loans® – Simple Financial Solutions',
    description:
      'Compare personal loans, business loans, insurance, and credit cards. Get matched with trusted lenders, explore rankings and reviews, and apply online in minutes.',
    keywords:
      'online loans, personal loans, business loans, loan comparison, best loan rates, compare loans, instant loans, fast approval loans, secure online loans, unsecured loans, debt consolidation loans, small business loans, loan marketplace, loan comparison platform, best loan websites, easy online loan approval, compare personal loan offers, business loan marketplace, lender ratings, lender reviews, lender score reviews, transparent loan comparison, low credit loan options, fast funding online, unsecured loan alternatives, small business funding options, emergency loan finder, tailored loan matches, financial products ranking, trusted lender reviews, simple loan application online, same day loan information, bad credit loan resources, insurance comparison, online insurance quotes, insurance plan comparison tool, insurance products online, credit cards, credit card comparison, beginner credit card guide, low interest credit cards, online credit card comparer, financial product reviews, financial product rankings',
    path: '/',
    image: DEFAULT_OG_IMAGE,
  }),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/logo/onlineloans-logo.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/logo/onlineloans-logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/logo/onlineloans-logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logo/onlineloans-logo.png', sizes: '512x512', type: 'image/png' },
    ],
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
        <Script
          src="https://t.contentsquare.net/uxa/9cb737e1b8a22.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CW0NYXW5S0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CW0NYXW5S0');
          `}
        </Script>
        <ExploreToggleProvider>
          <ImpressionTracker />
          <DefaultStructuredData />
          <SkipToContent />
          <Header />
          {/* <LegacyBanner /> */}
          <main id="main-content" className="main-container">
            {children}
          </main>
          <ExploreToggle />
          <FooterWrapper />
        </ExploreToggleProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { SiteTopChrome } from '@/components/layout/SiteTopChrome/SiteTopChrome';
import { ExploreToggle } from '@/components/layout/ExploreToggle/ExploreToggle';
import { AccessibilityWidget } from '@/components/accessibility/AccessibilityWidget';
import { DefaultStructuredData } from '@/components/seo/StructuredData';
import { generateMetadata as generateSEOMetadata, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { ExploreToggleProvider } from '@/contexts/ExploreToggleContext';
import { ImpressionProvider } from '@/contexts/ImpressionContext';
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
      'online loans, personal loans, business loans, loan comparison, best loan rates, compare loans, fast approval loans, secure online loans, debt consolidation, small business loans, loan marketplace, insurance comparison, credit cards',
    path: '/',
    image: DEFAULT_OG_IMAGE,
  }),
  icons: {
    icon: [
      { url: '/favicon-3.ico', sizes: 'any' },
      { url: '/favicon-16x16-3.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32-3.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192-3.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512-3.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon-3.png',
  },
  manifest: '/manifest.json',
  // Removed dns-prefetch - already handled by preconnect in next.config.ts
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        {/* Performance: Defer analytics scripts until after page load */}
        <Script src="https://t.contentsquare.net/uxa/9cb737e1b8a22.js" strategy="lazyOnload" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CW0NYXW5S0"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CW0NYXW5S0');
          `}
        </Script>
        {/* Google Ads Conversion Tracking */}
        <Script id="google-ads-conversion" strategy="lazyOnload">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17771286555/WQhxCL7syNgbEJuggZpC',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        {/* Accessibility Widget - Desktop Only */}
        <AccessibilityWidget />
        <ImpressionProvider>
          <ExploreToggleProvider>
            <ImpressionTracker />
            <DefaultStructuredData />
            <SiteTopChrome />
            {/* <LegacyBanner /> */}
            <main id="main-content" className="main-container">
              {children}
            </main>
            <ExploreToggle />
            <FooterWrapper />
          </ExploreToggleProvider>
        </ImpressionProvider>
      </body>
    </html>
  );
}

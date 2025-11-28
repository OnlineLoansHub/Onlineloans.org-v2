import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/layout/Header/Header';
import { ExploreToggle } from '@/components/layout/ExploreToggle/ExploreToggle';
import { SkipToContent } from '@/components/accessibility/SkipToContent';
import { DefaultStructuredData } from '@/seo/StructuredData';
import { generateMetadata as generateSEOMetadata, DEFAULT_OG_IMAGE } from '@/config/seo';
import { ExploreToggleProvider } from '@/contexts/ExploreToggleContext';
import { FooterWrapper } from '@/components/layout/Footer/FooterWrapper';
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
          <DefaultStructuredData />
          <SkipToContent />
          <Header />
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

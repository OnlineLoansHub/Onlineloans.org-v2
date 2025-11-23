import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/features/business/components/Footer/Footer';
import '@/styles/index.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Online Loans®',
  description:
    'Get approved for personal loans online in minutes. Fast, secure, and trusted by thousands of customers. Apply now for competitive rates.',
  keywords:
    'online loans, personal loans, fast approval, secure loans, instant loans',
  openGraph: {
    title: 'OnlineLoans.org - Fast & Secure Online Loans',
    description:
      'Get approved for personal loans online in minutes. Fast, secure, and trusted by thousands of customers.',
    type: 'website',
    siteName: 'OnlineLoans.org',
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
        <Header />
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

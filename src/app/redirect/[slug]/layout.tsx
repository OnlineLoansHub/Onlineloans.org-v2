import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting… | OnlineLoans.org',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


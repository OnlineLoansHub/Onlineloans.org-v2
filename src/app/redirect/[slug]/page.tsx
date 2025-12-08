'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Logo from '@/components/ui/Logo/Logo';
import './redirect.css';

export default function RedirectPage() {
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    if (typeof window !== 'undefined' && slug) {
      try {
        const decodedUrl = decodeURIComponent(slug);

        const timer = setTimeout(() => {
          window.location.href = decodedUrl;
        }, 5000);

        return () => {
          clearTimeout(timer);
        };
      } catch (error) {
        console.error('Error decoding URL:', error);
      }
    }
  }, [slug]);

  return (
    <div className="redirect-container">
      <div className="redirect-content">
        <div className="logo-wrapper">
          <Logo text="OnlineLoans.org" textColor="var(--color-primary)" className="logo" />
        </div>

        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>

        <p className="redirect-text">One moment, pulling up that offer for you...</p>
      </div>
    </div>
  );
}

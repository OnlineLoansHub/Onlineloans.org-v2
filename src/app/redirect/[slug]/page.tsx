'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './redirect.css';

interface RedirectPageProps {
  params: {
    slug: string;
  };
}

export default function RedirectPage({ params }: RedirectPageProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const decodedUrl = decodeURIComponent(params.slug);
      
      const timer = setTimeout(() => {
        window.location.href = decodedUrl;
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [params.slug]);

  return (
    <div className="redirect-container">
      <div className="redirect-content">
        <div className="logo-wrapper">
          <Image
            src="/logo.png"
            alt="OnlineLoans.org"
            width={200}
            height={60}
            className="logo"
            priority
          />
        </div>
        
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
        
        <p className="redirect-text">
          One moment, pulling up that offer for you...
        </p>
      </div>
    </div>
  );
}


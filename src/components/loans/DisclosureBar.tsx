'use client';

import React from 'react';

export default function DisclosureBar() {
  const scrollToDisclosure = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('advertising-disclosure');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
        <span className="text-slate-600 text-center sm:text-left">
          The offers below and their placement are from companies from which we receive compensation.
        </span>
        <button
          onClick={scrollToDisclosure}
          className="text-[#235675] hover:text-[#1a4259] font-medium underline underline-offset-2 transition-colors whitespace-nowrap"
        >
          Advertising Disclosure
        </button>
      </div>
    </div>
  );
}


import React from 'react';
import { CheckCircle } from 'lucide-react';

interface HeroProps {
  validDate?: string;
}

export default function Hero({ validDate = 'December 21, 2025' }: HeroProps) {
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#235675]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#235675]/3 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 lg:pt-16 lg:pb-12">
        <div className="max-w-3xl">
          {/* Valid date badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm border border-slate-200 mb-6">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-slate-600">
              Valid as of <span className="font-semibold text-slate-900">{validDate}</span>
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Best <span className="text-[#235675]">Business Loans</span> of {monthYear}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl text-[#235675] font-medium mb-4">
            Find funding that fits your business
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Explore the top lenders in the market and find the best financing options for your
            business growth with competitive rates and flexible terms.
          </p>
        </div>
      </div>
    </section>
  );
}


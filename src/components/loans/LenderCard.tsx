'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Check, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import ScoreBreakdown from './ScoreBreakdown';
import ExpandableExplanation from './ExpandableExplanation';
import StarRating from './StarRating';
import type { Lender } from './lendersData';

interface LenderCardProps {
  lender: Lender;
  rank: number;
}

export default function LenderCard({ lender, rank }: LenderCardProps) {
  return (
    <>
      {/* Mobile Card - Simple Layout */}
      <div
        className={`lg:hidden bg-white rounded-2xl shadow-lg overflow-hidden relative ${
          rank === 1 ? 'border-4 border-[#2a3d66]' : 'border-2 border-slate-200'
        }`}
      >
        {/* Rank Number - Top Left Corner */}
        <div className="absolute top-0 left-0 w-10 h-10 bg-[#2a3d66] rounded-br-2xl flex items-center justify-center z-10">
          <span className="text-white font-bold text-lg">{rank}</span>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="p-5 pt-12 flex gap-4">
          {/* Left Column */}
          <div className="flex-[1.5] flex flex-col items-center gap-3">
            {/* Logo */}
            <div className="flex items-center justify-center min-h-[50px] w-full">
              {lender.logo ? (
                <div className="relative w-full h-20">
                  <Image
                    src={lender.logo}
                    alt={lender.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100px, 150px"
                  />
                </div>
              ) : (
                <span className="font-bold text-slate-700 text-base text-center">
                  {lender.name}
                </span>
              )}
            </div>

            {/* Loan Amount Range */}
            {lender.details && lender.details[0] && (
              <div className="text-center mt-auto">
                <p className="text-xs text-slate-600 mb-1 font-medium">Loan Amount</p>
                <p className="text-2xl font-bold text-slate-900">
                  {lender.details[0].split(': ')[1] || '$25K - $2M'}
                </p>
              </div>
            )}
          </div>

          {/* Vertical Separator */}
          <div className="w-px bg-slate-200" />

          {/* Right Column */}
          <div className="flex-[1.2] flex flex-col items-center justify-center gap-1.5 min-w-0">
            {/* Rating Number */}
            <div className="text-4xl font-bold text-[#2a3d66]">{lender.totalScore}</div>

            {/* Stars - Green like Trustpilot */}
            <div className="flex items-center gap-0">
              {[...Array(5)].map((_, i) => {
                const starValue = (lender.totalScore / 10) * 5;
                const isFilled = i < Math.floor(starValue);
                return (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill={isFilled ? '#00B67A' : '#dcdce6'}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                );
              })}
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-slate-500">Our score</p>
              <div className="relative group">
                <button className="rounded-full p-0.5 hover:bg-slate-100 transition-colors">
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 max-w-xs">
                  Our score combines Trustpilot ratings, brand reputation, and popularity to give
                  you a comprehensive view of each lender's quality and reliability.
                </div>
              </div>
            </div>

            {/* Explore CTA */}
            <Button
              variant="primary"
              className="w-full bg-[#2a3d66] hover:bg-[#1f2d4d] text-white py-3 px-4 rounded-lg font-semibold text-sm"
              onClick={() => window.open(lender.ctaUrl || '#', '_blank')}
            >
              EXPLORE
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>

            {/* Phone Number */}
            <a href="tel:888-501-8270" className="text-xs text-slate-500 hover:text-[#2a3d66] underline">
              (888)-501-8270
            </a>
          </div>
        </div>

        {/* Footer Strip - Only for Rank 1 */}
        {rank === 1 && (
          <div className="bg-[#2a3d66] text-white text-center py-2.5 px-4">
            <p className="text-xs flex items-center justify-center gap-1.5">
              <span className="text-lg">📊</span>
              <span>1407 people visited this site this week</span>
            </p>
          </div>
        )}
      </div>

      {/* Desktop Card - Full Layout */}
      <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="p-6">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
            {/* Rank */}
            <div className="flex lg:flex-col items-center gap-3 lg:gap-1">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2a3d66] text-white flex items-center justify-center font-bold text-lg lg:text-xl">
                {rank}
              </div>
              <span className="text-xs text-slate-400 font-medium lg:text-center">RANK</span>
            </div>

            {/* Logo & Brand Section */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-xl border border-slate-200 p-4 mb-3 flex items-center justify-center min-h-[80px]">
                {lender.logo ? (
                  <div className="relative w-full h-20">
                    <Image
                      src={lender.logo}
                      alt={lender.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 150px, 200px"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="font-bold text-slate-700 text-xl">{lender.name}</span>
                  </div>
                )}
              </div>
              {lender.reviewCount && (
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{lender.reviewCount.toLocaleString()} Reviews</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-emerald-600 font-medium">Trustpilot</span>
                </div>
              )}
            </div>

            {/* Score */}
            <div className="flex items-center gap-4 lg:text-right">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[#2a3d66]">{lender.totalScore}</span>
                  <span className="text-slate-400 text-sm">/10</span>
                </div>
                <div className="flex items-center justify-end gap-2 mt-1">
                  <StarRating score={lender.totalScore} />
                  <span className="text-xs text-slate-500">Our score</span>
                </div>
              </div>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="mt-4">
            <ScoreBreakdown
              trustpilotScore={lender.trustpilotScore}
              brandReputation={lender.brandReputation}
              popularityScore={lender.popularityScore}
              reviewCount={lender.reviewCount}
            />
          </div>

          {/* Expandable Explanation */}
          <ExpandableExplanation />

          {/* Highlight Line */}
          {lender.highlight && (
            <div className="mt-4 p-3 bg-[#2a3d66]/5 rounded-lg border-l-4 border-[#2a3d66]">
              <p className="text-sm text-slate-700 font-medium">{lender.highlight}</p>
            </div>
          )}

          {/* Details */}
          {lender.details && lender.details.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {lender.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{detail}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="primary"
              className="flex-1 sm:flex-none bg-[#2a3d66] hover:bg-[#1f2d4d] text-white py-6 px-8 rounded-xl font-semibold text-base transition-all group"
              onClick={() => window.open(lender.ctaUrl || '#', '_blank')}
            >
              See Plans
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {lender.websiteUrl && (
              <a
                href={lender.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-sm text-slate-500 hover:text-[#2a3d66] transition-colors"
              >
                Visit {lender.name}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


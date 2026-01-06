'use client';

import React, { useMemo } from 'react';
// import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ExternalLink, Check, Info, TrendingUp, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import ScoreBreakdown from './ScoreBreakdown';
import StarRating from './StarRating';
import type { Brand } from '@/data/brands';
import { useImpression } from '@/contexts/ImpressionContext';
import { trackBrandClick, getPageNameFromRoute } from '@/lib/impression';
import { gtag_report_conversion } from '@/lib/googleAds';

interface LenderCardProps {
  lender: Brand;
  rank: number;
  amountLabel?: string;
}

/**
 * Processes CTA URL to append gclid, fclid, wbraid, or fbclid to tracking parameters
 * Applies sub_id_1 and sub1 to all brands
 */
function processCtaUrl(baseUrl: string): string {
  if (!baseUrl || baseUrl === '#') return baseUrl;

  try {
    // Get gclid, fclid, wbraid, or fbclid from current page URL
    const urlParams = new URLSearchParams(
      typeof window !== 'undefined' ? window.location.search : ''
    );
    const gclid = urlParams.get('gclid');
    const fclid = urlParams.get('fclid');
    const wbraid = urlParams.get('wbraid');
    const fbclid = urlParams.get('fbclid');
    const trackingId = gclid || fclid || wbraid || fbclid;

    if (!trackingId) return baseUrl;

    // Parse the base URL
    const url = new URL(baseUrl);

    // Apply sub_id_1 and sub1 to all brands
    url.searchParams.set('sub_id_1', trackingId);
    url.searchParams.set('sub1', trackingId);

    return url.toString();
  } catch (error) {
    // If URL parsing fails, return original URL
    console.error('Error processing CTA URL:', error);

    return baseUrl;
  }
}

export default function LenderCard({ lender, rank, amountLabel }: LenderCardProps) {
  const { impressionId } = useImpression();
  const pathname = usePathname();
  const pageName = useMemo(() => getPageNameFromRoute(pathname || ''), [pathname]);

  // Process CTA URL to include gclid/fclid in sub_id_1 and sub1 for all brands
  const processedCtaUrl = useMemo(() => processCtaUrl(lender.ctaUrl), [lender.ctaUrl]);

  // Wiggle animation state
  // const [shouldWiggle, setShouldWiggle] = useState(false);

  // useEffect(() => {
  //   // First wiggle after 2 seconds
  //   const initialTimeout = setTimeout(() => {
  //     setShouldWiggle(true);
  //     setTimeout(() => setShouldWiggle(false), 600);
  //   }, 2000);

  //   // Then wiggle every 10 seconds
  //   const interval = setInterval(() => {
  //     setShouldWiggle(true);
  //     // Reset after animation completes (0.6s)
  //     setTimeout(() => setShouldWiggle(false), 600);
  //   }, 10000);

  //   return () => {
  //     clearTimeout(initialTimeout);
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      {/* Mobile Card - Simple Layout */}
      <div
        className={`lg:hidden bg-white rounded shadow-lg overflow-hidden relative ${
          rank === 1 ? 'border-2 border-[var(--color-primary)]/70' : 'border-2 border-slate-200'
        }`}
      >
        {/* Rank Number - Top Left Corner */}
        <div className="absolute top-0 left-0 w-10 h-10 bg-[var(--color-primary)] rounded-br flex items-center justify-center z-10">
          <span className="text-white font-bold text-lg">{rank}</span>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="p-5 pt-12 flex gap-4">
          {/* Left Column */}
          <div className="flex-[1.5] flex flex-col items-center">
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
                    priority={rank <= 3}
                    loading={rank <= 3 ? 'eager' : 'lazy'}
                    fetchPriority={rank === 1 ? 'high' : rank <= 3 ? 'auto' : 'low'}
                  />
                </div>
              ) : (
                <span className="font-bold text-slate-700 text-base text-center">
                  {lender.name}
                </span>
              )}
            </div>

            {/* Amount Field - Mobile Only */}
            {lender.amount && amountLabel && (
              <div className="text-center mt-2 lg:hidden">
                <p className="text-xs text-slate-600 mb-1 font-medium">{amountLabel}</p>
                <p className="text-2xl font-bold text-slate-900">{lender.amount}</p>
              </div>
            )}
          </div>

          {/* Vertical Separator */}
          <div className="w-px bg-slate-200" />

          {/* Right Column */}
          <div className="flex-[1.2] flex flex-col items-center justify-center gap-1.5 min-w-0">
            {/* Rating Number */}
            <div className="text-4xl font-semibold text-black">{lender.ourScore}</div>

            {/* Stars - Green like Trustpilot */}
            <div className="flex items-center gap-0">
              {[...Array(5)].map((_, i) => {
                const starValue = (lender.ourScore / 10) * 5;
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
              <p className="text-xs text-black">Our score</p>
              <div className="relative group">
                <button className="rounded-full p-0.5 hover:bg-slate-100 transition-colors">
                  <Info className="w-3.5 h-3.5 text-black" />
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
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-extrabold"
              // className={`w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-extrabold ${
              //   shouldWiggle ? 'animate-wiggle' : ''
              // }`}
              style={{
                padding: '6px 16px',
                borderRadius: '6px',
                fontSize: '15px',
                height: 'auto',
                fontWeight: '900',
              }}
              onClick={() => {
                trackBrandClick(lender.name, pageName, impressionId);
                // Report Google Ads conversion
                gtag_report_conversion();
                window.open(processedCtaUrl || '#', '_blank');
              }}
            >
              EXPLORE
              <span className="ml-1">&gt;&gt;</span>
            </Button>

            {/* Phone Number */}
            {lender.phoneNumber && lender.websiteUrl && (
              <a
                href={lender.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] text-black hover:text-[var(--color-primary)] underline"
                onClick={() => {
                  trackBrandClick(lender.name, pageName, impressionId);
                  // Report Google Ads conversion
                  gtag_report_conversion();
                }}
              >
                <Phone className="w-2.5 h-2.5" />
                {lender.phoneNumber}
              </a>
            )}
          </div>
        </div>

        {/* Footer Strip - Only for Rank 1 */}
        {rank === 1 && (
          <div className="bg-[var(--color-primary)] text-white text-center py-2.5 px-4">
            <p className="text-xs flex items-center justify-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>1407 people visited this site this week</span>
            </p>
          </div>
        )}
      </div>

      {/* Desktop Card - Full Layout */}
      <div
        className={`hidden lg:block bg-white rounded shadow-lg hover:shadow-xl overflow-hidden relative ${
          rank === 1 ? 'border-2 border-[#2a3d66]/70' : 'border border-slate-200'
        }`}
      >
        {/* Rank Number - Top Left Corner */}
        <div className="absolute top-0 left-0 w-10 h-10 bg-[var(--color-primary)] rounded-br flex items-center justify-center z-10">
          <span className="text-white font-bold text-lg">{rank}</span>
        </div>

        <div className="p-6" style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
            {/* Logo & Brand Section */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded p-2 mb-2 flex items-center justify-center min-h-[80px]">
                {lender.logo ? (
                  <div className="relative w-full h-[80px] max-w-[280px] mx-auto">
                    <Image
                      src={lender.logo}
                      alt={lender.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 160px, 280px"
                      priority={rank <= 3}
                      loading={rank <= 3 ? 'eager' : 'lazy'}
                      fetchPriority={rank === 1 ? 'high' : rank <= 3 ? 'auto' : 'low'}
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="font-bold text-slate-700 text-xl">{lender.name}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Score */}
            <div className="flex items-center gap-4 lg:w-[calc(33.333%-1rem)] lg:justify-start">
              <div className="lg:text-left">
                <div className="flex items-baseline gap-1 lg:justify-start">
                  <span className="text-2xl font-bold text-black">{lender.ourScore}</span>
                  <span className="text-black text-sm">/10</span>
                </div>
                <div className="flex items-center justify-start gap-2 mt-1">
                  <StarRating score={lender.ourScore} />
                </div>
                <div className="flex items-center justify-start gap-1 mt-1">
                  <span className="text-xs text-black">Our score</span>
                  <div className="relative group">
                    <button className="rounded-full p-0.5 hover:bg-slate-100 transition-colors">
                      <Info className="w-3.5 h-3.5 text-black" />
                    </button>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 max-w-xs">
                      Our score combines Trustpilot ratings, brand reputation, and popularity to
                      give you a comprehensive view of each lender's quality and reliability.
                    </div>
                  </div>
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

          {/* Details */}
          {((lender.goodDetails && lender.goodDetails.length > 0) ||
            (lender.badDetails && lender.badDetails.length > 0)) && (
            <div className="mt-6 grid grid-cols-2 gap-2">
              {/* Left Column - Good Details */}
              <div className="flex flex-col gap-2">
                {/* Amount Field - Desktop Only, First Item, Bold */}
                {lender.amount && amountLabel && (
                  <div className="hidden lg:flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-900">
                      {amountLabel}: {lender.amount}
                    </span>
                  </div>
                )}
                {lender.goodDetails?.map((detail, index) => (
                  <div key={`good-${index}`} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{detail}</span>
                  </div>
                ))}
              </div>
              {/* Right Column - Bad Details */}
              <div className="flex flex-col gap-2">
                {lender.badDetails?.map((detail, index) => (
                  <div key={`bad-${index}`} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="primary"
              className="flex-1 sm:flex-none bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded font-semibold text-base transition-all group"
              // className={`flex-1 sm:flex-none bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded font-semibold text-base transition-all group ${
              //   shouldWiggle ? 'animate-wiggle' : ''
              // }`}
              style={{
                borderRadius: '6px',
                fontSize: '1rem',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '32px',
                paddingRight: '32px',
                margin: '0',
                border: '0',
              }}
              onClick={() => {
                trackBrandClick(lender.name, pageName, impressionId);
                // Report Google Ads conversion
                gtag_report_conversion();
                window.open(processedCtaUrl || '#', '_blank');
              }}
            >
              See Plans
              <span className="ml-2">&gt;&gt;</span>
            </Button>
            {lender.websiteUrl && (
              <a
                href={lender.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-sm text-black hover:text-[var(--color-primary)] transition-colors"
                onClick={() => {
                  trackBrandClick(lender.name, pageName, impressionId);
                  // Report Google Ads conversion
                  gtag_report_conversion();
                }}
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

'use client';

import React, { useMemo } from 'react';
// import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Info, TrendingUp, Phone, ChevronsRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
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

function pickDesktopBullets(lender: Brand): string[] {
  const bullets: string[] = [];

  if (lender.highlight) bullets.push(lender.highlight);

  // Prefer explicit qualifiers if present
  const revenue = humanizeMinRevenue(lender.minRevenue);
  if (revenue) bullets.push(`Monthly revenue: ${revenue}`);

  const time = humanizeMinTimeInBusiness(lender.minTimeInBusiness);
  if (time) bullets.push(`Time in business: ${time}`);

  const credit = humanizeMinCreditScore(lender.minCreditScore);
  if (credit) bullets.push(`Min. credit score: ${credit}`);

  // Backfill from goodDetails if we still need more
  for (const d of lender.goodDetails ?? []) {
    if (bullets.length >= 4) break;
    if (!bullets.includes(d)) bullets.push(d);
  }

  if (bullets.length === 0) bullets.push('Fast online application');

  return bullets.slice(0, 4);
}

function humanizeMinTimeInBusiness(minTimeInBusiness?: string): string | null {
  if (!minTimeInBusiness) return null;
  const v = String(minTimeInBusiness).trim();
  const map: Record<string, string> = {
    '0_6m': '0–6 months',
    '6m_1y': '6 months–1 year',
    '1_2': '1–2 years',
    '2_plus': '2+ years',
    '1y': '1+ year',
  };
  if (v in map) return map[v];
  if (/^\d+y$/i.test(v)) return `${v.replace(/y/i, '')}+ years`;

  return v;
}

function humanizeMinRevenue(minRevenue?: string): string | null {
  if (!minRevenue) return null;
  const v = String(minRevenue).trim().toLowerCase();
  const kMatch = v.match(/(\d+(?:\.\d+)?)\s*k/);
  if (kMatch) return `$${kMatch[1]}K+`;
  const asNum = Number(v.replace(/[^\d.]/g, ''));
  if (Number.isFinite(asNum) && asNum > 0) return `$${asNum.toLocaleString()}+`;

  return minRevenue;
}

function humanizeMinCreditScore(minCreditScore?: string): string | null {
  if (!minCreditScore) return null;
  const v = String(minCreditScore).trim();
  const n = Number(v.replace(/[^\d]/g, ''));
  if (Number.isFinite(n) && n > 0) return String(n);
  const map: Record<string, string> = {
    poor: '350–629',
    fair: '630–689',
    good: '690–719',
    excellent: '720–850',
  };
  const key = v.toLowerCase();

  return map[key] ?? v;
}

/**
 * Processes CTA URL to append gclid, fclid, wbraid, or fbclid to tracking parameters
 * Applies sub_id_1 and sub1 to all brands
 * For Lendzi URLs, populates click_id parameter with tracking ID
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

    // Parse the base URL
    const url = new URL(baseUrl);

    // Handle Lendzi URL format - populate click_id parameter
    if (url.hostname.includes('lendzi.com') && url.searchParams.has('click_id')) {
      const clickIdValue = url.searchParams.get('click_id');
      // If click_id is empty or exists, populate it with tracking ID
      if (trackingId && (clickIdValue === '' || clickIdValue === null)) {
        url.searchParams.set('click_id', trackingId);
      }
    }

    // Apply sub_id_1 and sub1 to all brands (only if tracking ID exists)
    if (trackingId) {
    url.searchParams.set('sub_id_1', trackingId);
    url.searchParams.set('sub1', trackingId);
    }

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
        className={`lg:hidden bg-white rounded shadow-2xl overflow-hidden relative ${
          rank === 1 ? 'border-2 border-[var(--color-primary)]/70' : 'border-2 border-slate-200'
        }`}
      >
        {/* Rank Number - Top Left Corner */}
        <div className="absolute top-0 left-0 w-7 h-7 bg-[var(--color-primary)] rounded-br flex items-center justify-center z-10">
          <span className="text-white font-bold text-sm">{rank}</span>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="p-4 pt-10 flex gap-3">
          {/* Left Column */}
          <div className="flex-[1.5] flex flex-col items-center">
            {/* Logo */}
            <div className="flex items-center justify-center min-h-[40px] w-full">
              {lender.logo ? (
                <div className="relative w-full h-16">
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
            <div className="text-3xl font-semibold text-black">{lender.ourScore}</div>

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
              className={[
                'w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]',
                'text-white font-extrabold group',
              ].join(' ')}
              style={{
                padding: '8px 11px',
                borderRadius: '6px',
                fontSize: '14px',
                height: 'auto',
                fontWeight: '700',
              }}
              onClick={() => {
                trackBrandClick(lender.name, pageName, impressionId);
                // Report Google Ads conversion
                gtag_report_conversion();
                window.open(processedCtaUrl || '#', '_blank');
              }}
            >
              <span className="inline-flex items-center">
              EXPLORE
                <ChevronsRight
                  className="ml-1 w-[16px] h-[16px] transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>
            </Button>

            {/* Phone Number - Hidden on Mobile */}
            {lender.phoneNumber && lender.websiteUrl && (
              <a
                href={lender.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1 text-[10px] text-black hover:text-[var(--color-primary)] underline"
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

        <div className="px-6 pt-5 pb-4">
          <div className="grid grid-cols-[220px_1fr_240px] gap-6">
            {/* Logo (left) */}
            <div className="flex items-start justify-center pt-4">
              {lender.logo ? (
                <div className="relative w-[200px] h-[64px]">
                  <Image
                    src={lender.logo}
                    alt={lender.name}
                    fill
                    className="object-contain object-center"
                    sizes="200px"
                    priority={rank <= 3}
                    loading={rank <= 3 ? 'eager' : 'lazy'}
                    fetchPriority={rank === 1 ? 'high' : rank <= 3 ? 'auto' : 'low'}
                  />
                </div>
              ) : (
                <span className="font-semibold text-slate-900 text-lg truncate">{lender.name}</span>
              )}
            </div>

            {/* Main (middle) */}
            <div className="min-w-0 pt-1">
              <div className="text-base font-semibold text-slate-900">{lender.name}</div>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                {typeof lender.reviewCount === 'number' && (
                  <span className="font-medium text-slate-700">
                    {lender.reviewCount.toLocaleString()} reviews
                  </span>
                )}
                <span>by</span>
                <span className="inline-flex items-center gap-1 font-medium text-slate-700">
                  <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  Trustpilot
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                {pickDesktopBullets(lender).map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-slate-700 min-w-0">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="truncate">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right (score + CTA) */}
            <div className="flex flex-col items-end gap-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="text-right">
                  <div className="text-4xl font-bold text-slate-900 leading-none">
                    {lender.ourScore.toFixed(1)}
                  </div>
                  <div className="mt-1 flex items-center justify-end gap-2">
                    <StarRating score={lender.ourScore} />
                    <span className="text-xs text-slate-600">
                      {lender.ourScore >= 9
                        ? 'Excellent'
                        : lender.ourScore >= 8
                          ? 'Great'
                          : lender.ourScore >= 7
                            ? 'Good'
                            : 'Fair'}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                className={[
                  'bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]',
                  'text-white rounded font-semibold transition-all',
                  'h-11 px-10',
                ].join(' ')}
                style={{ borderRadius: '0.25rem', margin: 0, border: 0 }}
                onClick={() => {
                  trackBrandClick(lender.name, pageName, impressionId);
                  gtag_report_conversion();
                  window.open(processedCtaUrl || '#', '_blank');
                }}
              >
                Explore
              </Button>
            </div>
          </div>

          {/* Bottom details row */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="grid grid-cols-[220px_repeat(4,max-content)] grid-rows-2 gap-x-8 gap-y-1 items-start">
              {/* Row 1: labels */}
              <div />
              <div className="text-xs text-slate-500">Loan Amount</div>
              <div className="text-xs text-slate-500">Time In Business</div>
              <div className="text-xs text-slate-500">Monthly Revenue</div>
              <div className="text-xs text-slate-500">Min. Credit Score</div>

              {/* Row 2: values (and More Details aligned with values) */}
              <div className="text-base font-semibold text-slate-700 text-center">More Details:</div>
              <div className="text-base font-semibold text-slate-900">{lender.amount ?? '—'}</div>
              <div className="text-base font-semibold text-slate-900">
                {humanizeMinTimeInBusiness(lender.minTimeInBusiness) ?? '—'}
              </div>
              <div className="text-base font-semibold text-slate-900">
                {humanizeMinRevenue(lender.minRevenue) ?? '—'}
              </div>
              <div className="text-base font-semibold text-slate-900">
                {humanizeMinCreditScore(lender.minCreditScore) ?? '—'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

'use client';

import React, { useMemo } from 'react';
// import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Info, TrendingUp, ChevronsRight, Check, Star } from 'lucide-react';
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
  onReadMore?: (lender: Brand) => void;
}

export function getLenderDeepDiveId(lender: Pick<Brand, 'id' | 'name'>): string {
  const slug = lender.name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return `lender-${lender.id}-${slug}`;
}

function BriteCapLogo({ size = 'desktop' }: { size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';

  return (
    <div
      className={['inline-flex items-center justify-center', 'gap-0', 'select-none'].join(' ')}
      aria-label="BriteCap"
    >
      <span
        className={[
          'font-extrabold tracking-tight',
          isMobile ? 'text-3xl' : 'text-[2.75rem]',
          'text-[#0B3A57]',
          'leading-none',
        ].join(' ')}
      >
        BRITE
      </span>
      <span
        className={[
          'font-extrabold tracking-tight',
          isMobile ? 'text-3xl' : 'text-[2.75rem]',
          'text-[#E7803E]',
          'leading-none',
        ].join(' ')}
      >
        CAP
      </span>
    </div>
  );
}

function getWordmarkMainFontSize(size: 'mobile' | 'desktop'): number {
  // Match BriteCap sizing: text-3xl (~30px) on mobile, 2.75rem (~44px) on desktop
  return size === 'mobile' ? 30 : 44;
}

function LendziWordmark({ size = 'desktop' }: { size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';
  const baseSize = getWordmarkMainFontSize(isMobile ? 'mobile' : 'desktop');
  const mainSize = baseSize + (isMobile ? 10 : 6);
  return (
    <span
      className="inline-flex items-center select-none"
      aria-label="Lendzi"
      style={{
        fontWeight: 800,
        letterSpacing: '-0.02em',
        fontSize: mainSize,
        lineHeight: 1,
      }}
    >
      <span style={{ color: '#0b0f19' }}>lend</span>
      <span style={{ color: '#0b0f19' }}>z</span>
      <span
        className="relative"
        style={{
          color: '#0b0f19',
          display: 'inline-block',
          // no extra top padding; dot is absolutely positioned
          paddingTop: 0,
        }}
      >
        {/* dotless i + custom green dot */}
        {'\u0131'}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            transform: 'translate(-50%, -82%)',
            width: isMobile ? 7 : 8,
            height: isMobile ? 7 : 8,
            borderRadius: 9999,
            background: '#20c58a',
          }}
        />
      </span>
    </span>
  );
}

function CardiffWordmark({ size = 'desktop' }: { size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';
  const baseSize = getWordmarkMainFontSize(isMobile ? 'mobile' : 'desktop');
  const mainSize = baseSize + (isMobile ? 12 : 14);
  return (
    <span
      aria-label="Cardiff"
      className="select-none"
      style={{
        fontWeight: 900,
        letterSpacing: '-0.02em',
        fontSize: mainSize,
        lineHeight: 1,
        color: '#2848a0',
        textTransform: 'lowercase',
      }}
    >
      cardiff
    </span>
  );
}

function AdvanceFundsNetworkWordmark({ size = 'desktop' }: { size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';
  const mainSize = getWordmarkMainFontSize(isMobile ? 'mobile' : 'desktop');
  return (
    <div
      className="inline-flex flex-col leading-none select-none"
      aria-label="Advance Funds Network"
      style={{
        // Force both lines to occupy the same wordmark width
        width: isMobile ? '12ch' : '14ch',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          display: 'block',
          fontWeight: 800,
          fontSize: mainSize,
          letterSpacing: '-0.02em',
          color: '#1870c0',
        }}
      >
        advance
      </span>
      <span
        style={{
          display: 'block',
          marginTop: 2,
          fontWeight: 700,
          fontSize: isMobile ? 18 : 20,
          letterSpacing: '-0.01em',
          color: '#38b028',
        }}
      >
        funds network
      </span>
    </div>
  );
}

function RokFinancialWordmark({ size = 'desktop' }: { size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';
  const mainSize = getWordmarkMainFontSize(isMobile ? 'mobile' : 'desktop');
  return (
    <div
      className="inline-flex flex-col items-center leading-none select-none"
      aria-label="ROK Financial"
      style={{ textAlign: 'center' }}
    >
      <span
        style={{
          display: 'block',
          fontWeight: 900,
          fontSize: mainSize,
          letterSpacing: '0.02em',
          color: '#f02028',
        }}
      >
        ROK
      </span>
      <span
        style={{
          display: 'block',
          marginTop: isMobile ? 2 : 4,
          fontWeight: 700,
          fontSize: isMobile ? 20 : 24,
          letterSpacing: '0.08em',
          color: '#0b0f19',
        }}
      >
        FINANCIAL
      </span>
    </div>
  );
}

function ForaFinancialWordmark({ size = 'desktop' }: { size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';
  const baseSize = getWordmarkMainFontSize(isMobile ? 'mobile' : 'desktop');
  const mainSize = baseSize + (isMobile ? 4 : 6);
  const foraPrimary = '#00097E';
  const foraAccent = '#2026FF';
  return (
    <div className="inline-flex items-end gap-2 select-none" aria-label="Fora Financial">
      <span
        aria-hidden
        className="inline-block"
        style={{
          width: isMobile ? 14 : 16,
          height: isMobile ? 14 : 16,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 4,
          background: '#08b850',
        }}
      />
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontWeight: 900,
            fontSize: mainSize,
            letterSpacing: '-0.02em',
            color: foraPrimary,
          }}
        >
          fora
        </span>
        <span
          style={{
            marginTop: 2,
            fontWeight: 800,
            fontSize: isMobile ? 13 : 15,
            letterSpacing: '0.18em',
            color: foraAccent,
          }}
        >
          FINANCIAL
        </span>
      </div>
    </div>
  );
}

function UplyftCapitalWordmark({ size = 'desktop' }: { size?: 'mobile' | 'desktop' }) {
  const isMobile = size === 'mobile';
  const mainSize = getWordmarkMainFontSize(isMobile ? 'mobile' : 'desktop');
  return (
    <div
      className="inline-flex flex-col items-center leading-none select-none"
      aria-label="Uplyft Capital"
      style={{ textAlign: 'center' }}
    >
      <span
        style={{
          display: 'block',
          fontWeight: 800,
          fontSize: mainSize,
          letterSpacing: '-0.02em',
          color: '#100048',
        }}
      >
        uplyft
      </span>
      <span
        style={{
          display: 'block',
          marginTop: isMobile ? 2 : 4,
          fontWeight: 700,
          fontSize: isMobile ? 26 : 34,
          letterSpacing: '-0.02em',
          color: '#b0b0c0',
        }}
      >
        capital
      </span>
    </div>
  );
}

function BrandWordmark({
  lender,
  size,
}: {
  lender: Pick<Brand, 'name' | 'id'>;
  size: 'mobile' | 'desktop';
}) {
  const key = lender.name.toLowerCase();
  if (key === 'britecap') return <BriteCapLogo size={size} />;
  if (key === 'lendzi') return <LendziWordmark size={size} />;
  if (key === 'cardiff') return <CardiffWordmark size={size} />;
  if (key === 'advance funds network') return <AdvanceFundsNetworkWordmark size={size} />;
  if (key === 'rok financial') return <RokFinancialWordmark size={size} />;
  if (key === 'fora financial') return <ForaFinancialWordmark size={size} />;
  // businessLoansData uses "Uplyft" as the name
  if (key === 'uplyft' || key === 'uplyft capital') return <UplyftCapitalWordmark size={size} />;
  return null;
}

function getLenderChannelBullet(lender: Brand): 'Direct lender' | 'Broker' {
  const key = String(lender.name ?? '')
    .trim()
    .toLowerCase();

  // User-provided classification:
  // Direct lenders: Lendzi, BriteCap, Cardiff, Fora, Uplyft
  if (
    key === 'lendzi' ||
    key === 'britecap' ||
    key === 'cardiff' ||
    key === 'fora financial' ||
    key === 'uplyft' ||
    key === 'uplyft capital'
  ) {
    return 'Direct lender';
  }

  return 'Broker';
}

type DesktopBullet =
  | { type: 'loanAmount'; amount: string }
  | { type: 'channel'; value: 'Direct lender' | 'Broker' }
  | { type: 'restrictedIndustries'; items: string[] }
  | { type: 'restrictedStates'; items: string[] }
  | { type: 'text'; text: string };

function asList(v: unknown): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v.map(String).map((s) => s.trim()).filter(Boolean);
  return [String(v).trim()].filter(Boolean);
}

function RestrictionBullet({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  const hasItems = items.length > 0;
  return (
    <span className="min-w-0">
      <span>{label} </span>
      {hasItems ? (
        <span className="relative inline-flex items-center group">
          <button
            type="button"
            className="underline underline-offset-2 decoration-slate-300 hover:decoration-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30"
          >
            View list
          </button>
          <span className="pointer-events-auto absolute left-0 bottom-full z-[9999] mb-2 hidden w-[320px] rounded-sm border border-slate-200 bg-white p-3 text-xs text-slate-800 shadow-2xl group-hover:block group-focus-within:block">
            <div className="font-semibold text-slate-900 mb-2">{label.trim()}</div>
            <ul className="max-h-56 overflow-auto list-disc pl-4 space-y-1">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </span>
        </span>
      ) : (
        <span>None</span>
      )}
    </span>
  );
}

function pickDesktopBullets(lender: Brand): DesktopBullet[] {
  const card = (lender.cardCheckmarks ?? []).filter(Boolean);
  const bullets: DesktopBullet[] = [];

  // Always show loan amount first on desktop cards
  if (lender.amount) bullets.push({ type: 'loanAmount', amount: lender.amount });

  // Second bullet: direct lender vs broker
  bullets.push({ type: 'channel', value: getLenderChannelBullet(lender) });

  // Third & fourth bullets: restrictions (always)
  bullets.push({ type: 'restrictedIndustries', items: asList(lender.restrictedIndustries) });
  bullets.push({ type: 'restrictedStates', items: asList(lender.restrictedStates) });

  // Backfill from goodDetails if we still need more
  for (const d of card.length ? card : lender.goodDetails ?? []) {
    if (bullets.length >= 4) break;
    if (!bullets.some((b) => b.type === 'text' && b.text === d)) bullets.push({ type: 'text', text: d });
  }

  // Backfill from qualifiers if we still need more
  if (bullets.length < 4) {
    const revenue = humanizeMinRevenue(lender.minRevenue);
    if (revenue) bullets.push({ type: 'text', text: `Monthly revenue: ${revenue}` });
  }
  if (bullets.length < 4) {
    const time = humanizeMinTimeInBusiness(lender.minTimeInBusiness);
    if (time) bullets.push({ type: 'text', text: `Time in business: ${time}` });
  }
  if (bullets.length < 4) {
    const credit = humanizeMinCreditScore(lender.minCreditScore);
    if (credit) bullets.push({ type: 'text', text: `Min. credit score: ${credit}` });
  }

  // As a last resort, include highlight
  if (
    bullets.length < 4 &&
    lender.highlight &&
    !bullets.some((b) => b.type === 'text' && b.text === lender.highlight)
  ) {
    bullets.push({ type: 'text', text: lender.highlight });
  }

  if (bullets.length === 0) bullets.push({ type: 'text', text: 'Fast online application' });

  return bullets.slice(0, 4);
}

function humanizeMinTimeInBusiness(minTimeInBusiness?: string): string | null {
  if (!minTimeInBusiness) return null;
  const v = String(minTimeInBusiness).trim();
  const map: Record<string, string> = {
    '0_6m': '0–6 months',
    '6m_1y': '6+ months',
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
  if (Number.isFinite(n) && n > 0) return `${n}+`;
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

export default function LenderCard({ lender, rank, amountLabel, onReadMore }: LenderCardProps) {
  const { impressionId } = useImpression();
  const pathname = usePathname();
  const pageName = useMemo(() => getPageNameFromRoute(pathname || ''), [pathname]);
  const isLendzi = lender.id === 1 || lender.name.toLowerCase() === 'lendzi';
  const mobileLogoCentered = useMemo(() => {
    const key = lender.name.toLowerCase();
    return key === 'lendzi' || key === 'britecap' || key === 'cardiff';
  }, [lender.name]);

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

  /** Home “We make things easier” card hover — this wrapper is `hidden lg:block` only */
  const homeCardMotionDesktop =
    'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[10px] hover:scale-[1.03] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.15),0_10px_10px_-5px_rgba(0,0,0,0.1)]';

  return (
    <>
      {/* Mobile Card - Simple Layout (no card-level hover motion) */}
      <div
        className={`lg:hidden bg-white rounded-md shadow-lg overflow-hidden relative ${
          rank === 1 ? 'border-2 border-[var(--color-primary)]/70' : 'border border-slate-200'
        }`}
      >
        {/* Rank Number - Top Left Corner */}
        <div className="absolute top-0 left-0 w-7 h-7 !bg-[var(--color-primary)] rounded-br flex items-center justify-center z-10">
          <span className="text-white font-bold text-sm">{rank}</span>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="p-4 pt-10 flex gap-3 items-stretch">
          {/* Left Column */}
          <div className="flex-[1.5] flex flex-col items-center min-h-0">
            {/* Logo (top) */}
            <div className="w-full h-14 flex justify-center flex-none">
              {BrandWordmark({ lender, size: 'mobile' }) ? (
                <div
                  className={[
                    'w-full h-full flex justify-center',
                    mobileLogoCentered ? 'items-end pb-1' : 'items-start pt-1',
                  ].join(' ')}
                >
                  <BrandWordmark lender={lender} size="mobile" />
                </div>
              ) : lender.logo ? (
                <div className="relative w-full h-14">
                  <Image
                    src={lender.logo}
                    alt={lender.name}
                    fill
                    className={['object-contain'].join(' ')}
                    sizes="(max-width: 768px) 100px, 150px"
                    priority={rank <= 3}
                    loading={rank <= 3 ? 'eager' : 'lazy'}
                    fetchPriority={rank === 1 ? 'high' : rank <= 3 ? 'auto' : 'low'}
                  />
                </div>
              ) : (
                <span className="font-bold text-black text-base text-center">{lender.name}</span>
              )}
            </div>

            {/* Fixed whitespace between logo and amount */}
            <div className="h-6" aria-hidden />

            {/* Amount pinned to top of its section */}
            <div className="w-full flex-none">
              {lender.amount && amountLabel && (
                <div className="text-center lg:hidden">
                  <p className="text-xs text-black mb-1 font-medium">{amountLabel}</p>
                  <p className="text-2xl font-bold text-black">{lender.amount}</p>
                </div>
              )}
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="w-px bg-slate-200" />

          {/* Right Column */}
          <div className="flex-[1.2] flex flex-col items-center min-w-0">
            {/* Score (top) */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-4xl font-bold text-black leading-none">
                {lender.ourScore.toFixed(1)}
              </div>

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
            </div>

            {/* CTA pinned to bottom (align with left amount) */}
            <div className="mt-auto w-full flex flex-col items-center gap-2 pb-1">
              <Button
                variant="primary"
                className={[
                  'w-[95%] text-white font-semibold group rounded-none',
                  '!bg-[var(--color-primary-dark)] hover:!bg-[var(--color-primary-darker)] active:!bg-[var(--color-primary-darker)]',
                ].join(' ')}
                style={{
                  padding: '10px 11px',
                  borderRadius: 0,
                  fontSize: '14px',
                  height: 'auto',
                  fontWeight: '700',
                }}
                onClick={() => {
                  trackBrandClick(lender.name, pageName, impressionId);
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

              {lender.websiteUrl ? (
                <a
                  href="#"
                  className="text-[11px] text-black hover:underline"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onReadMore) {
                      onReadMore(lender);

                      return;
                    }

                    trackBrandClick(lender.name, pageName, impressionId);
                    gtag_report_conversion();
                    window.open(lender.websiteUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  Or read more
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Footer Strip - Only for Rank 1 (mobile) */}
        {rank === 1 && (
          <div className="!bg-[var(--color-primary)] text-white text-center py-2.5 px-4">
            <p className="text-xs flex items-center justify-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>1407 people visited this site this week</span>
            </p>
          </div>
        )}
      </div>

      {/* Desktop Card - Full Layout */}
      <div
        className={`hidden lg:block bg-white rounded overflow-visible relative isolate hover:z-50 ${homeCardMotionDesktop} ${
          rank === 1
            ? 'border-2 border-[#2a3d66]/70 hover:border-[var(--color-primary)]'
            : 'border-2 border-[#d4eaf2] hover:border-[var(--color-primary)]'
        }`}
      >
        {/* Rank Number - Top Left Corner */}
        <div className="absolute top-0 left-0 w-[34px] h-[34px] !bg-[var(--color-primary)] rounded-br flex items-center justify-center z-10">
          <span className="text-white font-bold text-[15px] leading-none">{rank}</span>
        </div>

        <div className="px-6 pt-5 pb-4">
          <div className="grid grid-cols-[220px_1fr_240px] gap-6">
            {/* Logo (left) */}
            <div className="flex items-center justify-center">
              {BrandWordmark({ lender, size: 'desktop' }) ? (
                <div className="w-[250px] h-[78px] flex items-center justify-center">
                  <BrandWordmark lender={lender} size="desktop" />
                </div>
              ) : lender.logo ? (
                <div
                  className={[
                    'relative w-[200px] h-[64px] overflow-visible',
                    isLendzi ? 'mt-2' : '',
                  ].join(' ')}
                >
                  <Image
                    src={lender.logo}
                    alt={lender.name}
                    fill
                    className={['object-contain object-center'].join(' ')}
                    sizes="200px"
                    priority={rank <= 3}
                    loading={rank <= 3 ? 'eager' : 'lazy'}
                    fetchPriority={rank === 1 ? 'high' : rank <= 3 ? 'auto' : 'low'}
                  />
                </div>
              ) : (
                <span className="font-semibold text-black text-lg truncate">{lender.name}</span>
              )}
            </div>

            {/* Main (middle) */}
            <div className="min-w-0 pt-1">
              <div className="text-base font-semibold text-black">{lender.name}</div>

              <div className="mt-1 flex items-center gap-2 text-sm text-black">
                {typeof lender.reviewCount === 'number' && (
                  <span className="font-medium text-black">
                    {lender.reviewCount.toLocaleString()} reviews
                  </span>
                )}
                <span>by</span>
                <span className="inline-flex items-center gap-1 font-medium text-black">
                  <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  Trustpilot
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                {pickDesktopBullets(lender).map((b) => (
                  <div
                    key={
                      b.type === 'loanAmount'
                        ? 'loanAmount'
                        : b.type === 'channel'
                          ? 'channel'
                          : b.type === 'restrictedIndustries'
                            ? 'restrictedIndustries'
                            : b.type === 'restrictedStates'
                              ? 'restrictedStates'
                              : b.text
                    }
                    className="flex items-start gap-2 text-sm text-black min-w-0"
                  >
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    {b.type === 'loanAmount' ? (
                      <span className="truncate">
                        <span className="underline">Loan amount</span>
                        {`: ${b.amount}`}
                      </span>
                    ) : b.type === 'channel' ? (
                      <span className="truncate">{b.value}</span>
                    ) : b.type === 'restrictedIndustries' ? (
                      <RestrictionBullet label="Restricted industries:" items={b.items} />
                    ) : b.type === 'restrictedStates' ? (
                      <RestrictionBullet label="Restricted states:" items={b.items} />
                    ) : (
                      <span className="truncate">{b.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right (score + CTA) */}
            <div className="flex h-full flex-col items-center justify-center gap-4">
              <div className="flex items-start justify-center gap-2 w-full">
                <div className="text-4xl font-bold text-black leading-none">
                  {lender.ourScore.toFixed(1)}
                </div>

                <div className="flex flex-col items-end gap-1 pt-0.5">
                  <StarRating score={lender.ourScore} />
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-black self-start">
                    <span>
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

              <div className="w-[200px] self-center flex flex-col items-center gap-2">
                <Button
                  variant="primary"
                  className={[
                    'text-white font-semibold transition-all rounded-none group',
                    '!bg-[var(--color-primary-dark)] hover:!bg-[var(--color-primary-darker)] active:!bg-[var(--color-primary-darker)]',
                    'transform-gpu will-change-transform',
                    'duration-200 ease-out',
                    'hover:-translate-y-0.5 hover:scale-[1.02]',
                    'hover:brightness-95 hover:shadow-lg active:translate-y-0 active:scale-[0.99] active:brightness-90',
                    'h-10 w-[95%] text-sm whitespace-nowrap',
                  ].join(' ')}
                  style={{ margin: 0, border: 0, borderRadius: 0 }}
                  onClick={() => {
                    trackBrandClick(lender.name, pageName, impressionId);
                    gtag_report_conversion();
                    window.open(processedCtaUrl || '#', '_blank');
                  }}
                >
                  <span className="inline-flex items-center">
                    View Rates
                    <ChevronsRight
                      className="ml-1 inline-block align-middle w-[1.05em] h-[1.05em] transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                </Button>

                {lender.websiteUrl && (
                  <a
                    href="#"
                    className="text-xs text-black hover:underline"
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onReadMore) {
                        onReadMore(lender);

                        return;
                      }

                      trackBrandClick(lender.name, pageName, impressionId);
                      gtag_report_conversion();
                      window.open(lender.websiteUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Or read more
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom details row */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="grid grid-cols-[220px_repeat(4,max-content)] grid-rows-2 gap-x-8 gap-y-1 items-start">
              {/* Row 1: labels */}
              <div />
              <div className="text-xs text-black">Time In Business</div>
              <div className="text-xs text-black">Monthly Revenue</div>
              <div className="text-xs text-black">Min. Credit Score</div>
              <div className="text-xs text-black">Business bank account</div>

              {/* Row 2: values (and More Details aligned with values) */}
              <div className="text-base font-semibold text-black text-center">Requirements:</div>
              <div className="text-base font-semibold text-black">
                {humanizeMinTimeInBusiness(lender.minTimeInBusiness) ?? '—'}
              </div>
              <div className="text-base font-semibold text-black">
                {humanizeMinRevenue(lender.minRevenue) ?? '—'}
              </div>
              <div className="text-base font-semibold text-black">
                {humanizeMinCreditScore(lender.minCreditScore) ?? '—'}
              </div>
              <div className="text-base font-semibold text-black">
                {(lender.businessBankAccountRequired ?? true) ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

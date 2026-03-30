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
import { useComparisonDesignVariant } from '@/contexts/ComparisonDesignVariantContext';
import { trackBrandClick, getPageNameFromRoute } from '@/lib/impression';
import { gtag_report_conversion } from '@/lib/googleAds';
import { processCtaUrl } from '@/lib/processCtaUrl';

interface LenderCardProps {
  lender: Brand;
  rank: number;
  amountLabel?: string;
  onReadMore?: (lender: Brand) => void;
  /** Desktop: simplified conversion layout (business comparison v1). */
  conversionDesktop?: boolean;
  /** Desktop: featured / recommended treatment (conversion layout). */
  conversionFeatured?: boolean;
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
  if (Array.isArray(v))
    return v
      .map(String)
      .map((s) => s.trim())
      .filter(Boolean);

  return [String(v).trim()].filter(Boolean);
}

function RestrictionBullet({ label, items }: { label: string; items: string[] }) {
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
  for (const d of card.length ? card : (lender.goodDetails ?? [])) {
    if (bullets.length >= 4) break;
    if (!bullets.some((b) => b.type === 'text' && b.text === d))
      bullets.push({ type: 'text', text: d });
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

type ConversionBullet =
  | { type: 'loanAmount'; amount: string }
  | { type: 'channel'; value: 'Direct lender' | 'Broker' }
  | { type: 'text'; text: string };

function pickConversionBullets(lender: Brand): ConversionBullet[] {
  const bullets: ConversionBullet[] = [];
  if (lender.amount) bullets.push({ type: 'loanAmount', amount: lender.amount });
  bullets.push({ type: 'channel', value: getLenderChannelBullet(lender) });

  const usedTexts = new Set<string>();
  const textCandidates: string[] = [
    ...(lender.cardCheckmarks ?? []).filter(Boolean).map(String),
    ...(lender.goodDetails ?? []).filter(Boolean).map(String),
  ];
  if (lender.highlight) textCandidates.push(lender.highlight);

  for (const raw of textCandidates) {
    if (bullets.length >= 4) break;
    const s = raw.trim();
    if (!s || usedTexts.has(s)) continue;
    usedTexts.add(s);
    bullets.push({ type: 'text', text: s });
  }

  const fallbacks = [
    'Fast online application',
    'Flexible terms available',
    'Dedicated support team',
    'Secure application process',
  ];
  for (const t of fallbacks) {
    if (bullets.length >= 4) break;
    if (usedTexts.has(t)) continue;
    usedTexts.add(t);
    bullets.push({ type: 'text', text: t });
  }

  return bullets.slice(0, 4);
}

export default function LenderCard({
  lender,
  rank,
  amountLabel,
  onReadMore,
  conversionDesktop = false,
  conversionFeatured = false,
}: LenderCardProps) {
  const { impressionId } = useImpression();
  const comparisonDesignVariant = useComparisonDesignVariant();
  const pathname = usePathname();
  const pageName = useMemo(() => getPageNameFromRoute(pathname || ''), [pathname]);
  const isV2 = comparisonDesignVariant === '2' || comparisonDesignVariant === 'default';
  const lenderNameKey = lender.name.trim().toLowerCase();
  const isLendzi = lender.id === 1 || lenderNameKey === 'lendzi';
  const isRokFinancial = lenderNameKey === 'rok financial';
  const isNerdWallet = lenderNameKey === 'nerdwallet';
  const v2HeadlineOptions = useMemo(
    () => [
      'Cash in the next 24hrs after approval',
      'Grow your small business the right way',
      'Lenders network competes for your business',
      'Best for established businesses with consistent revenue',
      'Top rated for ease & speed of funding process with personalized support',
      'No fees, and no impact on your credit',
      'Trusted by Thousands of Small Businesses Nationwide',
    ],
    []
  );
  const v2HeadlineMaxChars = 58;
  const v2Highlight = typeof lender.highlight === 'string' ? lender.highlight.trim() : '';
  const v2HighlightSafe =
    v2Highlight.length > 0 && v2Highlight.length <= v2HeadlineMaxChars ? v2Highlight : null;
  const v2HeadlineOverridesByLenderName: Record<string, string> = {
    'rok financial': 'Fast funding for established businesses',
    nerdwallet: 'Trusted by small businesses nationwide',
  };
  const v2HeadlineOverride =
    v2HeadlineOverridesByLenderName[lender.name.trim().toLowerCase()] ?? null;
  const v2Headline =
    v2HeadlineOverride ??
    v2HighlightSafe ??
    v2HeadlineOptions[
      Math.abs((typeof lender.id === 'number' ? lender.id : rank) * 97 + rank) %
        v2HeadlineOptions.length
    ];
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
                  trackBrandClick(lender.name, pageName, impressionId, { comparisonDesignVariant });
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

                    trackBrandClick(lender.name, pageName, impressionId, {
                      comparisonDesignVariant,
                    });
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

      {/* Desktop card */}
      {conversionDesktop ? (
        <div
          data-lender-card="desktop"
          data-rank={rank}
          className={[
            'hidden lg:block rounded-lg overflow-visible relative isolate',
            conversionFeatured
              ? 'border-2 border-[#0e824c]/40 bg-gradient-to-br from-emerald-50/95 to-white shadow-[0_12px_40px_rgba(14,130,76,0.12)] hover:shadow-[0_16px_48px_rgba(14,130,76,0.16)] transition-shadow duration-200'
              : 'bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200',
          ].join(' ')}
        >
          <div
            className={[
              'absolute top-0 left-0 z-10 flex h-9 w-9 items-center justify-center rounded-br',
              conversionFeatured ? 'bg-[#0e824c]' : '!bg-[var(--color-primary)]',
            ].join(' ')}
          >
            <span className="text-base font-bold leading-none text-white">{rank}</span>
          </div>

          <div className="px-6 pb-6 pt-8 sm:px-8 lg:pt-9">
            <div className="grid grid-cols-[minmax(200px,230px)_minmax(0,1fr)_280px] items-start gap-x-8 gap-y-6 xl:grid-cols-[minmax(210px,240px)_minmax(0,1fr)_300px] xl:gap-x-12">
              <div className="flex min-h-[4.5rem] items-center justify-center pt-1">
                {BrandWordmark({ lender, size: 'desktop' }) ? (
                  <div className="w-[220px] h-[72px] flex items-center justify-center">
                    <BrandWordmark lender={lender} size="desktop" />
                  </div>
                ) : lender.logo ? (
                  <div
                    className={[
                      'relative w-[180px] h-[60px] overflow-visible',
                      isLendzi ? 'mt-1' : '',
                    ].join(' ')}
                  >
                    <Image
                      src={lender.logo}
                      alt={lender.name}
                      fill
                      className="object-contain object-center"
                      sizes="180px"
                      priority={rank <= 3}
                      loading={rank <= 3 ? 'eager' : 'lazy'}
                      fetchPriority={rank === 1 ? 'high' : rank <= 3 ? 'auto' : 'low'}
                    />
                  </div>
                ) : (
                  <span className="font-semibold text-slate-900 text-base truncate">
                    {lender.name}
                  </span>
                )}
              </div>

              <div className="min-w-0 pt-0.5 lg:max-w-none">
                <div className="mb-2 flex min-h-[2.625rem] flex-wrap items-center gap-x-3 gap-y-1.5">
                  {conversionFeatured ? (
                    <>
                      <span className="inline-flex items-center rounded-full border border-[#0e824c]/25 bg-[#0e824c]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0e824c]">
                        Best overall
                      </span>
                      <span className="text-xs font-medium text-slate-600">
                        Recommended for you
                      </span>
                    </>
                  ) : null}
                </div>
                <div className="text-lg font-bold text-slate-900">{lender.name}</div>
                <p className="mt-1 text-xs text-slate-500 flex flex-wrap items-center gap-x-1.5 gap-y-0">
                  <span className="text-slate-600">Our score {lender.ourScore.toFixed(1)}</span>
                  <span className="text-slate-300" aria-hidden>
                    ·
                  </span>
                  {typeof lender.reviewCount === 'number' ? (
                    <span>{lender.reviewCount.toLocaleString()} Trustpilot reviews</span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" aria-hidden />
                      Trustpilot
                    </span>
                  )}
                </p>

                <ul className="mt-3 flex list-none flex-col gap-2 p-0">
                  {pickConversionBullets(lender).map((b, bi) => (
                    <li
                      key={`conv-${bi}-${b.type}`}
                      className="flex items-start gap-2 text-sm text-slate-800 min-w-0"
                    >
                      <Check className="w-4 h-4 text-[#0e824c] mt-0.5 flex-shrink-0" aria-hidden />
                      {b.type === 'loanAmount' ? (
                        <span className="leading-snug">
                          <span className="font-medium">Loan amount:</span> {b.amount}
                        </span>
                      ) : b.type === 'channel' ? (
                        <span className="leading-snug">{b.value}</span>
                      ) : (
                        <span className="leading-snug">{b.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-stretch justify-start gap-3 pt-1 lg:self-stretch lg:border-l lg:border-slate-200/80 lg:pt-2 lg:pl-6 xl:pl-8">
                <button
                  type="button"
                  className="group w-full min-h-[48px] px-5 rounded-lg bg-[#0e824c] text-white text-[15px] font-bold shadow-[0_4px_14px_rgba(14,130,76,0.35)] hover:bg-[#0c7344] hover:shadow-[0_6px_20px_rgba(14,130,76,0.42)] active:translate-y-px transition-all duration-200 flex items-center justify-center gap-1.5"
                  onClick={() => {
                    trackBrandClick(lender.name, pageName, impressionId, {
                      comparisonDesignVariant,
                    });
                    gtag_report_conversion();
                    window.open(processedCtaUrl || '#', '_blank');
                  }}
                >
                  Check your rates
                  <ChevronsRight
                    className="w-[1.1em] h-[1.1em] shrink-0 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </button>
                <p className="text-center text-[11px] text-slate-500 leading-snug px-0.5">
                  Takes 60 seconds · No credit impact
                </p>
                {lender.websiteUrl ? (
                  <button
                    type="button"
                    className="text-xs text-slate-600 hover:text-[#0e824c] underline underline-offset-2 text-center mt-1 pt-3 border-t border-slate-200/90 leading-normal"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onReadMore) {
                        onReadMore(lender);

                        return;
                      }

                      trackBrandClick(lender.name, pageName, impressionId, {
                        comparisonDesignVariant,
                      });
                      gtag_report_conversion();
                      window.open(lender.websiteUrl, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    Visit lender site
                  </button>
                ) : null}
              </div>
            </div>

            <details className="mt-6 pt-5 border-t border-slate-200/90">
              <summary className="cursor-pointer list-none flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 [&::-webkit-details-marker]:hidden">
                <span className="text-[#0e824c] inline-block font-bold" aria-hidden>
                  +
                </span>
                View requirements
              </summary>
              <div className="mt-4 pl-1 sm:pl-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Time in business
                    </div>
                    <div className="font-semibold text-slate-900 mt-0.5">
                      {humanizeMinTimeInBusiness(lender.minTimeInBusiness) ?? '—'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Monthly revenue
                    </div>
                    <div className="font-semibold text-slate-900 mt-0.5">
                      {humanizeMinRevenue(lender.minRevenue) ?? '—'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Min. credit
                    </div>
                    <div className="font-semibold text-slate-900 mt-0.5">
                      {humanizeMinCreditScore(lender.minCreditScore) ?? '—'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Business bank acct.
                    </div>
                    <div className="font-semibold text-slate-900 mt-0.5">
                      {(lender.businessBankAccountRequired ?? true) ? 'Required' : 'Not required'}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      ) : (
        <div
          data-lender-card="desktop"
          data-rank={rank}
          className={`hidden lg:block bg-white overflow-visible relative isolate hover:z-50 ${homeCardMotionDesktop} ${
            isV2 ? 'rounded-none' : 'rounded'
          } ${
            rank === 1
              ? 'border-2 border-[#2a3d66]/70 hover:border-[var(--color-primary)]'
              : 'border-2 border-[#d4eaf2] hover:border-[var(--color-primary)]'
          }`}
        >
          <div className="absolute top-0 left-0 w-[34px] h-[34px] !bg-[var(--color-primary)] rounded-br flex items-center justify-center z-10">
            <span className="text-white font-bold text-[15px] leading-none">{rank}</span>
          </div>

          <div className={isV2 ? 'px-12 pt-6 pb-5' : 'px-6 pt-5 pb-4'}>
            <div
              className={
                isV2
                  ? 'grid grid-cols-[240px_minmax(0,1fr)_260px] gap-x-10 gap-y-6 items-start'
                  : 'grid grid-cols-[220px_1fr_240px] gap-6'
              }
            >
              <div
                className={
                  isV2
                    ? 'grid grid-rows-[74px_auto] justify-items-center content-start pt-1 gap-4'
                    : 'flex items-center justify-center'
                }
              >
                {isV2 ? (
                  <div className="w-full h-[74px] flex items-center justify-center">
                    {BrandWordmark({ lender, size: 'desktop' }) ? (
                      <div className="w-[230px] h-[74px] flex items-center justify-center">
                        <div className={isRokFinancial ? 'scale-[0.9]' : ''}>
                          <BrandWordmark lender={lender} size="desktop" />
                        </div>
                      </div>
                    ) : lender.logo ? (
                      <div
                        className={[
                          'relative overflow-visible',
                          isNerdWallet ? 'w-[220px] h-[54px]' : 'w-[210px] h-[66px]',
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
                    ) : null}
                  </div>
                ) : BrandWordmark({ lender, size: 'desktop' }) ? (
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

                {isV2 ? (
                  <div className="flex items-start justify-center gap-3 w-full">
                    <div className="text-[44px] font-extrabold text-black leading-none">
                      {lender.ourScore.toFixed(1)}
                    </div>

                    <div className="flex flex-col items-end gap-1.5 pt-1">
                      <StarRating score={lender.ourScore} />
                      <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 self-start">
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
                ) : null}
              </div>

              <div className={isV2 ? 'min-w-0 pt-0.5' : 'min-w-0 pt-1'}>
                {!isV2 ? (
                  <div className="text-base font-semibold text-black">{lender.name}</div>
                ) : null}

                {!isV2 ? (
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
                ) : null}

                <div className={isV2 ? 'mt-2.5 flex flex-col gap-2.5' : 'mt-3 flex flex-col gap-2'}>
                  {isV2 ? (
                    <div className="font-bold text-slate-900 text-[15px] leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                      {v2Headline}
                    </div>
                  ) : null}
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
                      className={
                        isV2
                          ? 'flex items-start gap-2 text-[14px] leading-snug text-slate-800 min-w-0'
                          : 'flex items-start gap-2 text-sm text-black min-w-0'
                      }
                    >
                      <Check
                        className={
                          isV2
                            ? 'w-[15px] h-[15px] text-emerald-600 mt-0.5 flex-shrink-0'
                            : 'w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0'
                        }
                      />
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

              <div
                className={
                  isV2
                    ? 'flex h-full flex-col items-center justify-start gap-4 pt-1'
                    : 'flex h-full flex-col items-center justify-center gap-4'
                }
              >
                {!isV2 ? (
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
                ) : null}

                <div
                  className={
                    isV2
                      ? 'w-[220px] self-center flex flex-col items-center gap-3'
                      : 'w-[200px] self-center flex flex-col items-center gap-2'
                  }
                >
                  {isV2 ? (
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-black">
                        <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" aria-hidden />
                        Trustpilot
                      </div>
                      {typeof lender.reviewCount === 'number' ? (
                        <div className="text-sm text-slate-500 leading-none">
                          (Over {Math.max(1, Math.round(lender.reviewCount / 1000))}k Reviews)
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                  <Button
                    variant="primary"
                    className={[
                      isV2
                        ? 'group w-full text-white font-extrabold tracking-wide transition-all rounded-none'
                        : 'text-white font-semibold transition-all rounded-none group',
                      isV2
                        ? '!bg-[#142c3f] hover:!bg-[#102538] active:!bg-[#0e2030]'
                        : '!bg-[var(--color-primary-dark)] hover:!bg-[var(--color-primary-darker)] active:!bg-[var(--color-primary-darker)]',
                      'transform-gpu will-change-transform',
                      'duration-200 ease-out',
                      isV2
                        ? 'hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0'
                        : 'hover:-translate-y-0.5 hover:scale-[1.02]',
                      isV2
                        ? 'h-14 text-[16px] whitespace-nowrap shadow-[0_18px_34px_rgba(10,20,30,0.22)]'
                        : 'hover:brightness-95 hover:shadow-lg active:translate-y-0 active:scale-[0.99] active:brightness-90 h-10 w-[95%] text-sm whitespace-nowrap',
                    ].join(' ')}
                    style={
                      isV2
                        ? { margin: 0, border: 0, borderRadius: 0 }
                        : { margin: 0, border: 0, borderRadius: 0, fontSize: 14 }
                    }
                    onClick={() => {
                      trackBrandClick(lender.name, pageName, impressionId, {
                        comparisonDesignVariant,
                      });
                      gtag_report_conversion();
                      window.open(processedCtaUrl || '#', '_blank');
                    }}
                  >
                    <span className="inline-flex items-center">
                      {isV2 ? 'VISIT SITE' : 'View Rates'}
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
                      className={
                        isV2
                          ? 'text-sm text-slate-500 hover:text-black'
                          : 'text-xs text-black hover:underline'
                      }
                      role="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onReadMore) {
                          onReadMore(lender);

                          return;
                        }

                        trackBrandClick(lender.name, pageName, impressionId, {
                          comparisonDesignVariant,
                        });
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

            <div
              className={
                isV2
                  ? 'mt-5 pt-4 border-t border-slate-200/80'
                  : 'mt-4 pt-4 border-t border-slate-200'
              }
            >
              <div
                className={
                  isV2
                    ? 'grid grid-cols-[220px_repeat(4,minmax(0,1fr))] grid-rows-2 gap-x-8 gap-y-0 items-start'
                    : 'grid grid-cols-[220px_repeat(4,max-content)] grid-rows-2 gap-x-8 gap-y-1 items-start'
                }
              >
                <div />
                <div
                  className={
                    isV2
                      ? 'text-[11px] font-semibold tracking-wide text-slate-500 leading-none'
                      : 'text-xs text-black'
                  }
                >
                  Time In Business
                </div>
                <div
                  className={
                    isV2
                      ? 'text-[11px] font-semibold tracking-wide text-slate-500 leading-none'
                      : 'text-xs text-black'
                  }
                >
                  Monthly Revenue
                </div>
                <div
                  className={
                    isV2
                      ? 'text-[11px] font-semibold tracking-wide text-slate-500 leading-none'
                      : 'text-xs text-black'
                  }
                >
                  Min. Credit Score
                </div>
                <div
                  className={
                    isV2
                      ? 'text-[11px] font-semibold tracking-wide text-slate-500 leading-none'
                      : 'text-xs text-black'
                  }
                >
                  Business bank account
                </div>

                <div
                  className={
                    isV2
                      ? 'text-sm font-semibold text-slate-900 text-center leading-tight'
                      : 'text-base font-semibold text-black text-center'
                  }
                >
                  Requirements:
                </div>
                <div
                  className={
                    isV2
                      ? 'text-sm font-semibold text-slate-900 leading-tight mt-[2px]'
                      : 'text-base font-semibold text-black'
                  }
                >
                  {humanizeMinTimeInBusiness(lender.minTimeInBusiness) ?? '—'}
                </div>
                <div
                  className={
                    isV2
                      ? 'text-sm font-semibold text-slate-900 leading-tight mt-[2px]'
                      : 'text-base font-semibold text-black'
                  }
                >
                  {humanizeMinRevenue(lender.minRevenue) ?? '—'}
                </div>
                <div
                  className={
                    isV2
                      ? 'text-sm font-semibold text-slate-900 leading-tight mt-[2px]'
                      : 'text-base font-semibold text-black'
                  }
                >
                  {humanizeMinCreditScore(lender.minCreditScore) ?? '—'}
                </div>
                <div
                  className={
                    isV2
                      ? 'text-sm font-semibold text-slate-900 leading-tight mt-[2px]'
                      : 'text-base font-semibold text-black'
                  }
                >
                  {(lender.businessBankAccountRequired ?? true) ? 'Yes' : 'No'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

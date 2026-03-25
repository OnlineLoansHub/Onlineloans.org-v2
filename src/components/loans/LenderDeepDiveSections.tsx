'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import type { Brand } from '@/data/brands';
import { Button } from '@/components/ui/Button/Button';
import { useImpression } from '@/contexts/ImpressionContext';
import { trackBrandClick, getPageNameFromRoute } from '@/lib/impression';
import { gtag_report_conversion } from '@/lib/googleAds';
import { getLenderDeepDiveId } from '@/components/loans/LenderCard';

function BriteCapMiniLogo() {
  return (
    <div
      className="inline-flex items-center justify-center gap-0 select-none"
      aria-label="BriteCap"
    >
      <span className="font-extrabold tracking-tight text-2xl text-[#0B3A57] leading-none">
        BRITE
      </span>
      <span className="font-extrabold tracking-tight text-2xl text-[#E7803E] leading-none">
        CAP
      </span>
    </div>
  );
}

function RokMiniLogo() {
  return (
    <div className="inline-flex items-baseline gap-1 select-none" aria-label="ROK Financial">
      <span className="font-black tracking-tight text-3xl leading-none text-red-600">ROK</span>
      <span className="font-semibold tracking-tight text-base leading-none text-slate-600">
        Financial
      </span>
    </div>
  );
}

function UplyftMiniLogo() {
  return (
    <div className="inline-flex items-center gap-0.5 select-none" aria-label="Uplyft">
      <span className="font-black tracking-tight text-3xl leading-none text-purple-600">UP</span>
      <span className="font-black tracking-tight text-3xl leading-none text-purple-600">
        LYFT
      </span>
    </div>
  );
}

function ForaMiniLogo() {
  return (
    <div className="inline-flex items-center gap-1 select-none" aria-label="Fora Financial">
      <span className="font-black tracking-tight text-3xl leading-none text-emerald-600">
        FORA
      </span>
      <span className="font-semibold tracking-tight text-base leading-none text-slate-600">
        Financial
      </span>
    </div>
  );
}

function formatProductType(t: string): string {
  const map: Record<string, string> = {
    term_loan: 'term loans',
    line_of_credit: 'lines of credit',
    working_capital: 'working capital loans',
    merchant_cash_advance: 'merchant cash advances',
    equipment_financing: 'equipment financing',
    sba_loan: 'SBA loans',
    invoice_financing: 'invoice financing',
    other: 'other financing options',
  };
  return map[t] ?? t.replace(/_/g, ' ');
}

function buildCompanyParagraph(lender: Brand): string {
  if (lender.companyOverview) return lender.companyOverview;

  const products = (lender.productTypes ?? []).slice(0, 4).map(formatProductType);
  const productsText =
    products.length >= 3
      ? `${products.slice(0, -1).join(', ')}, and ${products[products.length - 1]}`
      : products.join(' and ');

  const qualifiers: string[] = [];
  if (lender.minCreditScore) qualifiers.push(`a minimum credit score around ${lender.minCreditScore}`);
  if (lender.minRevenue) qualifiers.push(`monthly revenue of ${lender.minRevenue}`);
  if (lender.minTimeInBusiness) qualifiers.push(`time in business of ${lender.minTimeInBusiness}`);
  const qualifierText = qualifiers.length ? ` Typical eligibility looks like ${qualifiers.join(', ')}.` : '';

  const amountText = lender.amount ? ` Funding amounts often range around ${lender.amount}.` : '';
  const highlightText = lender.highlight ? `${lender.highlight}. ` : '';

  const base = `${lender.name} is a business financing provider that helps small businesses compare and access ${
    productsText || 'multiple funding options'
  }.`;

  return `${highlightText}${base}${amountText}${qualifierText}`.replace(/\s+/g, ' ').trim();
}

function processCtaUrl(baseUrl: string): string {
  if (!baseUrl || baseUrl === '#') return baseUrl;

  try {
    const urlParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const gclid = urlParams.get('gclid');
    const fclid = urlParams.get('fclid');
    const wbraid = urlParams.get('wbraid');
    const fbclid = urlParams.get('fbclid');
    const trackingId = gclid || fclid || wbraid || fbclid;

    const url = new URL(baseUrl);

    if (url.hostname.includes('lendzi.com') && url.searchParams.has('click_id')) {
      const clickIdValue = url.searchParams.get('click_id');
      if (trackingId && (clickIdValue === '' || clickIdValue === null)) {
        url.searchParams.set('click_id', trackingId);
      }
    }

    if (trackingId) {
      url.searchParams.set('sub_id_1', trackingId);
      url.searchParams.set('sub1', trackingId);
    }

    return url.toString();
  } catch {
    return baseUrl;
  }
}

function scrollToDeepDive(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  // Use native smooth scrolling, while relying on scroll-margin-top on the target
  // section so it doesn't end up hidden under a sticky header.
  if ('scrollIntoView' in el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset, behavior: 'smooth' });
}

export function useLenderDeepDiveScroll() {
  return useMemo(() => {
    return (lender: Pick<Brand, 'id' | 'name'>) => {
      if (typeof window === 'undefined') return;
      scrollToDeepDive(getLenderDeepDiveId(lender));
    };
  }, []);
}

export default function LenderDeepDiveSections({ lenders }: { lenders: Brand[] }) {
  const { impressionId } = useImpression();
  const pathname = usePathname();
  const pageName = useMemo(() => getPageNameFromRoute(pathname || ''), [pathname]);

  return (
    <div className="mt-10 space-y-8">
      {lenders.map((lender) => {
        const id = getLenderDeepDiveId(lender);
        const processedCtaUrl = processCtaUrl(lender.ctaUrl);
        const isBriteCap = lender.id === 6 || lender.name.toLowerCase() === 'britecap';
        const isRok = lender.id === 4 || lender.name.toLowerCase() === 'rok financial';
        const isFora = lender.id === 5 || lender.name.toLowerCase() === 'fora financial';
        const isUplyft = lender.id === 7 || lender.name.toLowerCase() === 'uplyft';

        return (
          <section
            key={lender.id}
            id={id}
            className="bg-white border border-slate-200 rounded-lg shadow-sm"
            style={{ scrollMarginTop: 112 }}
          >
            <div className="p-6">
              <div className="min-w-0">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {isBriteCap ? (
                        <BriteCapMiniLogo />
                      ) : isRok ? (
                        <RokMiniLogo />
                      ) : isFora ? (
                        <ForaMiniLogo />
                      ) : isUplyft ? (
                        <UplyftMiniLogo />
                      ) : lender.logo ? (
                        <div
                          className="relative h-8 w-[130px]"
                          aria-label={lender.name}
                        >
                          <Image
                            src={lender.logo}
                            alt={lender.name}
                            fill
                            className="object-contain object-left"
                            sizes="130px"
                          />
                        </div>
                      ) : (
                        <h3 className="text-xl font-bold text-slate-900">{lender.name}</h3>
                      )}
                      <div className="text-sm text-slate-600">
                        <span className="font-semibold text-slate-900">{lender.ourScore.toFixed(1)}</span>{' '}
                        <span>Our score</span>
                        {lender.trustpilotScore ? (
                          <span className="ml-2">
                            · <span className="font-medium">{lender.trustpilotScore.toFixed(1)}</span> Trustpilot
                          </span>
                        ) : null}
                        {typeof lender.reviewCount === 'number' ? (
                          <span className="ml-2">· {lender.reviewCount.toLocaleString()} reviews</span>
                        ) : null}
                      </div>
                    </div>

                    {lender.highlight ? (
                      <p className="text-sm text-slate-700 leading-relaxed">{lender.highlight}</p>
                    ) : null}

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {buildCompanyParagraph(lender)}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                        <div className="text-xs text-slate-500">Loan amount</div>
                        <div className="text-sm font-semibold text-slate-900">{lender.amount ?? '—'}</div>
                      </div>
                      <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                        <div className="text-xs text-slate-500">Min. credit score</div>
                        <div className="text-sm font-semibold text-slate-900">{lender.minCreditScore ?? '—'}</div>
                      </div>
                      <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                        <div className="text-xs text-slate-500">Monthly revenue</div>
                        <div className="text-sm font-semibold text-slate-900">{lender.minRevenue ?? '—'}</div>
                      </div>
                      <div className="bg-slate-50 rounded-md p-3 border border-slate-200">
                        <div className="text-xs text-slate-500">Time in business</div>
                        <div className="text-sm font-semibold text-slate-900">{lender.minTimeInBusiness ?? '—'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-bold text-slate-900 mb-2">What we like</div>
                      <div className="overflow-hidden rounded-md border border-slate-200">
                        <table className="w-full border-collapse">
                          <tbody>
                            {(lender.goodDetails ?? []).length ? (
                              lender.goodDetails.map((d) => (
                                <tr key={d} className="border-t border-slate-200 first:border-t-0">
                                  <td className="w-10 align-top px-3 py-2">
                                    <Check className="w-4 h-4 text-emerald-600 mt-0.5" />
                                  </td>
                                  <td className="px-3 py-2 text-sm text-slate-700">{d}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td className="px-3 py-2 text-sm text-slate-600">—</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 mb-2">What to consider</div>
                      <div className="overflow-hidden rounded-md border border-slate-200">
                        <table className="w-full border-collapse">
                          <tbody>
                            {(lender.badDetails ?? []).length ? (
                              lender.badDetails.map((d) => (
                                <tr key={d} className="border-t border-slate-200 first:border-t-0">
                                  <td className="w-10 align-top px-3 py-2">
                                    <X className="w-4 h-4 text-rose-600 mt-0.5" />
                                  </td>
                                  <td className="px-3 py-2 text-sm text-slate-700">{d}</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td className="px-3 py-2 text-sm text-slate-600">—</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                <Button
                  variant="primary"
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-md sm:order-2"
                  onClick={() => {
                    trackBrandClick(lender.name, pageName, impressionId);
                    gtag_report_conversion();
                    window.open(processedCtaUrl || '#', '_blank');
                  }}
                >
                  View Rates
                </Button>
                <button
                  type="button"
                  className="text-sm text-[var(--color-primary)] font-semibold hover:underline sm:order-1"
                  onClick={async () => {
                    const url = `${window.location.origin}${window.location.pathname}#${id}`;
                    await navigator.clipboard.writeText(url);
                  }}
                >
                  Copy link
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}


'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronsRight } from 'lucide-react';
import type { Brand } from '@/data/brands';
import { useImpression } from '@/contexts/ImpressionContext';
import { useComparisonDesignVariant } from '@/contexts/ComparisonDesignVariantContext';
import { trackBrandClick, getPageNameFromRoute } from '@/lib/impression';
import { gtag_report_conversion } from '@/lib/googleAds';
import { processCtaUrl } from '@/lib/processCtaUrl';
import type { ComparisonConversionHeroCopy } from '@/lib/comparisonConversionHeroCopy';
import styles from '@/app/business-loan/best-business-loans/page.module.scss';

export function BusinessLoanPrimaryCta({
  lender,
  className,
  label = 'Check your rates',
  subtextAlign = 'center',
}: {
  lender: Brand | undefined;
  className?: string;
  label?: string;
  subtextAlign?: 'center' | 'start';
}) {
  const { impressionId } = useImpression();
  const comparisonDesignVariant = useComparisonDesignVariant();
  const pathname = usePathname();
  const pageName = useMemo(() => getPageNameFromRoute(pathname || ''), [pathname]);
  const href = useMemo(() => (lender ? processCtaUrl(lender.ctaUrl) : '#'), [lender]);

  return (
    <div className={className}>
      <button
        type="button"
        disabled={!lender}
        className={[
          'group w-full min-h-[48px] px-6 rounded-md bg-[var(--color-cta)] text-white text-base font-bold',
          'shadow-[var(--color-cta-shadow)] hover:bg-[var(--color-cta-hover)] hover:shadow-[var(--color-cta-shadow-hover)]',
          'active:bg-[var(--color-cta-active)] active:shadow-[var(--color-cta-shadow-active)]',
          'active:translate-y-px transition-all duration-200 disabled:opacity-45 disabled:pointer-events-none',
          'flex items-center justify-center gap-1.5',
        ].join(' ')}
        onClick={() => {
          if (!lender) return;
          trackBrandClick(lender.name, pageName, impressionId, { comparisonDesignVariant });
          gtag_report_conversion();
          window.open(href || '#', '_blank');
        }}
      >
        {label}
        <ChevronsRight
          className="w-[1.15em] h-[1.15em] shrink-0 transition-transform group-hover:translate-x-0.5"
          strokeWidth={2.5}
          aria-hidden
        />
      </button>
      <p
        className={[
          'mt-2 text-xs text-slate-600 w-full',
          subtextAlign === 'start' ? 'text-left' : 'text-center',
        ].join(' ')}
      >
        Takes 60 seconds · No credit impact
      </p>
    </div>
  );
}

interface BusinessDesktopConversionHeroProps {
  featuredLender: Brand | undefined;
  filteredLenderCount: number;
  heroCopy: ComparisonConversionHeroCopy;
}

export function BusinessDesktopConversionHero({
  featuredLender,
  filteredLenderCount,
  heroCopy,
}: BusinessDesktopConversionHeroProps) {
  const ratesLine = useMemo(
    () =>
      `Rates updated ${new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}`,
    []
  );

  const steps = (
    <ol className={`${styles.conversionSteps} ${styles.conversionStepsInCard}`}>
      <li>
        <span className={styles.conversionStepNum}>1</span>
        <span>Answer a few questions</span>
      </li>
      <li>
        <span className={styles.conversionStepNum}>2</span>
        <span>Get matched with lenders</span>
      </li>
      <li>
        <span className={styles.conversionStepNum}>3</span>
        <span>Receive offers</span>
      </li>
    </ol>
  );

  return (
    <header className={styles.conversionHero}>
      <div className={styles.conversionHeroInner}>
        <div className={styles.conversionHeroGrid}>
          <div className={styles.conversionHeroCopy}>
            <h1 className={styles.conversionHeroTitle}>{heroCopy.headline}</h1>
            <p className={styles.conversionHeroSub}>
              {heroCopy.subPrefix}
              <strong>{heroCopy.subBold1}</strong>
              {heroCopy.subMiddle}
              <strong>{heroCopy.subBold2}</strong>
              {heroCopy.subSuffix}
            </p>

            <div className={styles.conversionUrgencyRow}>
              <span className={styles.conversionUrgencyItem}>{ratesLine}</span>
              <span className={styles.conversionUrgencyDot} aria-hidden>
                ·
              </span>
              <span className={styles.conversionUrgencyItem}>
                {filteredLenderCount} option{filteredLenderCount === 1 ? '' : 's'} available for your profile
              </span>
            </div>

            <div className={`${styles.conversionCtaBlock} ${styles.conversionCtaBlockAlignStart}`}>
              <BusinessLoanPrimaryCta
                lender={featuredLender}
                label="Check your rates"
                subtextAlign="start"
              />
            </div>
          </div>

          <aside className={styles.conversionHeroAside} aria-label="How it works">
            <div className={styles.conversionStepsCard}>
              <p className={styles.conversionStepsCardTitle}>How it works</p>
              {steps}
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

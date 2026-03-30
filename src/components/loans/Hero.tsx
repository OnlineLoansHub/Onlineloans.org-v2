import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cls from './Hero.module.scss';
import type { HeroConfig } from '@/data/productTypes';
import type { ComparisonDesignVariant } from '@/lib/comparisonDesignVariant';

interface HeroProps {
  heroConfig: HeroConfig;
  validDate?: string;
  comparisonTitle?: string;
  comparisonTitlePrefix?: string;
  comparisonTitleHighlightText?: string;
  comparisonTitleSuffix?: string;
  /** With prefix + highlight: green "Lenders" + " for {month} {year}". */
  comparisonLendersForMonthYear?: string;
  comparisonSubtitle?: string;
  comparisonSubtitleSecondary?: string;
  /** When false, BBB/Trustpilot strip is omitted (e.g. shown below the filter on comparison pages). */
  showTrustBadges?: boolean;
  /** Comparison design variant, used for background experiments. */
  designVariant?: ComparisonDesignVariant;
}

export default function Hero({
  heroConfig,
  validDate,
  comparisonTitle,
  comparisonTitlePrefix,
  comparisonTitleHighlightText,
  comparisonTitleSuffix,
  comparisonLendersForMonthYear,
  comparisonSubtitle,
  comparisonSubtitleSecondary,
  showTrustBadges = true,
  designVariant = 'default',
}: HeroProps) {
  const monthYear = 'January 2026';

  return (
    <section
      className={[
        cls.hero,
        designVariant === '2' || designVariant === 'default' ? cls.heroFundV2 : '',
      ].join(' ')}
    >
      {/* Professional Diagonal Striped Pattern - Right Bottom Only */}
      <div className={cls.stripedPattern} aria-hidden="true" />

      {/* Decorative Wave Pattern - Right Side */}
      <div className={cls.wavePattern}>
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M50 0C50 0 150 100 150 200C150 300 50 400 50 500C50 600 150 700 150 700"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M100 0C100 0 200 100 200 200C200 300 100 400 100 500C100 600 200 700 200 700"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M150 0C150 0 250 100 250 200C250 300 150 400 150 500C150 600 250 700 250 700"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M200 0C200 0 300 100 300 200C300 300 200 400 200 500C200 600 300 700 300 700"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M250 0C250 0 350 100 350 200C350 300 250 400 250 500C250 600 350 700 350 700"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className={cls.container}>
        <div className={cls.contentGrid}>
          <div className={cls.leftContent}>
            {/* Last Updated (legacy layout; omit for v2 + default which use the v2 meta block) */}
            {designVariant !== '2' && designVariant !== 'default' && validDate && (
              <div className={cls.lastUpdated}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cls.lastUpdatedIcon}
                >
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path
                    d="M5 8L7 10L11 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                Last Updated: <span className={cls.lastUpdatedDate}>{validDate}</span>
              </div>
            )}

            {designVariant === '2' ? (
              <div className={cls.fundV2BrandRow} aria-label="OnlineLoans.org">
                <span className={cls.fundV2BrandText}>
                  OnlineLoans<span className={cls.fundV2BrandDot}>.</span>
                  <span className={cls.fundV2BrandOrg}>org</span>
                </span>
              </div>
            ) : null}

            {/* Main heading */}
            <h1 className={cls.title}>
              {comparisonTitleHighlightText ? (
                <>
                  {comparisonTitlePrefix ?? ''}
                  <span
                    className={
                      comparisonLendersForMonthYear
                        ? cls.titleComparisonGreen
                        : cls.titleHighlight
                    }
                  >
                    {comparisonTitleHighlightText}
                  </span>
                  {comparisonTitleSuffix ?? ''}
                  {comparisonLendersForMonthYear && (
                    <>
                      {' '}
                      <span className={cls.titleComparisonGreen}>Lenders</span>
                      {` for ${comparisonLendersForMonthYear}`}
                    </>
                  )}
                </>
              ) : comparisonTitle ? (
                comparisonTitle.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))
              ) : (
                <>
                  {heroConfig.title}{' '}
                  {heroConfig.titleHighlight && (
                    <span className={cls.titleHighlight}>{heroConfig.titleHighlight}</span>
                  )}{' '}
                  of {monthYear}
                </>
              )}
            </h1>

            {/* Sub-hero text */}
            {comparisonSubtitle || comparisonSubtitleSecondary ? (
              <div className={cls.subHeroGroup}>
                {comparisonSubtitle ? (
                  <p className={cls.subHeroTextLead}>{comparisonSubtitle}</p>
                ) : null}
                {comparisonSubtitleSecondary ? (
                  <p className={cls.subHeroTextFollow}>
                    {comparisonSubtitleSecondary.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </p>
                ) : null}
              </div>
            ) : (
              <p className={cls.subHeroText}>Find funding that fits your business</p>
            )}

            {designVariant === '2' || designVariant === 'default' ? (
              <>
                <ul className={cls.fundV2Chips} aria-label="Key benefits">
                  <li className={cls.fundV2Chip}>No impact to credit score</li>
                  <li className={cls.fundV2Chip}>Compare lenders in minutes</li>
                  <li className={cls.fundV2Chip}>From $5,000 to $1M+</li>
                </ul>

                <div className={cls.fundV2CtaRow}>
                  <Link
                    href="https://apply.onlineloans.org/apply"
                    className={cls.fundV2PrimaryCta}
                  >
                    Check your rates
                    <span className={cls.fundV2CtaArrow} aria-hidden>
                      →
                    </span>
                  </Link>
                  <p className={cls.fundV2CtaNote}>
                    Free to apply. Takes about <strong>2 minutes</strong>.
                  </p>
                </div>

                {validDate ? (
                  <div className={cls.fundV2MetaRow}>
                    <div className={cls.fundV2UpdatedBlock}>
                      <span className={cls.fundV2UpdatedLabel}>Last Updated</span>
                      <span className={cls.fundV2UpdatedDate}>{validDate}</span>
                    </div>
                  </div>
                ) : null}
              </>
            ) : null}

            {showTrustBadges ? (
              <div
                className={
                  designVariant === '2' || designVariant === 'default'
                    ? cls.fundV2AuthorityBadges
                    : cls.trustBadges
                }
              >
                <Image
                  src={heroConfig.badgeImagePath}
                  alt="BBB and Trustpilot badges"
                  width={designVariant === '2' || designVariant === 'default' ? 220 : 350}
                  height={designVariant === '2' || designVariant === 'default' ? 34 : 53}
                  className={cls.trustBadgesImage}
                  priority
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { URL_CONFIG } from '@/lib/urlConfig';
import styles from './ComparisonHeroFundV4.module.scss';

export interface ComparisonHeroFundV4Props {
  title: string;
  tagline: string;
  /** Shown as “Valid as of …” (same string typically passed as Hero `validDate`). */
  validAsOf: string;
  /** Fund-style supporting copy (e.g. business loans only). */
  exploreBlurb?: string;
  /**
   * When set (e.g. business loans desktop), matches default `Hero` fund V2 chips +
   * title/tagline sizing from `/business-loan/best-business-loans`.
   */
  benefitChips?: string[];
  showTrustBadges?: boolean;
  badgeImagePath?: string;
}

export default function ComparisonHeroFundV4({
  title,
  tagline,
  validAsOf,
  exploreBlurb,
  benefitChips,
  showTrustBadges = false,
  badgeImagePath,
}: ComparisonHeroFundV4Props) {
  const hasBenefits = Boolean(benefitChips?.length);
  const showExplore = Boolean(exploreBlurb) && !hasBenefits;

  return (
    <section
      className={styles.hero}
      aria-labelledby="comparison-hero-v4-title"
      {...(hasBenefits ? { 'data-fund-v4-business': 'true' } : {})}
    >
      <div className={styles.disclosureBar} role="note" aria-label="Advertising disclosure">
        <div className={styles.disclosureInner}>
          <p className={styles.disclosureText}>
            The offers below and their placement are from companies from which we receive
            compensation.{' '}
            <Link href={URL_CONFIG.termsOfUse} className={styles.disclosureLink}>
              Advertising Disclosure
            </Link>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.leftColumn}>
            <div className={styles.logoRow}>
              <Link href={URL_CONFIG.main} className={styles.logoLink}>
                <span className={styles.logoMark}>Onlineloans.org</span>
              </Link>
            </div>

            <h1 id="comparison-hero-v4-title" className={styles.title}>
              {title}
            </h1>

            <p className={styles.tagline}>{tagline}</p>

            {showExplore ? <p className={styles.explore}>{exploreBlurb}</p> : null}

            {hasBenefits ? (
              <div className={styles.businessLowerGroup}>
                <div className={styles.metaRow}>
                  <div className={styles.updatedBlock}>
                    <span className={styles.updatedLabel}>Last Updated</span>
                    <span className={styles.updatedDate}>{validAsOf}</span>
                  </div>
                </div>

                <div className={styles.fundCtaRow}>
                  <Link
                    href="https://apply.onlineloans.org/apply"
                    className={styles.fundPrimaryCta}
                  >
                    Check your rates
                    <span className={styles.fundCtaArrow} aria-hidden>
                      →
                    </span>
                  </Link>
                  <p className={styles.fundCtaNote}>
                    Free to apply. Takes about <strong>2 minutes</strong>.
                  </p>
                </div>

                {benefitChips ? (
                  <ul className={styles.benefitChips} aria-label="Key benefits">
                    {benefitChips.map((label) => (
                      <li key={label} className={styles.benefitChip}>
                        {label}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <div className={styles.validWrap}>
                Valid as of <span className={styles.validDate}>{validAsOf}</span>
              </div>
            )}

            {showTrustBadges && badgeImagePath ? (
              <div className={styles.trustBadges}>
                <Image
                  src={badgeImagePath}
                  alt="BBB and Trustpilot badges"
                  width={220}
                  height={34}
                  className={styles.trustBadgesImage}
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

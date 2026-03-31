import Image from 'next/image';
import styles from './ComparisonHeroFundV4.module.scss';

export interface ComparisonHeroFundV4Props {
  title: string;
  tagline: string;
  /** Shown as “Valid as of …” (same string typically passed as Hero `validDate`). */
  validAsOf: string;
  /** Fund-style supporting copy (e.g. business loans only). */
  exploreBlurb?: string;
  showTrustBadges?: boolean;
  badgeImagePath?: string;
}

export default function ComparisonHeroFundV4({
  title,
  tagline,
  validAsOf,
  exploreBlurb,
  showTrustBadges = false,
  badgeImagePath,
}: ComparisonHeroFundV4Props) {
  return (
    <section className={styles.hero} aria-labelledby="comparison-hero-v4-title">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.leftColumn}>
            <div className={styles.brandRow} aria-label="OnlineLoans.org">
              <span className={styles.brandText}>
                OnlineLoans<span className={styles.brandDot}>.</span>
                <span className={styles.brandOrg}>org</span>
              </span>
            </div>

            <h1 id="comparison-hero-v4-title" className={styles.title}>
              {title}
            </h1>

            <p className={styles.tagline}>{tagline}</p>

            {exploreBlurb ? <p className={styles.explore}>{exploreBlurb}</p> : null}

            <div className={styles.validWrap}>
              Valid as of <span className={styles.validDate}>{validAsOf}</span>
            </div>

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

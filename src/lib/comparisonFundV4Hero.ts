import type { ProductTypeConfig } from '@/data/productTypes';

/** Props shared with `ComparisonHeroFundV4` (single source for desktop + mobile v4). */
export interface ComparisonHeroFundV4ContentProps {
  title: string;
  tagline: string;
  validAsOf: string;
  exploreBlurb?: string;
  benefitChips?: string[];
  showTrustBadges: boolean;
  badgeImagePath?: string;
}

export function getComparisonHeroFundV4Props(
  productConfig: ProductTypeConfig,
  lastUpdated: string
): ComparisonHeroFundV4ContentProps {
  const comparisonMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const comparisonYear = new Date().getFullYear();
  const comparisonLendersForMonthYear = `${comparisonMonth} ${comparisonYear}`;
  const fundV4ExploreBlurb =
    productConfig.id === 'business-loans'
      ? 'Explore the top business lenders and compare offers to find financing that fits your goals—all in one place.'
      : undefined;

  return {
    title:
      productConfig.id === 'business-loans'
        ? `Best Business Loans of ${comparisonLendersForMonthYear}`
        : `Best ${productConfig.comparisonHeroHighlight ?? productConfig.displayName} of ${comparisonLendersForMonthYear}`,
    tagline:
      productConfig.id === 'business-loans'
        ? 'Find funding that fits your business'
        : 'Apply in minutes. Get funded fast.',
    validAsOf: lastUpdated,
    exploreBlurb: productConfig.id === 'business-loans' ? undefined : fundV4ExploreBlurb,
    benefitChips:
      productConfig.id === 'business-loans'
        ? ['No impact to credit score', 'Compare lenders in minutes', 'From $5,000 to $1M+']
        : undefined,
    showTrustBadges: true,
    badgeImagePath: productConfig.hero.badgeImagePath,
  };
}

/**
 * Headlines / subtitles for comparison page design v1 (`?v=1`).
 * Subtitle is split so “no credit impact” + one more emphasis stay bold where relevant.
 */
export interface ComparisonConversionHeroCopy {
  headline: string;
  subPrefix: string;
  subBold1: string;
  subMiddle: string;
  subBold2: string;
  subSuffix: string;
  /** Below featured card (v1 layout). Defaults if omitted. */
  moreOptionsTitle?: string;
  moreOptionsSub?: string;
}

const BUSINESS: ComparisonConversionHeroCopy = {
  headline: 'Get funded faster—with offers matched to your business',
  subPrefix: 'See potential options with ',
  subBold1: 'no credit impact',
  subMiddle: '. Fast approvals. Funding from ',
  subBold2: '$5K–$1M+',
  subSuffix: ' depending on your profile.',
};

const BY_ID: Record<string, ComparisonConversionHeroCopy> = {
  'business-loans': BUSINESS,
  'personal-loans': {
    headline: 'Get a personal loan faster—with options matched to your goals',
    subPrefix: 'Check rates with ',
    subBold1: 'no credit impact',
    subMiddle: ' to view offers. Fast decisions. Loan amounts from ',
    subBold2: '$1K–$100K+',
    subSuffix: ' for qualifying borrowers.',
  },
  'auto-loans': {
    headline: 'Finance your next vehicle—with competitive auto loan options',
    subPrefix: 'Explore options with ',
    subBold1: 'no credit impact',
    subMiddle: ' on many lenders. Fast applications. ',
    subBold2: 'New & used',
    subSuffix: ' financing from trusted partners.',
  },
  'mortgage-loans': {
    headline: 'Shop mortgage options—with clarity and speed',
    subPrefix: 'Compare programs with ',
    subBold1: 'transparent rates',
    subMiddle: '. Dedicated support. ',
    subBold2: 'Purchase & refinance',
    subSuffix: ' paths from top lenders.',
  },
  'student-loans': {
    headline: 'Find student loan options—built for your situation',
    subPrefix: 'Review choices with ',
    subBold1: 'no obligation',
    subMiddle: '. Straightforward applications. ',
    subBold2: 'Federal & private',
    subSuffix: ' resources in one place.',
  },
  'crypto-loans': {
    headline: 'Unlock liquidity—with crypto-backed lending options',
    subPrefix: 'Explore offers with ',
    subBold1: 'clear terms',
    subMiddle: '. Quick access to capital. ',
    subBold2: 'Collateral-based',
    subSuffix: ' products from vetted partners.',
  },
  'gold-and-silver': {
    headline: 'Compare gold & silver—prices, products, and dealers',
    subPrefix: 'Research options with ',
    subBold1: 'transparent pricing',
    subMiddle: '. Easy browsing. ',
    subBold2: 'Bullion & storage',
    subSuffix: ' choices side by side.',
    moreOptionsTitle: 'More offers to compare',
    moreOptionsSub: 'Review additional dealers when you are ready.',
  },
  'pet-insurance': {
    headline: 'Protect your pet—with plans you can compare fast',
    subPrefix: 'View quotes with ',
    subBold1: 'no pressure',
    subMiddle: '. Simple comparisons. ',
    subBold2: 'Coverage that fits',
    subSuffix: ' your pet and budget.',
    moreOptionsTitle: 'More plans to compare',
    moreOptionsSub: 'Review additional carriers when you are ready.',
  },
  'credit-score': {
    headline: 'Improve how you monitor credit—with top-rated tools',
    subPrefix: 'Compare services with ',
    subBold1: 'clear features',
    subMiddle: '. Fast signup. ',
    subBold2: 'Monitoring & alerts',
    subSuffix: ' from trusted brands.',
    moreOptionsTitle: 'More tools to compare',
    moreOptionsSub: 'Explore additional providers when you are ready.',
  },
};

export function getComparisonConversionHeroCopy(
  productId: string,
  displayName: string
): ComparisonConversionHeroCopy {
  return (
    BY_ID[productId] ?? {
      headline: `Get matched faster—with top ${displayName.toLowerCase()} options`,
      subPrefix: 'See potential options with ',
      subBold1: 'no credit impact',
      subMiddle: ' where applicable. Fast next steps. ',
      subBold2: 'Top providers',
      subSuffix: ' in one place.',
      moreOptionsTitle: 'More options to compare',
      moreOptionsSub: 'Review additional providers when you are ready.',
    }
  );
}

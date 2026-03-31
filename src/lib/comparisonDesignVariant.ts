/**
 * Comparison page design variants from `?v=`.
 * - Missing or invalid `v` → `default` (original / legacy layout).
 * - `?v=1` → conversion layout where implemented (e.g. business loans desktop).
 * - `?v=2` | `?v=3` → reserved for experiments; same legacy shell with variant ID for analytics.
 * - `?v=4` → Fund.com-style desktop comparison hero (photo + navy fade) via ComparisonHeroFundV4.
 */
export const COMPARISON_DESIGN_VARIANTS_URL = ['1', '2', '3', '4'] as const;

export type ComparisonDesignVariantUrl = (typeof COMPARISON_DESIGN_VARIANTS_URL)[number];

export type ComparisonDesignVariant = 'default' | ComparisonDesignVariantUrl;

const ALLOWED = new Set<string>(COMPARISON_DESIGN_VARIANTS_URL);

export function parseComparisonDesignVariantFromSearchParam(
  raw: string | null | undefined
): ComparisonDesignVariant {
  if (raw == null || raw === '') return 'default';

  const v = String(raw).trim();

  return ALLOWED.has(v) ? (v as ComparisonDesignVariantUrl) : 'default';
}

/** Pathnames that render `ProductComparisonPage` (used to scope `?v=4` chrome behavior). */
const PRODUCT_COMPARISON_PATHNAMES = new Set<string>([
  '/auto-loan/best-auto-loans',
  '/business-loan/best-business-loans',
  '/credit-score/credit-score-monitoring',
  '/crypto-loans/best-crypto-loans',
  '/gold-and-silver/best-gold-and-silver',
  '/mortgage-loan/best-mortgage-loans',
  '/personal-loan/best-personal-loans',
  '/pet-insurance/best-pet-insurance',
  '/student-loan/best-student-loans',
]);

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);

  return pathname;
}

export function isProductComparisonPathname(pathname: string): boolean {
  return PRODUCT_COMPARISON_PATHNAMES.has(normalizePathname(pathname));
}

/**
 * Hide global disclosure + navbar for Fund-style hero (`?v=4`) on comparison pages only.
 */
export function shouldHideSiteTopChromeForComparison(
  pathname: string,
  vParam: string | null | undefined
): boolean {
  if (!isProductComparisonPathname(pathname)) return false;

  return parseComparisonDesignVariantFromSearchParam(vParam) === '4';
}

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

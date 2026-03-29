/**
 * Comparison page design variants (?v=1 | ?v=2 | ?v=3).
 * Invalid or missing values default to v1 (production).
 */
export const COMPARISON_DESIGN_VARIANTS = ['1', '2', '3'] as const;

export type ComparisonDesignVariant = (typeof COMPARISON_DESIGN_VARIANTS)[number];

const ALLOWED = new Set<string>(COMPARISON_DESIGN_VARIANTS);

export function parseComparisonDesignVariantFromSearchParam(
  raw: string | null | undefined
): ComparisonDesignVariant {
  if (raw == null || raw === '') return '1';
  const v = String(raw).trim();
  return ALLOWED.has(v) ? (v as ComparisonDesignVariant) : '1';
}

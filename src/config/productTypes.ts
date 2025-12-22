// Product Type Configuration System
// This file defines the interfaces and types for product-specific configurations

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterConfig {
  label: string;
  options: FilterOption[];
}

export interface WizardStep {
  question: string;
  key: string;
  options: Array<{ value: string; label: string }>;
}

export interface RelatedProvider {
  id: number;
  name: string;
  score: number;
  description: string;
  ctaUrl: string;
}

export interface HeroConfig {
  title: string;
  titleHighlight?: string;
  authorName: string;
  authorRole: string;
  authorImageUrl?: string;
  badgeImagePath: string;
}

export interface WizardConfig {
  steps: WizardStep[];
  resultsTitle?: string;
  resultsSubtitle?: string;
}

export interface CrossPromoConfig {
  title: string;
  description: string;
  relatedProviders: RelatedProvider[];
  icon?: string; // Icon name for lucide-react
}

export interface ProductTypeConfig {
  id: string;
  displayName: string;
  slug: string;
  hero: HeroConfig;
  filters: Record<string, FilterConfig>;
  filterOrder: string[];
  wizard: WizardConfig;
  crossPromo: CrossPromoConfig;
  amountLabel?: string; // Label for the amount field (e.g., "Loan Amount", "Monthly Premium", "Coverage Amount", "APY", "Price Range")
}


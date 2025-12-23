// Unified Brand interface for all product types
// This interface works for loans, insurance, banking, gold/silver, etc.

export interface Brand {
  id: number;
  name: string;
  logo: string | null;
  ourScore: number;
  trustpilotScore: number | null;
  brandReputation: number | null;
  popularityScore: number | null;
  reviewCount: number | null;
  highlight: string;
  productTypes: string[]; // Generic field for all product types (loans, insurance, banking, etc.)
  amount?: string; // Optional amount field (loan amount, premium, coverage, APY, price range)
  goodDetails: string[];
  badDetails: string[];
  ctaUrl: string;
  websiteUrl: string;
  // Optional loan-specific fields
  minCreditScore?: string;
  minRevenue?: string; // For business loans
  minTimeInBusiness?: string; // For business loans
  amountRange?: string; // For filtering ranges across all product types
}

// Backward compatibility alias
export type Lender = Brand;

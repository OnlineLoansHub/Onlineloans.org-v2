export interface BusinessLoanGuide {
  id: string;
  title: string;
  description: string;
  href: string;
  category?: string;
  /** Short text on the cover; defaults to `title` when no `coverImage` */
  coverLabel?: string;
  /** If set, cover shows this image (e.g. brand logo) instead of text */
  coverImage?: string;
}

export const businessLoanGuides: BusinessLoanGuide[] = [
  {
    id: 'best-business-loans',
    title: 'Best Business Loans of 2025',
    description:
      'Compare top business loan providers and find the right funding option for your company. See ratings, terms, and funding speed.',
    href: '/business-loan/best-business-loans',
    category: 'Comparison',
  },
  {
    id: 'restaurant-funding',
    title: 'Restaurant Funding',
    description:
      'Complete guide to restaurant funding: Learn how restaurant loans work, types of restaurant financing, how to apply, and find the best lenders.',
    href: '/business-loan/restaurant-funding',
    category: 'Industry-Specific',
  },
  {
    id: 'construction-funding',
    title: 'Construction Business Loans',
    description:
      'Complete guide to construction business loans: Learn how construction loans work, types of construction financing, how to apply, and find the best lenders.',
    href: '/business-loan/construction-funding',
    category: 'Industry-Specific',
  },
  {
    id: 'fixed-vs-variable',
    title: 'Are Small Business Loans Fixed or Variable?',
    description:
      'Learn the difference between fixed and variable rate business loans. Compare pros, cons, and real examples to choose the best option for your small business financing needs.',
    href: '/business-loan/fixed-vs-variable',
    category: 'Guides',
  },
  // Add more guides here as they are created
];

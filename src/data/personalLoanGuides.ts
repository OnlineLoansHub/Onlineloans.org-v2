export interface PersonalLoanGuide {
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

export const personalLoanGuides: PersonalLoanGuide[] = [
  {
    id: 'best-personal-loans',
    title: 'Best Personal Loans of 2025',
    description:
      'Compare top personal loan providers and find the right funding option for your needs. See ratings, rates, and funding speed.',
    href: '/personal-loan/best-personal-loans',
    category: 'Comparison',
  },
  {
    id: 'what-is-a-personal-loan',
    title: 'What is a Personal Loan?',
    description:
      'Complete guide to personal loans: Learn how personal loans work, types of personal loans, how to apply, and find the best lenders.',
    href: '/personal-loan/what-is-a-personal-loan',
    category: 'Guides',
  },
  {
    id: 'lendingtree-review',
    title: 'LendingTree Review: Comprehensive Overview for Personal Loans',
    description:
      "Complete LendingTree review for personal loans. Learn how LendingTree works, compare personal loan offers, understand pros and cons, and find out if it's the right marketplace for your borrowing needs.",
    href: '/personal-loan/lendingtree-review',
    coverLabel: 'LendingTree Review',
    category: 'Reviews',
  },
  {
    id: 'payday-loans-california',
    title: 'Payday Loans in California: Top Lenders, Laws & Legality',
    description:
      'Complete guide to payday loans in California. Learn about state laws, legality, fees, and compare the best online payday loan providers including Advance America, ACE Cash Express, Check n Go, and more.',
    href: '/personal-loan/payday-loans/california',
    category: 'Guides',
  },
  // Add more guides here as they are created
];

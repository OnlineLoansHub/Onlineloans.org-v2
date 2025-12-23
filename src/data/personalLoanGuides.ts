export interface PersonalLoanGuide {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  category?: string;
}

export const personalLoanGuides: PersonalLoanGuide[] = [
  {
    id: 'best-personal-loans',
    title: 'Best Personal Loans of 2025',
    description:
      'Compare top personal loan providers and find the right funding option for your needs. See ratings, rates, and funding speed.',
    href: '/personal-loan/best-personal-loans',
    image: '/images/table/best-personal-loans-2025.png',
    category: 'Comparison',
  },
  {
    id: 'what-is-a-personal-loan',
    title: 'What is a Personal Loan?',
    description:
      'Complete guide to personal loans: Learn how personal loans work, types of personal loans, how to apply, and find the best lenders.',
    href: '/personal-loan/what-is-a-personal-loan',
    image: '/images/article/article_man.png',
    category: 'Guides',
  },
  {
    id: 'lendingtree-review',
    title: 'LendingTree Review: Comprehensive Overview for Personal Loans',
    description:
      "Complete LendingTree review for personal loans. Learn how LendingTree works, compare personal loan offers, understand pros and cons, and find out if it's the right marketplace for your borrowing needs.",
    href: '/personal-loan/lendingtree-review',
    image: '/images/brands-logos/LendingTree-logo.webp',
    category: 'Reviews',
  },
  {
    id: 'payday-loans-california',
    title: 'Payday Loans in California: Top Lenders, Laws & Legality',
    description:
      'Complete guide to payday loans in California. Learn about state laws, legality, fees, and compare the best online payday loan providers including Advance America, ACE Cash Express, Check n Go, and more.',
    href: '/personal-loan/payday-loans/california',
    image: '/images/paydayloans-california/paydayloans-california.png',
    category: 'Guides',
  },
  // Add more guides here as they are created
];

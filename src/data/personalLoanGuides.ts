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
    image: '/images/table/best-business-loans-2025.png',
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
  // Add more guides here as they are created
];


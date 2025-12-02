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


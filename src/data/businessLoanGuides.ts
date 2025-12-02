export interface BusinessLoanGuide {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  category?: string;
}

export const businessLoanGuides: BusinessLoanGuide[] = [
  {
    id: 'best-business-loans',
    title: 'Best Business Loans of 2025',
    description:
      'Compare top business loan providers and find the right funding option for your company. See ratings, terms, and funding speed.',
    href: '/business-loan/best-business-loans',
    image: '/images/table/best-business-loans-2025.png',
    category: 'Comparison',
  },
  {
    id: 'restaurant-funding',
    title: 'Restaurant Funding',
    description:
      'Complete guide to restaurant funding: Learn how restaurant loans work, types of restaurant financing, how to apply, and find the best lenders.',
    href: '/business-loan/restaurant-funding',
    image: '/images/article/image-chef-kitchen.jpg',
    category: 'Industry-Specific',
  },
  {
    id: 'construction-funding',
    title: 'Construction Business Loans',
    description:
      'Complete guide to construction business loans: Learn how construction loans work, types of construction financing, how to apply, and find the best lenders.',
    href: '/business-loan/construction-funding',
    image: '/images/article/article_home.png',
    category: 'Industry-Specific',
  },
  // Add more guides here as they are created
];

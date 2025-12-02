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
    id: 'restaurant-funding',
    title: 'Restaurant Funding',
    description:
      'Complete guide to restaurant funding: Learn how restaurant loans work, types of restaurant financing, how to apply, and find the best lenders.',
    href: '/business-loan/restaurant-funding',
    image: '/images/article/image-chef-kitchen.jpg',
    category: 'Industry-Specific',
  },
  // Add more guides here as they are created
];


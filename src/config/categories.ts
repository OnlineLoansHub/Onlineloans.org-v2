import type { LucideIcon } from 'lucide-react';
import {
  PawPrint,
  Home as HomeIcon,
  TrendingUp,
  GraduationCap,
  Car,
  Briefcase,
  Wallet,
  Bitcoin,
  Coins,
} from 'lucide-react';

export interface CategoryItem {
  icon: LucideIcon;
  title: string;
  href: string;
}

export const CATEGORIES: CategoryItem[] = [
  { icon: Briefcase, title: 'Business Loans', href: '/business-loan/best-business-loans' },
  { icon: TrendingUp, title: 'Credit Score', href: '/credit-score/credit-score-monitoring' },
  { icon: Wallet, title: 'Personal Loans', href: '/personal-loan/best-personal-loans' },
  { icon: Bitcoin, title: 'Crypto Loans', href: '/crypto-loans/best-crypto-loans' },
  { icon: Car, title: 'Auto Loans', href: '/auto-loan/best-auto-loans' },
  { icon: GraduationCap, title: 'Student Loans', href: '/student-loan/best-student-loans' },
  { icon: HomeIcon, title: 'Mortgage Loans', href: '/mortgage-loan/best-mortgage-loans' },
  { icon: PawPrint, title: 'Pet Insurance', href: '/pet-insurance/best-pet-insurance' },
  { icon: Coins, title: 'Gold and Silver', href: '/gold-and-silver/best-gold-and-silver' },
];

/** Non-home header: four primary product links (flat nav, no dropdown). */
export const HEADER_RELATED_NAV_LINKS: ReadonlyArray<{ title: string; href: string }> = [
  { title: 'Business Loans', href: '/business-loan/best-business-loans' },
  { title: 'Personal Loans', href: '/personal-loan/best-personal-loans' },
  { title: 'Mortgage Loans', href: '/mortgage-loan/best-mortgage-loans' },
  { title: 'Auto Loans', href: '/auto-loan/best-auto-loans' },
];


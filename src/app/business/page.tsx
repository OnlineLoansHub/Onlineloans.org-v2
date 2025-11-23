import HomePage from '@/features/home/HomePage';
import { LoanTypes } from '@/types';

export default function BusinessLoansPage() {
  return <HomePage type={LoanTypes.business} />;
}

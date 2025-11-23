import HomePage from '@/features/home/HomePage';
import { LoanTypes } from '@/types';

export default function PersonalLoansPage() {
  return <HomePage type={LoanTypes.personal} />;
}

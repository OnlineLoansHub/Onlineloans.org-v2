import { Suspense } from 'react';

import LoanPage from '@/components/page/LoanPage/LoanPage';
import { LoanTypes } from '@/shared/types';

export default function BusinessLoansPage() {
  return (
    <Suspense fallback={<>...</>}>
      <LoanPage type={LoanTypes.business} />;
    </Suspense>
  );
}

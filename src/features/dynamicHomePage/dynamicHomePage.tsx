import { LoanTypes } from '@/types';
import { CreditTabs, Legend, Rating, Reviews } from './components';
import cls from './dynamicHomePage.module.scss';
interface IHomePageProps {
  type: LoanTypes;
}

export default function DynamicHomePage({ type }: IHomePageProps) {
  return (
    <div className={cls.page}>
      <div className={cls.mainContainer}>
        <main className={cls.main}>
          <h1 className={cls.title}>
            Money when you need it. <br />
            Fast, easy, secure.
          </h1>
          <Rating />
          <CreditTabs type={type} />
        </main>
        <div className={cls.reviews}>
          <Legend />
          <Reviews />
        </div>
      </div>
    </div>
  );
}

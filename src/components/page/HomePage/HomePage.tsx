import Image from 'next/image';

import AmountInputCard from '@/components/ui/AmountInput/AmountInput';
import { Input } from '@/components/ui/Input/Input';
import { classNames } from '@/shared';

import cls from './HomePage.module.scss';

interface IHomePageProps {
  type: 'business' | 'personal';
}

export default function HomePage({ type }: IHomePageProps) {
  const isBusiness = type === 'business';

  return (
    <div className={cls.page}>
      <main className={cls.main}>
        <h1 className={cls.title}>
          Money when you need it. <br />
          Fast, easy, secure.
        </h1>
        <AmountInputCard />
        <div className={cls.ratings}>
          <div className={classNames(cls.ratingBlock, {}, [cls.product])}>
            <Image
              src="/images/icons/features/onlineloans-feature-icons-group.svg"
              alt="OnlineLoans.org - Rating medal"
              width={21}
              height={28}
            />
            <div>
              <p className={cls.productSubtitle}>Top Product</p>
              <p className={cls.productTitle}>Ranked Best in Personal Loans</p>
            </div>
          </div>
          <div className={classNames(cls.ratingBlock, {}, [cls.rating])}>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <Image
                  key={index}
                  src="/images/icons/ratings/onlineloans-star-rating-icon.svg"
                  alt={`OnlineLoans.org - Rating star ${index + 1}`}
                  width={24.5}
                  height={24.5}
                  className={cls.ratingImg}
                />
              );
            })}

            <p className={cls.ratingTitle}>4.8/5.0 Rating</p>
          </div>
        </div>
      </main>
      {/* <Input placeholder="text" /> */}
    </div>
  );
}

import Image from 'next/image';

import { classNames } from '@/lib';

import cls from './Rating.module.scss';

export const Rating = () => {
  return (
    <div className={cls.ratings}>
      <div className={classNames(cls.ratingBlock, {}, [cls.product])}>
        <Image
          src="/images/icons/features/onlineloans-feature-icons-group.svg"
          alt="OnlineLoans.org - Rating medal"
          width={21}
          height={28}
          className={cls.ratingMedalImg}
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
  );
};

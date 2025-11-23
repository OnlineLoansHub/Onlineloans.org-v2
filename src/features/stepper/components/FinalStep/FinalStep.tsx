import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import { URL_CONFIG } from '@/config';
import { classNames } from '@/lib';
import cls from './FinalStep.module.scss';

export const FinalStep = () => {
  return (
    <>
      <h2 className={cls.finalTitle}>What to expect next?</h2>
      <ul className={cls.list}>
        <li className={classNames(cls.listItem, {}, [cls.first])}>
          <div className={classNames(cls.listItemImgWrapper, {}, [cls.first])}>
            <Image
              src={'/images/icons/features/percent.svg'}
              width={50}
              height={50}
              alt={'percent'}
            />
          </div>
          <p className={cls.listItemTitle}>More Details</p>
          <p className={cls.listItemTxt}>
            We'll ask a few more questions about you and your business to match
            you to funding options that best fit your specific needs
          </p>
        </li>
        <li className={classNames(cls.listItem, {}, [cls.first])}>
          <div className={classNames(cls.listItemImgWrapper, {}, [cls.second])}>
            <Image
              src={'/images/icons/features/money.svg'}
              width={50}
              height={50}
              alt={'money'}
            />
          </div>
          <p className={cls.listItemTitle}>Advisory Help</p>
          <p className={cls.listItemTxt}>
            Your dedicated advisor will walk through your funding options and
            apply to lending partners on your behalf
          </p>
        </li>
        <li className={cls.listItem}>
          <div className={cls.listItemImgWrapper}>
            <Image
              src={'/images/icons/features/money.svg'}
              width={50}
              height={50}
              alt={'money'}
            />
          </div>
          <p className={cls.listItemTitle}>Review Offers</p>
          <p className={cls.listItemTxt}>
            Review personalized offers with top rates and terms on your
            dashboard
          </p>
        </li>
      </ul>
      <div className={cls.btnWrapper}>
        <AppLink href={URL_CONFIG.business}>
          <Button variant="primary" onClick={() => {}}>
            Go to Homepage
          </Button>
        </AppLink>
      </div>
    </>
  );
};


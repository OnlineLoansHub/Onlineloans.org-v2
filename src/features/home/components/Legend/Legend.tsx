import Image from 'next/image';
import { classNames } from '@/lib';
import cls from './Legend.module.scss';

export const Legend = () => {
  return (
    <div className={cls.heros}>
      <div className={cls.herosImages}>
        <div className={cls.heroImageWrapper}>
          <Image
            src="/images/hero/onlineloans-loan-application-hero-1.png"
            alt="OnlineLoans.org - hero-1"
            width={50}
            height={50}
            className={cls.heroImg}
          />
        </div>
        <div className={cls.heroImageWrapper}>
          <Image
            src="/images/hero/onlineloans-loan-application-hero-2.png"
            alt="OnlineLoans.org - hero-2"
            width={50}
            height={50}
            className={cls.heroImg}
          />
        </div>
        <div className={cls.heroImageWrapper}>
          <Image
            src="/images/hero/onlineloans-loan-application-hero-3.png"
            alt="OnlineLoans.org - hero-3"
            width={50}
            height={50}
            className={cls.heroImg}
          />
        </div>
        <p className={classNames(cls.herosTitle, {}, [cls.herosTitleMobile])}>
          100k+
        </p>
      </div>
      <div className={cls.herosLegend}>
        <p className={cls.herosTitle}>100k+</p>
        <p className={cls.herosTxt}>
          Trusted by million of satidfied users, our financial services have
          made a real impact on people’s lives
        </p>
      </div>
    </div>
  );
};

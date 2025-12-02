import Link from 'next/link';
import { URL_CONFIG } from '@/config';
import cls from './LegacyBanner.module.scss';

export const LegacyBanner = () => {
  return (
    <div className={cls.banner}>
      <span className={cls.text}>
        Helping people thrive since 2005.{' '}
        <Link href={URL_CONFIG.about} className={cls.link}>
          <span className={cls.underlined}>OnlineLoans.org</span> legacy{' '}
          <span className={cls.arrow}>&gt;</span>
        </Link>
      </span>
    </div>
  );
};

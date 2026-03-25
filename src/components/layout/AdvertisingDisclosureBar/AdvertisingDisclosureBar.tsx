'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { URL_CONFIG } from '@/lib/urlConfig';
import cls from './AdvertisingDisclosureBar.module.scss';

export function AdvertisingDisclosureBar() {
  const path = usePathname();
  if (path === URL_CONFIG.main) return null;

  return (
    <div className={cls.bar} role="note" aria-label="Advertising disclosure">
      <div className={cls.inner}>
        <p className={cls.text}>
          The offers below and their placement are from companies from which we receive
          compensation.{' '}
          <Link href={URL_CONFIG.termsOfUse} className={cls.link}>
            Advertising Disclosure
          </Link>
        </p>
      </div>
      <hr className={cls.divider} aria-hidden="true" />
    </div>
  );
}

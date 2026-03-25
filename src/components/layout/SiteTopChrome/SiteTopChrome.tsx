'use client';

import { useLayoutEffect, useRef } from 'react';
import { AdvertisingDisclosureBar } from '@/components/layout/AdvertisingDisclosureBar/AdvertisingDisclosureBar';
import { Header } from '@/components/layout/Header/Header';
import cls from './SiteTopChrome.module.scss';

export function SiteTopChrome() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      document.documentElement.style.setProperty(
        '--site-fixed-top-height',
        `${Math.ceil(el.getBoundingClientRect().height)}px`
      );
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    window.addEventListener('resize', apply);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', apply);
    };
  }, []);

  return (
    <div ref={ref} className={cls.stack} data-site-top-chrome>
      <AdvertisingDisclosureBar />
      <Header embeddedInFixedStack />
    </div>
  );
}

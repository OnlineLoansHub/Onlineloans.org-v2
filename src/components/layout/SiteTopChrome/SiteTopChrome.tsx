'use client';

import { Suspense, useLayoutEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { AdvertisingDisclosureBar } from '@/components/layout/AdvertisingDisclosureBar/AdvertisingDisclosureBar';
import { Header } from '@/components/layout/Header/Header';
import { shouldHideSiteTopChromeForComparison } from '@/lib/comparisonDesignVariant';
import cls from './SiteTopChrome.module.scss';

function SiteTopChromeStack({ hideChrome }: { hideChrome: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (hideChrome) {
      document.documentElement.style.setProperty('--site-fixed-top-height', '0px');

      return () => {
        document.documentElement.style.removeProperty('--site-fixed-top-height');
      };
    }

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
  }, [hideChrome]);

  if (hideChrome) {
    return null;
  }

  return (
    <div ref={ref} className={cls.stack} data-site-top-chrome>
      <AdvertisingDisclosureBar />
      <Header embeddedInFixedStack />
    </div>
  );
}

function SiteTopChromeWithSearchParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hideChrome = shouldHideSiteTopChromeForComparison(pathname, searchParams.get('v'));

  return <SiteTopChromeStack hideChrome={hideChrome} />;
}

export function SiteTopChrome() {
  return (
    <Suspense fallback={<SiteTopChromeStack hideChrome={false} />}>
      <SiteTopChromeWithSearchParams />
    </Suspense>
  );
}

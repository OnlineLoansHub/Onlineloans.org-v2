'use client';

import Link from 'next/link';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import Logo from '@/components/ui/Logo/Logo';
import { URL_CONFIG } from '@/config';
import cls from './Footer.module.scss';

interface FooterConfigItem {
  title: string;
  path: string;
}

const footerConfig: FooterConfigItem[] = [
  {
    title: 'About Us',
    path: URL_CONFIG.about,
  },
  {
    title: 'Partner with us',
    path: URL_CONFIG.partner,
  },
];

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <Link href={URL_CONFIG.main} className={cls.logo}>
          <Logo
            text="OnlineLoans.org"
            textColor="var(--color-white)"
            className={cls.logoComponent}
          />
        </Link>
        <nav className={cls.nav}>
          <ul className={cls.navList}>
            {footerConfig.map((item) => (
              <li key={item.path} className={cls.navItem}>
                <AppLink href={item.path} className={cls.navLink}>
                  {item.title}
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

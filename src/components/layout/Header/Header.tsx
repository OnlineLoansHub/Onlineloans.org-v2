'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import Logo from '@/components/ui/Logo/Logo';
import { URL_CONFIG } from '@/lib/urlConfig';
import { classNames } from '@/lib';
import { HEADER_RELATED_NAV_LINKS } from '@/config/categories';
import cls from './Header.module.scss';

interface HeaderConfigItem {
  title: string;
  path: string;
  pathMatch?: string[];
}

function isRelatedNavActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  const p = pathname.replace(/\/$/, '') || '/';
  const h = href.replace(/\/$/, '') || '/';
  return p === h || p.startsWith(`${h}/`);
}

const headerConfig: HeaderConfigItem[] = [
  {
    title: 'About Us',
    path: URL_CONFIG.about,
  },
  {
    title: 'Partner with us',
    path: URL_CONFIG.partner,
  },
];

interface HeaderProps {
  /** Parent `SiteTopChrome` is fixed; header is static inside it. */
  embeddedInFixedStack?: boolean;
}

export const Header = ({ embeddedInFixedStack = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const isHome = path === URL_CONFIG.main;

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={classNames(cls.header, { [cls.headerEmbedded]: embeddedInFixedStack })}
    >
      <nav className={classNames(cls.nav)}>
        <Link href={URL_CONFIG.main} className={cls.logo} onClick={() => setIsOpen(false)}>
          <Logo
            text="OnlineLoans.org"
            textColor="var(--color-primary)"
            letterSpacing="0.02em"
            className={cls.logoComponent}
          />
        </Link>
        <button
          className={classNames(cls.burger, { [cls.open]: isOpen })}
          onClick={toggleMenu}
          aria-label="Menu toggle"
        >
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
          <span className={cls.burgerLine}></span>
        </button>
        <ul className={classNames(cls.navList, { [cls.open]: isOpen })}>
          {isHome ? (
            headerConfig.map((item) => {
              const isActive = item.pathMatch ? item.pathMatch.includes(path) : path === item.path;

              return (
                <li key={item.path} className={cls.navItem} onClick={toggleMenu}>
                  <AppLink isWithHover href={item.path} className={cls.navLink} isActive={isActive}>
                    {item.title}
                  </AppLink>
                </li>
              );
            })
          ) : (
            <>
              {HEADER_RELATED_NAV_LINKS.map((c) => (
                <li key={c.href} className={cls.navItem} onClick={toggleMenu}>
                  <AppLink
                    href={c.href}
                    className={cls.navLink}
                    isWithHover
                    isActive={isRelatedNavActive(path, c.href)}
                  >
                    {c.title}
                  </AppLink>
                </li>
              ))}

              <li className={cls.navItem} onClick={toggleMenu}>
                <AppLink
                  href="https://apply.onlineloans.org/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls.navLink}
                  isWithHover
                >
                  Apply Now
                </AppLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

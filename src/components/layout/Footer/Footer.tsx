'use client';

import Link from 'next/link';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import Logo from '@/components/ui/Logo/Logo';
import { URL_CONFIG } from '@/config';
import cls from './Footer.module.scss';

interface FooterLinkItem {
  title: string;
  path: string;
}
// back to footer
const topNavLinks: FooterLinkItem[] = [
  {
    title: 'Business Loans',
    path: '/business-loan',
  },
  {
    title: 'Personal Loans',
    path: '/personal-loan',
  },
  {
    title: 'About Us',
    path: URL_CONFIG.about,
  },
  {
    title: 'Cookie Policy',
    path: URL_CONFIG.cookiePolicy,
  },
  {
    title: 'Terms Of Use',
    path: URL_CONFIG.termsOfUse,
  },
  {
    title: 'Partner With Us',
    path: URL_CONFIG.partner,
  },
  {
    title: 'Privacy Policy',
    path: URL_CONFIG.privacyPolicy,
  },
  {
    title: 'Contact',
    path: URL_CONFIG.contact,
  },
];

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.leftColumn}>
          <Link href={URL_CONFIG.main} className={cls.logo}>
            <Logo
              text="OnlineLoans.org"
              textColor="var(--color-white)"
              className={cls.logoComponent}
            />
          </Link>
          <div className={cls.socialMedia}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.socialLink}
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.socialLink}
              aria-label="X (Twitter)"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.socialLink}
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.socialLink}
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://t.me/onlineloans_org"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.socialLink}
              aria-label="Telegram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.193l-1.87 8.81c-.14.625-.52.78-1.05.485l-2.9-2.14-1.4 1.345c-.13.13-.24.24-.49.24l.21-2.98 5.38-4.86c.235-.21-.05-.325-.365-.115l-6.65 4.19-2.87-.9c-.62-.195-.635-.62.13-.93l11.24-4.33c.51-.19.96-.11 1.16.38z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://join.slack.com/t/onlineloansorg/shared_invite/zt-3jjtcgy6t-7p1rJWNhZ2tXJjx2aOZDlA"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.socialLink}
              aria-label="Slack"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <p className={cls.copyright}>
            Copyright © 2009-2025 OnlineLoans.Org Ltd All Rights Reserved.
          </p>
          <p className={cls.termsText}>
            By using our content, products & services you agree to our{' '}
            <AppLink href={URL_CONFIG.termsOfUse} className={cls.inlineLink}>
              Terms of Use
            </AppLink>{' '}
            and{' '}
            <AppLink href={URL_CONFIG.privacyPolicy} className={cls.inlineLink}>
              Privacy Policy
            </AppLink>
            .
          </p>
        </div>
        <div className={cls.rightColumn}>
          <nav className={cls.topNav}>
            <ul className={cls.topNavList}>
              {topNavLinks.map((item) => (
                <li key={item.path} className={cls.topNavItem}>
                  <AppLink href={item.path} className={cls.topNavLink}>
                    {item.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={cls.legalContent}>
            <p className={cls.legalParagraph}>
              Designed to help users make confident decisions online, this website contains
              information about a wide range of products and services. Certain details, including
              but not limited to prices and special offers, are provided to us directly from our
              partners and are dynamic and subject to change at any time without prior notice.
              Though based on meticulous research, the information we share does not constitute
              legal or professional advice or forecast, and should not be treated as such. Company
              listings on this site DO NOT imply endorsement.
            </p>
            <p className={cls.legalParagraph}>
              We are not an investment adviser, loan provider, or a broker and we do not offer loans
              or mortgages directly to end users, but only allows users to match with lending
              partners and platforms that may extend a loan. All loan approval decisions and terms
              are determined by the loan providers at the time of your application with them. Any
              matching request submitted through our website does not constitute a loan application
              and you will have to submit a loan application to the respective lender before the
              lender provides you with an actual offer. We do not warrant that you will be approved
              for a loan, nor that you will be offered a loan with the same terms presented on our
              website.
            </p>
            <p className={cls.legalParagraph}>
              Insurance services are offered through Natural Intelligence Technologies Inc., a
              licensed insurance producer (NPN: 19016703). Services may not be available in all
              states. Additional licensing information can be found{' '}
              <AppLink href="/licensing" className={cls.inlineLink}>
                here
              </AppLink>
              . Insurance products are governed by the terms in the applicable insurance policy.
              Approval for coverage, premiums, commissions and fees, and other policy obligations
              are the sole responsibility of the underwriting insurer. The information on this site
              does not modify any insurance policy terms in any way.
            </p>
            <p className={cls.legalParagraph}>
              Reproduction in whole or in part is strictly prohibited.
            </p>
          </div>
          <div className={cls.advertisingDisclosure}>
            <h3 className={cls.disclosureTitle}>Advertising Disclosure</h3>
            <p className={cls.legalParagraph}>
              This site is a free online resource that strives to offer helpful content and
              comparison features to our visitors. We accept advertising compensation from companies
              that appear on the site, which may impact the location and order in which brands
              (and/or their products) are presented, and may also impact the score that is assigned
              to it. Company listings on this page DO NOT imply endorsement. We do not feature all
              providers on the market. Except as expressly set forth in our Terms of Use, all
              representations and warranties regarding the information presented on this page are
              disclaimed. The information, including pricing, which appears on this site is subject
              to change at any time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

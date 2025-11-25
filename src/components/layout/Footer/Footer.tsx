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

const topNavLinks: FooterLinkItem[] = [
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
          <p className={cls.copyright}>
            Copyright © 2009-2025 Natural Intelligence Ltd. All Rights Reserved.
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
          <p className={cls.companyInfo}>
            OnlineLoans.org is a dba of Natural Intelligence Technologies Inc. NMLS # 2084135
          </p>
          <div className={cls.additionalLinks}>
            <AppLink href="/mortgage-licenses" className={cls.additionalLink}>
              Mortgage Licenses
            </AppLink>
            <AppLink href="/nmls-consumer-access" className={cls.additionalLink}>
              NMLS Consumer Access
            </AppLink>
            <AppLink href="/do-not-sell" className={cls.additionalLink}>
              Don't Sell My Personal Information
            </AppLink>
          </div>
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
              We are not an investment adviser, loan provider, or a broker and we do not offer
              loans or mortgages directly to end users, but only allows users to match with lending
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
              comparison features to our visitors. We accept advertising compensation from
              companies that appear on the site, which may impact the location and order in which
              brands (and/or their products) are presented, and may also impact the score that is
              assigned to it. Company listings on this page DO NOT imply endorsement. We do not
              feature all providers on the market. Except as expressly set forth in our Terms of
              Use, all representations and warranties regarding the information presented on this
              page are disclaimed. The information, including pricing, which appears on this site
              is subject to change at any time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

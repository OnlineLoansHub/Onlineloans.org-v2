'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import { SITE_URL } from '@/config/seo';
import cls from './page.module.scss';

export default function LendingTreeReviewPage() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href');
        if (href) {
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            // Update URL with hash
            window.history.pushState(null, '', href);
            // Scroll to element
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  // Structured Data Schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'LendingTree Review: Comprehensive Overview for Personal Loans',
    description:
      "Complete LendingTree review for personal loans. Learn how LendingTree works, compare personal loan offers, understand pros and cons, and find out if it's the right marketplace for your borrowing needs.",
    author: {
      '@type': 'Person',
      name: 'Michael Thompson',
      jobTitle: 'Senior Business Finance Analyst',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OnlineLoans.org',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo/onlineloans-logo.png`,
      },
    },
    datePublished: '2025-12-04T00:00:00Z',
    dateModified: '2025-12-04T00:00:00Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/personal-loan/lendingtree-review`,
    },
    image: `${SITE_URL}/images/brands-logos/LendingTree-logo.webp`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Personal Loans',
        item: `${SITE_URL}/personal-loan`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'LendingTree Review',
        item: `${SITE_URL}/personal-loan/lendingtree-review`,
      },
    ],
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className={cls.article}>
        <div className={cls.container}>
          <header className={cls.header}>
            <div className={cls.coverImageWrapper}>
              <Image
                src="/images/brands-logos/LendingTree-logo.webp"
                alt="LendingTree Review"
                width={1200}
                height={600}
                className={cls.coverImage}
                priority
              />
            </div>
            <h1 className={cls.title}>
              LendingTree Review: Comprehensive Overview for Personal Loans
            </h1>
            <div id="download-app" className={cls.appDownloadSection}>
              <p className={cls.appDownloadTitle}>Download the LendingTree App</p>
              <div className={cls.appDownloadButtons}>
                <a
                  href="https://apps.apple.com/us/app/lendingtree-spring/id957868548"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={cls.appDownloadLink}
                >
                  <Image
                    src="/images/apple/Store=App Store, Type=Dark, Language=English.svg"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className={cls.appBadgeDesktop}
                  />
                  <Image
                    src="/images/apple/Store=App Store, Type=Dark, Language=English@2x.png"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className={cls.appBadgeMobile}
                  />
                </a>
                <a
                  href="https://springbylendingtree.onelink.me/24Zy/tt82ktg9"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={cls.appDownloadLink}
                >
                  <Image
                    src="/images/google/Store=Google Play, Type=Dark, Language=English.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className={cls.appBadgeDesktop}
                  />
                  <Image
                    src="/images/google/Store=Google Play, Type=Dark, Language=English@2x.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className={cls.appBadgeMobile}
                  />
                </a>
              </div>
            </div>
            <div className={cls.authorSection}>
              <p className={cls.authorBy}>Written by</p>
              <div className={cls.author}>
                <Image
                  src="/images/authors/0_Man_Adult_1920x1080_optimize.gif"
                  alt="Michael Thompson"
                  width={64}
                  height={64}
                  className={cls.authorImage}
                />
                <div className={cls.authorName}>
                  <p>Michael Thompson</p>
                  <p>Senior Business Finance Analyst</p>
                </div>
              </div>
              <p className={cls.authorAbout}>
                Michael Thompson is a Senior Business Finance Analyst with over 15 years of
                experience in business lending and financial analysis. He specializes in helping
                small business owners navigate loan options, understand financing terms, and make
                informed decisions about their business funding needs.
              </p>
            </div>
            <div className={cls.lastUpdated}>
              <p>Last Updated: December 14, 2025</p>
            </div>
          </header>

          <nav className={cls.tableOfContents} aria-label="Table of Contents">
            <div className={cls.tocTitle}>Table of Contents</div>
            <ul className={cls.tocList}>
              <li>
                <a href="#download-app">Download the LendingTree App</a>
              </li>
              <li>
                <a href="#overview">Overview of LendingTree</a>
              </li>
              <li>
                <a href="#how-it-works">How LendingTree Works for Personal Loans</a>
              </li>
              <li>
                <a href="#customer-experience">Customer Experience and Satisfaction</a>
              </li>
              <li>
                <a href="#technology">Technology and Mobile Tools</a>
              </li>
              <li>
                <a href="#pros-cons">Pros and Cons of Using LendingTree</a>
              </li>
              <li>
                <a href="#right-for-you">Is LendingTree Right for You?</a>
              </li>
            </ul>
          </nav>

          <div className={cls.content}>
            <article id="overview" className={cls.loanArticle}>
              <h2 id="overview-heading" className={cls.loanArticleTitle}>
                Overview of LendingTree
              </h2>
              <p className={cls.loanArticleTxt}>
                <a
                  href="https://www.lendingtree.com"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={cls.externalLink}
                >
                  LendingTree
                </a>
                , Inc. is a leading American online lending marketplace founded in 1996 by Doug
                Lebda. Launched in 1998, the platform was created to simplify loan shopping by
                allowing borrowers to compare offers from multiple lenders with a single
                application. Headquartered in Charlotte, NC, LendingTree connects consumers with
                banks and finance companies for a wide range of products – from mortgages and
                personal loans to credit cards and insurance.
                <br />
                <br />
                The company doesn&apos;t itself lend money; instead, it matches borrowers to lenders
                who then compete to offer the best terms. Over the years, LendingTree grew rapidly
                and has become one of the nation&apos;s largest financial marketplaces, helping over
                111 million users and facilitating millions of loans. In October 2025, founder Doug
                Lebda tragically passed away, and the company&apos;s COO Scott Peyree took over as
                CEO. Today, LendingTree is a publicly traded company (Nasdaq: TREE) with annual
                revenues around $900 million (2024) and nearly 1,000 employees, solidifying its role
                as a pioneer in fintech and loan comparison shopping.
              </p>
            </article>

            <article id="how-it-works" className={cls.loanArticle}>
              <h2 id="how-it-works-heading" className={cls.loanArticleTitle}>
                How LendingTree Works for Personal Loans
              </h2>
              <p className={cls.loanArticleTxt}>
                LendingTree is a marketplace, not a lender or broker. It does not originate or
                service loans itself. Instead, the platform partners with a large network of banks,
                lenders, and financial institutions. For personal loans specifically, here&apos;s
                how the process works:
              </p>
              <ul className={cls.loanArticleList}>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Single Application Process:</strong> Users fill out one unified
                    application on LendingTree&apos;s website or app with basic information
                    including loan purpose, desired amount, credit profile, and financial details.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Multiple Lender Matching:</strong> LendingTree&apos;s system forwards
                    your information to multiple lenders in their network that match your profile
                    and needs. Within a short time, borrowers can receive up to five loan offers or
                    rate quotes from different lenders, all based on a single LendingTree request.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Compare Offers Side-by-Side:</strong> This one-stop comparison model
                    makes it easy to see competitive rates and terms side by side, helping users
                    find optimal loan options without having to apply separately with each lender.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Free for Consumers:</strong> LendingTree&apos;s service is completely
                    free for consumers – the company earns revenue from the lenders on its network
                    (who pay for leads or closed loans).
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Soft Credit Inquiry:</strong> Checking loan offers through LendingTree
                    typically uses a soft credit inquiry, so your credit score isn&apos;t impacted
                    just for shopping around. Only the lender you ultimately choose will do a hard
                    pull when finalizing the loan.
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                LendingTree offers personal loans for various purposes including debt consolidation,
                home improvement, major purchases, medical expenses, and more. The platform matches
                borrowers with lenders that fit their credit profile, which means borrowers with
                less-than-perfect credit or unique situations may still find options through
                LendingTree&apos;s extensive network. If you&apos;re ready to compare personal loan
                offers, <AppLink href="/personal-loan/apply">start your application here</AppLink>{' '}
                to see multiple quotes from top lenders.
              </p>
            </article>

            <article id="customer-experience" className={cls.loanArticle}>
              <h2 id="customer-experience-heading" className={cls.loanArticleTitle}>
                Customer Experience and Satisfaction
              </h2>
              <p className={cls.loanArticleTxt}>
                User experience is generally a strong point for LendingTree, as reflected in its
                high customer ratings. The platform is designed to be quick and straightforward –
                borrowers fill out a single online form with basic info, and LendingTree&apos;s
                system matches them with lenders that fit their needs. Many customers appreciate
                that they can get multiple quotes at once, often within minutes, which saves
                considerable time and effort in the loan shopping process. Ready to get started?{' '}
                <AppLink href="/personal-loan/apply">Apply for a personal loan now</AppLink> to see
                your options.
              </p>
              <p className={cls.loanArticleTxt}>
                Customer satisfaction ratings for LendingTree are generally positive. The service
                holds an A+ rating from the Better Business Bureau and enjoys a high Trustpilot
                score (approximately 4.5–4.8 out of 5) based on tens of thousands of reviews. Many
                users report that they were able to secure loans with lower rates or better terms
                than expected by having lenders compete for their business.
              </p>
              <div className={cls.articleLoanTip}>
                <Image
                  src="/images/article/lamp.png"
                  alt=""
                  width={73}
                  height={73}
                  className={cls.articleIcon}
                />
                <p className={cls.articleLoanTipTxt}>
                  <strong>Important Note About Follow-Up Communications:</strong>
                  <br />
                  The biggest complaint from LendingTree users is spam and aggressive follow-up from
                  lenders. Because LendingTree sends a borrower&apos;s inquiry out to multiple
                  partners, interested lenders will often immediately contact the consumer.
                  It&apos;s not unusual for users to be &quot;bombarded with calls, emails, and
                  texts&quot; shortly after submitting a request. LendingTree does allow users to
                  opt out of further marketing, but users should be prepared for a surge in
                  solicitations initially.
                </p>
              </div>
              <p className={cls.loanArticleTxt}>
                The customer service experience with LendingTree itself is generally positive –
                while most of the loan process is online, the company offers support via phone and
                email. Their customer service line has extended hours on weekdays (8am-9pm ET) and
                weekend availability. However, it&apos;s worth noting that once a borrower chooses a
                lender and begins a formal loan application, further customer service is handled by
                that lender (since LendingTree&apos;s role is essentially complete at the
                match-making stage).
              </p>
            </article>

            <article id="technology" className={cls.loanArticle}>
              <h2 id="technology-heading" className={cls.loanArticleTitle}>
                Technology and Mobile Tools
              </h2>
              <p className={cls.loanArticleTxt}>
                As a fintech pioneer, LendingTree leverages technology to enhance user experience.
                The website interface is intuitive and user-friendly – it takes only a few clicks to
                navigate to personal loans, fill in some basic financial details, and get to your
                loan offers. The site guides users through questions step-by-step and provides a
                wealth of informational resources and tools online, such as loan calculators, rate
                trend trackers, and educational articles.
              </p>
              <p className={cls.loanArticleTxt}>
                LendingTree has invested heavily in its mobile app (branded &quot;LendingTree
                Spring&quot;), which goes beyond just loan shopping to offer a holistic personal
                finance experience. The app provides:
              </p>
              <ul className={cls.loanArticleList}>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Free Credit Score Tracking:</strong> Frequent updates and alerts so
                    users can monitor their credit health in real time
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Personalized Savings Insights:</strong> Analyzes your finances and
                    credit profile to suggest ways to save money or improve your credit
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Loan Shopping:</strong> Users can shop for personal loans within the
                    app, seeing offers from LendingTree&apos;s network of lenders
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Budgeting and Spending Insights:</strong> Helps users track their money
                    habits and provides fraud protection alerts
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                The app has received strong user feedback – on the Apple App Store it has a 4.8 out
                of 5 star rating from tens of thousands of users, indicating a positive reception.
                Overall, LendingTree&apos;s technology allows consumers to harness financial data
                and multiple lender connections quickly, securely, and intelligently. Whether you
                use LendingTree or prefer to{' '}
                <AppLink href="/personal-loan/apply">apply directly through our platform</AppLink>,
                comparing multiple offers is key to finding the best personal loan rates.
              </p>
            </article>

            <article id="pros-cons" className={cls.loanArticle}>
              <h2 id="pros-cons-heading" className={cls.loanArticleTitle}>
                Pros and Cons of Using LendingTree
              </h2>
              <p className={cls.loanArticleTxt}>
                <strong>Pros:</strong>
              </p>
              <ul className={cls.loanArticleList}>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>One-Stop Shop for Loans:</strong> LendingTree offers access to multiple
                    lenders with one application, sparing you the hassle of filling out numerous
                    loan applications. You can get several competing offers at once, which increases
                    the chances of finding a low rate or better terms.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Free and No Impact on Credit to Compare:</strong> Using LendingTree is
                    free for consumers – there are no fees to get quotes. Additionally, checking
                    loan offers through LendingTree typically uses a soft credit inquiry, so your
                    credit score isn&apos;t dinged just for shopping around.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Fast and Easy Process:</strong> The online process is streamlined and
                    user-friendly, often providing matches within minutes. The website and app guide
                    you through simple questions; you enter your information once and quickly get
                    multiple offers.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Educational Resources and Tools:</strong> LendingTree arms users with
                    information. The site offers calculators, rate comparisons, credit score tools,
                    and educational content so you can make informed decisions.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Accommodates Various Credit Profiles:</strong> Because
                    LendingTree&apos;s network includes many lenders, including some specializing in
                    subprime or specific loan types, borrowers with less-than-perfect credit or
                    unique situations may still find options.
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                <strong>Cons:</strong>
              </p>
              <ul className={cls.loanArticleList}>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Potential for Spam/Excessive Contact:</strong> The biggest complaint by
                    far is that after using LendingTree, you may get inundated with calls, emails,
                    and texts from lenders. Since multiple lenders receive your info and want your
                    business, expect a barrage of solicitations, especially in the first days after
                    your inquiry.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Not All Lenders or Terms Are Equal:</strong> LendingTree provides
                    quotes, but the quality of offers can vary widely. Some partner lenders may
                    charge high origination fees or offer higher rates depending on your profile.
                    It&apos;s up to the borrower to carefully compare the fine print of each offer.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Limited Direct Support After Matching:</strong> Because LendingTree is
                    just a middleman, once you choose a loan offer the ongoing process is out of
                    their hands. If paperwork snags or issues arise with the lender, you must work
                    them out with that lender.
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    <strong>Personal Information Shared Widely:</strong> Using the service means
                    sharing your sensitive financial details with LendingTree and, subsequently,
                    multiple lenders. While this is done securely, it does spread your data to
                    several companies.
                  </div>
                </li>
              </ul>
            </article>

            <div className={cls.loanAction}>
              <AppLink href="/personal-loan/apply">
                <Button variant="primary" className={cls.loanActionBtn}>
                  Get personal loan offers from multiple lenders now!
                </Button>
              </AppLink>
            </div>

            <article id="right-for-you" className={cls.loanArticle}>
              <h2 id="right-for-you-heading" className={cls.loanArticleTitle}>
                Is LendingTree Right for You?
              </h2>
              <p className={cls.loanArticleTxt}>
                LendingTree is an excellent choice for personal loan shoppers who want to compare
                multiple offers quickly without impacting their credit score. It&apos;s particularly
                beneficial if you want to see multiple offers, but you can also{' '}
                <AppLink href="/personal-loan/apply">
                  apply for personal loans directly through our platform
                </AppLink>{' '}
                to compare rates from top lenders. LendingTree is particularly beneficial if:
              </p>
              <ul className={cls.loanArticleList}>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>You want to see multiple loan offers with a single application</div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    You prefer to shop online and compare rates from the comfort of your home
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>You want to avoid multiple hard credit inquiries while rate shopping</div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    You&apos;re comfortable with receiving multiple follow-up communications from
                    lenders
                  </div>
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  <div>
                    You want access to educational resources and tools to make informed decisions
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                However, LendingTree may not be the best fit if you prefer working directly with a
                single lender, want in-person guidance, or are sensitive to marketing
                communications. As with any financial decision, it&apos;s important to carefully
                review all loan offers, compare terms and fees, and choose the option that best fits
                your financial situation and goals.
              </p>
              <p className={cls.loanArticleTxt}>
                Overall, LendingTree&apos;s transparency about offers and its success in quickly
                connecting consumers to loan options have earned it a largely favorable reputation
                in the marketplace. For many borrowers, the convenience of comparing multiple
                personal loan offers in one place outweighs the potential drawbacks of increased
                lender communications. Whether you choose LendingTree or{' '}
                <AppLink href="/personal-loan/apply">apply through our platform</AppLink>, the key
                is to compare multiple offers to find the best rates and terms for your financial
                situation.
              </p>
            </article>
          </div>

          <section id="apply-now" className={cls.ctaBanner}>
            <div className={cls.ctaContent}>
              <h2 id="apply-now-heading" className={cls.ctaTitle}>
                Ready to Compare Personal Loan Offers?
              </h2>
              <p className={cls.ctaDescription}>
                Get matched with multiple lenders and compare rates side-by-side. Fast approval and
                competitive rates from top personal loan providers.
              </p>
              <AppLink href="/personal-loan/apply" className={cls.ctaLink}>
                <Button variant="primary" className={cls.ctaButton}>
                  Apply for a Personal Loan
                </Button>
              </AppLink>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

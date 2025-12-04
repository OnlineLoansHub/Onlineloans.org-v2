'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { classNames } from '@/lib';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { SITE_URL } from '@/config/seo';
import cls from './Article.module.scss';

export default function LendingTreeReviewPage() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [email, setEmail] = useState('');
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const tableOfContents = [
    'Overview of LendingTree',
    'How LendingTree Works for Personal Loans',
    'Customer Experience and Satisfaction',
    'Technology and Mobile Tools',
    'Pros and Cons of Using LendingTree',
    'Is LendingTree Right for You?',
  ];

  useEffect(() => {
    const handleScroll = () => {
      const fromTop = window.scrollY + 100;
      let foundActive = false;

      for (let i = articlesRef.current.length - 1; i >= 0; i--) {
        const article = articlesRef.current[i];
        if (article) {
          const articleTop = article.offsetTop;

          if (fromTop >= articleTop && !foundActive) {
            if (activeMenuItem !== i) {
              setActiveMenuItem(i);
            }

            foundActive = true;
          }
        }
      }

      if (!foundActive && activeMenuItem !== 0) {
        setActiveMenuItem(0);
      }
    };

    const debounce = (func: () => void, wait: number) => {
      let timeout: NodeJS.Timeout;

      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(), wait);
      };
    };

    const debouncedScroll = debounce(handleScroll, 20);
    window.addEventListener('scroll', debouncedScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [activeMenuItem]);

  const handleMenuItemClick = (index: number, title: string) => {
    const targetArticle = articlesRef.current.find((article) => {
      if (!article) return false;
      const titleElement = article.querySelector('h4');

      return titleElement?.textContent?.trim() === title;
    });

    if (targetArticle) {
      targetArticle.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveMenuItem(index);
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = 'LendingTree Review: Comprehensive Overview for Personal Loans';

    switch (platform) {
      case 'link':
        navigator.clipboard.writeText(url);
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          '_blank'
        );
        break;
      default:
        break;
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const handleContactButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleContactSubmit(e as unknown as React.FormEvent);
  };

  // Structured Data Schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'LendingTree Review: Comprehensive Overview for Personal Loans',
    description:
      "Complete LendingTree review for personal loans. Learn how LendingTree works, compare personal loan offers, understand pros and cons, and find out if it's the right marketplace for your borrowing needs.",
    author: {
      '@type': 'Person',
      name: 'Sarah Martinez',
      jobTitle: 'Personal Finance Writer',
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
    image: `${SITE_URL}/images/brands-logos/lendingtree-logo.jpg`,
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
      <section id="loan" className={cls.section}>
        <div className={cls.containerContent}>
          <div>
            <h1 className={classNames(cls.blockTitle, {}, [cls.loanTitle])}>
              LendingTree Review: Comprehensive Overview for Personal Loans
            </h1>

            <div className={cls.loanInfo}>
              <p>4 December 2025</p>
              <Image
                src="/images/article/dot_2.svg"
                alt=""
                width={5}
                height={5}
                className={cls.loanInfoDot}
              />
              <p>
                <Image
                  src="/images/article/clock.svg"
                  alt=""
                  width={18}
                  height={18}
                  className={cls.loanInfoImg}
                />
                15 min read
              </p>
            </div>
          </div>
          <div className={cls.loanContent}>
            <div className={cls.loanAuthorWrapperMobile}>
              <p className={cls.loanAuthorBy}>Written by</p>
              <div className={cls.loanAuthor}>
                <Image
                  src="/images/article/article_author.png"
                  alt="Sarah Martinez"
                  width={48}
                  height={48}
                  className={cls.loanAuthorImg}
                />
                <div className={cls.loanAuthorName}>
                  <p>Sarah Martinez</p>
                  <p>Personal Finance Writer</p>
                </div>
              </div>
              <p className={cls.loanAuthorAbout}>
                Sarah is a certified financial planner and personal finance writer with over 10
                years of experience helping consumers make informed borrowing decisions. She
                specializes in debt management, credit optimization, and loan comparison strategies.
              </p>
            </div>
            <div className={cls.loanLeftPart}>
              <div className={cls.loanShare}>
                <p className={cls.loanShareTitle}>Share this</p>
                <div className={cls.loanShareImages}>
                  <button onClick={() => handleShare('link')} aria-label="Copy link">
                    <Image
                      src="/images/article/share_link.svg"
                      alt="Share link"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                  <button onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
                    <Image
                      src="/images/article/share_fb.svg"
                      alt="Share on Facebook"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                  <button onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
                    <Image
                      src="/images/article/share_twitter.svg"
                      alt="Share on Twitter"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                  <button onClick={() => handleShare('more')} aria-label="More sharing options">
                    <Image
                      src="/images/article/share_dots.svg"
                      alt="More sharing options"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                </div>
              </div>
              <div className={cls.loanContents}>
                <p className={cls.loanContentsTitle}>On this page:</p>
                <ul className={cls.loanContentsList}>
                  {tableOfContents.map((item, index) => (
                    <li
                      key={index}
                      ref={(el) => {
                        menuItemsRef.current[index] = el;
                      }}
                      className={classNames(cls.loanContentsListItem, {
                        [cls.active]: activeMenuItem === index,
                      })}
                      onClick={() => handleMenuItemClick(index, item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={cls.loanCenterPart}>
              <article
                ref={(el) => {
                  articlesRef.current[0] = el;
                }}
                className={cls.loanArticle}
              >
                <h4 className={cls.loanArticleTitle}>Overview of LendingTree</h4>
                <p className={cls.loanArticleTxt}>
                  LendingTree, Inc. is a leading American online lending marketplace founded in 1996
                  by Doug Lebda. Launched in 1998, the platform was created to simplify loan
                  shopping by allowing borrowers to compare offers from multiple lenders with a
                  single application. Headquartered in Charlotte, NC, LendingTree connects consumers
                  with banks and finance companies for a wide range of products – from mortgages and
                  personal loans to credit cards and insurance.
                  <br />
                  <br />
                  The company doesn&apos;t itself lend money; instead, it matches borrowers to
                  lenders who then compete to offer the best terms. Over the years, LendingTree grew
                  rapidly and has become one of the nation&apos;s largest financial marketplaces,
                  helping over 111 million users and facilitating millions of loans. In October
                  2025, founder Doug Lebda tragically passed away, and the company&apos;s COO Scott
                  Peyree took over as CEO. Today, LendingTree is a publicly traded company (Nasdaq:
                  TREE) with annual revenues around $900 million (2024) and nearly 1,000 employees,
                  solidifying its role as a pioneer in fintech and loan comparison shopping.
                </p>
              </article>

              <article
                ref={(el) => {
                  articlesRef.current[1] = el;
                }}
                className={cls.loanArticle}
              >
                <h4 className={cls.loanArticleTitle}>How LendingTree Works for Personal Loans</h4>
                <p className={cls.loanArticleTxt}>
                  LendingTree is a marketplace, not a lender or broker. It does not originate or
                  service loans itself. Instead, the platform partners with a large network of
                  banks, lenders, and financial institutions. For personal loans specifically,
                  here&apos;s how the process works:
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
                      and needs. Within a short time, borrowers can receive up to five loan offers
                      or rate quotes from different lenders, all based on a single LendingTree
                      request.
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
                  LendingTree offers personal loans for various purposes including debt
                  consolidation, home improvement, major purchases, medical expenses, and more. The
                  platform matches borrowers with lenders that fit their credit profile, which means
                  borrowers with less-than-perfect credit or unique situations may still find
                  options through LendingTree&apos;s extensive network. If you&apos;re ready to
                  compare personal loan offers,{' '}
                  <AppLink href="/personal-loan/apply">start your application here</AppLink> to see
                  multiple quotes from top lenders.
                </p>
              </article>

              <article
                ref={(el) => {
                  articlesRef.current[2] = el;
                }}
                className={cls.loanArticle}
              >
                <h4 className={cls.loanArticleTitle}>Customer Experience and Satisfaction</h4>
                <p className={cls.loanArticleTxt}>
                  User experience is generally a strong point for LendingTree, as reflected in its
                  high customer ratings. The platform is designed to be quick and straightforward –
                  borrowers fill out a single online form with basic info, and LendingTree&apos;s
                  system matches them with lenders that fit their needs. Many customers appreciate
                  that they can get multiple quotes at once, often within minutes, which saves
                  considerable time and effort in the loan shopping process. Ready to get started?{' '}
                  <AppLink href="/personal-loan/apply">Apply for a personal loan now</AppLink> to
                  see your options.
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
                    The biggest complaint from LendingTree users is spam and aggressive follow-up
                    from lenders. Because LendingTree sends a borrower&apos;s inquiry out to
                    multiple partners, interested lenders will often immediately contact the
                    consumer. It&apos;s not unusual for users to be &quot;bombarded with calls,
                    emails, and texts&quot; shortly after submitting a request. LendingTree does
                    allow users to opt out of further marketing, but users should be prepared for a
                    surge in solicitations initially.
                  </p>
                </div>
                <p className={cls.loanArticleTxt}>
                  The customer service experience with LendingTree itself is generally positive –
                  while most of the loan process is online, the company offers support via phone and
                  email. Their customer service line has extended hours on weekdays (8am-9pm ET) and
                  weekend availability. However, it&apos;s worth noting that once a borrower chooses
                  a lender and begins a formal loan application, further customer service is handled
                  by that lender (since LendingTree&apos;s role is essentially complete at the
                  match-making stage).
                </p>
              </article>

              <article
                ref={(el) => {
                  articlesRef.current[3] = el;
                }}
                className={cls.loanArticle}
              >
                <h4 className={cls.loanArticleTitle}>Technology and Mobile Tools</h4>
                <p className={cls.loanArticleTxt}>
                  As a fintech pioneer, LendingTree leverages technology to enhance user experience.
                  The website interface is intuitive and user-friendly – it takes only a few clicks
                  to navigate to personal loans, fill in some basic financial details, and get to
                  your loan offers. The site guides users through questions step-by-step and
                  provides a wealth of informational resources and tools online, such as loan
                  calculators, rate trend trackers, and educational articles.
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
                      <strong>Budgeting and Spending Insights:</strong> Helps users track their
                      money habits and provides fraud protection alerts
                    </div>
                  </li>
                </ul>
                <p className={cls.loanArticleTxt}>
                  The app has received strong user feedback – on the Apple App Store it has a 4.8
                  out of 5 star rating from tens of thousands of users, indicating a positive
                  reception. Overall, LendingTree&apos;s technology allows consumers to harness
                  financial data and multiple lender connections quickly, securely, and
                  intelligently. Whether you use LendingTree or prefer to{' '}
                  <AppLink href="/personal-loan/apply">apply directly through our platform</AppLink>
                  , comparing multiple offers is key to finding the best personal loan rates.
                </p>
              </article>

              <article
                ref={(el) => {
                  articlesRef.current[4] = el;
                }}
                className={cls.loanArticle}
              >
                <h4 className={cls.loanArticleTitle}>Pros and Cons of Using LendingTree</h4>
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
                      <strong>One-Stop Shop for Loans:</strong> LendingTree offers access to
                      multiple lenders with one application, sparing you the hassle of filling out
                      numerous loan applications. You can get several competing offers at once,
                      which increases the chances of finding a low rate or better terms.
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
                      user-friendly, often providing matches within minutes. The website and app
                      guide you through simple questions; you enter your information once and
                      quickly get multiple offers.
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
                      information. The site offers calculators, rate comparisons, credit score
                      tools, and educational content so you can make informed decisions.
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
                      LendingTree&apos;s network includes many lenders, including some specializing
                      in subprime or specific loan types, borrowers with less-than-perfect credit or
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
                      <strong>Potential for Spam/Excessive Contact:</strong> The biggest complaint
                      by far is that after using LendingTree, you may get inundated with calls,
                      emails, and texts from lenders. Since multiple lenders receive your info and
                      want your business, expect a barrage of solicitations, especially in the first
                      days after your inquiry.
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
                      It&apos;s up to the borrower to carefully compare the fine print of each
                      offer.
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
                  <Button variant="primary" onClick={() => {}} className={cls.loanActionBtn}>
                    Get personal loan offers from multiple lenders now!
                  </Button>
                </AppLink>
              </div>

              <article
                ref={(el) => {
                  articlesRef.current[5] = el;
                }}
                className={cls.loanArticle}
              >
                <h4 className={cls.loanArticleTitle}>Is LendingTree Right for You?</h4>
                <p className={cls.loanArticleTxt}>
                  LendingTree is an excellent choice for personal loan shoppers who want to compare
                  multiple offers quickly without impacting their credit score. It&apos;s
                  particularly beneficial if you want to see multiple offers, but you can also{' '}
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
                  review all loan offers, compare terms and fees, and choose the option that best
                  fits your financial situation and goals.
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

            <div className={cls.loanRightPart}>
              <div className={cls.loanAuthorWrapper}>
                <p className={cls.loanAuthorBy}>Written by</p>
                <div className={cls.loanAuthor}>
                  <Image
                    src="/images/article/article_author.png"
                    alt="Sarah Martinez"
                    width={48}
                    height={48}
                    className={cls.loanAuthorImg}
                  />
                  <div className={cls.loanAuthorName}>
                    <p>Sarah Martinez</p>
                    <p>Personal Finance Writer</p>
                  </div>
                </div>
                <p className={cls.loanAuthorAbout}>
                  Sarah is a certified financial planner and personal finance writer with over 10
                  years of experience helping consumers make informed borrowing decisions. She
                  specializes in debt management, credit optimization, and loan comparison
                  strategies.
                </p>
              </div>

              <div className={cls.loanShareMobile}>
                <p className={cls.loanShareTitle}>Share this</p>
                <div className={cls.loanShareImages}>
                  <button onClick={() => handleShare('link')} aria-label="Copy link">
                    <Image
                      src="/images/article/share_link.svg"
                      alt="Share link"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                  <button onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
                    <Image
                      src="/images/article/share_fb.svg"
                      alt="Share on Facebook"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                  <button onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
                    <Image
                      src="/images/article/share_twitter.svg"
                      alt="Share on Twitter"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                  <button onClick={() => handleShare('more')} aria-label="More sharing options">
                    <Image
                      src="/images/article/share_dots.svg"
                      alt="More sharing options"
                      width={24}
                      height={24}
                      className={cls.loanShareImg}
                    />
                  </button>
                </div>
              </div>

              <div className={classNames(cls.loanArticleRightBlock, {}, [cls.loanArticlePerf])}>
                <Image src="/images/article/speed.png" alt="" width={40} height={40} />
                <p className={cls.loanArticleRightBlockTitle}>Article performance</p>
                <p className={cls.loanArticleRightBlockSubtitle}>Data from Ahrefs</p>
                <div className={cls.loanArticleRightBlockTxtWrapper}>
                  <p className={cls.loanArticleRightBlockTxt}>Organic traffic</p>
                  <div className={cls.tooltip}>
                    <Image src="/images/article/info.svg" alt="Info" width={10} height={10} />
                    <span className={cls.tooltipText}>
                      The number of websites linking to this post.
                    </span>
                  </div>
                </div>
                <p className={cls.loanArticleRightBlockNumbers}>1.13K</p>
                <div className={cls.loanArticleRightBlockTxtWrapper}>
                  <p className={cls.loanArticleRightBlockTxt}>Linking websites</p>
                  <div className={cls.tooltip}>
                    <Image src="/images/article/info.svg" alt="Info" width={10} height={10} />
                    <span className={cls.tooltipText}>
                      The number of websites linking to this post.
                    </span>
                  </div>
                </div>
                <p className={cls.loanArticleRightBlockNumbers}>285</p>
              </div>

              <div className={classNames(cls.loanArticleRightBlock, {}, [cls.loanArticleContact])}>
                <Image src="/images/article/mail.png" alt="" width={40} height={40} />
                <p className={cls.loanArticleRightBlockTitle}>Contact a personal loan agent</p>
                <p className={cls.loanArticleRightBlockTxt}>
                  Leave your email and we will get back to you.
                </p>
                <form onSubmit={handleContactSubmit}>
                  <Input
                    name="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="Enter your email"
                    className={cls.loanArticleRightBlockInput}
                    type="email"
                  />
                  <Button
                    variant="primary"
                    onClick={handleContactButtonClick}
                    className={cls.primaryBtn}
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

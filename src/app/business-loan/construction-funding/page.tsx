'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { classNames } from '@/lib';
import { Button } from '@/components/ui/Button/Button';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './Article.module.scss';

export default function ConstructionFundingPage() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const tableOfContents = [
    'What is construction funding?',
    'Types of construction loans',
    'Why construction companies need funding',
    'How to get construction funding',
    'How to apply for construction loans',
    'Choosing the best construction lender',
  ];

  useEffect(() => {
    // Performance: Use requestAnimationFrame to batch DOM reads and prevent forced reflow
    let rafId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      // Performance: Batch all DOM reads in requestAnimationFrame
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          const fromTop = window.scrollY + 100;
          let foundActive = false;

          // Performance: Read all layout properties together before any writes
          const articleTops = articlesRef.current.map((article) =>
            article ? article.offsetTop : Infinity
          );

          for (let i = articleTops.length - 1; i >= 0; i--) {
            const articleTop = articleTops[i];

            if (fromTop >= articleTop && !foundActive) {
              if (activeMenuItem !== i) {
                setActiveMenuItem(i);
              }
              foundActive = true;
            }
          }

          if (!foundActive && activeMenuItem !== 0) {
            setActiveMenuItem(0);
          }

          rafId = null;
        });
      }
    };

    // Performance: Debounce scroll handler to reduce frequency
    const debounce = (func: () => void, wait: number) => {
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => func(), wait);
      };
    };

    const debouncedScroll = debounce(handleScroll, 20);
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
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
    switch (platform) {
      case 'link':
        navigator.clipboard.writeText(window.location.href);
        break;
      case 'facebook':
        window.open('https://www.facebook.com', '_blank', 'noopener,noreferrer');
        break;
      case 'twitter':
        window.open('https://www.x.com', '_blank', 'noopener,noreferrer');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/company/onlineloans-org', '_blank', 'noopener,noreferrer');
        break;
      default:
        break;
    }
  };

  // Structured Data Schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Construction Business Loans Guide - How Construction Loans Work',
    description:
      'Complete guide to construction business loans: Learn how construction loans work, types of construction financing, how to apply, and find the best lenders.',
    author: {
      '@type': 'Person',
      name: 'Michael Chen',
      jobTitle: 'Business Finance Writer',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OnlineLoans.org',
      url: 'https://www.onlineloans.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.onlineloans.org/images/logo/onlineloans-logo.png',
      },
    },
    datePublished: '2025-01-15T00:00:00Z',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.onlineloans.org/business-loan/construction-funding',
    },
  };

  const financialProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Construction Business Loans',
    description:
      'Compare the best construction business loans from top lenders. Find fast funding options with competitive rates and flexible terms for construction companies.',
    provider: {
      '@type': 'Organization',
      name: 'OnlineLoans.org',
      url: 'https://www.onlineloans.org',
    },
    category: 'Construction Loan',
    feesAndCommissionsSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'USD',
      description: 'OnlineLoans.org may earn a commission from partner offers.',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.onlineloans.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Business Loans',
        item: 'https://www.onlineloans.org/business-loan',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Construction Business Loans Guide',
        item: 'https://www.onlineloans.org/business-loan/construction-funding',
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
        id="financial-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section id="construction-funding" className={cls.section}>
      <div className={cls.containerContent}>
        <div>
          <h3 className={classNames(cls.blockTitle, {}, [cls.loanTitle])}>
            Construction Business Loans Guide
          </h3>

          <div className={cls.loanInfo}>
            <p>
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
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
              6 min read
            </p>
          </div>
        </div>
        <div className={cls.loanContent}>
          <div className={cls.loanAuthorWrapperMobile}>
            <p className={cls.loanAuthorBy}>Written by</p>
            <div className={cls.loanAuthor}>
              <Image
                src="/images/article/article_author.png"
                alt="Michael Chen"
                width={48}
                height={48}
                className={cls.loanAuthorImg}
              />
              <div className={cls.loanAuthorName}>
                <p>Michael Chen</p>
                <p>Business Finance Writer</p>
              </div>
            </div>
            <p className={cls.loanAuthorAbout}>
              Michael is a finance writer specializing in construction and small business funding with
              over 8 years of experience covering lending and financial services.
            </p>
          </div>
          <div className={cls.loanLeftPart}>
            <div className={cls.loanShare}>
              <p className={cls.loanShareTitle}>Follow us</p>
              <div className={cls.loanShareImages}>
                <button onClick={() => handleShare('link')} aria-label="Copy link">
                  <Image
                    src="/images/article/share_link.svg"
                    alt="Copy link"
                    width={24}
                    height={24}
                    className={cls.loanShareImg}
                  />
                </button>
                <button onClick={() => handleShare('facebook')} aria-label="Facebook">
                  <Image
                    src="/images/article/share_fb.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className={cls.loanShareImg}
                  />
                </button>
                <button onClick={() => handleShare('twitter')} aria-label="X (Twitter)">
                  <Image
                    src="/images/article/share_twitter.svg"
                    alt="X (Twitter)"
                    width={24}
                    height={24}
                    className={cls.loanShareImg}
                  />
                </button>
                <button onClick={() => handleShare('linkedin')} aria-label="LinkedIn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cls.loanShareImg}
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={cls.loanApplyLinks}>
              <p className={cls.loanShareTitle}>Get Approved for Up to $10 Million — Apply Now</p>
              <div className={cls.stateLinks}>
                <AppLink
                  href="/business-loan/construction-funding/florida/index.html"
                  className={cls.stateLink}
                >
                  Florida
                </AppLink>
                <AppLink
                  href="/business-loan/construction-funding/new-york/index.html"
                  className={cls.stateLink}
                >
                  New York
                </AppLink>
                <AppLink
                  href="/business-loan/construction-funding/texas/index.html"
                  className={cls.stateLink}
                >
                  Texas
                </AppLink>
                <AppLink href="/business-loan/apply" className={cls.stateLink}>
                  All Other States
                </AppLink>
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
              <h4 className={cls.loanArticleTitle}>What is construction funding?</h4>
              <p className={cls.loanArticleTxt}>
                Construction funding is{' '}
                <strong>
                  specialized financing designed specifically for construction companies, contractors,
                  and building professionals.
                </strong>{' '}
                These funding solutions help construction businesses access capital quickly to purchase
                equipment, cover payroll, finance projects, manage cash flow, and grow their operations.
                <br />
                <br />
                Construction funding differs from traditional business loans because lenders
                understand the unique challenges of the construction industry, including project-based
                revenue, seasonal fluctuations, material costs, equipment needs, and payment delays
                from clients.
                <strong>
                  Funding amounts typically range from $10,000 to $5,000,000, with approval and
                  funding often available within 24-72 hours.
                </strong>
                <br />
                <br />
                Construction funding can be used for a variety of purposes, including:
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
                  Equipment purchases (excavators, bulldozers, cranes, trucks)
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Working capital for payroll and daily operations
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Material and supply purchases
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Project financing and progress payments
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Bonding and insurance requirements
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Business expansion and new location setup
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Emergency repairs and unexpected expenses
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                One of the key advantages of construction funding is{' '}
                <strong>the speed of approval and funding.</strong> Many lenders can approve
                applications within hours and deposit funds within 24-72 hours, which is crucial for
                construction companies that need capital quickly to start projects, purchase materials,
                or cover payroll. This fast turnaround time makes construction funding ideal for
                businesses that can&apos;t wait weeks for traditional bank loan approval.
              </p>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[1] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Types of construction loans</h4>
              <p className={cls.loanArticleTxt}>
                There are several types of construction funding options available, each designed for
                different needs and circumstances:
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
                    <strong>Equipment Financing: </strong>
                    This type of funding is specifically for purchasing construction equipment like
                    excavators, bulldozers, cranes, trucks, and tools. The equipment itself serves as
                    collateral, which often means lower interest rates and easier approval. Terms
                    typically range from 2-7 years, matching the useful life of the equipment.
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
                    <strong>Working Capital Loans:</strong> These are short-term loans designed to
                    cover daily operational expenses like payroll, rent, utilities, and materials.
                    Working capital loans typically have terms of 3-24 months and are ideal for
                    managing cash flow between projects or covering expenses while waiting for client
                    payments.
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
                    <strong>Invoice Financing:</strong> Also known as accounts receivable financing,
                    this allows you to get immediate cash by borrowing against unpaid invoices. This
                    is ideal for construction companies that have completed work but are waiting for
                    payment, helping bridge the gap between project completion and payment.
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
                    <strong>Term Loans:</strong> Traditional term loans provide a lump sum that you
                    repay over a fixed period (typically 1-5 years) with fixed monthly payments.
                    These are best for larger investments like equipment purchases, business
                    expansion, or major capital improvements. Term loans usually offer the lowest
                    interest rates but may require stronger credit and more documentation.
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
                    <strong>Business Lines of Credit:</strong> A line of credit gives you access to a
                    revolving credit limit that you can draw from as needed. You only pay interest on
                    the amount you use, making it ideal for managing seasonal cash flow, covering
                    unexpected expenses, or financing multiple projects simultaneously.
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
                    <strong>SBA Construction Loans:</strong> The Small Business Administration offers
                    loan programs for construction companies, including the SBA 7(a) and SBA 504
                    loans. These typically offer lower interest rates and longer terms, but require
                    more documentation and have stricter qualification requirements. SBA loans are
                    ideal for established construction companies with strong financials.
                  </div>
                </li>
              </ul>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[2] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Why construction companies need funding</h4>
              <p className={cls.loanArticleTxt}>
                Construction companies face unique financial challenges that make access to capital
                essential for survival and growth. Understanding these challenges helps explain why
                construction funding is so important:
                <br />
                <br />
                <strong>Project-Based Cash Flow:</strong> Construction companies often experience
                irregular cash flow due to the project-based nature of their business. You may have
                periods of high revenue followed by gaps between projects. Construction funding helps
                bridge these gaps, ensuring you can cover payroll, rent, and other fixed costs during
                slow periods.
                <br />
                <br />
                <strong>Payment Delays:</strong> Construction projects often involve payment delays,
                with clients paying in stages or upon completion. You may complete work weeks or
                months before receiving payment, creating cash flow challenges. Invoice financing and
                working capital loans help you maintain operations while waiting for client payments.
                <br />
                <br />
                <strong>Equipment Costs:</strong> Construction equipment is expensive and essential
                for operations. When equipment breaks down or you need to upgrade, it can cost tens
                or hundreds of thousands of dollars. Equipment financing allows you to quickly purchase
                or replace equipment without depleting your cash reserves.
                <br />
                <br />
                <strong>Material Costs:</strong> Construction materials can be expensive, and you
                often need to purchase them upfront before starting a project. Construction funding
                helps you purchase materials in bulk, often at better prices, and start projects
                without waiting for client payments.
                <br />
                <br />
                <strong>Seasonal Fluctuations:</strong> Many construction companies experience
                seasonal variations in work, with busier periods in spring and summer and slower
                periods in winter. Construction funding helps you maintain operations and cover fixed
                costs during slow seasons.
                <br />
                <br />
                <strong>Growth Opportunities:</strong> When a large project opportunity arises or you
                want to expand your business, you need capital quickly. Construction funding can help
                you seize growth opportunities, take on larger projects, and expand your operations.
              </p>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[3] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>How to get construction funding</h4>
              <p className={cls.loanArticleTxt}>
                Getting construction funding is typically faster and more accessible than traditional
                bank loans, but it still requires preparation and understanding of the process. Your
                eligibility depends on several factors that lenders evaluate.
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
                  <strong>
                    The most important factor for construction funding is your business revenue and
                    project history.
                  </strong>
                  <br />
                  Most lenders require a minimum monthly revenue (often $15,000-$25,000) and prefer
                  construction companies that have been in business for at least 6-12 months with a
                  track record of completed projects. However, some lenders work with newer
                  construction companies if you have strong personal credit, industry experience, or
                  signed contracts. Your credit score, time in business, cash flow, and project
                  pipeline all play roles in determining your eligibility and loan terms.
                </p>
              </div>
              <p className={cls.loanArticleTxt}>
                <strong>Credit Score Requirements:</strong> Construction funding is more accessible
                than traditional loans when it comes to credit scores. While traditional banks may
                require scores of 680 or higher, many construction lenders work with scores as low as
                550. However,{' '}
                <strong>
                  higher credit scores typically result in better interest rates and more favorable
                  terms.
                </strong>{' '}
                If your credit score is lower, you may still qualify, but you might pay higher rates
                or need to provide additional documentation.
                <br />
                <br />
                <strong>Revenue and Cash Flow:</strong> Lenders want to see consistent revenue that
                demonstrates your construction company can generate enough income to repay the loan.
                They typically review 3-6 months of bank statements to verify your revenue and assess
                your cash flow patterns. Construction companies with steady, growing revenue and a
                strong project pipeline are more likely to qualify for better terms.
                <br />
                <br />
                <strong>Time in Business:</strong> Most construction lenders prefer businesses that
                have been operating for at least 6-12 months, as this demonstrates stability and
                reduces risk. However, some lenders specialize in startup construction funding if you
                have strong personal credit, industry experience, or signed contracts for upcoming
                projects.
                <br />
                <br />
                <strong>Project History and Contracts:</strong> Lenders may review your project
                history, including completed projects, current contracts, and your project pipeline.
                Having signed contracts for upcoming work can strengthen your application and help you
                secure better terms.
              </p>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[4] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>How to apply for construction loans</h4>
              <p className={cls.loanArticleTxt}>
                Applying for construction funding is straightforward, especially when you work with
                online platforms that connect you with multiple lenders. Here&apos;s a step-by-step
                guide to the application process:
              </p>
              <p className={cls.loanArticleTitleNumber}>1. Prepare your documentation</p>
              <p className={cls.loanArticleTxt}>
                Before applying, gather the necessary documents to speed up the process. Most lenders
                will request:
                <br />
                <br />
                • Business bank statements (3-6 months)
                <br />
                • Business tax returns (1-2 years)
                <br />
                • Personal tax returns (if required)
                <br />
                • Business license and contractor&apos;s license
                <br />
                • Profit and loss statements
                <br />
                • Balance sheets
                <br />
                • Current contracts or project pipeline
                <br />
                • Business plan (for newer companies or larger loans)
                <br />
                <br />
                Having these documents ready will help you complete applications quickly and avoid
                delays.
              </p>
              <p className={cls.loanArticleTitleNumber}>2. Compare lenders and prequalify</p>
              <p className={cls.loanArticleTxt}>
                Don&apos;t apply with just one lender. Use online platforms like OnlineLoans.org to
                compare multiple construction funding options. Many lenders offer prequalification
                with just a soft credit check, which won&apos;t affect your credit score. This
                allows you to see estimated rates and terms before committing to a full application.
                <br />
                <br />
                Compare factors like interest rates, fees, repayment terms, funding speed, and
                customer service. Look for lenders that specialize in construction funding, as they
                understand your industry better and may offer more favorable terms.
              </p>
              <p className={cls.loanArticleTitleNumber}>3. Submit your application</p>
              <p className={cls.loanArticleTxt}>
                Once you&apos;ve chosen a lender, complete the full application. This typically takes
                15-30 minutes and involves providing basic business information, financial details, and
                uploading your documentation. Many lenders have streamlined online applications that
                make this process quick and easy.
                <br />
                <br />
                <strong>
                  Be honest and accurate in your application, as lenders will verify the information
                  you provide.
                </strong>{' '}
                Inaccurate information can delay approval or result in denial.
              </p>
              <p className={cls.loanArticleTitleNumber}>4. Review and accept your offer</p>
              <p className={cls.loanArticleTxt}>
                After reviewing your application, lenders will make an offer with specific terms,
                including the loan amount, interest rate, fees, and repayment schedule.{' '}
                <strong>
                  Review the offer carefully, paying attention to the APR (annual percentage rate),
                  which includes all costs.
                </strong>{' '}
                Compare it to other offers you&apos;ve received to ensure you&apos;re getting the
                best deal.
                <br />
                <br />
                Once you accept an offer, the lender will finalize the loan agreement. Read the
                terms carefully, especially regarding prepayment penalties, late fees, and default
                conditions. If you have questions, ask the lender before signing.
              </p>
              <p className={cls.loanArticleTitleNumber}>5. Receive your funds</p>
              <p className={cls.loanArticleTxt}>
                Most construction lenders can deposit funds within 24-72 hours of approval, and some
                offer same-day funding. The funds are typically deposited directly into your business
                bank account via ACH transfer. Once received, you can use the funds immediately for
                any business purpose.
                <br />
                <br />
                You&apos;ll typically start making payments within 30 days of receiving the funds. Set
                up autopay if available to ensure you never miss a payment, which protects your credit
                and maintains a good relationship with your lender.
              </p>
            </article>

            <div className={cls.loanAction}>
              <AppLink href="/business-loan/construction-funding/florida/index.html">
                <Button variant="primary" onClick={() => {}} className={cls.loanActionBtn}>
                  Get construction funding offers from multiple lenders now!
                </Button>
              </AppLink>
            </div>

            <article
              ref={(el) => {
                articlesRef.current[5] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Choosing the best construction lender</h4>
              <p className={cls.loanArticleTxt}>
                Selecting the right lender is crucial for getting the best construction funding terms
                and ensuring a positive experience throughout the loan term. Here are key factors to
                consider:
                <br />
                <br />
                <strong>To find the best construction lender, consider the following:</strong>
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
                    <strong>Industry Experience:</strong> Choose lenders that specialize in or have
                    extensive experience with construction funding. They understand your
                    industry&apos;s unique challenges, project-based revenue, and cash flow needs,
                    which often results in more favorable terms and better customer service.
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
                    <strong>Transparency and Fees: </strong>
                    Look for lenders that are transparent about all costs, including interest rates,
                    origination fees, processing fees, and any other charges. The best lenders clearly
                    explain the total cost of borrowing (APR) upfront. Avoid lenders with hidden fees
                    or unclear terms.
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
                    <strong>Funding Speed: </strong>
                    For construction companies, speed is often critical. Look for lenders that can
                    approve and fund loans quickly—ideally within 24-72 hours. Some lenders offer
                    same-day funding for qualified applicants, which can be essential for starting
                    projects or covering urgent expenses.
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
                    <strong>Flexible Repayment Terms: </strong>
                    Construction companies benefit from lenders that offer flexible repayment options,
                    such as payments aligned with project completion or the ability to adjust payments
                    during slow periods. Some lenders also offer prepayment options without penalties.
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
                    <strong>Customer Reviews and Reputation: </strong>
                    Research potential lenders by reading customer reviews on third-party sites like
                    Google, TrustPilot, and the Better Business Bureau. Look for lenders with
                    consistently positive reviews and high ratings. Avoid lenders with numerous
                    complaints or poor customer service ratings.
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
                    <strong>Loan Amounts and Terms: </strong>
                    Ensure the lender offers loan amounts that meet your needs and repayment terms
                    that fit your cash flow. Some lenders specialize in smaller loans
                    ($10,000-$100,000) while others focus on larger amounts ($500,000+). Match the
                    lender&apos;s specialty to your funding needs.
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                <strong>Explore Construction Funding by State:</strong> Construction funding options
                and requirements can vary by location. Explore our state-specific guides to find the
                best funding solutions for construction companies in your area:
              </p>
              <div className={cls.stateLinks}>
                <AppLink
                  href="/business-loan/construction-funding/florida/index.html"
                  className={cls.stateLink}
                >
                  Construction Funding in Florida →
                </AppLink>
                <AppLink
                  href="/business-loan/construction-funding/new-york/index.html"
                  className={cls.stateLink}
                >
                  Construction Funding in New York →
                </AppLink>
                <AppLink
                  href="/business-loan/construction-funding/texas/index.html"
                  className={cls.stateLink}
                >
                  Construction Funding in Texas →
                </AppLink>
              </div>
            </article>
          </div>

          <div className={cls.loanRightPart}>
            <div className={cls.loanAuthorWrapper}>
              <p className={cls.loanAuthorBy}>Written by</p>
              <div className={cls.loanAuthor}>
                <Image
                  src="/images/article/article_author.png"
                  alt="Financial Expert"
                  width={48}
                  height={48}
                  className={cls.loanAuthorImg}
                />
                <div className={cls.loanAuthorName}>
                  <p>Financial Expert</p>
                  <p>Construction Funding Specialist</p>
                </div>
              </div>
              <p className={cls.loanAuthorAbout}>
                Expert in construction financing and business loans with over 10 years of experience
                helping construction companies access capital for growth and operations.
              </p>
            </div>

            <div className={cls.loanShareMobile}>
              <p className={cls.loanShareTitle}>Follow us</p>
              <div className={cls.loanShareImages}>
                <button onClick={() => handleShare('link')} aria-label="Copy link">
                  <Image
                    src="/images/article/share_link.svg"
                    alt="Copy link"
                    width={24}
                    height={24}
                    className={cls.loanShareImg}
                  />
                </button>
                <button onClick={() => handleShare('facebook')} aria-label="Facebook">
                  <Image
                    src="/images/article/share_fb.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className={cls.loanShareImg}
                  />
                </button>
                <button onClick={() => handleShare('twitter')} aria-label="X (Twitter)">
                  <Image
                    src="/images/article/share_twitter.svg"
                    alt="X (Twitter)"
                    width={24}
                    height={24}
                    className={cls.loanShareImg}
                  />
                </button>
                <button onClick={() => handleShare('linkedin')} aria-label="LinkedIn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={cls.loanShareImg}
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Apply Now Banner */}
      <div className={cls.stickyBanner}>
        <div className={cls.stickyBannerContent}>
          <p className={cls.stickyBannerText}>Ready to get started?</p>
          <AppLink href="/business-loan/apply" className={cls.stickyBannerLink}>
            <Button variant="primary" className={cls.stickyBannerButton}>
              Apply Now
            </Button>
          </AppLink>
        </div>
      </div>
    </section>
    </>
  );
}


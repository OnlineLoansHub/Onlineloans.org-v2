'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/lib';
import { Button } from '@/components/ui/Button/Button';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './Article.module.scss';

export default function RestaurantFundingPage() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const tableOfContents = [
    'What is restaurant funding?',
    'Types of restaurant loans',
    'Why restaurants need funding',
    'How to get restaurant funding',
    'How to apply for restaurant loans',
    'Choosing the best restaurant lender',
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
      case 'instagram':
        window.open('https://www.instagram.com', '_blank', 'noopener,noreferrer');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com', '_blank', 'noopener,noreferrer');
        break;
      case 'telegram':
        window.open('https://t.me/onlineloans_org', '_blank', 'noopener,noreferrer');
        break;
      case 'slack':
        window.open(
          'https://join.slack.com/t/onlineloansorg/shared_invite/zt-3jjtcgy6t-7p1rJWNhZ2tXJjx2aOZDlA',
          '_blank',
          'noopener,noreferrer'
        );
        break;
      default:
        break;
    }
  };

  return (
    <section id="restaurant-funding" className={cls.section}>
      <div className={cls.containerContent}>
        <div>
          <h3 className={classNames(cls.blockTitle, {}, [cls.loanTitle])}>
            Restaurant Funding Guide
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
              Michael is a finance writer specializing in restaurant and small business funding with
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
                  href="/business-loan/restaurant-funding/florida/index.html"
                  className={cls.stateLink}
                >
                  Florida
                </AppLink>
                <AppLink
                  href="/business-loan/restaurant-funding/new-york/index.html"
                  className={cls.stateLink}
                >
                  New York
                </AppLink>
                <AppLink
                  href="/business-loan/restaurant-funding/texas/index.html"
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
              <h4 className={cls.loanArticleTitle}>What is restaurant funding?</h4>
              <p className={cls.loanArticleTxt}>
                Restaurant funding is{' '}
                <strong>
                  specialized financing designed specifically for restaurants, cafes, food trucks,
                  and food service businesses.
                </strong>{' '}
                These funding solutions help restaurant owners access capital quickly to cover
                operational expenses, purchase equipment, expand their business, or manage cash flow
                during slow periods.
                <br />
                <br />
                Restaurant funding differs from traditional business loans because lenders
                understand the unique challenges of the restaurant industry, including seasonal
                fluctuations, high employee turnover, perishable inventory, and the need for
                specialized equipment.
                <strong>
                  Funding amounts typically range from $5,000 to $500,000, with approval and funding
                  often available within 24-48 hours.
                </strong>
                <br />
                <br />
                Restaurant funding can be used for a variety of purposes, including:
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
                  Working capital for daily operations and payroll
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Equipment purchases (ovens, refrigerators, POS systems)
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Inventory and supplies
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Restaurant renovations and remodeling
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Expansion to new locations
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Marketing and advertising campaigns
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
                One of the key advantages of restaurant funding is{' '}
                <strong>the speed of approval and funding.</strong> Many lenders can approve
                applications within hours and deposit funds within 24-48 hours, which is crucial for
                restaurants that need capital quickly to cover payroll, purchase inventory, or
                handle emergencies. This fast turnaround time makes restaurant funding ideal for
                businesses that can&apos;t wait weeks for traditional bank loan approval.
              </p>
              <Image
                src="/images/article/image-chef-kitchen.jpg"
                alt="Chef working in a restaurant kitchen"
                width={600}
                height={400}
                className={cls.articleImage}
              />
              <p className={cls.articleImageCaption}>
                <strong>Bella Vista Restaurant</strong> - Miami, Florida
              </p>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[1] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Types of restaurant loans</h4>
              <p className={cls.loanArticleTxt}>
                There are several types of restaurant funding options available, each designed for
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
                    <strong>Working Capital Loans: </strong>
                    These are short-term loans designed to cover daily operational expenses like
                    payroll, rent, utilities, and inventory. Working capital loans typically have
                    terms of 3-24 months and are ideal for managing cash flow during slow seasons or
                    covering unexpected expenses. They&apos;re often unsecured and can be approved
                    quickly based on your restaurant&apos;s revenue.
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
                    <strong>Equipment Financing:</strong> This type of funding is specifically for
                    purchasing restaurant equipment like commercial ovens, refrigerators,
                    dishwashers, POS systems, and kitchen appliances. The equipment itself serves as
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
                    <strong>Merchant Cash Advances (MCAs):</strong> MCAs provide upfront capital in
                    exchange for a percentage of your future credit card sales. They&apos;re
                    extremely fast to obtain (often same-day funding) and don&apos;t require
                    collateral, but they typically have higher costs than traditional loans. MCAs
                    are repaid automatically through a percentage of daily sales, making them
                    flexible during slow periods.
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
                    These are best for larger investments like expansion, major renovations, or
                    purchasing a restaurant. Term loans usually offer the lowest interest rates but
                    may require stronger credit and more documentation.
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
                    <strong>Business Lines of Credit:</strong> A line of credit gives you access to
                    a revolving credit limit that you can draw from as needed. You only pay interest
                    on the amount you use, making it ideal for managing seasonal cash flow or
                    covering unexpected expenses. Lines of credit are flexible and can be used
                    repeatedly as you pay down the balance.
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
                    <strong>SBA Restaurant Loans:</strong> The Small Business Administration offers
                    loan programs specifically for restaurants, including the SBA 7(a) and SBA 504
                    loans. These typically offer lower interest rates and longer terms, but require
                    more documentation and have stricter qualification requirements. SBA loans are
                    ideal for established restaurants with strong financials.
                  </div>
                </li>
              </ul>
              <Image
                src="/images/article/hero-image.jpg"
                alt="Restaurant business funding solutions"
                width={600}
                height={400}
                className={cls.articleImage}
              />
            </article>

            <article
              ref={(el) => {
                articlesRef.current[2] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Why restaurants need funding</h4>
              <p className={cls.loanArticleTxt}>
                Restaurants face unique financial challenges that make access to capital essential
                for survival and growth. Understanding these challenges helps explain why restaurant
                funding is so important:
                <br />
                <br />
                <strong>Seasonal Cash Flow Fluctuations:</strong> Many restaurants experience
                significant seasonal variations in revenue. A beachside restaurant might thrive in
                summer but struggle in winter, while a restaurant near a college campus may see
                revenue drop during breaks. Restaurant funding helps bridge these gaps, ensuring you
                can cover payroll, rent, and other fixed costs during slow periods.
                <br />
                <br />
                <strong>High Operating Costs:</strong> Restaurants have numerous fixed costs that
                must be paid regardless of revenue: rent, utilities, insurance, and payroll. Even
                during slow weeks, these expenses continue. Restaurant funding provides the working
                capital needed to maintain operations during challenging times.
                <br />
                <br />
                <strong>Equipment Breakdowns:</strong> Restaurant equipment is used constantly and
                subject to wear and tear. When a commercial refrigerator, oven, or dishwasher breaks
                down, it can shut down operations and cost thousands to repair or replace. Equipment
                financing allows you to quickly replace or upgrade equipment without depleting your
                cash reserves.
                <br />
                <br />
                <strong>Expansion Opportunities:</strong> When a prime location becomes available or
                you want to open a second location, you need capital quickly. Restaurant funding can
                help you seize growth opportunities before competitors do, allowing you to expand
                your business and increase revenue.
                <br />
                <br />
                <strong>Inventory Management:</strong> Restaurants need to maintain inventory of
                fresh ingredients, which can be expensive. During peak seasons or before major
                holidays, you may need to stock up on inventory, requiring significant upfront
                capital. Restaurant funding helps you purchase inventory in bulk, often at better
                prices.
                <br />
                <br />
                <strong>Marketing and Customer Acquisition:</strong> In competitive markets,
                effective marketing is essential for attracting new customers and retaining existing
                ones. Restaurant funding can finance marketing campaigns, social media advertising,
                and promotional events that drive traffic and increase revenue.
              </p>
              <Image
                src="/images/article/article_home.png"
                alt="Restaurant business growth and expansion"
                width={600}
                height={400}
                className={cls.articleImage}
              />
            </article>

            <article
              ref={(el) => {
                articlesRef.current[3] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>How to get restaurant funding</h4>
              <p className={cls.loanArticleTxt}>
                Getting restaurant funding is typically faster and more accessible than traditional
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
                    The most important factor for restaurant funding is your monthly revenue.
                  </strong>
                  <br />
                  Most lenders require a minimum monthly revenue (often $10,000-$15,000) and prefer
                  restaurants that have been in business for at least 6 months. However, some
                  lenders work with newer restaurants if you have strong personal credit or a solid
                  business plan. Your credit score, time in business, and cash flow all play roles
                  in determining your eligibility and loan terms.
                </p>
              </div>
              <p className={cls.loanArticleTxt}>
                <strong>Credit Score Requirements:</strong> Restaurant funding is more accessible
                than traditional loans when it comes to credit scores. While traditional banks may
                require scores of 680 or higher, many restaurant lenders work with scores as low as
                500. However,{' '}
                <strong>
                  higher credit scores typically result in better interest rates and more favorable
                  terms.
                </strong>{' '}
                If your credit score is lower, you may still qualify, but you might pay higher rates
                or need to provide additional documentation.
                <br />
                <br />
                <strong>Revenue and Cash Flow:</strong> Lenders want to see consistent revenue that
                demonstrates your restaurant can generate enough income to repay the loan. They
                typically review 3-6 months of bank statements to verify your revenue and assess
                your cash flow patterns. Restaurants with steady, growing revenue are more likely to
                qualify for better terms.
                <br />
                <br />
                <strong>Time in Business:</strong> Most restaurant lenders prefer businesses that
                have been operating for at least 6-12 months, as this demonstrates stability and
                reduces risk. However, some lenders specialize in startup restaurant funding if you
                have strong personal credit, industry experience, or a detailed business plan.
                <br />
                <br />
                <strong>Debt-to-Income Ratio:</strong> Lenders evaluate your existing debt
                obligations relative to your revenue. A lower debt-to-income ratio indicates you
                have more capacity to take on additional debt and make loan payments. Paying down
                existing debts before applying can improve your chances of approval and help you
                secure better terms.
              </p>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[4] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>How to apply for restaurant loans</h4>
              <p className={cls.loanArticleTxt}>
                Applying for restaurant funding is straightforward, especially when you work with
                online platforms that connect you with multiple lenders. Here&apos;s a step-by-step
                guide to the application process:
              </p>
              <p className={cls.loanArticleTitleNumber}>1. Prepare your documentation</p>
              <p className={cls.loanArticleTxt}>
                Before applying, gather the necessary documents to speed up the process. Most
                lenders will request:
                <br />
                <br />
                • Business bank statements (3-6 months)
                <br />
                • Business tax returns (1-2 years)
                <br />
                • Personal tax returns (if required)
                <br />
                • Business license and permits
                <br />
                • Profit and loss statements
                <br />
                • Balance sheets
                <br />
                • Business plan (for newer restaurants or larger loans)
                <br />
                <br />
                Having these documents ready will help you complete applications quickly and avoid
                delays.
              </p>
              <p className={cls.loanArticleTitleNumber}>2. Compare lenders and prequalify</p>
              <p className={cls.loanArticleTxt}>
                Don&apos;t apply with just one lender. Use online platforms like OnlineLoans.org to
                compare multiple restaurant funding options. Many lenders offer prequalification
                with just a soft credit check, which won&apos;t affect your credit score. This
                allows you to see estimated rates and terms before committing to a full application.
                <br />
                <br />
                Compare factors like interest rates, fees, repayment terms, funding speed, and
                customer service. Look for lenders that specialize in restaurant funding, as they
                understand your industry better and may offer more favorable terms.
              </p>
              <p className={cls.loanArticleTitleNumber}>3. Submit your application</p>
              <p className={cls.loanArticleTxt}>
                Once you&apos;ve chosen a lender, complete the full application. This typically
                takes 15-30 minutes and involves providing basic business information, financial
                details, and uploading your documentation. Many lenders have streamlined online
                applications that make this process quick and easy.
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
                Most restaurant lenders can deposit funds within 24-48 hours of approval, and some
                offer same-day funding. The funds are typically deposited directly into your
                business bank account via ACH transfer. Once received, you can use the funds
                immediately for any business purpose.
                <br />
                <br />
                You&apos;ll typically start making payments within 30 days of receiving the funds.
                Set up autopay if available to ensure you never miss a payment, which protects your
                credit and maintains a good relationship with your lender.
              </p>
            </article>

            <div className={cls.loanAction}>
              <AppLink href="/business-loan/restaurant-funding/florida/index.html">
                <Button variant="primary" onClick={() => {}} className={cls.loanActionBtn}>
                  Get restaurant funding offers from multiple lenders now!
                </Button>
              </AppLink>
            </div>

            <article
              ref={(el) => {
                articlesRef.current[5] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Choosing the best restaurant lender</h4>
              <p className={cls.loanArticleTxt}>
                Selecting the right lender is crucial for getting the best restaurant funding terms
                and ensuring a positive experience throughout the loan term. Here are key factors to
                consider:
                <br />
                <br />
                <strong>To find the best restaurant lender, consider the following:</strong>
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
                    extensive experience with restaurant funding. They understand your
                    industry&apos;s unique challenges, seasonal patterns, and cash flow needs, which
                    often results in more favorable terms and better customer service.
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
                    origination fees, processing fees, and any other charges. The best lenders
                    clearly explain the total cost of borrowing (APR) upfront. Avoid lenders with
                    hidden fees or unclear terms.
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
                    For restaurants, speed is often critical. Look for lenders that can approve and
                    fund loans quickly—ideally within 24-48 hours. Some lenders offer same-day
                    funding for qualified applicants, which can be essential for covering urgent
                    expenses.
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
                    Restaurants benefit from lenders that offer flexible repayment options, such as
                    daily or weekly payments that align with cash flow, or the ability to adjust
                    payments during slow seasons. Some lenders also offer prepayment options without
                    penalties.
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
                    ($5,000-$50,000) while others focus on larger amounts ($100,000+). Match the
                    lender&apos;s specialty to your funding needs.
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                <strong>Explore Restaurant Funding by State:</strong> Restaurant funding options and
                requirements can vary by location. Explore our state-specific guides to find the
                best funding solutions for restaurants in your area:
              </p>
              <div className={cls.stateLinks}>
                <AppLink
                  href="/business-loan/restaurant-funding/florida/index.html"
                  className={cls.stateLink}
                >
                  Restaurant Funding in Florida →
                </AppLink>
                <AppLink
                  href="/business-loan/restaurant-funding/new-york/index.html"
                  className={cls.stateLink}
                >
                  Restaurant Funding in New York →
                </AppLink>
                <AppLink
                  href="/business-loan/restaurant-funding/texas/index.html"
                  className={cls.stateLink}
                >
                  Restaurant Funding in Texas →
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
                  <p>Restaurant Funding Specialist</p>
                </div>
              </div>
              <p className={cls.loanAuthorAbout}>
                Expert in restaurant financing and business loans with over 10 years of experience
                helping restaurant owners access capital for growth and operations.
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
    </section>
  );
}

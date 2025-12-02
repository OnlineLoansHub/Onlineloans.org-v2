'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/lib';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './Article.module.scss';

export default function ArticlePage() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [email, setEmail] = useState('');
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const tableOfContents = [
    'What is a personal loan?',
    'Types of personal loans',
    'When to get a personal loan',
    'How to get the best personal loans',
    'How to apply for a personal loan',
    'Choosing the best lender',
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
    const title = 'What is a personal loan?';

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
    // Handle form submission
    // TODO: Implement form submission logic
    setEmail('');
  };

  const handleContactButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleContactSubmit(e as unknown as React.FormEvent);
  };

  return (
    <section id="loan" className={cls.section}>
      <div className={cls.containerContent}>
        <div>
          <h3 className={classNames(cls.blockTitle, {}, [cls.loanTitle])}>
            What is a personal loan?
          </h3>

          <div className={cls.loanInfo}>
            <p>22 January 2025</p>
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
              10 min read
            </p>
          </div>
        </div>
        <div className={cls.loanContent}>
          <div className={cls.loanAuthorWrapperMobile}>
            <p className={cls.loanAuthorBy}>Written by</p>
            <div className={cls.loanAuthor}>
              <Image
                src="/images/article/article_author.png"
                alt="Jake Krasinsky"
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
              Sarah is a certified financial planner and personal finance writer with over 10 years of
              experience helping consumers make informed borrowing decisions. She specializes in debt
              management, credit optimization, and loan comparison strategies.
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
              <h4 className={cls.loanArticleTitle}>What is a personal loan?</h4>
              <p className={cls.loanArticleTxt}>
                A personal loan is a{' '}
                <strong>fixed-amount, unsecured loan that you repay in monthly installments</strong>{' '}
                over a predetermined period. Unlike secured loans (like mortgages or auto loans), personal
                loans don&apos;t require collateral, which means you don&apos;t risk losing your home,
                car, or other assets if you can&apos;t make payments.
                <br />
                <br />
                Lenders evaluate your creditworthiness based on your credit score, income, employment
                history, and debt-to-income ratio. This assessment determines your eligibility, loan
                amount, interest rate, and repayment terms. The better your financial profile, the more
                favorable terms you&apos;ll receive.
                <br />
                <br />
                <strong>Typical personal loan features:</strong>
                <br />
                • Loan amounts: $1,000 to $100,000 (some lenders offer up to $200,000)
                <br />
                • Interest rates: 6% to 36% APR (Annual Percentage Rate)
                <br />
                • Repayment terms: 12 to 84 months (1 to 7 years)
                <br />
                • Fixed monthly payments: Your payment amount stays the same throughout the loan term
                <br />
                • Fast funding: Funds typically arrive within 1-7 business days after approval
                <br />
                <br />
                Personal loans offer{' '}
                <strong>unmatched flexibility compared to other financing options</strong>. You can use
                the funds for virtually any legitimate purpose, including:
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
                    <strong>Debt consolidation:</strong> Combine multiple high-interest debts (credit
                    cards, medical bills, etc.) into one lower-interest loan with a single monthly
                    payment. This can save thousands in interest and simplify your finances.
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
                    <strong>Home improvement:</strong> Finance renovations, repairs, or upgrades that
                    can increase your home&apos;s value. Unlike home equity loans, you don&apos;t need
                    to use your home as collateral.
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
                    <strong>Medical expenses:</strong> Cover unexpected medical bills, elective
                    procedures, or dental work that insurance doesn&apos;t fully cover.
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
                    <strong>Major purchases:</strong> Finance large expenses like appliances,
                    furniture, or electronics without using high-interest credit cards.
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
                    <strong>Emergency expenses:</strong> Cover unexpected costs like car repairs, home
                    repairs, or funeral expenses when you don&apos;t have sufficient savings.
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
                    <strong>Life events:</strong> Finance weddings, vacations, moving expenses, or
                    other significant life milestones.
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                <strong>Key advantages of personal loans:</strong>
                <br />
                • <strong>Fast approval and funding:</strong> Many lenders can approve and fund loans
                within 24-48 hours, making them ideal for urgent financial needs
                <br />
                • <strong>Predictable payments:</strong> Fixed interest rates mean your monthly payment
                stays the same, making budgeting easier
                <br />
                • <strong>No collateral required:</strong> Your assets aren&apos;t at risk if you
                can&apos;t repay
                <br />
                • <strong>Flexible repayment terms:</strong> Choose a term length that fits your budget
                and financial goals
                <br />
                • <strong>Potential credit building:</strong> Making on-time payments can improve your
                credit score over time
              </p>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[1] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Types of personal loans</h4>
              <p className={cls.loanArticleTxt}>
                Understanding the different types of personal loans helps you choose the right option
                for your financial situation. Here are the main categories:
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
                    <strong>Unsecured Personal Loans:</strong> These are the most common type of
                    personal loans. They don&apos;t require collateral, making them accessible to
                    borrowers who don&apos;t want to risk their assets. Interest rates typically
                    range from 6% to 36% APR, depending on your creditworthiness. Lenders rely
                    heavily on your credit score, income, and debt-to-income ratio for approval.
                    Best for: Borrowers with good to excellent credit (670+) who need funds quickly
                    without putting assets at risk.
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
                    <strong>Secured Personal Loans:</strong> These loans require collateral (like a
                    savings account, certificate of deposit, vehicle, or other valuable asset) to
                    secure the loan. Because the lender has collateral, they typically offer lower
                    interest rates (as low as 3% APR) and may approve borrowers with lower credit
                    scores. However, if you default, the lender can seize your collateral. Best for:
                    Borrowers with fair credit who have valuable assets and want lower interest
                    rates.
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
                    <strong>Cosigned Personal Loans:</strong> If your credit score or income
                    doesn&apos;t meet a lender&apos;s requirements, a cosigner (typically a family
                    member or close friend with good credit) can help you qualify. The cosigner
                    agrees to repay the loan if you default, which reduces the lender&apos;s risk.
                    This can help you secure better rates or get approved when you otherwise
                    wouldn&apos;t. Best for: Borrowers with limited credit history or lower credit
                    scores who have someone willing to cosign.
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
                    <strong>Fixed-Rate vs. Variable-Rate Loans:</strong> Fixed-rate loans maintain
                    the same interest rate throughout the loan term, providing predictable monthly
                    payments. Variable-rate loans have interest rates that fluctuate based on market
                    conditions (usually tied to the prime rate). While variable rates may start
                    lower, they can increase over time, making payments unpredictable. Most personal
                    loans are fixed-rate, which is generally recommended for budgeting purposes.
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
                    <strong>Debt Consolidation Loans:</strong> Specifically designed to combine
                    multiple debts into one loan with a single monthly payment. These loans often
                    offer lower interest rates than credit cards, potentially saving you money while
                    simplifying your finances. Many lenders offer special rates or terms for debt
                    consolidation purposes.
                  </div>
                </li>
              </ul>
              <Image
                src="/images/article/article_man.png"
                alt=""
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
              <h4 className={cls.loanArticleTitle}>When to get a personal loan</h4>
              <p className={cls.loanArticleTxt}>
                Personal loans can be a smart financial tool when used strategically. Here are the
                best scenarios for taking out a personal loan:
              </p>
              <p className={cls.loanArticleTxt}>
                <strong>1. Debt Consolidation (Most Common Use Case)</strong>
                <br />
                If you have multiple high-interest debts (especially credit cards with rates of
                20-30%+), a personal loan can save you significant money. For example, if you have
                $15,000 in credit card debt at 24% APR, consolidating into a personal loan at 12%
                APR could save you thousands in interest over the loan term. You&apos;ll also
                simplify your finances with one monthly payment instead of multiple.
                <br />
                <br />
                <strong>2. When It&apos;s the Most Cost-Effective Option</strong>
                <br />
                Compare personal loan rates with other financing options. If a personal loan offers
                a lower APR than credit cards, store financing, or payday loans, it&apos;s likely
                the better choice. Always calculate the total cost (principal + interest + fees)
                before deciding.
                <br />
                <br />
                <strong>3. Home Improvements That Add Value</strong>
                <br />
                Using a personal loan for home improvements can be smart if the project increases
                your home&apos;s value more than the loan costs. Kitchen remodels, bathroom
                renovations, and energy-efficient upgrades often provide excellent ROI. Unlike home
                equity loans, personal loans don&apos;t require using your home as collateral.
                <br />
                <br />
                <strong>4. Emergency Expenses</strong>
                <br />
                When unexpected expenses arise (medical bills, urgent car repairs, home repairs),
                and you don&apos;t have sufficient emergency savings, a personal loan can be
                preferable to high-interest credit cards or payday loans. However, only borrow what
                you absolutely need.
                <br />
                <br />
                <strong>5. When You Can Afford the Payments</strong>
                <br />
                Before taking out a personal loan, ensure the monthly payment fits comfortably in
                your budget. Financial experts recommend that your total debt payments (including
                the new loan) shouldn&apos;t exceed 36% of your gross monthly income. Use loan
                calculators to see how different loan amounts and terms affect your monthly payment.
                <br />
                <br />
                <strong>When NOT to get a personal loan:</strong>
                <br />
                • For discretionary spending you can save for instead
                <br />
                • If you&apos;re already struggling with debt payments
                <br />
                • For expenses that could be covered by savings
                <br />
                • If you have access to lower-cost financing options
                <br />
                • When the interest rate is higher than your current debts
              </p>
              <Image
                src="/images/article/article_home.png"
                alt=""
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
              <h4 className={cls.loanArticleTitle}>How to get the best personal loans</h4>
              <p className={cls.loanArticleTxt}>
                Securing the best personal loan terms requires preparation and strategy. The best
                loans combine low APRs, minimal fees, flexible terms, and excellent customer service.
                Here&apos;s how to position yourself for the best offers:
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
                    Your credit score is the single most important factor in securing favorable loan
                    terms.
                  </strong>
                  <br />
                  Lenders typically categorize borrowers: Excellent (720+), Good (690-719), Fair
                    (630-689), and Poor (below 630). Borrowers with excellent credit can secure rates
                    as low as 6-8% APR, while those with fair credit may see rates of 15-25% APR.
                    Improving your credit score by even 20-30 points can significantly reduce your
                    interest rate and save you hundreds or thousands over the loan term.
                </p>
              </div>
              <p className={cls.loanArticleTxt}>
                <strong>1. Improve Your Credit Score</strong>
                <br />
                • <strong>Check your credit reports:</strong> Request free reports from
                AnnualCreditReport.com from all three bureaus (Equifax, Experian, TransUnion).
                Review for errors and dispute any inaccuracies immediately.
                <br />
                • <strong>Pay bills on time:</strong> Payment history accounts for 35% of your
                credit score. Set up autopay to never miss a payment.
                <br />
                • <strong>Reduce credit utilization:</strong> Keep credit card balances below 30% of
                your credit limits (ideally below 10%).
                <br />
                • <strong>Avoid new credit inquiries:</strong> Too many hard inquiries in a short
                period can lower your score. Space out applications by at least 6 months.
                <br />
                <br />
                <strong>2. Lower Your Debt-to-Income (DTI) Ratio</strong>
                <br />
                Lenders prefer DTI ratios below 36%. Calculate yours by dividing total monthly debt
                payments by gross monthly income. To improve:
                <br />
                • Pay down existing debts, especially high-interest credit cards
                <br />
                • Increase your income through raises, side jobs, or freelance work
                <br />
                • Avoid taking on new debt before applying
                <br />
                <br />
                <strong>3. Build a Strong Financial Profile</strong>
                <br />
                • Maintain stable employment (lenders prefer 2+ years at the same job)
                <br />
                • Keep a healthy savings account balance
                <br />
                • Show consistent income through pay stubs and tax returns
                <br />
                • Have a good mix of credit types (credit cards, auto loans, etc.)
                <br />
                <br />
                <strong>4. Shop Around and Compare</strong>
                <br />
                Don&apos;t accept the first offer. Compare at least 3-5 lenders, including banks,
                credit unions, and online lenders. Use prequalification (soft credit checks) to see
                estimated rates without affecting your credit score. Compare:
                <br />
                • APR (not just interest rate - APR includes fees)
                <br />
                • Origination fees (typically 1-8% of loan amount)
                <br />
                • Prepayment penalties
                <br />
                • Late payment fees
                <br />
                • Loan terms and flexibility
              </p>
            </article>

            <article
              ref={(el) => {
                articlesRef.current[4] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>How to apply for a personal loan</h4>
              <p className={cls.loanArticleTxt}>
                The personal loan application process is straightforward, but being prepared can
                speed up approval and help you secure better terms. Follow these steps:
              </p>
              <p className={cls.loanArticleTitleNumber}>Step 1: Check Your Credit and Gather Documents</p>
              <p className={cls.loanArticleTxt}>
                Before applying, review your credit score and gather necessary documents:
                <br />
                <br />
                <strong>Required documents typically include:</strong>
                <br />
                • Government-issued ID (driver&apos;s license or passport)
                <br />
                • Proof of income (recent pay stubs, W-2s, tax returns, or bank statements)
                <br />
                • Proof of employment (employment verification letter or recent pay stubs)
                <br />
                • Bank statements (usually 2-3 months)
                <br />
                • Social Security number
                <br />
                • Proof of address (utility bill, lease agreement, or bank statement)
                <br />
                <br />
                Having these ready will streamline the application process and prevent delays.
              </p>
              <p className={cls.loanArticleTitleNumber}>Step 2: Prequalify with Multiple Lenders</p>
              <p className={cls.loanArticleTxt}>
                Prequalification is a crucial step that allows you to see estimated rates and terms
                without a hard credit inquiry (which can temporarily lower your score). Most lenders
                offer online prequalification that takes just a few minutes.
                <br />
                <br />
                <strong>What to compare during prequalification:</strong>
                <br />
                • Interest rate (APR)
                <br />
                • Loan amounts available
                <br />
                • Repayment terms (12, 24, 36, 48, 60+ months)
                <br />
                • Monthly payment estimates
                <br />
                • Origination fees
                <br />
                • Prepayment penalties
                <br />
                <br />
                Aim to prequalify with 3-5 lenders to ensure you&apos;re getting the best deal.
                Complete all prequalifications within a 14-45 day window to minimize the impact on
                your credit score (credit bureaus typically count multiple inquiries as one if done
                within this timeframe).
              </p>
              <p className={cls.loanArticleTitleNumber}>Step 3: Compare Offers and Choose a Lender</p>
              <p className={cls.loanArticleTxt}>
                Don&apos;t just look at the interest rate - consider the total cost of the loan:
                <br />
                <br />
                • <strong>Total interest paid:</strong> Calculate how much interest you&apos;ll pay
                over the life of the loan
                <br />
                • <strong>Origination fees:</strong> These are deducted from your loan amount, so a
                $10,000 loan with a 5% origination fee means you only receive $9,500
                <br />
                • <strong>Monthly payment:</strong> Ensure it fits comfortably in your budget
                <br />
                • <strong>Loan terms:</strong> Longer terms mean lower monthly payments but more
                interest paid overall
                <br />
                • <strong>Lender reputation:</strong> Check customer reviews and Better Business
                Bureau ratings
                <br />
                <br />
                Use online loan calculators to compare the true cost of different offers.
              </p>
              <p className={cls.loanArticleTitleNumber}>Step 4: Submit Your Formal Application</p>
              <p className={cls.loanArticleTxt}>
                Once you&apos;ve chosen a lender, complete the full application. This typically
                includes:
                <br />
                <br />
                • Personal information (name, address, date of birth, SSN)
                <br />
                • Employment and income details
                <br />
                • Financial information (existing debts, monthly expenses)
                <br />
                • Loan purpose
                <br />
                • Uploading required documents
                <br />
                <br />
                The application usually takes 15-30 minutes. After submitting, the lender will
                perform a hard credit check and review your application. Approval can take anywhere
                from a few minutes to several business days, depending on the lender.
              </p>
              <p className={cls.loanArticleTitleNumber}>Step 5: Review and Accept the Loan</p>
              <p className={cls.loanArticleTxt}>
                If approved, carefully review the loan agreement before accepting:
                <br />
                <br />
                • Verify the interest rate, loan amount, and term match what you were quoted
                <br />
                • Check all fees (origination, late payment, prepayment penalties)
                <br />
                • Understand the repayment schedule
                <br />
                • Confirm the monthly payment amount
                <br />
                • Review the lender&apos;s policies on payment methods, autopay, and early payoff
                <br />
                <br />
                Once you accept, the lender will typically deposit funds into your bank account
                within 1-7 business days. Some lenders offer same-day or next-day funding for
                qualified borrowers.
              </p>
              <p className={cls.loanArticleTitleNumber}>Step 6: Set Up Repayment</p>
              <p className={cls.loanArticleTxt}>
                Your first payment is typically due within 30 days of receiving funds. Set up
                autopay to ensure you never miss a payment, which can:
                <br />
                • Protect your credit score
                <br />
                • Help you qualify for interest rate discounts (many lenders offer 0.25-0.50% APR
                reduction for autopay)
                <br />
                • Provide peace of mind
                <br />
                <br />
                Consider making extra payments when possible to pay off the loan faster and save on
                interest, but first confirm your lender doesn&apos;t charge prepayment penalties.
              </p>
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
              <h4 className={cls.loanArticleTitle}>Choosing the best lender</h4>
              <p className={cls.loanArticleTxt}>
                Selecting the right lender is crucial - you&apos;ll be working with them for the
                entire loan term. While interest rates are important, consider these factors when
                choosing a lender:
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
                    <strong>Interest Rates and Fees:</strong> Compare APRs (not just interest rates)
                    across multiple lenders. The APR includes all fees, giving you the true cost of
                    borrowing. Look for lenders with low or no origination fees (typically 0-8% of
                    loan amount). Also check for prepayment penalties, late fees, and insufficient
                    funds fees. The best lenders are transparent about all costs upfront.
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
                    <strong>Loan Terms and Flexibility:</strong> Consider lenders that offer
                    flexible repayment terms (12-84 months) so you can choose what fits your budget.
                    Some lenders allow you to change your payment date, skip a payment (with
                    conditions), or modify your loan terms if your financial situation changes.
                    Check if the lender offers hardship programs for borrowers facing financial
                    difficulties.
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
                    <strong>Customer Service and Support:</strong> Research the lender&apos;s
                    customer service reputation. Check reviews on Trustpilot, Better Business
                    Bureau, Consumer Financial Protection Bureau, and Google. Look for lenders with
                    24/7 customer support, multiple contact methods (phone, email, chat), and
                    responsive service. Read reviews specifically about the loan servicing experience,
                    not just the application process.
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
                    <strong>Funding Speed:</strong> If you need funds quickly, prioritize lenders
                    that offer same-day or next-day funding. Online lenders typically fund faster
                    than traditional banks. However, don&apos;t sacrifice good terms for speed unless
                    absolutely necessary.
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
                    <strong>Credit Score Requirements:</strong> Different lenders cater to different
                    credit profiles. Some specialize in excellent credit (720+), while others work
                    with fair credit (580-669). Choose a lender whose requirements match your
                    credit profile to avoid unnecessary hard inquiries and rejections.
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
                    <strong>Additional Benefits:</strong> Some lenders offer perks like:
                    <br />
                    • Autopay discounts (0.25-0.50% APR reduction)
                    <br />
                    • Rate reduction for on-time payments
                    <br />
                    • Financial education resources
                    <br />
                    • Mobile app for easy account management
                    <br />
                    • Co-signer release options
                    <br />
                    These benefits can add value beyond just the interest rate.
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
                    <strong>Lender Type Considerations:</strong>
                    <br />
                    • <strong>Online lenders:</strong> Often offer competitive rates, fast funding,
                    and easy applications, but may have less personalized service
                    <br />
                    • <strong>Banks:</strong> May offer relationship discounts if you&apos;re an
                    existing customer, but often have stricter requirements and slower processes
                    <br />
                    • <strong>Credit unions:</strong> Typically offer lower rates to members, but
                    require membership and may have limited online services
                    <br />
                    • <strong>Peer-to-peer lenders:</strong> May offer competitive rates but can
                    have longer approval processes
                  </div>
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                <strong>Red Flags to Avoid:</strong>
                <br />
                • Lenders that guarantee approval regardless of credit
                <br />
                • Extremely high interest rates (above 36% APR)
                <br />
                • Pressure to make immediate decisions
                <br />
                • Unclear or hidden fees
                <br />
                • Poor customer reviews and ratings
                <br />
                • Requests for upfront fees before loan approval
                <br />
                <br />
                Remember: The best lender for you balances competitive rates, reasonable fees,
                excellent customer service, and terms that fit your financial situation. Take your
                time to research and compare before committing.
              </p>
            </article>
          </div>

          <div className={cls.loanRightPart}>
            <div className={cls.loanAuthorWrapper}>
              <p className={cls.loanAuthorBy}>Written by</p>
              <div className={cls.loanAuthor}>
                <Image
                  src="/images/article/article_author.png"
                  alt="Jake Krasinsky"
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
                Sarah is a certified financial planner and personal finance writer with over 10 years of
                experience helping consumers make informed borrowing decisions. She specializes in debt
                management, credit optimization, and loan comparison strategies.
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
  );
}


'use client';
/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/lib';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from '../what-is-a-personal-loan/Article.module.scss';

export default function CreditScore600GuidePage() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [email, setEmail] = useState('');
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const tableOfContents = [
    'What is a 600 Credit Score Personal Loan?',
    'Can You Get a Personal Loan with a 600 Credit Score?',
    'What to Expect: Rates, Terms, and Loan Amounts',
    'Top Lenders for a 600 Credit Score in 2026',
    'Step-by-Step: How to Apply',
    'How a 600 Credit Score Compares',
    'Alternatives to Personal Loans',
    'Frequently Asked Questions',
  ];

  useEffect(() => {
    let rafId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          const fromTop = window.scrollY + 100;
          let foundActive = false;
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
    const debounce = (func: () => void, wait: number) => {
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(), wait);
      };
    };
    const debouncedScroll = debounce(handleScroll, 20);
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeMenuItem]);

  const handleMenuItemClick = (index: number, title: string) => {
    const targetArticle = articlesRef.current.find((article) => {
      if (!article) return false;
      const titleElement = article.querySelector('h4');
      return titleElement?.textContent?.trim() === title;
    });
    if (targetArticle) {
      targetArticle.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveMenuItem(index);
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = 'How to Get a Personal Loan with a 600 Credit Score in 2026';
    switch (platform) {
      case 'link':
        navigator.clipboard.writeText(url);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
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

  return (
    <section id="loan" className={cls.section}>
      <div className={cls.containerContent}>
        {/* Article Header */}
        <div>
          <h1 className={classNames(cls.blockTitle, {}, [cls.loanTitle])}>
            How to Get a Personal Loan with a 600 Credit Score in 2026
          </h1>
          <div className={cls.loanInfo}>
            <p>May 12, 2026</p>
            <Image src="/images/article/dot_2.svg" alt="" width={5} height={5} className={cls.loanInfoDot} />
            <p>
              <Image src="/images/article/clock.svg" alt="" width={18} height={18} className={cls.loanInfoImg} />
              12 min read
            </p>
          </div>
        </div>

        <div className={cls.loanContent}>
          {/* Mobile Author Block */}
          <div className={cls.loanAuthorWrapperMobile}>
            <p className={cls.loanAuthorBy}>Written by</p>
            <div className={cls.loanAuthor}>
              <Image
                src="/images/article/article_author.png"
                alt="Sarah Martinez — Personal Finance Writer at OnlineLoans.org"
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

          {/* Left Sidebar */}
          <div className={cls.loanLeftPart}>
            <div className={cls.loanShare}>
              <p className={cls.loanShareTitle}>Share this</p>
              <div className={cls.loanShareImages}>
                <button onClick={() => handleShare('link')} aria-label="Copy link">
                  <Image src="/images/article/share_link.svg" alt="Copy link" width={24} height={24} className={cls.loanShareImg} />
                </button>
                <button onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
                  <Image src="/images/article/share_fb.svg" alt="Share on Facebook" width={24} height={24} className={cls.loanShareImg} />
                </button>
                <button onClick={() => handleShare('twitter')} aria-label="Share on Twitter / X">
                  <Image src="/images/article/share_twitter.svg" alt="Share on Twitter" width={24} height={24} className={cls.loanShareImg} />
                </button>
                <button onClick={() => handleShare('more')} aria-label="More sharing options">
                  <Image src="/images/article/share_dots.svg" alt="More sharing options" width={24} height={24} className={cls.loanShareImg} />
                </button>
              </div>
            </div>
            <div className={cls.loanAuthorWrapper}>
              <p className={cls.loanAuthorBy}>Written by</p>
              <div className={cls.loanAuthor}>
                <Image
                  src="/images/article/article_author.png"
                  alt="Sarah Martinez — Personal Finance Writer at OnlineLoans.org"
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
            <nav aria-label="Table of contents">
              <ul className={cls.loanMenu}>
                {tableOfContents.map((item, index) => (
                  <li
                    key={index}
                    ref={(el) => { menuItemsRef.current[index] = el; }}
                    className={classNames(cls.loanMenuItem, { [cls.loanMenuItemActive]: activeMenuItem === index })}
                    onClick={() => handleMenuItemClick(index, item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Article Content */}
          <div className={cls.loanCenterPart}>

            {/* Section 1 */}
            <article ref={(el) => { articlesRef.current[0] = el; }}>
              <h4>What is a 600 Credit Score Personal Loan?</h4>
              <Image
                src="/personal-loan/600-credit-score-guide/image-1.webp"
                alt="Person reviewing personal loan options on a laptop showing a 600 FICO credit score dashboard with loan offers and score factors"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }}
                priority
              />
              <p>
                A <strong>600 credit score personal loan</strong> is an unsecured installment loan available to borrowers
                with a &quot;Fair&quot; FICO score or VantageScore — typically defined as a score between 580 and 669.
                Borrowers in this fair credit range are not disqualified from personal loans, but they face higher
                interest rates (APRs) and stricter income verification requirements than borrowers with good or
                excellent credit (670+). According to FICO&apos;s scoring model, approximately 17% of U.S. consumers
                fall in the Fair credit range, making this a common borrowing tier.
              </p>
              <blockquote className={cls.loanQuote}>
                <p>
                  &quot;Only about 50% of Americans are considered prime credit based on their credit scores and
                  traditional credit reports... there is a whole another third of the country that would have been
                  able to pay you back, but you would erroneously disqualify.&quot;
                </p>
                <cite>— Dave Girouard, Co-founder and CEO of Upstart</cite>
              </blockquote>
            </article>

            {/* Section 2 */}
            <article ref={(el) => { articlesRef.current[1] = el; }}>
              <h4>Can You Get a Personal Loan with a 600 Credit Score?</h4>
              <Image
                src="/personal-loan/600-credit-score-guide/image-2.webp"
                alt="Credit score infographic showing a meter with 600 in the Fair range (580–669), surrounded by callouts for loan approval, interest rates, repayment terms, and lender partnership"
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '20px' }}
              />
              <p>
                <strong>Yes.</strong> A 600 credit score qualifies for personal loans from multiple online lenders and
                credit unions. While traditional banks typically require a minimum score of 660–700, online lenders
                such as Upstart, Avant, and LendingPoint specifically serve fair-credit borrowers and accept scores
                as low as 550–600.
              </p>
              <blockquote className={cls.loanQuote}>
                <p>
                  &quot;Our goal is to create a new financial ecosystem where customers can access the resources they
                  need for every step in their financial journey.&quot;
                </p>
                <cite>— Tom Burnside, CEO of LendingPoint</cite>
              </blockquote>
              <p>The key factors lenders evaluate beyond your credit score include:</p>
              <ul>
                <li><strong>Debt-to-income (DTI) ratio</strong> — most lenders prefer a DTI below 36% to 40%, which compares your monthly debt payments to your gross monthly income.</li>
                <li><strong>Stable, verifiable income</strong> — recent pay stubs, W-2s, or tax returns prove your ability to repay.</li>
                <li><strong>Employment history</strong> — consistent employment signals lower repayment risk to underwriting algorithms.</li>
                <li><strong>Existing debt obligations</strong> — fewer open credit accounts with low balances (low credit utilization) improve your approval odds.</li>
              </ul>
            </article>

            {/* Section 3 */}
            <article ref={(el) => { articlesRef.current[2] = el; }}>
              <h4>What to Expect: Rates, Terms, and Loan Amounts</h4>
              <p>Borrowers with a 600 credit score should expect the following loan terms based on current market data:</p>
              <div className={cls.loanTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Loan Feature</th>
                      <th>Typical Range for 600 Credit Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>APR (Annual Percentage Rate)</strong></td><td>15.00% – 35.99%</td></tr>
                    <tr><td><strong>Loan Amount</strong></td><td>$1,000 – $35,000</td></tr>
                    <tr><td><strong>Repayment Term</strong></td><td>24 – 60 months</td></tr>
                    <tr><td><strong>Origination Fee</strong></td><td>1% – 10% of loan amount</td></tr>
                    <tr><td><strong>Funding Speed</strong></td><td>1 – 5 business days</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                These rates are significantly higher than the average personal loan APR of approximately 12.31% for
                borrowers with excellent credit (760+), but they remain well below the 300%+ APR commonly associated
                with predatory payday loans or cash advances. It is crucial to watch out for the{' '}
                <strong>origination fee</strong>, which is deducted directly from your loan proceeds before funding.
              </p>
              <blockquote className={cls.loanQuote}>
                <p>
                  &quot;A personal loan is a unique borrowing tool because it offers structure, predictability, and
                  versatility all in one product... Personal loans can be useful in the right circumstances, but
                  they are not a one-size-fits-all solution.&quot;
                </p>
                <cite>— David Kimball, Chairman and CEO of Prosper</cite>
              </blockquote>
            </article>

            {/* Section 4 */}
            <article ref={(el) => { articlesRef.current[3] = el; }}>
              <h4>Top Lenders for a 600 Credit Score in 2026</h4>
              <p>
                Several online lenders cater specifically to borrowers with{' '}
                <AppLink to="/personal-loan/fair-credit">fair credit</AppLink>. The following lenders accept
                scores around 600 and offer transparent pre-qualification with no hard credit pull:
              </p>
              <div className={cls.loanTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Lender</th>
                      <th>Min Credit Score</th>
                      <th>APR Range</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Upstart</strong></td>
                      <td>No minimum (uses alternative data)</td>
                      <td>6.20% – 35.99%</td>
                      <td>Borrowers with limited credit history; considers education and employment</td>
                    </tr>
                    <tr>
                      <td><strong>Avant</strong></td>
                      <td>550</td>
                      <td>9.95% – 35.99%</td>
                      <td>Fast funding — often by the next business day</td>
                    </tr>
                    <tr>
                      <td><strong>LendingPoint</strong></td>
                      <td>620 (flexible for strong income)</td>
                      <td>9.99% – 35.99%</td>
                      <td>Borrowers with strong income but a thin credit file</td>
                    </tr>
                    <tr>
                      <td><strong>Prosper</strong></td>
                      <td>560</td>
                      <td>8.99% – 35.99%</td>
                      <td>Joint loan applications; peer-to-peer lending model</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={cls.loanProTip}>
                <strong>Pro tip:</strong> Pre-qualifying with 3–4 lenders takes under 10 minutes and uses only
                soft credit pulls, so it will not affect your credit score. Always compare the full APR — not just
                the interest rate — to account for origination fees.
              </p>
              <p>
                For a broader comparison, see our guide to the{' '}
                <AppLink to="/personal-loan/best-personal-loans">best personal loans for fair credit</AppLink>.
              </p>
            </article>

            {/* Section 5 */}
            <article ref={(el) => { articlesRef.current[4] = el; }}>
              <h4>Step-by-Step: How to Apply for a Personal Loan with a 600 Credit Score</h4>
              <p><strong>Step 1: Check your credit report for errors</strong></p>
              <p>
                Before applying, pull your free credit reports from Equifax, Experian, and TransUnion at
                AnnualCreditReport.com. According to the Federal Trade Commission, 1 in 5 consumers has an error
                on at least one credit report. Disputing inaccuracies can raise your score within 30–45 days.
              </p>
              <p><strong>Step 2: Gather your income documents</strong></p>
              <p>
                Lenders require proof of repayment ability. Prepare recent pay stubs (last 30 days), your two most
                recent W-2s or tax returns, and bank statements showing consistent deposits.
              </p>
              <p><strong>Step 3: Pre-qualify with multiple lenders</strong></p>
              <p>
                Most online lenders offer a soft-pull pre-qualification (also known as checking your rate) that
                shows your estimated rate and loan amount without affecting your credit score. Compare at least
                three offers, focusing on the total cost of the loan (APR) rather than just the monthly payment.
              </p>
              <p><strong>Step 4: Consider a co-signer</strong></p>
              <p>
                Adding a co-signer with a credit score of 700+ can significantly improve your approval odds and
                reduce your APR by 5–10 percentage points. The co-signer becomes equally responsible for
                repayment, so this option requires a trusted relationship.
              </p>
              <p><strong>Step 5: Submit your application and accept the best offer</strong></p>
              <p>
                Once you select a lender, complete the full application. The lender will perform a hard credit
                inquiry at this stage, which typically reduces your score by 2–5 points temporarily. Funds are
                usually deposited within 1–5 business days after approval.
              </p>
            </article>

            {/* Section 6 */}
            <article ref={(el) => { articlesRef.current[5] = el; }}>
              <h4>How a 600 Credit Score Compares to Other Credit Tiers</h4>
              <p>Understanding where a 600 score sits relative to other tiers helps set realistic expectations for loan terms:</p>
              <div className={cls.loanTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Credit Tier</th>
                      <th>FICO Score Range</th>
                      <th>Typical APR</th>
                      <th>Approval Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Exceptional</strong></td><td>800 – 850</td><td>6% – 10%</td><td>Very Easy</td></tr>
                    <tr><td><strong>Very Good</strong></td><td>740 – 799</td><td>10% – 14%</td><td>Easy</td></tr>
                    <tr><td><strong>Good</strong></td><td>670 – 739</td><td>13% – 18%</td><td>Moderate</td></tr>
                    <tr><td><strong>Fair (Your Range)</strong></td><td>580 – 669</td><td>15% – 36%</td><td>Harder</td></tr>
                    <tr><td><strong>Poor</strong></td><td>300 – 579</td><td>25%+ or Denied</td><td>Very Hard</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                A 600 score sits in the middle of the Fair tier. Moving to the Good tier (670+) can unlock
                significantly lower rates and more lender options. See our guide on{' '}
                <AppLink to="/credit-score/credit-score-monitoring">how to improve your credit score</AppLink>{' '}
                for a step-by-step roadmap.
              </p>
            </article>

            {/* Section 7 */}
            <article ref={(el) => { articlesRef.current[6] = el; }}>
              <h4>Alternatives to Personal Loans for a 600 Credit Score</h4>
              <p>If you do not qualify for an unsecured personal loan, these alternatives may be accessible:</p>
              <p>
                <strong>Credit union loans</strong> are often more flexible than traditional banks. Because credit
                unions are member-owned nonprofits, they may approve borrowers with a 600 credit score if they
                have an existing banking relationship or steady income. The National Credit Union Administration
                (NCUA) caps interest rates on most credit union loans at 18% APR.
              </p>
              <p>
                <strong>Secured personal loans</strong> require collateral — such as a vehicle, savings account,
                or certificate of deposit — to back the loan. Because the lender&apos;s risk is reduced, secured
                loans are easier to obtain and often carry lower interest rates than unsecured options.
              </p>
              <p>
                <strong>Credit builder loans</strong> are specifically designed to improve credit scores. The
                lender holds the loan funds in a savings account while you make monthly payments; once the loan
                is paid off, you receive the funds and a higher credit score.
              </p>
            </article>

            {/* Section 8: FAQ */}
            <article ref={(el) => { articlesRef.current[7] = el; }}>
              <h4>Frequently Asked Questions</h4>

              <h5>1. Will applying for a personal loan hurt my credit score?</h5>
              <p>Pre-qualifying uses a soft credit pull and does not affect your score. Once you formally apply and accept a loan offer, the lender performs a hard inquiry, which may temporarily lower your score by 2–5 points. This effect typically fades within 3–6 months.</p>

              <h5>2. Can I get a personal loan with no credit check?</h5>
              <p>Yes, but no-credit-check loans are almost always payday loans or title loans. These products carry APRs that frequently exceed 300% and repayment terms as short as two weeks. The Consumer Financial Protection Bureau (CFPB) strongly advises against these products for borrowers who have any other option. Lenders that accept fair credit scores are a far safer alternative.</p>

              <h5>3. How can I improve my chances of approval with a 600 credit score?</h5>
              <p>The most effective strategies are: (1) pay down revolving debt to reduce your credit utilization below 30%, (2) ensure your income is stable and verifiable, (3) apply with a co-signer who has good credit, and (4) choose lenders that explicitly accept fair-credit borrowers rather than applying to banks with higher minimum score requirements.</p>

              <h5>4. What credit score do I need for a personal loan?</h5>
              <p>Most online lenders accept credit scores of 560–600 or higher. Traditional banks typically require 660–700. Credit unions may approve scores as low as 580 if you have an existing membership and stable income.</p>

              <h5>5. How much can I borrow with a 600 credit score?</h5>
              <p>With a 600 credit score, most lenders will approve loan amounts between $1,000 and $35,000, depending on your income, DTI ratio, and the lender&apos;s policies. Borrowers with higher income and lower existing debt tend to qualify for larger amounts.</p>

              <h5>6. Can I get a debt consolidation loan with a 600 credit score?</h5>
              <p>Yes, many lenders approve debt consolidation loans for borrowers with a 600 credit score, provided they have enough income to cover the new loan payment. Consolidating high-interest credit card debt into a single, lower-interest personal loan is one of the most common uses for fair-credit loans.</p>

              <h5>7. How long does it take to get funded with a 600 credit score?</h5>
              <p>If you apply with an online lender, you can often receive funds within 1 to 3 business days. Some lenders, like Avant and Upstart, even offer next-day or same-day funding if you are approved and sign your loan documents before their daily cutoff time.</p>

              <h5>8. How long does it take to improve a 600 credit score to 700?</h5>
              <p>Moving from a 600 to a 700 credit score typically takes 6 to 12 months of consistent, positive financial behavior. You must pay all bills on time, keep credit card balances low (under 30% utilization), and avoid applying for multiple new credit accounts at once.</p>

              <h5>9. What should I do if my personal loan application is denied?</h5>
              <p>If denied, you should first read the adverse action letter the lender sends, which explains exactly why you were rejected. Common next steps include applying with a co-signer, requesting a smaller loan amount, paying down existing debt to lower your DTI, or exploring secured loans and credit union options.</p>

              <h5>10. Are there specific credit cards I can get with a 600 credit score?</h5>
              <p>Yes, a 600 credit score is considered &quot;Fair,&quot; which qualifies you for several unsecured credit cards designed for credit building, as well as secured credit cards. These cards often have higher APRs and lower credit limits initially, but responsible use can help you build your score to qualify for better products later.</p>
            </article>

            {/* Summary */}
            <article>
              <h4>Summary: Key Takeaways</h4>
              <p>
                A 600 credit score qualifies for personal loans from multiple online lenders, though rates will be
                higher than for borrowers with good or excellent credit. The most important steps are to
                pre-qualify with multiple lenders (no credit impact), compare the full APR including origination
                fees, and consider a co-signer if your initial offers are too expensive. Alternatives like credit
                union loans and secured personal loans are also worth exploring if unsecured loan rates are
                prohibitive.
              </p>
              <p>
                If your goal is to lower your borrowing costs long-term, focus on improving your credit score
                toward the 670 threshold — even a 50-point improvement can meaningfully reduce your APR and
                expand your lender options. Paying bills on time, reducing credit card balances, and disputing
                credit report errors are the three fastest ways to move the needle. Read our full guide on{' '}
                <AppLink to="/credit-score/credit-score-monitoring">how to improve your credit score</AppLink>{' '}
                for a detailed action plan.
              </p>
              <p className={cls.loanDisclaimer}>
                <em>
                  This article is for informational purposes only and does not constitute financial advice.
                  Loan terms and lender policies are subject to change. Always verify current rates directly
                  with lenders before applying.
                </em>
              </p>
            </article>

          </div>

          {/* Right Sidebar */}
          <div className={cls.loanRightPart}>
            <div className={cls.loanShareMobile}>
              <p className={cls.loanShareTitle}>Share this</p>
              <div className={cls.loanShareImages}>
                <button onClick={() => handleShare('link')} aria-label="Copy link">
                  <Image src="/images/article/share_link.svg" alt="Copy link" width={24} height={24} className={cls.loanShareImg} />
                </button>
                <button onClick={() => handleShare('facebook')} aria-label="Share on Facebook">
                  <Image src="/images/article/share_fb.svg" alt="Share on Facebook" width={24} height={24} className={cls.loanShareImg} />
                </button>
                <button onClick={() => handleShare('twitter')} aria-label="Share on Twitter">
                  <Image src="/images/article/share_twitter.svg" alt="Share on Twitter" width={24} height={24} className={cls.loanShareImg} />
                </button>
                <button onClick={() => handleShare('more')} aria-label="More sharing options">
                  <Image src="/images/article/share_dots.svg" alt="More sharing options" width={24} height={24} className={cls.loanShareImg} />
                </button>
              </div>
            </div>
            <div className={classNames(cls.loanArticleRightBlock, {}, [cls.loanArticleContact])}>
              <Image src="/images/article/mail.png" alt="" width={40} height={40} />
              <p className={cls.loanArticleRightBlockTitle}>Contact a personal loan agent</p>
              <p className={cls.loanArticleRightBlockTxt}>Leave your email and we will get back to you.</p>
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

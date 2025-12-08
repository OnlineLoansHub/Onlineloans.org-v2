'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { WrittenBy } from '@/components/WrittenBy/WrittenBy';
import cls from './page.module.scss';

// Calculate date 7 days before current date

const getLastUpdated = (): string => {
  const date = new Date();

  date.setDate(date.getDate() - 7);

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const lastUpdated = getLastUpdated();

// Lender data for comparison table
const lenders = [
  {
    name: 'ACE',
    slug: 'ace-cash-express',
    logo: '/images/paydayloans-california/ace-cash-express.webp',
    expertRating: '4.7/5',
    amountProvided: '$200',
    fee: '$35.28',
    amountOfCheck: '$235.28',
    daysOfLoan: '14-31 days',
    creditCheck: 'No check',
    url: 'https://www.acecashexpress.com/payday-loans/',
  },
  {
    name: 'Speedy',
    slug: 'speedy-cash',
    logo: '/images/paydayloans-california/sppedtCash-logo.svg',
    expertRating: '4.4/5',
    amountProvided: '$255',
    fee: '$45',
    amountOfCheck: '$300',
    daysOfLoan: '14-31 days',
    creditCheck: 'No check',
    url: 'https://www.speedycash.com/rates-and-terms/california/',
  },
  {
    name: 'Moneytree',
    slug: 'moneytree',
    logo: '/images/paydayloans-california/money-tree-site-logo.webp',
    expertRating: '3.8/5',
    amountProvided: '$200',
    fee: '$35.29',
    amountOfCheck: '$235.29',
    daysOfLoan: '14-31 days',
    creditCheck: 'No check',
    url: 'https://www.moneytreeinc.com/',
  },
  {
    name: 'Check City',
    slug: 'check-city',
    logo: '/images/paydayloans-california/checkCity-Logo.svg',
    expertRating: '4.9/5',
    amountProvided: '$255',
    fee: '$45',
    amountOfCheck: '$300',
    daysOfLoan: '14-31 days',
    creditCheck: 'No check',
    url: 'https://www.checkcity.com/rates-fees/california',
  },
  {
    name: 'Advance',
    slug: 'advance-america',
    logo: '/images/paydayloans-california/AdvanceAmerica-logo.svg',
    expertRating: '4.9/5',
    amountProvided: '$255',
    fee: '$45',
    amountOfCheck: '$300',
    daysOfLoan: '14-31 days',
    creditCheck: 'No check',
    url: 'https://web.advanceamerica.net/online',
  },
  {
    name: 'Check&Go',
    slug: 'check-n-go',
    logo: '/images/paydayloans-california/cng-logo.webp',
    expertRating: '4.5/5',
    amountProvided: '$255',
    fee: '$45',
    amountOfCheck: '$300',
    daysOfLoan: '14-31 days',
    creditCheck: 'No check',
    url: 'https://account.checkngo.com/application/account',
  },
];

const publishedDate = new Date('2025-01-15');
const modifiedDate = new Date();

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Payday Loans in California: Top Lenders, Laws & Legality',
  description:
    'Complete guide to payday loans in California including state laws, legality, fees, and reviews of top online payday loan providers.',
  author: {
    '@type': 'Person',
    name: 'Michael Thompson',
  },
  publisher: {
    '@type': 'Organization',
    name: 'OnlineLoans.org',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.onlineloans.org/images/logo/logo.png',
    },
  },
  datePublished: publishedDate.toISOString(),
  dateModified: modifiedDate.toISOString(),
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.onlineloans.org/personal-loan/payday-loans/california',
  },
  image: 'https://www.onlineloans.org/og-image.png',
};

export default function PaydayLoansCaliforniaPage() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      if (link) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const id = href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
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

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className={cls.wrapper}>
        {/* Hero Section */}
        <section className={cls.hero}>
          <div className={cls.container} style={{ position: 'relative', zIndex: 1 }}>
            <h1 className={cls.heroTitle}>
              Payday Loans in California: Top Lenders, Laws & Legality
            </h1>
            <div className={cls.heroSubtitle}>
              <nav className={cls.tableOfContents} aria-label="Table of Contents">
                <div className={cls.tocTitle}>Table of Contents</div>
                <ul className={cls.tocList}>
                  <li>
                    <a href="#best-lenders">Best Online Payday Loan Providers in California</a>
                  </li>
                  <li>
                    <a href="#understanding-payday-loans">
                      Understanding Payday Loans in California
                    </a>
                  </li>
                  <li>
                    <a href="#legality">Are Payday Loans Legal in California?</a>
                  </li>
                  <li>
                    <a href="#lender-reviews">Lender Reviews</a>
                  </li>
                  <li>
                    <a href="#conclusion">Conclusion: Making an Informed Decision</a>
                  </li>
                  <li>
                    <a href="#sources">Sources</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={cls.writtenByWrapper}>
              <WrittenBy
                name="Michael Thompson"
                role="Senior Business Finance Analyst"
                imageUrl="/images/authors/0_Man_Adult_1920x1080_optimize.gif"
                variant="dark"
              />
            </div>
            <div className={cls.heroMeta}>
              <p className={cls.lastUpdated}>Last Updated: {lastUpdated}</p>
            </div>
            <div className={cls.trustBadges}>
              <Image
                src="/business-loan/restaurant-funding/assets/logo-bar-bbb-trustpilot.svg"
                alt="BBB and Trustpilot badges"
                width={350}
                height={53}
                className={cls.trustBadgesImage}
              />
            </div>
          </div>
        </section>

        {/* Best Lenders Section */}
        <section id="best-lenders" className={cls.contentSection}>
          <div className={cls.container}>
            {/* Comparison Table */}
            <div className={cls.tableWrapper}>
              <table className={cls.comparisonTable}>
                <thead>
                  <tr>
                    <th>Lender</th>
                    <th>Expert Rating</th>
                    <th>Amount $</th>
                    <th>Fee</th>
                    <th>Amount to return</th>
                    <th>Days of loan</th>
                    <th>Credit check</th>
                    <th>Learn More</th>
                  </tr>
                </thead>
                <tbody>
                  {lenders.map((lender, index) => (
                    <tr key={index}>
                      <td>
                        <div className={cls.logoWrapper}>
                          <Image
                            src={lender.logo}
                            alt={`${lender.name} logo`}
                            width={120}
                            height={40}
                            className={cls.logoImage}
                          />
                        </div>
                      </td>
                      <td>
                        <div className={cls.ratingWrapper}>
                          <div className={cls.ratingRow}>
                            <span className={cls.star}>★</span>
                            <span className={cls.expertRating}>{lender.expertRating}</span>
                          </div>
                          <a href={`#${lender.slug}`} className={cls.reviewLink}>
                            Read Expert Review
                          </a>
                        </div>
                      </td>
                      <td>{lender.amountProvided}</td>
                      <td>{lender.fee}</td>
                      <td>{lender.amountOfCheck}</td>
                      <td>{lender.daysOfLoan}</td>
                      <td>{lender.creditCheck}</td>
                      <td>
                        <div className={cls.ctaWrapper}>
                          <a
                            href={lender.url}
                            rel="nofollow"
                            target="_blank"
                            className={cls.ctaButton}
                          >
                            SEE LOAN OPTIONS
                          </a>
                          <span className={cls.ctaSubtext}>
                            By {lender.name} with onlineLoans.org
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={cls.content}>
              <p className={cls.tableNote}>
                (All lenders above are licensed by California DFPI. "Same-day" funding typically
                requires approval before a cut-off time on a business day; otherwise funding is next
                business day. Fees shown are the state-allowed maximum; some lenders may charge
                lower fees.)
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Payday Loans Section */}
        <section className={cls.contentSection}>
          <div className={cls.container}>
            <h2 id="understanding-payday-loans" className={cls.sectionTitle}>
              Understanding Payday Loans in California
            </h2>
            <div className={cls.sectionDivider}></div>
            <div className={cls.content}>
              <p>
                <strong>What is a payday loan?</strong> It's a short-term loan (in California, for
                $300 or less including fees) that you typically repay in full on your next payday{' '}
                <cite>dfpi.ca.gov</cite> <cite>dfpi.ca.gov</cite>. You either write the lender a
                post-dated check or authorize an electronic debit for the loan amount plus fees. On
                your next payday (or within a maximum of 31 days), the lender cashes the check or
                debits your account to collect payment.
              </p>
              <p>
                <strong>Why do people use payday loans?</strong> They're easy to get and fast.
                Lenders generally do not require good credit – approval is based on having a steady
                income and a bank account. Applications are often done online in minutes with
                near-instant decisions. If approved, you can get cash the same day or by the next
                business day, which is helpful for urgent expenses like car repairs or medical
                bills. However, this convenience comes at a steep price: payday loans carry
                extremely high fees and annual interest rates, so borrowers should be cautious.
              </p>
            </div>
          </div>
        </section>

        {/* Legality Section */}
        <section className={cls.contentSectionAlt}>
          <div className={cls.container}>
            <h2 id="legality" className={cls.sectionTitle}>
              Are Payday Loans Legal in California?
            </h2>
            <div className={cls.sectionDivider}></div>
            <div className={cls.content}>
              <p>
                <strong>Yes.</strong> California permits payday lending, but with strict state laws
                to protect consumers <cite>dfpi.ca.gov</cite>. Both storefront and online payday
                loans are legal only if the lender is licensed by the California Department of
                Financial Protection and Innovation (DFPI). Always verify a lender's California
                license before borrowing – unlicensed online lenders may be operating illegally{' '}
                <cite>dfpi.ca.gov</cite>.
              </p>
              <p>
                <strong>Key California payday loan laws and regulations:</strong> (updated as of
                2025)
              </p>
              <ul className={cls.lawsList}>
                <li>
                  <strong>Maximum loan amount:</strong> The check you give the lender (loan
                  principal + fee) cannot exceed $300. In practice, this means you can borrow up to
                  $255 in cash, with a $45 fee, for a total of $300 due <cite>dfpi.ca.gov</cite>.
                </li>
                <li>
                  <strong>Fees and APR:</strong> Lenders can charge a fee up to 15% of the check's
                  face value. This equals about $17.65 per $100 borrowed <cite>k6agency.com</cite>.
                  For example, a $255 loan will cost $45 in fees (you repay $300). That fee equates
                  to an APR of ~460% for a typical 14-day loan <cite>cashloansdirect.com</cite>.
                  (California does not cap the APR explicitly – the 15% fee is the cap, which
                  results in triple-digit APRs.)
                </li>
                <li>
                  <strong>Loan term:</strong> The loan is due on your next payday, but no later than
                  31 days from the loan date <cite>acecashexpress.com</cite>. There are no
                  extensions beyond 31 days.
                </li>
                <li>
                  <strong>One loan at a time:</strong> You cannot have more than one payday loan
                  open in California simultaneously <cite>acecashexpress.com</cite>.
                </li>
                <li>
                  <strong>No rollovers:</strong> Lenders cannot refinance or "roll over" a payday
                  loan by issuing a new loan to pay off the old one <cite>dfpi.ca.gov</cite>. Each
                  loan must be paid off in full before another is taken.
                </li>
                <li>
                  <strong>No additional charges for payment plans:</strong> If you can't repay on
                  time, a lender may (at its discretion) allow an extended payment plan, but no
                  extra fees or interest can be charged for that extension <cite>dfpi.ca.gov</cite>.
                  (Lenders are also barred from adding late fees or more interest when you defer
                  payment <cite>cashloansdirect.com</cite>.)
                </li>
                <li>
                  <strong>NSF fee limit:</strong> If your check or debit for the loan bounces, the
                  lender can charge at most a one-time $15 NSF fee <cite>cashloansdirect.com</cite>.
                  They cannot sue or threaten criminal action for bounced checks – California treats
                  it as a civil debt matter.
                </li>
                <li>
                  <strong>Licensed lenders:</strong> All payday lenders (including online companies)
                  must be licensed by the DFPI <cite>cashloansdirect.com</cite>. You can use the
                  DFPI's online database to verify a lender's license and check for any disciplinary
                  actions <cite>dfpi.ca.gov</cite>. It's risky to borrow from unlicensed websites,
                  as they may violate state rate limits or consumer protection laws.
                </li>
              </ul>
              <p>
                <strong>Bottom line:</strong> Payday loans are legal in California within these
                limits, but they remain an expensive form of credit. The DFPI and consumer advocates
                warn that frequent use can lead to a debt cycle where borrowers pay more in fees
                than the original loan amount <cite>dfpi.ca.gov</cite> <cite>dfpi.ca.gov</cite>.
                Always consider alternatives and borrow responsibly.
              </p>
            </div>
          </div>
        </section>

        {/* Lender Reviews Section */}
        <section id="lender-reviews" className={cls.contentSectionAlt}>
          <div className={cls.container}>
            <h2 className={cls.sectionTitle}>Lender Reviews</h2>
            <div className={cls.sectionDivider}></div>
            <div className={cls.lenderReviews}>
              {/* ACE Cash Express */}
              <div id="ace-cash-express" className={cls.lenderReview}>
                <h3 className={cls.lenderName}>ACE Cash Express Review</h3>
                <p>
                  ACE Cash Express is another major payday lender serving California, known for its
                  wide range of financial services and quick funding options. ACE has been in
                  business for decades (since 1968) <cite>trustpilot.com</cite> and operates both
                  online and through numerous CA storefronts.
                </p>
                <h4 className={cls.loanSubheading}>Loan amounts & terms:</h4>
                <p>
                  $100 to $255 per loan in California, due by your next payday (no later than 31
                  days) <cite>acecashexpress.com</cite> <cite>acecashexpress.com</cite>. The exact
                  amount you can borrow depends on your income and underwriting (first-time
                  customers might be approved for a lower amount).
                </p>
                <h4 className={cls.loanSubheading}>Fees:</h4>
                <p>
                  ACE charges up to the legal limit: 15% of the total loan amount. For example,
                  borrowing $200 will cost $30 in fee, and $255 will cost $45 in fee. This equates
                  to very high APRs (~400%+), as is standard for payday loans in California{' '}
                  <cite>cashloansdirect.com</cite>. ACE does not charge a fee to apply, and if you
                  change your mind, they offer a 72-hour satisfaction guarantee – you can return the
                  loan principal within 72 hours and cancel the loan with no charges{' '}
                  <cite>acecashexpress.com</cite>.
                </p>
                <div className={cls.feeScheduleImage}>
                  <Image
                    src="/images/paydayloans-california/Ace_FeeSchedule.png"
                    alt="ACE Cash Express California Deferred Deposit Fee Schedule"
                    width={800}
                    height={600}
                    className={cls.feeScheduleImg}
                  />
                  <p className={cls.imageCaption}>
                    Image source:{' '}
                    <a
                      href="https://www.acecashexpress.com/uploads/files/products/payday/internet/rates/CA_FeeSchedule.pdf"
                      target="_blank"
                      rel="nofollow"
                    >
                      https://www.acecashexpress.com/uploads/files/products/payday/internet/rates/CA_FeeSchedule.pdf
                    </a>
                  </p>
                </div>
                <h4 className={cls.loanSubheading}>Eligibility requirements:</h4>
                <p>
                  You need to be 18 or older with valid government ID and Social Security number (or
                  ITIN). A checking account (open and active) and proof of income (like a pay stub
                  or benefits statement) are required. ACE will perform some credit and financial
                  history check (often using alternative credit bureaus), but poor credit is not a
                  barrier – "anyone can apply" and they focus on your ability to repay rather than
                  FICO scores <cite>acecashexpress.com</cite>.
                </p>
                <h4 className={cls.loanSubheading}>Application process:</h4>
                <p>
                  Online or in-store. Online, you fill out a secure application on ACE's website.
                  It's quick – many customers get an instant approval decision. If approved, you
                  e-sign the loan agreement. ACE gives you multiple ways to get your cash: you can
                  have it loaded to your debit card instantly, deposited to your bank account by the
                  next business day, or pick up cash the same day at an ACE store{' '}
                  <cite>acecashexpress.com</cite>. (You'll choose your preference during the
                  application.)
                </p>
                <h4 className={cls.loanSubheading}>Speed of funding:</h4>
                <p>
                  Excellent. If you're approved online, ACE offers instant funding to a qualifying
                  debit card (often within 30 minutes) <cite>acecashexpress.com</cite>.
                  Alternatively, they can do a same-day cash pickup in one of their 100+ California
                  stores <cite>acecashexpress.com</cite> <cite>acecashexpress.com</cite>. Standard
                  ACH deposit to your bank is usually next business day (if you complete the
                  application by their daily cutoff) <cite>acecashexpress.com</cite>. In short, you
                  can often get your money within hours with ACE.
                </p>
                <h4 className={cls.loanSubheading}>Reputation & customer feedback:</h4>
                <p>
                  ACE Cash Express is a large, trusted name in payday lending. They are fully
                  licensed and a member of industry trade associations. Customer reviews indicate a
                  high level of satisfaction with the speed and convenience: on Trustpilot ACE is
                  rated around 4.7 out of 5 stars (categorized as Excellent) based on over 10,000
                  reviews <cite>trustpilot.com</cite>. Many Californians also use ACE's other
                  services (like check cashing and money orders) and appreciate the one-stop shop.
                  However, like all payday lenders, ACE has some complaints about costs – and indeed
                  their loans are costly if not paid as agreed. Bottom line: ACE stands out for its
                  instant funding options and long-standing presence. It's a strong option if you
                  need cash urgently and want the ability to walk into a store for service or use a
                  well-optimized online system.
                </p>
              </div>

              {/* Speedy Cash */}
              <div id="speedy-cash" className={cls.lenderReview}>
                <h3 className={cls.lenderName}>Speedy Cash Review</h3>
                <p>
                  Speedy Cash is a well-known payday loan lender with an extensive online presence
                  and several store locations in California. True to its name, Speedy Cash focuses
                  on getting cash to borrowers quickly – often with options for instant funding.
                  They also offer other products (installment loans, lines of credit) in some
                  states, but in California their offerings include the traditional payday loan.
                </p>
                <h4 className={cls.loanSubheading}>Loan amounts & terms:</h4>
                <p>
                  $100 to $255 for payday loans in California <cite>speedycash.com</cite>. The state
                  cap applies, so first-time borrowers may be limited to a lower amount until they
                  build a history. The loan term ranges from as short as 7 days up to 31 days, but
                  most commonly it's aligned with your pay cycle (around 14 days for bi-weekly pay).
                  Payment is due in full on that date.
                </p>
                <h4 className={cls.loanSubheading}>Fees:</h4>
                <p>
                  Speedy Cash charges the California-allowed fee of up to 15%. That means if you
                  borrow $255, you owe $300 on payday (the $45 fee is 15% of $300). This is
                  equivalent to very high APRs (hundreds of percent), typical of payday loans. They
                  do not charge additional origination fees or monthly fees – just the one-time
                  finance charge. Speedy Cash is transparent about the cost before you finalize the
                  loan. (For perspective, one Speedy Cash customer on WalletHub noted the ~300%+
                  interest as "outrageous" <cite>wallethub.com</cite> – so only use these loans for
                  short-term emergencies.)
                </p>
                <div className={cls.feeScheduleImage}>
                  <Image
                    src="/images/paydayloans-california/speedycash-term.png"
                    alt="Speedy Cash California Payday Loan Fee Schedule"
                    width={800}
                    height={600}
                    className={cls.feeScheduleImg}
                  />
                  <p className={cls.imageCaption}>
                    Image source:{' '}
                    <a
                      href="https://www.speedycash.com/rates-and-terms/california/"
                      target="_blank"
                      rel="nofollow"
                    >
                      https://www.speedycash.com/rates-and-terms/california/
                    </a>
                  </p>
                </div>
                <h4 className={cls.loanSubheading}>Eligibility requirements:</h4>
                <p>
                  You must meet the standard criteria: 18+ years old, valid ID, Social Security
                  Number, proof of income, and an active checking account. Speedy Cash is known for
                  being lenient with credit – they state that borrowers with any credit history can
                  be approved as long as you have the ability to repay{' '}
                  <cite>1firstcashadvance.org</cite>. They may use alternative credit agencies to
                  review your history, but there is no hard credit score cutoff. You cannot be in
                  bankruptcy or have an outstanding Speedy Cash loan.
                </p>
                <h4 className={cls.loanSubheading}>Application process:</h4>
                <p>
                  Online: Speedy Cash has a user-friendly online application on their website or
                  mobile app. It literally takes a few minutes to fill out. You can also apply by
                  phone or in person at a Speedy Cash store. Approval is very fast – often within
                  seconds or minutes of submission, you'll get a decision. Once approved, you review
                  the loan terms and sign electronically. Speedy Cash stands out for its funding
                  options: you can choose to receive money in as little as 10 minutes on a debit
                  card or via an ACH transfer to your bank <cite>1firstcashadvance.org</cite>. If
                  you opt for the debit card funding, you'll provide your debit card info – eligible
                  Visa or Mastercard debit cards can be loaded almost immediately (typically within
                  30 minutes). ACH direct deposit usually arrives the same day or next business day
                  depending on when you applied. If you applied in a store, you walk out with cash
                  in hand.
                </p>
                <h4 className={cls.loanSubheading}>Speed of funding:</h4>
                <p>
                  One of the fastest. Speedy Cash is among the few lenders offering instant funding
                  – customers who choose the debit card option often get funds within minutes after
                  approval <cite>1firstcashadvance.org</cite>. For example, if you're approved at
                  noon, you might have money on your debit card by 12:30 PM. ACH deposits, if
                  approved early, can hit your bank account by that evening or the next morning. And
                  of course, in-store loans give immediate cash. This speed is a major selling point
                  for Speedy Cash.
                </p>
                <h4 className={cls.loanSubheading}>Reputation & customer reviews:</h4>
                <p>
                  Speedy Cash has a mixed but generally positive reputation. On Trustpilot, they
                  hold about a 4.4/5 star rating with over 10,000 reviews{' '}
                  <cite>trustpilot.com</cite>, and ConsumerAffairs also shows ~4.5/5, indicating
                  many users appreciate the fast and easy service. Customers frequently praise the
                  quick approvals and that Speedy Cash will work with those who have bad credit. On
                  the flip side, the company has a poor rating on the BBB and some other platforms
                  (e.g., WalletHub ~1.6/5) <cite>wallethub.com</cite>{' '}
                  <cite>1firstcashadvance.org</cite>. Complaints include the high cost (which is
                  inherent to payday loans) and some customer service issues or aggressive
                  collections. It's worth noting that in 2018 Speedy Cash faced a class-action
                  lawsuit alleging certain unlawful practices <cite>1firstcashadvance.org</cite>,
                  but they continue to operate legitimately under state licenses. In summary, Speedy
                  Cash is a legit and extremely fast option for payday loans – just remember to
                  repay on time to avoid any troubles, as the costs will quickly add up if the loan
                  is extended.
                </p>
              </div>

              {/* Moneytree */}
              <div id="moneytree" className={cls.lenderReview}>
                <h3 className={cls.lenderName}>Moneytree Review</h3>
                <p>
                  Moneytree is a regional payday lender that started in California and serves the
                  West Coast. Founded in 1983, Moneytree operates multiple branch locations in
                  California (as well as an online lending platform). They pride themselves on
                  professional, friendly service – and many Californians are familiar with their
                  retail locations. Moneytree offers payday loans with a transparent fee structure
                  and a few unique features like high loan limits for repeat customers and instant
                  funding options.
                </p>
                <h4 className={cls.loanSubheading}>Loan amounts & terms:</h4>
                <p>
                  Up to $255 for a payday loan in California <cite>moneytreeinc.com</cite>.
                  (Moneytree actually mentions loans "up to $255¹ with approval" – $255 being the
                  cash disbursed, plus the fee makes $300 total <cite>moneytreeinc.com</cite>.)
                  First-time borrowers might not get the full $255; it depends on your income and
                  their underwriting. The loan term is generally until your next payday, from a few
                  days up to 31 days maximum. By law it cannot exceed 31 days. Moneytree also offers
                  larger installment loans in California under a different license, but those are
                  separate from the payday loan product.
                </p>
                <h4 className={cls.loanSubheading}>Fees:</h4>
                <p>
                  Moneytree charges approximately $17.65 per $100 borrowed on a 14-day payday loan{' '}
                  <cite>k6agency.com</cite>. This is effectively the same as the 15% of face amount
                  cap – for example, a $100 loan due in 14 days would cost $17.65 in fee, and you'd
                  repay $117.65 <cite>k6agency.com</cite>. Borrowing the maximum $255 costs $45 in
                  fee (repay $300). They provide a fee schedule on their website so you know the
                  exact dollar cost for any given loan amount. Importantly, if you cannot pay on
                  time, Moneytree does not charge any additional interest or fees beyond that
                  initial $45 max – you would just owe the $300 until it's paid (and possibly an NSF
                  fee if your payment fails). Moneytree's fee is comparable to other lenders –
                  extremely expensive in APR terms, but tightly regulated.
                </p>
                <div className={cls.feeScheduleImage}>
                  <Image
                    src="/images/paydayloans-california/monney-tree-terms.jpg"
                    alt="MoneyTree California Payday Loan Fee Schedule"
                    width={800}
                    height={600}
                    className={cls.feeScheduleImg}
                  />
                  <p className={cls.imageCaption}>
                    Image source:{' '}
                    <a
                      href="https://www.moneytreeinc.com/wp-content/uploads/CA031-Fee-Transparency-Web_0725.jpg"
                      target="_blank"
                      rel="nofollow"
                    >
                      https://www.moneytreeinc.com/wp-content/uploads/CA031-Fee-Transparency-Web_0725.jpg
                    </a>
                  </p>
                </div>
                <h4 className={cls.loanSubheading}>Eligibility requirements:</h4>
                <p>
                  Standard requirements apply: 18 or older, government-issued ID, Social Security
                  Number (or ITIN/Alien registration), and a verifiable source of income. You'll
                  need to provide a proof of income (recent pay stub, etc.) and a working phone
                  number and address. A checking account is usually required for payday loans (if
                  applying online, definitely yes; in branch they may allow you to walk out with
                  cash but you still need to provide a check or ACH authorization for repayment).
                  Moneytree may approve loans with no traditional credit check – they state that
                  they might check credit bureaus in some cases, but many borrowers are approved
                  based on income and account status alone <cite>1firstcashadvance.org</cite>{' '}
                  <cite>1firstcashadvance.org</cite>. They are licensed and follow California's rule
                  of one loan at a time.
                </p>
                <h4 className={cls.loanSubheading}>Application process:</h4>
                <p>
                  In-Branch: You can walk into any Moneytree branch (they have dozens in CA) and
                  apply with ID, proof of income, and a check. You'll typically receive cash on the
                  spot if approved, and the whole process can take 15–20 minutes for new customers.
                  Online: Moneytree's website allows California residents to apply online. The
                  online application will verify your identity and income details (you may need to
                  upload documents). Decisions are often quick – sometimes instant, other times a
                  few minutes if manual review is needed. Once approved, you choose how to get the
                  funds. Moneytree offers instant funding to your debit card in about 30–45 minutes,
                  which is very fast <cite>1firstcashadvance.org</cite>. Alternatively, they can do
                  an ACH bank deposit – but note this method is slower with Moneytree than some
                  others, potentially taking 1 to 5 business days for the funds to appear depending
                  on your bank <cite>1firstcashadvance.org</cite> <cite>1firstcashadvance.org</cite>
                  . (The delay likely accounts for possible bank holds; often it will be 1-2 days in
                  practice.) Lastly, you have the option to pick up cash at a Moneytree branch the
                  same day – you could apply online and then go to a branch to get the cash
                  immediately.
                </p>
                <h4 className={cls.loanSubheading}>Speed of funding:</h4>
                <p>
                  Same-day options available. If speed is critical, Moneytree's fastest method is to
                  apply online and request Instant Funding to a debit card – you might have the
                  money in under an hour <cite>1firstcashadvance.org</cite>. Or apply online and
                  then visit a branch for immediate cash (during business hours). If you choose a
                  normal bank deposit, be prepared that it might not be as instant; to be safe,
                  expect maybe the next business day or two for ACH (they cite up to 5 days, but
                  that's usually the worst-case scenario). Moneytree is unique in that they have
                  both a robust online system and physical locations, giving borrowers flexibility
                  in how to receive funds.
                </p>
                <h4 className={cls.loanSubheading}>Reputation & customer experience:</h4>
                <p>
                  Moneytree has a long history in California, often marketing themselves as a more
                  personal, higher-quality service in the payday loan industry. They have earned
                  customer loyalty at their branches for friendly service – many Yelp reviews praise
                  individual tellers and the professional atmosphere (for example, offering free
                  coffee at branches, etc.). Customer ratings: Moneytree's online presence shows a
                  bit of a mixed picture. The company's Trustpilot profile is not very active (only
                  a handful of reviews). On Yelp, however, Moneytree's average rating is ~3.8 out of
                  5 across many reviews <cite>1firstcashadvance.org</cite>. Many locations have 4 or
                  5 stars, while a few have lower scores – this suggests the experience can vary by
                  branch. Common compliments are about courteous staff and quick help, while
                  complaints sometimes cite billing/payment confusion or high costs. The BBB rates
                  Moneytree A- (with some customer complaints noted){' '}
                  <cite>1firstcashadvance.org</cite> <cite>1firstcashadvance.org</cite>. It's worth
                  noting Moneytree was fined by the CFPB in 2016 for some debt collection practices{' '}
                  <cite>1firstcashadvance.org</cite>, but they've since adjusted policies. As a
                  licensed lender with decades in business, Moneytree is generally considered
                  reliable and treats customers fairly, but do remember that the high cost and
                  potential risks (as with any payday loan) are present. If you use Moneytree, take
                  advantage of their clarity – know exactly what you must repay and have a plan to
                  pay off the loan to avoid any long-term issues.
                </p>
              </div>

              {/* Check City */}
              <div id="check-city" className={cls.lenderReview}>
                <h3 className={cls.lenderName}>Check City Review</h3>
                <p>
                  Check City is a direct payday lender that operates online in California (and has
                  physical stores in a few other states like Nevada and Utah). In California, Check
                  City is online-only, but it is a fully licensed lender in the state{' '}
                  <cite>checkcity.com</cite>. They are known for a fast application process and good
                  customer service, and they tout an "Excellent" Trustpilot rating from their
                  customers.
                </p>
                <h4 className={cls.loanSubheading}>Loan amounts & terms:</h4>
                <p>
                  Maximum $255 cash per loan in California (which results in a $300 check including
                  the fee). The loan term will be until your next payday (up to 31 days). Check City
                  allows you to borrow any amount up to the max, in increments (for example, you
                  could borrow just $100 or $200, not necessarily the full $255, depending on your
                  need and approval). As with others, you'll owe the full amount plus fee on your
                  due date.
                </p>
                <h4 className={cls.loanSubheading}>Fees:</h4>
                <p>
                  Check City charges the standard 15% fee of the check amount. Borrow $255 and
                  you'll pay $45 in fees. Their site is transparent about rates – for California,
                  they clearly state the cost per $100 and give examples. That works out to the same
                  ~460% APR for a 2-week loan as other lenders. There are no additional fees beyond
                  this finance charge (no application fee, no prepayment fee – you can repay early
                  to save interest, though on a short loan the fee is typically fixed).
                </p>
                <h4 className={cls.loanSubheading}>Eligibility requirements:</h4>
                <p>
                  You must be 18+ and a resident of California with valid identification. A steady
                  income is required (employment or other income sources) and an active checking
                  account that accepts ACH transfers. You'll need to provide your routing and
                  account number and authorize Check City to debit it for repayment. No credit score
                  requirements – Check City, like most payday lenders, focuses on current income and
                  checking account status rather than credit history. They claim to be a direct
                  lender and licensed in CA, which means you deal directly with them (not a
                  third-party lead generator) <cite>checkcity.com</cite>. They also adhere to the
                  one-loan-at-a-time rule.
                </p>
                <h4 className={cls.loanSubheading}>Application process:</h4>
                <p>
                  Fully online: You can apply on Check City's website 24/7. The form will ask for
                  personal details, income info, and bank details. Many applications get an
                  automatic decision. If approved, you then select how you want the funds. Funding
                  options: Check City offers same-day ACH deposit to your bank account (if you're
                  approved and finalize by a certain cut-off, you can get the funds that same
                  business day). They also have an Instant Funding option to load the money onto
                  your debit card – however, instant funding is available only for returning
                  customers at this time <cite>checkcity.com</cite>. (Returning customers are those
                  who have paid off a previous loan with Check City; they get the perk of truly
                  instant debit card deposits.) For new customers, you'll likely receive a fast ACH
                  deposit. In either case, funding is quick. There are no physical California Check
                  City stores to visit, so all is done online and funds are delivered
                  electronically.
                </p>
                <h4 className={cls.loanSubheading}>Speed of funding:</h4>
                <p>
                  Very fast. Check City advertises that qualified customers can get same-day or even
                  instant funding. For many borrowers, the money is deposited the same business day
                  (if the loan is approved by early afternoon). The instant debit card funding (for
                  repeat borrowers) means you could have cash within minutes after approval. If your
                  loan is approved after hours, the deposit would be on the next business morning.
                  Overall, Check City's funding speed is on par with other top lenders – they
                  understand that when you need a payday loan, you often need it quickly.
                </p>
                <h4 className={cls.loanSubheading}>Reputation & customer reviews:</h4>
                <p>
                  Check City receives high marks from customers for its service. They highlight
                  their great customer service and ease of use on their site, and this is backed up
                  by external reviews. Check City has an Excellent Trustpilot rating around 4.9/5
                  stars with over 2,500 reviews <cite>trustpilot.com</cite> – customers frequently
                  mention the reliability, simplicity of the process, and the company's
                  transparency. Since Check City is a direct lender, people like that they're
                  dealing with one company from start to finish. The company has been around since
                  the 1980s and has built a positive reputation in the states it operates. In
                  California, even though you can't walk into a local Check City store, you can
                  expect the same level of service through their online platform. As with all these
                  lenders, keep in mind the high cost – but if a payday loan is your choice, Check
                  City is a highly rated option to consider.
                </p>
              </div>

              {/* Advance America */}
              <div id="advance-america" className={cls.lenderReview}>
                <h3 className={cls.lenderName}>Advance America Review</h3>
                <p>
                  Advance America is one of the nation's largest payday loan companies and is
                  licensed in California. They have 100+ store locations in California (for those
                  who prefer in-person service) and an easy online application.
                </p>
                <h4 className={cls.loanSubheading}>Loan amounts & terms:</h4>
                <p>
                  Up to $255 per California law (you'll repay up to $300 including the fee). Loans
                  are due on your next payday (usually 14 days, but up to 31 days){' '}
                  <cite>acecashexpress.com</cite>.
                </p>
                <h4 className={cls.loanSubheading}>Fees:</h4>
                <p>
                  Charges the maximum 15% fee allowed. That's $45 on a $300 loan (e.g. borrow $255,
                  pay back $300). This equals ~460% APR for a 2-week loan{' '}
                  <cite>cashloansdirect.com</cite>. No other fees (no application or prepayment
                  fees).
                </p>
                <h4 className={cls.loanSubheading}>Eligibility requirements:</h4>
                <p>
                  Must be 18+, a California resident, with a valid ID, active checking account, and
                  proof of steady income (e.g. pay stub or benefits award). No minimum credit score
                  – bad credit is okay. (They will verify some personal and financial information,
                  but do not perform a traditional hard credit check for payday loans.)
                </p>
                <h4 className={cls.loanSubheading}>Application process:</h4>
                <p>
                  Can apply online in minutes or at a local branch. The online form asks for
                  personal info, employment/income details, and bank account for depositing funds.
                  It's straightforward and no collateral is required.
                </p>
                <h4 className={cls.loanSubheading}>Speed of funding:</h4>
                <p>
                  Fast funding is a hallmark. If you apply and get approved early in the day,
                  Advance America can deposit funds the same day (typically by end of day){' '}
                  <cite>1firstcashadvance.org</cite>. Approvals after the morning cutoff are funded
                  the next business day. Customers can also opt to pick up cash immediately at a
                  branch.
                </p>
                <h4 className={cls.loanSubheading}>Reputation & customer reviews:</h4>
                <p>
                  Advance America is a well-established lender (operating since 1997). It has an
                  Excellent reputation among many users – boasting a 4.9/5 star rating on Trustpilot
                  from over 120,000 reviews <cite>trustpilot.com</cite>. Borrowers frequently praise
                  the quick and easy process and the helpful customer service. (Of course, some
                  reviews mention the high cost – borrowers should be prepared to pay the fees on
                  time to avoid issues.) Overall, as a licensed and long-running company, Advance
                  America is a top-rated choice for payday loans in CA in terms of reliability and
                  speed.
                </p>
              </div>

              {/* Check 'n Go */}
              <div id="check-n-go" className={cls.lenderReview}>
                <h3 className={cls.lenderName}>Check 'n Go Review</h3>
                <p>
                  Check 'n Go is a national payday loan and installment loan company that operates
                  online in California (and has some partner store locations under the Allied Cash
                  Advance name). They've been helping customers with short-term loans for over 20
                  years. In California, Check 'n Go offers online payday loans with straightforward
                  terms.
                </p>
                <h4 className={cls.loanSubheading}>Loan amounts & terms:</h4>
                <p>
                  Up to $255 for California borrowers. The loan term is typically until your next
                  paycheck (anywhere from about 2 to 4 weeks, but not beyond 31 days). You'll
                  generally write a check or set up an ACH for the loan amount plus fee, dated to
                  your payday.
                </p>
                <h4 className={cls.loanSubheading}>Fees:</h4>
                <p>
                  Check 'n Go charges the standard California fee: 15% of the face amount of the
                  loan. For instance, borrowing $255 will incur a $45 fee. There are no hidden fees.
                  If you cannot repay on time, by law they cannot charge extra interest for
                  extending the time (though they may not offer an extension by default){' '}
                  <cite>dfpi.ca.gov</cite>. The cost is high (roughly 460% APR for a 2-week loan),
                  so make sure you understand the fee before proceeding.
                </p>
                <h4 className={cls.loanSubheading}>Eligibility requirements:</h4>
                <p>
                  Basic requirements include being at least 18, a resident of California, with a
                  valid ID and Social Security number. You need an active checking account in your
                  name and proof of income (such as recent pay stubs or benefit statements). Check
                  'n Go does not require good credit – they will verify some information but have no
                  minimum credit score. In fact, they consider various income sources (employment,
                  unemployment benefits, Social Security, etc.) as eligible income{' '}
                  <cite>lendedu.com</cite> <cite>lendedu.com</cite>. You cannot have an outstanding
                  payday loan elsewhere in California when applying.
                </p>
                <h4 className={cls.loanSubheading}>Application process:</h4>
                <p>
                  Online: You can complete the entire process on Check 'n Go's website. The
                  application will ask for personal info, income details, and bank account info for
                  funding/repayment. It's a quick process with an almost instant decision in many
                  cases. If approved, you sign the loan agreement electronically. In-store: While
                  Check 'n Go's own branded stores are limited in California, they partner with
                  Allied Cash Advance centers in some cities. In-store applications can yield cash
                  in hand immediately. Online approvals are typically funded by the next business
                  day (via direct deposit to your bank) <cite>lendedu.com</cite>. Note: You cannot
                  pick up an online-approved loan in a store; online loans are funded via bank
                  deposit.
                </p>
                <h4 className={cls.loanSubheading}>Speed of funding:</h4>
                <p>
                  Fast: If you apply online and are approved, Check 'n Go usually deposits the money
                  by the following business day into your account <cite>lendedu.com</cite>. Some
                  customers applying early in the day have reported same-day deposits, but generally
                  expect next-day. If you go to a physical location (Allied Cash Advance), you can
                  get cash on the spot during the visit. Either way, funding is quick – much quicker
                  than a traditional bank loan.
                </p>
                <h4 className={cls.loanSubheading}>Reputation & reviews:</h4>
                <p>
                  Check 'n Go has a strong online reputation for customer service and ease of use.
                  Trustpilot shows a 4.5/5 star rating based on nearly 10,000 customer reviews{' '}
                  <cite>lendedu.com</cite>, indicating most users find the service reliable and
                  convenient. Customers often mention the simple application and helpful staff. The
                  company is also rated A+ by the BBB (though not accredited), reflecting that they
                  respond to complaints. Some negative feedback exists, mainly about the high cost
                  (which is inherent to payday loans) and aggressive collections if a loan goes
                  unpaid. Overall, Check 'n Go is viewed as a credible and customer-friendly lender,
                  making it a solid choice for a quick online payday loan in California.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className={cls.contentSection}>
          <div className={cls.container}>
            <h2 id="conclusion" className={cls.sectionTitle}>
              Conclusion: Making an Informed Decision
            </h2>
            <div className={cls.sectionDivider}></div>
            <div className={cls.content}>
              <p>
                Payday loans in California can be a quick fix for urgent cash needs, but they come
                with significant costs and risks. It's encouraging that California law provides
                protections – capping the loan size and fees, and prohibiting rollovers – yet the
                fees are still substantial (about $45 on a $255 loan{' '}
                <cite>cashloansdirect.com</cite>). Before taking a payday loan, it's wise to explore
                alternatives if possible: for example, asking for an extension from creditors,
                borrowing from friends/family, or looking into installment loans or credit union
                loans which might have lower interest.
              </p>
              <p>
                The lenders reviewed above are among the best in the payday loan business – they are
                licensed, transparent, and fast – but even so, the DFPI warns that payday loans can
                "pull you into a cycle of debt" if used repeatedly <cite>dfpi.ca.gov</cite>. If you
                do choose to borrow a payday loan online in California, use the information in this
                guide to compare lenders and select a reputable one that suits your needs (consider
                things like how fast you need the money, and any special features like ACE's 72-hour
                cancellation or Speedy Cash's 24/7 instant funding). Borrow only what you truly need
                and have a plan to pay it off on time. All these lenders will electronically
                withdraw the payment on the due date, so ensure the funds are in your account to
                avoid overdrafts and additional fees.
              </p>
              <p>
                Finally, remember to check the lender's license and read the loan agreement
                carefully before signing. When used responsibly and infrequently, a payday loan can
                be a useful financial tool for addressing short-term emergencies. But always go in
                with full awareness of the costs and your obligations. By being informed – about
                California's laws, your rights, and the lender's terms – you can better protect
                yourself even when borrowing under the pressure of an emergency. Good luck, and
                borrow safely!
              </p>
            </div>
          </div>
        </section>

        {/* Sources Section */}
        <section className={cls.contentSectionAlt}>
          <div className={cls.container}>
            <h2 id="sources" className={cls.sectionTitle}>
              Sources
            </h2>
            <div className={cls.sectionDivider}></div>
            <div className={cls.sourcesList}>
              <p>
                California Department of Financial Protection & Innovation – "Payday Loans & Cash
                Advances: What Consumers Need to Know" (California payday loan legality and limits){' '}
                <cite>dfpi.ca.gov</cite> <cite>dfpi.ca.gov</cite>.
              </p>
              <p>
                Cash Loans Direct – "Beginner's Guide to Applying for Payday Loans in California"
                (State law details on loan caps, fees, APR) <cite>cashloansdirect.com</cite>{' '}
                <cite>cashloansdirect.com</cite>.
              </p>
              <p>
                ACE Cash Express – California Payday Loan FAQs (example of loan terms, 31-day limit,
                one-at-a-time rule) <cite>acecashexpress.com</cite> <cite>acecashexpress.com</cite>.
              </p>
              <p>
                Trustpilot – Customer Ratings (Advance America 4.9★/5 <cite>trustpilot.com</cite>,
                ACE Cash Express 4.7★ <cite>trustpilot.com</cite>, Check 'n Go 4.5★{' '}
                <cite>lendedu.com</cite>, Speedy Cash 4.4★ <cite>trustpilot.com</cite>, Moneytree
                Yelp ~3.8★ <cite>1firstcashadvance.org</cite>, Check City 4.9★{' '}
                <cite>trustpilot.com</cite>).
              </p>
              <p>
                1F Cash Advance – Lender Reviews (Funding speeds: Speedy Cash instant funding{' '}
                <cite>1firstcashadvance.org</cite>, Moneytree instant and ACH funding times{' '}
                <cite>1firstcashadvance.org</cite> <cite>1firstcashadvance.org</cite>; Moneytree
                company background and reputation) <cite>1firstcashadvance.org</cite>{' '}
                <cite>1firstcashadvance.org</cite>.
              </p>
              <p>
                LendEDU – "Check 'n Go Review 2025" (Customer feedback: Trustpilot rating 4.5★, BBB
                info) <cite>lendedu.com</cite> <cite>lendedu.com</cite>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

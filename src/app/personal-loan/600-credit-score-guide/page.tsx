'use client';
/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/lib';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import cls from './Article600.module.scss';

const TABLE_OF_CONTENTS = [
  'What is a 600 Credit Score Personal Loan?',
  'Can You Get a Personal Loan with a 600 Credit Score?',
  'What to Expect: Rates, Terms, and Loan Amounts',
  'Top Lenders for a 600 Credit Score in 2026',
  'Step-by-Step: How to Apply',
  'How a 600 Credit Score Compares',
  'Alternatives to Personal Loans',
  'Frequently Asked Questions',
];

const LENDERS = [
  { name: 'Upstart', apr: '6.20–35.99%', min: 'No minimum score', badge: 'Uses AI + education & employment data' },
  { name: 'Avant', apr: '9.95–35.99%', min: 'Min score: 550', badge: 'Fast funding — next business day' },
  { name: 'LendingPoint', apr: '9.99–35.99%', min: 'Min score: 620', badge: 'Strong income can offset lower score' },
  { name: 'Prosper', apr: '8.99–35.99%', min: 'Min score: 560', badge: 'Joint applications; peer-to-peer model' },
];

const FAQS = [
  {
    q: 'Will applying for a personal loan hurt my credit score?',
    a: 'Pre-qualifying uses a soft pull — no score impact. A hard inquiry when you formally apply may temporarily lower your score by 2–5 points, fading within 3–6 months.',
  },
  {
    q: 'Can I get a personal loan with no credit check?',
    a: 'Legitimate lenders always perform at least a soft credit check. "No credit check" loans are typically predatory payday products with APRs exceeding 300%. Avoid them.',
  },
  {
    q: 'How do I improve my chances of approval with a 600 credit score?',
    a: 'Apply with a co-signer, reduce your DTI by paying down existing debt, request a smaller loan amount, and pre-qualify with multiple lenders to find the best match.',
  },
  {
    q: 'What credit score do I need to get a personal loan?',
    a: 'Most online lenders accept scores as low as 550–600. Traditional banks typically require 660–700. Credit unions are often more flexible for members.',
  },
  {
    q: 'How much can I borrow with a 600 credit score?',
    a: 'Most lenders approve $1,000–$35,000 depending on your income and DTI ratio. Borrowers with higher income and lower existing debt qualify for larger amounts.',
  },
  {
    q: 'Can I get a debt consolidation loan with a 600 credit score?',
    a: 'Yes — many lenders approve debt consolidation loans for fair-credit borrowers, provided income is sufficient to cover the new payment.',
  },
  {
    q: 'How long does it take to get funded?',
    a: 'Online lenders typically fund within 1–3 business days. Avant and Upstart offer next-day or same-day funding if you sign documents before their daily cutoff.',
  },
  {
    q: 'How long does it take to go from 600 to 700?',
    a: 'Typically 6–12 months of on-time payments, low credit utilization (under 30%), and no new hard inquiries.',
  },
  {
    q: 'What should I do if my application is denied?',
    a: 'Read the adverse action letter, then try applying with a co-signer, requesting a smaller amount, or exploring secured loan and credit union options.',
  },
  {
    q: 'Can I get a credit card with a 600 credit score?',
    a: 'Yes — a 600 score qualifies for several unsecured credit-building cards and secured credit cards. Responsible use helps build your score toward better products.',
  },
];

export default function CreditScore600GuidePage() {
  const [activeSection, setActiveSection] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [progressWidth, setProgressWidth] = useState('0%');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  /* ── Scroll spy + progress bar ── */
  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        // Progress bar
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgressWidth(docHeight > 0 ? `${Math.min(100, (scrollTop / docHeight) * 100)}%` : '0%');

        // Active section
        const fromTop = scrollTop + 120;
        let active = 0;
        sectionRefs.current.forEach((el, i) => {
          if (el && el.offsetTop <= fromTop) active = i;
        });
        setActiveSection(active);
        rafId = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(index);
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = 'How to Get a Personal Loan with a 600 Credit Score in 2026';
    if (platform === 'link') navigator.clipboard?.writeText(url);
    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className={cls.progressBar} style={{ width: progressWidth }} aria-hidden="true" />

      {/* ── HERO BANNER ── */}
      <div className={cls.heroBanner}>
        <p className={cls.heroBreadcrumb}>
          <AppLink href="/">Home</AppLink>
          <span>›</span>
          <AppLink href="/personal-loan/best-personal-loans">Personal Loans</AppLink>
          <span>›</span>
          600 Credit Score Guide
        </p>
        <div className={cls.heroBadge}>Personal Loan Guide · 2026</div>
        <h1 className={cls.heroTitle}>How to Get a Personal Loan with a 600 Credit Score in 2026</h1>
        <div className={cls.heroMeta}>
          <span>May 12, 2026</span>
          <span className={cls.heroMetaDot} />
          <span>By Sarah Martinez</span>
          <span className={cls.heroMetaDot} />
          <span>12 min read</span>
          <span className={cls.heroMetaDot} />
          <span>Last updated: May 2026</span>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className={cls.statsBar}>
        {[
          { value: '15–36%', label: 'Typical APR Range' },
          { value: '$1K–$35K', label: 'Loan Amounts' },
          { value: '1–3 Days', label: 'Funding Speed' },
          { value: '560+', label: 'Min Score Accepted' },
          { value: '4+', label: 'Lenders Available' },
        ].map((s) => (
          <div key={s.label} className={cls.statItem}>
            <div className={cls.statValue}>{s.value}</div>
            <div className={cls.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── INLINE CTA (tablet/mobile) ── */}
      <div className={cls.pageWrapper}>
        <div style={{ gridColumn: '1 / -1' }}>
          <div className={cls.inlineCta}>
            <div className={cls.inlineCtaTitle}>Ready to Apply?</div>
            <p className={cls.inlineCtaSub}>Compare personalized loan offers in minutes. No impact to your credit score.</p>
            <AppLink href="https://apply.onlineloans.org/apply" target="_blank" rel="noopener noreferrer" className={cls.inlineCtaBtn}>
              Check My Rate →
            </AppLink>
            <p className={cls.inlineCtaNote}>Soft pull only · No commitment required</p>
          </div>
        </div>
      </div>

      {/* ── MAIN 3-COLUMN LAYOUT ── */}
      <div className={cls.pageWrapper}>

        {/* ── LEFT SIDEBAR ── */}
        <aside className={cls.sidebarLeft}>
          {/* Author */}
          <div className={cls.authorCard}>
            <p className={cls.authorLabel}>Written by</p>
            <div className={cls.authorRow}>
              <div className={cls.authorAvatar}>SM</div>
              <div>
                <p className={cls.authorName}>Sarah Martinez</p>
                <p className={cls.authorRole}>Personal Finance Writer · CFP</p>
              </div>
            </div>
            <p className={cls.authorBio}>
              Certified financial planner with 10+ years helping consumers make informed borrowing decisions.
              Specializes in debt management and credit optimization.
            </p>
          </div>

          {/* TOC */}
          <div className={cls.tocCard}>
            <p className={cls.tocTitle}>On This Page</p>
            <ul className={cls.tocList}>
              {TABLE_OF_CONTENTS.map((item, i) => (
                <li
                  key={i}
                  className={classNames(cls.tocItem, { [cls.tocItemActive]: activeSection === i })}
                  onClick={() => scrollTo(i)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Share */}
          <div className={cls.shareCard}>
            <p className={cls.shareTitle}>Share This Article</p>
            <div className={cls.shareBtns}>
              <button className={cls.shareBtn} onClick={() => handleShare('link')} aria-label="Copy link" title="Copy link">🔗</button>
              <button className={cls.shareBtn} onClick={() => handleShare('facebook')} aria-label="Share on Facebook" title="Share on Facebook">f</button>
              <button className={cls.shareBtn} onClick={() => handleShare('twitter')} aria-label="Share on Twitter" title="Share on Twitter">𝕏</button>
            </div>
          </div>
        </aside>

        {/* ── ARTICLE CONTENT ── */}
        <main className={cls.articleContent}>

          {/* Section 1 — Definition */}
          <article
            ref={(el) => { sectionRefs.current[0] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>Definition</span>
            <h2 className={cls.sectionTitle}>What is a 600 Credit Score Personal Loan?</h2>
            <Image
              src="/personal-loan/600-credit-score-guide/image-1.webp"
              alt="Person reviewing personal loan options on a laptop showing a 600 FICO credit score dashboard with loan offers and score factors"
              width={800}
              height={450}
              className={cls.articleImg}
              priority
            />
            <p className={cls.articleP}>
              A <strong>600 credit score personal loan</strong> is an unsecured installment loan available to borrowers
              with a &quot;Fair&quot; FICO score or VantageScore — typically defined as a score between 580 and 669.
              Borrowers in this fair credit range are not disqualified from personal loans, but they face higher
              interest rates (APRs) and stricter income verification requirements than borrowers with good or
              excellent credit (670+). According to FICO&apos;s scoring model, approximately 17% of U.S. consumers
              fall in the Fair credit range, making this a common borrowing tier.
            </p>

            {/* Score Meter */}
            <div className={cls.scoreMeter}>
              <p className={cls.meterLabel}>Your Credit Score Position</p>
              <div className={cls.meterBar}>
                <div className={cls.meterPointer} />
              </div>
              <div className={cls.meterTiers}>
                <span>Poor<br />300</span>
                <span>Fair<br />580</span>
                <span>Good<br />670</span>
                <span>Very Good<br />740</span>
                <span>Exceptional<br />800</span>
              </div>
            </div>

            <blockquote className={cls.quoteBlock}>
              <p className={cls.quoteText}>
                &quot;Only about 50% of Americans are considered prime credit based on their credit scores and
                traditional credit reports... there is a whole another third of the country that would have been
                able to pay you back, but you would erroneously disqualify.&quot;
              </p>
              <cite className={cls.quoteCite}>— Dave Girouard, Co-founder &amp; CEO, Upstart</cite>
            </blockquote>
          </article>

          {/* Section 2 — Approval */}
          <article
            ref={(el) => { sectionRefs.current[1] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>Approval</span>
            <h2 className={cls.sectionTitle}>Can You Get a Personal Loan with a 600 Credit Score?</h2>
            <Image
              src="/personal-loan/600-credit-score-guide/image-2.webp"
              alt="Credit score infographic showing a meter with 600 in the Fair range (580–669), surrounded by callouts for loan approval, interest rates, repayment terms, and lender partnership"
              width={800}
              height={450}
              className={cls.articleImg}
            />
            <p className={cls.articleP}>
              <strong>Yes.</strong> A 600 credit score qualifies for personal loans from multiple online lenders and
              credit unions. While traditional banks typically require a minimum score of 660–700, online lenders
              such as Upstart, Avant, and LendingPoint specifically serve fair-credit borrowers and accept scores
              as low as 550–600.
            </p>
            <blockquote className={cls.quoteBlock}>
              <p className={cls.quoteText}>
                &quot;Our goal is to create a new financial ecosystem where customers can access the resources they
                need for every step in their financial journey.&quot;
              </p>
              <cite className={cls.quoteCite}>— Tom Burnside, CEO, LendingPoint</cite>
            </blockquote>
            <p className={cls.articleP}>The key factors lenders evaluate beyond your credit score include:</p>
            <ul className={cls.articleUl}>
              <li><strong>Debt-to-income (DTI) ratio</strong> — most lenders prefer a DTI below 36–40%, which compares your monthly debt payments to your gross monthly income.</li>
              <li><strong>Stable, verifiable income</strong> — recent pay stubs, W-2s, or tax returns prove your ability to repay.</li>
              <li><strong>Employment history</strong> — consistent employment signals lower repayment risk to underwriting algorithms.</li>
              <li><strong>Existing debt obligations</strong> — fewer open credit accounts with low balances (low credit utilization) improve your approval odds.</li>
            </ul>
          </article>

          {/* Section 3 — Rates & Terms */}
          <article
            ref={(el) => { sectionRefs.current[2] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>Rates &amp; Terms</span>
            <h2 className={cls.sectionTitle}>What to Expect: Rates, Terms, and Loan Amounts</h2>
            <p className={cls.articleP}>Borrowers with a 600 credit score should expect the following loan terms based on current market data:</p>
            <div className={cls.tableWrap}>
              <table className={cls.dataTable}>
                <thead>
                  <tr>
                    <th>Loan Feature</th>
                    <th>Typical Range for 600 Credit Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['APR (Annual Percentage Rate)', '15.00% – 35.99%'],
                    ['Loan Amount', '$1,000 – $35,000'],
                    ['Repayment Term', '24 – 60 months'],
                    ['Origination Fee', '1% – 10% of loan amount'],
                    ['Funding Speed', '1 – 5 business days'],
                  ].map(([feature, range], i) => (
                    <tr key={i}>
                      <td><strong>{feature}</strong></td>
                      <td>{range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={cls.tipBox}>
              <span className={cls.tipIcon}>💡</span>
              <p className={cls.tipText}>
                Watch out for origination fees — they are deducted directly from your loan proceeds before funding.
                A $10,000 loan with a 5% origination fee means you receive $9,500.
              </p>
            </div>
            <blockquote className={cls.quoteBlock}>
              <p className={cls.quoteText}>
                &quot;A personal loan is a unique borrowing tool because it offers structure, predictability, and
                versatility all in one product... Personal loans can be useful in the right circumstances, but
                they are not a one-size-fits-all solution.&quot;
              </p>
              <cite className={cls.quoteCite}>— David Kimball, Chairman &amp; CEO, Prosper</cite>
            </blockquote>
          </article>

          {/* Section 4 — Lenders */}
          <article
            ref={(el) => { sectionRefs.current[3] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>Lender Comparison</span>
            <h2 className={cls.sectionTitle}>Top Lenders for a 600 Credit Score in 2026</h2>
            <p className={cls.articleP}>
              Several online lenders cater specifically to borrowers with{' '}
              <AppLink href="/personal-loan/fair-credit">fair credit</AppLink>. The following lenders accept
              scores around 600 and offer transparent pre-qualification with no hard credit pull:
            </p>
            <div className={cls.lenderGrid}>
              {LENDERS.map((l) => (
                <div key={l.name} className={cls.lenderCard}>
                  <p className={cls.lenderName}>{l.name}</p>
                  <p className={cls.lenderAprLabel}>APR Range</p>
                  <p className={cls.lenderApr}>{l.apr}</p>
                  <p className={cls.lenderMin}>{l.min}</p>
                  <span className={cls.lenderBadge}>{l.badge}</span>
                </div>
              ))}
            </div>
            <div className={cls.tipBox}>
              <span className={cls.tipIcon}>✅</span>
              <p className={cls.tipText}>
                <strong>Pro tip:</strong> Pre-qualifying with 3–4 lenders takes under 10 minutes and uses only
                soft credit pulls — no score impact. Always compare the full APR, not just the monthly payment.
              </p>
            </div>
            <p className={cls.articleP}>
              For a broader comparison, see our guide to the{' '}
              <AppLink href="/personal-loan/best-personal-loans">best personal loans for fair credit</AppLink>.
            </p>
          </article>

          {/* Section 5 — How to Apply */}
          <article
            ref={(el) => { sectionRefs.current[4] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>How to Apply</span>
            <h2 className={cls.sectionTitle}>Step-by-Step: How to Apply for a Personal Loan</h2>
            <ul className={cls.stepsList}>
              {[
                {
                  title: 'Check your credit report for errors',
                  desc: 'Pull your free reports from Equifax, Experian, and TransUnion at AnnualCreditReport.com. The FTC reports 1 in 5 consumers has an error. Disputing inaccuracies can raise your score within 30–45 days.',
                },
                {
                  title: 'Gather your income documents',
                  desc: 'Prepare recent pay stubs (last 30 days), two most recent W-2s or tax returns, and bank statements showing consistent deposits.',
                },
                {
                  title: 'Pre-qualify with multiple lenders',
                  desc: 'Soft-pull pre-qualification (also known as checking your rate) shows your estimated rate and amount without affecting your score. Compare at least three offers, focusing on the full APR.',
                },
                {
                  title: 'Consider a co-signer',
                  desc: 'A co-signer with a 700+ score can improve approval odds and reduce your APR by 5–10 percentage points. The co-signer becomes equally responsible for repayment.',
                },
                {
                  title: 'Submit your application and accept the best offer',
                  desc: 'The lender performs a hard inquiry (−2 to −5 points, temporary). Funds arrive in 1–5 business days after approval.',
                },
              ].map((step, i) => (
                <li key={i} className={cls.stepItem}>
                  <div className={cls.stepNum}>{i + 1}</div>
                  <div>
                    <p className={cls.stepTitle}>{step.title}</p>
                    <p className={cls.stepDesc}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* Section 6 — Credit Tiers */}
          <article
            ref={(el) => { sectionRefs.current[5] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>Credit Tiers</span>
            <h2 className={cls.sectionTitle}>How a 600 Credit Score Compares</h2>
            <p className={cls.articleP}>Understanding where a 600 score sits relative to other tiers helps set realistic expectations:</p>
            <div className={cls.tableWrap}>
              <table className={cls.dataTable}>
                <thead>
                  <tr>
                    <th>Credit Tier</th>
                    <th>FICO Range</th>
                    <th>Typical APR</th>
                    <th>Approval Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Exceptional', '800–850', '6%–10%', 'Very Easy', false],
                    ['Very Good', '740–799', '10%–14%', 'Easy', false],
                    ['Good', '670–739', '13%–18%', 'Moderate', false],
                    ['⭐ Fair (You)', '580–669', '15%–36%', 'Harder', true],
                    ['Poor', '300–579', '25%+ or Denied', 'Very Hard', false],
                  ].map(([tier, range, apr, diff, highlight]) => (
                    <tr key={String(tier)} className={highlight ? cls.highlightRow : ''}>
                      <td>{tier}</td>
                      <td>{range}</td>
                      <td>{apr}</td>
                      <td>{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={cls.articleP}>
              For a detailed action plan on moving from Fair to Good credit, read our guide on{' '}
              <AppLink href="/credit-score/credit-score-monitoring">how to improve your credit score</AppLink>.
            </p>
          </article>

          {/* Section 7 — Alternatives */}
          <article
            ref={(el) => { sectionRefs.current[6] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>Alternatives</span>
            <h2 className={cls.sectionTitle}>Alternatives to Personal Loans with a 600 Credit Score</h2>
            <p className={cls.articleP}>
              If personal loan rates are too high, consider these alternatives:
            </p>
            <ul className={cls.articleUl}>
              <li>
                <strong>Credit union loans</strong> — Credit unions are member-owned nonprofits that often offer
                lower rates than online lenders for fair-credit borrowers. The National Credit Union Administration
                (NCUA) caps interest rates at 18% APR for most credit union loans, significantly below the 35.99%
                ceiling at online lenders.
              </li>
              <li>
                <strong>Secured personal loans</strong> — By pledging collateral (a savings account, CD, or vehicle),
                you can often qualify for lower rates even with a 600 score. The lender&apos;s risk is reduced, so
                approval is easier and APRs are lower.
              </li>
              <li>
                <strong>Credit builder loans</strong> — Offered by credit unions and community banks, these small
                loans (typically $300–$1,000) are designed specifically to build credit. Payments are reported to
                all three bureaus, and you receive the funds at the end of the loan term.
              </li>
            </ul>
          </article>

          {/* Section 8 — FAQ */}
          <article
            ref={(el) => { sectionRefs.current[7] = el; }}
            className={cls.articleSection}
          >
            <span className={cls.sectionTag}>FAQ</span>
            <h2 className={cls.sectionTitle}>Frequently Asked Questions</h2>
            {FAQS.map((faq, i) => (
              <div key={i} className={cls.faqItem}>
                <button
                  className={cls.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className={cls.faqIcon}>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className={cls.faqA}>{faq.a}</div>
                )}
              </div>
            ))}
          </article>

          {/* Summary */}
          <article className={cls.articleSection}>
            <span className={cls.sectionTag}>Summary</span>
            <h2 className={cls.sectionTitle}>Key Takeaways</h2>
            <p className={cls.articleP}>
              A 600 credit score qualifies for personal loans from multiple online lenders, though rates will be
              higher than for borrowers with good or excellent credit. The most important steps are to
              pre-qualify with multiple lenders (no credit impact), compare the full APR including origination
              fees, and consider a co-signer if your initial offers are too expensive.
            </p>
            <p className={cls.articleP}>
              If your goal is to lower your borrowing costs long-term, focus on improving your credit score
              toward the 670 threshold — even a 50-point improvement can meaningfully reduce your APR and
              expand your lender options. Paying bills on time, reducing credit card balances below 30%
              utilization, and disputing credit report errors are the three fastest ways to move the needle.
            </p>
          </article>

          {/* Footer disclaimer */}
          <div className={cls.articleFooter}>
            <em>
              This article is for informational purposes only and does not constitute financial advice.
              Loan terms and lender policies are subject to change. Always verify current rates directly
              with lenders before applying. Last updated: May 2026.
            </em>
          </div>

        </main>

        {/* ── RIGHT SIDEBAR ── */}
        <aside className={cls.sidebarRight}>
          {/* CTA Card */}
          <div className={cls.ctaCard}>
            <p className={cls.ctaTitle}>Ready to Apply?</p>
            <p className={cls.ctaSub}>Compare personalized loan offers in minutes. No impact to your credit score.</p>
            <AppLink
              href="https://apply.onlineloans.org/apply"
              target="_blank"
              rel="noopener noreferrer"
              className={cls.ctaBtn}
            >
              Check My Rate →
            </AppLink>
            <p className={cls.ctaNote}>Soft pull only · No commitment required</p>
          </div>

          {/* Contact Card */}
          <div className={cls.contactCard}>
            <p className={cls.contactTitle}>Talk to a Loan Agent</p>
            <p className={cls.contactSub}>Leave your email and we&apos;ll get back to you within 24 hours.</p>
            <form onSubmit={handleContactSubmit}>
              <Input
                name="email"
                value={email}
                onChange={setEmail}
                placeholder="Enter your email"
                type="email"
              />
              <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '10px' }}>
                Submit
              </Button>
            </form>
          </div>

          {/* Trust Signals */}
          <div className={cls.trustCard}>
            <p className={cls.trustTitle}>Why Trust Us</p>
            {[
              { icon: '🔒', text: 'SSL encrypted & secure' },
              { icon: '✅', text: 'CFP reviewed content' },
              { icon: '📊', text: 'Updated monthly with live rates' },
              { icon: '🏦', text: '4+ vetted lender partners' },
            ].map((t) => (
              <div key={t.text} className={cls.trustItem}>
                <div className={cls.trustIcon}>{t.icon}</div>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </aside>

      </div>
    </>
  );
}

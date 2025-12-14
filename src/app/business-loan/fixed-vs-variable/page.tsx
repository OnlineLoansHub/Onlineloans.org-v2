import Script from 'next/script';
import Image from 'next/image';
import { AppLink } from '@/components/ui/AppLink/AppLink';
import { Button } from '@/components/ui/Button/Button';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import cls from './page.module.scss';

export default function FixedVsVariablePage() {
  const faqItems = [
    {
      question: 'Are small business loans fixed or variable?',
      answer:
        'Small business loans can have either fixed or variable interest rates, depending on the lender, loan type, and borrower qualifications. Fixed-rate loans keep the same interest rate for the entire loan term, making payments predictable. Variable-rate loans adjust based on market conditions, typically tied to benchmarks like the prime rate or SOFR.',
    },
    {
      question: 'What is a fixed-rate business loan?',
      answer:
        'A fixed-rate business loan keeps the same interest rate for the entire loan term. This means your monthly payments stay consistent, making it easier to plan your business budget and manage cash flow.',
    },
    {
      question: 'What is a variable-rate business loan?',
      answer:
        'A variable-rate business loan adjusts based on market conditions, often tied to a benchmark like the prime rate or SOFR (Secured Overnight Financing Rate). When rates go down, your interest rate and payment can decrease. When rates go up, your payments may increase.',
    },
    {
      question: 'Which is better: fixed or variable rate business loans?',
      answer:
        'Choose a fixed-rate loan if you prefer stability and predictability. Choose a variable-rate loan if you can handle fluctuating payments and want to benefit from possible rate drops. For most small business owners, a fixed-rate SBA or term loan offers peace of mind, especially when planning long-term finances.',
    },
    {
      question: 'Can I switch from a variable rate to a fixed rate loan?',
      answer:
        "Some lenders may allow you to refinance a variable-rate loan into a fixed-rate loan, but this typically requires a new application and may involve fees. It's best to choose the right rate type from the start based on your business needs and risk tolerance.",
    },
    {
      question: 'How often do variable rates change?',
      answer:
        "Variable rates typically adjust based on the benchmark they're tied to (like prime rate or SOFR). The frequency of adjustments depends on your loan terms—some adjust monthly, quarterly, or annually. Your loan agreement will specify how often and when rate adjustments occur.",
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Are Small Business Loans Fixed or Variable?',
    description:
      'Learn the difference between fixed and variable rate business loans. Compare pros, cons, and real examples to choose the best option for your small business financing needs.',
    author: {
      '@type': 'Person',
      name: 'James',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OnlineLoans.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.onlineloans.org/images/logo/onlineloans-logo.png',
      },
    },
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.onlineloans.org/business-loan/fixed-vs-variable',
    },
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className={cls.article}>
        <div className={cls.container}>
          <header className={cls.header}>
            <div className={cls.coverImageWrapper}>
              <Image
                src="/images/article/fixed-vs-variable.png"
                alt="Fixed vs Variable Business Loans"
                width={1200}
                height={600}
                className={cls.coverImage}
                priority
              />
            </div>
            <h1 className={cls.title}>Are small business loans fixed or variable?</h1>
            <div className={cls.authorSection}>
              <p className={cls.authorBy}>Written by</p>
              <div className={cls.author}>
                <Image
                  src="/images/article/article_author.png"
                  alt="James"
                  width={48}
                  height={48}
                  className={cls.authorImage}
                />
                <div className={cls.authorName}>
                  <p>James</p>
                  <p>Business Finance Expert</p>
                </div>
              </div>
              <p className={cls.authorAbout}>
                James is a business finance expert with over 10 years of experience helping small
                business owners navigate loan options and make informed financing decisions. He
                specializes in SBA loans, term loans, and helping entrepreneurs understand the
                nuances of fixed vs variable rate financing.
              </p>
            </div>
            <p className={cls.intro}>
              This is one of the most common questions small business owners ask when shopping for
              financing. The answer depends on your lender, loan type, and what you qualify for. Let
              me break down both options so you can make the right choice for your business.
            </p>
          </header>

          <div className={cls.content}>
            <section className={cls.questionSection}>
              <h2 className={cls.sectionLabel}>Question (from a small business owner)</h2>
              <div className={cls.questionContent}>
                <p>
                  Hey everyone, I'm in the process of getting a business loan to expand my
                  operations and I keep seeing these terms "fixed rate" and "variable rate"
                  everywhere. I'll be honest, I'm not totally sure what the difference is or which
                  one I should go with.
                </p>
                <p>
                  My business has been running for about 3 years now, and things are going pretty
                  well. I need to borrow around $50k to open a second location. The thing is, I
                  really need to know exactly what my monthly payment will be so I can plan my
                  budget properly. I've heard horror stories about payments suddenly going up with
                  variable rates, but I also don't want to overpay if I don't have to.
                </p>
                <p>
                  Can someone explain the actual difference between fixed and variable rates? And
                  which one makes more sense for someone like me who needs predictable payments? Any
                  advice would be really appreciated.
                </p>
              </div>
            </section>

            <section className={cls.answerSection}>
              <h2 className={cls.sectionLabel}>Answer (from a small business finance expert)</h2>
              <div className={cls.answerContent}>
                <p>
                  Great question. The difference comes down to whether your interest rate stays the
                  same or changes over time. Here's what you need to know:
                </p>

                <h2 className={cls.subheading}>Fixed-rate small business loans</h2>
                <p>
                  A fixed-rate loan locks in your interest rate for the entire loan term. Your
                  monthly payment stays exactly the same from start to finish, which makes budgeting
                  straightforward.
                </p>

                <div className={cls.prosCons}>
                  <div className={cls.pros}>
                    <strong>Pros:</strong>
                    <ul>
                      <li>Predictable payments every month</li>
                      <li>Easier to manage cash flow</li>
                      <li>No surprises if market rates spike</li>
                    </ul>
                  </div>
                  <div className={cls.cons}>
                    <strong>Cons:</strong>
                    <ul>
                      <li>Usually starts with a slightly higher rate compared to variable loans</li>
                      <li>You won't benefit if rates drop</li>
                    </ul>
                  </div>
                </div>

                <div className={cls.example}>
                  <strong>Example:</strong>
                  <p>
                    Say you take out a $50,000 loan at a 10% fixed rate for 5 years. Your payment
                    amount stays the same every month—around $1,062—no matter how market rates
                    change. You can set this in your budget and forget about it.
                  </p>
                </div>

                <h2 className={cls.subheading}>Variable-rate small business loans</h2>
                <p>
                  A variable-rate loan adjusts based on market conditions. Most lenders tie it to a
                  benchmark like the prime rate or SOFR (Secured Overnight Financing Rate). When
                  rates go down, your interest rate and payment can decrease. When rates go up, your
                  payments may increase.
                </p>

                <div className={cls.prosCons}>
                  <div className={cls.pros}>
                    <strong>Pros:</strong>
                    <ul>
                      <li>Potential savings when rates are low</li>
                      <li>Often starts with a lower initial rate</li>
                    </ul>
                  </div>
                  <div className={cls.cons}>
                    <strong>Cons:</strong>
                    <ul>
                      <li>Uncertainty—payments can rise if interest rates increase</li>
                      <li>Harder to budget long-term</li>
                      <li>Could cost more if rates climb significantly</li>
                    </ul>
                  </div>
                </div>

                <div className={cls.example}>
                  <strong>Example:</strong>
                  <p>
                    If your loan's interest rate is prime + 2% and the prime rate rises from 7.5% to
                    8%, your new interest rate becomes 10%. That increases your monthly payment,
                    which could strain your cash flow if you weren't prepared for it.
                  </p>
                </div>

                <h2 className={cls.subheading}>
                  Which option is better for most small businesses?
                </h2>
                <p>
                  For most small business owners, especially those planning long-term finances, a
                  fixed-rate loan offers peace of mind. You know exactly what you're paying each
                  month, which makes cash flow management much simpler.
                </p>
                <p>
                  Choose a fixed-rate loan if you prefer stability and predictability. This is
                  especially true for SBA loans and traditional term loans where you're committing
                  to a longer repayment period.
                </p>
                <p>
                  Choose a variable-rate loan if you can handle fluctuating payments and want to
                  benefit from possible rate drops. This might work if you have strong cash reserves
                  or your revenue is highly seasonal and you can pay more during good months.
                </p>
                <p>
                  Bottom line: if you need something predictable so you can plan your budget—which
                  sounds like your situation—go with a fixed rate. The slightly higher initial rate
                  is usually worth it for the peace of mind and budgeting certainty.
                </p>
              </div>
            </section>

            <section className={cls.summary}>
              <h2 className={cls.summaryTitle}>Summary</h2>
              <p>
                Small business loans can be either fixed or variable. Fixed-rate loans keep the same
                interest rate for the entire term, making payments predictable and easier to budget.
                Variable-rate loans adjust based on market conditions, offering potential savings
                when rates are low but creating uncertainty if rates rise. For most small business
                owners, especially those planning long-term finances, a fixed-rate SBA or term loan
                offers the best balance of predictability and peace of mind.
              </p>
            </section>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faq" className={cls.faqSection}>
          <div className={cls.container}>
            <h2 className={cls.faqTitle}>Frequently Asked Questions</h2>
            <p className={cls.faqDescription}>
              Get answers to common questions about fixed and variable rate business loans.
            </p>
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        <div className={cls.container}>
          <section className={cls.ctaBanner}>
            <div className={cls.ctaContent}>
              <h2 className={cls.ctaTitle}>Ready to Apply for a Business Loan?</h2>
              <p className={cls.ctaDescription}>
                Compare offers from top lenders and get matched with the best business loan options
                for your needs. Fast approval and competitive rates.
              </p>
              <AppLink href="/business-loan/apply" className={cls.ctaLink}>
                <Button variant="primary" className={cls.ctaButton}>
                  Apply for a Business Loan
                </Button>
              </AppLink>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

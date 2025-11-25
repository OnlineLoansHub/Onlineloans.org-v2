'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/lib';
import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
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
                <p>Jake Krasinsky</p>
                <p>Lorem ipsum set dolor</p>
              </div>
            </div>
            <p className={cls.loanAuthorAbout}>
              Jake is a writer, marketer & spreadsheet wrangler{' '}
              <a href="https://sheetsformarketers.com/" target="_blank" rel="noopener noreferrer">
                Sheets for Marketers
              </a>
              . He&apos;s a fan of dogs, SEO & pizza. Sometimes at the same time.
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
                Personal loans provide you with a{' '}
                <strong>lump sum of cash that you can use for almost any purpose.</strong> These
                loans are typically unsecured, meaning you don&apos;t need collateral to get one.
                Instead, lenders will review your income, debts, and credit profile to determine
                whether they can offer you a loan.
                <br />
                <br />
                Terms on personal loans can vary widely. Depending on the lender and your financial
                circumstances, you can get a loan for{' '}
                <strong>
                  as little as $1,000 or as much as $100,000. Interest rates range from 6% to
                  35.99%.
                </strong>{' '}
                <strong>Loan terms vary but are usually between 12 and 60 months.</strong>
                <br />
                <br />
                Unlike other types of loans, like mortgages or business loans, personal loans{' '}
                <strong>offer the flexibility</strong> of using funds on almost anything. That
                includes:
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
                  Home improvement or repairs
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Medical debt
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Sudden expenses, like funerals or fires
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Debt consolidation
                </li>
                <li className={cls.loanArticleListItem}>
                  <Image
                    src="/images/article/check_2.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={cls.loanArticleCheck}
                  />
                  Small business costs
                </li>
              </ul>
              <p className={cls.loanArticleTxt}>
                You can get the funds from personal loans{' '}
                <strong>faster than other types of loans.</strong> Lenders typically deposit funds
                within a few days of approval. Once the money arrives in your bank account,
                you&apos;ll start repaying within 30 days. You&apos;ll have a set monthly bill for
                the term of the loan, though you may pay it off faster if you choose to make
                additional payments.
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
                There are several types of personal loans to choose from:
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
                    <strong>Unsecured: </strong>
                    An unsecured loan doesn&apos;t have any collateral to back it, which usually
                    means it has a higher interest rate compared to a secured loan. It can also be
                    more difficult to get an unsecured loan as lenders require better financial
                    circumstances to qualify.
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
                    <strong>Secured:</strong> This type of loan has collateral, like a car or other
                    valuable item, to back it. If you fail to repay the loan, your lender will use
                    the collateral to recoup their lost funds.
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
                    <strong>Cosigned:</strong> If you&apos;re struggling to get a personal loan due
                    to poor credit or finances, a cosigner could help. The cosigner, which could be
                    a family member or friend, agrees to repay the loan if you cannot.
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
                    <strong>Variable and fixed rate loans:</strong> All loans have either fixed or
                    variable interest rates. With a fixed rate, you pay the same interest rate over
                    the life of the loan. With variable rates, your interest rate fluctuates with
                    the market.
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
                Since personal loans are typically unsecured, they can sometimes be more expensive
                than other types of loans. That said, there are times when getting a personal loan
                can make the most sense.
                <br />
                <br />
                <strong>
                  It&apos;s best to get this type of loan when it is the least expensive form of
                  financing.
                </strong>{' '}
                For example, let&apos;s say you want to open a small business and get a few quotes
                for a business loan. If those loans have higher interest rates than a personal loan,
                then it makes more sense to choose the personal loan.
                <br />
                <br />
                You&apos;ll also need to make sure you can afford the monthly payments. That means
                the payment fits into your budget without having to cut down on your essential
                spending, like groceries or utilities.
                <br />
                <br />
                Additionally, it can make sense to get a personal loan when it will improve your
                financial circumstances.{' '}
                <strong>
                  For example, using a personal loan to improve your house can add value to your
                  home and allow you to make more when you sell it.
                </strong>
                <br />
                <br />
                Personal loans can also help you consolidate debt, which could greatly{' '}
                <strong>improve your finances</strong>. Credit card debt can have high interest
                rates – up to 35.99%. If you carry a balance, that debt multiplies and can be
                impossible to pay off. Getting a{' '}
                <strong>personal loan allows you to pay it all off immediately</strong> and have a
                new set monthly payment that fits into your budget.
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
                Generally speaking, the best personal loans are those that have the lowest APRs,
                minimal fees, and monthly payments you can comfortably afford. Since most personal
                loans are unsecured, your loan terms depend largely on your personal finances.
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
                    To get the best personal loan, you&apos;ll need a strong credit score.
                  </strong>
                  <br />
                  You can boost your credit by reviewing your history. Request your credit report
                  from the three major credit reporting companies: TransUnion, Equifax, and
                  Experian. Then, you can review your reports for any errors that could be lowering
                  your credit score.
                </p>
              </div>
              <p className={cls.loanArticleTxt}>
                At the same time,{' '}
                <strong>
                  try to pay down any outstanding debts if you can, like credit cards. This will
                  improve your DTI
                </strong>{' '}
                (debt-to-income) ratio, which makes you a less risky investment for personal loan
                lenders.
                <br />
                <br />
                On the other hand,{' '}
                <strong>increasing your income can also help improve your DTI ratio.</strong> If
                you&apos;re able to, you might consider picking up more hours at work, looking for a
                part-time job, starting a side hustle, or asking for a raise at work.
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
                Applying for a personal loan is easy, though it&apos;s important to spend time doing
                your research. There are just a few steps to complete.
              </p>
              <p className={cls.loanArticleTitleNumber}>1. Shop around</p>
              <p className={cls.loanArticleTxt}>
                Loan terms can vary greatly from lender to lender, so it&apos;s important to compare
                your options before applying. You can use the table above to compare the pros and
                cons of the top lenders.
                <br />
                <br />
                Once you have 3 to 5 lenders in mind, prequalify with each. This step allows you to
                get personalized rate estimates and terms so you can get a good idea of your loan
                options. Many lenders allow you to prequalify with just a soft credit pull, meaning
                you won&apos;t affect your credit score.
                <br />
                <br />
                Compare your prequalified offers to determine which is the best fit for you.
                Generally speaking, the offer with the lowest APR and monthly payments is usually
                best as it will save you the most money and fit into your budget best.
              </p>
              <p className={cls.loanArticleTitleNumber}>2. Submit an application</p>
              <p className={cls.loanArticleTxt}>
                Once you&apos;ve selected a lender, submit a full application. Applying for a loan
                requires you to provide documentation about your identity and income, like W2s and
                pay stubs. As long as you have the documents ready,{' '}
                <strong>it should take under 30 minutes to complete this step.</strong>
              </p>
              <p className={cls.loanArticleTitleNumber}>
                3. Receive your funds and start repayment
              </p>
              <p className={cls.loanArticleTxt}>
                Most lenders take two to five days to approve your loan and deliver your funds. That
                said, some of the best personal loan lenders can approve you and deliver your money{' '}
                <strong>in just one working day.</strong>
                <br />
                <br />
                You&apos;ll typically start repaying the loan within a month of receiving the funds.
                Many lenders allow you to set up autopay so you never miss a bill. Be sure to make
                full, on-time payments each month to protect your credit score and meet the terms of
                your loan.
              </p>
            </article>

            <div className={cls.loanAction}>
              <p className={cls.loanActionTitle}>Get personal loan offer from CreditNinja now!</p>
              <Button variant="primary" onClick={() => {}} className={cls.loanActionBtn}>
                Apply now
              </Button>
            </div>

            <article
              ref={(el) => {
                articlesRef.current[5] = el;
              }}
              className={cls.loanArticle}
            >
              <h4 className={cls.loanArticleTitle}>Choosing the best lender</h4>
              <p className={cls.loanArticleTxt}>
                The cost of your loan will be the most important factor of your personal loan.
                However, it&apos;s also key to consider your lender. You&apos;ll have to interact
                with it for months or years as you repay the loan, so be sure to compare options.
                <br />
                <br />
                <strong>To get the best personal loans, consider doing the following:</strong>
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
                    <strong>Shop around and research:</strong> Don&apos;t just take the first
                    personal loan you come across. Compare rates, terms, fees, repayment options,
                    and customer service channels to determine which is best for you.
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
                    <strong>Check for customer reviews: </strong>
                    What are other people saying about your chosen lender? If it has a bad
                    reputation, you might want to avoid it. Scan third-party sites, like Google and
                    TrustPilot, for unbiased reviews.
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
                    <strong>Check for hidden costs: </strong>A lender may charge you origination,
                    processing, late, and early repayment fees. Read the fine print to make sure you
                    understand all the costs associated with your loan. The best personal loans have
                    minimal fees. Your lender will be able to explain each fee to you, so don&apos;t
                    be afraid to ask.
                  </div>
                </li>
              </ul>
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
                  <p>Jake Krasinsky</p>
                  <p>Lorem ipsum set dolor</p>
                </div>
              </div>
              <p className={cls.loanAuthorAbout}>
                Jake is a writer, marketer & spreadsheet wrangler{' '}
                <a href="https://sheetsformarketers.com/" target="_blank" rel="noopener noreferrer">
                  Sheets for Marketers
                </a>
                . He&apos;s a fan of dogs, SEO & pizza. Sometimes at the same time.
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

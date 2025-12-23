'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  PawPrint,
  Home as HomeIcon,
  TrendingUp,
  GraduationCap,
  Car,
  Briefcase,
  Wallet,
  Bitcoin,
  Coins,
  Clock,
} from 'lucide-react';
import { ExploreIllustration } from './illustrations/ExploreIllustration';
import { CompareIllustration } from './illustrations/CompareIllustration';
import { ChooseIllustration } from './illustrations/ChooseIllustration';
import { trackHeroCardClick } from '@/lib/impression';
import cls from './HomePage.module.scss';

const categories = [
  { icon: Briefcase, title: 'Business Loans' },
  { icon: HomeIcon, title: 'Mortgage Loans' },
  { icon: GraduationCap, title: 'Student Loans' },
  { icon: Wallet, title: 'Personal Loans' },
  { icon: Car, title: 'Auto Loans' },
  { icon: PawPrint, title: 'Pet Insurance' },
  { icon: TrendingUp, title: 'Credit Score' },
  { icon: Bitcoin, title: 'Crypto Loans' },
  { icon: Coins, title: 'Gold and Silver' },
];

export default function HomePage() {
  const router = useRouter();

  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    cardName: string
  ) => {
    e.preventDefault();
    // Navigate immediately - don't wait for anything
    router.push(href);
    // Send tracking request after navigation starts (fire and forget)
    setTimeout(() => {
      trackHeroCardClick(cardName);
    }, 2000);
  };

  return (
    <div className={cls.container}>
      {/* Hero Section */}
      <section className={cls.heroSection}>
        {/* Professional Diagonal Striped Pattern - Right Bottom Only */}
        <div className={cls.stripedPattern}></div>

        {/* Decorative Wave Pattern - Right Side */}
        <div className={cls.wavePattern}>
          <svg
            viewBox="0 0 400 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M50 0C50 0 150 100 150 200C150 300 50 400 50 500C50 600 150 700 150 700"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
            <path
              d="M100 0C100 0 200 100 200 200C200 300 100 400 100 500C100 600 200 700 200 700"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
            <path
              d="M150 0C150 0 250 100 250 200C250 300 150 400 150 500C150 600 250 700 250 700"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
            <path
              d="M200 0C200 0 300 100 300 200C300 300 200 400 200 500C200 600 300 700 300 700"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
            <path
              d="M250 0C250 0 350 100 350 200C350 300 250 400 250 500C250 600 350 700 350 700"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className={cls.heroContent}>
          {/* Headline */}
          <h1 className={cls.headline}>
            <span className={cls.headlineSpan}>Compare & Choose </span>
            <span className={cls.headlineSpan}>top financial products</span>
          </h1>

          {/* Category Grid */}
          <div className={cls.categoryGrid}>
            {categories.map((category, index) => {
              const IconComponent = category.icon;

              // Map category titles to their respective page URLs
              const hrefMap: Record<string, string> = {
                'Business Loans': '/business-loan/best-business-loans',
                'Mortgage Loans': '/mortgage-loan/best-mortgage-loans',
                'Student Loans': '/student-loan/best-student-loans',
                'Personal Loans': '/personal-loan/best-personal-loans',
                'Auto Loans': '/auto-loan/best-auto-loans',
                'Pet Insurance': '/pet-insurance/best-pet-insurance',
                'Credit Score': '/credit-score/credit-score-monitoring',
                'Crypto Loans': '/crypto-loans/best-crypto-loans',
                'Gold and Silver': '/gold-and-silver/best-gold-and-silver',
              };

              const href = hrefMap[category.title] || '#';

              return (
                <Link
                  key={index}
                  href={href}
                  className={cls.categoryCard}
                  onClick={(e) => handleCardClick(e, href, category.title)}
                >
                  <div className={cls.categoryIconWrapper}>
                    <IconComponent
                      className={cls.categoryIcon}
                      style={{ color: 'var(--color-primary)' }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className={cls.categoryTitle}>{category.title}</span>
                </Link>
              );
            })}
            {/* Coming Soon Card - Mobile Only */}
            <div className={cls.comingSoonCard}>
              <div className={cls.categoryIconWrapper}>
                <Clock
                  className={cls.categoryIcon}
                  style={{ color: '#9ca3af' }}
                  strokeWidth={1.5}
                />
              </div>
              <span className={cls.comingSoonTitle}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Logos Bar */}
      <section className={cls.vendorSection}>
        <div className={cls.vendorContent}>
          {/* Mobile Layout */}
          <div className={cls.vendorMobileLayout}>
            <h3 className={cls.vendorMobileTitle}>
              <span className={cls.vendorTitleNormal}>Explore our</span> <span>Top Vendors:</span>
            </h3>

            <div className={cls.vendorMobileLogos}>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Fundera-logo.webp"
                  alt="Fundera"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Advancefundsnetwork-logo.webp"
                  alt="Advance Funds Network"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/FundBox-logo.webp"
                  alt="Fundbox"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Lendio-logo.webp"
                  alt="Lendio"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/RockSolidFunding-logo.webp"
                  alt="RockSolid"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
              </div>
              <div className={`${cls.vendorLogoCell} ${cls.vendorTextCell}`}>
                <span className={cls.lemonadeText}>Lemonade</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className={cls.vendorDesktopLayout}>
            <div className={cls.vendorDesktopLabel}>
              <div
                className={cls.vendorLabelBar}
                style={{ backgroundColor: 'var(--color-primary)' }}
              ></div>
              <div className={cls.vendorLabelText}>
                <span>Explore our</span>
                <br />
                <span>Top Vendors:</span>
              </div>
            </div>

            {/* Vendor Logos */}
            <div className={cls.vendorLogosContainer}>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Fundera-logo.webp"
                  alt="Fundera"
                  fill
                  className="object-contain"
                  sizes="100px"
                  loading="lazy"
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Advancefundsnetwork-logo.webp"
                  alt="Advance Funds Network"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/FundBox-logo.webp"
                  alt="Fundbox"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Lendio-logo.webp"
                  alt="Lendio"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/RockSolidFunding-logo.webp"
                  alt="RockSolid"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className={`${cls.vendorLogoCell} ${cls.vendorTextCell}`}>
                <span className={cls.lemonadeText}>Lemonade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={cls.howItWorksSection}>
        <div className={cls.howItWorksContent}>
          {/* Section Heading */}
          <h2 className={cls.sectionHeading}>
            We make things <br /> easier for you:
          </h2>

          {/* Cards Grid */}
          <div className={cls.cardsGrid}>
            {/* Card 1 */}
            <div className={cls.card}>
              {/* Step Number */}
              <div className={cls.stepNumber}>1</div>
              {/* Gradient overlay on hover */}
              <div className={cls.gradientOverlay}></div>
              {/* Illustration */}
              <div className={cls.illustrationWrapper}>
                <ExploreIllustration />
              </div>

              {/* Title */}
              <h3 className={cls.cardTitle}>Explore</h3>

              {/* Description */}
              <p className={cls.cardDescription}>
                Get access to accurate and relevant financial insights tailored to your needs. Stay
                informed with real-time updates.
              </p>

              {/* Bottom accent line */}
              <div className={cls.bottomAccent}></div>
            </div>

            {/* Card 2 */}
            <div className={cls.card}>
              {/* Step Number */}
              <div className={cls.stepNumber}>2</div>
              {/* Gradient overlay on hover */}
              <div className={cls.gradientOverlay}></div>
              {/* Illustration */}
              <div className={cls.illustrationWrapper}>
                <CompareIllustration />
              </div>

              {/* Title */}
              <h3 className={cls.cardTitle}>Compare</h3>

              {/* Description */}
              <p className={cls.cardDescription}>
                Easily evaluate different providers and offers side by side. Focus on what matters
                most to make the best decision.
              </p>

              {/* Bottom accent line */}
              <div className={cls.bottomAccent}></div>
            </div>

            {/* Card 3 */}
            <div className={cls.card}>
              {/* Step Number */}
              <div className={cls.stepNumber}>3</div>
              {/* Gradient overlay on hover */}
              <div className={cls.gradientOverlay}></div>
              {/* Illustration */}
              <div className={cls.illustrationWrapper}>
                <ChooseIllustration />
              </div>

              {/* Title */}
              <h3 className={cls.cardTitle}>Choose</h3>

              {/* Description */}
              <p className={cls.cardDescription}>
                Select from a trusted list of providers and move forward knowing you've made a
                well-informed financial choice.
              </p>

              {/* Bottom accent line */}
              <div className={cls.bottomAccent}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PawPrint,
  Home as HomeIcon,
  Heart,
  GraduationCap,
  Layers,
  Briefcase,
  Wallet,
  Landmark,
  Coins,
} from 'lucide-react';
import cls from './HomePage.module.scss';

const categories = [
  { icon: Briefcase, title: 'Business Loans' },
  { icon: PawPrint, title: 'Pet Insurance' },
  { icon: HomeIcon, title: 'Mortgage Loans' },
  { icon: Heart, title: 'Life Insurance' },
  { icon: GraduationCap, title: 'Student Loans' },
  { icon: Layers, title: 'Debt Consolidation' },
  { icon: Wallet, title: 'Personal Loans' },
  { icon: Landmark, title: 'Online Banking' },
  { icon: Coins, title: 'Gold and Silver' },
];

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cls.container}>
      {/* Hero Section */}
      <section className={cls.heroSection}>
        {/* Professional Diagonal Striped Pattern - Right Bottom Only */}
        <div className={cls.stripedPattern}></div>

        {/* Decorative Wave Pattern - Right Side */}
        <div className={cls.wavePattern}>
          <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <h1
            className={`${cls.headline} ${isLoaded ? cls.headlineLoaded : cls.headlineNotLoaded}`}
          >
            <span className={cls.headlineSpan}>Compare & choose </span>
            <span className={cls.headlineSpan}>top financial products</span>
          </h1>

          {/* Category Grid */}
          <div
            className={`${cls.categoryGrid} ${
              isLoaded ? cls.categoryGridLoaded : cls.categoryGridNotLoaded
            }`}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;

              return (
                <Link
                  key={index}
                  href="#"
                  className={`${cls.categoryCard} ${
                    isLoaded ? cls.categoryCardLoaded : cls.categoryCardNotLoaded
                  }`}
                  style={{ transitionDelay: `${150 + index * 30}ms` }}
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
                  src="/images/table/LendingTree-logo.svg"
                  alt="LendingTree"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/table/Sofi-logo.svg"
                  alt="SoFi"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 140px, 80px"
                  priority
                />
              </div>
              <div className={`${cls.vendorLogoCell} ${cls.vendorTextCell}`}>
                <span className={cls.lemonadeText}>Lemonade</span>
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/table/Credible-logo.svg"
                  alt="Credible"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 140px, 96px"
                  priority
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/fundera-logo.svg"
                  alt="Fundera"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Biz2credit-logo.svg"
                  alt="Biz2Credit"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 640px) 140px, 112px"
                  priority
                />
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
                  src="/images/table/LendingTree-logo.svg"
                  alt="LendingTree"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/table/Sofi-logo.svg"
                  alt="SoFi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={`${cls.vendorLogoCell} ${cls.vendorTextCell}`}>
                <span className={cls.lemonadeText}>Lemonade</span>
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/table/Credible-logo.svg"
                  alt="Credible"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/fundera-logo.svg"
                  alt="Fundera"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={cls.vendorLogoCell}>
                <Image
                  src="/images/brands-logos/Biz2credit-logo.svg"
                  alt="Biz2Credit"
                  fill
                  className="object-contain"
                />
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
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cls.illustrationSvg}
                >
                  {/* Document */}
                  <rect
                    x="25"
                    y="30"
                    width="50"
                    height="60"
                    rx="3"
                    stroke="#235675"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="25"
                    y="30"
                    width="50"
                    height="12"
                    rx="3"
                    fill="#235675"
                    fillOpacity="0.1"
                  />

                  {/* Document lines */}
                  <line
                    x1="32"
                    y1="48"
                    x2="68"
                    y2="48"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="32"
                    y1="56"
                    x2="65"
                    y2="56"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="32"
                    y1="64"
                    x2="62"
                    y2="64"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />

                  {/* Magnifying glass */}
                  <circle cx="75" cy="35" r="14" stroke="#235675" strokeWidth="2" fill="none" />
                  <line
                    x1="85"
                    y1="45"
                    x2="95"
                    y2="55"
                    stroke="#235675"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Chart bars inside document */}
                  <rect x="35" y="72" width="4" height="12" fill="#235675" fillOpacity="0.4" />
                  <rect x="42" y="68" width="4" height="16" fill="#235675" fillOpacity="0.4" />
                  <rect x="49" y="74" width="4" height="10" fill="#235675" fillOpacity="0.4" />
                  <rect x="56" y="70" width="4" height="14" fill="#235675" fillOpacity="0.4" />
                </svg>
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
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cls.illustrationSvg}
                >
                  {/* Left card */}
                  <rect
                    x="10"
                    y="35"
                    width="40"
                    height="50"
                    rx="3"
                    stroke="#235675"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="10"
                    y="35"
                    width="40"
                    height="10"
                    rx="3"
                    fill="#235675"
                    fillOpacity="0.1"
                  />

                  {/* Right card */}
                  <rect
                    x="70"
                    y="30"
                    width="40"
                    height="55"
                    rx="3"
                    stroke="#235675"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="70"
                    y="30"
                    width="40"
                    height="10"
                    rx="3"
                    fill="#235675"
                    fillOpacity="0.15"
                  />

                  {/* Comparison arrows - bidirectional */}
                  <path d="M55 55 L65 55" stroke="#235675" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M60 50 L65 55 L60 60"
                    stroke="#235675"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* Balance scale indicator */}
                  <line
                    x1="30"
                    y1="60"
                    x2="90"
                    y2="60"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                    strokeOpacity="0.4"
                  />

                  {/* Left card content */}
                  <line
                    x1="18"
                    y1="52"
                    x2="42"
                    y2="52"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="18"
                    y1="60"
                    x2="38"
                    y2="60"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />

                  {/* Right card content */}
                  <line
                    x1="78"
                    y1="47"
                    x2="102"
                    y2="47"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="78"
                    y1="55"
                    x2="100"
                    y2="55"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="78"
                    y1="63"
                    x2="98"
                    y2="63"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                </svg>
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
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cls.illustrationSvg}
                >
                  {/* Shield badge */}
                  <path
                    d="M60 25 L45 30 L45 50 C45 65 55 75 60 85 C65 75 75 65 75 50 L75 30 Z"
                    stroke="#235675"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Checkmark inside shield */}
                  <path
                    d="M52 50 L58 56 L68 44"
                    stroke="#235675"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* Approved document */}
                  <rect
                    x="30"
                    y="70"
                    width="60"
                    height="40"
                    rx="3"
                    stroke="#235675"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="30"
                    y="70"
                    width="60"
                    height="12"
                    rx="3"
                    fill="#235675"
                    fillOpacity="0.1"
                  />

                  {/* Document lines */}
                  <line
                    x1="38"
                    y1="88"
                    x2="82"
                    y2="88"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="38"
                    y1="96"
                    x2="75"
                    y2="96"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                  <line
                    x1="38"
                    y1="104"
                    x2="70"
                    y2="104"
                    stroke="#235675"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                  />
                </svg>
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

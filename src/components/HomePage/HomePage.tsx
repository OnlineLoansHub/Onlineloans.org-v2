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
  Search,
  GitCompare,
  CheckCircle,
} from 'lucide-react';

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, #1e2d4d 50%, #152238 100%)',
        }}
      >
        {/* Professional Diagonal Striped Pattern - Right Bottom Only */}
        <div
          className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent 0px,
                transparent 60px,
                rgba(255, 255, 255, 0.08) 60px,
                rgba(255, 255, 255, 0.08) 61px,
                transparent 61px,
                transparent 120px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent 0px,
                transparent 60px,
                rgba(255, 255, 255, 0.08) 60px,
                rgba(255, 255, 255, 0.08) 61px,
                transparent 61px,
                transparent 120px
              )
            `,
          }}
        ></div>

        {/* Decorative Wave Pattern - Right Side */}
        <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 400 600"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto opacity-[0.2]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Headline */}
          <h1
            className={`font-bold text-white text-center max-w-6xl mx-auto leading-tight text-[30px] sm:text-[48px] px-4 mb-5 sm:mb-12 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ marginTop: '-10px', transitionDelay: '50ms' }}
          >
            <span className="block sm:inline">Compare & choose </span>
            <span className="block sm:inline sm:ml-1">top financial products</span>
          </h1>

          {/* Category Grid */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;

              return (
                <Link
                  key={index}
                  href="#"
                  className={`group bg-white rounded-xl px-3 py-4 lg:px-5 lg:py-6 flex flex-col items-center justify-center gap-2 lg:gap-3 lg:flex-row lg:justify-start lg:gap-4 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 border border-gray-100 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${150 + index * 30}ms` }}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[#e8f4f8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#dceef5] transition-colors">
                    <IconComponent
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      style={{ color: 'var(--color-primary)' }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-xs lg:text-base font-semibold text-gray-800 transition-colors text-center lg:text-left group-hover:[color:var(--color-primary)]">
                    {category.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vendor Logos Bar */}
      <section
        className="w-full border-t border-gray-200 py-8"
        style={{ backgroundColor: '#f2f2f2' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center gap-5 lg:hidden">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
              Explore our <span className="font-bold">Top Vendors:</span>
            </h3>

            <div className="flex flex-col items-center gap-4 w-full max-w-md">
              {/* Row 1 */}
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="relative h-7 w-28">
                  <Image
                    src="/images/table/LendingTree-logo.svg"
                    alt="LendingTree"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="112px"
                    priority
                  />
                </div>
                <div className="relative h-7 w-20">
                  <Image
                    src="/images/table/Sofi-logo.svg"
                    alt="SoFi"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="80px"
                    priority
                  />
                </div>
                <span className="text-2xl font-semibold italic text-[#ff2968]">Lemonade</span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="relative h-6 w-24">
                  <Image
                    src="/images/table/Credible-logo.svg"
                    alt="Credible"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="96px"
                    priority
                  />
                </div>
                <div className="relative h-6 w-28">
                  <Image
                    src="/images/brands-logos/fundera-logo.svg"
                    alt="Fundera"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="112px"
                    priority
                  />
                </div>
                <div className="relative h-6 w-28">
                  <Image
                    src="/images/brands-logos/Biz2credit-logo.svg"
                    alt="Biz2Credit"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="112px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center gap-8 sm:gap-10 lg:gap-14">
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 h-12 rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              ></div>
              <div className="text-base">
                <span className="text-gray-500">Explore our</span>
                <br />
                <span className="font-semibold text-gray-800">Top Vendors:</span>
              </div>
            </div>

            {/* Vendor Logos */}
            <div className="flex items-center justify-center gap-4 lg:gap-6 flex-nowrap">
              <div className="relative h-8 w-28 flex-shrink-0">
                <Image
                  src="/images/table/LendingTree-logo.svg"
                  alt="LendingTree"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-7 w-20 flex-shrink-0">
                <Image
                  src="/images/table/Sofi-logo.svg"
                  alt="SoFi"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold italic text-[#ff2968] flex-shrink-0">
                Lemonade
              </span>
              <div className="relative h-7 w-24 flex-shrink-0">
                <Image
                  src="/images/table/Credible-logo.svg"
                  alt="Credible"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-7 w-28 flex-shrink-0">
                <Image
                  src="/images/brands-logos/fundera-logo.svg"
                  alt="Fundera"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-7 w-28 flex-shrink-0">
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
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2
            className="font-bold text-center sm:text-left text-[30px] sm:text-[40px] leading-[120%] mb-[25px] sm:mb-16"
            style={{ color: '#000' }}
          >
            We make things <br className="sm:hidden" /> easier for you:
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl border-2 border-[#d4eaf2] shadow-md hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/30 p-8 flex flex-col items-center overflow-hidden">
              {/* Step Number */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300 rounded-tl-2xl rounded-br-lg">
                1
              </div>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-transparent transition-all duration-300 rounded-2xl"></div>
              {/* Illustration */}
              <div className="relative z-10 w-full h-32 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 opacity-30 group-hover:opacity-50 rounded-xl blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 flex items-center justify-center group-hover:from-[var(--color-primary)]/20 group-hover:to-[var(--color-primary)]/15 transition-all duration-300">
                  <Search
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: 'var(--color-primary)' }}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 text-center mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                Explore
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-gray-600 text-center leading-relaxed max-w-sm group-hover:text-gray-700 transition-colors duration-300">
                Get access to accurate and relevant financial insights tailored to your needs. Stay
                informed with real-time updates.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl border-2 border-[#d4eaf2] shadow-md hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/30 p-8 flex flex-col items-center overflow-hidden">
              {/* Step Number */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300 rounded-tl-2xl rounded-br-lg">
                2
              </div>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-transparent transition-all duration-300 rounded-2xl"></div>
              {/* Illustration */}
              <div className="relative z-10 w-full h-32 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 opacity-30 group-hover:opacity-50 rounded-xl blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 flex items-center justify-center group-hover:from-[var(--color-primary)]/20 group-hover:to-[var(--color-primary)]/15 transition-all duration-300">
                  <GitCompare
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: 'var(--color-primary)' }}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 text-center mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                Compare
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-gray-600 text-center leading-relaxed max-w-sm group-hover:text-gray-700 transition-colors duration-300">
                Easily evaluate different providers and offers side by side. Focus on what matters
                most to make the best decision.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl border-2 border-[#d4eaf2] shadow-md hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-primary)]/30 p-8 flex flex-col items-center overflow-hidden">
              {/* Step Number */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300 rounded-tl-2xl rounded-br-lg">
                3
              </div>
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-primary)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-transparent transition-all duration-300 rounded-2xl"></div>
              {/* Illustration */}
              <div className="relative z-10 w-full h-32 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 opacity-30 group-hover:opacity-50 rounded-xl blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 flex items-center justify-center group-hover:from-[var(--color-primary)]/20 group-hover:to-[var(--color-primary)]/15 transition-all duration-300">
                  <CheckCircle
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: 'var(--color-primary)' }}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 text-center mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                Choose
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-gray-600 text-center leading-relaxed max-w-sm group-hover:text-gray-700 transition-colors duration-300">
                Select from a trusted list of providers and move forward knowing you've made a
                well-informed financial choice.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

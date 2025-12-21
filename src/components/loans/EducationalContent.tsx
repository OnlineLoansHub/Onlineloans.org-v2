import React from 'react';
import {
  BookOpen,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Clock,
  FileText,
} from 'lucide-react';

interface Section {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  bullets?: string[];
}

const sections: Section[] = [
  {
    id: 'what-is',
    icon: BookOpen,
    title: 'What is a Business Loan?',
    content: `A business loan is a financial product that provides capital to businesses for various purposes, such as expanding operations, purchasing equipment, managing cash flow, or covering unexpected expenses. Unlike personal loans, business loans are designed specifically for commercial use and typically offer higher borrowing limits and specialized terms tailored to business needs.

Business loans come in many forms, including term loans, lines of credit, SBA loans, equipment financing, and merchant cash advances. Each type serves different business needs and has unique qualification requirements, interest rates, and repayment terms.`,
  },
  {
    id: 'types',
    icon: FileText,
    title: 'Types of Business Loans',
    content: `**Term Loans** are the most traditional form of business financing. You receive a lump sum upfront and repay it over a set period with fixed or variable interest rates. Term loans are ideal for large, one-time investments.

**Business Lines of Credit** provide flexible access to funds up to a predetermined limit. You only pay interest on the amount you use, making it perfect for managing cash flow fluctuations or unexpected expenses.

**SBA Loans** are government-backed loans offered through the Small Business Administration. They typically offer lower interest rates and longer repayment terms but have stricter eligibility requirements and longer approval processes.

**Equipment Financing** specifically funds the purchase of business equipment, with the equipment itself serving as collateral. This makes it easier to qualify and often offers competitive rates.

**Working Capital Loans** help businesses cover day-to-day operational expenses like payroll, rent, and inventory. These are usually short-term loans with quick approval processes.`,
    bullets: [
      'Term Loans: Best for major investments',
      'Lines of Credit: Best for flexible funding needs',
      'SBA Loans: Best rates for qualified businesses',
      'Equipment Financing: Best for purchasing equipment',
      'Working Capital: Best for operational expenses',
    ],
  },
  {
    id: 'how-to-qualify',
    icon: CheckCircle,
    title: 'How to Qualify for a Business Loan',
    content: `Qualifying for a business loan depends on several factors that lenders evaluate to assess your creditworthiness and ability to repay. Understanding these criteria can help you prepare your application and improve your chances of approval.

**Credit Score**: Most lenders require a minimum personal credit score of 600-680, though some may accept lower scores. A higher credit score typically means better rates and terms.

**Time in Business**: Many lenders prefer businesses that have been operating for at least 1-2 years. Startups may need to explore alternative financing options or provide additional documentation.

**Annual Revenue**: Lenders want to see consistent revenue that demonstrates your ability to repay the loan. Minimum requirements vary but often range from $50,000 to $250,000 annually.

**Collateral**: Some loans require collateral—assets that the lender can seize if you default. This can include real estate, equipment, inventory, or accounts receivable.`,
    bullets: [
      'Maintain a credit score above 650',
      'Document at least 1 year in business',
      'Show consistent monthly revenue',
      'Prepare financial statements and tax returns',
      'Consider what collateral you can offer',
    ],
  },
  {
    id: 'costs',
    icon: DollarSign,
    title: 'Understanding Business Loan Costs',
    content: `When evaluating business loans, it's important to look beyond the advertised interest rate and understand the total cost of borrowing. Several factors contribute to the overall expense of a business loan.

**Interest Rates**: Business loan interest rates typically range from 6% to 30% APR, depending on the loan type, your creditworthiness, and the lender. Traditional bank loans often offer the lowest rates, while online lenders may charge higher rates for the convenience of faster approval.

**Origination Fees**: Many lenders charge an origination fee, typically 1-5% of the loan amount, which is either deducted from your loan proceeds or added to your balance.

**Factor Rates**: Some short-term loans use factor rates instead of interest rates. A factor rate of 1.2 on a $100,000 loan means you'll repay $120,000 total. Factor rates can make loans appear less expensive than they actually are.

**Prepayment Penalties**: Some loans charge fees for paying off your balance early. Always check for prepayment penalties before signing.`,
  },
  {
    id: 'timeline',
    icon: Clock,
    title: 'Business Loan Application Timeline',
    content: `The time from application to funding varies significantly depending on the type of loan and lender you choose. Understanding typical timelines can help you plan accordingly.

**Online Lenders**: Often provide decisions within hours or days, with funding as fast as 24-48 hours after approval. Best for urgent funding needs.

**Traditional Banks**: Usually take 2-4 weeks for approval and funding. The longer timeline often comes with lower rates and higher loan amounts.

**SBA Loans**: Can take 30-90 days from application to funding due to the additional government paperwork and requirements. Worth the wait for qualified businesses seeking the best terms.

**Credit Unions**: Typically fall between banks and online lenders, with approval taking 1-2 weeks.`,
  },
  {
    id: 'tips',
    icon: TrendingUp,
    title: 'Tips for Getting the Best Business Loan',
    content: `Securing the best business loan terms requires preparation and strategic thinking. Here are expert tips to help you get the most favorable deal.`,
    bullets: [
      'Compare multiple lenders before committing',
      'Improve your credit score before applying',
      'Prepare a detailed business plan',
      'Organize financial documents in advance',
      'Consider the total cost, not just interest rates',
      'Read all terms and conditions carefully',
      'Ask about prepayment options and penalties',
      'Negotiate terms when possible',
    ],
  },
];

export default function EducationalContent() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Business Loans: Everything You Need to Know
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive guide to understanding, qualifying for, and choosing the right business
            loan for your needs.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-50 rounded-xl p-6 mb-10">
          <h3 className="font-semibold text-slate-900 mb-4">In This Guide</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#235675] transition-colors py-1"
              >
                <span className="w-5 h-5 rounded-full bg-[#235675]/10 text-[#235675] flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </span>
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-xl bg-[#235675]/10">
                    <Icon className="w-6 h-6 text-[#235675]" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 pt-1">
                    {section.title}
                  </h3>
                </div>

                <div className="prose prose-slate max-w-none">
                  {section.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-600 leading-relaxed mb-4">
                      {paragraph.split('**').map((part, i) =>
                        i % 2 === 0 ? (
                          part
                        ) : (
                          <strong key={i} className="text-slate-800">
                            {part}
                          </strong>
                        )
                      )}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


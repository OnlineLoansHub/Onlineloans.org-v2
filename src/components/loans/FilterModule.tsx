'use client';

import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp, X, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

interface FilterOptions {
  loanType: {
    label: string;
    options: Array<{ value: string; label: string }>;
  };
  monthlyRevenue: {
    label: string;
    options: Array<{ value: string; label: string }>;
  };
  timeInBusiness: {
    label: string;
    options: Array<{ value: string; label: string }>;
  };
  creditScore: {
    label: string;
    options: Array<{ value: string; label: string }>;
  };
  loanAmount: {
    label: string;
    options: Array<{ value: string; label: string }>;
  };
}

const filterOptions: FilterOptions = {
  loanType: {
    label: 'Loan Type',
    options: [
      { value: 'all', label: 'Show all' },
      { value: 'business_loan', label: 'Business Loan' },
      { value: 'line_of_credit', label: 'Line of Credit' },
      { value: 'working_capital', label: 'Working Capital' },
      { value: 'sba', label: 'SBA' },
      { value: 'other', label: 'Other' },
    ],
  },
  monthlyRevenue: {
    label: 'Monthly Revenue',
    options: [
      { value: 'all', label: 'Show all' },
      { value: 'more_30k', label: 'More than $30K' },
      { value: '20k_30k', label: '$20K–$30K' },
      { value: '10k_20k', label: '$10K–$20K' },
      { value: 'less_10k', label: 'Less than $10K' },
    ],
  },
  timeInBusiness: {
    label: 'Time in Business',
    options: [
      { value: 'all', label: 'Show all' },
      { value: '2_plus', label: '2+ years' },
      { value: '1_2', label: '1–2 years' },
      { value: '6m_1y', label: '6 months–1 year' },
      { value: '0_6m', label: '0–6 months' },
    ],
  },
  creditScore: {
    label: 'Credit Score',
    options: [
      { value: 'all', label: 'Show all' },
      { value: 'excellent', label: 'Excellent (720–850)' },
      { value: 'good', label: 'Good (690–719)' },
      { value: 'fair', label: 'Fair (630–689)' },
      { value: 'poor', label: 'Poor (350–629)' },
    ],
  },
  loanAmount: {
    label: 'Loan Amount',
    options: [
      { value: 'all', label: 'Show all' },
      { value: 'under_10k', label: 'Under $10,000' },
      { value: '10k_50k', label: '$10,000–$50,000' },
      { value: '50k_100k', label: '$50,000–$100,000' },
      { value: '100k_plus', label: '$100,000+' },
    ],
  },
};

interface Filters {
  loanType: string;
  monthlyRevenue: string;
  timeInBusiness: string;
  creditScore: string;
  loanAmount: string;
}

interface FilterModuleProps {
  filters: Filters;
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
  resultCount: number;
}

interface FilterSectionProps {
  filterKey: string;
  config: FilterOptions[keyof FilterOptions];
  value: string;
  onChange: (key: string, value: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

function FilterSection({
  filterKey,
  config,
  value,
  onChange,
  isExpanded,
  onToggle,
}: FilterSectionProps) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 px-4 hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-slate-700">{config.label}</span>
        <div className="flex items-center gap-2">
          {value !== 'all' && (
            <span className="text-xs bg-[#235675] text-white px-2 py-0.5 rounded-full">1</span>
          )}
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="overflow-hidden transition-all duration-200">
          <div className="px-4 pb-3 space-y-1">
            {config.options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  name={filterKey}
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => onChange(filterKey, option.value)}
                  className="w-4 h-4 text-[#235675] border-slate-300 focus:ring-[#235675]"
                />
                <span className="text-sm text-slate-600">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FilterModule({
  filters,
  onFilterChange,
  onReset,
  resultCount,
}: FilterModuleProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    loanType: true,
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const activeFilterCount = Object.values(filters).filter((v) => v !== 'all').length;

  const FilterContent = () => (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#235675]" />
          <span className="font-semibold text-slate-800">Filter By</span>
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#235675] transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      {Object.entries(filterOptions).map(([key, config]) => (
        <FilterSection
          key={key}
          filterKey={key}
          config={config}
          value={filters[key as keyof Filters]}
          onChange={onFilterChange}
          isExpanded={expandedSections[key] || false}
          onToggle={() => toggleSection(key)}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <FilterContent />
        <div className="mt-4 text-center text-sm text-slate-500">
          <span className="font-medium text-slate-700">{resultCount}</span> results found
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="secondary"
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full flex items-center justify-center gap-2 !text-black"
          style={{
            padding: '6px 16px',
            border: '1px solid #e5e7eb',
            fontSize: '14px',
            borderRadius: '12px',
            height: 'auto',
            minHeight: 'auto',
            color: '#000000',
          }}
        >
          <Filter className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-[#235675] text-white text-xs px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <FilterContent />
              <Button
                variant="primary"
                className="w-full mt-4 bg-[#235675] hover:bg-[#1a4259]"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Show {resultCount} results
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}


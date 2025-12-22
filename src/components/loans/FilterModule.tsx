'use client';

import React, { useState, useCallback } from 'react';
import { Filter, ChevronDown, ChevronUp, X, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterConfig {
  label: string;
  options: FilterOption[];
}

type FilterKey = 'loanType' | 'monthlyRevenue' | 'timeInBusiness' | 'creditScore' | 'loanAmount';

interface Filters {
  loanType: string;
  monthlyRevenue: string;
  timeInBusiness: string;
  creditScore: string;
  loanAmount: string;
}

interface FilterModuleProps {
  filters: Record<string, string>;
  filterConfig: Record<string, FilterConfig>;
  filterOrder: string[];
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
  resultCount: number;
}

// Filter Section Component
interface FilterSectionProps {
  filterKey: string;
  config: FilterConfig;
  selectedValue: string;
  isExpanded: boolean;
  onValueChange: (value: string) => void;
  onToggle: () => void;
}

function FilterSection({
  filterKey,
  config,
  selectedValue,
  isExpanded,
  onValueChange,
  onToggle,
}: FilterSectionProps) {
  const handleOptionClick = useCallback(
    (value: string) => {
      onValueChange(value);
    },
    [onValueChange]
  );

  const hasActiveFilter = selectedValue !== 'all';

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      {/* Section Header */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="w-full flex items-center justify-between py-4 px-5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-900 text-sm">{config.label}</span>
          {hasActiveFilter && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-xs font-medium">
              1
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-black" />
          ) : (
            <ChevronDown className="w-5 h-5 text-black" />
          )}
        </div>
      </button>

      {/* Options List */}
      {isExpanded && (
        <div className="pb-4 px-5">
          <div className="space-y-2">
            {config.options.map((option) => {
              const isSelected = selectedValue === option.value;
              const inputId = `${filterKey}-${option.value}`;

              return (
                <div
                  key={`${filterKey}-${option.value}`}
                  className={`
                    flex items-center gap-3 py-2.5 px-3 rounded cursor-pointer transition-all
                    ${isSelected ? 'bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20' : 'hover:bg-slate-50'}
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOptionClick(option.value);
                  }}
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      id={inputId}
                      name={filterKey}
                      value={option.value}
                      checked={isSelected}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleOptionClick(e.target.value);
                      }}
                      className="w-4 h-4 text-[var(--color-primary)] border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-0 cursor-pointer"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                      </div>
                    )}
                  </div>
                  <label
                    htmlFor={inputId}
                    className={`
                      text-sm flex-1 cursor-pointer select-none
                      ${isSelected ? 'text-[var(--color-primary)] font-medium' : 'text-slate-700'}
                    `}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionClick(option.value);
                    }}
                  >
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FilterModule({
  filters,
  filterConfig,
  filterOrder,
  onFilterChange,
  onReset,
  resultCount,
}: FilterModuleProps) {
  // Initialize expanded sections - first one expanded by default
  const initialExpanded: Record<string, boolean> = {};
  filterOrder.forEach((key, index) => {
    initialExpanded[key] = index === 0;
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(initialExpanded);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleSection = useCallback((key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleValueChange = useCallback(
    (key: string, value: string) => {
      onFilterChange(key, value);
    },
    [onFilterChange]
  );

  const handleOpenMobileFilters = useCallback(() => {
    const resetExpanded: Record<string, boolean> = {};
    filterOrder.forEach((key, index) => {
      resetExpanded[key] = index === 0;
    });
    setExpandedSections(resetExpanded);
    setMobileFiltersOpen(true);
  }, []);

  const handleReset = useCallback(() => {
    onReset();
    setExpandedSections({
      loanType: true,
      monthlyRevenue: false,
      timeInBusiness: false,
      creditScore: false,
      loanAmount: false,
    });
  }, [onReset]);

  const activeFilterCount = Object.values(filters).filter((v) => v !== 'all').length;

  const filterContent = (
    <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-[var(--color-primary)]/10 rounded">
            <Filter className="w-4 h-4 text-[var(--color-primary)]" />
          </div>
          <span className="font-bold text-slate-900 text-base">Filters</span>
        </div>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-primary)] hover:bg-slate-100 rounded transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        )}
      </div>

      {/* Filter Sections */}
      <div className="divide-y divide-slate-200">
        {filterOrder.map((key) => {
          const config = filterConfig[key];
          const selectedValue = filters[key] || 'all';

          return (
            <FilterSection
              key={key}
              filterKey={key}
              config={config}
              selectedValue={selectedValue}
              isExpanded={expandedSections[key] || false}
              onValueChange={(value) => handleValueChange(key, value)}
              onToggle={() => toggleSection(key)}
            />
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        {filterContent}
        <div className="mt-5 text-center">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">{resultCount}</span> results found
          </p>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden" style={{ flex: '1', minWidth: 0, maxWidth: '40%' }}>
        <button
          type="button"
          onClick={handleOpenMobileFilters}
          className="w-full flex items-center justify-center gap-1.5 text-sm font-normal text-black bg-white hover:bg-slate-50 transition-colors"
          style={{
            padding: '6px 16px',
            border: '1px solid #e5e7eb',
            fontSize: '14px',
            fontWeight: 'normal',
            lineHeight: '1.25rem',
            borderRadius: '6px',
            height: 'auto',
            minHeight: 'auto',
            color: '#000000',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Filter className="w-3.5 h-3.5" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="bg-[var(--color-primary)] text-white text-xs px-1.5 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Filter Popup */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1001] lg:hidden transition-opacity"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-0 z-[1002] lg:hidden flex items-center justify-center p-4 pointer-events-none">
            <div
              className="bg-white rounded shadow-2xl w-full max-w-md max-h-[75vh] flex flex-col pointer-events-auto animate-in fade-in zoom-in-95 duration-200"
              style={{
                maxHeight: '75vh',
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 flex-shrink-0 bg-gradient-to-r from-slate-50 to-white">
                <h3 className="font-bold text-lg text-slate-900">Filters</h3>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 hover:bg-slate-100 active:bg-slate-200 rounded transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1">
                <div className="p-4">{filterContent}</div>
              </div>

              {/* Mobile Footer */}
              <div className="px-5 py-4 border-t border-slate-200 flex-shrink-0 bg-slate-50/50">
                <Button
                  variant="primary"
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 rounded shadow-sm"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Show {resultCount} Results
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

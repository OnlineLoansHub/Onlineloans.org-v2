'use client';

import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { Select } from '@/components/ui/Select/Select';
import type { Option } from '@/components/ui/Select/Select';

interface SortControlProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

const sortOptions: Option[] = [
  { value: 'ourScore', label: 'Our Score' },
  { value: 'trustpilotScore', label: 'Trustpilot' },
  { value: 'brandReputation', label: 'Brand Reputation' },
  { value: 'popularityScore', label: 'Popularity' },
];

export default function SortControl({ sortBy, onSortChange }: SortControlProps) {
  return (
    <div className="flex items-center gap-1.5 lg:gap-3 w-full lg:w-auto">
      <ArrowUpDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
      <span className="text-sm text-slate-500 whitespace-nowrap flex-shrink-0">Sort by:</span>
      <Select
        name="sort"
        value={sortBy}
        onChange={(value) => onSortChange(String(value))}
        options={sortOptions}
        placeholder="Select..."
        className="!w-auto flex-1 lg:!w-auto sort-control-select"
        buttonClassName="!h-auto !text-sm !font-normal !text-black"
        buttonStyle={{
          padding: '6px 16px',
          border: '1px solid #e5e7eb',
          fontSize: '14px',
          borderRadius: '6px',
          height: 'auto',
          minHeight: 'auto',
          width: '100%',
          color: '#000000',
        }}
        optionStyle={{
          fontSize: '14px',
        }}
      />
    </div>
  );
}

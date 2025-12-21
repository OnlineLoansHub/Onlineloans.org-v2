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
  { value: 'totalScore', label: 'Our Score' },
  { value: 'trustpilotScore', label: 'Trustpilot' },
  { value: 'popularityScore', label: 'Popularity' },
  { value: 'brandReputation', label: 'Brand Reputation' },
];

export default function SortControl({ sortBy, onSortChange }: SortControlProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 text-sm text-slate-500 whitespace-nowrap">
        <ArrowUpDown className="w-4 h-4" />
        <span>Sort by:</span>
      </div>
      <Select
        name="sort"
        value={sortBy}
        onChange={(value) => onSortChange(String(value))}
        options={sortOptions}
        placeholder="Select..."
        className="!w-auto"
        buttonClassName="!h-auto !text-sm !font-normal !text-black"
        buttonStyle={{
          padding: '6px 16px',
          border: '1px solid #e5e7eb',
          fontSize: '14px',
          borderRadius: '12px',
          height: 'auto',
          minHeight: 'auto',
          width: '120px',
          color: '#000000',
        }}
        optionStyle={{
          fontSize: '14px',
        }}
      />
    </div>
  );
}


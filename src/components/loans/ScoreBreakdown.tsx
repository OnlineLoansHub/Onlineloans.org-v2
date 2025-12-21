import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface ScoreBreakdownProps {
  trustpilotScore: number | null;
  brandReputation: number | null;
  popularityScore: number | null;
  reviewCount: number | null;
}

export default function ScoreBreakdown({
  trustpilotScore,
  brandReputation,
  popularityScore,
  reviewCount,
}: ScoreBreakdownProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scores = [
    {
      label: 'Trustpilot Score',
      value: trustpilotScore,
      helper: `Based on ${reviewCount?.toLocaleString() || 'N/A'} User Reviews`,
      tooltip: 'Score derived from verified Trustpilot reviews',
    },
    {
      label: 'Brand Reputation',
      value: brandReputation,
      helper: 'Based on web trends',
      tooltip: 'Calculated from website traffic and visibility metrics',
    },
    {
      label: 'Popularity Score',
      value: popularityScore,
      helper: 'Based on user visits',
      tooltip: 'Based on visits to this provider over the last 30 days',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-200">
      {scores.map((score, index) => (
        <div key={index} className="text-center relative">
          <div className="text-2xl font-bold text-[#235675] mb-1">{score.value || '—'}</div>
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-xs text-slate-500 font-medium">{score.label}</span>
            <div
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Info className="w-3 h-3 text-slate-400 cursor-help" />
              {hoveredIndex === index && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded whitespace-nowrap z-10">
                  {score.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
                </div>
              )}
            </div>
          </div>
          <div className="text-xs text-slate-400">{score.helper}</div>
        </div>
      ))}
    </div>
  );
}

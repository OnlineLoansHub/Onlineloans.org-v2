import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  score: number;
  maxScore?: number;
}

export default function StarRating({ score, maxScore = 10 }: StarRatingProps) {
  // Convert 10-point score to 5-star rating
  const starRating = (score / maxScore) * 5;
  const fullStars = Math.floor(starRating);
  const partialStar = starRating - fullStars;
  const emptyStars = 5 - Math.ceil(starRating);

  return (
    <div className="flex items-center gap-0.5">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}

      {/* Partial star */}
      {partialStar > 0 && (
        <div className="relative">
          <Star className="w-4 h-4 text-slate-200" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-slate-200" />
      ))}
    </div>
  );
}


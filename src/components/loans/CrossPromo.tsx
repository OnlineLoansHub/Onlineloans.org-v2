import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import StarRating from './StarRating';

interface RelatedProvider {
  id: number;
  name: string;
  score: number;
  description: string;
  ctaUrl: string;
}

const relatedProviders: RelatedProvider[] = [
  {
    id: 1,
    name: 'Mercury',
    score: 9.6,
    description: 'Best for startups and tech companies',
    ctaUrl: '#',
  },
  {
    id: 2,
    name: 'Bluevine',
    score: 9.4,
    description: 'Best for small business checking',
    ctaUrl: '#',
  },
  {
    id: 3,
    name: 'Relay',
    score: 9.2,
    description: 'Best for expense management',
    ctaUrl: '#',
  },
];

export default function CrossPromo() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-primary)]/10 rounded mb-4">
            <Building2 className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-[var(--color-primary)]">Related Services</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Are you looking to open a business account?
          </h2>
          <p className="text-lg text-slate-600">
            Explore the best online business checking accounts
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {relatedProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded border border-slate-200 p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="h-8 px-3 rounded bg-slate-100 flex items-center">
                  <span className="font-bold text-slate-700">{provider.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-[var(--color-primary)]">{provider.score}</div>
                  <div className="text-xs text-black">Score</div>
                </div>
              </div>

              <div className="mb-4">
                <StarRating score={provider.score} />
              </div>

              <p className="text-sm text-slate-600 mb-4">{provider.description}</p>

              <Button
                variant="secondary"
                className="w-full group"
                onClick={() => window.open(provider.ctaUrl, '_blank')}
              >
                Explore
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

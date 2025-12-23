import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import StarRating from './StarRating';
import type { CrossPromoConfig } from '@/data/productTypes';
import * as LucideIcons from 'lucide-react';

interface CrossPromoProps {
  crossPromoConfig: CrossPromoConfig;
}

export default function CrossPromo({ crossPromoConfig }: CrossPromoProps) {
  // Get icon component dynamically
  const IconComponent = crossPromoConfig.icon
    ? (LucideIcons[crossPromoConfig.icon as keyof typeof LucideIcons] as React.ComponentType<{
        className?: string;
      }>)
    : Building2;

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-primary)]/10 rounded mb-4">
            <IconComponent className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-[var(--color-primary)]">
              Related Services
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            {crossPromoConfig.title}
          </h2>
          <p className="text-lg text-slate-600">{crossPromoConfig.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {crossPromoConfig.relatedProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded border border-slate-200 p-5 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="h-8 px-3 rounded bg-slate-100 flex items-center">
                  <span className="font-bold text-slate-700">{provider.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-[var(--color-primary)]">
                    {provider.score}
                  </div>
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

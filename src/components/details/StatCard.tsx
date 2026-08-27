import React from 'react';
import type { StatItem } from './DetailsTypes';

export const StatCard: React.FC<StatItem> = ({ icon: Icon, label, value, subtext }) => (
  <div className="group flex h-full items-start gap-4 rounded-2xl border border-dark-green/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-dark-green text-cream transition-all duration-300 group-hover:bg-gold-accent group-hover:text-dark-green">
      <Icon size={22} />
    </span>
    <div className="min-w-0">
      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-dark-green/55">
        {label}
      </span>
      <span className="mt-1 block text-2xl font-bold text-dark-green">{value}</span>
      <span className="mt-1 block text-sm leading-relaxed text-dark-green/65">{subtext}</span>
    </div>
  </div>
);

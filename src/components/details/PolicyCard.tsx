import React from 'react';
import type { PolicyItem } from './DetailsTypes';

export const PolicyCard: React.FC<PolicyItem> = ({ icon: Icon, title, text }) => (
  <div className="group flex items-start gap-4 rounded-2xl border border-dark-green/10 bg-white/95 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-dark-green text-cream transition-all duration-300 group-hover:bg-gold-accent group-hover:text-dark-green">
      <Icon size={22} />
    </span>
    <div>
      <h3 className="text-base font-semibold text-dark-green">{title}</h3>
      {text ? <p className="mt-1 text-sm leading-relaxed text-dark-green/65">{text}</p> : null}
    </div>
  </div>
);

import React from 'react';
import type { NoticeItem } from './DetailsTypes';

export const NoticeCard: React.FC<NoticeItem> = ({ icon: Icon, title, text }) => (
  <div className="group flex items-start gap-4 rounded-2xl border border-dark-green/10 bg-cream p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold-accent text-dark-green transition-all duration-300 group-hover:scale-105">
      <Icon size={20} />
    </span>
    <div>
      <h3 className="text-xl font-semibold text-dark-green">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-text-dark">{text}</p>
    </div>
  </div>
);

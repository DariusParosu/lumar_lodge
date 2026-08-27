import React from 'react';

interface SectionLabelProps {
  text: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ text }) => (
  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-accent">{text}</p>
);

import React from 'react';
import { Trees } from 'lucide-react';
import type { OutdoorFeature } from './DetailsTypes';

const FeatureChip: React.FC<OutdoorFeature> = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-dark-green/10 bg-white px-4 py-2 text-sm font-medium text-dark-green shadow-sm">
    {label}
  </span>
);

interface OutdoorHeroProps {
  imageSrc: string;
  imageAlt: string;
  badge: string;
  title: string;
  text: string;
  features: OutdoorFeature[];
}

export const OutdoorHero: React.FC<OutdoorHeroProps> = ({
  imageSrc,
  imageAlt,
  badge,
  title,
  text,
  features,
}) => (
  <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
    <div className="group relative overflow-hidden rounded-3xl shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-green/10 via-transparent to-gold-accent/20 transition-transform duration-500 group-hover:scale-105" />
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[28rem]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-green/45 via-dark-green/10 to-transparent" />
      <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/80 px-4 py-2 text-sm font-semibold text-dark-green backdrop-blur">
        {badge}
      </div>
    </div>

    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-accent text-dark-green shadow-sm">
          <Trees size={22} />
        </span>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-gold-accent to-transparent" />
      </div>

      <h2 className="font-display text-4xl font-bold text-dark-green md:text-5xl">{title}</h2>

      <p className="mt-4 max-w-xl text-lg leading-relaxed text-dark-green/70">{text}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {features.map((feature) => (
          <FeatureChip key={feature.label} {...feature} />
        ))}
      </div>
    </div>
  </div>
);

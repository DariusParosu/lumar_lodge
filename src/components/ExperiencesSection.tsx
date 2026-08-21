import React from 'react';
import { Card } from './Card';
import { Attraction } from './ExperiencesData';

interface ExperiencesProps {
  name: string;
  icon: React.ReactNode;
  items: Attraction[];
}

export const ExperiencesSection: React.FC<ExperiencesProps> = ({
 name,
 icon,
 items,
}) => {
  return (
    <section className="mb-16">
      <div className="text-gold-accent flex justify-center items-center max-w-7xl mx-auto mb-12 gap-2">
        {icon}
        <h3 className="font-display text-3xl font-bold">
          {name}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
        {items.map((attraction, index) => (
          <Card
            key={index}
            {...attraction}
          />
        ))}
      </div>
    </section>
  );
};
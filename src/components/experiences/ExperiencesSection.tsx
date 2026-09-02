import React from 'react';
import { Card } from './Card';
import { Attraction } from '../../data/experiences';
import {Link} from "react-router-dom";

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
    <section className="mb-20">
      <div className="text-dark-green flex justify-center items-center gap-3 mb-12 animate-in fade-in">
        <div className="bg-dark-green text-cream p-3 rounded-full shadow-lg">
          {icon}
        </div>
        <h3 className="font-display text-4xl font-bold">
          {name}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
        {items.map((attraction) => (
          <Link
            to={attraction.link}>
            <Card
              key={`${name}-${attraction.title}`}
              {...attraction}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

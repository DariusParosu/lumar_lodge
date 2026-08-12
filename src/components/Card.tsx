import React from 'react';
import { MapPin } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  location?: string;
  cta?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon,
  location,
  cta = 'Explore'
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition group cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Icon & Title */}
        <div className="flex items-start mb-4">
          {icon && <div className="mr-3 text-gold-accent">{icon}</div>}
          <h3 className="font-display text-2xl font-bold text-dark-green">
            {title}
          </h3>
        </div>

        {/* Location */}
        {location && (
          <div className="flex items-center text-text-dark text-sm mb-3 font-body">
            <MapPin size={16} className="mr-2 text-gold-accent" />
            {location}
          </div>
        )}

        {/* Description */}
        <p className="text-text-dark font-body mb-4 leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <button className="w-full bg-dark-green text-cream py-2 rounded-lg hover:bg-opacity-90 transition font-semibold font-body">
          {cta}
        </button>
      </div>
    </div>
  );
};

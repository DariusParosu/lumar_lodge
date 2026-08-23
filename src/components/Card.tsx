import React from 'react';
import { MapPin } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  map: string;
  location: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  map,
  location,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition group cursor-pointer">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <iframe
          title={`${title} map`}
          width="100%"
          height="100%"
          src={ map }
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Icon & Title */}
        <div className="flex items-start mb-4">
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
      </div>
    </div>
  );
};

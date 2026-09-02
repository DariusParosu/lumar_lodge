import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
    >
      {/* Map Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200 group-hover:scale-110 transition-transform duration-500">
        <iframe
          title={`${title} map`}
          width="100%"
          height="100%"
          src={map}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-dark-green/50 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* Border Accent */}
        <div className="absolute inset-0 border-2 border-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-t-xl" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-display text-2xl font-bold text-dark-green mb-2 group-hover:text-gold-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Location */}
        {location && (
          <div className="flex items-center text-dark-green/70 text-sm mb-3 font-body gap-1">
            <MapPin size={16} className="text-gold-accent flex-shrink-0" />
            <span className="font-semibold">{location}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-text-dark font-body leading-relaxed text-sm">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-2 text-gold-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>{t('experiences.seeLocation')}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

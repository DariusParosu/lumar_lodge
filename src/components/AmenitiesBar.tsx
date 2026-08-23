import React from 'react';
import { Mountain, Utensils, Wifi } from 'lucide-react';

export const AmenitiesBar: React.FC = () => {
  const amenities = [
    {
      icon: Mountain,
      label: 'Priveliște Montană',
      description: 'Vederi spectaculoase'
    },
    {
      icon: Utensils,
      label: 'Grătar & Foișor',
      description: 'Mese în aer liber'
    },
    {
      icon: Wifi,
      label: 'Wi-Fi & Parcare',
      description: 'Conectivitate totală'
    }
  ];

  return (
    <div className="bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon Circle */}
                <div className="bg-gradient-to-br from-dark-green to-dark-green/80 text-cream p-5 rounded-full mb-6 group-hover:from-gold-accent group-hover:to-gold-accent/80 group-hover:text-dark-green shadow-lg transition-all duration-300 transform group-hover:scale-110">
                  <Icon size={40} />
                </div>

                {/* Label */}
                <h3 className="font-display text-2xl font-bold text-dark-green mb-2 group-hover:text-gold-accent transition-colors duration-300">
                  {amenity.label}
                </h3>

                {/* Description */}
                <p className="text-text-dark/70 text-sm font-body leading-relaxed">
                  {amenity.description}
                </p>

                {/* Decorative underline */}
                <div className="mt-4 w-12 h-1 bg-gold-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

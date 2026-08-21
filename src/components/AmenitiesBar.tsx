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
    <div className="bg-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group hover:scale-105 transition"
              >
                <div className="bg-dark-green text-cream p-4 rounded-full mb-4 group-hover:bg-gold-accent transition">
                  <Icon size={32} />
                </div>
                <h3 className="font-display text-lg font-semibold text-dark-green mb-2">
                  {amenity.label}
                </h3>
                <p className="text-text-dark text-sm font-body">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

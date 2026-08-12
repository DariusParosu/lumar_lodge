import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div id="accommodation" className="bg-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
              alt="Lumar Lodge"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl font-bold text-dark-green mb-6">
              Despre Noi
            </h2>

            <p className="font-body text-text-dark mb-4 leading-relaxed">
              Lumar Lodge este o cabană premium situată în Tohanița, aproape de Bran, în inima Carpații Curburii. 
              Oferim o experiență autentică de retragere din agitația cotidianului, combinând confortul modern cu 
              atmosfera tradițională montană.
            </p>

            <p className="font-body text-text-dark mb-6 leading-relaxed">
              Fiecare detaliu a fost gândit cu atenție pentru a vă oferi o ședere memorabilă: din mobilier elegant 
              la facilități de lux, totul este aici pentru a vă asigura relaxare completă.
            </p>

            <button className="bg-gold-accent text-dark-green px-8 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold font-body">
              Explore Accommodations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

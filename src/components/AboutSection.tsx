import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div id="accommodation" className="bg-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/night.jpg"
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
              LuMar Lodge Tohăniță Zarnesti se află în Zărneşti, la 5 km de Castelul Bran, și pune la dispoziție WiFi gratuit, o grădină, o bucătărie comună și un lounge comun. Această proprietate oferă acces la un balcon și parcare privată gratuită.
            </p>

            <p className="font-body text-text-dark mb-4 leading-relaxed">
              Acest chalet cu terasă și vedere la munte include 3 dormitoare, un living, un televizor cu ecran plat, o bucătărie utilată, cu frigider și cuptor, precum și 3 băi cu duș. Acest chalet pune la dispoziția oaspeților prosoape și lenjerie de pat.
            </p>

            <p className="font-body text-text-dark mb-4 leading-relaxed">
              Acest chalet pune la dispoziție un grătar.
            </p>

            <p className="font-body text-text-dark mb-6 leading-relaxed">
              LuMar Lodge Tohăniță Zarnesti se află la 17 km de Dino Parc și la 31 km de Piaţa Sfatului. Aeroportul Internațional Brașov-Ghimbav se află la 30 km.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

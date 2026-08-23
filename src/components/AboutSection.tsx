import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div id="accommodation" className="bg-cream py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <img
              src="/images/night.webp"
              alt="Lumar Lodge"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Border accent */}
            <div className="absolute inset-0 rounded-xl border-2 border-gold-accent/30 group-hover:border-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{marginTop: 'auto'}} />
          </div>

          {/* Content */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-gold-accent to-transparent mb-6" />
            </div>

            <h2 className="font-display text-5xl font-bold text-dark-green mb-6">
              Despre Noi
            </h2>

            <div className="space-y-4">
              <p className="font-body text-text-dark leading-relaxed text-lg">
                LuMar Lodge Tohăniță Zarnesti se află în Zărneşti, la 5 km de Castelul Bran, și pune la dispoziție WiFi gratuit, o grădină, o bucătărie comună și un lounge comun. Această proprietate oferă acces la un balcon și parcare privată gratuită.
              </p>

              <p className="font-body text-text-dark leading-relaxed text-lg">
                Acest chalet cu terasă și vedere la munte include 3 dormitoare, un living, un televizor cu ecran plat, o bucătărie utilată, cu frigider și cuptor, precum și 3 băi cu duș. Acest chalet pune la dispoziția oaspeților prosoape și lenjerie de pat.
              </p>

              <p className="font-body text-text-dark leading-relaxed text-lg">
                Acest chalet pune la dispoziție un grătar.
              </p>

              <p className="font-body text-text-dark leading-relaxed text-lg">
                LuMar Lodge Tohăniță Zarnesti se află la 17 km de Dino Parc și la 31 km de Piaţa Sfatului. Aeroportul Internațional Brașov-Ghimbav se află la 30 km.
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

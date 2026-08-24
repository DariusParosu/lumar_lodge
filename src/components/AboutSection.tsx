import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

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
              {t('about.title')}
            </h2>

            <div className="space-y-4">
              <p className="font-body text-text-dark leading-relaxed text-lg">
                {t('about.description1')}
              </p>

              <p className="font-body text-text-dark leading-relaxed text-lg">
                {t('about.description2')}
              </p>

              <p className="font-body text-text-dark leading-relaxed text-lg">
                {t('about.description3')}
              </p>

              <p className="font-body text-text-dark leading-relaxed text-lg">
                {t('about.description4')}
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-dark-green text-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Lumar Lodge</h3>
            <p className="font-body text-cream/80 leading-relaxed">
              {t('footer.about')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3 font-body text-cream/80">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-gold-accent" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gold-accent" />
                <span>{t('footer.phone')}</span>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden h-48 md:col-span-2 lg:col-span-1">
            <iframe
                title="Lumar Lodge location map"
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.725367239281!2d25.325488979345707!3d45.53644949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3484609a8a593%3A0x609d4bce9c424147!2zTHVNYXIgTG9kZ2UgVG9oxINuacibxIMgWmFybmVzdGk!5e1!3m2!1sro!2sro!4v1786733344837!5m2!1sro!2sro"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

        {/* Social Links & Bottom Text */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=61585662920761&locale=ro_RO" className="text-cream hover:text-gold-accent transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/lumar.lodge/" className="text-cream hover:text-gold-accent transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37m1.5-4.87h.01"/></svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="font-body text-cream/60 text-sm text-center">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

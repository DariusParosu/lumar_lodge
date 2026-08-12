import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-green text-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Lumar Lodge</h3>
            <p className="font-body text-cream/80 leading-relaxed">
              O cabană de lux în inima Carpații Curburii, oferind experiențe autentice și confort premium.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 font-body text-cream/80">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-gold-accent" />
                <span>Tohanița, Bran, Brașov 500036</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gold-accent" />
                <span>+40 (0)268 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gold-accent" />
                <span>info@lumarlodge.ro</span>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden h-48 md:col-span-2 lg:col-span-1">
            <iframe
              width="100%"
              height="100%"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.9891639048087!2d24.920493!3d45.508333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474bba9d0f0f0f0f%3A0x0!2sLumar%20Lodge!5e0!3m2!1sen!2sro!4v123456"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Social Links & Bottom Text */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="/" className="hover:text-gold-accent transition">
                <Facebook size={24} />
              </a>
              <a href="/" className="hover:text-gold-accent transition">
                <Instagram size={24} />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-body text-cream/60 text-sm text-center">
              © 2024 Lumar Lodge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

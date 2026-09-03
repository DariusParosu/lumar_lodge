import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { WHATSAPP_PHONE } from '../../data/constants';
import { trackEvent } from '../../analytics';

export const WhatsAppButton: React.FC = () => {
  const { t } = useTranslation();
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

  const handleClick = () => {
    // Track WhatsApp button click in Google Analytics
    trackEvent('whatsapp_click', {
      category: 'engagement',
      label: 'floating_button',
      timestamp: new Date().toISOString()
    });
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label={t('whatsapp.text')}
    >
      <span className="inline-flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
        <MessageCircle size={32} aria-hidden="true" />
      </span>
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-dark-green px-4 py-2 text-md font-body text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {t('whatsapp.text')}
      </span>
    </a>
  );
};

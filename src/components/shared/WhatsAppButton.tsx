import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const WhatsAppButton: React.FC = () => {
  const { t } = useTranslation();
  const phoneNumber = '+40756294324';
  const message = encodeURIComponent(t('whatsapp.message'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition hover:scale-110 group"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute bottom-full right-0 mb-2 bg-dark-green text-cream px-4 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
        {t('whatsapp.text')}
      </span>
    </a>
  );
};

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+40268123456';
  const message = encodeURIComponent('Salut! Sunt interesat de Lumar Lodge.');
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
        Chat pe WhatsApp
      </span>
    </a>
  );
};

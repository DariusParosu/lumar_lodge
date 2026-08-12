import React from 'react';
import { Card } from './Card';
import { Compass, Castle, UtensilsCrossed } from 'lucide-react';

export const ExperiencesSection: React.FC = () => {
  const experiences = [
    {
      title: 'Trasee de Drumeție',
      description: 'Explorează pădurile Carpații cu ghizi experimentați. Trasee pentru toate nivelele de dificultate cu poveștile munților.',
      image: 'https://images.unsplash.com/photo-1551632440-9e6c5a59f5e2?w=600&h=400&fit=crop',
      icon: <Compass size={24} />,
      location: 'Región Tohanița',
      cta: 'Rezervă Drumeție'
    },
    {
      title: 'Vizita Castelul Bran',
      description: 'Descoperă istoria și legendarele povestiri ale Castelului Bran, situat la doar 15km de cabană.',
      image: 'https://images.unsplash.com/photo-1577720643272-265de1fee0a1?w=600&h=400&fit=crop',
      icon: <Castle size={24} />,
      location: 'Bran, 15km',
      cta: 'Bookează Tur'
    },
    {
      title: 'Gastronomie Locală',
      description: 'Gust mâncăruri tradiționale românești preparate cu ingrediente proaspete locale. Cine autentice și acesorii culinare montane.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
      icon: <UtensilsCrossed size={24} />,
      location: 'Restaurant Partener',
      cta: 'Rezervă Masă'
    }
  ];

  return (
    <div id="experiences" className="bg-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-dark-green mb-4">
            Experiențe Locale
          </h2>
          <p className="font-body text-text-dark max-w-2xl mx-auto text-lg">
            Descoperă atracțiile și activitățile din Tohanița și împrejurimile cabanei
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              {...experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

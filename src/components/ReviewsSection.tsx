import React from 'react';
import { Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Alexandru M.',
      rating: 5,
      text: 'O experiență minunată! Cabana este impecabilă, iar peisajul spectaculos. Vom reveni cu siguranță.',
      date: '2024'
    },
    {
      name: 'Maria T.',
      rating: 5,
      text: 'Ospitalitate excelentă, mâncare delicioasă și o atmosferă care te face să uiți de griji. Recomand cald!',
      date: 'August 2024'
    },
    {
      name: 'Ion P.',
      rating: 5,
      text: 'Locul perfect pentru o escapadă liniștită. Tot ceea ce ai nevoie este acolo, servit cu un zâmbet cald.',
      date: 'Iulie 2024'
    },
    {
      name: 'Elena L.',
      rating: 5,
      text: 'Detaliile de design și confortul sunt de neegalat. Un refugiu cu adevărat special în munți.',
      date: 'Iunie 2024'
    },
  ];

  return (
    <div className="bg-dark-green py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-cream mb-4">
            Recenzii din Oaspeți
          </h2>
          <p className="font-body text-cream text-lg">
            Citește ceea ce spun oaspeții noștri despre Lumar Lodge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-cream rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-gold-accent text-gold-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-text-dark font-body mb-4 italic">
                "{review.text}"
              </p>

              {/* Author & Date */}
              <div className="border-t border-dark-green pt-4">
                <p className="font-display font-semibold text-dark-green">
                  {review.name}
                </p>
                <p className="text-sm text-text-dark font-body">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

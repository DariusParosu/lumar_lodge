import React from 'react';
import { Check } from 'lucide-react';
import type { DetailedAmenityCategory } from './DetailsData';

interface DetailedAmenitiesProps {
  title: string;
  subtitle: string;
  categories: DetailedAmenityCategory[];
}

export const DetailedAmenities: React.FC<DetailedAmenitiesProps> = ({
  title,
  subtitle,
  categories,
}) => {

  return (
    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>

            <ul className="mt-4 space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-900" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

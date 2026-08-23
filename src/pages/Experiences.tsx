import React from 'react';
import '../App.css';
import { ExperiencesSection } from "../components/ExperiencesSection";
import { TreePine, Castle, UtensilsCrossed, Compass } from "lucide-react";
import { ExperiencesData } from "../components/ExperiencesData"; // Ajustează calea către fișierul de date

// Harta pentru asocierea iconițelor în funcție de ID-ul secțiunii
const sectionIcons: Record<string, React.ReactNode> = {
  natura: <TreePine size={24} />,
  atractii: <Castle size={24} />,
  restaurants: <UtensilsCrossed size={24} />,
  transport: <Compass size={24} />,
};

export const Experiences: React.FC = () => {
  return (
    <div id="experiences" className="bg-cream py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl font-bold text-dark-green text-center mb-12">
          Experiențe Locale
        </h2>

        {ExperiencesData.map((section) => (
          <ExperiencesSection
            key={section.id}
            name={section.name}
            icon={sectionIcons[section.id]}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};
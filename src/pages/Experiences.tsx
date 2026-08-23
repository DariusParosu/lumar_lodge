import React from 'react';
import '../App.css';
import { ExperiencesSection } from "../components/ExperiencesSection";
import { TreePine, Castle, UtensilsCrossed, Compass } from "lucide-react";
import { ExperiencesData } from "../components/ExperiencesData";

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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-dark-green mb-3">
            Experiențe Locale
          </h2>
          <p className="text-dark-green/70 text-lg">
            Descoperă atracțiile și destinațiile din jur
          </p>
        </div>

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
import React from 'react';
import '../App.css';
import { ExperiencesSection } from "../components/ExperiencesSection";
import { TreePine, Castle, UtensilsCrossed, Compass } from "lucide-react";
import { useExperiencesData } from "../components/ExperiencesData";
import { useTranslation } from 'react-i18next';

const sectionIcons: Record<string, React.ReactNode> = {
  natura: <TreePine size={24} />,
  atractii: <Castle size={24} />,
  restaurants: <UtensilsCrossed size={24} />,
  transport: <Compass size={24} />,
};

export const Experiences: React.FC = () => {
  const { t } = useTranslation();
  const experiencesData = useExperiencesData();

  return (
    <div id="experiences" className="bg-cream py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-dark-green mb-3">
            {t('experiences.title')}
          </h2>
          <p className="text-dark-green/70 text-lg">
            {t('experiences.subtitle')}
          </p>
        </div>

        {experiencesData.map((section) => (
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

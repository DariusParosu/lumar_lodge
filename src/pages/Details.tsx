import React from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { createDetailsData } from '../data/details';
import { DetailedAmenities } from '../components/details/DetailedAmenities';
import { OutdoorHero } from '../components/details/OutdoorHero';
import { PolicyCard } from '../components/details/PolicyCard';
import { RoomDetailsList } from '../components/details/RoomDetailsList';
import { SectionLabel } from '../components/details/SectionLabel';
import { StatCard } from '../components/details/StatCard';
import '../App.css';

export const Details: React.FC = () => {
  const { t } = useTranslation();
  const {
    propertyFacts,
    scheduleFacts,
    ruleFacts,
    amenityFacts,
    detailedAmenitiesSection,
    detailedAmenities,
    roomConfiguration,
    outdoorFeatures,
    outdoorImage,
  } = createDetailsData(t);

  return (
    <div id="details" className="bg-cream px-4 pb-20 pt-32 xl:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-3 font-display text-5xl font-bold text-dark-green">
            {t('details.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-dark-green/70">
            {t('details.subtitle')}
          </p>
        </div>

        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
          {propertyFacts.map((fact) => (
            <StatCard key={`${fact.label}-${fact.value}`} {...fact} />
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-dark-green/10 bg-white p-6 shadow-md md:p-8">
            <SectionLabel text={t('details.layoutTitle')} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {scheduleFacts.map((fact) => (
                <StatCard key={`${fact.label}-${fact.value}`} {...fact} />
              ))}
            </div>

            <div className="mt-8">
              <SectionLabel text={t('details.roomsTitle')} />
              <RoomDetailsList rooms={roomConfiguration} />
            </div>

            <div className="mt-8">
              <SectionLabel text={t('details.languagesTitle')} />
              <StatCard
                icon={Languages}
                label={t('details.languagesLabel')}
                value={t('details.languagesValue')}
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-dark-green p-6 text-cream shadow-xl md:p-8">
            <div className="relative">
              <SectionLabel text={t('details.rulesSectionTitle')} />
              <div className="grid grid-cols-1 gap-3">
                {ruleFacts.map((fact) => (
                  <PolicyCard key={fact.title} {...fact} />
                ))}
              </div>

              <div className="mt-8">
                <SectionLabel text={t('details.facilitiesTitle')} />
                <div className="grid gap-3">
                  {amenityFacts.map((fact) => (
                    <PolicyCard key={fact.title} {...fact} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-dark-green/10 bg-white p-6 shadow-md md:p-8">
          <OutdoorHero
            imageSrc={outdoorImage.src}
            imageAlt={outdoorImage.alt}
            badge={t('details.gardenBadge')}
            title={t('details.gardenTitle')}
            text={t('details.gardenText')}
            features={outdoorFeatures}
          />
        </section>

        <DetailedAmenities
          title={detailedAmenitiesSection.title}
          subtitle={detailedAmenitiesSection.subtitle}
          categories={detailedAmenities}
        />

        <section className="mt-10 rounded-2xl border border-dark-green/10 bg-white p-6 shadow-md md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-dark-green">
                {t('details.price.title')}
              </h2>
            </div>
            <div className="rounded-2xl border border-gold-accent/20 bg-cream px-6 py-5 text-left shadow-inner md:min-w-72 md:text-right">
              <p className="font-display text-4xl font-bold text-dark-green">
                {t('details.price.value')}
              </p>
              <p className="mt-2 text-sm font-semibold text-dark-green/60">
                {t('details.price.subtitle')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

import React from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { createDetailsData } from '../components/details/DetailsData';
import { NoticeCard } from '../components/details/NoticeCard';
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
    bookingNotes,
    ruleFacts,
    amenityFacts,
    roomConfiguration,
    outdoorFeatures,
    outdoorImage,
  } = createDetailsData(t);

  return (
    <div id="details" className="bg-cream px-4 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-3 font-display text-5xl font-bold text-dark-green">
            {t('details.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-dark-green/70">
            {t('details.subtitle')}
          </p>
        </div>

        <section className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
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

            <div className="mt-6 rounded-2xl border border-gold-accent/20 bg-gradient-to-br from-dark-green/5 to-gold-accent/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-accent">
                {t('details.booking.title')}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-dark-green">
                {t('details.booking.headline')}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-dark-green/70">
                {t('details.booking.text')}
              </p>
              <div className="mt-5 grid gap-3">
                {bookingNotes.map((note) => (
                  <NoticeCard key={note.title} {...note} />
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-dark-green/10 bg-white/80 p-5">
                <SectionLabel text={t('details.usefulInfoTitle')} />
                <h3 className="font-display text-2xl font-bold text-dark-green">
                  {t('details.roomsTitle')}
                </h3>
                <RoomDetailsList rooms={roomConfiguration} />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-dark-green p-6 text-cream shadow-xl md:p-8">
            <div className="relative">
              <SectionLabel text={t('details.rulesSectionTitle')} />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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

              <div className="mt-8">
                <SectionLabel text={t('details.languagesTitle')} />
                <StatCard
                  icon={Languages}
                  label={t('details.languagesLabel')}
                  value={t('details.languagesValue')}
                  subtext={t('details.languagesSubtext')}
                />
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

        <section className="mt-10 rounded-2xl border border-dark-green/10 bg-white p-6 shadow-md md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <SectionLabel text={t('details.price.label')} />
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

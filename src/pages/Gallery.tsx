import React, { useState } from 'react';
import '../App.css';
import { GalleryTab, galleryImages, galleryTabs } from '../components/GalleryData';
import { useTranslation } from 'react-i18next';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>('exterior');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  const tabLabels: Record<GalleryTab, string> = {
    exterior: t('gallery.exterior'),
    kitchen: t('gallery.kitchen'),
    bedrooms: t('gallery.bedrooms'),
    bathrooms: t('gallery.bathrooms'),
  };

  return (
    <div id="gallery" className="bg-cream py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-dark-green mb-3">
            {t('gallery.title')}
          </h2>
          <p className="text-dark-green/70 text-lg">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {galleryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-semibold font-body transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-dark-green text-cream shadow-lg scale-105'
                  : 'bg-white text-dark-green border-2 border-dark-green hover:bg-gold-accent hover:border-gold-accent'
              }`}
            >
              {tabLabels[tab.id]}
              <span className="ml-2 text-sm opacity-75">
                ({galleryImages[tab.id].length})
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid with Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
          {galleryImages[activeTab].map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-cream w-full">
                    <p className="text-sm font-semibold">{t('gallery.viewFullSize')}</p>
                  </div>
                </div>

                {/* Magnifying Glass Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <svg
                      className="w-6 h-6 text-dark-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Border Accent */}
                <div className="absolute inset-0 rounded-xl border-2 border-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-screen w-full animate-in zoom-in duration-300">
            <img
              src={selectedImage}
              alt="Expanded gallery view"
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-accent transition-colors duration-200 text-2xl font-bold"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Close on Escape */}
            <div
              className="absolute inset-0 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

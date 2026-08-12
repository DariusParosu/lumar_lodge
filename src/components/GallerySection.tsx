import React, { useState } from 'react';

type GalleryTab = 'exterior' | 'living' | 'bedrooms';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>('exterior');

  const galleryImages: Record<GalleryTab, Array<{ src: string; alt: string }>> = {
    exterior: [
      { src: 'https://images.unsplash.com/photo-1605276374104-dee2a7a26a28?w=400&h=300&fit=crop', alt: 'Lodge exterior' },
      { src: 'https://images.unsplash.com/photo-1570129477492-45ac003ce338?w=400&h=300&fit=crop', alt: 'Mountain view' },
      { src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop', alt: 'Garden' },
      { src: 'https://images.unsplash.com/photo-1551632440-9e6c5a59f5e2?w=400&h=300&fit=crop', alt: 'Entrance' },
    ],
    living: [
      { src: 'https://images.unsplash.com/photo-1565182999555-2142ee822b33?w=400&h=300&fit=crop', alt: 'Living room' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', alt: 'Fireplace' },
      { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop', alt: 'Furniture' },
      { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop', alt: 'Lounge' },
    ],
    bedrooms: [
      { src: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=400&h=300&fit=crop', alt: 'Master bedroom' },
      { src: 'https://images.unsplash.com/photo-1570129477492-45ac003ce338?w=400&h=300&fit=crop', alt: 'Guest room' },
      { src: 'https://images.unsplash.com/photo-1566909114-f6e7ad7d3136?w=400&h=300&fit=crop', alt: 'Bedroom details' },
      { src: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop', alt: 'Bed detail' },
    ],
  };

  const tabs: Array<{ id: GalleryTab; label: string }> = [
    { id: 'exterior', label: 'Exterior' },
    { id: 'living', label: 'Living' },
    { id: 'bedrooms', label: 'Dormitoare' },
  ];

  return (
    <div id="gallery" className="bg-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-dark-green mb-4">
            Galerie Foto
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold font-body transition ${
                activeTab === tab.id
                  ? 'bg-dark-green text-cream'
                  : 'bg-white text-dark-green border-2 border-dark-green hover:bg-dark-green hover:text-cream'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages[activeTab].map((image, index) => (
            <div
              key={index}
              className="h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

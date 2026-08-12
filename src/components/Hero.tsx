import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative w-full h-screen bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop")',
    }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4 max-w-4xl">
          Refugiul tău din inima munților
        </h1>

        <p className="font-body text-lg md:text-xl text-cream mb-8 max-w-2xl">
          Descoperă liniștea la Lumar Lodge, Tohanița
        </p>

        <button className="bg-gold-accent text-dark-green px-8 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold font-body text-lg">
          Verifică Disponibilitatea
        </button>
      </div>
    </div>
  );
};

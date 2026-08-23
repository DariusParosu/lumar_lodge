import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative w-full h-screen bg-center bg-cover" style={{
      backgroundImage: 'url(/images/HeroBg.webp)',
    }}>
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-4 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          Refugiul tău din inima munților
        </h1>

        {/* Subtitle */}
        <p className="font-body text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Descoperă liniștea la Lumar Lodge, Tohanița
        </p>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-gradient-to-r from-gold-accent via-gold-accent to-transparent mb-8 animate-in fade-in duration-1000" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

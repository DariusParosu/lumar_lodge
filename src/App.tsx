import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AmenitiesBar } from './components/AmenitiesBar';
import { AboutSection } from './components/AboutSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-cream">
      <Navbar />
      <Hero />
      <AmenitiesBar />
      <AboutSection />
      <ExperiencesSection />
      <GallerySection />
      <ReviewsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

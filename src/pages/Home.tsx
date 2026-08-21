import React from 'react';
import '../App.css';
import { Hero } from '../components/Hero';
import { AmenitiesBar } from '../components/AmenitiesBar';
import { AboutSection } from '../components/AboutSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-cream">
      <Hero />
      <AmenitiesBar />
      <AboutSection />
    </div>
  );
}

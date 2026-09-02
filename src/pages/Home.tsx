import React from 'react';
import '../App.css';
import { Hero } from '../components/home/Hero';
import { AmenitiesBar } from '../components/home/AmenitiesBar';
import { AboutSection } from '../components/home/AboutSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-cream">
      <Hero />
      <AmenitiesBar />
      <AboutSection />
    </div>
  );
}

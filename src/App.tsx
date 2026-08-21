import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Experiences } from './pages/Experiences';
import { Gallery } from './pages/Gallery';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-cream">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiente" element={<Experiences />} />
          <Route path="/galerie" element={<Gallery />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Experiences } from './pages/Experiences';
import { Gallery } from './pages/Gallery';
import { Details } from './pages/Details';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const LanguageWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['ro', 'en'].includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      window.location.href = '/ro';
    }
  }, [lang, i18n]);

  if (!lang || !['ro', 'en'].includes(lang)) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiente" element={<Experiences />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/detalii" element={<Details />} />
        <Route path="/details" element={<Details />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

function App() {
  return (
    <div className="bg-cream">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/ro" replace />} />
          <Route path="/:lang/*" element={<LanguageWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

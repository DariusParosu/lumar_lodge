import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import React, { useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { Navbar } from './components/shared/Navbar';
import { Footer } from './components/shared/Footer';
import { WhatsAppButton } from './components/shared/WhatsAppButton';

// Lazy load page components
const Home = React.lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Experiences = React.lazy(() => import('./pages/Experiences').then(m => ({ default: m.Experiences })));
const Gallery = React.lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Details = React.lazy(() => import('./pages/Details').then(m => ({ default: m.Details })));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-cream">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-dark-green"></div>
      <p className="mt-4 text-dark-green font-body">Loading...</p>
    </div>
  </div>
);

const LanguageWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['ro', 'en'].includes(lang)) {
      i18n.changeLanguage(lang);
      // Update HTML lang attribute for proper SEO
      document.documentElement.lang = lang;
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
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiente" element={<Experiences />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/detalii" element={<Details />} />
          <Route path="/details" element={<Details />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
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

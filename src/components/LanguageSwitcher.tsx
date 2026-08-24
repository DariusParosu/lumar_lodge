import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (newLang: 'ro' | 'en') => {
    if (newLang === lang) return;

    i18n.changeLanguage(newLang);

    const currentPath = location.pathname;
    
    // Map routes between languages
    let newPath = currentPath.replace(`/${lang}`, `/${newLang}`);
    
    // Handle route translations
    if (newPath.includes('/experiente')) {
      newPath = newPath.replace('/experiente', newLang === 'en' ? '/experience' : '/experiente');
    } else if (newPath.includes('/experience')) {
      newPath = newPath.replace('/experience', newLang === 'en' ? '/experience' : '/experiente');
    }
    
    if (newPath.includes('/galerie')) {
      newPath = newPath.replace('/galerie', newLang === 'en' ? '/gallery' : '/galerie');
    } else if (newPath.includes('/gallery')) {
      newPath = newPath.replace('/gallery', newLang === 'en' ? '/gallery' : '/galerie');
    }

    navigate(newPath || `/${newLang}`);
  };

  return (
    <div className="flex items-center gap-4 text-text-dark font-body">
      <button
        onClick={() => handleLanguageChange('ro')}
        className={`relative font-medium text-m transition-all duration-300 pb-1 ${
          lang === 'ro'
            ? 'text-gold-accent font-semibold'
            : 'text-text-dark hover:text-gold-accent'
        }`}
      >
        RO
        {lang === 'ro' && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-accent"></span>
        )}
      </button>
      <span className="text-text-dark text-opacity-20">/</span>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`relative font-medium text-m transition-all duration-300 pb-1 ${
          lang === 'en'
            ? 'text-gold-accent font-semibold'
            : 'text-text-dark hover:text-gold-accent'
        }`}
      >
        EN
        {lang === 'en' && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-accent"></span>
        )}
      </button>
    </div>
  );
};

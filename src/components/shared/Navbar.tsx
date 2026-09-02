import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const experiencesPath = lang === 'en' ? '/experiences' : '/experiente';
  const detailsPath = lang === 'en' ? '/details' : '/detalii';
  const galleryPath = lang === 'en' ? '/gallery' : '/galerie';

  const navLinks = [
    { label: t('navbar.home'), to: `/${lang}/` },
    { label: t('navbar.experiences'), to: `/${lang}${experiencesPath}` },
    { label: t('navbar.details'), to: `/${lang}${detailsPath}` },
    { label: t('navbar.gallery'), to: `/${lang}${galleryPath}` },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-cream shadow-lg border-b-2 border-gold-accent border-opacity-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar container - relative for absolute positioning inside */}
        <div className="relative flex items-center py-8 justify-center">
          {/* Logo - Absolute Left */}
          <div className="absolute left-0 flex-shrink-0 -rotate-3 hover:-rotate-6 transition-transform duration-300 min-w-fit">
            <Link
              to={`/${lang}/`}
              className="inline-flex items-center gap-3 text-4xl md:text-5xl font-bold text-dark-green font-display hover:text-gold-accent transition-colors duration-300"
            >
              <img
                src="/favicon.webp"
                alt="LuMar Lodge logo"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover shadow-md"
              />
              <span>LuMar Lodge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-text-dark font-body text-xl font-medium relative group transition-colors duration-300 hover:text-gold-accent"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Language Switcher - Absolute Right */}
          <div className="absolute right-0 hidden xl:flex flex-shrink-0 min-w-fit">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-green focus:outline-none p-2 hover:bg-cream rounded-lg transition-colors duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden pb-6 border-t border-gold-accent border-opacity-20">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-text-dark py-3 px-4 font-body font-medium hover:text-gold-accent hover:bg-cream rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Language Switcher in Mobile Menu */}
              <div className="border-t border-gold-accent border-opacity-20 mt-4 pt-4 px-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-text-dark font-body font-medium text-sm">{t('navbar.language')}:</span>
                </div>
                <div className="flex items-center gap-2">
                  <MobileLanguageButton
                    lang="ro"
                    currentLang={lang}
                    label="RO"
                  />
                  <MobileLanguageButton
                    lang="en"
                    currentLang={lang}
                    label="EN"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const MobileLanguageButton: React.FC<{ lang: 'ro' | 'en'; currentLang?: string; label: string }> = ({
  lang,
  currentLang,
  label,
}) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (lang === currentLang) return;

    i18n.changeLanguage(lang);

    const currentPath = location.pathname;

    // Map routes between languages
    let newPath = currentPath.replace(`/${currentLang}`, `/${lang}`);

    // Handle route translations
    if (newPath.includes('/detalii')) {
      newPath = newPath.replace('/detalii', lang === 'en' ? '/details' : '/detalii');
    } else if (newPath.includes('/details')) {
      newPath = newPath.replace('/details', lang === 'en' ? '/details' : '/detalii');
    }

    if (newPath.includes('/experiente')) {
      newPath = newPath.replace('/experiente', lang === 'en' ? '/experiences' : '/experiente');
    } else if (newPath.includes('/experiences')) {
      newPath = newPath.replace('/experiences', lang === 'en' ? '/experiences' : '/experiente');
    }

    if (newPath.includes('/galerie')) {
      newPath = newPath.replace('/galerie', lang === 'en' ? '/gallery' : '/galerie');
    } else if (newPath.includes('/gallery')) {
      newPath = newPath.replace('/gallery', lang === 'en' ? '/gallery' : '/galerie');
    }

    navigate(newPath || `/${lang}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex-1 px-3 py-1.5 rounded font-semibold text-sm transition-all duration-300 ${
        lang === currentLang
          ? 'bg-gold-accent text-cream'
          : 'bg-dark-green bg-opacity-10 text-text-dark hover:bg-opacity-20'
      }`}
    >
      {label}
    </button>
  );
};

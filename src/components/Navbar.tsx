import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'ro' | 'en'>('ro');

  const navLinks = [
    { label: 'Acasă', to: '/' },
    { label: 'Experiențe', to: '/experiente' },
    { label: 'Galerie', to: '/galerie' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-cream shadow-lg border-b-2 border-gold-accent border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar container - relative for absolute positioning inside */}
        <div className="relative flex items-center py-8 justify-center">
          {/* Logo - Absolute Left */}
          <div className="absolute left-0 flex-shrink-0 -rotate-3 hover:-rotate-6 transition-transform duration-300 min-w-fit">
            <a href="/" className="text-4xl md:text-5xl font-bold text-dark-green font-display hover:text-gold-accent transition-colors duration-300">
              Lumar Lodge
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
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
          <div className="absolute right-0 hidden md:flex flex-shrink-0 min-w-fit">
            <div className="flex items-center gap-4 text-text-dark font-body">
              <button
                onClick={() => setLanguage('ro')}
                className={`relative font-medium text-m transition-all duration-300 pb-1 ${
                  language === 'ro'
                    ? 'text-gold-accent font-semibold'
                    : 'text-text-dark hover:text-gold-accent'
                }`}
              >
                RO
                {language === 'ro' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-accent"></span>
                )}
              </button>
              <span className="text-text-dark text-opacity-20">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`relative font-medium text-m transition-all duration-300 pb-1 ${
                  language === 'en'
                    ? 'text-gold-accent font-semibold'
                    : 'text-text-dark hover:text-gold-accent'
                }`}
              >
                EN
                {language === 'en' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-accent"></span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
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
          <div className="md:hidden pb-6 border-t border-gold-accent border-opacity-20">
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
              <div className="border-t border-gold-accent border-opacity-20 mt-4 pt-4">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-text-dark font-body font-medium text-sm">Limbă:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage('ro')}
                      className={`px-3 py-1.5 rounded font-semibold text-sm transition-all duration-300 ${
                        language === 'ro'
                          ? 'bg-gold-accent text-cream'
                          : 'bg-dark-green bg-opacity-10 text-text-dark hover:bg-opacity-20'
                      }`}
                    >
                      RO
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1.5 rounded font-semibold text-sm transition-all duration-300 ${
                        language === 'en'
                          ? 'bg-gold-accent text-cream'
                          : 'bg-dark-green bg-opacity-10 text-text-dark hover:bg-opacity-20'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

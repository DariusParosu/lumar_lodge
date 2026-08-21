import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Acasă', to: '/' },
    { label: 'Experiențe', to: '/experiente' },
    { label: 'Galerie', to: '/galerie' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-cream shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -rotate-3 hover:-rotate-6 transition">
            <a href="/" className="text-5xl font-bold text-dark-green font-display">
              Lumar Lodge
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-text-dark hover:text-gold-accent hover:text-xl transition font-body text-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gold-accent text-cream px-6 py-2 rounded-lg hover:bg-dark-green transition font-semibold">
              Rezervă Direct
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-green focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-text-dark py-2 font-body"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-gold-accent text-cream w-full px-6 py-2 rounded-lg font-semibold mt-2">
                Rezervă Direct
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

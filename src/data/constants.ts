// Configuration constants
export const WHATSAPP_PHONE = process.env.REACT_APP_WHATSAPP_PHONE || '+40756294324';

// Google Analytics ID (optional - add to .env when ready)
export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

// Supported languages
export const SUPPORTED_LANGUAGES = ['ro', 'en'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

// Route mappings for language switching
export const ROUTE_TRANSLATIONS = {
  ro: {
    experiences: '/experiente',
    details: '/detalii',
    gallery: '/galerie',
  },
  en: {
    experiences: '/experiences',
    details: '/details',
    gallery: '/gallery',
  },
} as const;

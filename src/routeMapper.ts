import { ROUTE_TRANSLATIONS, Language, SUPPORTED_LANGUAGES } from './data/constants';

/**
 * Maps a route path between languages
 * Example: mapRouteToLanguage('/ro/experiente', 'en') => '/en/experiences'
 */
export function mapRouteToLanguage(currentPath: string, targetLang: Language): string {
  let newPath = currentPath.replace(`/${SUPPORTED_LANGUAGES.find(lang => currentPath.includes(`/${lang}/`)) || 'ro'}/`, `/${targetLang}/`);

  // Replace all route translations
  (Object.keys(ROUTE_TRANSLATIONS.ro) as Array<keyof typeof ROUTE_TRANSLATIONS.ro>).forEach(key => {
    const roRoute = ROUTE_TRANSLATIONS.ro[key];
    const enRoute = ROUTE_TRANSLATIONS.en[key];
    
    if (newPath.includes(roRoute)) {
      newPath = newPath.replace(roRoute, ROUTE_TRANSLATIONS[targetLang][key]);
    } else if (newPath.includes(enRoute)) {
      newPath = newPath.replace(enRoute, ROUTE_TRANSLATIONS[targetLang][key]);
    }
  });

  return newPath || `/${targetLang}`;
}

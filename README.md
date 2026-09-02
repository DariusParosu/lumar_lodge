# Lumar Lodge

Website pentru Lumar Lodge, construit cu React, TypeScript si Tailwind CSS, cu suport bilingv RO/EN si rute separate pentru continutul principal.

## Ce include proiectul

- homepage cu hero, sectiune de facilitati si prezentare despre proprietate
- pagina de experiente locale
- pagina de detalii despre cazare
- galerie foto cu tab-uri si lightbox
- navbar, footer si buton WhatsApp plutitor
- suport i18n cu comutator de limba si sincronizare URL

## Rute

- `/` redirectioneaza catre `/ro`
- `/:lang` pagina principala
- `/:lang/experiente` si `/:lang/experiences`
- `/:lang/detalii` si `/:lang/details`
- `/:lang/galerie` si `/:lang/gallery`

Limbi acceptate:

- `ro`
- `en`

Rutele invalide pentru limba duc inapoi la `/ro`.

## Stack tehnic

- React 18
- TypeScript 5.9
- Tailwind CSS 3.4
- React Router DOM 7
- i18next + react-i18next
- lucide-react
- swiper

## Scripturi disponibile

- `npm start` - porneste aplicatia in modul development
- `npm test` - ruleaza testele
- `npm run build` - creeaza build-ul de productie
- `npm run eject` - expune configuratia CRA

## Instalare si rulare

```bash
npm install
npm start
```

Aplicatia ruleaza implicit la `http://localhost:3000`.

Pentru build de productie:

```bash
npm run build
```

## Structura principala

```text
src/
  components/
    details/
    experiences/
    home/
    shared/
  data/
  pages/
  App.tsx
  i18n.ts
  index.tsx
```

## Functionalitati principale

### Home

- hero cu mesaj principal si CTA
- bara de facilitati
- sectiune despre proprietate

### Experiences

- experiente locale grupate pe categorii
- carduri reutilizabile
- traduceri dinamice pentru titluri si descrieri

### Details

- informatii despre programul de sosire si plecare
- reguli de cazare
- facilitati detaliate
- configuratia camerelor
- informatii despre gradina si exterior
- pret estimativ pe noapte

### Gallery

- tab-uri pentru categorii de imagini
- grila responsive
- lightbox pentru vizualizare marita

## i18n

Configurarea de limba se afla in `src/i18n.ts`.

Resursele incluse in prezent:

- romana
- engleza

Comportament:

- limba este detectata si sincronizata cu URL-ul
- switcher-ul schimba doar parametrul `lang`
- continutul foloseste cheile din `react-i18next`

## Conectari externe

- Google Maps embed pentru locatie
- WhatsApp link cu mesaj precompletat
- imagini externe / assets de inlocuit cu cele finale, daca este cazul

## Nota despre documentatie

Acest `README.md` consolideaza documentatia care era separata in:

- `IMPLEMENTATION.md`
- `SETUP_I18N.md`

## Status

Proiectul este configurat ca site multi-page cu navigare pe baza de ruta si suport bilingv RO/EN.

export type GalleryTab = 'exterior' | 'kitchen' | 'bedrooms' | 'bathrooms';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryTab_Item {
  id: GalleryTab;
  label: string;
}

export const galleryImages: Record<GalleryTab, GalleryImage[]> = {
  exterior: [
    { src: '/images/exterior/827943314.webp', alt: '' },
    { src: '/images/exterior/827943734.webp', alt: '' },
    { src: '/images/exterior/827943799.webp', alt: '' },
    { src: '/images/exterior/827943918.webp', alt: '' },
    { src: '/images/exterior/827943933.webp', alt: '' },
    { src: '/images/exterior/827943976.webp', alt: '' },
    { src: '/images/exterior/827959492.webp', alt: '' },
    { src: '/images/exterior/862464075.webp', alt: '' },
  ],
  kitchen: [
    { src: '/images/kitchen/827943810.webp', alt: '' },
    { src: '/images/kitchen/827943820.webp', alt: '' },
    { src: '/images/kitchen/827943897.webp', alt: '' },
    { src: '/images/kitchen/827957664.webp', alt: '' },
  ],
  bedrooms: [
    { src: '/images/bedrooms/827943832.webp', alt: '' },
    { src: '/images/bedrooms/827943858.webp', alt: '' },
    { src: '/images/bedrooms/827943881.webp', alt: '' },
    { src: '/images/bedrooms/827943961.webp', alt: '' },
    { src: '/images/bedrooms/862464075.webp', alt: '' },
  ],
  bathrooms: [
    { src: '/images/bathrooms/827943844.webp', alt: '' },
    { src: '/images/bathrooms/827943908.webp', alt: '' },
    { src: '/images/bathrooms/827943946.webp', alt: '' },
  ]
};

export const galleryTabs: GalleryTab_Item[] = [
  { id: 'exterior', label: 'Exterior' },
  { id: 'kitchen', label: 'Bucătărie' },
  { id: 'bedrooms', label: 'Dormitoare' },
  { id: 'bathrooms', label: 'Băi' },
];

import {
  Bath,
  Bed,
  CarFront,
  CigaretteOff,
  Clock3,
  DoorOpen,
  Dog,
  PartyPopper,
  PlaneTakeoff,
  Trees,
  UtensilsCrossed,
  UserRound,
  Wifi,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { TFunction } from 'i18next';

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface PolicyItem {
  icon: LucideIcon;
  title: string;
}

export interface RoomDetail {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OutdoorFeature {
  label: string;
}

export interface DetailedAmenityCategory {
  title: string;
  items: string[];
}

export interface DetailsData {
  propertyFacts: StatItem[];
  scheduleFacts: StatItem[];
  ruleFacts: PolicyItem[];
  amenityFacts: PolicyItem[];
  detailedAmenitiesSection: {
    title: string;
    subtitle: string;
  };
  detailedAmenities: DetailedAmenityCategory[];
  roomConfiguration: RoomDetail[];
  outdoorFeatures: OutdoorFeature[];
  outdoorImage: {
    src: string;
    alt: string;
  };
}

export const createDetailsData = (t: TFunction): DetailsData => ({
  propertyFacts: [
    { icon: Bed, label: t('details.stats.bedrooms.label'), value: '3' },
    { icon: Bath, label: t('details.stats.bathrooms.label'), value: '3' },
    { icon: UtensilsCrossed, label: t('details.stats.kitchen.label'), value: '1' },
    { icon: Trees, label: t('details.stats.area.label'), value: '140 m²' },
  ],
  scheduleFacts: [
    { icon: Clock3, label: t('details.schedule.checkin'), value: '14:00 - 20:00' },
    { icon: DoorOpen, label: t('details.schedule.checkout'), value: '08:00 - 11:00' },
  ],
  ruleFacts: [
    { icon: CigaretteOff, title: t('details.rules.smokingTitle') },
    { icon: PartyPopper, title: t('details.rules.partiesTitle') },
    { icon: Dog, title: t('details.rules.petsTitle') },
  ],
  amenityFacts: [
    { icon: CarFront, title: t('details.amenities.parkingTitle') },
    { icon: PlaneTakeoff, title: t('details.amenities.shuttleTitle') },
    { icon: Wifi, title: t('details.amenities.wifiTitle') },
    { icon: UserRound, title: t('details.amenities.familyTitle') },
  ],
  detailedAmenitiesSection: {
    title: t('details.detailedAmenities.title'),
    subtitle: t('details.detailedAmenities.subtitle'),
  },
  detailedAmenities: [
    {
      title: t('details.detailedAmenities.kitchenDiningTitle'),
      items: [
        t('details.detailedAmenities.kitchenDiningItems.fridge'),
        t('details.detailedAmenities.kitchenDiningItems.stoveOven'),
        t('details.detailedAmenities.kitchenDiningItems.microwave'),
        t('details.detailedAmenities.kitchenDiningItems.espressoMachine'),
        t('details.detailedAmenities.kitchenDiningItems.toasterKettle'),
        t('details.detailedAmenities.kitchenDiningItems.cookwareTableware'),
        t('details.detailedAmenities.kitchenDiningItems.cleaningProducts'),
      ],
    },
    {
      title: t('details.detailedAmenities.bedBathTitle'),
      items: [
        t('details.detailedAmenities.bedBathItems.bedLinen'),
        t('details.detailedAmenities.bedBathItems.towels'),
        t('details.detailedAmenities.bedBathItems.hairDryer'),
        t('details.detailedAmenities.bedBathItems.toiletries'),
        t('details.detailedAmenities.bedBathItems.slippers'),
        t('details.detailedAmenities.bedBathItems.wardrobe'),
      ],
    },
    {
      title: t('details.detailedAmenities.entertainmentComfortTitle'),
      items: [
        t('details.detailedAmenities.entertainmentComfortItems.smartTv'),
        t('details.detailedAmenities.entertainmentComfortItems.fireplace'),
        t('details.detailedAmenities.entertainmentComfortItems.heating'),
        t('details.detailedAmenities.entertainmentComfortItems.soundproofing'),
        t('details.detailedAmenities.entertainmentComfortItems.bedsideOutlets'),
      ],
    },
  ],
  roomConfiguration: [
    { icon: Bed, title: t('details.rooms.bedroom1.title'), description: t('details.rooms.bedroom1.description') },
    { icon: Bed, title: t('details.rooms.bedroom2.title'), description: t('details.rooms.bedroom2.description') },
    { icon: Bed, title: t('details.rooms.bedroom3.title'), description: t('details.rooms.bedroom3.description') },
    { icon: UserRound, title: t('details.rooms.living.title'), description: t('details.rooms.living.description') },
  ],
  outdoorFeatures: [
    { label: t('details.garden.features.privateYard') },
    { label: t('details.garden.features.bbq') },
    { label: t('details.garden.features.terrace') },
    { label: t('details.garden.features.views') },
  ],
  outdoorImage: {
    src: '/images/details.webp',
    alt: t('details.images.garden'),
  },
});

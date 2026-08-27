import {
  Ban,
  Bath,
  Bed,
  CarFront,
  CigaretteOff,
  Clock3,
  DoorOpen,
  Dog,
  Flame,
  PartyPopper,
  PlaneTakeoff,
  ShieldAlert,
  Trees,
  UtensilsCrossed,
  UserRound,
  Wifi,
} from 'lucide-react';
import type { TFunction } from 'i18next';
import type {
  NoticeItem,
  OutdoorFeature,
  PolicyItem,
  RoomDetail,
  StatItem,
} from './DetailsTypes';

export interface DetailsData {
  propertyFacts: StatItem[];
  scheduleFacts: StatItem[];
  bookingNotes: NoticeItem[];
  ruleFacts: PolicyItem[];
  amenityFacts: PolicyItem[];
  roomConfiguration: RoomDetail[];
  outdoorFeatures: OutdoorFeature[];
  outdoorImage: {
    src: string;
    alt: string;
  };
}

export const createDetailsData = (t: TFunction): DetailsData => ({
  propertyFacts: [
    { icon: Bed, label: t('details.stats.bedrooms.label'), value: '3', subtext: t('details.stats.bedrooms.subtext') },
    { icon: Bath, label: t('details.stats.bathrooms.label'), value: '3', subtext: t('details.stats.bathrooms.subtext') },
    { icon: UtensilsCrossed, label: t('details.stats.kitchen.label'), value: '1', subtext: t('details.stats.kitchen.subtext') },
    { icon: Trees, label: t('details.stats.area.label'), value: '140 m²', subtext: t('details.stats.area.subtext') },
  ],
  scheduleFacts: [
    { icon: Clock3, label: t('details.schedule.checkin'), value: '14:00 - 20:00', subtext: t('details.schedule.checkinSubtext') },
    { icon: DoorOpen, label: t('details.schedule.checkout'), value: '08:00 - 11:00', subtext: t('details.schedule.checkoutSubtext') },
  ],
  bookingNotes: [
    { icon: UserRound, title: t('details.booking.guestTitle'), text: t('details.booking.guestText') },
    { icon: ShieldAlert, title: t('details.booking.hostTitle'), text: t('details.booking.hostText') },
  ],
  ruleFacts: [
    { icon: CigaretteOff, title: t('details.rules.smokingTitle'), text: t('details.rules.smokingText') },
    { icon: PartyPopper, title: t('details.rules.partiesTitle'), text: t('details.rules.partiesText') },
    { icon: Ban, title: t('details.rules.eventsTitle'), text: t('details.rules.eventsText') },
    { icon: Dog, title: t('details.rules.petsTitle'), text: t('details.rules.petsText') },
  ],
  amenityFacts: [
    { icon: CarFront, title: t('details.amenities.parkingTitle'), text: t('details.amenities.parkingText') },
    { icon: PlaneTakeoff, title: t('details.amenities.shuttleTitle'), text: t('details.amenities.shuttleText') },
    { icon: Wifi, title: t('details.amenities.wifiTitle'), text: t('details.amenities.wifiText') },
    { icon: Flame, title: t('details.amenities.heatingTitle'), text: t('details.amenities.heatingText') },
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

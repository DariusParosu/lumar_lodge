import type { LucideIcon } from 'lucide-react';

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

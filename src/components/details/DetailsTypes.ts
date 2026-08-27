import type { LucideIcon } from 'lucide-react';

export interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext: string;
}

export interface PolicyItem {
  icon: LucideIcon;
  title: string;
  text?: string;
}

export interface NoticeItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface RoomDetail {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OutdoorFeature {
  label: string;
}

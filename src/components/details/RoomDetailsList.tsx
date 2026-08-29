import React from 'react';
import type { RoomDetail } from './DetailsTypes';

interface RoomDetailsListProps {
  rooms: RoomDetail[];
}

export const RoomDetailsList: React.FC<RoomDetailsListProps> = ({ rooms }) => (
  <div className="mt-4 grid gap-3">
    {rooms.map((room) => {
      const Icon = room.icon;

      return (
        <div
          key={room.title}
          className="group flex items-start gap-4 rounded-2xl border border-dark-green/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-dark-green text-cream transition-all duration-300 group-hover:bg-gold-accent group-hover:text-dark-green">
            <Icon size={22} />
          </span>
          <div>
            <h4 className="text-xl font-semibold text-dark-green">{room.title}</h4>
            <p className="mt-1 text-base leading-relaxed text-dark-green/65">{room.description}</p>
          </div>
        </div>
      );
    })}
  </div>
);

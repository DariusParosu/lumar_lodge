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
          className="flex items-start gap-4 rounded-2xl border border-dark-green/10 bg-cream p-4"
        >
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-dark-green text-cream">
            <Icon size={20} />
          </span>
          <div>
            <h4 className="text-base font-semibold text-dark-green">{room.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-dark-green/65">{room.description}</p>
          </div>
        </div>
      );
    })}
  </div>
);

import React from 'react';
import { CalendarDays, MapPin, Users, Ticket } from 'lucide-react';

export default function EventStats({ events }) {
  const totalEvents = events.length;
  const inPersonEvents = events.filter(e => e.locationType === 'In-person').length;
  const onlineEvents = events.filter(e => e.locationType === 'Online').length;
  const totalAttendees = events.reduce((sum, e) => sum + (Number(e.attendees) || 0), 0);
  const freeEvents = events.filter(e => e.price?.toLowerCase() === 'free').length;

  const stats = [
    {
      label: 'TOTAL ACTIVE EVENTS',
      value: totalEvents,
      sub: `${inPersonEvents} In-person · ${onlineEvents} Online`,
      icon: CalendarDays,
    },
    {
      label: 'COMMUNITY ATTENDEES',
      value: totalAttendees.toLocaleString(),
      sub: 'Registered enthusiasts',
      icon: Users,
    },
    {
      label: 'FREE ENTRY EVENTS',
      value: freeEvents,
      sub: 'Open to public register',
      icon: Ticket,
    },
    {
      label: 'VENUES & LOCATIONS',
      value: inPersonEvents,
      sub: 'Major hubs & Auditoriums',
      icon: MapPin,
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {stats.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={idx}
            className="bg-white rounded-xl p-5 border border-[#E6E6DE] hover:border-[#FF5500] transition-colors relative overflow-hidden group shadow-2xs"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#FF5500] transition-colors" />

            <div className="flex items-center justify-between mb-3">
              <span className="text-[13px] font-mono font-bold tracking-widest text-[#71717A] uppercase truncate">
                {stat.label}
              </span>
              <IconComponent className="w-5 h-5 text-[#FF5500]" />
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-display font-black text-[#111114] tracking-tight">
                {stat.value}
              </span>
            </div>

            <p className="mt-1.5 text-[15px] font-mono text-[#71717A] truncate">
              {stat.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}

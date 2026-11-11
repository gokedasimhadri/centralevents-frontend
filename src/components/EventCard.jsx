import React from 'react';
import { Calendar, MapPin, Heart, ArrowUpRight } from 'lucide-react';

export default function EventCard({
  event,
  isSaved,
  onToggleSave
}) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleOpenLink = () => {
    if (event.link) {
      window.open(event.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleOpenLink}
      className="group relative bg-white rounded-xl border border-[#E6E6DE] hover:border-[#FF5500] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer overflow-hidden hover:-translate-y-1"
    >
      {/* Event Image Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category & Format Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded text-[13px] font-mono font-bold tracking-wider bg-white/95 text-[#111114]">
            {event.category}
          </span>
          <span className={`px-2.5 py-1 rounded text-[12px] font-mono font-bold uppercase tracking-wider text-white ${
            event.locationType === 'Online' ? 'bg-sky-600' : 'bg-[#FF5500]'
          }`}>
            {event.locationType}
          </span>
        </div>

        {/* Bookmark Button */}
        {onToggleSave && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(event.id);
            }}
            className="absolute top-3.5 right-3.5 p-2.5 rounded-lg bg-white/90 backdrop-blur-md hover:bg-white text-slate-600 hover:text-rose-500 shadow-sm transition-all"
            title={isSaved ? 'Remove from Saved' : 'Save Event'}
          >
            <Heart className={`w-4 h-4 transition-colors ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded bg-white/95 backdrop-blur-md">
          <span className={`text-[14px] font-mono font-bold ${
            event.price?.toLowerCase() === 'free' ? 'text-emerald-600' : 'text-[#FF5500]'
          }`}>
            {event.price}
          </span>
        </div>

        {/* Date on Image */}
        <div className="absolute bottom-3.5 left-3.5 text-white">
          <div className="flex items-center gap-1.5 text-[15px] font-mono font-semibold text-white/95">
            <Calendar className="w-4 h-4 text-[#FF5500]" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-display font-bold text-[#111114] group-hover:text-[#FF5500] transition-colors line-clamp-2 leading-snug">
            {event.title}
          </h3>

          <p className="mt-2.5 text-[15px] font-sans text-[#71717A] line-clamp-2 leading-relaxed">
            {event.tagline || event.description}
          </p>

          <div className="mt-4 text-[15px] font-mono text-[#71717A]">
            <div className="flex items-center gap-2 truncate">
              <MapPin className="w-4 h-4 text-[#FF5500] shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>
        </div>

        {/* Action Button - Direct Official Link */}
        <div className="pt-4 border-t border-[#F4F4EE]">
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white font-mono font-bold text-[15px] tracking-wider uppercase shadow-sm transition-all"
            title={`Visit: ${event.link}`}
          >
            <span>Visit Event Portal</span>
            <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
}

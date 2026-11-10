import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Users,
  Share2,
  Check,
  ArrowUpRight,
  Heart,
  Navigation,
  Ticket
} from 'lucide-react';

export default function EventDetailsModal({
  event,
  onClose,
  isSaved,
  onToggleSave,
  onOpenBookPass
}) {
  const [copied, setCopied] = useState(false);

  if (!event) return null;

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const handleCopyShare = () => {
    navigator.clipboard.writeText(event.link || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(`${event.description}\n\nEvent Link: ${event.link}`);
    const location = encodeURIComponent(event.location);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const createMapsUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`;
  };

  const progressPercent = Math.min(
    100,
    Math.round(((event.attendees || 0) / (event.capacity || 100)) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E6E6DE] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-lg bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner */}
        <div className="relative h-64 sm:h-76 w-full bg-slate-950 overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Badges on Banner */}
          <div className="absolute top-4 left-4 flex items-center gap-2.5">
            <span className="px-3 py-1 rounded text-[13px] font-mono font-bold bg-white text-[#111114]">
              {event.category}
            </span>
            <span className="px-3 py-1 rounded text-[13px] font-mono font-bold bg-[#FF5500] text-white">
              {event.locationType}
            </span>
            <span className={`px-3 py-1 rounded text-[13px] font-mono font-bold ${
              event.price.toLowerCase() === 'free' ? 'bg-emerald-600 text-white' : 'bg-[#FF5500] text-white'
            }`}>
              {event.price}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tight leading-snug">
              {event.title}
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] text-slate-300 font-mono">
              {event.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Action Callout Bar */}
          <div className="p-5 rounded-xl bg-orange-50/80 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[13px] font-mono font-bold uppercase tracking-widest text-[#FF5500]">
                Official Link & Registration
              </p>
              <p className="text-[15px] font-mono text-[#111114] truncate max-w-sm sm:max-w-md mt-1">
                {event.link}
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenBookPass(event)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#E6E6DE] hover:border-[#FF5500] text-[#111114] font-mono font-bold text-[15px] transition-colors cursor-pointer"
              >
                <Ticket className="w-4 h-4 text-[#FF5500]" />
                <span>Book Pass</span>
              </button>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white font-mono font-bold text-[15px] tracking-wider uppercase shadow-sm transition-all cursor-pointer"
              >
                <span>Open Event Link</span>
                <ArrowUpRight className="w-4.5 h-4.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FBFBF9] border border-[#E6E6DE]">
              <Calendar className="w-5 h-5 text-[#FF5500] mt-0.5 shrink-0" />
              <div>
                <p className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#71717A]">Date</p>
                <p className="text-[15px] font-mono font-bold text-[#111114] mt-0.5">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FBFBF9] border border-[#E6E6DE]">
              <Clock className="w-5 h-5 text-[#FF5500] mt-0.5 shrink-0" />
              <div>
                <p className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#71717A]">Time Slot</p>
                <p className="text-[15px] font-mono font-bold text-[#111114] mt-0.5">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3.5 p-4 rounded-xl bg-[#FBFBF9] border border-[#E6E6DE] sm:col-span-2">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#FF5500] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#71717A]">Venue & Location</p>
                  <p className="text-[15px] font-mono font-bold text-[#111114] mt-0.5">{event.location}</p>
                  <p className="text-[14px] font-mono text-[#71717A] mt-1">Mode: {event.locationType}</p>
                </div>
              </div>
              {event.locationType === 'In-person' && (
                <a
                  href={createMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E6E6DE] text-[14px] font-mono font-bold text-[#FF5500] hover:bg-orange-50 flex items-center gap-1.5 shrink-0"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Maps</span>
                </a>
              )}
            </div>
          </div>

          {/* Registration Progress */}
          <div className="p-4.5 rounded-xl bg-[#FBFBF9] border border-[#E6E6DE]">
            <div className="flex justify-between items-center text-[15px] font-mono font-bold text-[#111114] mb-2.5">
              <span className="flex items-center gap-2">
                <Users className="w-4.5 h-4.5 text-[#FF5500]" />
                Attendee Capacity
              </span>
              <span>
                <strong className="text-[#FF5500]">{event.attendees}</strong> / {event.capacity} seats reserved ({progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-[#E6E6DE] rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-[#FF5500] h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-[13px] font-mono font-bold tracking-widest text-[#111114] uppercase mb-2.5">
              About This Event
            </h4>
            <p className="text-[15px] font-sans text-[#3F3F46] leading-relaxed whitespace-pre-line">
              {event.description}
            </p>
          </div>

          {/* Speakers */}
          {event.speakers && event.speakers.length > 0 && (
            <div>
              <h4 className="text-[13px] font-mono font-bold tracking-widest text-[#111114] uppercase mb-3">
                Featured Speakers & Hosts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {event.speakers.map((speaker, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FBFBF9] border border-[#E6E6DE]">
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-12 h-12 rounded-full object-cover border border-[#E6E6DE]"
                    />
                    <div>
                      <h5 className="text-[15px] font-display font-bold text-[#111114]">{speaker.name}</h5>
                      <p className="text-[13px] font-mono text-[#71717A] mt-0.5">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap pt-2">
              {event.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded text-[13px] font-mono bg-[#F4F4EE] text-[#71717A]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#FBFBF9] border-t border-[#E6E6DE] flex flex-wrap items-center justify-between gap-3.5">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onToggleSave(event.id)}
              className={`p-3 rounded-lg border transition-colors flex items-center gap-2 text-[15px] font-mono font-bold ${
                isSaved
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'bg-white border-[#E6E6DE] text-[#3F3F46] hover:bg-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleCopyShare}
              className="p-3 rounded-lg bg-white border border-[#E6E6DE] text-[#3F3F46] hover:text-[#FF5500] transition-colors flex items-center gap-2 text-[15px] font-mono font-bold cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <a
              href={createGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white border border-[#E6E6DE] text-[#3F3F46] hover:text-[#FF5500] transition-colors flex items-center gap-2 text-[15px] font-mono font-bold"
            >
              <Calendar className="w-4 h-4 text-[#FF5500]" />
              <span className="hidden sm:inline">Add to Calendar</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-[15px] font-mono font-bold text-[#71717A] hover:text-[#111114] transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white font-mono font-bold text-[15px] tracking-wider uppercase shadow-xs transition-all cursor-pointer"
            >
              <span>Visit Link</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

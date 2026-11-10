import React, { useState } from 'react';
import { X, PlusCircle, Link as LinkIcon, Image, Calendar, Clock, MapPin } from 'lucide-react';
import { CATEGORIES } from '../data/mockEvents';

const PRESET_IMAGES = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
];

export default function AddEventModal({ isOpen, onClose, onAddEvent }) {
  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    description: '',
    category: 'Technology',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM - 01:00 PM IST',
    location: '',
    locationType: 'In-person',
    link: 'https://',
    imageUrl: PRESET_IMAGES[0],
    price: 'Free',
    capacity: 100
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const newEvent = {
      ...formData,
      id: `evt-${Date.now()}`,
      attendees: 1,
      capacity: Number(formData.capacity) || 100,
      link: formData.link.trim() || 'https://google.com',
      imageUrl: formData.imageUrl || PRESET_IMAGES[0],
      organizer: {
        name: 'You (Organizer)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        verified: true
      },
      tags: [formData.category, formData.locationType]
    };

    onAddEvent(newEvent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E6E6DE] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4.5 border-b border-[#E6E6DE] flex items-center justify-between bg-[#FBFBF9]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-orange-50 text-[#FF5500] border border-orange-200">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-[#111114]">
                Create New Event
              </h3>
              <p className="text-[14px] font-mono text-[#71717A]">
                Enter new event details and direct destination action link
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#71717A] hover:text-[#111114] hover:bg-[#F4F4EE] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4.5 max-h-[72vh] overflow-y-auto">
          {/* Title */}
          <div>
            <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
              Event Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g. Hyderabad AI Hackathon & Tech Meetup"
              className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
              Short Tagline
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              placeholder="e.g. Build agents, collaborate, win prizes"
              className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
            />
          </div>

          {/* Event Link */}
          <div className="p-4 rounded-lg bg-orange-50/70 border border-orange-200">
            <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#FF5500] mb-1.5 flex items-center gap-1.5">
              <LinkIcon className="w-4 h-4" />
              <span>Event Web Link (Direct Destination URL) *</span>
            </label>
            <input
              type="url"
              required
              value={formData.link}
              onChange={(e) => setFormData({ ...formData, link: e.target.value })}
              placeholder="https://example.com/event-registration"
              className="w-full px-3.5 py-2.5 bg-white border border-orange-200 rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
            />
            <p className="mt-1 text-[13px] font-mono text-[#FF5500]">
              Clicking this event card or "Open Event Link" will immediately open this official URL.
            </p>
          </div>

          {/* Category & Location Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500] cursor-pointer"
              >
                {CATEGORIES.filter(c => c !== 'All').map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
                Format / Mode
              </label>
              <select
                value={formData.locationType}
                onChange={(e) => setFormData({ ...formData, locationType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500] cursor-pointer"
              >
                <option value="In-person">In-person (Physical)</option>
                <option value="Online">Online (Virtual / Zoom / Meet)</option>
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
              />
            </div>

            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                Time Slot
              </label>
              <input
                type="text"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                placeholder="e.g. 10:00 AM - 01:00 PM IST"
                className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
              />
            </div>
          </div>

          {/* Location / Venue */}
          <div>
            <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              Venue / Address
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. Cyber Towers Auditorium, Hitec City or Zoom Meeting"
              className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
            />
          </div>

          {/* Ticket Price & Capacity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
                Price
              </label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="Free or ₹499"
                className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
              />
            </div>

            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
                Max Capacity
              </label>
              <input
                type="number"
                min="1"
                value={formData.capacity}
                onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5 flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5 text-[#FF5500]" />
              Banner Image URL
            </label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
            />
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[12px] font-mono text-[#71717A]">Sample covers:</span>
              {PRESET_IMAGES.map((img, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setFormData({ ...formData, imageUrl: img })}
                  className={`w-10 h-7 rounded overflow-hidden border transition-transform hover:scale-105 ${
                    formData.imageUrl === img ? 'border-[#FF5500]' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="preset" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
              Full Description
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Explain the highlights, agenda, prerequisites, and instructions..."
              className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500] resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-3 border-t border-[#E6E6DE] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-[15px] font-mono font-bold text-[#71717A] hover:bg-[#F4F4EE] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white font-mono font-bold text-[15px] tracking-wider uppercase shadow-xs transition-all cursor-pointer"
            >
              Create & Publish Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

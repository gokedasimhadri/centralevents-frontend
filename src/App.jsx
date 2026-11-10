import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import EventStats from './components/EventStats';
import FilterBar from './components/FilterBar';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import AddEventModal from './components/AddEventModal';
import SavedEventsModal from './components/SavedEventsModal';
import TicketPassModal from './components/TicketPassModal';
import Footer from './components/Footer';
import { INITIAL_EVENTS } from './data/mockEvents';
import { Sparkles, Plus, Compass, Search } from 'lucide-react';

export default function App() {
  // Local storage persistence for events and saved items
  const [events, setEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('eventpulse_events');
      return saved ? JSON.parse(saved) : INITIAL_EVENTS;
    } catch {
      return INITIAL_EVENTS;
    }
  });

  const [savedEventIds, setSavedEventIds] = useState(() => {
    try {
      const saved = localStorage.getItem('eventpulse_saved');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [locationTypeFilter, setLocationTypeFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date-asc');

  // Modals
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingEvent, setBookingEvent] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('eventpulse_events', JSON.stringify(events));
    } catch (err) {
      console.error(err);
    }
  }, [events]);

  useEffect(() => {
    try {
      localStorage.setItem('eventpulse_saved', JSON.stringify(savedEventIds));
    } catch (err) {
      console.error(err);
    }
  }, [savedEventIds]);

  // Clean up any old language key
  useEffect(() => {
    try {
      localStorage.removeItem('eventpulse_lang');
    } catch {}
  }, []);

  // Toggle Save Event
  const toggleSave = (id) => {
    setSavedEventIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Add new event
  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [newEvent, ...prev]);
  };

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    return events
      .filter((evt) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = evt.title?.toLowerCase().includes(q);
          const matchDesc = evt.description?.toLowerCase().includes(q);
          const matchLoc = evt.location?.toLowerCase().includes(q);
          const matchTags = evt.tags?.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchLoc && !matchTags) return false;
        }

        if (selectedCategory !== 'All' && evt.category !== selectedCategory) {
          return false;
        }

        if (locationTypeFilter !== 'All' && evt.locationType !== locationTypeFilter) {
          return false;
        }

        if (priceFilter === 'Free' && !evt.price?.toLowerCase().includes('free')) {
          return false;
        }
        if (priceFilter === 'Paid' && evt.price?.toLowerCase().includes('free')) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'date-asc') {
          return new Date(a.date) - new Date(b.date);
        }
        if (sortBy === 'popular') {
          return (Number(b.attendees) || 0) - (Number(a.attendees) || 0);
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [events, searchQuery, selectedCategory, locationTypeFilter, priceFilter, sortBy]);

  const savedEventsList = useMemo(() => {
    return events.filter((e) => savedEventIds.includes(e.id));
  }, [events, savedEventIds]);

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#111114] flex flex-col font-sans selection:bg-[#FF5500] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenAddModal={() => setIsAddModalOpen(true)}
        savedCount={savedEventIds.length}
        onOpenSavedModal={() => setIsSavedModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Hero Banner */}
        <div className="relative rounded-2xl bg-white border border-[#E6E6DE] p-8 sm:p-12 mb-10 overflow-hidden shadow-xs">
          {/* Subtle Blueprint Graph Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

          {/* Orange ambient light glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-orange-50 border border-orange-200 text-[#FF5500] text-[15px] font-mono font-bold mb-4">
              <span className="w-2.5 h-2.5 bg-[#FF5500] inline-block" />
              <span>EDITION 01 // EVENTS MANAGEMENT PLATFORM</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-[#111114] tracking-tight leading-[1.15]">
              Discover Top Events & Join with{' '}
              <span className="text-[#FF5500]">
                One Direct Click
              </span>
            </h1>

            <p className="mt-4 text-[#71717A] text-[15px] sm:text-[17px] leading-relaxed font-sans">
              Browse all upcoming events. Click on any event card or "Open Event Link" to instantly access the official event link, register, or download your digital pass.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] active:scale-95 text-white font-mono font-bold text-[15px] tracking-wider uppercase shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>+ ADD YOUR EVENT</span>
              </button>
              <a
                href="#events-list"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FBFBF9] hover:bg-[#F4F4EE] border border-[#E6E6DE] text-[#111114] font-mono font-bold text-[15px] tracking-wider uppercase transition-colors"
              >
                <Compass className="w-4 h-4 text-[#FF5500]" />
                <span>EXPLORE EVENTS ({events.length})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Live Overview Stats */}
        <EventStats events={events} />

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[13px] font-mono font-bold tracking-widest text-[#FF5500] uppercase">
              // CURATED SESSIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight text-[#111114]">
              {selectedCategory === 'All' ? 'ALL UPCOMING EVENTS' : `${selectedCategory.toUpperCase()} EVENTS`}
            </h2>
            <p className="text-[15px] font-mono text-[#71717A] mt-1">
              Click a card for full details or hit <span className="font-bold text-[#FF5500]">"Open Event Link"</span> to visit the registration page directly.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-[15px] font-mono font-bold text-[#111114] bg-white px-4 py-2 rounded-lg border border-[#E6E6DE]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span>{filteredEvents.length} EVENTS AVAILABLE</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div id="events-list">
          <FilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            locationTypeFilter={locationTypeFilter}
            setLocationTypeFilter={setLocationTypeFilter}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
            eventsCount={filteredEvents.length}
          />
        </div>

        {/* Events Cards Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredEvents.map((evt) => (
              <EventCard
                key={evt.id}
                event={evt}
                onOpenDetails={setSelectedEvent}
                isSaved={savedEventIds.includes(evt.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-[#E6E6DE] max-w-lg mx-auto my-8">
            <div className="w-14 h-14 mx-auto mb-3.5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF5500]">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-display font-bold text-[#111114]">
              NO EVENTS FOUND
            </h3>
            <p className="text-[15px] font-mono text-[#71717A] mt-1.5 mb-6">
              No events matched your current search filters. Try clearing search keywords or resetting filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setLocationTypeFilter('All');
                setPriceFilter('All');
              }}
              className="px-5 py-2.5 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white font-mono font-bold text-[15px] uppercase transition-colors cursor-pointer"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

      </main>

      {/* Modals */}
      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          isSaved={savedEventIds.includes(selectedEvent.id)}
          onToggleSave={toggleSave}
          onOpenBookPass={(evt) => {
            setSelectedEvent(null);
            setBookingEvent(evt);
          }}
        />
      )}

      {bookingEvent && (
        <TicketPassModal
          isOpen={Boolean(bookingEvent)}
          onClose={() => setBookingEvent(null)}
          event={bookingEvent}
        />
      )}

      {isAddModalOpen && (
        <AddEventModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddEvent={handleAddEvent}
        />
      )}

      {isSavedModalOpen && (
        <SavedEventsModal
          isOpen={isSavedModalOpen}
          onClose={() => setIsSavedModalOpen(false)}
          savedEvents={savedEventsList}
          onRemoveSaved={toggleSave}
          onOpenDetails={(evt) => {
            setIsSavedModalOpen(false);
            setSelectedEvent(evt);
          }}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

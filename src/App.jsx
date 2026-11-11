import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import AddEventModal from './components/AddEventModal';
import SavedEventsModal from './components/SavedEventsModal';
import TicketPassModal from './components/TicketPassModal';
import Footer from './components/Footer';
import { INITIAL_EVENTS } from './data/mockEvents';

export default function App() {
  // Local storage persistence for events and saved items
  const [events, setEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('eventpulse_events_v3');
      if (saved) return JSON.parse(saved);
      // Clean up previous storage keys to ensure new 3 cards load
      localStorage.removeItem('eventpulse_events');
      localStorage.removeItem('eventpulse_events_v2');
      return INITIAL_EVENTS;
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

  // Modals
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingEvent, setBookingEvent] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('eventpulse_events_v3', JSON.stringify(events));
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

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight text-[#111114]">
              ALL UPCOMING EVENTS
            </h2>
            <p className="text-[15px] font-mono text-[#71717A] mt-1">
              Click a card for full details or hit <span className="font-bold text-[#FF5500]">"Open Event Link"</span> to visit the registration page directly.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-[15px] font-mono font-bold text-[#111114] bg-white px-4 py-2 rounded-lg border border-[#E6E6DE]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse" />
            <span>{events.length} EVENTS AVAILABLE</span>
          </div>
        </div>

        {/* Events Cards Grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {events.map((evt) => (
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
            <h3 className="text-lg font-display font-bold text-[#111114]">
              NO EVENTS AVAILABLE
            </h3>
            <p className="text-[15px] font-mono text-[#71717A] mt-1.5 mb-6">
              There are currently no events listed.
            </p>
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

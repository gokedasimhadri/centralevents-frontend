import React, { useState } from 'react';
import { X, CheckCircle, Ticket, User, Mail, Download, Printer } from 'lucide-react';

export default function TicketPassModal({ isOpen, onClose, event }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketCount, setTicketCount] = useState(1);
  const [isBooked, setIsBooked] = useState(false);
  const [passNumber, setPassNumber] = useState('');

  if (!isOpen || !event) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    const generatedId = `EP-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassNumber(generatedId);
    setIsBooked(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#E6E6DE] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-[#F4F4EE] hover:bg-[#EAEAE2] text-[#111114] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <form onSubmit={handleBooking} className="p-6 sm:p-8 space-y-4.5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-lg bg-orange-50 text-[#FF5500] border border-orange-200">
                <Ticket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-[#111114]">Book Your Event Pass</h3>
                <p className="text-[14px] font-mono text-[#71717A] truncate max-w-xs">{event.title}</p>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4.5 h-4.5 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Varma"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4.5 h-4.5 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-mono font-bold uppercase tracking-wider text-[#111114] mb-1.5">
                Number of Passes
              </label>
              <select
                value={ticketCount}
                onChange={(e) => setTicketCount(Number(e.target.value))}
                className="w-full px-4 py-2.5 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500] cursor-pointer"
              >
                <option value={1}>1 Pass</option>
                <option value={2}>2 Passes</option>
                <option value={3}>3 Passes</option>
                <option value={4}>4 Passes</option>
              </select>
            </div>

            <div className="p-3.5 rounded-lg bg-[#FBFBF9] border border-[#E6E6DE] flex items-center justify-between text-[15px] font-mono">
              <span className="text-[#71717A]">Total Payable:</span>
              <span className="font-bold text-[#FF5500]">
                {event.price.toLowerCase() === 'free' ? 'FREE' : `${event.price} x ${ticketCount}`}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] text-white font-mono font-bold text-[15px] tracking-wider uppercase shadow-sm transition-all cursor-pointer mt-2"
            >
              Generate Digital Pass
            </button>
          </form>
        ) : (
          <div className="p-6 sm:p-8 space-y-5 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-xl font-display font-black text-[#111114]">Registration Confirmed!</h3>
              <p className="text-[15px] font-mono text-[#71717A] mt-1">Your digital entry badge has been generated.</p>
            </div>

            {/* Visual Digital Badge matching theme */}
            <div className="p-6 rounded-xl bg-[#111114] text-white text-left relative overflow-hidden border border-[#27272A] shadow-md font-mono">
              <div className="flex justify-between items-start border-b border-[#27272A] pb-3 mb-3.5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5500]">
                    EVENTPULSE DIGITAL PASS
                  </span>
                  <h4 className="text-base font-bold text-white truncate max-w-[240px] mt-0.5">{event.title}</h4>
                </div>
                <span className="px-2.5 py-1 rounded text-[12px] font-bold bg-[#FF5500] text-white">
                  {event.price}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[14px] mb-3.5">
                <div>
                  <p className="text-[11px] text-[#A1A1AA] uppercase">Attendee Name</p>
                  <p className="font-bold text-white truncate text-[15px]">{name}</p>
                </div>
                <div>
                  <p className="text-[11px] text-[#A1A1AA] uppercase">Pass ID</p>
                  <p className="font-bold text-[#FF5500] text-[15px]">{passNumber}</p>
                </div>
                <div>
                  <p className="text-[11px] text-[#A1A1AA] uppercase">Date</p>
                  <p className="text-white truncate">{event.date}</p>
                </div>
                <div>
                  <p className="text-[11px] text-[#A1A1AA] uppercase">Passes</p>
                  <p className="text-white">{ticketCount} Person(s)</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#27272A] flex items-center justify-between text-[12px] text-[#A1A1AA]">
                <span className="truncate max-w-[220px]">{event.location}</span>
                <span className="text-[#FF5500] font-bold">VALIDATED</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 py-3 rounded-lg border border-[#E6E6DE] hover:bg-[#FBFBF9] font-mono font-bold text-[15px] text-[#111114] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Download</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-lg bg-[#FF5500] hover:bg-[#E64A00] font-mono font-bold text-[15px] text-white transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

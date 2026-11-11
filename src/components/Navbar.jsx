import React from 'react';
import { Calendar, Heart } from 'lucide-react';

export default function Navbar({
  savedCount,
  onOpenSavedModal
}) {
  return (
    <header className="sticky top-0 z-40 bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E6E6DE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Brand */}
          <div className="flex items-center space-x-3.5 cursor-pointer group">
            <div className="w-11 h-11 rounded-lg bg-[#FF5500] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Calendar className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl font-display font-black tracking-tight text-[#111114]">
                  Event<span className="text-[#FF5500]">Pulse</span>
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[12px] font-mono font-bold uppercase tracking-wider bg-orange-50 text-[#FF5500] border border-orange-200">
                  LIVE
                </span>
              </div>
              <p className="text-[15px] font-mono text-[#71717A]">
                Events Management & Discovery
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Saved Bookmarks */}
            <button
              onClick={onOpenSavedModal}
              className="relative px-4 py-2.5 rounded-lg text-[#111114] hover:text-[#FF5500] hover:bg-orange-50 border border-[#E6E6DE] transition-colors flex items-center gap-2 text-[15px] font-mono font-bold cursor-pointer"
              title="Saved Events"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
              <span className="hidden sm:inline">SAVED</span>
              {savedCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold text-white bg-[#FF5500] rounded-full">
                  {savedCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}

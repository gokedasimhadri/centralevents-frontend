import React from 'react';
import { Calendar, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#E6E6DE] bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#FF5500] flex items-center justify-center text-white shadow-xs">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-black text-[#111114] tracking-tight text-xl">
                Event<span className="text-[#FF5500]">Pulse</span>
              </span>
              <p className="text-[14px] font-mono text-[#71717A] mt-0.5">Events Management System · React & Vite</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[15px] font-mono font-semibold text-[#71717A]">
            <span className="flex items-center gap-1.5 text-[#FF5500]">
              <Sparkles className="w-4 h-4" />
              Engineered Theme UI
            </span>
            <span>Direct Event Links</span>
            <span>Official Portals</span>
          </div>

          <p className="text-[14px] font-mono text-[#71717A] text-center md:text-right">
            Designed with <Heart className="w-4 h-4 inline text-[#FF5500] fill-[#FF5500]" /> for seamless event discovery.
          </p>

        </div>
      </div>
    </footer>
  );
}

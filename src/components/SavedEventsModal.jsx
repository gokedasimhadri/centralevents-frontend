import React from 'react';
import { X, Heart, Calendar, Trash2, ArrowUpRight } from 'lucide-react';

export default function SavedEventsModal({
  isOpen,
  onClose,
  savedEvents,
  onRemoveSaved,
  onOpenDetails
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-[#E6E6DE] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4.5 border-b border-[#E6E6DE] flex items-center justify-between bg-[#FBFBF9]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-200">
              <Heart className="w-5 h-5 fill-rose-500" />
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-[#111114]">
                Saved Events ({savedEvents.length})
              </h3>
              <p className="text-[14px] font-mono text-[#71717A]">
                Your bookmarked and saved events list
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

        <div className="p-6 max-h-[60vh] overflow-y-auto divide-y divide-[#F4F4EE]">
          {savedEvents.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-slate-300 mx-auto mb-2.5 stroke-1" />
              <p className="text-[15px] font-mono font-bold text-[#111114]">No saved events yet</p>
              <p className="text-[14px] font-mono text-[#71717A] mt-1">
                Click the heart icon on any event card to save it for quick reference.
              </p>
            </div>
          ) : (
            savedEvents.map((evt) => (
              <div key={evt.id} className="py-4 first:pt-0 last:pb-0 flex items-center gap-4 group">
                <img
                  src={evt.imageUrl}
                  alt={evt.title}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#E6E6DE]"
                />
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-orange-50 text-[#FF5500] mb-0.5">
                    {evt.category}
                  </span>
                  <h4
                    onClick={() => {
                      onClose();
                      onOpenDetails(evt);
                    }}
                    className="text-[15px] font-display font-bold text-[#111114] truncate hover:text-[#FF5500] cursor-pointer"
                  >
                    {evt.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[14px] font-mono text-[#71717A] mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>{evt.date}</span>
                    <span>•</span>
                    <span className="font-bold text-[#111114]">{evt.price}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={evt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-orange-50 text-[#FF5500] hover:bg-[#FF5500] hover:text-white transition-colors"
                    title="Open Link"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => onRemoveSaved(evt.id)}
                    className="p-2.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Remove from Saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 bg-[#FBFBF9] border-t border-[#E6E6DE] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#E6E6DE] hover:bg-[#D4D4CA] text-[#111114] text-[15px] font-mono font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

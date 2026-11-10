import React from 'react';
import { Search, X } from 'lucide-react';
import { CATEGORIES } from '../data/mockEvents';

export default function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  locationTypeFilter,
  setLocationTypeFilter,
  priceFilter,
  setPriceFilter,
  sortBy,
  setSortBy
}) {
  const hasFilters = searchQuery || selectedCategory !== 'All' || locationTypeFilter !== 'All' || priceFilter !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setLocationTypeFilter('All');
    setPriceFilter('All');
    setSortBy('date-asc');
  };

  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#E6E6DE] mb-8 space-y-4 shadow-2xs">
      <div className="flex flex-col md:flex-row gap-3.5 items-stretch md:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4.5 h-4.5 absolute left-4 top-1/2 -translate-y-1/2 text-[#71717A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events by title, keyword, city, or venue..."
            className="w-full pl-11 pr-10 py-3 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] placeholder-[#A1A1AA] focus:outline-none focus:border-[#FF5500] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#71717A] hover:text-[#111114] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <select
            value={locationTypeFilter}
            onChange={(e) => setLocationTypeFilter(e.target.value)}
            className="px-3.5 py-3 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500] cursor-pointer"
          >
            <option value="All">All Formats</option>
            <option value="In-person">In-Person Only</option>
            <option value="Online">Online / Virtual</option>
          </select>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="px-3.5 py-3 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500] cursor-pointer"
          >
            <option value="All">All Prices</option>
            <option value="Free">Free Only</option>
            <option value="Paid">Paid Only</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3.5 py-3 bg-[#FBFBF9] border border-[#E6E6DE] rounded-lg text-[15px] font-mono text-[#111114] focus:outline-none focus:border-[#FF5500] cursor-pointer"
          >
            <option value="date-asc">Upcoming First</option>
            <option value="popular">Most Popular</option>
            <option value="title">Alphabetical (A-Z)</option>
          </select>

          {hasFilters && (
            <button
              onClick={resetFilters}
              className="px-3.5 py-2.5 rounded-lg text-[15px] font-mono font-bold text-[#71717A] hover:text-[#FF5500] hover:bg-orange-50 border border-[#E6E6DE] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              RESET
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-[15px] font-mono font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#FF5500] text-white shadow-xs'
                  : 'bg-[#F4F4EE] hover:bg-[#EAEAE2] text-[#3F3F46]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

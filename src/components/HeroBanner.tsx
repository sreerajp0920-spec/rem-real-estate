import React, { useState } from 'react';
import { Search, Compass, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroBanner: React.FC = () => {
  const { 
    setSearchQuery, 
    setListingTypeFilter,
    setActiveTab,
    t 
  } = useApp();

  const [activeTabType, setActiveTabType] = useState<'buy' | 'coinvest'>('buy');
  const [localSearch, setLocalSearch] = useState('');

  const scrollToCatalog = () => {
    const el = document.getElementById('residences-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch.trim());
    scrollToCatalog();
  };

  const handleTabClick = (tab: 'buy' | 'coinvest') => {
    setActiveTabType(tab);
    if (tab === 'buy') {
      setListingTypeFilter('sale');
      setActiveTab('properties');
      scrollToCatalog();
    } else {
      setActiveTab('invest');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-black text-white">
      
      {/* 1. Live Background Video with Seamless AutoPlay Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] transition-opacity duration-1000"
        >
          <source src="./videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* High-Contrast Gradient Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* 2. Top Subtle Advisory Header Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-xs tracking-wider uppercase">
          <div className="w-8 h-8 rounded-full bg-[#09240F]/80 border border-[#677865]/40 flex items-center justify-center backdrop-blur-md">
            <Compass className="w-4 h-4 text-[#702B00]" />
          </div>
          <div>
            <span className="font-helvetica-bold text-[11px] text-white block tracking-widest">
              {t('heroDirectDeveloper')}
            </span>
            <span className="font-helvetica text-[10px] text-[#F5F6F4]/75">
              {t('heroReraDiligence')}
            </span>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2 text-xs font-helvetica-bold text-white/90 bg-[#09240F]/70 px-4 py-1.5 rounded-full border border-[#677865]/40 backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-[#1F4027]" />
          <span>{t('heroZeroBrokerage')}</span>
        </div>
      </div>

      {/* 3. Center/Left Aesthetic - The Agency Reference Design */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-end">
        
        {/* Elegant Serif Headline with Reduced, Sophisticated Scale */}
        <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] max-w-4xl mb-8 sm:mb-12 drop-shadow-md">
          <span className="block font-normal font-serif text-white">{t('heroWindowToThe')}</span>
          <span className="block italic font-light tracking-wide text-white/95">
            {t('heroFinestRealEstate')}
          </span>
        </h1>

        {/* Action Tabs: BUY and CO-INVEST (Strictly no Rent!) */}
        <div className="flex items-center space-x-6 sm:space-x-8 mb-4 pl-1">
          <button
            onClick={() => handleTabClick('buy')}
            className={`font-helvetica-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all cursor-pointer pb-1.5 ${
              activeTabType === 'buy'
                ? 'text-white border-b-2 border-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {t('heroTabBuy')}
          </button>

          <button
            onClick={() => handleTabClick('coinvest')}
            className={`font-helvetica-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all cursor-pointer pb-1.5 ${
              activeTabType === 'coinvest'
                ? 'text-white border-b-2 border-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {t('heroTabCoInvest')}
          </button>
        </div>

        {/* Minimalist Pristine Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative w-full max-w-4xl">
          <div className="relative flex items-center shadow-2xl rounded-sm sm:rounded-md overflow-hidden bg-white">
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder={t('heroSearchPlaceholder')}
              className="w-full bg-white text-[#09240F] placeholder-stone-400 text-xs sm:text-sm md:text-base font-normal px-5 py-4 sm:py-4.5 focus:outline-none pr-14"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#09240F] hover:text-[#702B00] transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </form>

        {/* Underlined "Explore listings" smooth-scroll trigger */}
        <div className="mt-4 pl-1">
          <button
            onClick={scrollToCatalog}
            className="font-helvetica-bold text-xs sm:text-sm text-white underline underline-offset-4 hover:text-[#F5F6F4]/80 transition-colors cursor-pointer tracking-wider"
          >
            {t('heroExploreListings')}
          </button>
        </div>

      </div>

      {/* 4. Bottom Scrim Balance Padding */}
      <div className="relative z-10 w-full pb-4 pointer-events-none" />

    </div>
  );
};

import React, { useState, useEffect } from 'react';

const HERO_SLIDESHOW_IMAGES = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80', // Luxury villa with pool
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', // Modern architecture home
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', // Elegant interior living
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80', // Modern apartment tower
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80', // Contemporary residence
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80', // Gated land plots & green scape
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', // Grade-A commercial tech park
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'  // Luxury duplex balcony view
];

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDESHOW_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-12 sm:pt-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      
      {/* Subtle Right-Side Background Slideshow */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none overflow-hidden z-0">
        {HERO_SLIDESHOW_IMAGES.map((imgUrl, idx) => (
          <img
            key={imgUrl}
            src={imgUrl}
            alt="REM real estate ambient architectural landscape"
            className={`absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-125 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-20' : 'opacity-0'
            }`}
          />
        ))}

        {/* Gradient masks: fade seamlessly into left text and bottom borders */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
            <span>Direct Developer Listings • 0% Brokerage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            Verified Residential, Pre-Launch &amp; Commercial Properties.
          </h1>
          <p className="mt-3.5 text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl">
            Explore luxury penthouses, gated villa plots, modern apartments, and commercial tech parks. Verified carpet dimensions, high-definition video walkthroughs, and guaranteed clear RERA titles.
          </p>
        </div>
      </div>
    </div>
  );
};

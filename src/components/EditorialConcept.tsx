import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight, 
  MapPin, 
  Clock, 
  Building2, 
  ArrowRight,
  FileCheck2,
  Users2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface MicromarketDetail {
  id: string;
  name: string;
  driveTime: string;
  zone: string;
  avgPriceSqFt: string;
  landmarks: string[];
  filterLocation: string;
  description: string;
}

const MICROMARKETS: MicromarketDetail[] = [
  {
    id: 'indiranagar',
    name: 'Indiranagar',
    driveTime: '5 Mins',
    zone: 'South Bengaluru',
    avgPriceSqFt: '₹18,500 / sft',
    landmarks: ['100 Ft Road High Street', 'CMH Road Metro', 'Indiranagar Club'],
    filterLocation: 'South Bengaluru',
    description: 'Bespoke low-density villa enclaves and boutique duplex residences steps from Bengaluru’s primary dining and retail corridor.'
  },
  {
    id: 'koramangala',
    name: 'Koramangala',
    driveTime: '12 Mins',
    zone: 'South Bengaluru',
    avgPriceSqFt: '₹16,200 / sft',
    landmarks: ['3rd Block Founder Enclave', 'Sony World Junction', 'St. John’s Hub'],
    filterLocation: 'South Bengaluru',
    description: 'Established tech founders’ residential belt with heritage tree-lined avenues and high rental yield resilience.'
  },
  {
    id: 'orr',
    name: 'ORR - Bellandur',
    driveTime: '15 Mins',
    zone: 'South Bengaluru',
    avgPriceSqFt: '₹12,800 / sft',
    landmarks: ['RMZ Ecoworld & Ecospace', 'Prestige Tech Park', 'Upcoming Metro Line'],
    filterLocation: 'South Bengaluru',
    description: 'The heartbeat of Bengaluru’s Fortune 500 tech ecosystem. High-yield Grade-A commercial tech floors and luxury apartments.'
  },
  {
    id: 'whitefield',
    name: 'Whitefield',
    driveTime: '22 Mins',
    zone: 'North Bengaluru',
    avgPriceSqFt: '₹9,800 / sft',
    landmarks: ['Hope Farm Metro', 'ITPL Corridor', 'Windmills Craftworks'],
    filterLocation: 'North Bengaluru',
    description: 'Expansive gated villa communities, private swimming pools, and top international school catchment areas.'
  },
  {
    id: 'airport',
    name: 'KIA Airport Corridor',
    driveTime: '35 Mins',
    zone: 'North Bengaluru',
    avgPriceSqFt: '₹8,500 / sft',
    landmarks: ['Devanahalli SEZ', 'Aerotropolis Hub', 'Elevated Airport Expressway'],
    filterLocation: 'North Bengaluru',
    description: 'High-growth capital appreciation corridor with expansive golf estates, pre-launch land parcels, and aerotropolis infrastructure.'
  }
];

export const EditorialConcept: React.FC = () => {
  const { setSelectedProperty, properties, setCityFilter } = useApp();
  const [selectedMarketId, setSelectedMarketId] = useState<string>('indiranagar');

  const selectedMarket = MICROMARKETS.find(m => m.id === selectedMarketId) || MICROMARKETS[0];

  const handleSelectFeatured = () => {
    const featured = properties.find(p => p.id === 'rem-prop-villa-01') || properties[0];
    if (featured) {
      setSelectedProperty(featured);
    }
  };

  const handleFilterByMarket = (market: MicromarketDetail) => {
    setCityFilter(market.filterLocation);
    const el = document.getElementById('residences-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#FDFBF7] text-black py-20 sm:py-28 overflow-hidden border-b border-stone-300">
      
      {/* Decorative Floral / Botanical Accent */}
      <div className="absolute -top-10 -right-10 w-72 h-72 sm:w-88 sm:h-88 pointer-events-none opacity-40 select-none z-0">
        <img
          src="https://images.unsplash.com/photo-1596728325488-81e8556f849c?auto=format&fit=crop&w=600&q=80"
          alt="Lush botanical flora"
          className="w-full h-full object-cover rounded-full filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FDFBF7]/40 to-[#FDFBF7]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pre-Title Bar */}
        <div className="flex items-center justify-between border-b-2 border-stone-900 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-950" />
            <span className="font-helvetica-bold text-xs uppercase tracking-[0.25em] text-stone-950">
              THE ARCHITECTURAL STANDARD
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-3 text-xs font-helvetica-bold tracking-widest text-stone-900 uppercase">
            <span>DIRECT DEVELOPER PORTFOLIO</span>
            <span>•</span>
            <span>ZERO BROKERAGE</span>
          </div>
        </div>

        {/* Section Headline in Bold Helvetica */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="font-helvetica-black text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-stone-950 tracking-tight leading-[1.08] text-balance">
            RESIDENCES DESIGNED FOR PRIVACY, LIGHT AND TIMELESS LIVING.
          </h2>

          <div className="w-16 h-1 bg-stone-950 mx-auto my-7" />

          <p className="font-helvetica text-stone-800 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            We represent an exclusive collection of verified architectural villas, sky penthouses, and pre-leased tech parks. Every home is vetted by senior advocates with complete 30-year title reports, occupancy certificates, and RERA Karnataka compliance.
          </p>
        </div>

        {/* Asymmetrical Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-24">
          
          {/* Left Vertical Photo with High Contrast Details */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl bg-stone-200 group border border-stone-300">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary residence terrace in Bengaluru"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="font-helvetica-bold text-xs tracking-[0.2em] uppercase text-amber-300 block mb-1">
                    CRAFTED RESIDENCE
                  </span>
                  <h3 className="font-helvetica-black text-2xl sm:text-3xl uppercase font-black tracking-tight text-white">
                    Sovereign Crest Sky Villa
                  </h3>
                  <p className="font-helvetica text-xs text-stone-200 mt-0.5 font-medium">
                    Indiranagar, South Bengaluru • 4,850 sq ft
                  </p>
                </div>

                <button
                  onClick={handleSelectFeatured}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-amber-300 text-black font-helvetica-black text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-xl cursor-pointer"
                >
                  <span>Explore Unit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Overlapping Spec Badge */}
            <div className="hidden md:block absolute -bottom-6 -right-6 w-64 p-4 rounded-xl bg-white shadow-2xl border-2 border-stone-900">
              <span className="font-helvetica-bold text-[10px] uppercase tracking-[0.2em] text-stone-950 block mb-1">
                AUTHENTIC SPECIFICATION
              </span>
              <p className="font-helvetica text-xs font-bold text-stone-900 leading-snug">
                Native Sadahalli granite, exposed architectural concrete, double-glazed acoustic curtain walls.
              </p>
            </div>
          </div>

          {/* Right Editorial Pillar Highlights in Bold Helvetica */}
          <div className="lg:col-span-5 lg:pl-4 space-y-6">
            <div>
              <span className="font-helvetica-bold text-xs uppercase tracking-[0.25em] text-stone-600 block mb-2">
                OUR DUE DILIGENCE GUARANTEE
              </span>
              <h3 className="font-helvetica-black text-3xl sm:text-4xl font-black text-stone-950 uppercase leading-tight">
                Authentic materials. Verified legal titles.
              </h3>
              <p className="mt-3 font-helvetica text-sm text-stone-800 font-medium leading-relaxed">
                We remove the ambiguity from Bengaluru real estate. No inflated super built-up claims, zero hidden development charges, and 100% transparent RERA carpet efficiency ratios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm">
                <span className="font-helvetica-black text-3xl font-black text-stone-950 block mb-0.5">
                  14 FT
                </span>
                <span className="font-helvetica-bold text-xs text-stone-800 uppercase tracking-wider block">
                  Ceiling Clearances
                </span>
                <span className="font-helvetica text-[11px] text-stone-600 mt-1 block">
                  Double-height living volumes
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-stone-200 shadow-sm">
                <span className="font-helvetica-black text-3xl font-black text-stone-950 block mb-0.5">
                  100%
                </span>
                <span className="font-helvetica-bold text-xs text-stone-800 uppercase tracking-wider block">
                  Clear RERA Titles
                </span>
                <span className="font-helvetica text-[11px] text-stone-600 mt-1 block">
                  30-year advocate title search
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center space-x-3.5">
              <ShieldCheck className="w-6 h-6 text-amber-300 shrink-0" />
              <div>
                <span className="font-helvetica-bold text-xs uppercase tracking-wider text-white block">
                  Direct Developer Representation
                </span>
                <span className="font-helvetica text-xs text-stone-300 font-normal">
                  Zero buyer brokerage • Price-match guarantee directly with builders
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Micromarket Transit Timeline (Clickable & Engaging) */}
        <div className="pt-14 border-t-2 border-stone-300">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-helvetica-bold text-xs uppercase tracking-[0.25em] text-stone-600 block mb-1">
                INTERACTIVE MICROMARKET EXPLORER
              </span>
              <h4 className="font-helvetica-black text-2xl sm:text-3xl font-black uppercase text-stone-950">
                Click any zone to inspect drive times &amp; pricing
              </h4>
            </div>

            <span className="text-xs font-helvetica-bold text-stone-600 uppercase tracking-wider">
              Bengaluru Metro &amp; Arterial Network
            </span>
          </div>

          {/* Interactive Route Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {MICROMARKETS.map((market) => {
              const isSelected = selectedMarketId === market.id;

              return (
                <button
                  key={market.id}
                  onClick={() => setSelectedMarketId(market.id)}
                  className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-stone-950 text-white border-stone-950 shadow-xl scale-102' 
                      : 'bg-white text-stone-900 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-helvetica-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected ? 'bg-amber-400 text-black' : 'bg-stone-100 text-stone-700'
                    }`}>
                      {market.driveTime}
                    </span>
                    <Compass className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-stone-400'}`} />
                  </div>

                  <span className="font-helvetica-black text-lg font-black uppercase block leading-tight">
                    {market.name}
                  </span>
                  <span className={`text-xs font-helvetica font-medium mt-1 block ${
                    isSelected ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    {market.avgPriceSqFt}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expanded Selected Micromarket Details Card */}
          <div className="p-6 rounded-2xl bg-white border-2 border-stone-900 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center space-x-3">
                <span className="font-helvetica-black text-xl uppercase font-black text-stone-950">
                  {selectedMarket.name} Corridor
                </span>
                <span className="text-xs font-helvetica-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {selectedMarket.zone}
                </span>
              </div>

              <p className="font-helvetica text-sm text-stone-800 font-medium leading-relaxed">
                {selectedMarket.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-helvetica-bold text-stone-700">
                <span className="text-stone-500 uppercase text-[11px] font-bold">Key Anchors:</span>
                {selectedMarket.landmarks.map((landmark, idx) => (
                  <span key={idx} className="bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200 text-stone-900">
                    {landmark}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleFilterByMarket(selectedMarket)}
              className="px-6 py-3.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-helvetica-bold text-xs uppercase tracking-wider shrink-0 transition-all flex items-center space-x-2 shadow-lg cursor-pointer"
            >
              <span>View Residences in {selectedMarket.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

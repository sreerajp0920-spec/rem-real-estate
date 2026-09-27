import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowDown, 
  Eye, 
  MapPin, 
  ShieldCheck, 
  X,
  Compass,
  CheckCircle2,
  PhoneCall,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface Hotspot {
  id: string;
  x: string;
  y: string;
  title: string;
  subtitle: string;
  category: string;
  propertyId?: string;
  specs: string;
  imgUrl: string;
}

interface ArchitecturalView {
  id: string;
  label: string;
  tagline: string;
  bgUrl: string;
  hotspots: Hotspot[];
}

const ARCHITECTURAL_VIEWS: ArchitecturalView[] = [
  {
    id: 'poolside',
    label: '01 / Horizon Pool & Terrace',
    tagline: 'Private 25m Heated Lap Pool • Italian Glass Mosaic',
    bgUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
    hotspots: [
      {
        id: 'pool',
        x: '52%',
        y: '74%',
        title: 'Private 25m Horizon Lap Pool',
        subtitle: 'Temperature-controlled heated saltwater lap pool with submerged LED illumination and sunken cabana seating.',
        category: 'Private Wellness',
        specs: '25m Length • Bisazza Mosaic • Saltwater Filtration',
        imgUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80',
        propertyId: 'rem-prop-villa-01'
      },
      {
        id: 'deck',
        x: '34%',
        y: '56%',
        title: 'Teak Sundeck & Outdoor Dining',
        subtitle: 'Weather-resistant Burmese teak deck integrated with outdoor barbecue station and pergola shading.',
        category: 'Alfresco Living',
        specs: '1,200 sq ft Deck • Weathered Teak Finish',
        imgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
        propertyId: 'rem-prop-villa-01'
      }
    ]
  },
  {
    id: 'facade',
    label: '02 / Double-Height Façade',
    tagline: '14-Foot Acoustic Glass Walls • Native Sadahalli Stone',
    bgUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
    hotspots: [
      {
        id: 'glass',
        x: '45%',
        y: '42%',
        title: '14-Foot Floor-to-Ceiling Curtain Wall',
        subtitle: 'Double-glazed Saint-Gobain acoustic curtain glass delivering 38dB noise reduction and low-E thermal insulation.',
        category: 'Building Envelope',
        specs: '14ft Clear Height • Low-E Double Glazed',
        imgUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
        propertyId: 'rem-prop-villa-01'
      },
      {
        id: 'stone',
        x: '75%',
        y: '65%',
        title: 'Hand-Chiseled Sadahalli Granite',
        subtitle: 'Locally quarried Karnataka granite cladding that ages with a natural silver patina while cooling internal thermal mass.',
        category: 'Sustainable Materials',
        specs: '100% Native Karnataka Stone • Thermal Mass Cooling',
        imgUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
        propertyId: 'rem-prop-villa-01'
      }
    ]
  },
  {
    id: 'solarium',
    label: '03 / Sky Penthouse Solarium',
    tagline: 'Panoramic 360° Skyline Views Over Bengaluru',
    bgUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90',
    hotspots: [
      {
        id: 'rooftop',
        x: '62%',
        y: '35%',
        title: 'Sky Deck & Heated Jacuzzi',
        subtitle: 'Unobstructed western sunset views towards Nandi Hills and central Bengaluru skyline.',
        category: 'Penthouse Collection',
        specs: 'Floor 28 of 32 • 1,450 sq ft Open Sky Solarium',
        imgUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
        propertyId: 'rem-prop-penthouse-01'
      }
    ]
  }
];

export const HeroBanner: React.FC = () => {
  const { 
    properties, 
    setSelectedProperty, 
    setPropertyTypeFilter, 
    setPreLaunchOnly, 
    setSelectedCategory,
    t,
    setIsCompanyInvestModalOpen
  } = useApp();

  const [activeViewIdx, setActiveViewIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const currentView = ARCHITECTURAL_VIEWS[activeViewIdx];

  const handleOpenProperty = (propertyId?: string) => {
    if (!propertyId) return;
    const found = properties.find(p => p.id === propertyId);
    if (found) {
      setSelectedProperty(found);
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('residences-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterClick = (type: 'all' | 'villa' | 'penthouse' | 'commercial' | 'prelaunch') => {
    if (type === 'all') {
      setPropertyTypeFilter('all');
      setSelectedCategory('all');
      setPreLaunchOnly(false);
    } else if (type === 'villa') {
      setPropertyTypeFilter('Villa');
      setSelectedCategory('residential');
      setPreLaunchOnly(false);
    } else if (type === 'penthouse') {
      setPropertyTypeFilter('Penthouse');
      setSelectedCategory('residential');
      setPreLaunchOnly(false);
    } else if (type === 'commercial') {
      setPropertyTypeFilter('Commercial');
      setSelectedCategory('commercial');
      setPreLaunchOnly(false);
    } else if (type === 'prelaunch') {
      setPreLaunchOnly(true);
      setPropertyTypeFilter('all');
    }
    scrollToCatalog();
  };

  return (
    <div className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-black text-white">
      
      {/* Background Architectural Masterpiece Image with Smooth Transition */}
      <div className="absolute inset-0 z-0">
        <img
          key={currentView.bgUrl}
          src={currentView.bgUrl}
          alt={currentView.label}
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05] transition-opacity duration-700 ease-in-out"
        />

        {/* High-Contrast Gradient Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-black/45 pointer-events-none" />
      </div>

      {/* Top Header Bar & Rotating Seal */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-start justify-between">
        
        {/* Rotating Monogram Seal Badge */}
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full animate-spin-slow opacity-95 select-none pointer-events-none"
            >
              <defs>
                <path
                  id="circlePathHero"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="7.2" letterSpacing="0.28em" fill="#FFFFFF" className="font-helvetica font-black uppercase">
                <textPath href="#circlePathHero" startOffset="0%">
                  • REM ESTATES • BENGALURU • BOUTIQUE LIVING •
                </textPath>
              </text>

            </svg>

            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#09240F]/85 backdrop-blur-md border border-[#677865]/40 flex items-center justify-center text-[#702B00] shadow-2xl">
              <Compass className="w-5 h-5 text-[#702B00]" />
            </div>
          </div>

          <div className="hidden md:block">
            <span className="font-helvetica-bold text-xs tracking-[0.2em] uppercase text-[#702B00] block">
              DIRECT DEVELOPER REPRESENTATION
            </span>
            <span className="font-helvetica font-medium text-xs text-[#F5F6F4]/90">
              Karnataka RERA Diligence Guaranteed • 0% Brokerage
            </span>
          </div>
        </div>

        {/* Right Corner Interactive Concierge Button */}
        <div className="flex flex-col items-end space-y-2">
          <a
            href="tel:+918040008000"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#09240F]/90 hover:bg-[#1F4027] text-white font-helvetica-bold text-xs tracking-wider border border-[#677865]/40 backdrop-blur-md shadow-xl transition-all cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#702B00]" />
            <span>Advisory Desk: +91 80 4000 8000</span>
          </a>
          <span className="text-[11px] text-[#F5F6F4]/80 font-semibold tracking-wider uppercase">
            Avg. Response Time: 15 Minutes
          </span>
        </div>
      </div>

      {/* Interactive Architectural Hotspots Across Current View */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {currentView.hotspots.map((hotspot) => {
          const isSelected = activeHotspot?.id === hotspot.id;

          return (
            <div
              key={hotspot.id}
              style={{ left: hotspot.x, top: hotspot.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              {/* Hotspot Pulse Trigger Button */}
              <button
                onClick={() => setActiveHotspot(isSelected ? null : hotspot)}
                className={`group relative flex items-center justify-center cursor-pointer transition-transform duration-300 ${
                  isSelected ? 'scale-125' : 'hover:scale-110'
                }`}
                title={`Inspect ${hotspot.title}`}
              >
                <span className="absolute w-12 h-12 rounded-full bg-white/40 hotspot-pulse" />

                <span className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border-2 shadow-2xl transition-all ${
                  isSelected 
                    ? 'bg-[#702B00] text-white border-white' 
                    : 'bg-[#09240F] text-white border-[#677865]/60 hover:bg-[#1F4027]'
                }`}>
                  <span className="font-helvetica-bold text-xs leading-none">
                    {isSelected ? '✕' : '+'}
                  </span>
                </span>

                {!isSelected && (
                  <span className="absolute left-11 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#09240F]/95 backdrop-blur-md text-xs font-helvetica-bold text-white border border-[#677865]/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl">
                    {hotspot.title}
                  </span>
                )}
              </button>

              {/* Floating Architectural Spec Card */}
              {isSelected && (
                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-80 sm:w-88 p-5 rounded-2xl bg-[#09240F]/95 backdrop-blur-2xl border border-[#677865]/40 shadow-2xl z-30 animate-in fade-in slide-in-from-bottom-3 duration-300">
                  <div className="flex items-start justify-between mb-2.5">
                    <span className="font-helvetica-bold text-[11px] uppercase tracking-widest text-[#702B00] bg-[#702B00]/15 px-2 py-0.5 rounded border border-[#702B00]/40">
                      {hotspot.category}
                    </span>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-[#677865] hover:text-white p-1 rounded cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3.5 border border-[#677865]/30">
                    <img 
                      src={hotspot.imgUrl} 
                      alt={hotspot.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  <h4 className="font-helvetica-bold text-lg text-white leading-snug mb-1.5">
                    {hotspot.title}
                  </h4>
                  <p className="font-helvetica text-xs text-[#F5F6F4]/90 leading-relaxed font-normal mb-3">
                    {hotspot.subtitle}
                  </p>

                  <div className="pt-3 border-t border-[#677865]/30 flex items-center justify-between text-xs">
                    <span className="font-helvetica font-semibold text-[#702B00]">
                      {hotspot.specs}
                    </span>
                    {hotspot.propertyId && (
                      <button
                        onClick={() => handleOpenProperty(hotspot.propertyId)}
                        className="font-helvetica-bold text-white bg-[#1F4027] hover:bg-[#405D47] px-3 py-1.5 rounded-lg border border-[#677865]/40 transition-all inline-flex items-center space-x-1 cursor-pointer"
                      >
                        <span>View Residence</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Center Headline & Editorial Copy */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center text-center">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#09240F]/80 backdrop-blur-md border border-[#677865]/40 text-[#F5F6F4] font-helvetica-bold text-xs tracking-[0.25em] uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#702B00]" />
          <span>{t('heroTag')}</span>
        </div>

        {/* Big Bold Headline in Pure Helvetica */}
        <h1 className="font-helvetica-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-white max-w-5xl uppercase text-balance">
          {t('heroHeadline1')} <br className="hidden sm:inline" />
          <span className="text-[#702B00]">{t('heroHeadline2')}</span>
        </h1>

        <p className="mt-5 font-helvetica text-[#F5F6F4] text-sm sm:text-base md:text-lg font-medium tracking-normal max-w-3xl leading-relaxed">
          {t('heroSubtitle')}
        </p>

        {/* Interactive View Toggles (Poolside, Façade, Solarium) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-[#09240F]/80 backdrop-blur-xl border border-[#677865]/40">
          {ARCHITECTURAL_VIEWS.map((view, idx) => (
            <button
              key={view.id}
              onClick={() => {
                setActiveViewIdx(idx);
                setActiveHotspot(null);
              }}
              className={`px-4 py-2 rounded-xl font-helvetica-bold text-xs tracking-wider transition-all cursor-pointer ${
                activeViewIdx === idx 
                  ? 'bg-[#1F4027] text-white shadow-lg scale-102 border border-[#677865]/40' 
                  : 'text-[#F5F6F4]/80 hover:text-white hover:bg-[#1F4027]/40'
              }`}
            >
              <span>{view.label}</span>
            </button>
          ))}
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={scrollToCatalog}
            className="group px-7 py-3.5 rounded-full bg-[#702B00] hover:bg-[#542000] text-white font-helvetica-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center space-x-2.5 shadow-2xl cursor-pointer"
          >
            <span>{t('heroExploreBtn')}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Direct Corporate Company Investment CTA */}
          <button
            onClick={() => setIsCompanyInvestModalOpen(true)}
            className="px-7 py-3.5 rounded-full bg-[#1F4027] hover:bg-[#405D47] text-white font-helvetica-black text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl cursor-pointer border border-[#677865]/40 flex items-center space-x-2 hover:scale-102"
          >
            <TrendingUp className="w-4 h-4 text-[#702B00]" />
            <span>{t('heroInvestCompanyBtn')}</span>
          </button>

          <button
            onClick={() => handleOpenProperty('rem-prop-villa-01')}
            className="px-6 py-3.5 rounded-full bg-[#09240F]/90 hover:bg-[#1F4027] text-white font-helvetica-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md border border-[#677865]/40 transition-all cursor-pointer flex items-center space-x-2"
          >
            <Eye className="w-4 h-4 text-[#702B00]" />
            <span>Tour Signature Villa</span>
          </button>
        </div>

        {/* Interactive Category Jump Dock */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-4xl">
          <button
            onClick={() => handleFilterClick('villa')}
            className="p-3 rounded-xl bg-[#09240F]/80 hover:bg-[#1F4027]/90 border border-[#677865]/35 backdrop-blur-md text-left transition-all cursor-pointer group"
          >
            <span className="font-helvetica-bold text-xs text-white block group-hover:text-[#702B00]">
              Private Villas
            </span>
            <span className="font-helvetica text-[11px] text-[#F5F6F4]/80">
              Gated Plots &amp; Gardens
            </span>
          </button>

          <button
            onClick={() => handleFilterClick('penthouse')}
            className="p-3 rounded-xl bg-[#09240F]/80 hover:bg-[#1F4027]/90 border border-[#677865]/35 backdrop-blur-md text-left transition-all cursor-pointer group"
          >
            <span className="font-helvetica-bold text-xs text-white block group-hover:text-[#702B00]">
              Sky Penthouses
            </span>
            <span className="font-helvetica text-[11px] text-[#F5F6F4]/80">
              Panoramic Solariums
            </span>
          </button>

          <button
            onClick={() => handleFilterClick('commercial')}
            className="p-3 rounded-xl bg-[#09240F]/80 hover:bg-[#1F4027]/90 border border-[#677865]/35 backdrop-blur-md text-left transition-all cursor-pointer group"
          >
            <span className="font-helvetica-bold text-xs text-white block group-hover:text-[#702B00]">
              Commercial Hubs
            </span>
            <span className="font-helvetica text-[11px] text-[#F5F6F4]/80">
              8.5%+ Co-Ownership Yield
            </span>
          </button>

          <button
            onClick={() => handleFilterClick('prelaunch')}
            className="p-3 rounded-xl bg-[#09240F]/80 hover:bg-[#1F4027]/90 border border-[#677865]/35 backdrop-blur-md text-left transition-all cursor-pointer group"
          >
            <span className="font-helvetica-bold text-xs text-white block group-hover:text-[#702B00]">
              Pre-Launch Projects
            </span>
            <span className="font-helvetica text-[11px] text-[#F5F6F4]/80">
              Early Allotment Tier
            </span>
          </button>
        </div>

      </div>

      {/* Bottom Editorial Bar & Coordinates */}
      <div className="relative z-10 w-full border-t border-[#677865]/30 bg-[#09240F]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F6F4]/90 font-medium gap-2">
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-[#702B00]" />
            <span className="font-helvetica-bold tracking-wider uppercase text-white">
              Indiranagar • Whitefield • Outer Ring Road • Devanahalli
            </span>
          </div>

          <div className="flex items-center space-x-6 text-[11px] font-helvetica-bold tracking-wider uppercase text-[#F5F6F4]/90">
            <span className="flex items-center space-x-1.5 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F4027]" />
              <span>100% RERA Diligence</span>
            </span>
            <span>•</span>
            <span className="text-[#702B00]">Zero Brokerage</span>
            <span>•</span>
            <span className="text-white">12° 58' N, 77° 35' E</span>
          </div>
        </div>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { Property } from '../types';
import { useApp } from '../context/AppContext';
import { formatINR, formatNumber } from '../utils/formatters';
import { 
  Heart, 
  MapPin, 
  PlayCircle, 
  ShieldCheck, 
  Train, 
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { 
    currentUser, 
    toggleFavorite, 
    setSelectedProperty,
    setIsInvestModalOpen,
    setInvestTargetProperty
  } = useApp();

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const isFavorite = currentUser.savedPropertyIds.includes(property.id);

  const totalImages = property.images.length;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex(prev => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group bg-white rounded-2xl border-2 border-stone-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col hover:border-stone-900">
      
      {/* Top Media Container with Interactive Image Navigation */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={property.images[activeImgIndex] || property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
        />

        {/* High-Contrast Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5 pointer-events-auto">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-helvetica-black tracking-wider uppercase bg-stone-950 text-white shadow-md">
              FOR SALE
            </span>

            {property.isUpcoming && (
              <span className="px-2.5 py-1 rounded-md text-[10px] font-helvetica-black tracking-wider uppercase bg-amber-400 text-black shadow-md">
                PRE-LAUNCH
              </span>
            )}

            {property.peaceOfMind.reraId && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10px] font-helvetica-bold bg-black/75 text-white border border-white/30 backdrop-blur-md">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>RERA VERIFIED</span>
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <div className="flex items-center space-x-1.5 pointer-events-auto">
            <button
              onClick={() => toggleFavorite(property.id)}
              className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer shadow-md ${
                isFavorite 
                  ? 'bg-rose-500 text-white' 
                  : 'bg-white/90 hover:bg-white text-stone-900'
              }`}
              title="Save residence"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Interactive Image Carousel Arrows on Hover */}
        {totalImages > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <button
              onClick={handlePrevImage}
              className="p-1.5 rounded-full bg-black/60 hover:bg-black text-white pointer-events-auto transition-transform hover:scale-110 cursor-pointer shadow-lg"
              title="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextImage}
              className="p-1.5 rounded-full bg-black/60 hover:bg-black text-white pointer-events-auto transition-transform hover:scale-110 cursor-pointer shadow-lg"
              title="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Video Tour Indicator */}
        {property.videoTourUrl && (
          <button
            onClick={() => setSelectedProperty(property)}
            className="absolute bottom-3 left-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-stone-950/90 hover:bg-stone-950 text-white font-helvetica-bold text-[11px] backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-lg"
          >
            <PlayCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>4K Video Tour</span>
          </button>
        )}

        {/* Image Counter Badge */}
        {totalImages > 1 && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-helvetica-bold text-white tracking-widest">
            {activeImgIndex + 1} / {totalImages}
          </div>
        )}
      </div>

      {/* Main Body Details with High-Intensity Text */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Developer & Property Type */}
          <div className="flex items-center justify-between text-xs tracking-wider uppercase font-helvetica-bold text-stone-700 mb-2">
            <span>{property.developer}</span>
            <span className="text-stone-950 bg-stone-100 border border-stone-300 px-2 py-0.5 rounded font-black text-[10px]">
              {property.propertyType || property.category.replace('_', ' ')}
            </span>
          </div>

          {/* Title in Bold Helvetica */}
          <h4 
            onClick={() => setSelectedProperty(property)}
            className="font-helvetica-bold text-xl uppercase font-black text-stone-950 group-hover:text-amber-800 transition-colors cursor-pointer line-clamp-1 leading-snug"
          >
            {property.title}
          </h4>

          {/* Location & Metro Distance */}
          <div className="flex items-center space-x-2 text-xs font-helvetica font-semibold text-stone-800 mt-1.5 mb-4">
            <MapPin className="w-4 h-4 text-stone-900 shrink-0" />
            <span className="truncate">{property.location.locality}, {property.location.city}</span>
            <span className="text-stone-400">•</span>
            <div className="flex items-center space-x-1 text-stone-700 shrink-0">
              <Train className="w-3.5 h-3.5 text-stone-900" />
              <span>{property.location.nearestMetroDistanceKm} km</span>
            </div>
          </div>

          {/* Dimensions Box with High-Intensity Text */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-stone-50 rounded-xl border border-stone-200 text-center mb-4">
            <div>
              <span className="text-[10px] text-stone-600 font-helvetica-bold uppercase tracking-wider block">Config</span>
              <span className="text-xs font-helvetica-bold text-stone-950 truncate block mt-0.5">
                {property.dimensions.bhk.split(' ')[0]} {property.dimensions.bhk.split(' ')[1] || 'Unit'}
              </span>
            </div>
            <div className="border-x border-stone-300">
              <span className="text-[10px] text-stone-600 font-helvetica-bold uppercase tracking-wider block">Carpet Area</span>
              <span className="text-xs font-helvetica-bold text-stone-950 block mt-0.5">
                {formatNumber(property.dimensions.carpetAreaSqFt)} <span className="text-[10px] font-normal text-stone-600">sft</span>
              </span>
            </div>
            <div>
              <span className="text-[10px] text-stone-600 font-helvetica-bold uppercase tracking-wider block">Efficiency</span>
              <span className="text-xs font-helvetica-bold text-stone-950 block mt-0.5">
                {property.dimensions.efficiencyPercentage}%
              </span>
            </div>
          </div>

          {/* Tagline / Key Feature */}
          <div className="mb-4">
            <p className="font-helvetica text-xs text-stone-800 line-clamp-1 font-medium leading-relaxed">
              {property.tagline}
            </p>
          </div>

          {/* Investment Co-Ownership Box */}
          {property.investment?.isInvestable && (
            <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between text-xs">
              <div>
                <div className="flex items-center space-x-1 font-helvetica-bold text-stone-950 text-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-800" />
                  <span>Co-Ownership ({property.investment.grossRentalYieldPercentage}% Net Yield)</span>
                </div>
                <div className="text-[11px] text-stone-700 font-medium mt-0.5">
                  From {formatINR(property.investment.minTicketSize || 50000)} • Monthly Dividend
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setInvestTargetProperty(property);
                  setIsInvestModalOpen(true);
                }}
                className="px-3 py-1.5 rounded-lg bg-stone-950 hover:bg-stone-800 text-white font-helvetica-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer"
              >
                Invest
              </button>
            </div>
          )}
        </div>

        {/* Pricing & Footer Actions in High-Intensity Typography */}
        <div className="pt-4 border-t-2 border-stone-200 flex items-center justify-between">
          <div>
            <div className="font-helvetica-black text-2xl font-black text-stone-950 leading-none">
              {formatINR(property.pricing.totalPrice)}
            </div>
            <div className="text-xs font-helvetica font-semibold text-stone-700 tracking-wide mt-1">
              ₹{formatNumber(property.pricing.pricePerSqFt)} / sft
            </div>
          </div>

          <button
            onClick={() => setSelectedProperty(property)}
            className="px-5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-xs font-helvetica-bold tracking-wider uppercase transition-all flex items-center space-x-2 cursor-pointer shadow-md"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

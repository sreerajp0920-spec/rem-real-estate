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
  ChevronRight 
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
    <div className="group bg-[#FFFFFF] rounded-2xl border-2 border-[#677865]/25 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col hover:border-[#1F4027]">
      
      {/* Top Media Container with Interactive Image Navigation */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F6F4]">
        <img
          src={property.images[activeImgIndex] || property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
        />

        {/* High-Contrast Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09240F]/80 via-transparent to-[#09240F]/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex flex-wrap gap-1.5 pointer-events-auto">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-helvetica-black tracking-wider uppercase bg-[#09240F] text-white shadow-md">
              FOR SALE
            </span>

            {property.isUpcoming && (
              <span className="px-2.5 py-1 rounded-md text-[10px] font-helvetica-black tracking-wider uppercase bg-[#702B00] text-white shadow-md">
                PRE-LAUNCH
              </span>
            )}

            {property.peaceOfMind.reraId && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10px] font-helvetica-bold bg-[#09240F]/85 text-white border border-[#677865]/40 backdrop-blur-md">
                <ShieldCheck className="w-3 h-3 text-[#1F4027]" />
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
                  ? 'bg-[#702B00] text-white' 
                  : 'bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#09240F]'
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
              className="p-1.5 rounded-full bg-[#09240F]/70 hover:bg-[#09240F] text-white pointer-events-auto transition-transform hover:scale-110 cursor-pointer shadow-lg"
              title="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextImage}
              className="p-1.5 rounded-full bg-[#09240F]/70 hover:bg-[#09240F] text-white pointer-events-auto transition-transform hover:scale-110 cursor-pointer shadow-lg"
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
            className="absolute bottom-3 left-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#09240F]/90 hover:bg-[#09240F] text-white font-helvetica-bold text-[11px] backdrop-blur-md border border-[#677865]/40 transition-all cursor-pointer shadow-lg"
          >
            <PlayCircle className="w-3.5 h-3.5 text-[#702B00]" />
            <span>4K Video Tour</span>
          </button>
        )}

        {/* Image Counter Badge */}
        {totalImages > 1 && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[#09240F]/80 backdrop-blur-md text-[10px] font-helvetica-bold text-white tracking-widest">
            {activeImgIndex + 1} / {totalImages}
          </div>
        )}
      </div>

      {/* Main Body Details with High-Intensity Text */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Developer & Property Type */}
          <div className="flex items-center justify-between text-xs tracking-wider uppercase font-helvetica-bold text-[#405D47] mb-2">
            <span>{property.developer}</span>
            <span className="text-[#09240F] bg-[#F5F6F4] border border-[#677865]/25 px-2 py-0.5 rounded font-black text-[10px]">
              {property.propertyType || property.category.replace('_', ' ')}
            </span>
          </div>

          {/* Title in Bold Helvetica */}
          <h4 
            onClick={() => setSelectedProperty(property)}
            className="font-helvetica-bold text-xl uppercase font-black text-[#09240F] group-hover:text-[#702B00] transition-colors cursor-pointer line-clamp-1 leading-snug"
          >
            {property.title}
          </h4>

          {/* Location & Metro Distance */}
          <div className="flex items-center space-x-2 text-xs font-helvetica font-semibold text-[#405D47] mt-1.5 mb-4">
            <MapPin className="w-4 h-4 text-[#702B00] shrink-0" />
            <span className="truncate">{property.location.locality}, {property.location.city}</span>
            <span className="text-[#677865]">•</span>
            <div className="flex items-center space-x-1 text-[#405D47] shrink-0">
              <Train className="w-3.5 h-3.5 text-[#405D47]" />
              <span>{property.location.nearestMetroDistanceKm} km</span>
            </div>
          </div>

          {/* Dimensions Box */}
          <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-[#F5F6F4] rounded-xl border border-[#677865]/20 text-center mb-4">
            <div>
              <span className="text-[10px] text-[#677865] font-helvetica-bold uppercase tracking-wider block">Config</span>
              <span className="text-xs font-helvetica-bold text-[#09240F] truncate block mt-0.5">
                {property.dimensions.bhk.split(' ')[0]} {property.dimensions.bhk.split(' ')[1] || 'Unit'}
              </span>
            </div>
            <div className="border-x border-[#677865]/25">
              <span className="text-[10px] text-[#677865] font-helvetica-bold uppercase tracking-wider block">Carpet Area</span>
              <span className="text-xs font-helvetica-bold text-[#09240F] block mt-0.5">
                {formatNumber(property.dimensions.carpetAreaSqFt)} <span className="text-[10px] font-normal text-[#677865]">sft</span>
              </span>
            </div>
            <div>
              <span className="text-[10px] text-[#677865] font-helvetica-bold uppercase tracking-wider block">Efficiency</span>
              <span className="text-xs font-helvetica-bold text-[#09240F] block mt-0.5">
                {property.dimensions.efficiencyPercentage}%
              </span>
            </div>
          </div>

          {/* Tagline / Key Feature */}
          <div className="mb-4">
            <p className="font-helvetica text-xs text-[#405D47] line-clamp-1 font-medium leading-relaxed">
              {property.tagline}
            </p>
          </div>

          {/* Investment Co-Ownership Box */}
          {property.investment?.isInvestable && (
            <div className="mb-4 p-3 rounded-xl bg-[#F5F6F4] border border-[#702B00]/40 flex items-center justify-between text-xs">
              <div>
                <div className="flex items-center space-x-1 font-helvetica-bold text-[#09240F] text-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-[#702B00]" />
                  <span>Co-Ownership ({property.investment.grossRentalYieldPercentage}% Net Yield)</span>
                </div>
                <div className="text-[11px] text-[#405D47] font-medium mt-0.5">
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
                className="px-3 py-1.5 rounded-lg bg-[#702B00] hover:bg-[#542000] text-white font-helvetica-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                Invest
              </button>
            </div>
          )}
        </div>

        {/* Pricing & Footer Actions in High-Intensity Typography */}
        <div className="pt-4 border-t-2 border-[#677865]/20 flex items-center justify-between">
          <div>
            <div className="font-helvetica-black text-2xl font-black text-[#09240F] leading-none">
              {formatINR(property.pricing.totalPrice)}
            </div>
            <div className="text-xs font-helvetica font-semibold text-[#405D47] tracking-wide mt-1">
              ₹{formatNumber(property.pricing.pricePerSqFt)} / sft
            </div>
          </div>

          <button
            onClick={() => setSelectedProperty(property)}
            className="px-5 py-2.5 rounded-full bg-[#702B00] hover:bg-[#542000] text-white text-xs font-helvetica-bold tracking-wider uppercase transition-all flex items-center space-x-2 cursor-pointer shadow-md"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Property } from '../types';
import { useApp } from '../context/AppContext';
import { formatINR, formatNumber } from '../utils/formatters';
import { 
  X, 
  MapPin, 
  Train, 
  Plane, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Play, 
  Image as ImageIcon, 
  Layout, 
  Calendar, 
  TrendingUp, 
  Award, 
  Maximize2, 
  Compass, 
  Layers, 
  DollarSign, 
  Download, 
  Share2, 
  Scale, 
  Heart,
  PhoneCall,
  Sparkles,
  Video,
  Users
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose
}) => {
  const { 
    currentUser, 
    toggleFavorite, 
    compareIds, 
    toggleCompare, 
    bookSiteVisit,
    setIsInvestModalOpen,
    setInvestTargetProperty,
    t
  } = useApp();

  const [activeMediaTab, setActiveMediaTab] = useState<'photos' | 'video' | 'floorplan'>('photos');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const propertyVideos = property.videos && property.videos.length > 0 
    ? property.videos 
    : (property.videoTourUrl ? [property.videoTourUrl] : []);


  // Visit booking state
  const [visitDate, setVisitDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [visitSlot, setVisitSlot] = useState('11:00 AM - 12:30 PM');
  const [visitType, setVisitType] = useState<'Physical Site Tour' | 'Virtual Video Walkthrough'>('Physical Site Tour');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const isFavorite = currentUser.savedPropertyIds.includes(property.id);
  const isCompared = compareIds.includes(property.id);

  const handleBookVisit = (e: React.FormEvent) => {
    e.preventDefault();
    bookSiteVisit(property.id, visitDate, visitSlot, visitType);
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 4000);
  };

  const handleDownloadBrochure = () => {
    const reportContent = `
======================================================
REM REAL ESTATE - PROPERTY SPECIFICATION BROCHURE
======================================================
Property: ${property.title}
Developer: ${property.developer}
Location: ${property.location.locality}, ${property.location.city}
RERA ID: ${property.peaceOfMind.reraId}

DIMENSIONS & SPECS:
- Unit Configuration: ${property.dimensions.bhk}
- Carpet Area: ${property.dimensions.carpetAreaSqFt} Sq.Ft
- Super Built-up Area: ${property.dimensions.superBuiltUpSqFt} Sq.Ft
- Spatial Efficiency: ${property.dimensions.efficiencyPercentage}%
- Ceiling Height: ${property.dimensions.ceilingHeightFt || 10.5} Ft
- Orientation / Facing: ${property.dimensions.facing || 'East'}

FINANCIAL VALUATION:
- Total Price: ${formatINR(property.pricing.totalPrice)}
- Rate per Sq.Ft: ₹${property.pricing.pricePerSqFt}
- Est. Stamp Duty & Reg: ${formatINR(property.pricing.stampDutyAndReg || 0)}
- Est. Monthly Maintenance: ₹${property.pricing.maintenancePerMonth || 0}

KEY HIGHLIGHTS:
${property.peaceOfMind.pros.map(p => `+ ${p}`).join('\n')}

PROPERTY NOTES & ADVISORY:
${property.peaceOfMind.cons.map(c => `- ${c}`).join('\n')}

Certified by REM Advisory & Legal Compliance Division.
0% Brokerage Assured.
======================================================
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${property.title.replace(/\s+/g, '_')}_Brochure.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#09240F]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#677865]/20 flex flex-col max-h-[92vh]">
        
        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#677865]/20 bg-white/95 backdrop-blur-md shrink-0">
          <div className="flex items-center space-x-3">
            <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${
              property.status === 'Ready to Move' ? 'bg-[#1F4027]/10 text-[#1F4027] border-[#1F4027]/25' :
              property.status === 'High Yield Active' ? 'bg-[#702B00]/10 text-[#702B00] border-[#702B00]/25' :
              property.status === 'Pre-Launch' ? 'bg-[#702B00]/15 text-[#532001] border-[#702B00]/30' :
              'bg-[#405D47]/10 text-[#405D47] border-[#405D47]/25'
            }`}>
              {property.status}
            </span>
            <div className="hidden sm:flex items-center space-x-1.5 text-xs text-[#405D47] font-semibold">
              <span className="text-[#09240F]">{property.developer}</span>
              <span>•</span>
              <span className="font-mono text-[11px] text-[#677865]">{property.peaceOfMind.reraId}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleFavorite(property.id)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isFavorite 
                  ? 'bg-[#702B00]/10 border-[#702B00]/30 text-[#702B00]' 
                  : 'bg-white border-[#677865]/20 text-[#677865] hover:bg-[#F5F6F4]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleDownloadBrochure}
              className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#F5F6F4] hover:bg-[#677865]/20 text-[#09240F] text-xs font-bold transition-all border border-[#677865]/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#702B00]" />
              <span>{t('modalDownloadBrochure')}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#677865] hover:text-[#09240F] hover:bg-[#F5F6F4] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 space-y-8">
          
          {/* Title & Micro-market Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#09240F] tracking-tight font-helvetica-black">
              {property.title}
            </h2>
            <p className="text-sm font-medium text-[#405D47] mt-1">{property.tagline}</p>
            
            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#405D47]">
              <div className="flex items-center space-x-1 font-semibold text-[#09240F]">
                <MapPin className="w-4 h-4 text-[#702B00]" />
                <span>{property.location.locality}, {property.location.city} ({property.location.state})</span>
              </div>
              <span className="text-[#677865]/40">•</span>
              <div className="flex items-center space-x-1 text-[#405D47]">
                <Train className="w-4 h-4 text-[#405D47]" />
                <span>{property.location.nearestMetroDistanceKm} km from Metro</span>
              </div>
              <span className="text-[#677865]/40">•</span>
              <div className="flex items-center space-x-1 text-[#405D47]">
                <Plane className="w-4 h-4 text-[#405D47]" />
                <span>{property.location.airportDistanceKm} km to Int'l Airport</span>
              </div>
              <span className="text-[#677865]/40">•</span>
              <div className="flex items-center space-x-1 bg-[#1F4027]/10 text-[#1F4027] border border-[#1F4027]/25 px-2 py-0.5 rounded font-bold">
                <span>WalkScore: {property.location.walkScore}/100</span>
              </div>
            </div>
          </div>

          {/* Media Showcase: Photos, Video Tour, Floor Plan Blueprints */}
          <div className="bg-[#09240F] rounded-3xl overflow-hidden border border-[#1F4027]/40 text-white">
            {/* Media Navigation Tabs */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-[#1F4027]/30 bg-[#09240F]/90">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveMediaTab('photos')}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeMediaTab === 'photos'
                      ? 'bg-[#702B00] text-white shadow-xs'
                      : 'bg-[#1F4027]/40 text-[#F5F6F4]/70 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{t('modalHdGallery')} ({property.images.length})</span>
                </button>

                <button
                  onClick={() => setActiveMediaTab('video')}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeMediaTab === 'video'
                      ? 'bg-[#702B00] text-white shadow-xs'
                      : 'bg-[#1F4027]/40 text-[#F5F6F4]/70 hover:text-white'
                  }`}
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{t('modalVideoTour')}</span>
                </button>

                <button
                  onClick={() => setActiveMediaTab('floorplan')}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeMediaTab === 'floorplan'
                      ? 'bg-[#702B00] text-white shadow-xs'
                      : 'bg-[#1F4027]/40 text-[#F5F6F4]/70 hover:text-white'
                  }`}
                >
                  <Layout className="w-3.5 h-3.5" />
                  <span>{t('modalFloorPlans')}</span>
                </button>
              </div>

              <div className="hidden sm:block text-xs font-mono text-[#677865]">
                {t('modalVerifiedOnSite')}
              </div>
            </div>

            {/* Media Canvas */}
            <div className="relative aspect-[16/9] max-h-[460px] bg-black flex items-center justify-center overflow-hidden">
              {activeMediaTab === 'photos' && (
                <img
                  src={property.images[selectedPhotoIndex] || property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover animate-in fade-in duration-300"
                />
              )}

              {activeMediaTab === 'video' && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#09240F] p-4">
                  {propertyVideos.length > 0 ? (
                    <video
                      key={propertyVideos[selectedVideoIndex]}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full max-h-[420px] rounded-xl object-cover shadow-2xl"
                    >
                      <source src={propertyVideos[selectedVideoIndex]} type="video/mp4" />
                      Your browser does not support video walkthroughs.
                    </video>
                  ) : (
                    <div className="text-[#677865] text-xs font-semibold">No video walkthrough available</div>
                  )}
                </div>
              )}

              {activeMediaTab === 'floorplan' && (
                <div className="w-full h-full flex items-center justify-center p-4 bg-[#09240F]">
                  <img
                    src={property.floorPlanUrl}
                    alt="Floor plan"
                    className="max-h-full max-w-full object-contain rounded-xl border border-[#1F4027]/40 shadow-xl"
                  />
                </div>
              )}
            </div>

            {/* Multiple Videos Selector (if on video tab and multiple videos exist) */}
            {activeMediaTab === 'video' && propertyVideos.length > 1 && (
              <div className="flex items-center space-x-2 p-3 bg-[#09240F] overflow-x-auto border-t border-[#1F4027]/30">
                <span className="text-[11px] font-bold text-[#677865] shrink-0">Available Videos ({propertyVideos.length}):</span>
                {propertyVideos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVideoIndex(idx)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedVideoIndex === idx
                        ? 'bg-[#702B00] text-white shadow-xs'
                        : 'bg-[#1F4027]/40 text-[#F5F6F4]/70 hover:bg-[#1F4027]/60'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video {idx + 1}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Thumbnails Row (if on photos tab) */}
            {activeMediaTab === 'photos' && (
              <div className="flex space-x-2 p-3 bg-[#09240F] overflow-x-auto border-t border-[#1F4027]/30">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhotoIndex(idx)}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedPhotoIndex === idx ? 'border-[#702B00] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Metrics Matrix: Dimensions, Pricing, Possession */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#F5F6F4] border border-[#677865]/20">
              <span className="text-xs font-bold text-[#677865] uppercase tracking-wider block">Configuration</span>
              <span className="text-lg font-black text-[#09240F] mt-1 block font-helvetica-bold">{property.dimensions.bhk}</span>
              <span className="text-xs text-[#405D47] font-medium">{property.dimensions.facing || 'East Facing'}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1F4027]/10 border border-[#1F4027]/25">
              <span className="text-xs font-bold text-[#1F4027] uppercase tracking-wider block">Carpet Area</span>
              <span className="text-lg font-black text-[#09240F] mt-1 block font-helvetica-bold">
                {formatNumber(property.dimensions.carpetAreaSqFt)} <span className="text-xs font-normal">Sq.Ft</span>
              </span>
              <span className="text-xs font-semibold text-[#1F4027]">
                {property.dimensions.efficiencyPercentage}% Spatial Efficiency
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F6F4] border border-[#677865]/20">
              <span className="text-xs font-bold text-[#677865] uppercase tracking-wider block">Valuation</span>
              <span className="text-lg font-black text-[#09240F] mt-1 block font-helvetica-bold">
                {formatINR(property.pricing.totalPrice)}
              </span>
              <span className="text-xs text-[#405D47] font-medium">
                ₹{formatNumber(property.pricing.pricePerSqFt)} / sft
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F6F4] border border-[#677865]/20">
              <span className="text-xs font-bold text-[#405D47] uppercase tracking-wider block">Possession</span>
              <span className="text-lg font-black text-[#09240F] mt-1 block font-helvetica-bold">{property.possessionDate}</span>
              <span className="text-xs text-[#405D47] font-medium">
                {property.dimensions.totalUnitsInProject} total units in project
              </span>
            </div>
          </div>


          {/* Property Dimensions & Spatial Specs Deep Dive */}
          <div className="p-6 rounded-3xl bg-white border border-[#677865]/20 shadow-xs">
            <h3 className="text-lg font-bold text-[#09240F] mb-4 flex items-center space-x-2 font-helvetica-bold">
              <Maximize2 className="w-5 h-5 text-[#702B00]" />
              <span>{t('modalSpatialSpecs')}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Dimensions Table */}
              <div className="border border-[#677865]/20 rounded-2xl overflow-hidden text-xs">
                <div className="p-3 bg-[#F5F6F4] font-bold text-[#09240F] border-b border-[#677865]/20 font-helvetica-bold">
                  Spatial Measurements
                </div>
                <div className="divide-y divide-[#677865]/15">
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Carpet Area:</span>
                    <span className="font-bold text-[#09240F]">{formatNumber(property.dimensions.carpetAreaSqFt)} Sq.Ft</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Super Built-up Area:</span>
                    <span className="font-bold text-[#09240F]">{formatNumber(property.dimensions.superBuiltUpSqFt)} Sq.Ft</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Carpet Efficiency:</span>
                    <span className="font-bold text-[#1F4027]">{property.dimensions.efficiencyPercentage}%</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Floor Level:</span>
                    <span className="font-bold text-[#09240F]">{property.dimensions.floorLevel || 'Multi-tier'}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Clear Ceiling Height:</span>
                    <span className="font-bold text-[#09240F]">{property.dimensions.ceilingHeightFt || 10.5} Feet</span>
                  </div>
                </div>
              </div>

              {/* Construction Specs Table */}
              <div className="border border-[#677865]/20 rounded-2xl overflow-hidden text-xs">
                <div className="p-3 bg-[#F5F6F4] font-bold text-[#09240F] border-b border-[#677865]/20 font-helvetica-bold">
                  {t('modalEngineeringSpecs')}
                </div>
                <div className="divide-y divide-[#677865]/15">
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Flooring:</span>
                    <span className="font-medium text-[#09240F] text-right max-w-[65%]">{property.specs.flooring}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Power Backup:</span>
                    <span className="font-medium text-[#09240F] text-right max-w-[65%]">{property.specs.powerBackup}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Water Supply:</span>
                    <span className="font-medium text-[#09240F] text-right max-w-[65%]">{property.specs.waterSupply}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Car Parking:</span>
                    <span className="font-medium text-[#09240F] text-right max-w-[65%]">{property.specs.parking}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-[#677865]">Security Grid:</span>
                    <span className="font-medium text-[#09240F] text-right max-w-[65%]">{property.specs.security}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* Amenities Grid */}
          <div className="p-6 rounded-3xl bg-[#F5F6F4] border border-[#677865]/20">
            <h3 className="text-base font-bold text-[#09240F] mb-3 flex items-center space-x-2 font-helvetica-bold">
              <Sparkles className="w-4 h-4 text-[#702B00]" />
              <span>{t('modalLifestyleAmenities')}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-[#677865]/20 text-xs font-semibold text-[#09240F] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#702B00]"></span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Property Investment Showcase */}
          {property.investment?.isInvestable && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#09240F] text-white border border-[#1F4027]/40 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1F4027]/30">
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#702B00]/20 text-[#F5F6F4] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#702B00]/40">
                    <TrendingUp className="w-3.5 h-3.5 text-[#702B00]" />
                    <span>{t('navHighYield')}</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white font-helvetica-black">
                    {t('modalCoInvestSectionTitle')}
                  </h3>
                  <p className="text-xs text-[#F5F6F4]/70 mt-1 max-w-xl leading-relaxed">
                    {t('modalCoInvestSectionSub')}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-[#1F4027]/40 text-right sm:text-right shrink-0">
                  <span className="text-[10px] font-bold text-[#677865] uppercase block">{t('modalMinInvestment')}</span>
                  <span className="text-2xl font-black text-white block font-helvetica-bold">
                    {formatINR(property.investment.minTicketSize || 50000)}
                  </span>
                  <span className="text-[11px] text-[#F5F6F4]/80 font-semibold block mt-0.5">
                    {property.investment.grossRentalYieldPercentage}% {t('modalGrossYield')}
                  </span>
                </div>
              </div>

              {/* Funding Progress Bar */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-[#F5F6F4]/80">{t('modalFundingProgress')}</span>
                  <span className="text-[#F5F6F4] font-bold">{property.investment.fundedPercentage || 70}% {t('modalFunded')}</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-md overflow-hidden">
                  <div 
                    className="h-full bg-[#702B00] rounded-md transition-all duration-500" 
                    style={{ width: `${Math.min(100, property.investment.fundedPercentage || 70)}%` }}
                  />
                </div>
                <div className="mt-2 text-[11px] text-[#677865] flex justify-between font-medium">
                  <span>{t('modalTotalValuation')}: {formatINR(property.pricing.totalPrice)}</span>
                  <span>{t('modalTargetIRR')}: {property.investment.projectedIRRPercentage}%</span>
                </div>
              </div>

              {/* Financial Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-[#677865] uppercase block">{t('modalAnnualYield')}</span>
                  <span className="text-base font-black text-[#F5F6F4] font-helvetica-bold">
                    {property.investment.grossRentalYieldPercentage}% p.a.
                  </span>
                  <span className="text-[9px] text-[#677865] block mt-0.5">{t('modalCreditedMonthly')}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-[#677865] uppercase block">{t('modalTenure')}</span>
                  <span className="text-base font-black text-white font-helvetica-bold">
                    {property.investment.tenureYears || 4} Years
                  </span>
                  <span className="text-[9px] text-[#F5F6F4]/70 block mt-0.5">+{property.investment.projectedAppreciationPercentage || 45}% {t('modalCapitalAppreciation')}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-bold text-[#677865] uppercase block">{t('modalLegalTitle')}</span>
                  <span className="text-base font-black text-[#F5F6F4] font-helvetica-bold">100% SPV Equity</span>
                  <span className="text-[9px] text-[#677865] block mt-0.5">RERA &amp; SEBI Escrow</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#677865]">
                  {t('modalMinInvestment')}: {formatINR(property.investment.minTicketSize || 50000)}.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setInvestTargetProperty(property);
                    setIsInvestModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#702B00]/20 transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>{t('cardInvestBtn')}</span>
                </button>
              </div>
            </div>
          )}

          {/* Schedule Site Visit & Inquiry Form */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F6F4] border border-[#677865]/20">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-6">
                <span className="text-xs font-bold text-[#702B00] uppercase tracking-widest block font-helvetica-bold">
                  {t('modalConciergeTours')}
                </span>
                <h4 className="text-xl font-black text-[#09240F] mt-1 font-helvetica-black">
                  {t('modalBookVipWalkthrough')}
                </h4>
                <p className="text-xs text-[#405D47] mt-1">
                  {t('modalWalkthroughDesc')}
                </p>
              </div>

              {bookingSuccess ? (
                <div className="p-4 rounded-2xl bg-[#1F4027]/10 border border-[#1F4027]/30 text-[#1F4027] text-center animate-in zoom-in-95">
                  <CheckCircle2 className="w-8 h-8 text-[#1F4027] mx-auto mb-2" />
                  <p className="text-sm font-bold font-helvetica-bold">Site Visit Confirmed!</p>
                  <p className="text-xs mt-1 text-[#405D47]">Your reservation has been added to your Portfolio dashboard. Our concierge will contact you via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleBookVisit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-[#09240F] block mb-1">{t('modalPreferredDate')}</label>
                      <input
                        type="date"
                        required
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:ring-2 focus:ring-[#702B00] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#09240F] block mb-1">{t('modalPreferredTime')}</label>
                      <select
                        value={visitSlot}
                        onChange={(e) => setVisitSlot(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:ring-2 focus:ring-[#702B00] outline-none cursor-pointer"
                      >
                        <option value="10:00 AM - 11:30 AM">10:00 AM - 11:30 AM</option>
                        <option value="11:00 AM - 12:30 PM">11:00 AM - 12:30 PM</option>
                        <option value="02:00 PM - 03:30 PM">02:00 PM - 03:30 PM</option>
                        <option value="04:30 PM - 06:00 PM">04:30 PM - 06:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => setVisitType('Physical Site Tour')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        visitType === 'Physical Site Tour'
                          ? 'bg-[#702B00] text-white border-[#702B00] shadow-sm'
                          : 'bg-white text-[#405D47] border-[#677865]/25 hover:bg-[#F5F6F4]'
                      }`}
                    >
                      {t('modalPhysicalVisit')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisitType('Virtual Video Walkthrough')}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        visitType === 'Virtual Video Walkthrough'
                          ? 'bg-[#702B00] text-white border-[#702B00] shadow-sm'
                          : 'bg-white text-[#405D47] border-[#677865]/25 hover:bg-[#F5F6F4]'
                      }`}
                    >
                      {t('modalVirtualVisit')}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    {t('modalConfirmVisit')}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="px-6 py-4 border-t border-[#677865]/20 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-black text-[#09240F] font-helvetica-bold">
                {formatINR(property.pricing.totalPrice)}
              </span>
              <span className="text-xs text-[#405D47] font-semibold">
                (₹{formatNumber(property.pricing.pricePerSqFt)} / sft)
              </span>
            </div>
            <p className="text-[11px] text-[#1F4027] font-bold">
              Token Booking: {formatINR(property.pricing.bookingTokenAmount)} • 100% Refundable
            </p>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            {property.investment?.isInvestable && (
              <button
                type="button"
                onClick={() => {
                  setInvestTargetProperty(property);
                  setIsInvestModalOpen(true);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#09240F] hover:bg-[#1F4027] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center space-x-1 border border-[#1F4027]/30"
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#702B00]" />
                <span>{t('modalClaimShare')} ({formatINR(property.investment.sharePrice || 1000000)})</span>
              </button>
            )}

            <button
              onClick={() => {
                alert(`Priority Token booking initiated for ${property.title}. Our REM relationship manager will contact you shortly.`);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-[#702B00]/20 transition-all cursor-pointer"
            >
              {t('modalBookPriorityToken')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

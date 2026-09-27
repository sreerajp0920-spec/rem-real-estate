import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Property, PropertyCategory, PropertyStatus, LeadInquiry } from '../types';
import { formatINR, formatNumber } from '../utils/formatters';
import { 
  ShieldCheck, 
  PlusCircle, 
  Trash2, 
  Edit3, 
  CheckCircle, 
  Clock, 
  Layers, 
  TrendingUp, 
  Building2, 
  Mail, 
  Phone, 
  Search, 
  RotateCcw,
  Sparkles,
  ArrowRight,
  Eye,
  Image,
  Video,
  Plus,
  X,
  LogOut
} from 'lucide-react';

const DEFAULT_PROPERTY_FORM: Partial<Property> = {
  title: '',
  developer: 'REM Signature Projects',
  category: 'upcoming_launch',
  status: 'Pre-Launch',
  isUpcoming: true,
  pricing: {
    totalPrice: 28500000,
    pricePerSqFt: 14393,
    estimatedEmiMonthly: 245000,
    maintenancePerMonth: 9500,
    stampDutyAndReg: 1995000,
    bookingTokenAmount: 100000,
  },
  dimensions: {
    carpetAreaSqFt: 1980,
    superBuiltUpSqFt: 2475,
    efficiencyPercentage: 80,
    bhk: '3 BHK Luxury Condo',
    ceilingHeightFt: 11.5,
    facing: 'North-East (Vaastu)',
    floorLevel: '10th of 26 Floors',
    totalUnitsInProject: 88,
  },
  location: {
    locality: 'Indiranagar Extended Hub',
    city: 'Bangalore',
    state: 'Karnataka',
    landmark: 'Near Metro Station',
    nearestMetroDistanceKm: 0.6,
    airportDistanceKm: 36,
    walkScore: 91,
  },
  peaceOfMind: {
    overall: 93,
    builderCredibility: 96,
    projectEfficiency: 88,
    legalClearance: 98,
    appreciationPotential: 94,
    reraId: 'PRM/KA/RERA/2026/00912',
    pros: ['Inaugural pre-launch price discount', 'Direct walking distance to Metro'],
    cons: ['Under pre-construction approval phase'],
  },
  images: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  ],
  videos: [
    'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-living-room-and-kitchen-42777-large.mp4'
  ],
  videoTourUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-living-room-and-kitchen-42777-large.mp4',
  floorPlanUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
  amenities: [
    'Rooftop Infinity Pool',
    'EV Supercharging Slots',
    'High-Speed Schindler Elevators',
    'TechnoGym Fitness Studio'
  ],
  specs: {
    flooring: 'Italian Botticino Marble',
    powerBackup: '100% DG Synchronization',
    waterSupply: 'Dual piping RO plant',
    parking: '2 Covered basement slots',
    security: 'Biometric Access Control'
  }
};

export const AdminPortal: React.FC = () => {
  const { 
    properties, 
    addProperty, 
    updateProperty, 
    deleteProperty, 
    inquiries, 
    updateInquiryStatus, 
    resetToDefaults,
    setSelectedProperty,
    setActiveTab,
    exitAdminMode
  } = useApp();

  const [activeAdminTab, setActiveAdminTab] = useState<'inventory' | 'add' | 'leads'>('inventory');
  const [inventorySearch, setInventorySearch] = useState('');
  const [editingPropertyId, setEditingPropertyId] = useState<string | null>(null);

  // New / Edit Property Form State
  const [formData, setFormData] = useState<Partial<Property>>(DEFAULT_PROPERTY_FORM);
  const [photoInputUrl, setPhotoInputUrl] = useState('');
  const [videoInputUrl, setVideoInputUrl] = useState('');

  const handleSaveProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.pricing?.totalPrice) {
      alert('Please provide at least a title and total valuation.');
      return;
    }

    const carpetArea = formData.dimensions?.carpetAreaSqFt || 1800;
    const totalPrice = formData.pricing?.totalPrice || 25000000;
    const pricePerSqFt = Math.round(totalPrice / carpetArea);

    const imagesList = formData.images && formData.images.length > 0 
      ? formData.images 
      : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'];

    const videosList = formData.videos && formData.videos.length > 0 
      ? formData.videos 
      : (formData.videoTourUrl ? [formData.videoTourUrl] : ['https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-living-room-and-kitchen-42777-large.mp4']);

    const propertyPayload: Property = {
      id: editingPropertyId || `rem-prop-${Date.now().toString().slice(-4)}`,
      title: formData.title || 'Untitled Property',
      developer: formData.developer || 'REM Signature Projects',
      tagline: formData.tagline || `${formData.dimensions?.bhk || '3 BHK'} in ${formData.location?.locality || 'Prime Locality'}`,
      description: formData.description || `Upcoming premium product located in ${formData.location?.locality || 'prime sector'}. High-quality engineering and modern architecture.`,
      category: formData.category || 'upcoming_launch',
      status: formData.status || 'Pre-Launch',
      isUpcoming: true,
      launchDate: formData.launchDate || 'Upcoming 2026',
      possessionDate: formData.possessionDate || '2028',
      pricing: {
        totalPrice: totalPrice,
        pricePerSqFt: pricePerSqFt,
        estimatedEmiMonthly: Math.round(totalPrice * 0.0086),
        maintenancePerMonth: formData.pricing?.maintenancePerMonth || Math.round(carpetArea * 5),
        stampDutyAndReg: formData.pricing?.stampDutyAndReg || Math.round(totalPrice * 0.07),
        bookingTokenAmount: formData.pricing?.bookingTokenAmount || 100000,
      },
      dimensions: {
        carpetAreaSqFt: carpetArea,
        superBuiltUpSqFt: Math.round(carpetArea * 1.25),
        efficiencyPercentage: formData.dimensions?.efficiencyPercentage || 80,
        bhk: formData.dimensions?.bhk || '3 BHK Luxury Condo',
        ceilingHeightFt: formData.dimensions?.ceilingHeightFt || 11.5,
        facing: formData.dimensions?.facing || 'North-East',
        floorLevel: formData.dimensions?.floorLevel || '10th of 26 Floors',
        totalUnitsInProject: formData.dimensions?.totalUnitsInProject || 88,
      },
      location: {
        locality: formData.location?.locality || 'Indiranagar Extended Hub',
        city: formData.location?.city || 'Bangalore',
        state: formData.location?.state || 'Karnataka',
        landmark: formData.location?.landmark || 'Near Metro Station',
        nearestMetroDistanceKm: formData.location?.nearestMetroDistanceKm || 0.6,
        airportDistanceKm: formData.location?.airportDistanceKm || 36,
        walkScore: formData.location?.walkScore || 91,
      },
      peaceOfMind: {
        overall: 93,
        builderCredibility: 96,
        projectEfficiency: 88,
        legalClearance: 98,
        appreciationPotential: 94,
        reraId: 'PRM/KA/RERA/2026/00912',
        pros: ['Inaugural pre-launch price discount', 'Direct walking distance to Metro'],
        cons: ['Under pre-construction approval phase'],
        ...formData.peaceOfMind,
      },
      images: imagesList,
      videos: videosList,
      videoTourUrl: videosList[0] || '',
      floorPlanUrl: formData.floorPlanUrl || 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
      amenities: formData.amenities || [
        'Rooftop Infinity Pool',
        'EV Supercharging Slots',
        'High-Speed Schindler Elevators',
        'TechnoGym Fitness Studio'
      ],
      specs: formData.specs || {
        flooring: 'Italian Botticino Marble',
        powerBackup: '100% DG Synchronization',
        waterSupply: 'Dual piping RO plant',
        parking: '2 Covered basement slots',
        security: 'Biometric Access Control'
      },
      createdAt: formData.createdAt || new Date().toISOString(),
    };

    if (editingPropertyId) {
      updateProperty(propertyPayload);
      alert('Product updated successfully!');
      setEditingPropertyId(null);
    } else {
      addProperty(propertyPayload);
      alert('New Upcoming Product added to catalog successfully!');
    }

    setActiveAdminTab('inventory');
  };

  const handleEditClick = (prop: Property) => {
    setFormData({
      ...prop,
      images: prop.images || [],
      videos: prop.videos || (prop.videoTourUrl ? [prop.videoTourUrl] : []),
      videoTourUrl: prop.videoTourUrl || (prop.videos && prop.videos[0]) || '',
    });
    setEditingPropertyId(prop.id);
    setPhotoInputUrl('');
    setVideoInputUrl('');
    setActiveAdminTab('add');
  };

  const filteredProperties = properties.filter(p => 
    p.title.toLowerCase().includes(inventorySearch.toLowerCase()) ||
    p.location.locality.toLowerCase().includes(inventorySearch.toLowerCase()) ||
    p.developer.toLowerCase().includes(inventorySearch.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-16">
      
      {/* Admin Operations Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-slate-300">
              REM Operations & Inventory Center
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-1 text-white">
            Admin Management Console
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            Publish upcoming products, update prices and dimensions, and manage user investment pledges in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              setEditingPropertyId(null);
              setFormData(DEFAULT_PROPERTY_FORM);
              setPhotoInputUrl('');
              setVideoInputUrl('');
              setActiveAdminTab('add');
            }}
            className="px-4 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#702B00]/20 transition-all cursor-pointer flex items-center space-x-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Upcoming Product</span>
          </button>

          <button
            onClick={() => {
              if (confirm('Reset all catalog data and inquiries back to default seeds?')) {
                resetToDefaults();
              }
            }}
            className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer flex items-center space-x-1.5"
            title="Reset database to defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo DB</span>
          </button>

          <button
            onClick={() => setActiveTab('properties')}
            className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer flex items-center space-x-1.5"
            title="Browse live site as a buyer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Buyer Site</span>
          </button>

          <button
            onClick={() => exitAdminMode()}
            className="px-3.5 py-2.5 rounded-xl bg-[#532001]/20 hover:bg-[#532001]/30 text-[#F5F6F4] font-semibold text-xs border border-[#532001]/40 transition-all cursor-pointer flex items-center space-x-1.5"
            title="Sign out of admin mode"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Exit Admin</span>
          </button>
        </div>
      </div>

      {/* Admin KPIs Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#677865]/20 shadow-2xs">
          <span className="text-xs font-bold text-[#677865] uppercase tracking-wider block">Total Catalog Listings</span>
          <span className="text-2xl font-black text-[#09240F] mt-1 block font-helvetica-bold">{properties.length}</span>
          <span className="text-xs text-[#405D47] font-medium mt-0.5">Live on user platform</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#702B00]/10 border border-[#702B00]/25 shadow-2xs">
          <span className="text-xs font-bold text-[#702B00] uppercase tracking-wider block font-helvetica-bold">Upcoming Launches</span>
          <span className="text-2xl font-black text-[#09240F] mt-1 block font-helvetica-bold">
            {properties.filter(p => p.isUpcoming || p.status === 'Pre-Launch').length}
          </span>
          <span className="text-xs text-[#405D47] font-medium mt-0.5">Pre-registration active</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#1F4027]/10 border border-[#1F4027]/25 shadow-2xs">
          <span className="text-xs font-bold text-[#1F4027] uppercase tracking-wider block font-helvetica-bold">Investable Assets</span>
          <span className="text-2xl font-black text-[#09240F] mt-1 block font-helvetica-bold">
            {properties.filter(p => p.investment?.isInvestable).length}
          </span>
          <span className="text-xs text-[#405D47] font-medium mt-0.5">Fractional Grade-A</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#F5F6F4] border border-[#677865]/20 shadow-2xs">
          <span className="text-xs font-bold text-[#405D47] uppercase tracking-wider block">Inquiries &amp; Leads</span>
          <span className="text-2xl font-black text-[#09240F] mt-1 block font-helvetica-bold">{inquiries.length}</span>
          <span className="text-xs text-[#405D47] font-medium mt-0.5">Pledges &amp; site visits</span>
        </div>
      </div>

      {/* Admin Sub-Tabs */}
      <div className="flex border-b border-[#677865]/20 space-x-6">
        <button
          onClick={() => setActiveAdminTab('inventory')}
          className={`pb-3 text-sm font-bold transition-all relative ${
            activeAdminTab === 'inventory'
              ? 'text-[#702B00] border-b-2 border-[#702B00]'
              : 'text-[#677865] hover:text-[#09240F]'
          }`}
        >
          <span>Manage Inventory ({properties.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('add')}
          className={`pb-3 text-sm font-bold transition-all relative ${
            activeAdminTab === 'add'
              ? 'text-[#702B00] border-b-2 border-[#702B00]'
              : 'text-[#677865] hover:text-[#09240F]'
          }`}
        >
          <span>{editingPropertyId ? 'Edit Product' : 'Add Upcoming Product'}</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('leads')}
          className={`pb-3 text-sm font-bold transition-all relative ${
            activeAdminTab === 'leads'
              ? 'text-[#702B00] border-b-2 border-[#702B00]'
              : 'text-[#677865] hover:text-[#09240F]'
          }`}
        >
          <span>CRM Leads &amp; Pledges ({inquiries.length})</span>
        </button>
      </div>

      {/* TAB 1: INVENTORY MANAGEMENT */}
      {activeAdminTab === 'inventory' && (
        <div className="space-y-4">
          
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-72">
              <Search className="w-4 h-4 text-[#677865] absolute left-3 top-3" />
              <input
                type="text"
                value={inventorySearch}
                onChange={(e) => setInventorySearch(e.target.value)}
                placeholder="Search catalog..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] placeholder-[#677865] focus:outline-none focus:ring-2 focus:ring-[#702B00]"
              />
            </div>

            <p className="text-xs text-[#677865] font-semibold">
              Showing {filteredProperties.length} properties
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#677865]/20 overflow-hidden shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#677865]/20 bg-[#F5F6F4] text-[11px] font-bold text-[#677865] uppercase tracking-wider">
                  <th className="p-4">Property</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Status &amp; Stage</th>
                  <th className="p-4">Dimensions</th>
                  <th className="p-4">Pricing</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#677865]/15 text-xs">
                {filteredProperties.map(p => (
                  <tr key={p.id} className="hover:bg-[#F5F6F4]/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <img src={p.images[0]} alt={p.title} className="w-12 h-10 rounded-lg object-cover" />
                        <div>
                          <h4 className="font-extrabold text-[#09240F] line-clamp-1 font-helvetica-bold">{p.title}</h4>
                          <span className="text-[11px] text-[#405D47]">{p.location.locality}, {p.location.city}</span>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 font-semibold text-[#405D47] capitalize">
                      {p.category.replace('_', ' ')}
                    </td>

                    <td className="p-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        p.status === 'Ready to Move' ? 'bg-[#1F4027]/10 text-[#1F4027] border-[#1F4027]/25' :
                        p.status === 'High Yield Active' ? 'bg-[#702B00]/10 text-[#702B00] border-[#702B00]/25' :
                        p.status === 'Pre-Launch' ? 'bg-[#702B00]/15 text-[#532001] border-[#702B00]/30' :
                        'bg-[#405D47]/10 text-[#405D47] border-[#405D47]/25'
                      }`}>
                        {p.status}
                      </span>
                      {p.isUpcoming && (
                        <span className="ml-1 text-[10px] text-[#702B00] font-bold">Upcoming</span>
                      )}
                    </td>

                    <td className="p-4">
                      <div className="font-bold text-[#09240F]">{formatNumber(p.dimensions.carpetAreaSqFt)} sft</div>
                      <span className="text-[10px] text-[#677865]">{p.dimensions.bhk}</span>
                    </td>

                    <td className="p-4">
                      <div className="font-black text-[#09240F] font-helvetica-bold">{formatINR(p.pricing.totalPrice)}</div>
                      <span className="text-[10px] text-[#677865]">₹{formatNumber(p.pricing.pricePerSqFt)}/sft</span>
                    </td>

                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedProperty(p)}
                        className="p-1.5 rounded-lg text-[#677865] hover:text-[#702B00] hover:bg-[#702B00]/10 transition-all cursor-pointer"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleEditClick(p)}
                        className="p-1.5 rounded-lg text-[#677865] hover:text-[#702B00] hover:bg-[#702B00]/10 transition-all cursor-pointer"
                        title="Edit details"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Delete ${p.title}?`)) {
                            deleteProperty(p.id);
                          }
                        }}
                        className="p-1.5 rounded-lg text-[#677865] hover:text-[#532001] hover:bg-[#532001]/10 transition-all cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: ADD / EDIT UPCOMING PRODUCT FORM */}
      {activeAdminTab === 'add' && (
        <form onSubmit={handleSaveProperty} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                {editingPropertyId ? `Edit Product (${editingPropertyId})` : 'Publish New Upcoming Product / Property'}
              </h3>
              <p className="text-xs text-slate-500">Enter high-accuracy specifications, carpet dimensions, video tour, and pricing</p>
            </div>
            {editingPropertyId && (
              <button
                type="button"
                onClick={() => { setEditingPropertyId(null); setActiveAdminTab('inventory'); }}
                className="text-xs font-bold text-[#677865] hover:text-[#09240F] cursor-pointer"
              >
                Cancel Edit
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* 1. Product Title */}
            <div className="md:col-span-2">
              <label className="text-xs font-bold text-[#09240F] block mb-1">Product Title *</label>
              <input
                type="text"
                required
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. Cascadia Sky Residences"
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
            </div>

            {/* 2. Developer / Builder */}
            <div className="md:col-span-2">
              <label className="text-xs font-bold text-[#09240F] block mb-1">Developer / Builder</label>
              <input
                type="text"
                value={formData.developer || ''}
                onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                placeholder="e.g. REM Signature Projects"
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
            </div>

            {/* 3. Category */}
            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as PropertyCategory })}
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none cursor-pointer"
              >
                <option value="upcoming_launch">Upcoming Launch (Pre-Release)</option>
                <option value="residential">Residential Homes & Villas</option>
                <option value="high_yield_investment">High-Yield Investment</option>
                <option value="commercial">Commercial Office</option>
                <option value="land_plots">Plots & Land Sites</option>
              </select>
            </div>

            {/* 4. Construction Status */}
            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Construction Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as PropertyStatus })}
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none cursor-pointer"
              >
                <option value="Pre-Launch">Pre-Launch</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="High Yield Active">High Yield Active</option>
              </select>
            </div>

            {/* 5. Total Valuation */}
            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Total Valuation (INR) *</label>
              <input
                type="number"
                required
                value={formData.pricing?.totalPrice || ''}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setFormData({
                    ...formData,
                    pricing: {
                      ...formData.pricing!,
                      totalPrice: val,
                      pricePerSqFt: Math.round(val / (formData.dimensions?.carpetAreaSqFt || 1500))
                    }
                  });
                }}
                placeholder="e.g. 28500000"
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
            </div>

            {/* 6. Area */}
            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Area (Sq.Ft)</label>
              <input
                type="number"
                value={formData.dimensions?.carpetAreaSqFt || ''}
                onChange={(e) => {
                  const areaVal = Number(e.target.value);
                  setFormData({
                    ...formData,
                    dimensions: {
                      ...formData.dimensions!,
                      carpetAreaSqFt: areaVal,
                      superBuiltUpSqFt: Math.round(areaVal * 1.25)
                    },
                    pricing: {
                      ...formData.pricing!,
                      pricePerSqFt: Math.round((formData.pricing?.totalPrice || 25000000) / (areaVal || 1500))
                    }
                  });
                }}
                placeholder="e.g. 1980"
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
            </div>

            {/* 7. BHK / Unit Type */}
            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">BHK / Unit Type</label>
              <input
                type="text"
                value={formData.dimensions?.bhk || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  dimensions: {
                    ...formData.dimensions!,
                    bhk: e.target.value,
                  }
                })}
                placeholder="e.g. 3 BHK Luxury Condo"
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
            </div>

            {/* 8. Locality */}
            <div className="md:col-span-3">
              <label className="text-xs font-bold text-[#09240F] block mb-1">Locality</label>
              <input
                type="text"
                value={formData.location?.locality || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  location: {
                    ...formData.location!,
                    locality: e.target.value,
                  }
                })}
                placeholder="e.g. Indiranagar, Bangalore"
                className="w-full px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
            </div>

          </div>

          {/* 9. Multiple Photos Section */}
          <div className="pt-4 border-t border-[#677865]/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center space-x-2">
                <Image className="w-4 h-4 text-[#702B00]" />
                <label className="text-xs font-bold text-[#09240F]">
                  Property Photos ({formData.images?.length || 0})
                </label>
                <span className="text-[10px] font-semibold text-[#677865]">Add multiple high-resolution photos</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const samplePhotos = [
                    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
                    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
                  ];
                  const nextPhoto = samplePhotos[(formData.images?.length || 0) % samplePhotos.length];
                  setFormData({
                    ...formData,
                    images: [...(formData.images || []), nextPhoto]
                  });
                }}
                className="text-[11px] font-bold text-[#09240F] hover:text-[#702B00] bg-[#F5F6F4] hover:bg-[#677865]/20 px-2.5 py-1 rounded-lg transition-all cursor-pointer self-start sm:self-center border border-[#677865]/20"
              >
                + Add Sample Photo
              </button>
            </div>

            {/* Add Photo Input */}
            <div className="flex gap-2 mb-3">
              <input
                type="url"
                value={photoInputUrl}
                onChange={(e) => setPhotoInputUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (photoInputUrl.trim()) {
                      setFormData({
                        ...formData,
                        images: [...(formData.images || []), photoInputUrl.trim()]
                      });
                      setPhotoInputUrl('');
                    }
                  }
                }}
                placeholder="Paste photo image URL (e.g. https://images.unsplash.com/...)"
                className="flex-1 px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  if (photoInputUrl.trim()) {
                    setFormData({
                      ...formData,
                      images: [...(formData.images || []), photoInputUrl.trim()]
                    });
                    setPhotoInputUrl('');
                  }
                }}
                className="px-4 py-2 bg-[#702B00] hover:bg-[#532001] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Photo</span>
              </button>
            </div>

            {/* Photos Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {(formData.images || []).map((imgUrl, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden border border-[#677865]/20 aspect-[4/3] bg-[#F5F6F4] shadow-xs">
                  <img src={imgUrl} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#09240F]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          images: (formData.images || []).filter((_, i) => i !== idx)
                        });
                      }}
                      className="p-1.5 rounded-lg bg-[#532001] text-white hover:bg-[#532001]/80 transition-all cursor-pointer shadow-md"
                      title="Remove photo"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-[#09240F]/80 text-[10px] font-bold text-white">
                    #{idx + 1}
                  </span>
                </div>
              ))}
              {(formData.images || []).length === 0 && (
                <div className="col-span-full py-4 text-center border-2 border-dashed border-[#677865]/25 rounded-xl text-xs text-[#677865] font-medium">
                  No photos added yet. Paste a URL above or click "+ Add Sample Photo".
                </div>
              )}
            </div>
          </div>

          {/* 10. Multiple Videos Section */}
          <div className="pt-4 border-t border-[#677865]/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center space-x-2">
                <Video className="w-4 h-4 text-[#702B00]" />
                <label className="text-xs font-bold text-[#09240F]">
                  Property Videos ({formData.videos?.length || (formData.videoTourUrl ? 1 : 0)})
                </label>
                <span className="text-[10px] font-semibold text-[#677865]">Add multiple video tour walkthrough URLs</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const sampleVideos = [
                    'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-living-room-and-kitchen-42777-large.mp4',
                    'https://assets.mixkit.co/videos/preview/mixkit-living-room-in-a-luxury-home-42407-large.mp4',
                    'https://assets.mixkit.co/videos/preview/mixkit-modern-office-space-with-tables-and-chairs-41682-large.mp4',
                    'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-countryside-residence-42868-large.mp4'
                  ];
                  const currentVids = formData.videos || (formData.videoTourUrl ? [formData.videoTourUrl] : []);
                  const nextVid = sampleVideos[currentVids.length % sampleVideos.length];
                  const updated = [...currentVids, nextVid];
                  setFormData({
                    ...formData,
                    videos: updated,
                    videoTourUrl: updated[0] || ''
                  });
                }}
                className="text-[11px] font-bold text-[#09240F] hover:text-[#702B00] bg-[#F5F6F4] hover:bg-[#677865]/20 px-2.5 py-1 rounded-lg transition-all cursor-pointer self-start sm:self-center border border-[#677865]/20"
              >
                + Add Sample Video
              </button>
            </div>

            {/* Add Video Input */}
            <div className="flex gap-2 mb-3">
              <input
                type="url"
                value={videoInputUrl}
                onChange={(e) => setVideoInputUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (videoInputUrl.trim()) {
                      const currentVids = formData.videos || (formData.videoTourUrl ? [formData.videoTourUrl] : []);
                      const updated = [...currentVids, videoInputUrl.trim()];
                      setFormData({
                        ...formData,
                        videos: updated,
                        videoTourUrl: updated[0] || ''
                      });
                      setVideoInputUrl('');
                    }
                  }
                }}
                placeholder="Paste video walkthrough URL (e.g. https://assets.mixkit.co/...mp4)"
                className="flex-1 px-3 py-2 bg-[#F5F6F4] border border-[#677865]/25 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-white focus:ring-2 focus:ring-[#702B00] outline-none"
              />
              <button
                type="button"
                onClick={() => {
                  if (videoInputUrl.trim()) {
                    const currentVids = formData.videos || (formData.videoTourUrl ? [formData.videoTourUrl] : []);
                    const updated = [...currentVids, videoInputUrl.trim()];
                    setFormData({
                      ...formData,
                      videos: updated,
                      videoTourUrl: updated[0] || ''
                    });
                    setVideoInputUrl('');
                  }
                }}
                className="px-4 py-2 bg-[#702B00] hover:bg-[#532001] text-white text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Video</span>
              </button>
            </div>

            {/* Videos List */}
            <div className="space-y-2">
              {(formData.videos || (formData.videoTourUrl ? [formData.videoTourUrl] : [])).map((vidUrl, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#F5F6F4] border border-[#677865]/20 text-xs">
                  <div className="flex items-center space-x-2.5 min-w-0 pr-3">
                    <div className="w-7 h-7 rounded-lg bg-white text-[#702B00] border border-[#677865]/15 flex items-center justify-center shrink-0">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-[#09240F]">Walkthrough Video #{idx + 1}</div>
                      <p className="text-[11px] text-[#405D47] truncate max-w-md">{vidUrl}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const currentVids = formData.videos || (formData.videoTourUrl ? [formData.videoTourUrl] : []);
                      const updated = currentVids.filter((_, i) => i !== idx);
                      setFormData({
                        ...formData,
                        videos: updated,
                        videoTourUrl: updated[0] || ''
                      });
                    }}
                    className="p-1.5 rounded-lg text-[#532001] hover:bg-[#532001]/10 transition-all cursor-pointer shrink-0"
                    title="Remove video"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              {(formData.videos || (formData.videoTourUrl ? [formData.videoTourUrl] : [])).length === 0 && (
                <div className="py-4 text-center border-2 border-dashed border-[#677865]/25 rounded-xl text-xs text-[#677865] font-medium">
                  No videos added yet. Paste a video URL above or click "+ Add Sample Video".
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#677865]/15 flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setActiveAdminTab('inventory')}
              className="px-5 py-2.5 rounded-xl border border-[#677865]/25 text-[#405D47] text-xs font-bold hover:bg-[#F5F6F4] cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-[#702B00]/20 cursor-pointer"
            >
              {editingPropertyId ? 'Save Changes' : 'Publish Product to REM Platform'}
            </button>
          </div>
        </form>
      )}

      {/* TAB 3: CRM LEADS & PLEDGES */}
      {activeAdminTab === 'leads' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-[#09240F] font-helvetica-bold">User Inquiries &amp; Investment Commitments</h3>
            <span className="text-xs font-bold text-[#677865]">{inquiries.length} records logged</span>
          </div>

          <div className="bg-white rounded-3xl border border-[#677865]/20 overflow-hidden shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#677865]/20 bg-[#F5F6F4] text-[11px] font-bold text-[#677865] uppercase tracking-wider">
                  <th className="p-4">User</th>
                  <th className="p-4">Property</th>
                  <th className="p-4">Inquiry Type</th>
                  <th className="p-4">Pledged Amount</th>
                  <th className="p-4">Notes</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Update Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#677865]/15 text-xs">
                {inquiries.map(inq => (
                  <tr key={inq.id} className="hover:bg-[#F5F6F4]/80 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-[#09240F]">{inq.userName}</div>
                      <div className="text-[11px] text-[#405D47]">{inq.userEmail}</div>
                      <div className="text-[10px] text-[#677865]">{inq.userPhone}</div>
                    </td>

                    <td className="p-4 font-bold text-[#405D47] max-w-[200px] truncate">
                      {inq.propertyTitle}
                    </td>

                    <td className="p-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        inq.inquiryType === 'Investment Pledge' ? 'bg-[#1F4027]/10 text-[#1F4027] border-[#1F4027]/25' :
                        inq.inquiryType === 'Site Visit' ? 'bg-[#702B00]/10 text-[#702B00] border-[#702B00]/25' :
                        'bg-[#405D47]/10 text-[#405D47] border-[#405D47]/25'
                      }`}>
                        {inq.inquiryType}
                      </span>
                    </td>

                    <td className="p-4 font-black text-[#09240F] font-helvetica-bold">
                      {inq.amount ? formatINR(inq.amount) : 'N/A'}
                    </td>

                    <td className="p-4 text-[#405D47] max-w-[240px] truncate">
                      {inq.notes}
                    </td>

                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                        inq.status === 'Closed' ? 'bg-[#1F4027]/10 text-[#1F4027] border-[#1F4027]/25' :
                        inq.status === 'Contacted' ? 'bg-[#702B00]/10 text-[#702B00] border-[#702B00]/25' :
                        'bg-[#405D47]/10 text-[#405D47] border-[#405D47]/25'
                      }`}>
                        {inq.status}
                      </span>
                    </td>

                    <td className="p-4 text-right space-x-1">
                      <button
                        onClick={() => updateInquiryStatus(inq.id, 'New')}
                        className="px-2 py-1 rounded bg-[#F5F6F4] text-[#09240F] text-[10px] font-bold hover:bg-[#677865]/20 border border-[#677865]/20 cursor-pointer"
                      >
                        New
                      </button>
                      <button
                        onClick={() => updateInquiryStatus(inq.id, 'Contacted')}
                        className="px-2 py-1 rounded bg-[#702B00]/10 text-[#702B00] text-[10px] font-bold hover:bg-[#702B00]/20 border border-[#702B00]/25 cursor-pointer"
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => updateInquiryStatus(inq.id, 'Closed')}
                        className="px-2 py-1 rounded bg-[#1F4027]/10 text-[#1F4027] text-[10px] font-bold hover:bg-[#1F4027]/20 border border-[#1F4027]/25 cursor-pointer"
                      >
                        Closed
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

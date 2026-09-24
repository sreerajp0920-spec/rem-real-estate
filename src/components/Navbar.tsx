import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  ShieldCheck, 
  User, 
  ChevronDown, 
  Search,
  TrendingUp,
  Home,
  Briefcase,
  Key,
  Layers,
  Sparkles,
  Trees,
  Check,
  Globe
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    language,
    setLanguage,
    t,
    setIsCompanyInvestModalOpen,
    activeTab, 
    setActiveTab, 
    currentUser, 
    switchUser, 
    setIsAuthModalOpen,
    searchQuery,
    setSearchQuery,
    setListingTypeFilter,
    listingTypeFilter,
    setPropertyTypeFilter,
    propertyTypeFilter,
    setPreLaunchOnly,
    preLaunchOnly,
    setSelectedCategory,
    selectedCategory,
    exitAdminMode,
    logoutUser
  } = useApp();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Helper to apply filters & navigate to properties tab
  const handleNavSelection = (config: {
    listingType?: 'all' | 'sale' | 'rent';
    propertyType?: 'all' | 'Apartment' | 'Villa' | 'Plot' | 'Penthouse' | 'Commercial';
    category?: 'all' | 'residential' | 'commercial' | 'land_plots' | 'upcoming_launch';
    preLaunch?: boolean;
  }) => {
    setActiveTab('properties');
    if (config.listingType !== undefined) setListingTypeFilter(config.listingType);
    if (config.propertyType !== undefined) setPropertyTypeFilter(config.propertyType);
    if (config.category !== undefined) setSelectedCategory(config.category);
    if (config.preLaunch !== undefined) setPreLaunchOnly(config.preLaunch);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-6">
            <div 
              onClick={() => {
                handleNavSelection({ listingType: 'all', propertyType: 'all', category: 'all', preLaunch: false });
              }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-stone-950 flex items-center justify-center text-amber-300 font-helvetica-black text-base shadow-sm group-hover:bg-black transition-all">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-helvetica-black text-xl tracking-tighter text-stone-950 leading-none uppercase">REM ESTATES</span>
                <span className="text-[9px] text-stone-900 font-helvetica-bold tracking-[0.25em] uppercase">Residences • Bengaluru</span>
              </div>

            </div>


            {/* Quick Search */}
            <div className="hidden xl:flex items-center relative">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search residences, localities..."
                className="pl-8.5 pr-4 py-1.5 bg-white hover:bg-stone-50 focus:bg-white text-xs font-medium text-stone-800 placeholder-stone-400 rounded-full border border-stone-200 focus:border-stone-400 focus:ring-2 focus:ring-stone-200 transition-all w-56 focus:w-64 outline-none"
              />
            </div>
          </div>


          {/* New Nav Hierarchy */}
          <nav className="hidden md:flex items-center space-x-1">
            
            {/* 1. PROPERTIES DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('properties')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavSelection({ listingType: 'all', propertyType: 'all', category: 'all', preLaunch: false })}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeDropdown === 'properties' || (activeTab === 'properties' && propertyTypeFilter === 'all' && !preLaunchOnly && selectedCategory === 'all')
                    ? 'bg-slate-100 text-blue-600'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span>Properties</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'properties' && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Browse Properties
                  </div>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'all', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${
                      listingTypeFilter === 'sale' && propertyTypeFilter === 'all' && !preLaunchOnly ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>For Sale</span>
                    {listingTypeFilter === 'sale' && propertyTypeFilter === 'all' && !preLaunchOnly && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  
                  <button
                    onClick={() => handleNavSelection({ preLaunch: true, propertyType: 'all', listingType: 'all', category: 'all' })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${
                      preLaunchOnly ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>Pre-Launch</span>
                    {preLaunchOnly && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ category: 'commercial', propertyType: 'Commercial', listingType: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${
                      propertyTypeFilter === 'Commercial' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>Commercial</span>
                    {propertyTypeFilter === 'Commercial' && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                </div>
              )}
            </div>

            {/* 2. BUY DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('buy')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeDropdown === 'buy' || (listingTypeFilter === 'sale' && propertyTypeFilter !== 'all')
                    ? 'bg-slate-100 text-blue-600'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                <span>Buy</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {activeDropdown === 'buy' && (
                <div className="absolute left-0 mt-1 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Buy Residential & Plots
                  </div>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Apartment', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${
                      listingTypeFilter === 'sale' && propertyTypeFilter === 'Apartment' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>Apartments</span>
                    {listingTypeFilter === 'sale' && propertyTypeFilter === 'Apartment' && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Villa', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${
                      listingTypeFilter === 'sale' && propertyTypeFilter === 'Villa' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>Villas</span>
                    {listingTypeFilter === 'sale' && propertyTypeFilter === 'Villa' && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Plot', category: 'land_plots', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${
                      propertyTypeFilter === 'Plot' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>Plots</span>
                    {propertyTypeFilter === 'Plot' && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Penthouse', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${
                      propertyTypeFilter === 'Penthouse' ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>Penthouses</span>
                    {propertyTypeFilter === 'Penthouse' && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                </div>
              )}
            </div>

            {/* 3. INVEST IN PROPERTIES - KEY FEATURE */}
            <button
              onClick={() => setActiveTab('invest')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'invest'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-blue-700 bg-blue-50 hover:bg-blue-100/90 border border-blue-200 hover:border-blue-400'
              }`}
              title="Invest in High-Yield Pre-Leased Commercial & Residential Real Estate"
            >
              <TrendingUp className={`w-3.5 h-3.5 ${activeTab === 'invest' ? 'text-white' : 'text-blue-600'}`} />
              <span>Co-Own Properties</span>
              <span className={`px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider ${
                activeTab === 'invest' ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800'
              }`}>
                Earn Rent
              </span>
            </button>

            </nav>

          {/* Right Actions: Invest in Company, Language Toggle, Admin & Profile */}
          <div className="flex items-center space-x-2.5">
            
            {/* Corporate Equity Investment CTA */}
            <button
              onClick={() => setIsCompanyInvestModalOpen(true)}
              className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-helvetica-black text-[11px] uppercase tracking-wider transition-all shadow-xs cursor-pointer border border-amber-500/40"
              title="Invest in REM Estates Pvt. Ltd. (Growth Round)"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t('navCompanyInvest')}</span>
            </button>

            {/* Language Selector Dropdown (English, Kannada, Hindi) */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1.5 py-1.5 px-3 rounded-full border border-stone-300 bg-white hover:border-stone-500 text-xs font-helvetica-bold text-stone-900 cursor-pointer shadow-xs transition-all"
                title="Switch Language / ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಿ / भाषा बदलें"
              >
                <Globe className="w-3.5 h-3.5 text-stone-700" />
                <span className="uppercase text-[11px] font-black">
                  {language === 'en' ? 'EN' : language === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}
                </span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {isLangMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border-2 border-stone-900 py-1.5 z-50 animate-in fade-in"
                  onMouseLeave={() => setIsLangMenuOpen(false)}
                >
                  <div className="px-3.5 py-1 text-[10px] font-helvetica-bold text-stone-500 uppercase tracking-wider border-b border-stone-100">
                    Select Language / ಭಾಷೆ
                  </div>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      language === 'en' ? 'bg-stone-100 text-black font-black' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>English (Main)</span>
                    {language === 'en' && <Check className="w-3.5 h-3.5 text-stone-900" />}
                  </button>

                  <button
                    onClick={() => { setLanguage('kn'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      language === 'kn' ? 'bg-stone-100 text-black font-black' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>ಕನ್ನಡ (Kannada)</span>
                    {language === 'kn' && <Check className="w-3.5 h-3.5 text-stone-900" />}
                  </button>

                  <button
                    onClick={() => { setLanguage('hi'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      language === 'hi' ? 'bg-stone-100 text-black font-black' : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>हिन्दी (Hindi)</span>
                    {language === 'hi' && <Check className="w-3.5 h-3.5 text-stone-900" />}
                  </button>
                </div>
              )}
            </div>

            {/* Admin Console Button - ONLY visible when authenticated as Admin */}
            {currentUser.role === 'admin' && (
              <button
                onClick={() => setActiveTab(activeTab === 'admin' ? 'properties' : 'admin')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'admin'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin Console</span>
              </button>
            )}

            {/* Profile Dropdown */}
            <div className="relative">
              <div 
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-2 py-1 px-2 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs cursor-pointer transition-all"
              >

                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-7 h-7 rounded-full object-cover border border-slate-200"
                />
                <span className="text-xs font-bold text-slate-800 hidden sm:inline max-w-[120px] truncate">
                  {currentUser.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </div>

              {isProfileMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setIsProfileMenuOpen(false)}
                >
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1.5">
                    <p className="text-[11px] text-slate-400 font-semibold">Signed in as</p>
                    <p className="text-xs font-bold text-slate-900 truncate">{currentUser.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{currentUser.email}</p>
                    <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      currentUser.role === 'admin' 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {currentUser.role === 'admin' ? 'REM Operations Admin' : 'Verified Homebuyer'}
                    </span>
                  </div>

                  {/* Admin-only controls */}
                  {currentUser.role === 'admin' ? (
                    <div className="space-y-1">
                      <p className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                        Admin Controls:
                      </p>
                      <button
                        onClick={() => { setActiveTab('admin'); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center space-x-2 cursor-pointer"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-slate-600" />
                        <span>Open Admin Console</span>
                      </button>
                      <button
                        onClick={() => { setActiveTab('properties'); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center space-x-2 cursor-pointer"
                      >
                        <Home className="w-3.5 h-3.5 text-slate-500" />
                        <span>View Buyer Catalog</span>
                      </button>
                      <div className="border-t border-slate-100 pt-1 mt-1">
                        <button
                          onClick={() => { exitAdminMode(); setIsProfileMenuOpen(false); }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center space-x-2 cursor-pointer"
                        >
                          <span>Exit Admin Session</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Buyer Menu: strictly buyer features, zero admin access */
                    <div className="space-y-1">
                      <button
                        onClick={() => { setActiveTab('portfolio'); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 hover:bg-emerald-50 flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                          <span>My Investments</span>
                        </div>
                        {currentUser.investments.length > 0 && (
                          <span className="font-bold text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                            {currentUser.investments.length} Active
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() => { setIsAuthModalOpen(true); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center space-x-2 cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Switch Account / Sign In</span>
                      </button>
                      <button
                        onClick={() => { logoutUser(); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center space-x-2 cursor-pointer"
                      >
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Mobile Navigation Bar */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-stone-200 text-xs font-bold text-stone-800 overflow-x-auto space-x-2">
          {/* Mobile Company Invest CTA */}
          <button
            onClick={() => setIsCompanyInvestModalOpen(true)}
            className="px-2.5 py-1 rounded-lg shrink-0 font-helvetica-black bg-amber-400 text-black border border-amber-500/40 flex items-center space-x-1 cursor-pointer"
          >
            <TrendingUp className="w-3 h-3" />
            <span>{t('navCompanyInvest')}</span>
          </button>

          {/* Mobile Quick Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'kn' : language === 'kn' ? 'hi' : 'en')}
            className="px-2.5 py-1 rounded-lg shrink-0 font-helvetica-bold bg-white text-stone-900 border border-stone-300 flex items-center space-x-1 cursor-pointer"
            title="Toggle Language"
          >
            <Globe className="w-3 h-3 text-stone-700" />
            <span>{language === 'en' ? 'EN' : language === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}</span>
          </button>

          <button
            onClick={() => handleNavSelection({ listingType: 'all', propertyType: 'all', category: 'all', preLaunch: false })}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'properties' && listingTypeFilter === 'all' && propertyTypeFilter === 'all' ? 'bg-stone-900 text-white' : 'bg-stone-100'}`}
          >
            {t('navProperties')}
          </button>
          <button
            onClick={() => handleNavSelection({ propertyType: 'Apartment', preLaunch: false })}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${propertyTypeFilter === 'Apartment' ? 'bg-stone-900 text-white' : 'bg-stone-100'}`}
          >
            Apartments
          </button>
          <button
            onClick={() => handleNavSelection({ preLaunch: true })}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${preLaunchOnly ? 'bg-amber-400 text-black font-bold' : 'bg-stone-100'}`}
          >
            Pre-Launch
          </button>
        </div>
      </div>
    </header>

  );
};

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
    listingType?: 'all' | 'sale';
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
    <header className="sticky top-0 z-40 bg-[#F5F6F4]/95 backdrop-blur-md border-b border-[#677865]/25 transition-all shadow-xs">
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
              <div className="w-9 h-9 rounded-full bg-[#09240F] flex items-center justify-center text-[#F5F6F4] font-helvetica-black text-base shadow-sm group-hover:bg-[#1F4027] transition-all border border-[#677865]/40">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-helvetica-black text-xl tracking-tighter text-[#09240F] leading-none uppercase">{t('brandName')}</span>
                <span className="text-[9px] text-[#405D47] font-helvetica-bold tracking-[0.25em] uppercase">{t('brandTagline')}</span>
              </div>
            </div>

            {/* Quick Search */}
            <div className="hidden xl:flex items-center relative">
              <Search className="w-3.5 h-3.5 text-[#677865] absolute left-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('navSearchPlaceholder')}
                className="pl-8.5 pr-4 py-1.5 bg-[#FFFFFF] hover:bg-[#F5F6F4] focus:bg-[#FFFFFF] text-xs font-medium text-[#09240F] placeholder-[#677865] rounded-full border border-[#677865]/35 focus:border-[#702B00] focus:ring-1 focus:ring-[#702B00] transition-all w-56 focus:w-64 outline-none"
              />
            </div>
          </div>


          {/* Nav Hierarchy */}
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
                    ? 'bg-[#1F4027] text-white shadow-xs'
                    : 'text-[#09240F] hover:text-[#702B00] hover:bg-[#FFFFFF]'
                }`}
              >
                <span>{t('navProperties')}</span>
                <ChevronDown className={`w-3.5 h-3.5 ${activeDropdown === 'properties' || (activeTab === 'properties' && propertyTypeFilter === 'all' && !preLaunchOnly && selectedCategory === 'all') ? 'text-white' : 'text-[#677865]'}`} />
              </button>

              {activeDropdown === 'properties' && (
                <div className="absolute left-0 mt-1 w-48 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#677865]/30 py-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-[#677865] uppercase tracking-wider">
                    {t('navProperties')}
                  </div>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'all', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F5F6F4] flex items-center justify-between cursor-pointer ${
                      listingTypeFilter === 'sale' && propertyTypeFilter === 'all' && !preLaunchOnly ? 'text-[#702B00] bg-[#F5F6F4] font-bold' : 'text-[#09240F]'
                    }`}
                  >
                    <span>{t('cardForSale')}</span>
                    {listingTypeFilter === 'sale' && propertyTypeFilter === 'all' && !preLaunchOnly && <Check className="w-3.5 h-3.5 text-[#702B00]" />}
                  </button>
                  
                  <button
                    onClick={() => handleNavSelection({ preLaunch: true, propertyType: 'all', listingType: 'all', category: 'all' })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F5F6F4] flex items-center justify-between cursor-pointer ${
                      preLaunchOnly ? 'text-[#702B00] bg-[#F5F6F4] font-bold' : 'text-[#09240F]'
                    }`}
                  >
                    <span>{t('navPreLaunch')}</span>
                    {preLaunchOnly && <Check className="w-3.5 h-3.5 text-[#702B00]" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ category: 'commercial', propertyType: 'Commercial', listingType: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F5F6F4] flex items-center justify-between cursor-pointer ${
                      propertyTypeFilter === 'Commercial' ? 'text-[#702B00] bg-[#F5F6F4] font-bold' : 'text-[#09240F]'
                    }`}
                  >
                    <span>{t('navCommercial')}</span>
                    {propertyTypeFilter === 'Commercial' && <Check className="w-3.5 h-3.5 text-[#702B00]" />}
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
                    ? 'bg-[#1F4027] text-white shadow-xs'
                    : 'text-[#09240F] hover:text-[#702B00] hover:bg-[#FFFFFF]'
                }`}
              >
                <span>{t('navBuy')}</span>
                <ChevronDown className={`w-3.5 h-3.5 ${activeDropdown === 'buy' || (listingTypeFilter === 'sale' && propertyTypeFilter !== 'all') ? 'text-white' : 'text-[#677865]'}`} />
              </button>

              {activeDropdown === 'buy' && (
                <div className="absolute left-0 mt-1 w-48 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#677865]/30 py-2 z-50 animate-in fade-in duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold text-[#677865] uppercase tracking-wider">
                    {t('navBuy')}
                  </div>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Apartment', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F5F6F4] flex items-center justify-between cursor-pointer ${
                      listingTypeFilter === 'sale' && propertyTypeFilter === 'Apartment' ? 'text-[#702B00] bg-[#F5F6F4] font-bold' : 'text-[#09240F]'
                    }`}
                  >
                    <span>{t('navApartments')}</span>
                    {listingTypeFilter === 'sale' && propertyTypeFilter === 'Apartment' && <Check className="w-3.5 h-3.5 text-[#702B00]" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Villa', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F5F6F4] flex items-center justify-between cursor-pointer ${
                      listingTypeFilter === 'sale' && propertyTypeFilter === 'Villa' ? 'text-[#702B00] bg-[#F5F6F4] font-bold' : 'text-[#09240F]'
                    }`}
                  >
                    <span>{t('navVillas')}</span>
                    {listingTypeFilter === 'sale' && propertyTypeFilter === 'Villa' && <Check className="w-3.5 h-3.5 text-[#702B00]" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Plot', category: 'land_plots', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F5F6F4] flex items-center justify-between cursor-pointer ${
                      propertyTypeFilter === 'Plot' ? 'text-[#702B00] bg-[#F5F6F4] font-bold' : 'text-[#09240F]'
                    }`}
                  >
                    <span>{t('navPlots')}</span>
                    {propertyTypeFilter === 'Plot' && <Check className="w-3.5 h-3.5 text-[#702B00]" />}
                  </button>
                  <button
                    onClick={() => handleNavSelection({ listingType: 'sale', propertyType: 'Penthouse', category: 'all', preLaunch: false })}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold hover:bg-[#F5F6F4] flex items-center justify-between cursor-pointer ${
                      propertyTypeFilter === 'Penthouse' ? 'text-[#702B00] bg-[#F5F6F4] font-bold' : 'text-[#09240F]'
                    }`}
                  >
                    <span>{t('navPenthouses')}</span>
                    {propertyTypeFilter === 'Penthouse' && <Check className="w-3.5 h-3.5 text-[#702B00]" />}
                  </button>
                </div>
              )}
            </div>

            {/* 3. INVEST IN PROPERTIES (CO-INVEST) */}
            <button
              onClick={() => setActiveTab('invest')}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'invest'
                  ? 'bg-[#702B00] text-white shadow-xs'
                  : 'text-[#702B00] bg-[#FFFFFF] hover:bg-[#702B00] hover:text-white border border-[#702B00]/40'
              }`}
              title="Invest in High-Yield Pre-Leased Commercial & Residential Real Estate"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t('navCoInvest')}</span>
              <span className={`px-1.5 py-0.2 rounded text-[9px] font-black uppercase tracking-wider ${
                activeTab === 'invest' ? 'bg-[#542000] text-white' : 'bg-[#1F4027] text-white'
              }`}>
                {t('navHighYield')}
              </span>
            </button>
          </nav>

          {/* Right Actions: Invest in Company, Language Toggle, Admin & Profile */}
          <div className="flex items-center space-x-2.5">
            
            {/* Corporate Equity Investment CTA */}
            <button
              onClick={() => setIsCompanyInvestModalOpen(true)}
              className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#702B00] hover:bg-[#542000] text-white font-helvetica-black text-[11px] uppercase tracking-wider transition-all shadow-xs cursor-pointer border border-[#702B00]/40"
              title="Invest in REM Estates Pvt. Ltd. (Growth Round)"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t('navCompanyInvest')}</span>
            </button>

            {/* Language Selector Dropdown (English, Kannada, Hindi) */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1.5 py-1.5 px-3 rounded-full border border-[#677865]/40 bg-[#FFFFFF] hover:border-[#702B00] text-xs font-helvetica-bold text-[#09240F] cursor-pointer shadow-xs transition-all"
                title="Switch Language / ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಿ / भाषा बदलें"
              >
                <Globe className="w-3.5 h-3.5 text-[#405D47]" />
                <span className="uppercase text-[11px] font-black">
                  {language === 'en' ? 'EN' : language === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}
                </span>
                <ChevronDown className="w-3 h-3 text-[#677865]" />
              </button>

              {isLangMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-44 bg-[#FFFFFF] rounded-2xl shadow-2xl border-2 border-[#1F4027] py-1.5 z-50 animate-in fade-in"
                  onMouseLeave={() => setIsLangMenuOpen(false)}
                >
                  <div className="px-3.5 py-1 text-[10px] font-helvetica-bold text-[#677865] uppercase tracking-wider border-b border-[#677865]/15">
                    Select Language / ಭಾಷೆ
                  </div>
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      language === 'en' ? 'bg-[#1F4027] text-white font-black' : 'text-[#09240F] hover:bg-[#F5F6F4]'
                    }`}
                  >
                    <span>English (Main)</span>
                    {language === 'en' && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>

                  <button
                    onClick={() => { setLanguage('kn'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      language === 'kn' ? 'bg-[#1F4027] text-white font-black' : 'text-[#09240F] hover:bg-[#F5F6F4]'
                    }`}
                  >
                    <span>ಕನ್ನಡ (Kannada)</span>
                    {language === 'kn' && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>

                  <button
                    onClick={() => { setLanguage('hi'); setIsLangMenuOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between cursor-pointer ${
                      language === 'hi' ? 'bg-[#1F4027] text-white font-black' : 'text-[#09240F] hover:bg-[#F5F6F4]'
                    }`}
                  >
                    <span>हिन्दी (Hindi)</span>
                    {language === 'hi' && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                </div>
              )}
            </div>

            {/* Admin Console Button */}
            {currentUser.role === 'admin' && (
              <button
                onClick={() => setActiveTab(activeTab === 'admin' ? 'properties' : 'admin')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'admin'
                    ? 'bg-[#09240F] text-white shadow-xs'
                    : 'text-[#09240F] bg-[#FFFFFF] hover:bg-[#F5F6F4] border border-[#677865]/35'
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
                className="flex items-center space-x-2 py-1 px-2 rounded-lg border border-[#677865]/30 bg-[#FFFFFF] hover:border-[#702B00] hover:shadow-xs cursor-pointer transition-all"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-7 h-7 rounded-full object-cover border border-[#677865]/40"
                />
                <span className="text-xs font-bold text-[#09240F] hidden sm:inline max-w-[120px] truncate">
                  {currentUser.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#677865]" />
              </div>

              {isProfileMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#677865]/30 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setIsProfileMenuOpen(false)}
                >
                  <div className="px-3 py-1.5 border-b border-[#677865]/15 mb-1.5">
                    <p className="text-[11px] text-[#677865] font-semibold">Signed in as</p>
                    <p className="text-xs font-bold text-[#09240F] truncate">{currentUser.name}</p>
                    <p className="text-[10px] text-[#405D47] truncate">{currentUser.email}</p>
                    <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      currentUser.role === 'admin' 
                        ? 'bg-[#09240F] text-white' 
                        : 'bg-[#1F4027] text-white'
                    }`}>
                      {currentUser.role === 'admin' ? 'REM Operations Admin' : 'Verified Homebuyer'}
                    </span>
                  </div>

                  {/* Admin-only controls */}
                  {currentUser.role === 'admin' ? (
                    <div className="space-y-1">
                      <p className="px-3 text-[10px] font-bold text-[#677865] uppercase tracking-wider">
                        Admin Controls:
                      </p>
                      <button
                        onClick={() => { setActiveTab('admin'); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-[#09240F] hover:bg-[#F5F6F4] flex items-center space-x-2 cursor-pointer"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#405D47]" />
                        <span>Open Admin Console</span>
                      </button>
                      <button
                        onClick={() => { setActiveTab('properties'); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-[#09240F] hover:bg-[#F5F6F4] flex items-center space-x-2 cursor-pointer"
                      >
                        <Home className="w-3.5 h-3.5 text-[#677865]" />
                        <span>View Buyer Catalog</span>
                      </button>
                      <div className="border-t border-[#677865]/15 pt-1 mt-1">
                        <button
                          onClick={() => { exitAdminMode(); setIsProfileMenuOpen(false); }}
                          className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-[#532001] hover:bg-[#532001]/10 flex items-center space-x-2 cursor-pointer"
                        >
                          <span>Exit Admin Session</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Buyer Menu */
                    <div className="space-y-1">
                      <button
                        onClick={() => { setActiveTab('portfolio'); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1F4027] hover:bg-[#1F4027]/10 flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-3.5 h-3.5 text-[#1F4027]" />
                          <span>My Investments</span>
                        </div>
                        {currentUser.investments.length > 0 && (
                          <span className="font-bold text-[10px] bg-[#1F4027] text-white px-1.5 py-0.5 rounded">
                            {currentUser.investments.length} Active
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() => { setIsAuthModalOpen(true); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-[#09240F] hover:bg-[#F5F6F4] flex items-center space-x-2 cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5 text-[#677865]" />
                        <span>Switch Account / Sign In</span>
                      </button>
                      <button
                        onClick={() => { logoutUser(); setIsProfileMenuOpen(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-[#405D47] hover:bg-[#F5F6F4] flex items-center space-x-2 cursor-pointer"
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
        <div className="md:hidden flex items-center justify-between py-2 border-t border-[#677865]/25 text-xs font-bold text-[#09240F] overflow-x-auto space-x-2">
          {/* Mobile Company Invest CTA */}
          <button
            onClick={() => setIsCompanyInvestModalOpen(true)}
            className="px-2.5 py-1 rounded-lg shrink-0 font-helvetica-black bg-[#702B00] text-white border border-[#702B00]/40 flex items-center space-x-1 cursor-pointer"
          >
            <TrendingUp className="w-3 h-3" />
            <span>{t('navCompanyInvest')}</span>
          </button>

          {/* Mobile Quick Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'kn' : language === 'kn' ? 'hi' : 'en')}
            className="px-2.5 py-1 rounded-lg shrink-0 font-helvetica-bold bg-[#FFFFFF] text-[#09240F] border border-[#677865]/40 flex items-center space-x-1 cursor-pointer"
            title="Toggle Language"
          >
            <Globe className="w-3 h-3 text-[#405D47]" />
            <span>{language === 'en' ? 'EN' : language === 'kn' ? 'ಕನ್ನಡ' : 'ಹಿन्दी'}</span>
          </button>

          <button
            onClick={() => handleNavSelection({ listingType: 'all', propertyType: 'all', category: 'all', preLaunch: false })}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${activeTab === 'properties' && listingTypeFilter === 'all' && propertyTypeFilter === 'all' ? 'bg-[#1F4027] text-white' : 'bg-[#FFFFFF] text-[#09240F] border border-[#677865]/20'}`}
          >
            {t('navProperties')}
          </button>
          <button
            onClick={() => handleNavSelection({ propertyType: 'Apartment', preLaunch: false })}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${propertyTypeFilter === 'Apartment' ? 'bg-[#1F4027] text-white' : 'bg-[#FFFFFF] text-[#09240F] border border-[#677865]/20'}`}
          >
            {t('navApartments')}
          </button>
          <button
            onClick={() => handleNavSelection({ preLaunch: true })}
            className={`px-2.5 py-1 rounded-lg shrink-0 ${preLaunchOnly ? 'bg-[#702B00] text-white font-bold' : 'bg-[#FFFFFF] text-[#09240F] border border-[#677865]/20'}`}
          >
            {t('navPreLaunch')}
          </button>
        </div>
      </div>
    </header>

  );
};

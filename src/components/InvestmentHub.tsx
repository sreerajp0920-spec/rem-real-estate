import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatINR } from '../utils/formatters';
import { 
  Building2, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  HeartHandshake, 
  CheckCircle2, 
  IndianRupee, 
  TrendingUp 
} from 'lucide-react';

export const InvestmentHub: React.FC = () => {
  const { 
    properties, 
    setSelectedProperty, 
    setIsInvestModalOpen, 
    setInvestTargetProperty,
    setActiveTab,
    t 
  } = useApp();

  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Filter properties with investment options
  const investableProperties = properties.filter(p => p.investment?.isInvestable);

  const faqs = [
    {
      q: t('hubFaq1Q'),
      a: t('hubFaq1A')
    },
    {
      q: t('hubFaq2Q'),
      a: t('hubFaq2A')
    },
    {
      q: t('hubFaq3Q'),
      a: t('hubFaq3A')
    },
    {
      q: t('hubFaq4Q'),
      a: t('hubFaq4A')
    },
    {
      q: t('hubFaq5Q'),
      a: t('hubFaq5A')
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. Hero Banner in Obsidian Pine */}
      <div className="relative rounded-3xl bg-[#09240F] text-white p-8 sm:p-12 overflow-hidden border border-[#677865]/35 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-[#1F4027]/70 text-[#F5F6F4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#677865]/40">
            <HeartHandshake className="w-4 h-4 text-[#702B00]" />
            <span>{t('hubBadge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('hubHeading1')} <br />
            <span className="text-[#702B00]">
              {t('hubHeading2')}
            </span>
          </h1>

          <p className="mt-4 text-[#F5F6F4]/90 text-sm sm:text-base leading-relaxed">
            {t('hubSubtitle')}
          </p>

          {/* Quick Highlight Pills */}
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-semibold text-[#F5F6F4]">
            <span className="px-3 py-1.5 rounded-xl bg-[#1F4027]/60 border border-[#677865]/35 flex items-center space-x-1.5">
              <IndianRupee className="w-3.5 h-3.5 text-[#702B00]" />
              <span>{t('hubMonthlyPayoutPill')}</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#1F4027]/60 border border-[#677865]/35 flex items-center space-x-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#702B00]" />
              <span>{t('hubGrowthPill')}</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#1F4027]/60 border border-[#677865]/35 flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#702B00]" />
              <span>{t('hubLegalTitlePill')}</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#1F4027]/60 border border-[#677865]/35 flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#702B00]" />
              <span>{t('hubZeroHasslePill')}</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3.5 items-center">
            <button
              onClick={() => {
                const el = document.getElementById('properties-catalog');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3 rounded-xl bg-[#702B00] hover:bg-[#542000] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center space-x-2"
            >
              <span>{t('hubSeePropertiesBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className="px-6 py-3 rounded-xl bg-[#1F4027] hover:bg-[#405D47] text-white font-bold text-xs uppercase tracking-wider border border-[#677865]/40 transition-all cursor-pointer flex items-center space-x-1.5"
            >
              <Users className="w-4 h-4 text-[#702B00]" />
              <span>{t('hubMyInvestmentsBtn')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. 3 Easy Steps */}
      <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border-2 border-[#677865]/25 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#702B00] uppercase tracking-wider block">{t('hubHowItWorksTag')}</span>
          <h2 className="text-2xl font-black text-[#09240F] tracking-tight mt-1">
            {t('hubHowItWorksHeading')}
          </h2>
          <p className="text-xs text-[#405D47] mt-1">
            {t('hubHowItWorksSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#F5F6F4] border border-[#677865]/25 hover:border-[#1F4027] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1F4027] text-white font-bold flex items-center justify-center text-sm mb-4 shadow-xs">
              1
            </div>
            <h3 className="text-base font-bold text-[#09240F] mb-1.5">
              {t('hubStep1Title')}
            </h3>
            <p className="text-xs text-[#405D47] leading-relaxed">
              {t('hubStep1Desc')}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F6F4] border border-[#677865]/25 hover:border-[#1F4027] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1F4027] text-white font-bold flex items-center justify-center text-sm mb-4 shadow-xs">
              2
            </div>
            <h3 className="text-base font-bold text-[#09240F] mb-1.5">
              {t('hubStep2Title')}
            </h3>
            <p className="text-xs text-[#405D47] leading-relaxed">
              {t('hubStep2Desc')}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F6F4] border border-[#677865]/25 hover:border-[#1F4027] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#1F4027] text-white font-bold flex items-center justify-center text-sm mb-4 shadow-xs">
              3
            </div>
            <h3 className="text-base font-bold text-[#09240F] mb-1.5">
              {t('hubStep3Title')}
            </h3>
            <p className="text-xs text-[#405D47] leading-relaxed">
              {t('hubStep3Desc')}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Available Properties Catalog */}
      <div id="properties-catalog" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-[#09240F] tracking-tight">
              {t('hubCatalogHeading')}
            </h2>
            <p className="text-xs text-[#405D47] mt-0.5">
              {t('hubCatalogSubtitle')}
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 bg-[#F5F6F4] text-[#09240F] rounded-md border border-[#677865]/30 self-start sm:self-auto">
            {investableProperties.length} {t('hubAvailableCount')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {investableProperties.map(property => {
            const inv = property.investment!;
            const minTicket = inv.minTicketSize || 50000;
            const fundedPct = inv.fundedPercentage || 70;
            const coInvestorsCount = inv.coInvestors?.length || 6;

            return (
              <div 
                key={property.id}
                className="bg-[#FFFFFF] rounded-3xl border-2 border-[#677865]/25 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#1F4027] group"
              >
                <div>
                  {/* Property Cover Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F6F4]">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09240F]/85 via-transparent to-black/20" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#702B00] text-white shadow-xs">
                        ~{inv.grossRentalYieldPercentage}% {t('hubExpectedAnnualYield')}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#09240F]/85 text-white backdrop-blur-md">
                        {t('hubStartWith')} {formatINR(minTicket)}
                      </span>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 text-white">
                      <span className="text-[10px] font-bold text-[#702B00] uppercase tracking-wider block">
                        {t('hubTenant')}
                      </span>
                      <p className="text-xs font-bold text-white line-clamp-1">
                        {inv.tenantProfile || 'Tier-1 Institutional Tenant'}
                      </p>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#405D47] font-medium mb-1">
                      <span>{property.developer}</span>
                      <span className="text-[#09240F] bg-[#F5F6F4] px-2 py-0.5 rounded font-semibold border border-[#677865]/20">
                        {property.location.locality}, {property.location.city}
                      </span>
                    </div>

                    <h3 
                      onClick={() => setSelectedProperty(property)}
                      className="text-base font-bold text-[#09240F] hover:text-[#702B00] transition-colors cursor-pointer line-clamp-1"
                    >
                      {property.title}
                    </h3>
                    
                    <p className="text-xs text-[#405D47] mt-1 line-clamp-2">
                      {property.tagline || property.description}
                    </p>

                    {/* Progress Bar & Community Co-Investors */}
                    <div className="mt-4 p-3.5 bg-[#F5F6F4] rounded-2xl border border-[#677865]/25">
                      <div className="flex justify-between items-center text-xs font-bold mb-2">
                        <span className="text-[#09240F] flex items-center space-x-1.5">
                          <Users className="w-3.5 h-3.5 text-[#702B00]" />
                          <span>{t('hubJoinedBy')} {coInvestorsCount}</span>
                        </span>
                        <span className="text-[#702B00] font-black">{fundedPct}% {t('modalFunded')}</span>
                      </div>
                      
                      <div className="w-full h-2 bg-[#D8DED7] rounded-md overflow-hidden">
                        <div 
                          className="h-full bg-[#702B00] rounded-md transition-all duration-500" 
                          style={{ width: `${Math.min(100, fundedPct)}%` }}
                        />
                      </div>
                      
                      <div className="mt-2 text-[10px] text-[#677865] flex justify-between font-semibold">
                        <span>{t('modalTotalValuation')}: {formatINR(property.pricing.totalPrice)}</span>
                        <span>{t('modalCreditedMonthly')}</span>
                      </div>
                    </div>

                    {/* Stats Highlights */}
                    <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                      <div className="p-2.5 rounded-xl bg-[#F5F6F4] border border-[#677865]/20">
                        <span className="text-[10px] font-bold text-[#677865] uppercase block">{t('modalMinInvestment')}</span>
                        <span className="text-sm font-black text-[#09240F]">
                          {formatINR(minTicket)}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#F5F6F4] border border-[#702B00]/30">
                        <span className="text-[10px] font-bold text-[#702B00] uppercase block">{t('hubExpectedAnnualYield')}</span>
                        <span className="text-sm font-black text-[#702B00]">
                          {inv.grossRentalYieldPercentage}% / yr
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 pt-0 flex space-x-2">
                  <button
                    onClick={() => setSelectedProperty(property)}
                    className="flex-1 py-2.5 rounded-xl bg-[#F5F6F4] hover:bg-[#FFFFFF] text-[#09240F] border border-[#677865]/30 text-xs font-bold transition-all cursor-pointer"
                  >
                    {t('hubViewDetails')}
                  </button>

                  <button
                    onClick={() => {
                      setInvestTargetProperty(property);
                      setIsInvestModalOpen(true);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#542000] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <span>{t('hubInvestInProp')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* 4. Common Questions */}
      <div className="bg-[#F5F6F4] rounded-3xl p-6 sm:p-10 border border-[#677865]/25">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase text-[#677865] tracking-wider">
              {t('hubFaqTag')}
            </span>
            <h3 className="text-2xl font-black text-[#09240F] tracking-tight mt-1">
              {t('hubFaqHeading')}
            </h3>
            <p className="text-xs text-[#405D47] mt-1">
              {t('hubFaqSubtitle')}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = expandedFaqIndex === i;
              return (
                <div 
                  key={i} 
                  className="bg-[#FFFFFF] rounded-2xl border border-[#677865]/25 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setExpandedFaqIndex(isOpen ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-[#09240F] text-xs sm:text-sm hover:text-[#702B00] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#677865] shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#677865] shrink-0 ml-2" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-[#405D47] leading-relaxed border-t border-[#677865]/20 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Friendly Help Box */}
          <div className="mt-8 p-4 rounded-2xl bg-[#FFFFFF] border border-[#677865]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-7 h-7 text-[#1F4027] shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-[#09240F]">{t('hubFriendsHelp')}</h4>
                <p className="text-[11px] text-[#405D47]">{t('hubFriendsHelpDesc')}</p>
              </div>
            </div>
            <a
              href="mailto:concierge@remestates.in"
              className="px-4 py-2 bg-[#702B00] hover:bg-[#542000] text-white text-xs font-bold rounded-xl whitespace-nowrap transition-colors"
            >
              {t('hubTalkToUs')}
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

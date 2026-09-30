import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { formatINR, formatNumber } from '../utils/formatters';
import { 
  Briefcase, 
  TrendingUp, 
  Building2, 
  Calendar, 
  Download, 
  Heart, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText,
  DollarSign,
  UserCheck
} from 'lucide-react';

export const PortfolioView: React.FC = () => {
  const { 
    currentUser, 
    properties, 
    setSelectedProperty, 
    setActiveTab, 
    toggleFavorite,
    t 
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'holdings' | 'shortlist' | 'visits'>('holdings');

  // Compute portfolio aggregates
  const totalInvested = currentUser.investments.reduce((acc, inv) => acc + inv.investedAmount, 0);
  const currentValuation = currentUser.investments.reduce((acc, inv) => acc + inv.currentValuation, 0);
  const totalPayouts = currentUser.investments.reduce((acc, inv) => acc + inv.totalPayoutsReceived, 0);
  const monthlyCashflow = currentUser.investments.reduce((acc, inv) => acc + inv.monthlyPayout, 0);
  const unrealizedGain = currentValuation - totalInvested;
  const gainPercentage = totalInvested > 0 ? ((unrealizedGain / totalInvested) * 100).toFixed(1) : '0';

  // Saved properties
  const savedProperties = properties.filter(p => currentUser.savedPropertyIds.includes(p.id));

  const handleDownloadCertificate = (investmentTitle: string) => {
    const cert = `
======================================================
REM ESTATES - SPV CO-INVESTMENT CERTIFICATE
======================================================
Certificate ID: CERT-${Math.random().toString(36).substring(2, 9).toUpperCase()}
Beneficial Co-Investor: ${currentUser.name}
Email: ${currentUser.email}
Asset: ${investmentTitle}
Date of Allotment: ${new Date().toISOString().split('T')[0]}

Status: ACTIVE HOLDING (RERA Verified)
Custody: Tier-1 Escrow Trustee Registered with SEBI
Distribution Schedule: Monthly on 5th via NEFT/RTGS

This document certifies legal fractional co-investment interest in the SPV holding the underlying real estate asset.
======================================================
    `.trim();

    const blob = new Blob([cert], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `REM_Certificate_${investmentTitle.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Portfolio Header Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#677865]/20 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-[#677865]/20 shadow-sm"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-black text-[#09240F] tracking-tight font-helvetica-black">
                {currentUser.name}{t('portPortfolioOf')}
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#702B00]/10 text-[#702B00] border border-[#702B00]/25">
                {currentUser.role}
              </span>
            </div>
            <p className="text-xs text-[#405D47] font-medium mt-0.5">
              {currentUser.email} • {currentUser.phone}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setActiveTab('invest')}
            className="px-5 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#702B00]/20 transition-all cursor-pointer flex items-center space-x-2"
          >
            <TrendingUp className="w-4 h-4" />
            <span>{t('portInvestNewAsset')}</span>
          </button>
        </div>
      </div>

      {/* Aggregate Financial Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Capital Invested */}
        <div className="p-5 rounded-2xl bg-white border border-[#677865]/20 shadow-2xs">
          <span className="text-xs font-bold text-[#677865] uppercase tracking-wider block">{t('portCapitalInvested')}</span>
          <span className="text-2xl font-black text-[#09240F] mt-1 block font-helvetica-bold">
            {formatINR(totalInvested)}
          </span>
          <span className="text-xs text-[#405D47] font-medium block mt-0.5">
            {currentUser.investments.length} {t('portAcrossAssets')}
          </span>
        </div>

        {/* Current Portfolio Valuation */}
        <div className="p-5 rounded-2xl bg-[#F5F6F4] border border-[#677865]/20 shadow-2xs">
          <span className="text-xs font-bold text-[#405D47] uppercase tracking-wider block">{t('portCurrentValuation')}</span>
          <span className="text-2xl font-black text-[#09240F] mt-1 block font-helvetica-bold">
            {formatINR(currentValuation)}
          </span>
          <span className="text-xs font-bold text-[#1F4027] block mt-0.5">
            +{formatINR(unrealizedGain)} (+{gainPercentage}%) {t('portUnrealizedGain')}
          </span>
        </div>

        {/* Monthly Passive Rental Income */}
        <div className="p-5 rounded-2xl bg-[#1F4027]/10 border border-[#1F4027]/25 shadow-2xs">
          <span className="text-xs font-bold text-[#1F4027] uppercase tracking-wider block">{t('portMonthlyIncome')}</span>
          <span className="text-2xl font-black text-[#1F4027] mt-1 block font-helvetica-bold">
            ₹{formatNumber(monthlyCashflow)} <span className="text-xs font-normal">/ mo</span>
          </span>
          <span className="text-xs text-[#405D47] font-medium block mt-0.5">
            {t('portNextPayout')}
          </span>
        </div>

        {/* Total Payouts Received to Date */}
        <div className="p-5 rounded-2xl bg-[#09240F] text-white border border-[#1F4027]/40 shadow-2xs">
          <span className="text-xs font-bold text-[#677865] uppercase tracking-wider block">{t('portCumulativeDistributions')}</span>
          <span className="text-2xl font-black text-[#F5F6F4] mt-1 block font-helvetica-bold">
            {formatINR(totalPayouts)}
          </span>
          <span className="text-xs text-[#677865] font-medium block mt-0.5">
            {t('portCreditedToBank')}
          </span>
        </div>

      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-[#677865]/20 space-x-6">
        <button
          onClick={() => setActiveSubTab('holdings')}
          className={`pb-3 text-sm font-bold transition-all relative ${
            activeSubTab === 'holdings'
              ? 'text-[#702B00] border-b-2 border-[#702B00]'
              : 'text-[#677865] hover:text-[#09240F]'
          }`}
        >
          <span>{t('portTabHoldings')} ({currentUser.investments.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('shortlist')}
          className={`pb-3 text-sm font-bold transition-all relative ${
            activeSubTab === 'shortlist'
              ? 'text-[#702B00] border-b-2 border-[#702B00]'
              : 'text-[#677865] hover:text-[#09240F]'
          }`}
        >
          <span>{t('portTabShortlist')} ({savedProperties.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('visits')}
          className={`pb-3 text-sm font-bold transition-all relative ${
            activeSubTab === 'visits'
              ? 'text-[#702B00] border-b-2 border-[#702B00]'
              : 'text-[#677865] hover:text-[#09240F]'
          }`}
        >
          <span>{t('portTabVisits')} ({currentUser.scheduledVisits.length})</span>
        </button>
      </div>

      {/* SUB-TAB 1: HOLDINGS */}
      {activeSubTab === 'holdings' && (
        <div className="space-y-4">
          {currentUser.investments.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#677865]/20">
              <Building2 className="w-12 h-12 text-[#677865]/40 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#09240F] font-helvetica-bold">{t('portNoHoldings')}</h3>
              <p className="text-xs text-[#405D47] max-w-md mx-auto mt-1 mb-6">
                {t('portNoHoldingsDesc')}
              </p>
              <button
                onClick={() => setActiveTab('invest')}
                className="px-6 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {t('portBrowseInvestments')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentUser.investments.map(inv => (
                <div 
                  key={inv.id}
                  className="bg-white rounded-3xl p-6 border border-[#677865]/20 shadow-sm hover:border-[#702B00]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#677865]/15">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#1F4027]/10 text-[#1F4027] border border-[#1F4027]/25">
                        {inv.status} {t('portHoldingStatus')}
                      </span>
                      <span className="text-xs text-[#677865] font-medium">
                        {t('portInvestedOn')} {inv.investmentDate}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#09240F] mt-3 font-helvetica-bold">{inv.propertyTitle}</h3>
                    <p className="text-xs text-[#405D47] flex items-center space-x-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#702B00]" />
                      <span>{inv.propertyLocation}</span>
                    </p>

                    <div className="grid grid-cols-3 gap-3 my-4 p-3.5 bg-[#F5F6F4] rounded-2xl text-center border border-[#677865]/15">
                      <div>
                        <span className="text-[10px] text-[#677865] font-bold uppercase block">{t('portCapitalInvested')}</span>
                        <span className="text-xs font-black text-[#09240F] block">{formatINR(inv.investedAmount)}</span>
                      </div>
                      <div className="border-x border-[#677865]/20">
                        <span className="text-[10px] text-[#677865] font-bold uppercase block">{t('portCurrentValuation')}</span>
                        <span className="text-xs font-black text-[#09240F] block">{formatINR(inv.currentValuation)}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#677865] font-bold uppercase block">{t('portMonthlyPayout')}</span>
                        <span className="text-xs font-black text-[#1F4027] block">₹{formatNumber(inv.monthlyPayout)}</span>
                      </div>
                    </div>

                    <div className="text-xs text-[#405D47] space-y-1.5 bg-[#F5F6F4]/60 p-3 rounded-xl border border-[#677865]/15">
                      <div className="flex justify-between">
                        <span>{t('portSyndicateShare')}</span>
                        <span className="font-bold text-[#09240F]">
                          {inv.sharesCount ? `${inv.sharesCount} of 10 Shares (${inv.ownershipPercentage}%)` : `${inv.ownershipPercentage}% Equity`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('portTotalDividends')}</span>
                        <span className="font-bold text-[#1F4027]">₹{formatNumber(inv.totalPayoutsReceived)}</span>
                      </div>
                      {inv.projectedExitValuation && (
                        <div className="flex justify-between">
                          <span>{t('portTargetExit')}</span>
                          <span className="font-bold text-[#702B00]">{formatINR(inv.projectedExitValuation)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>{t('portNextDistribution')}</span>
                        <span className="font-bold text-[#09240F]">{inv.nextPayoutDate} (via NEFT)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#677865]/15 flex space-x-2">
                    <button
                      onClick={() => handleDownloadCertificate(inv.propertyTitle)}
                      className="flex-1 py-2 rounded-xl bg-[#F5F6F4] hover:bg-[#677865]/20 text-[#09240F] text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer border border-[#677865]/20"
                    >
                      <Download className="w-3.5 h-3.5 text-[#702B00]" />
                      <span>{t('portSpvCertificate')}</span>
                    </button>

                    <button
                      onClick={() => {
                        const prop = properties.find(p => p.id === inv.propertyId);
                        if (prop) setSelectedProperty(prop);
                      }}
                      className="flex-1 py-2 rounded-xl bg-[#702B00]/10 hover:bg-[#702B00]/20 text-[#702B00] text-xs font-bold transition-all cursor-pointer border border-[#702B00]/25"
                    >
                      {t('portAssetDetails')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: SAVED SHORTLIST */}
      {activeSubTab === 'shortlist' && (
        <div>
          {savedProperties.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#677865]/20">
              <Heart className="w-12 h-12 text-[#677865]/40 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#09240F] font-helvetica-bold">{t('portEmptyShortlist')}</h3>
              <p className="text-xs text-[#405D47] max-w-md mx-auto mt-1 mb-6">
                {t('portEmptyShortlistDesc')}
              </p>
              <button
                onClick={() => setActiveTab('properties')}
                className="px-6 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {t('portBrowseProperties')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProperties.map(property => (
                <div key={property.id} className="bg-white rounded-3xl border border-[#677865]/20 overflow-hidden shadow-xs hover:border-[#702B00]/40 transition-all">
                  <div className="relative aspect-[16/10]">
                    <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
                    <button
                      onClick={() => toggleFavorite(property.id)}
                      className="absolute top-3 right-3 p-2 rounded-md bg-white/90 text-[#702B00] shadow-md hover:bg-white transition-colors"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                  <div className="p-5">
                    <h4 className="font-extrabold text-[#09240F] text-sm font-helvetica-bold">{property.title}</h4>
                    <p className="text-xs text-[#405D47] mt-0.5">{property.location.locality}, {property.location.city}</p>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#677865]/15">
                      <span className="font-black text-[#09240F]">{formatINR(property.pricing.totalPrice)}</span>
                      <button
                        onClick={() => setSelectedProperty(property)}
                        className="text-xs font-bold text-[#702B00] hover:text-[#532001]"
                      >
                        {t('hubViewDetails')} →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 3: SCHEDULED SITE VISITS */}
      {activeSubTab === 'visits' && (
        <div>
          {currentUser.scheduledVisits.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#677865]/20">
              <Calendar className="w-12 h-12 text-[#677865]/40 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#09240F] font-helvetica-bold">{t('portNoVisits')}</h3>
              <p className="text-xs text-[#405D47] max-w-md mx-auto mt-1 mb-6">
                {t('portNoVisitsDesc')}
              </p>
              <button
                onClick={() => setActiveTab('properties')}
                className="px-6 py-2.5 rounded-xl bg-[#702B00] hover:bg-[#532001] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {t('portFindProperties')}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {currentUser.scheduledVisits.map(visit => (
                <div 
                  key={visit.id}
                  className="bg-white rounded-2xl p-5 border border-[#677865]/20 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-[#702B00]/10 text-[#702B00] flex items-center justify-center shrink-0 border border-[#702B00]/20">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#1F4027]/10 text-[#1F4027] border border-[#1F4027]/25">
                          {visit.status}
                        </span>
                        <span className="text-xs font-semibold text-[#677865]">{visit.type}</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#09240F] mt-1 font-helvetica-bold">{visit.propertyTitle}</h4>
                      <p className="text-xs text-[#405D47]">{visit.propertyLocation}</p>
                      <p className="text-xs text-[#09240F] font-medium mt-1">
                        Concierge: {visit.conciergeAssigned}
                      </p>
                    </div>
                  </div>

                  <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-[#677865]/15">
                    <div className="text-sm font-black text-[#09240F] font-helvetica-bold">{visit.date}</div>
                    <div className="text-xs text-[#677865] font-medium">{visit.timeSlot}</div>
                    <span className="inline-block mt-2 text-[11px] font-bold text-[#1F4027] bg-[#1F4027]/10 border border-[#1F4027]/25 px-2 py-0.5 rounded">
                      {t('portConciergeAssigned')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

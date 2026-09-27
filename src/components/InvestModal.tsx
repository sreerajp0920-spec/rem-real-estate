import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { formatINR, formatNumber } from '../utils/formatters';
import {
  X,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Building2,
  CalendarCheck2,
  Banknote
} from 'lucide-react';

const PRESET_AMOUNTS = [50000, 100000, 250000, 500000];

export const InvestModal: React.FC = () => {
  const {
    isInvestModalOpen,
    setIsInvestModalOpen,
    investTargetProperty,
    investInProperty,
    setActiveTab,
    currentUser
  } = useApp();

  const [investAmount, setInvestAmount] = useState<number>(50000);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (investTargetProperty?.investment?.minTicketSize) {
      setInvestAmount(investTargetProperty.investment.minTicketSize);
    } else {
      setInvestAmount(50000);
    }
    setIsSuccess(false);
  }, [investTargetProperty]);

  if (!isInvestModalOpen || !investTargetProperty) return null;

  const inv = investTargetProperty.investment;
  const minTicket = inv?.minTicketSize || 50000;
  const yieldRate = inv?.grossRentalYieldPercentage || 9.2;
  const tenureYears = inv?.tenureYears || 4;

  const monthlyPayout = Math.round((investAmount * (yieldRate / 100)) / 12);
  const exitCapitalGain = Math.round(investAmount * 0.4);
  const ownershipPercentage = ((investAmount / investTargetProperty.pricing.totalPrice) * 100).toFixed(2);

  const handleConfirmInvestment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms || investAmount < minTicket) return;
    investInProperty(investTargetProperty.id, investAmount);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#1F4027] p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => { setIsInvestModalOpen(false); setIsSuccess(false); }}
          className="absolute top-4 right-4 p-2 text-[#677865] hover:text-[#09240F] rounded-xl hover:bg-[#F5F6F4] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#1F4027]/15 text-[#1F4027] flex items-center justify-center mx-auto mb-4 border border-[#1F4027]/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            
            <span className="text-[11px] font-bold uppercase text-[#1F4027] tracking-wider bg-[#1F4027]/10 px-3 py-1 rounded-md border border-[#1F4027]/30">
              Co-Ownership Confirmed
            </span>
            
            <h3 className="text-2xl font-black text-[#09240F] tracking-tight mt-2">
              Welcome to the Property!
            </h3>
            
            <p className="text-xs text-[#405D47] max-w-xs mx-auto mt-2 leading-relaxed">
              Congratulations <span className="font-bold text-[#09240F]">{currentUser.name}</span>, your share of <strong className="text-[#09240F]">{formatINR(investAmount)}</strong> in <span className="font-bold text-[#09240F]">{investTargetProperty.title}</span> has been confirmed.
            </p>

            {/* Benefit Summary Card */}
            <div className="my-5 p-4 rounded-2xl bg-[#F5F6F4] border border-[#677865]/25 text-left text-xs space-y-2.5">
              <div className="flex justify-between items-center text-[#405D47]">
                <span>Monthly Rent to Your Bank:</span>
                <span className="text-sm font-black text-[#09240F]">₹{formatNumber(monthlyPayout)} / mo</span>
              </div>
              <div className="flex justify-between items-center text-[#405D47]">
                <span>First Rent Deposit:</span>
                <span className="font-bold text-[#09240F]">5th of next month</span>
              </div>
              <div className="flex justify-between items-center text-[#405D47]">
                <span>Estimated 4-Year Property Gain:</span>
                <span className="font-bold text-[#702B00]">+{formatINR(exitCapitalGain)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#677865]/25 text-[#405D47]">
                <span>Co-Ownership Status:</span>
                <span className="font-extrabold text-[#1F4027] bg-[#1F4027]/15 px-2 py-0.5 rounded border border-[#1F4027]/30">
                  ACTIVE CO-OWNER
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setIsInvestModalOpen(false);
                  setIsSuccess(false);
                  setActiveTab('portfolio');
                }}
                className="flex-1 py-3 rounded-xl bg-[#1F4027] hover:bg-[#405D47] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>View in My Portfolio</span>
              </button>

              <button
                onClick={() => {
                  setIsInvestModalOpen(false);
                  setIsSuccess(false);
                }}
                className="px-5 py-3 rounded-xl border border-[#677865]/35 text-[#09240F] font-bold text-xs hover:bg-[#F5F6F4] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleConfirmInvestment} className="space-y-5">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[#702B00] bg-[#F5F6F4] border border-[#702B00]/30 px-2.5 py-0.5 rounded-md mb-2">
                <Users className="w-3.5 h-3.5 text-[#702B00]" />
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Property Co-Ownership
                </span>
              </div>
              
              <h3 className="text-xl font-black text-[#09240F] tracking-tight">
                Co-own {investTargetProperty.title}
              </h3>
              
              <p className="text-xs text-[#405D47] mt-0.5">
                {investTargetProperty.location.locality}, {investTargetProperty.location.city} • Property Value: <strong className="text-[#09240F]">{formatINR(investTargetProperty.pricing.totalPrice)}</strong>
              </p>
            </div>

            {/* Simplified Key Highlights */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-[#F5F6F4] rounded-2xl border border-[#677865]/25 text-center">
              <div>
                <span className="text-[10px] text-[#677865] font-bold uppercase block">Rental Yield</span>
                <span className="text-xs font-black text-[#09240F] block">{yieldRate}% p.a.</span>
              </div>
              <div className="border-x border-[#677865]/25">
                <span className="text-[10px] text-[#677865] font-bold uppercase block">Rent Frequency</span>
                <span className="text-xs font-black text-[#702B00] block">Monthly</span>
              </div>
              <div>
                <span className="text-[10px] text-[#677865] font-bold uppercase block">Holding Period</span>
                <span className="text-xs font-black text-[#09240F] block">{tenureYears} Years</span>
              </div>
            </div>

            {/* Choose How Much You Want to Put In */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#09240F]">
                  Choose your contribution:
                </label>
                <span className="text-[11px] font-medium text-[#677865]">
                  Minimum: {formatINR(minTicket)}
                </span>
              </div>

              {/* Amount Quick-Pick Chips */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {PRESET_AMOUNTS.map(preset => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setInvestAmount(preset)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all cursor-pointer text-center ${
                      investAmount === preset
                        ? 'border-[#702B00] bg-[#702B00]/10 text-[#702B00] shadow-xs'
                        : 'border-[#677865]/30 bg-[#FFFFFF] hover:bg-[#F5F6F4] text-[#09240F]'
                    }`}
                  >
                    {formatINR(preset)}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm font-bold text-[#677865]">₹</span>
                <input
                  type="number"
                  step="10000"
                  min={minTicket}
                  value={investAmount}
                  onChange={(e) => setInvestAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-8 pr-4 py-2 text-sm font-bold text-[#09240F] bg-[#F5F6F4] border border-[#677865]/30 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#702B00] focus:bg-[#FFFFFF]"
                  placeholder="Or enter custom amount"
                />
              </div>
            </div>

            {/* Monthly Return Preview */}
            <div className="p-4 rounded-2xl bg-[#F5F6F4] border border-[#677865]/25 space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-[#405D47]">
                <span className="flex items-center space-x-1.5">
                  <Banknote className="w-3.5 h-3.5 text-[#677865]" />
                  <span>Estimated Monthly Rent:</span>
                </span>
                <span className="text-sm font-black text-[#09240F]">
                  ₹{formatNumber(monthlyPayout)} / month
                </span>
              </div>
              <div className="flex justify-between items-center text-[#405D47]">
                <span className="flex items-center space-x-1.5">
                  <CalendarCheck2 className="w-3.5 h-3.5 text-[#677865]" />
                  <span>Rent Schedule:</span>
                </span>
                <span className="font-semibold text-[#09240F]">Deposited on the 5th of each month</span>
              </div>
              <div className="flex justify-between items-center text-[#405D47]">
                <span className="flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#677865]" />
                  <span>Your Co-Ownership Stake:</span>
                </span>
                <span className="font-bold text-[#09240F]">{ownershipPercentage}% of this property</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#677865]/25 font-bold text-[#09240F]">
                <span>Estimated Value after {tenureYears} Years:</span>
                <span className="font-black text-[#702B00] text-sm">{formatINR(investAmount + exitCapitalGain)}</span>
              </div>
            </div>

            {/* Security Assurance */}
            <div className="flex items-center space-x-2 text-[11px] text-[#405D47] bg-[#FFFFFF] p-2.5 rounded-xl border border-[#677865]/25">
              <ShieldCheck className="w-4 h-4 text-[#1F4027] shrink-0" />
              <span>Direct co-ownership deed • Rent straight to your bank • 100% transparent</span>
            </div>

            {/* Agreement Checkbox */}
            <label className="flex items-start space-x-2.5 cursor-pointer pt-0.5">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-0.5 rounded accent-[#702B00]"
              />
              <span className="text-[11px] text-[#405D47] leading-normal">
                I agree to the co-ownership guidelines and monthly rental distribution to my registered bank account.
              </span>
            </label>

            {/* Actions */}
            <div className="flex space-x-3 pt-1">
              <button
                type="button"
                onClick={() => setIsInvestModalOpen(false)}
                className="flex-1 py-3 rounded-xl border border-[#677865]/35 hover:bg-[#F5F6F4] text-[#405D47] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={!agreedToTerms || investAmount < minTicket}
                className="flex-2 py-3 rounded-xl bg-[#702B00] hover:bg-[#542000] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Join Co-Owners ({formatINR(investAmount)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
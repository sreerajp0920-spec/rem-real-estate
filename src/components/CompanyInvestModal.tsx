import React, { useState } from 'react';
import { 
  X, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  Lock,
  PhoneCall,
  FileText,
  DollarSign
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatINR } from '../utils/formatters';

export const CompanyInvestModal: React.FC = () => {
  const { 
    isCompanyInvestModalOpen, 
    setIsCompanyInvestModalOpen,
    currentUser,
    addInquiry,
    language
  } = useApp();

  const [fullName, setFullName] = useState(currentUser.name || '');
  const [email, setEmail] = useState(currentUser.email || '');
  const [phone, setPhone] = useState(currentUser.phone || '');
  const [investorType, setInvestorType] = useState('Individual Angel / HNI');
  const [ticketSize, setTicketSize] = useState(500000); // ₹5 Lakhs default
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isCompanyInvestModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `REM-EQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);

    addInquiry({
      id: `inq-eq-${Date.now()}`,
      propertyId: 'rem-estates-corporate',
      propertyTitle: 'REM Estates Pvt. Ltd. (Corporate Growth Equity Round)',
      userName: fullName,
      userEmail: email,
      userPhone: phone,
      inquiryType: 'Investment Pledge',
      amount: ticketSize,
      notes: `Corporate Equity Pledge (${investorType}) • Ticket: ${formatINR(ticketSize)} • Ref: ${ref}`,
      timestamp: new Date().toISOString(),
      status: 'New'
    });

    setIsSubmitted(true);
  };

  const handleDownloadDeck = () => {
    // Simulated instant PDF download
    const blob = new Blob([
      `REM ESTATES PRIVATE LIMITED\nCONFIDENTIAL INFORMATION MEMORANDUM & PITCH DECK\nPre-Series A Corporate Growth Round\nPipeline: ₹1,500 Cr+ Transaction Volume\nContact: ir@remestates.com`
    ], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'REM_Estates_Corporate_PitchDeck_2026.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClose = () => {
    setIsCompanyInvestModalOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white rounded-3xl shadow-2xl border-2 border-stone-900 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Banner */}
        <div className="bg-stone-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400 text-black font-helvetica-black text-[11px] uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Corporate Growth Equity Round</span>
          </div>

          <h3 className="font-helvetica-black text-2xl sm:text-3xl uppercase font-black tracking-tight text-white leading-tight">
            Invest in REM Estates Pvt. Ltd.
          </h3>
          <p className="font-helvetica text-xs sm:text-sm text-stone-200 mt-2 font-normal max-w-xl leading-relaxed">
            Participate in the equity expansion of South India’s premier verified architectural real estate and prop-tech platform. Asset-light, technology-driven brokerage with verified transaction pipelines.
          </p>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/20">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-helvetica-black text-lg font-black text-white block">
                ₹1,500 Cr+
              </span>
              <span className="text-[10px] font-helvetica-bold text-amber-300 uppercase tracking-wider">
                Transaction Pipeline
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-helvetica-black text-lg font-black text-white block">
                18.4%
              </span>
              <span className="text-[10px] font-helvetica-bold text-amber-300 uppercase tracking-wider">
                YoY EBITDA Growth
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-helvetica-black text-lg font-black text-white block">
                Zero Debt
              </span>
              <span className="text-[10px] font-helvetica-bold text-amber-300 uppercase tracking-wider">
                Asset-Light Model
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
              <span className="font-helvetica-black text-lg font-black text-white block">
                100% RERA
              </span>
              <span className="text-[10px] font-helvetica-bold text-amber-300 uppercase tracking-wider">
                Legal Governance
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-[#FDFBF7]">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-2 border-emerald-300 shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h4 className="font-helvetica-black text-2xl uppercase font-black text-stone-950">
                Data Room Access Requested
              </h4>
              
              <div className="p-4 rounded-2xl bg-white border-2 border-stone-200 max-w-md mx-auto text-left space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500 font-bold uppercase">Investor Reference:</span>
                  <span className="font-helvetica-bold text-stone-900">{referenceId}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500 font-bold uppercase">Pledged Allocation:</span>
                  <span className="font-helvetica-black text-stone-950">{formatINR(ticketSize)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500 font-bold uppercase">Instrument:</span>
                  <span className="font-helvetica-bold text-stone-900">Compulsory Convertible Debentures / CCPS</span>
                </div>
              </div>

              <p className="font-helvetica text-xs text-stone-700 max-w-lg mx-auto font-medium">
                Our Founder and Managing Director, along with our legal advisors, will reach out to you within 24 hours to execute the Non-Disclosure Agreement (NDA) and release the Virtual Data Room credentials.
              </p>

              <div className="pt-4 flex items-center justify-center space-x-3">
                <button
                  onClick={handleDownloadDeck}
                  className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-helvetica-bold text-xs uppercase tracking-wider flex items-center space-x-2 cursor-pointer shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Pitch Deck</span>
                </button>

                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-900 font-helvetica-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Round Summary Card */}
              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-helvetica-bold uppercase tracking-wider text-stone-600 block">
                    Current Syndicate Round
                  </span>
                  <span className="font-helvetica-black text-base font-black text-stone-950 uppercase">
                    Pre-Series A • ₹15 Crore Equity / CCPS
                  </span>
                  <span className="text-xs text-stone-700 block mt-0.5">
                    Post-Money Valuation: ₹85 Crore • 17.6% Dilution Cap
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadDeck}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-stone-50 text-stone-950 font-helvetica-bold text-xs border border-stone-300 shadow-xs flex items-center space-x-2 shrink-0 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Pitch Deck (PDF)</span>
                </button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-helvetica-bold text-xs uppercase tracking-wider text-stone-900 block mb-1">
                    Investor Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="font-helvetica-bold text-xs uppercase tracking-wider text-stone-900 block mb-1">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@venturefund.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="font-helvetica-bold text-xs uppercase tracking-wider text-stone-900 block mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="font-helvetica-bold text-xs uppercase tracking-wider text-stone-900 block mb-1">
                    Investor Classification *
                  </label>
                  <select
                    value={investorType}
                    onChange={(e) => setInvestorType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-stone-900 cursor-pointer"
                  >
                    <option value="Individual Angel / HNI">Individual Angel / HNI</option>
                    <option value="Family Office / Single Family Office">Family Office</option>
                    <option value="Venture Capital / Micro VC">Venture Capital / Micro VC</option>
                    <option value="Non-Resident Indian (NRI) Angel">NRI Investor</option>
                    <option value="Corporate Strategic Partner">Corporate Strategic Partner</option>
                  </select>
                </div>
              </div>

              {/* Indicative Ticket Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-helvetica-bold text-xs uppercase tracking-wider text-stone-900 block">
                    Indicative Investment Commitment *
                  </label>
                  <span className="font-helvetica-black text-base text-stone-950 font-black">
                    {formatINR(ticketSize)}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[500000, 1000000, 2500000, 5000000, 10000000].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setTicketSize(amount)}
                      className={`py-2 px-3 rounded-xl font-helvetica-bold text-xs transition-all cursor-pointer border ${
                        ticketSize === amount
                          ? 'bg-stone-950 text-white border-stone-950 shadow-md'
                          : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      {formatINR(amount)}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 font-medium mt-1.5">
                  Min. Angel Ticket: ₹5 Lakhs • Institutional Allocation: ₹25 Lakhs+
                </p>
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 flex items-start space-x-3 text-xs text-stone-700">
                <Lock className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Confidential Private Placement under Indian Companies Act 2013. Information submitted is subject to standard non-disclosure terms and reviewed strictly by REM Estates Investor Relations.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-stone-200">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-stone-700 hover:text-stone-950 font-helvetica-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-stone-950 hover:bg-black text-white font-helvetica-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl cursor-pointer"
                >
                  <span>Request Data Room Access</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

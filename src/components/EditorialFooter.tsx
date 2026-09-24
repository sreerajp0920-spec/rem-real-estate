import React from 'react';
import { Compass, ShieldCheck, Mail, MapPin, Lock, ArrowUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EditorialFooter: React.FC = () => {
  const { setActiveTab, currentUser, setIsAdminAuthModalOpen, setIsCompanyInvestModalOpen } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2D0B1C] text-[#FAF8F5] pt-20 pb-12 overflow-hidden border-t border-[#46172E]">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Emblem & Phone Statement */}
        <div className="flex flex-col items-center text-center mb-16">
          
          {/* Floral / Architectural Star Emblem */}
          <div className="w-12 h-12 rounded-full border border-amber-300/40 flex items-center justify-center text-amber-300 mb-6 bg-black/30">
            <Compass className="w-6 h-6 animate-spin-slow" />
          </div>

          <span className="font-helvetica-bold text-xs uppercase tracking-[0.3em] text-amber-300 mb-3 block">
            PRIVATE CLIENT CONCIERGE &amp; SALES SUITE
          </span>

          {/* Giant Helvetica Phone Number */}
          <a
            href="tel:+918040008000"
            className="font-helvetica-black text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white hover:text-amber-300 transition-colors inline-block"
          >
            +91 (080) 4000-8000
          </a>

          <p className="mt-4 font-helvetica-bold text-xs sm:text-sm text-stone-200 tracking-wider uppercase max-w-lg">
            REM Flagship Suite • 100 Ft Road, Indiranagar, Bengaluru, India
          </p>

          <div className="mt-6 flex items-center space-x-2 text-xs font-helvetica-bold text-amber-300 tracking-wider uppercase bg-black/40 px-4 py-1.5 rounded-full border border-white/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Karnataka RERA Registered • PRM/KA/RERA/1251/310/AG/240101/004812</span>
          </div>
        </div>

        {/* Middle Navigation & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-t border-b border-[#521C38] text-xs">
          
          {/* Col 1: Circular Stamp & Brand */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-amber-300 bg-black/40">
                <span className="font-helvetica-black font-black text-sm">R</span>
              </div>
              <div>
                <span className="font-helvetica-black text-xl tracking-tight text-white block leading-none uppercase">
                  REM ESTATES
                </span>
                <span className="text-[10px] font-helvetica-bold text-amber-300 uppercase tracking-widest">
                  Bengaluru Residences
                </span>
              </div>
            </div>
            <p className="font-helvetica text-stone-200 text-xs leading-relaxed font-normal">
              Direct developer curation. 0% buyer brokerage. All properties verified for land title, RERA sanctions, and carpet efficiency.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsCompanyInvestModalOpen(true)}
                className="inline-flex items-center space-x-1.5 text-xs text-amber-300 hover:text-amber-200 font-helvetica-bold tracking-wider uppercase border-b border-amber-300/40 pb-0.5"
              >
                <span>Invest in REM Estates Equity</span>
                <span>→</span>
              </button>
            </div>
          </div>


          {/* Col 2: Portfolio Links */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-200/80 mb-3">
              Curated Collections
            </h4>
            <ul className="space-y-2 text-stone-300 text-[12px] font-light">
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('residences-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-200 transition-colors cursor-pointer"
                >
                  Sky Penthouses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const el = document.getElementById('residences-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-amber-200 transition-colors cursor-pointer"
                >
                  Bespoke Garden Villas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setActiveTab('invest');
                    scrollToTop();
                  }}
                  className="hover:text-amber-200 transition-colors cursor-pointer"
                >
                  High-Yield Commercial Tech Parks
                </button>

              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-200/80 mb-3">
              Compliance &amp; Trust
            </h4>
            <ul className="space-y-2 text-stone-300 text-[12px] font-light">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('privacy');
                    scrollToTop();
                  }}
                  className="hover:text-amber-200 transition-colors cursor-pointer"
                >
                  Privacy Policy (DPDPA 2023)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('terms');
                    scrollToTop();
                  }}
                  className="hover:text-amber-200 transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions (RERA Compliant)
                </button>
              </li>
              <li className="text-stone-400">
                100% Refundable Token Policy
              </li>
            </ul>
          </div>

          {/* Col 4: Private Consultation */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-200/80 mb-3">
              Inquire Directly
            </h4>
            <p className="text-stone-300 text-[11px] font-light leading-relaxed">
              Schedule a confidential consultation or chauffeur-driven private site inspection.
            </p>
            <a
              href="mailto:concierge@rem.com"
              className="inline-flex items-center space-x-2 text-amber-200 hover:text-white font-medium text-xs tracking-wider"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>concierge@rem.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 font-light gap-4">
          <p>© 2026 REM Estates India Pvt. Ltd. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => {
                if (currentUser.role === 'admin') {
                  setActiveTab('admin');
                } else {
                  setIsAdminAuthModalOpen(true);
                }
              }}
              className="hover:text-stone-200 flex items-center space-x-1.5 cursor-pointer transition-colors"
              title="Staff Portal"
            >
              <Lock className="w-3 h-3" />
              <span>Staff Access</span>
            </button>

            <button
              onClick={scrollToTop}
              className="hover:text-amber-200 flex items-center space-x-1.5 cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

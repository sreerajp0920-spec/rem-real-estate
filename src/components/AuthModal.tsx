import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UserProfile } from '../types';
import { PRESET_USERS } from '../data/propertiesData';
import { 
  X, 
  User, 
  ShieldCheck, 
  Briefcase, 
  Home, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Mail,
  Lock
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    switchUser, 
    loginUser, 
    currentUser,
    setIsAdminAuthModalOpen 
  } = useApp();
  const [authMode, setAuthMode] = useState<'switch' | 'signin' | 'signup'>('switch');
  
  // Custom Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'buyer' | 'investor'>('buyer');

  if (!isAuthModalOpen) return null;

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserProfile = {
      id: `user-${Date.now().toString().slice(-4)}`,
      name: name || 'Homebuyer',
      email: email || 'buyer@remestates.in',
      phone: phone || '+91 99000 11000',
      role,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      savedPropertyIds: ['rem-prop-01'],
      investments: [],
      scheduledVisits: []
    };

    loginUser(newUser);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#1F4027] p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 p-2 text-[#677865] hover:text-[#09240F] rounded-xl hover:bg-[#F5F6F4] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#09240F] text-[#F5F6F4] font-black text-2xl flex items-center justify-center mx-auto mb-3 shadow-md border border-[#677865]/35">
            R
          </div>
          <h2 className="text-2xl font-black text-[#09240F] tracking-tight">REM ESTATES Client Portal</h2>
          <p className="text-xs text-[#405D47] mt-1">
            Sign in to save shortlisted residences, schedule private inspections, and access direct developer pricing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#F5F6F4] p-1 rounded-2xl mb-6 text-xs font-bold border border-[#677865]/20">
          <button
            onClick={() => setAuthMode('switch')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
              authMode === 'switch' ? 'bg-[#FFFFFF] text-[#09240F] shadow-xs' : 'text-[#405D47] hover:text-[#09240F]'
            }`}
          >
            1-Click Demo Profiles
          </button>
          <button
            onClick={() => setAuthMode('signup')}
            className={`flex-1 py-2 rounded-xl transition-all cursor-pointer ${
              authMode === 'signup' ? 'bg-[#FFFFFF] text-[#09240F] shadow-xs' : 'text-[#405D47] hover:text-[#09240F]'
            }`}
          >
            Custom Sign In / Register
          </button>
        </div>

        {authMode === 'switch' ? (
          <div className="space-y-3">
            
            {/* Ananya Verma Profile */}
            <div
              onClick={() => { switchUser('buyer'); setIsAuthModalOpen(false); }}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group ${
                currentUser.role === 'buyer' 
                  ? 'border-[#702B00] bg-[#F5F6F4]' 
                  : 'border-[#677865]/25 hover:border-[#702B00] hover:bg-[#F5F6F4]'
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <img
                  src={PRESET_USERS.buyer.avatar}
                  alt="Ananya"
                  className="w-11 h-11 rounded-xl object-cover border border-[#677865]/30"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-extrabold text-[#09240F]">Ananya Verma</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1F4027] text-white">
                      Verified Buyer
                    </span>
                  </div>
                  <p className="text-xs text-[#405D47] mt-0.5">Shortlisted luxury 3 BHK • Scheduled VIP tour</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#677865] group-hover:text-[#702B00] group-hover:translate-x-1 transition-all" />
            </div>

            {/* Rahul Sharma Profile */}
            <div
              onClick={() => { switchUser('investor'); setIsAuthModalOpen(false); }}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group ${
                currentUser.role === 'investor' 
                  ? 'border-[#702B00] bg-[#F5F6F4]' 
                  : 'border-[#677865]/25 hover:border-[#702B00] hover:bg-[#F5F6F4]'
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <img
                  src={PRESET_USERS.investor.avatar}
                  alt="Rahul"
                  className="w-11 h-11 rounded-xl object-cover border border-[#677865]/30"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-extrabold text-[#09240F]">Rahul Sharma</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#702B00] text-white">
                      HNW Client
                    </span>
                  </div>
                  <p className="text-xs text-[#405D47] mt-0.5">Luxury villa &amp; commercial property investor</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#677865] group-hover:text-[#702B00] group-hover:translate-x-1 transition-all" />
            </div>

          </div>
        ) : (
          <form onSubmit={handleCustomSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sreeraj Nair"
                className="w-full px-3 py-2.5 bg-[#F5F6F4] border border-[#677865]/30 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#702B00] outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2.5 bg-[#F5F6F4] border border-[#677865]/30 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#702B00] outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Mobile Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2.5 bg-[#F5F6F4] border border-[#677865]/30 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#702B00] outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#09240F] block mb-1">Interest Profile</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full px-3 py-2.5 bg-[#F5F6F4] border border-[#677865]/30 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#702B00] outline-none cursor-pointer"
              >
                <option value="buyer">Homebuyer (Residential Homes &amp; Villas)</option>
                <option value="investor">HNW Client (Fractional &amp; Yield Assets)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#702B00] hover:bg-[#542000] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Sign In to REM ESTATES
            </button>
          </form>
        )}

        {/* Discreet Staff Portal link */}
        <div className="mt-5 pt-4 border-t border-[#677865]/20 flex items-center justify-between text-[11px] text-[#677865]">
          <span>Looking for properties? You're in the right place.</span>
          <button
            type="button"
            onClick={() => {
              setIsAuthModalOpen(false);
              setIsAdminAuthModalOpen(true);
            }}
            className="text-[#677865] hover:text-[#702B00] font-semibold transition-colors flex items-center space-x-1 cursor-pointer"
          >
            <Lock className="w-3 h-3" />
            <span>Staff Portal</span>
          </button>
        </div>

      </div>
    </div>
  );
};

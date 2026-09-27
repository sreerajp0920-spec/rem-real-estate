import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  ArrowRight, 
  AlertCircle, 
  Eye, 
  EyeOff,
  Building2
} from 'lucide-react';

export const AdminLoginModal: React.FC = () => {
  const { 
    isAdminAuthModalOpen, 
    setIsAdminAuthModalOpen, 
    loginAsAdmin 
  } = useApp();

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAdminAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      const result = loginAsAdmin(password.trim());
      setIsSubmitting(false);

      if (!result.success) {
        setErrorMessage(result.message || 'Invalid admin credentials. Please try again.');
      } else {
        setPassword('');
      }
    }, 200);
  };

  const handleClose = () => {
    setPassword('');
    setErrorMessage('');
    setIsAdminAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#FFFFFF] rounded-3xl shadow-2xl overflow-hidden border-2 border-[#1F4027] p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#677865] hover:text-[#09240F] rounded-xl hover:bg-[#F5F6F4] transition-all cursor-pointer"
          title="Cancel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Security Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#09240F] text-[#F5F6F4] font-black flex items-center justify-center mx-auto mb-3 shadow-md border border-[#677865]/35">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#F5F6F4] text-[#09240F] border border-[#677865]/30 text-[10px] font-bold uppercase tracking-wider mb-1.5">
            <Lock className="w-3 h-3 text-[#702B00]" />
            <span>Restricted Access</span>
          </div>
          <h2 className="text-xl font-black text-[#09240F] tracking-tight">
            REM ESTATES Staff Portal
          </h2>
          <p className="text-xs text-[#405D47] mt-1 max-w-xs mx-auto">
            Authorized administrator verification required to manage real estate catalog and upcoming launches.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-[#532001]/10 border border-[#532001]/30 flex items-center space-x-2.5 text-[#532001] text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#532001]" />
            <span className="font-semibold">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#09240F] block mb-1">
              Admin Account
            </label>
            <div className="flex items-center space-x-2 px-3 py-2.5 bg-[#F5F6F4] border border-[#677865]/30 rounded-xl text-xs text-[#405D47] font-medium">
              <Building2 className="w-4 h-4 text-[#405D47] shrink-0" />
              <span className="truncate">admin@remestates.in (Operations)</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-[#09240F]">
                Security Passcode
              </label>
              <span className="text-[10px] text-[#677865] font-bold">
                Hint: admin123
              </span>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#677865]">
                <KeyRound className="w-4 h-4 text-[#702B00]" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="Enter admin passcode"
                className="w-full pl-9 pr-10 py-2.5 bg-[#F5F6F4] border border-[#677865]/30 rounded-xl text-xs font-semibold text-[#09240F] focus:bg-[#FFFFFF] focus:ring-1 focus:ring-[#702B00] outline-none transition-all"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#677865] hover:text-[#09240F] cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !password.trim()}
              className="w-full py-3 rounded-xl bg-[#09240F] hover:bg-[#1F4027] disabled:opacity-50 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Unlock Admin Console</span>
                  <ArrowRight className="w-4 h-4 text-[#702B00]" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={handleClose}
            className="text-xs font-semibold text-[#405D47] hover:text-[#09240F] transition-colors cursor-pointer"
          >
            ← Back to Homebuyer Portal
          </button>
        </div>

      </div>
    </div>
  );
};

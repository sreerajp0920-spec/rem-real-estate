import React from 'react';
import { Shield, ArrowLeft, Lock, FileText, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <Breadcrumbs
        items={[
          { label: 'Home', onClick: onBack },
          { label: 'Legal' },
          { label: 'Privacy Policy', isCurrent: true }
        ]}
      />

      <div className="mt-4 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-[#405D47] hover:text-[#09240F] bg-white border border-[#677865]/20 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-[#F5F6F4] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Properties</span>
        </button>
      </div>

      <article className="bg-white rounded-2xl border border-[#677865]/20 p-8 sm:p-12 shadow-sm text-[#405D47] space-y-8">
        <header className="border-b border-[#677865]/15 pb-6">
          <div className="inline-flex items-center space-x-2 text-[#1F4027] bg-[#1F4027]/10 border border-[#1F4027]/25 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-[#1F4027]" />
            <span>DPDPA 2023 &amp; IT Act Compliant</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#09240F] tracking-tight font-helvetica-black">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#677865] mt-2">
            Last Updated: September 23, 2026 | Effective Date: September 23, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">1. Scope and Introduction</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            REM Estates (&quot;REM&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the real estate discovery and co-investment platform accessible at remestates.in and its affiliated digital properties. We are committed to safeguarding personal data in compliance with India&apos;s Digital Personal Data Protection Act (DPDPA), 2023, the Information Technology Act, 2000, and the Real Estate (Regulation and Development) Act (RERA).
          </p>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            This Privacy Policy explains how we collect, verify, process, and protect your information when you browse property listings, book site inspections, or participate in co-investment syndicates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">2. Personal Data We Collect</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            We only collect information necessary to deliver genuine real estate advisory and transactional services:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#405D47] list-disc pl-5">
            <li><strong className="text-[#09240F]">Contact Credentials:</strong> Full legal name, official email address, telephone number, and communication preferences.</li>
            <li><strong className="text-[#09240F]">Property Search &amp; Preferences:</strong> Budget bands, preferred micromarkets, unit typologies (e.g. 3 BHK apartments, commercial floor plates), and scheduled site visit timestamps.</li>
            <li><strong className="text-[#09240F]">Co-Investment Verification (KYC):</strong> Government-issued identity (PAN, Aadhaar/Passport) and accredited investor status documents required under anti-money laundering and RERA rules before completing co-investment allocations.</li>
            <li><strong className="text-[#09240F]">Technical Telemetry:</strong> Anonymized device identifiers, browser specifications, and IP logs used strictly for network security and fraud prevention.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">3. Purpose and Legal Basis of Processing</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            Your data is processed strictly for specified, legitimate commercial and statutory purposes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-[#F5F6F4] rounded-xl border border-[#677865]/20">
              <div className="font-semibold text-xs text-[#09240F] mb-1 flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#1F4027]" />
                <span>Site Visit Coordination</span>
              </div>
              <p className="text-xs text-[#677865]">Scheduling property tours, physical concierge logistics, and developer gate passes.</p>
            </div>
            <div className="p-3.5 bg-[#F5F6F4] rounded-xl border border-[#677865]/20">
              <div className="font-semibold text-xs text-[#09240F] mb-1 flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#1F4027]" />
                <span>Legal Conveyance &amp; Escrow</span>
              </div>
              <p className="text-xs text-[#677865]">Facilitating sale agreements, RERA registration verifications, and title deed execution.</p>
            </div>
            <div className="p-3.5 bg-[#F5F6F4] rounded-xl border border-[#677865]/20">
              <div className="font-semibold text-xs text-[#09240F] mb-1 flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#1F4027]" />
                <span>Zero Telemarketing Guarantee</span>
              </div>
              <p className="text-xs text-[#677865]">We never syndicate or sell your phone number to third-party telemarketers or call centers.</p>
            </div>
            <div className="p-3.5 bg-[#F5F6F4] rounded-xl border border-[#677865]/20">
              <div className="font-semibold text-xs text-[#09240F] mb-1 flex items-center space-x-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#1F4027]" />
                <span>Statutory Compliance</span>
              </div>
              <p className="text-xs text-[#677865]">Complying with RERA, municipal zoning disclosures, and Indian tax reporting rules.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">4. Data Storage and Security Controls</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            All user data is hosted within secure data centers located in India in compliance with RBI and DPDPA data residency guidelines. Transmission is safeguarded with TLS 1.3 encryption, and at-rest databases utilize AES-256 bit encryption. Production database access is restricted by least-privilege role-based access control (RBAC).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">5. Your Data Principal Rights</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            Under Chapter III of the DPDPA 2023, you hold enforceable rights regarding your personal information:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-[#405D47] list-disc pl-5">
            <li>Right to access summary of personal data and identities of data fiduciaries with whom it was shared.</li>
            <li>Right to correction, completion, and updating of inaccurate personal data.</li>
            <li>Right to erasure of personal data that is no longer required for the purpose for which it was collected.</li>
            <li>Right to grievance redressal through our designated Grievance Officer.</li>
            <li>Right to nominate an individual to exercise rights on your behalf in the event of death or incapacity.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-[#677865]/15 pt-6">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">6. Grievance Redressal and Contact Details</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            If you have questions, complaints, or wish to exercise your statutory rights, you may address our Data Protection &amp; Grievance Officer directly:
          </p>
          <div className="bg-[#F5F6F4] p-4 rounded-xl border border-[#677865]/20 space-y-2 text-xs sm:text-sm text-[#405D47]">
            <div className="font-bold text-[#09240F]">Grievance Officer: Office of Data Protection &amp; Compliance</div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#702B00]" />
              <span>Email: privacy@remestates.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#702B00]" />
              <span>Phone: +91 80 4000 8000</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#702B00]" />
              <span>Address: REM Tower, Level 4, 100 Feet Road, Indiranagar, Bangalore 560038, Karnataka, India</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

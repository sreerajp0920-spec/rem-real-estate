import React from 'react';
import { FileText, ArrowLeft, Scale, CheckCircle, ShieldAlert, Mail, MapPin } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';

interface TermsConditionsProps {
  onBack: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto py-6">
      <Breadcrumbs
        items={[
          { label: 'Home', onClick: onBack },
          { label: 'Legal' },
          { label: 'Terms and Conditions', isCurrent: true }
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
            <Scale className="w-3.5 h-3.5 text-[#1F4027]" />
            <span>RERA &amp; Indian Contract Act 1872 Compliant</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#09240F] tracking-tight font-helvetica-black">
            Terms and Conditions of Service
          </h1>
          <p className="text-xs text-[#677865] mt-2">
            Last Updated: September 23, 2026 | Effective Date: September 23, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">1. Acceptance of Terms</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            These Terms and Conditions of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;Buyer&quot;, or &quot;Investor&quot;) and REM Estates (&quot;REM&quot;, &quot;we&quot;, or &quot;our&quot;). By accessing, browsing, registering on, or utilizing our website, listings, and advisory services, you acknowledge that you have read, understood, and agreed to be governed by these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">2. Nature of Platform &amp; Zero Brokerage Guarantee</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            REM Estates is a technology-enabled property discovery and direct developer advisory platform.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#405D47] list-disc pl-5">
            <li><strong className="text-[#09240F]">0% Homebuyer Brokerage:</strong> REM does not levy any brokerage commission, hidden fees, or service surcharges on buyers purchasing verified residential or commercial properties featured in our primary catalog.</li>
            <li><strong className="text-[#09240F]">Direct Developer Pricing:</strong> All stated prices reflect genuine builder-declared rates, inclusive of transparent breakdown for floor rise, statutory stamp duty, GST, and maintenance deposits.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">3. RERA Disclosures &amp; Property Information Accuracy</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            All listed projects include registered Real Estate Regulatory Authority (RERA) registration numbers, carpet area dimensions calculated per RERA guidelines, and approved structural blueprints.
          </p>
          <div className="p-4 bg-[#702B00]/8 border border-[#702B00]/25 rounded-xl text-xs text-[#532001] leading-relaxed">
            <strong className="text-[#702B00]">Important Statutory Notice:</strong> While REM exercises thorough due diligence to verify land titles, encumbrances, and municipal permits, property transactions involve independent legal contracts. Buyers are advised to exercise independent legal consultation and title deed review prior to entering into registered agreements for sale.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">4. Co-Investment &amp; Fractional Syndicates</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            Participation in fractional property pools and high-yield commercial co-investments is subject to specialized regulatory frameworks:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-[#405D47] list-disc pl-5">
            <li>Each pool is held under an independent Special Purpose Vehicle (SPV / LLP or Private Limited) incorporated under the Companies Act, 2013.</li>
            <li>Investment yield distributions are credited on a scheduled monthly or quarterly basis directly to your verified bank account after mandatory statutory deductions (TDS).</li>
            <li>Past investment yields and projected internal rates of return (IRR) are based on historical tenant agreements and do not represent guaranteed bank returns.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">5. Prohibited Uses</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            Users agree not to engage in unauthorized data scraping, automated indexing, dissemination of fraudulent booking requests, or attempts to circumvent platform security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">6. Governing Law &amp; Dispute Resolution</h2>
          <p className="text-xs sm:text-sm text-[#405D47] leading-relaxed">
            These Terms shall be interpreted and enforced in accordance with the substantive laws of the Republic of India. Any legal dispute, controversy, or claim arising out of or relating to these terms shall be submitted to the exclusive jurisdiction of the competent civil courts in Bangalore, Karnataka.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#677865]/15 pt-6">
          <h2 className="text-base font-bold text-[#09240F] font-helvetica-bold">7. Legal Department Inquiries</h2>
          <div className="bg-[#F5F6F4] p-4 rounded-xl border border-[#677865]/20 space-y-2 text-xs sm:text-sm text-[#405D47]">
            <div className="font-bold text-[#09240F]">REM Estates Legal &amp; Corporate Affairs</div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#702B00]" />
              <span>Email: legal@remestates.in</span>
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

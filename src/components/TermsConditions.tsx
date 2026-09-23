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
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Properties</span>
        </button>
      </div>

      <article className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm text-slate-800 space-y-8">
        <header className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center space-x-2 text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span>RERA &amp; Indian Contract Act 1872 Compliant</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Terms and Conditions of Service
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: September 23, 2026 | Effective Date: September 23, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-950">1. Acceptance of Terms</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            These Terms and Conditions of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;Buyer&quot;, or &quot;Investor&quot;) and REM Realty (&quot;REM&quot;, &quot;we&quot;, or &quot;our&quot;). By accessing, browsing, registering on, or utilizing our website, listings, and advisory services, you acknowledge that you have read, understood, and agreed to be governed by these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-950">2. Nature of Platform &amp; Zero Brokerage Guarantee</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            REM Realty is a technology-enabled property discovery and direct developer advisory platform.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
            <li><strong>0% Homebuyer Brokerage:</strong> REM does not levy any brokerage commission, hidden fees, or service surcharges on buyers purchasing verified residential or commercial properties featured in our primary catalog.</li>
            <li><strong>Direct Developer Pricing:</strong> All stated prices reflect genuine builder-declared rates, inclusive of transparent breakdown for floor rise, statutory stamp duty, GST, and maintenance deposits.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-950">3. RERA Disclosures &amp; Property Information Accuracy</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All listed projects include registered Real Estate Regulatory Authority (RERA) registration numbers, carpet area dimensions calculated per RERA guidelines, and approved structural blueprints.
          </p>
          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
            <strong>Important Statutory Notice:</strong> While REM exercises thorough due diligence to verify land titles, encumbrances, and municipal permits, property transactions involve independent legal contracts. Buyers are advised to exercise independent legal consultation and title deed review prior to entering into registered agreements for sale.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-950">4. Co-Ownership &amp; Fractional Syndicates</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Participation in fractional property pools and high-yield commercial co-investments is subject to specialized regulatory frameworks:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc pl-5">
            <li>Each pool is held under an independent Special Purpose Vehicle (SPV / LLP or Private Limited) incorporated under the Companies Act, 2013.</li>
            <li>Rental distributions are credited on a scheduled monthly or quarterly basis directly to your verified bank account after mandatory statutory deductions (TDS).</li>
            <li>Past rental yields and projected internal rates of return (IRR) are based on historical tenant agreements and do not represent guaranteed bank returns.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-950">5. Prohibited Uses</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Users agree not to engage in unauthorized data scraping, automated indexing, dissemination of fraudulent booking requests, or attempts to circumvent platform security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-950">6. Governing Law &amp; Dispute Resolution</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            These Terms shall be interpreted and enforced in accordance with the substantive laws of the Republic of India. Any legal dispute, controversy, or claim arising out of or relating to these terms shall be submitted to the exclusive jurisdiction of the competent civil courts in Bangalore, Karnataka.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-200 pt-6">
          <h2 className="text-base font-bold text-slate-950">7. Legal Department Inquiries</h2>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
            <div className="font-bold text-slate-900">REM Realty Legal &amp; Corporate Affairs</div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Email: legal@remrealty.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Address: REM Tower, Level 4, 100 Feet Road, Indiranagar, Bangalore 560038, Karnataka, India</span>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

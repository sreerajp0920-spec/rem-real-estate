import React, { useEffect } from 'react';
import { ActiveTab, Property } from '../types';

interface SeoManagerProps {
  activeTab: ActiveTab;
  selectedCategory: string;
  listingTypeFilter: string;
  propertyTypeFilter: string;
  preLaunchOnly: boolean;
  selectedProperty: Property | null;
}

export const SeoManager: React.FC<SeoManagerProps> = ({
  activeTab,
  selectedCategory,
  listingTypeFilter,
  propertyTypeFilter,
  preLaunchOnly,
  selectedProperty
}) => {
  useEffect(() => {
    let title = 'REM Realty | Verified Properties in Bangalore | 0% Brokerage';
    let description = 'Discover RERA-verified luxury apartments, villas, penthouses, and commercial plots across Bangalore with 0% brokerage, 4K video tours, and verified carpet areas.';
    let canonical = 'https://remrealty.in/';

    if (selectedProperty) {
      title = `${selectedProperty.title} in ${selectedProperty.location.locality}, Bangalore | REM Realty`;
      description = `${selectedProperty.dimensions.bhk} by ${selectedProperty.developer} located at ${selectedProperty.location.locality}, Bangalore. RERA ID: ${selectedProperty.peaceOfMind.reraId}. Carpet Area: ${selectedProperty.dimensions.carpetAreaSqFt} sq ft.`;
      canonical = `https://remrealty.in/?property=${selectedProperty.id}`;
    } else if (activeTab === 'privacy') {
      title = 'Privacy Policy | REM Realty - DPDPA 2023 Compliant';
      description = 'Read REM Realty privacy policy outlining how customer data, RERA paperwork, and identity records are secured under India DPDPA 2023.';
      canonical = 'https://remrealty.in/privacy-policy';
    } else if (activeTab === 'terms') {
      title = 'Terms and Conditions | REM Realty';
      description = 'Terms of service, RERA property listing disclaimers, and 0% brokerage policy for REM Realty platform users and buyers.';
      canonical = 'https://remrealty.in/terms-and-conditions';
    } else if (activeTab === 'invest') {
      title = 'Commercial Real Estate Co-Investment Pools | REM Realty';
      description = 'Co-own Grade-A commercial tech parks and retail assets in Bangalore starting from ₹50,000. Earn 8-14% monthly rental yield.';
      canonical = 'https://remrealty.in/invest';
    } else if (activeTab === 'portfolio') {
      title = 'Investor Portfolio & Payouts | REM Realty';
      description = 'Monitor your verified co-investment allocations, monthly rental distributions, and property capital appreciation in Bangalore.';
      canonical = 'https://remrealty.in/portfolio';
    } else if (activeTab === 'admin') {
      title = 'Operations Console | REM Realty Staff';
      description = 'Internal administrative console for verified REM Realty property listings, lead management, and RERA compliance verification.';
      canonical = 'https://remrealty.in/admin';
    } else {
      // Properties catalog variations
      if (preLaunchOnly) {
        title = 'Upcoming Pre-Launch Residential Projects in Bangalore | REM Realty';
        description = 'Access exclusive pre-launch builder allocations, early bird pricing, and RERA approved upcoming developments.';
        canonical = 'https://remrealty.in/?filter=pre-launch';
      } else if (propertyTypeFilter !== 'all') {
        title = `Verified ${propertyTypeFilter}s for Sale in Bangalore | REM Realty`;
        description = `Browse premium verified ${propertyTypeFilter}s across Indiranagar, Whitefield, Sarjapur, and North Bangalore.`;
        canonical = `https://remrealty.in/?type=${encodeURIComponent(propertyTypeFilter.toLowerCase())}`;
      }
    }

    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);

  }, [activeTab, selectedCategory, listingTypeFilter, propertyTypeFilter, preLaunchOnly, selectedProperty]);

  return null;
};

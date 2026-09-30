export type Language = 'en' | 'hi' | 'kn';

export interface Translations {
  // Brand
  brandName: string;
  brandTagline: string;
  
  // Navigation
  navProperties: string;
  navBuy: string;
  navApartments: string;
  navVillas: string;
  navPlots: string;
  navPenthouses: string;
  navCommercial: string;
  navPreLaunch: string;
  navCoInvest: string;
  navHighYield: string;
  navCompanyInvest: string;
  navPortfolio: string;
  navSearchPlaceholder: string;
  navContactDesk: string;
  navAdminConsole: string;
  navSignIn: string;
  navSignOut: string;
  navMyInvestments: string;
  
  // Hero (The Agency Luxury Style)
  heroWindowToThe: string;
  heroFinestRealEstate: string;
  heroTabBuy: string;
  heroTabCoInvest: string;
  heroSearchPlaceholder: string;
  heroExploreListings: string;
  heroAdvisoryDesk: string;
  heroDirectDeveloper: string;
  heroZeroBrokerage: string;
  heroReraDiligence: string;
  heroResponseTime: string;
  
  // Categories & Filters
  catAll: string;
  catVillas: string;
  catPenthouses: string;
  catCommercial: string;
  catPreLaunch: string;
  filterTitle: string;
  filterSubtitle: string;
  filterPropertyType: string;
  filterUnitConfig: string;
  filterLocation: string;
  filterStage: string;
  filterSort: string;
  filterPreLaunchOnly: string;
  filterBudget: string;
  filterAnyBudget: string;
  filterReset: string;
  filterClearAll: string;
  filterActive: string;
  filterPriceLowHigh: string;
  filterPriceHighLow: string;
  filterAreaLargest: string;
  
  // Concept / Architectural Standard
  conceptPreTitle: string;
  conceptHeading: string;
  conceptDescription: string;
  conceptCraftedTitle: string;
  conceptExploreUnit: string;
  conceptAuthenticTitle: string;
  conceptAuthenticSub: string;
  conceptGuaranteePre: string;
  conceptGuaranteeHeading: string;
  conceptGuaranteeDesc: string;
  conceptTitle1: string;
  conceptSubtitle1: string;
  conceptTitle2: string;
  conceptSubtitle2: string;
  conceptDirectRepTitle: string;
  conceptDirectRepDesc: string;
  
  // Micromarkets Explorer
  microExplorerTag: string;
  microExplorerHeading: string;
  microSubhead: string;
  microKeyAnchors: string;
  microViewResidences: string;
  
  // Property Catalog & Cards
  catalogShowingTitle: string;
  catalogShowingSub: string;
  catalogClearFilter: string;
  catalogReraVerified: string;
  catalogNoMatch: string;
  catalogNoMatchDesc: string;
  catalogViewAll: string;
  cardForSale: string;
  cardPreLaunch: string;
  cardReraVerified: string;
  cardWatchTour: string;
  cardConfig: string;
  cardCarpetArea: string;
  cardEfficiency: string;
  cardCoInvest: string;
  cardNetYield: string;
  cardExplore: string;
  cardInvestBtn: string;
  cardStartsFrom: string;
  cardMonthlyDividend: string;
  
  // Property Detail Modal
  modalHdGallery: string;
  modalVideoTour: string;
  modalFloorPlans: string;
  modalVerifiedOnSite: string;
  modalSpatialSpecs: string;
  modalEngineeringSpecs: string;
  modalLifestyleAmenities: string;
  modalCoInvestSectionTitle: string;
  modalCoInvestSectionSub: string;
  modalMinInvestment: string;
  modalGrossYield: string;
  modalFundingProgress: string;
  modalFunded: string;
  modalTotalValuation: string;
  modalTargetIRR: string;
  modalAnnualYield: string;
  modalCreditedMonthly: string;
  modalTenure: string;
  modalCapitalAppreciation: string;
  modalLegalTitle: string;
  modalBookPriorityToken: string;
  modalClaimShare: string;
  modalConciergeTours: string;
  modalBookVipWalkthrough: string;
  modalWalkthroughDesc: string;
  modalPreferredDate: string;
  modalPreferredTime: string;
  modalPhysicalVisit: string;
  modalVirtualVisit: string;
  modalConfirmVisit: string;
  modalDownloadBrochure: string;
  modalClose: string;
  
  // Investment Hub
  hubBadge: string;
  hubHeading1: string;
  hubHeading2: string;
  hubSubtitle: string;
  hubMonthlyPayoutPill: string;
  hubGrowthPill: string;
  hubLegalTitlePill: string;
  hubZeroHasslePill: string;
  hubSeePropertiesBtn: string;
  hubMyInvestmentsBtn: string;
  hubHowItWorksTag: string;
  hubHowItWorksHeading: string;
  hubHowItWorksSubtitle: string;
  hubStep1Title: string;
  hubStep1Desc: string;
  hubStep2Title: string;
  hubStep2Desc: string;
  hubStep3Title: string;
  hubStep3Desc: string;
  hubCatalogHeading: string;
  hubCatalogSubtitle: string;
  hubAvailableCount: string;
  hubStartWith: string;
  hubTenant: string;
  hubJoinedBy: string;
  hubExpectedAnnualYield: string;
  hubViewDetails: string;
  hubInvestInProp: string;
  hubFaqTag: string;
  hubFaqHeading: string;
  hubFaqSubtitle: string;
  hubFaq1Q: string;
  hubFaq1A: string;
  hubFaq2Q: string;
  hubFaq2A: string;
  hubFaq3Q: string;
  hubFaq3A: string;
  hubFaq4Q: string;
  hubFaq4A: string;
  hubFaq5Q: string;
  hubFaq5A: string;
  hubFriendsHelp: string;
  hubFriendsHelpDesc: string;
  hubTalkToUs: string;
  
  // Invest Modal
  invModalTitle: string;
  invModalCoInvestConfirmed: string;
  invModalWelcome: string;
  invModalBenefitMonthly: string;
  invModalBenefitDeposit: string;
  invModalBenefitGain: string;
  invModalStatusTag: string;
  invModalActiveCoInvestor: string;
  invModalViewPortfolio: string;
  invModalDone: string;
  invModalRentalYield: string;
  invModalPayoutFrequency: string;
  invModalHoldingPeriod: string;
  invModalChooseContribution: string;
  invModalMinimum: string;
  invModalEstimatedMonthly: string;
  invModalDepositSchedule: string;
  invModalStake: string;
  invModalEstValue: string;
  invModalSecurityDeed: string;
  invModalAgreement: string;
  invModalCancel: string;
  invModalJoinBtn: string;
  
  // Portfolio
  portPortfolioOf: string;
  portInvestNewAsset: string;
  portCapitalInvested: string;
  portAcrossAssets: string;
  portCurrentValuation: string;
  portUnrealizedGain: string;
  portMonthlyIncome: string;
  portNextPayout: string;
  portCumulativeDistributions: string;
  portCreditedToBank: string;
  portTabHoldings: string;
  portTabShortlist: string;
  portTabVisits: string;
  portNoHoldings: string;
  portNoHoldingsDesc: string;
  portBrowseInvestments: string;
  portHoldingStatus: string;
  portInvestedOn: string;
  portMonthlyPayout: string;
  portSyndicateShare: string;
  portTotalDividends: string;
  portTargetExit: string;
  portNextDistribution: string;
  portSpvCertificate: string;
  portAssetDetails: string;
  portEmptyShortlist: string;
  portEmptyShortlistDesc: string;
  portBrowseProperties: string;
  portNoVisits: string;
  portNoVisitsDesc: string;
  portFindProperties: string;
  portConciergeAssigned: string;
  
  // Corporate Investment Modal
  corpModalTitle: string;
  corpModalSubtitle: string;
  corpRoundDetails: string;
  corpInstrument: string;
  corpMinTicket: string;
  corpPledgeBtn: string;
  corpDownloadDeck: string;
  
  // Footer
  footerSalesSuite: string;
  footerRights: string;
  footerBackToTop: string;
  footerStaffAccess: string;
  footerDirectDev: string;
  footerInvestEquity: string;
  footerCuratedCollections: string;
  footerSkyPenthouses: string;
  footerGardenVillas: string;
  footerCommercialHubs: string;
  footerCompliance: string;
  footerPrivacyPolicy: string;
  footerTermsConditions: string;
  footerRefundPolicy: string;
  footerInquireDirectly: string;
  footerScheduleConsultation: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    // Brand
    brandName: 'REM ESTATES',
    brandTagline: 'Architectural Residences • Bengaluru',
    
    // Navigation
    navProperties: 'Properties',
    navBuy: 'Buy',
    navApartments: 'Apartments',
    navVillas: 'Villas',
    navPlots: 'Plots',
    navPenthouses: 'Penthouses',
    navCommercial: 'Commercial',
    navPreLaunch: 'Pre-Launch',
    navCoInvest: 'Co-Invest',
    navHighYield: 'High Yield',
    navCompanyInvest: 'Invest in REM Estates',
    navPortfolio: 'Portfolio',
    navSearchPlaceholder: 'Search residences, localities...',
    navContactDesk: 'Advisory: +91 80 4000 8000',
    navAdminConsole: 'Admin Console',
    navSignIn: 'Sign In',
    navSignOut: 'Sign Out',
    navMyInvestments: 'My Investments',
    
    // Hero (The Agency Luxury Style)
    heroWindowToThe: 'Your window to the',
    heroFinestRealEstate: "world's finest real estate",
    heroTabBuy: 'BUY',
    heroTabCoInvest: 'CO-INVEST',
    heroSearchPlaceholder: 'Enter a location, address, listing ID, or micromarket...',
    heroExploreListings: 'Explore listings',
    heroAdvisoryDesk: 'Advisory Desk: +91 80 4000 8000',
    heroDirectDeveloper: 'DIRECT DEVELOPER REPRESENTATION',
    heroZeroBrokerage: 'Zero Brokerage Guaranteed',
    heroReraDiligence: '100% RERA Diligence',
    heroResponseTime: 'Avg. Response Time: 15 Minutes',
    
    // Categories & Filters
    catAll: 'All Residences',
    catVillas: 'Private Villas',
    catPenthouses: 'Sky Penthouses',
    catCommercial: 'Commercial Hubs',
    catPreLaunch: 'Pre-Launch Projects',
    filterTitle: 'Property Filters',
    filterSubtitle: 'Refine listings by property type, BHK, budget & location',
    filterPropertyType: 'Property Type',
    filterUnitConfig: 'Unit Configuration (BHK)',
    filterLocation: 'Location',
    filterStage: 'Construction Stage',
    filterSort: 'Sort Listings',
    filterPreLaunchOnly: 'Pre-Launch Deals Only',
    filterBudget: 'Purchase Budget Range',
    filterAnyBudget: 'Any Budget',
    filterReset: 'Reset',
    filterClearAll: 'Clear All',
    filterActive: 'Active',
    filterPriceLowHigh: 'Price: Low to High',
    filterPriceHighLow: 'Price: High to Low',
    filterAreaLargest: 'Largest Carpet Area',
    
    // Concept / Architectural Standard
    conceptPreTitle: 'THE ARCHITECTURAL STANDARD',
    conceptHeading: 'RESIDENCES DESIGNED FOR PRIVACY, LIGHT AND TIMELESS LIVING.',
    conceptDescription: 'We represent an exclusive collection of verified architectural villas, sky penthouses, and pre-leased tech parks. Every home is vetted by senior advocates with complete 30-year title reports and RERA Karnataka compliance.',
    conceptCraftedTitle: 'Sovereign Crest Sky Villa',
    conceptExploreUnit: 'Explore Unit',
    conceptAuthenticTitle: 'AUTHENTIC SPECIFICATION',
    conceptAuthenticSub: 'Native Sadahalli granite, exposed architectural concrete, double-glazed acoustic curtain walls.',
    conceptGuaranteePre: 'OUR DUE DILIGENCE GUARANTEE',
    conceptGuaranteeHeading: 'Authentic materials. Verified legal titles.',
    conceptGuaranteeDesc: 'We remove ambiguity from Bengaluru real estate. No inflated super built-up claims, zero hidden development charges, and 100% transparent RERA carpet efficiency ratios.',
    conceptTitle1: '14 FT Clearances',
    conceptSubtitle1: 'Double-height living volumes',
    conceptTitle2: '100% Clear Titles',
    conceptSubtitle2: '30-year advocate title search',
    conceptDirectRepTitle: 'Direct Developer Representation',
    conceptDirectRepDesc: 'Zero buyer brokerage • Price-match guarantee directly with builders',
    
    // Micromarkets Explorer
    microExplorerTag: 'INTERACTIVE MICROMARKET EXPLORER',
    microExplorerHeading: 'Click any zone to inspect drive times & pricing',
    microSubhead: 'Bengaluru Metro & Arterial Network',
    microKeyAnchors: 'Key Anchors:',
    microViewResidences: 'View Residences in',
    
    // Property Catalog & Cards
    catalogShowingTitle: 'Verified Residences & Commercial Hubs',
    catalogShowingSub: 'verified residences with 0% brokerage and guaranteed RERA title clearance.',
    catalogClearFilter: 'Clear Nav Filter',
    catalogReraVerified: '100% RERA Verified',
    catalogNoMatch: 'No properties match your filter',
    catalogNoMatchDesc: 'Try expanding your budget range, resetting your filters, or clearing the search keyword.',
    catalogViewAll: 'View All Properties',
    cardForSale: 'FOR SALE',
    cardPreLaunch: 'PRE-LAUNCH',
    cardReraVerified: 'RERA VERIFIED',
    cardWatchTour: '4K Video Tour',
    cardConfig: 'Config',
    cardCarpetArea: 'Carpet Area',
    cardEfficiency: 'Efficiency',
    cardCoInvest: 'Co-Investment',
    cardNetYield: 'Net Yield',
    cardExplore: 'Explore',
    cardInvestBtn: 'Invest',
    cardStartsFrom: 'Start with',
    cardMonthlyDividend: 'Monthly Dividend',
    
    // Property Detail Modal
    modalHdGallery: 'HD Gallery',
    modalVideoTour: 'Video Walkthrough',
    modalFloorPlans: '2D/3D Floor Plans',
    modalVerifiedOnSite: 'Verified On-Site by REM Visual Team',
    modalSpatialSpecs: 'Full Dimensions & Construction Specifications',
    modalEngineeringSpecs: 'Engineering & Material Specifications',
    modalLifestyleAmenities: 'Lifestyle & Project Amenities',
    modalCoInvestSectionTitle: 'Co-Invest in This Asset & Earn Passive Returns',
    modalCoInvestSectionSub: 'Pre-leased to institutional tenants. Earn monthly dividends deposited via NEFT + exit capital appreciation profit.',
    modalMinInvestment: 'Min. Investment',
    modalGrossYield: 'Gross Yield',
    modalFundingProgress: 'Syndicate Funding Progress',
    modalFunded: 'Funded',
    modalTotalValuation: 'Total Valuation',
    modalTargetIRR: 'Target IRR',
    modalAnnualYield: 'Annual Yield',
    modalCreditedMonthly: 'Credited 5th of every month',
    modalTenure: 'Tenure',
    modalCapitalAppreciation: 'Capital Appreciation',
    modalLegalTitle: 'Legal Title',
    modalBookPriorityToken: 'Book Priority Token',
    modalClaimShare: 'Claim 1 Share',
    modalConciergeTours: 'Concierge Site Tours',
    modalBookVipWalkthrough: 'Book an Exclusive VIP Site Walkthrough',
    modalWalkthroughDesc: 'Experience the property with a senior REM architectural relationship manager. No pressure, 0% brokerage.',
    modalPreferredDate: 'Preferred Date',
    modalPreferredTime: 'Preferred Time Slot',
    modalPhysicalVisit: 'Physical On-Site Visit',
    modalVirtualVisit: 'Live Virtual Walkthrough',
    modalConfirmVisit: 'Confirm VIP Site Visit',
    modalDownloadBrochure: 'Download Brochure',
    modalClose: 'Close',
    
    // Investment Hub
    hubBadge: 'Co-Invest in Real Estate With Others',
    hubHeading1: 'Own Great Properties Together.',
    hubHeading2: 'Collect Monthly Dividends.',
    hubSubtitle: 'Real estate has always been one of the safest ways to grow wealth, but buying an entire commercial property alone requires Crores. Now, you can pool in with others, start with as little as ₹50,000, and get regular monthly payouts sent straight to your bank account.',
    hubMonthlyPayoutPill: 'Monthly Payouts Direct to Bank',
    hubGrowthPill: 'Share in Property Value Growth',
    hubLegalTitlePill: '100% Verified Legal Co-Investment',
    hubZeroHasslePill: 'Zero Landlord Work',
    hubSeePropertiesBtn: 'See Available Properties',
    hubMyInvestmentsBtn: 'My Investments',
    hubHowItWorksTag: 'Simple & Transparent',
    hubHowItWorksHeading: 'How It Works in 3 Simple Steps',
    hubHowItWorksSubtitle: 'No complicated jargon, no hidden fees. Just straightforward property co-investment.',
    hubStep1Title: 'Pick a Property You Like',
    hubStep1Desc: 'Explore handpicked tech offices, retail spaces, and suites with established tenants already in place.',
    hubStep2Title: 'Choose How Much to Put In',
    hubStep2Desc: 'Start with whatever fits your budget, from ₹50,000 to ₹5 Lakhs+. You receive official legal documentation for your share.',
    hubStep3Title: 'Relax & Collect Your Payouts',
    hubStep3Desc: 'Your share of returns arrives in your bank account every month. When the property is sold later, you receive your full capital profit.',
    hubCatalogHeading: 'Properties Open for Co-Investing',
    hubCatalogSubtitle: 'Pre-vetted properties with verified titles and reliable corporate tenants in Bengaluru.',
    hubAvailableCount: 'Properties Available',
    hubStartWith: 'Start with',
    hubTenant: 'Tenant',
    hubJoinedBy: 'Joined by',
    hubExpectedAnnualYield: 'Expected Annual Yield',
    hubViewDetails: 'View Details',
    hubInvestInProp: 'Invest in Property',
    hubFaqTag: 'Clear & Simple',
    hubFaqHeading: 'Common Questions About Co-Investing',
    hubFaqSubtitle: 'Everything you need to know to get started.',
    hubFaq1Q: 'How does co-investing in a property work?',
    hubFaq1A: 'Instead of one person needing Crores to buy a property, multiple people come together to co-invest in it. Each person puts in what they are comfortable with (starting from ₹50,000). You get legal proof of your share and receive your portion of the income every month.',
    hubFaq2Q: 'When and how do I receive my payouts?',
    hubFaq2A: 'The properties are already pre-leased to reputable corporate tenants. Your share of payouts is transferred directly to your bank account on the 5th of every month via NEFT.',
    hubFaq3Q: 'How do I make a profit when the property is sold?',
    hubFaq3A: 'Real estate properties naturally grow in market value. After a 3 to 5 year period, the property is either sold or refinanced at the higher market value. You get your original money back plus your share of the capital gain profit.',
    hubFaq4Q: 'What if I want to withdraw my money early?',
    hubFaq4A: 'After an initial 12-month period, you can easily transfer or sell your share to another buyer through the REM ESTATES portal at current market valuation.',
    hubFaq5Q: 'Who takes care of property repairs, tenants, and maintenance?',
    hubFaq5A: 'REM ESTATES handles 100% of day-to-day operations: tenant management, collection, property tax, and maintenance. You simply enjoy passive monthly returns with zero landlord headaches.',
    hubFriendsHelp: 'Want to invest together with friends?',
    hubFriendsHelpDesc: 'Our concierge team can help structure private group investments.',
    hubTalkToUs: 'Talk to Us',
    
    // Invest Modal
    invModalTitle: 'Property Co-Investment',
    invModalCoInvestConfirmed: 'Co-Investment Confirmed',
    invModalWelcome: 'Welcome to the Property!',
    invModalBenefitMonthly: 'Monthly Distribution to Your Bank:',
    invModalBenefitDeposit: 'First Deposit:',
    invModalBenefitGain: 'Estimated 4-Year Property Gain:',
    invModalStatusTag: 'Co-Investment Status:',
    invModalActiveCoInvestor: 'ACTIVE CO-INVESTOR',
    invModalViewPortfolio: 'View in My Portfolio',
    invModalDone: 'Done',
    invModalRentalYield: 'Annual Yield',
    invModalPayoutFrequency: 'Payout Frequency',
    invModalHoldingPeriod: 'Holding Period',
    invModalChooseContribution: 'Choose your contribution:',
    invModalMinimum: 'Minimum:',
    invModalEstimatedMonthly: 'Estimated Monthly Payout:',
    invModalDepositSchedule: 'Deposit Schedule:',
    invModalStake: 'Your Co-Investment Stake:',
    invModalEstValue: 'Estimated Value after Tenure:',
    invModalSecurityDeed: 'Direct co-investment deed • Payout straight to your bank • 100% transparent',
    invModalAgreement: 'I agree to the co-investment guidelines and monthly dividend distribution to my registered bank account.',
    invModalCancel: 'Cancel',
    invModalJoinBtn: 'Join Co-Investors',
    
    // Portfolio
    portPortfolioOf: 's Portfolio',
    portInvestNewAsset: 'Invest in New Asset',
    portCapitalInvested: 'Capital Invested',
    portAcrossAssets: 'Across Active Assets',
    portCurrentValuation: 'Current Valuation',
    portUnrealizedGain: 'Unrealized Gain',
    portMonthlyIncome: 'Monthly Income',
    portNextPayout: 'Next Payout: 5th of next month',
    portCumulativeDistributions: 'Cumulative Distributions',
    portCreditedToBank: '100% credited to bank',
    portTabHoldings: 'Real Estate Holdings',
    portTabShortlist: 'Saved Shortlist',
    portTabVisits: 'Scheduled Site Visits',
    portNoHoldings: 'No active real estate holdings yet',
    portNoHoldingsDesc: 'Start building your passive income portfolio with institutional pre-leased commercial real estate starting at ₹5 Lakhs.',
    portBrowseInvestments: 'Browse Investment Opportunities',
    portHoldingStatus: 'Holding',
    portInvestedOn: 'Invested on',
    portMonthlyPayout: 'Monthly Payout',
    portSyndicateShare: 'Syndicate Shareholding:',
    portTotalDividends: 'Total Dividends Earned:',
    portTargetExit: 'Target 4-Yr Exit Return:',
    portNextDistribution: 'Next Distribution:',
    portSpvCertificate: 'SPV Certificate',
    portAssetDetails: 'Asset Details',
    portEmptyShortlist: 'Your shortlist is empty',
    portEmptyShortlistDesc: 'Click the heart icon on any property card to save and track price movements.',
    portBrowseProperties: 'Browse Properties',
    portNoVisits: 'No scheduled visits',
    portNoVisitsDesc: 'You can book an in-person VIP site visit or virtual walkthrough from any property page.',
    portFindProperties: 'Find Properties',
    portConciergeAssigned: 'Concierge Assigned',
    
    // Corporate Investment Modal
    corpModalTitle: 'Invest in REM Estates Pvt. Ltd.',
    corpModalSubtitle: 'Corporate Growth Equity Round • Back South India’s Premier Prop-Tech Brokerage',
    corpRoundDetails: 'Pre-Series A / ₹15 Cr Syndicate',
    corpInstrument: 'Compulsorily Convertible Preference Shares (CCPS)',
    corpMinTicket: 'Min. Investment: ₹5,00,000 (Angel/HNI) • ₹25,00,000 (Institutional)',
    corpPledgeBtn: 'Request Data Room & Term Sheet',
    corpDownloadDeck: 'Download Confidential Pitch Deck (PDF)',
    
    // Footer
    footerSalesSuite: 'PRIVATE CLIENT CONCIERGE & SALES SUITE',
    footerRights: '© 2026 REM Estates India Pvt. Ltd. All rights reserved.',
    footerBackToTop: 'Back to Top',
    footerStaffAccess: 'Staff Access',
    footerDirectDev: 'Direct developer curation. 0% buyer brokerage. All properties verified for land title, RERA sanctions, and carpet efficiency.',
    footerInvestEquity: 'Invest in REM Estates Equity',
    footerCuratedCollections: 'Curated Collections',
    footerSkyPenthouses: 'Sky Penthouses',
    footerGardenVillas: 'Bespoke Garden Villas',
    footerCommercialHubs: 'High-Yield Commercial Tech Parks',
    footerCompliance: 'Compliance & Trust',
    footerPrivacyPolicy: 'Privacy Policy (DPDPA 2023)',
    footerTermsConditions: 'Terms & Conditions (RERA Compliant)',
    footerRefundPolicy: '100% Refundable Token Policy',
    footerInquireDirectly: 'Inquire Directly',
    footerScheduleConsultation: 'Schedule a confidential consultation or chauffeur-driven private site inspection.'
  },
  
  hi: {
    // Brand
    brandName: 'रेम एस्टेट्स',
    brandTagline: 'वास्तुशिल्प आवास • बेंगलुरु',
    
    // Navigation
    navProperties: 'संपत्तियां',
    navBuy: 'खरीदें',
    navApartments: 'अपार्टमेंट्स',
    navVillas: 'विला',
    navPlots: 'प्लॉट्स',
    navPenthouses: 'पेंटहाउस',
    navCommercial: 'कमर्शियल',
    navPreLaunch: 'प्री-लॉन्च',
    navCoInvest: 'सह-निवेश',
    navHighYield: 'उच्च यील्ड',
    navCompanyInvest: 'रेम एस्टेट्स में निवेश करें',
    navPortfolio: 'पोर्टफोलियो',
    navSearchPlaceholder: 'आवास, इलाके खोजें...',
    navContactDesk: 'सलाहकार: +91 80 4000 8000',
    navAdminConsole: 'व्यवस्थापक कंसोल',
    navSignIn: 'साइन इन',
    navSignOut: 'साइन आउट',
    navMyInvestments: 'मेरे निवेश',
    
    // Hero (The Agency Luxury Style)
    heroWindowToThe: 'दुनिया के बेहतरीन',
    heroFinestRealEstate: 'रियल एस्टेट के लिए आपकी खिड़की',
    heroTabBuy: 'खरीदें',
    heroTabCoInvest: 'सह-निवेश',
    heroSearchPlaceholder: 'स्थान, पता, लिस्टिंग आईडी या माइक्रोमार्केट दर्ज करें...',
    heroExploreListings: 'लिस्टिंग देखें',
    heroAdvisoryDesk: 'सलाहकार डेस्क: +91 80 4000 8000',
    heroDirectDeveloper: 'सीधे डेवलपर प्रतिनिधित्व',
    heroZeroBrokerage: 'शून्य ब्रोकरेज गारंटी',
    heroReraDiligence: '100% रेरा सत्यापन',
    heroResponseTime: 'औसत प्रतिक्रिया समय: 15 मिनट',
    
    // Categories & Filters
    catAll: 'सभी संपत्तियां',
    catVillas: 'निजी विला',
    catPenthouses: 'स्काई पेंटहाउस',
    catCommercial: 'कमर्शियल हब',
    catPreLaunch: 'प्री-लॉन्च परियोजनाएं',
    filterTitle: 'प्रॉपर्टी फिल्टर',
    filterSubtitle: 'प्रकार, बीएचके, बजट और स्थान के अनुसार फ़िल्टर करें',
    filterPropertyType: 'प्रॉपर्टी का प्रकार',
    filterUnitConfig: 'बीएचके कॉन्फ़िगरेशन',
    filterLocation: 'स्थान',
    filterStage: 'निर्माण की स्थिति',
    filterSort: 'क्रमबद्ध करें',
    filterPreLaunchOnly: 'केवल प्री-लॉन्च सौदे',
    filterBudget: 'बजट सीमा',
    filterAnyBudget: 'कोई भी बजट',
    filterReset: 'रीसेट',
    filterClearAll: 'सभी हटाएं',
    filterActive: 'सक्रिय',
    filterPriceLowHigh: 'मूल्य: कम से ज्यादा',
    filterPriceHighLow: 'मूल्य: ज्यादा से कम',
    filterAreaLargest: 'सबसे बड़ा कारपेट एरिया',
    
    // Concept / Architectural Standard
    conceptPreTitle: 'स्थापत्य मानक',
    conceptHeading: 'गोपनीयता, प्रकाश और कालातीत जीवन के लिए निर्मित आवास।',
    conceptDescription: 'हम सत्यापित वास्तुशिल्प विला, स्काई पेंटहाउस और प्री-लीज़्ड आईटी पार्कों का प्रतिनिधित्व करते हैं। प्रत्येक घर को 30-वर्षीय शीर्षक खोज रिपोर्ट और कर्नाटक रेरा अनुपालन के साथ जांचा गया है।',
    conceptCraftedTitle: 'सॉवरेन क्रेस्ट स्काई विला',
    conceptExploreUnit: 'यूनिट देखें',
    conceptAuthenticTitle: 'प्रामाणिक विनिर्देश',
    conceptAuthenticSub: 'स्थानीय सदाहल्ली ग्रेनाइट, एक्सपोज़्ड कंक्रीट, डबल-ग्लेज्ड ध्वनिरोधी ग्लास की दीवारें।',
    conceptGuaranteePre: 'हमारी सत्यापन गारंटी',
    conceptGuaranteeHeading: 'प्रामाणिक निर्माण सामग्री। सत्यापित कानूनी शीर्षक।',
    conceptGuaranteeDesc: 'हम बेंगलुरु रियल एस्टेट से अस्पष्टता दूर करते हैं। कोई बढ़ा-चढ़ाकर पेश किया गया सुपर बिल्ट-अप नहीं, शून्य छिपा हुआ शुल्क और 100% पारदर्शी रेरा कारपेट अनुपात।',
    conceptTitle1: '14 फीट ऊंचाई',
    conceptSubtitle1: 'डबल-हाइट लिविंग वॉल्यूम',
    conceptTitle2: '100% स्पष्ट शीर्षक',
    conceptSubtitle2: '30-वर्षीय वकील शीर्षक रिपोर्ट',
    conceptDirectRepTitle: 'सीधे डेवलपर प्रतिनिधित्व',
    conceptDirectRepDesc: 'शून्य खरीदार ब्रोकरेज • सीधे बिल्डरों के साथ सर्वोत्तम मूल्य की गारंटी',
    
    // Micromarkets Explorer
    microExplorerTag: 'इंटरैक्टिव माइक्रोमार्केट एक्सप्लोरर',
    microExplorerHeading: 'ड्राइव समय और मूल्य देखने के लिए किसी भी क्षेत्र पर क्लिक करें',
    microSubhead: 'बेंगलुरु मेट्रो एवं मुख्य मार्ग नेटवर्क',
    microKeyAnchors: 'मुख्य स्थल:',
    microViewResidences: 'आवास देखें:',
    
    // Property Catalog & Cards
    catalogShowingTitle: 'सत्यापित आवास एवं कमर्शियल हब',
    catalogShowingSub: 'सत्यापित आवास, शून्य ब्रोकरेज और 100% रेरा कानूनी सुरक्षा के साथ।',
    catalogClearFilter: 'फ़िल्टर हटाएं',
    catalogReraVerified: '100% रेरा सत्यापित',
    catalogNoMatch: 'फ़िल्टर से मेल खाती कोई संपत्ति नहीं मिली',
    catalogNoMatchDesc: 'कृपया अपनी बजट सीमा बढ़ाएं या फ़िल्टर रीसेट करें।',
    catalogViewAll: 'सभी संपत्तियां देखें',
    cardForSale: 'बिक्री के लिए',
    cardPreLaunch: 'प्री-लॉन्च',
    cardReraVerified: 'रेरा सत्यापित',
    cardWatchTour: '4K वीडियो टूर',
    cardConfig: 'कॉन्फ़िग',
    cardCarpetArea: 'कारपेट एरिया',
    cardEfficiency: 'दक्षता',
    cardCoInvest: 'सह-निवेश',
    cardNetYield: 'शुद्ध यील्ड',
    cardExplore: 'देखें',
    cardInvestBtn: 'निवेश करें',
    cardStartsFrom: 'न्यूनतम',
    cardMonthlyDividend: 'मासिक लाभांश',
    
    // Property Detail Modal
    modalHdGallery: 'एचडी गैलरी',
    modalVideoTour: 'वीडियो वॉकथ्रू',
    modalFloorPlans: '2D/3D फ्लोर प्लान',
    modalVerifiedOnSite: 'रेम विजुअल टीम द्वारा मौके पर सत्यापित',
    modalSpatialSpecs: 'पूर्ण आयाम एवं निर्माण विनिर्देश',
    modalEngineeringSpecs: 'इंजीनियरिंग एवं सामग्री विनिर्देश',
    modalLifestyleAmenities: 'जीवनशैली एवं परियोजना सुविधाएं',
    modalCoInvestSectionTitle: 'इस संपत्ति में सह-निवेश करें और नियमित लाभांश अर्जित करें',
    modalCoInvestSectionSub: 'प्रतिष्ठित किरायेदारों को पूर्व-पट्टे पर दी गई। सीधे बैंक खाते में मासिक लाभांश + पूंजी वृद्धि लाभ प्राप्त करें।',
    modalMinInvestment: 'न्यूनतम निवेश',
    modalGrossYield: 'सकल यील्ड',
    modalFundingProgress: 'सिंडिकेट फंडिंग प्रगति',
    modalFunded: 'फंडेड',
    modalTotalValuation: 'कुल मूल्यांकन',
    modalTargetIRR: 'लक्षित आईआरआर',
    modalAnnualYield: 'वार्षिक यील्ड',
    modalCreditedMonthly: 'हर महीने की 5 तारीख को जमा',
    modalTenure: 'अवधि',
    modalCapitalAppreciation: 'पूंजी वृद्धि',
    modalLegalTitle: 'कानूनी स्वामित्व',
    modalBookPriorityToken: 'प्राथमिकता टोकन बुक करें',
    modalClaimShare: '1 शेयर प्राप्त करें',
    modalConciergeTours: 'कन्सीयर्ज साइट टूर',
    modalBookVipWalkthrough: 'विशेष वीआईपी साइट वॉकथ्रू बुक करें',
    modalWalkthroughDesc: 'रेम के वरिष्ठ संबंध प्रबंधक के साथ संपत्ति का अनुभव करें। शून्य ब्रोकरेज, कोई दबाव नहीं।',
    modalPreferredDate: 'पसंदीदा तारीख',
    modalPreferredTime: 'पसंदीदा समय स्लॉट',
    modalPhysicalVisit: 'प्रत्यक्ष साइट दौरा',
    modalVirtualVisit: 'लाइव वर्चुअल वॉकथ्रू',
    modalConfirmVisit: 'वीआईपी साइट दौरा पुष्टि करें',
    modalDownloadBrochure: 'ब्रोशर डाउनलोड करें',
    modalClose: 'बंद करें',
    
    // Investment Hub
    hubBadge: 'दूसरों के साथ मिलकर रियल एस्टेट में सह-निवेश करें',
    hubHeading1: 'शानदार संपत्तियों में हिस्सेदारी।',
    hubHeading2: 'हर महीने लाभांश प्राप्त करें।',
    hubSubtitle: 'रियल एस्टेट धन सृजन का सबसे सुरक्षित साधन रहा है, परंतु पूरी कमर्शियल संपत्ति अकेले खरीदने के लिए करोड़ों की आवश्यकता होती है। अब आप अन्य निवेशकों के साथ मिलकर मात्र ₹50,000 से शुरुआत कर सकते हैं और सीधे अपने बैंक खाते में नियमित मासिक आय प्राप्त कर सकते हैं।',
    hubMonthlyPayoutPill: 'मासिक लाभांश सीधे बैंक में',
    hubGrowthPill: 'संपत्ति मूल्य वृद्धि में हिस्सेदारी',
    hubLegalTitlePill: '100% सत्यापित कानूनी सह-निवेश',
    hubZeroHasslePill: 'मकान मालिक की कोई झंझट नहीं',
    hubSeePropertiesBtn: 'उपलब्ध संपत्तियां देखें',
    hubMyInvestmentsBtn: 'मेरे निवेश',
    hubHowItWorksTag: 'सरल और पारदर्शी',
    hubHowItWorksHeading: '3 आसान चरणों में यह कैसे कार्य करता है',
    hubHowItWorksSubtitle: 'कोई जटिल शब्दावली नहीं, कोई छुपा हुआ शुल्क नहीं। बस सीधा, पारदर्शी सह-निवेश।',
    hubStep1Title: 'अपनी पसंदीदा संपत्ति चुनें',
    hubStep1Desc: 'आईटी पार्क, कार्यालय और शोरूम में से चुनें जहां प्रतिष्ठित कॉर्पोरेट किरायेदार पहले से मौजूद हैं।',
    hubStep2Title: 'अपनी निवेश राशि तय करें',
    hubStep2Desc: '₹50,000 से लेकर ₹5 लाख+ तक अपने बजट अनुसार निवेश करें। आपको आधिकारिक कानूनी दस्तावेज दिए जाते हैं।',
    hubStep3Title: 'आराम से मासिक रिटर्न प्राप्त करें',
    hubStep3Desc: 'हर महीने लाभांश सीधे बैंक में आता है। संपत्ति की बिक्री के समय पूरी पूंजी लाभ के साथ वापस मिलती है।',
    hubCatalogHeading: 'सह-निवेश के लिए उपलब्ध संपत्तियां',
    hubCatalogSubtitle: 'सत्यापित कानूनी टाइटल और विश्वसनीय कॉर्पोरेट किरायेदारों वाली बेंगलुरु की चुनिंदा संपत्तियां।',
    hubAvailableCount: 'उपलब्ध संपत्तियां',
    hubStartWith: 'प्रारंभिक राशि',
    hubTenant: 'किरायेदार',
    hubJoinedBy: 'कुल सह-निवेशक',
    hubExpectedAnnualYield: 'अपेक्षित वार्षिक यील्ड',
    hubViewDetails: 'विवरण देखें',
    hubInvestInProp: 'संपत्ति में निवेश करें',
    hubFaqTag: 'स्पष्ट और सरल',
    hubFaqHeading: 'सह-निवेश से जुड़े सामान्य प्रश्न',
    hubFaqSubtitle: 'आरंभ करने के लिए आवश्यक सभी महत्वपूर्ण जानकारी।',
    hubFaq1Q: 'संपत्ति में सह-निवेश कैसे कार्य करता है?',
    hubFaq1A: 'एक व्यक्ति द्वारा करोड़ों खर्च करने के बजाय, कई लोग मिलकर एक संपत्ति में सह-निवेश करते हैं। प्रत्येक व्यक्ति अपनी सुविधानुसार राशि (न्यूनतम ₹50,000) लगाता है और अपने हिस्से का मासिक रिटर्न प्राप्त करता है।',
    hubFaq2Q: 'मुझे भुगतान कब और कैसे प्राप्त होगा?',
    hubFaq2A: 'संपत्तियां पहले से ही शीर्ष कॉर्पोरेट कंपनियों को पट्टे पर दी गई हैं। आपका लाभांश हर महीने की 5 तारीख को सीधे आपके बैंक खाते में एनईएफटी द्वारा जमा किया जाता है।',
    hubFaq3Q: 'संपत्ति बिकने पर लाभ कैसे मिलता है?',
    hubFaq3A: 'रियल एस्टेट का मूल्य समय के साथ बढ़ता है। 3 से 5 वर्ष की अवधि के बाद, संपत्ति को उच्च बाजार मूल्य पर बेचा जाता है। आपको अपनी मूल राशि के साथ पूंजी लाभ का पूरा हिस्सा मिलता है।',
    hubFaq4Q: 'यदि मुझे समय से पहले पैसे निकालने हों तो?',
    hubFaq4A: 'प्रारंभिक 12 महीने के बाद, आप रेम एस्टेट्स पोर्टल के माध्यम से तत्कालीन बाजार मूल्यांकन पर अपना शेयर किसी अन्य खरीदार को आसानी से हस्तांतरित कर सकते हैं।',
    hubFaq5Q: 'रखरखाव और किरायेदार का प्रबंधन कौन करता है?',
    hubFaq5A: 'रेम एस्टेट्स 100% दैनिक संचालन संभालता है: किरायेदार प्रबंधन, कर और रखरखाव। आप बिना किसी परेशानी के केवल मासिक रिटर्न का आनंद लेते हैं।',
    hubFriendsHelp: 'दोस्तों के साथ मिलकर निवेश करना चाहते हैं?',
    hubFriendsHelpDesc: 'हमारी कन्सीयर्ज टीम निजी समूह निवेश संरचित करने में पूरी सहायता करती है।',
    hubTalkToUs: 'हमसे संपर्क करें',
    
    // Invest Modal
    invModalTitle: 'संपत्ति सह-निवेश',
    invModalCoInvestConfirmed: 'सह-निवेश की पुष्टि हो गई',
    invModalWelcome: 'संपत्ति में आपका स्वागत है!',
    invModalBenefitMonthly: 'आपके बैंक में मासिक लाभांश:',
    invModalBenefitDeposit: 'पहला लाभांश जमा:',
    invModalBenefitGain: 'अनुमानित 4-वर्षीय संपत्ति लाभ:',
    invModalStatusTag: 'सह-निवेश स्थिति:',
    invModalActiveCoInvestor: 'सक्रिय सह-निवेशक',
    invModalViewPortfolio: 'मेरे पोर्टफोलियो में देखें',
    invModalDone: 'संपन्न',
    invModalRentalYield: 'वार्षिक यील्ड',
    invModalPayoutFrequency: 'वितरण आवृत्ति',
    invModalHoldingPeriod: 'होल्डिंग अवधि',
    invModalChooseContribution: 'अपनी निवेश राशि चुनें:',
    invModalMinimum: 'न्यूनतम:',
    invModalEstimatedMonthly: 'अनुमानित मासिक लाभांश:',
    invModalDepositSchedule: 'जमा अनुसूची:',
    invModalStake: 'आपकी सह-निवेश हिस्सेदारी:',
    invModalEstValue: 'अवधि पश्चात अनुमानित मूल्य:',
    invModalSecurityDeed: 'प्रत्यक्ष सह-निवेश विलेख • सीधे बैंक में भुगतान • 100% पारदर्शी',
    invModalAgreement: 'मैं सह-निवेश दिशानिर्देशों और पंजीकृत बैंक खाते में मासिक वितरण से सहमत हूं।',
    invModalCancel: 'रद्द करें',
    invModalJoinBtn: 'सह-निवेशकों में शामिल हों',
    
    // Portfolio
    portPortfolioOf: ' का पोर्टफोलियो',
    portInvestNewAsset: 'नई संपत्ति में निवेश करें',
    portCapitalInvested: 'कुल निवेशित पूंजी',
    portAcrossAssets: 'सक्रिय संपत्तियों में',
    portCurrentValuation: 'वर्तमान मूल्यांकन',
    portUnrealizedGain: 'अप्रत्यक्ष लाभ',
    portMonthlyIncome: 'मासिक आय',
    portNextPayout: 'अगला भुगतान: अगले माह की 5 तारीख',
    portCumulativeDistributions: 'कुल प्राप्त लाभांश',
    portCreditedToBank: '100% बैंक में जमा',
    portTabHoldings: 'रियल एस्टेट संपत्तियां',
    portTabShortlist: 'सहेजी गई सूची',
    portTabVisits: 'निर्धारित साइट दौरे',
    portNoHoldings: 'अभी कोई सक्रिय होल्डिंग नहीं है',
    portNoHoldingsDesc: 'संस्थागत प्री-लीज़्ड कमर्शियल संपत्तियों के साथ ₹5 लाख से अपना निष्क्रिय आय पोर्टफोलियो बनाना शुरू करें।',
    portBrowseInvestments: 'निवेश के अवसर देखें',
    portHoldingStatus: 'होल्डिंग',
    portInvestedOn: 'निवेश की तारीख',
    portMonthlyPayout: 'मासिक भुगतान',
    portSyndicateShare: 'सिंडिकेट हिस्सेदारी:',
    portTotalDividends: 'कुल अर्जित लाभांश:',
    portTargetExit: '4-वर्षीय निकास लक्ष्य:',
    portNextDistribution: 'अगला वितरण:',
    portSpvCertificate: 'एसपीवी प्रमाणपत्र',
    portAssetDetails: 'संपत्ति विवरण',
    portEmptyShortlist: 'आपकी शॉर्टलिस्ट खाली है',
    portEmptyShortlistDesc: 'मूल्य पर नज़र रखने के लिए किसी भी कार्ड पर दिल के आइकन पर क्लिक करें।',
    portBrowseProperties: 'संपत्तियां देखें',
    portNoVisits: 'कोई निर्धारित दौरा नहीं',
    portNoVisitsDesc: 'आप किसी भी संपत्ति पृष्ठ से वीआईपी साइट दौरे का समय निर्धारित कर सकते हैं।',
    portFindProperties: 'संपत्तियां खोजें',
    portConciergeAssigned: 'कन्सीयर्ज नियुक्त',
    
    // Corporate Investment Modal
    corpModalTitle: 'रेम एस्टेट्स प्राइवेट लिमिटेड में निवेश करें',
    corpModalSubtitle: 'कॉर्पोरेट विकास इक्विटी राउंड • दक्षिण भारत के अग्रणी प्रॉप-टेक प्लेटफॉर्म में हिस्सेदारी',
    corpRoundDetails: 'प्री-सीरीज़ ए / ₹15 करोड़ सिंडिकेट',
    corpInstrument: 'अनिवार्य परिवर्तनीय वरीयता शेयर (CCPS)',
    corpMinTicket: 'न्यूनतम निवेश: ₹5,00,000 (एंजेल) • ₹25,00,000 (संस्थागत)',
    corpPledgeBtn: 'डेटा रूम और टर्म शीट का अनुरोध करें',
    corpDownloadDeck: 'गोपनीय पिच डेक डाउनलोड करें (PDF)',
    
    // Footer
    footerSalesSuite: 'निजी ग्राहक सलाहकार एवं बिक्री केंद्र',
    footerRights: '© 2026 रेम एस्टेट्स इंडिया प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।',
    footerBackToTop: 'शीर्ष पर वापस जाएं',
    footerStaffAccess: 'स्टाफ लॉगिन',
    footerDirectDev: 'सीधे डेवलपर प्रतिनिधित्व। शून्य ब्रोकरेज। सभी संपत्तियों के टाइटल, रेरा और कारपेट एरिया पूर्णतः सत्यापित।',
    footerInvestEquity: 'रेम एस्टेट्स इक्विटी में निवेश करें',
    footerCuratedCollections: 'विशिष्ट संग्रह',
    footerSkyPenthouses: 'स्काई पेंटहाउस',
    footerGardenVillas: 'निजी गार्डन विला',
    footerCommercialHubs: 'उच्च-यील्ड कमर्शियल आईटी पार्क',
    footerCompliance: 'अनुपालन एवं विश्वास',
    footerPrivacyPolicy: 'गोपनीयता नीति (DPDPA 2023)',
    footerTermsConditions: 'नियम एवं शर्तें (रेरा अनुपालन)',
    footerRefundPolicy: '100% वापसी योग्य टोकन नीति',
    footerInquireDirectly: 'सीधे संपर्क करें',
    footerScheduleConsultation: 'गोपनीय परामर्श या निजी साइट निरीक्षण का समय निर्धारित करें।'
  },
  
  kn: {
    // Brand
    brandName: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್',
    brandTagline: 'ವಾಸ್ತುಶಿಲ್ಪ ನಿವಾಸಗಳು • ಬೆಂಗಳೂರು',
    
    // Navigation
    navProperties: 'ನಿವಾಸಗಳು',
    navBuy: 'ಖರೀದಿಸಿ',
    navApartments: 'ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳು',
    navVillas: 'ವಿಲ್ಲಾಗಳು',
    navPlots: 'ನಿವೇಶನಗಳು',
    navPenthouses: 'ಪೆಂಟ್‌ಹೌಸ್‌ಗಳು',
    navCommercial: 'ವಾಣಿಜ್ಯ',
    navPreLaunch: 'ಪೂರ್ವ ಬಿಡುಗಡೆ',
    navCoInvest: 'ಸಹ-ಹೂಡಿಕೆ',
    navHighYield: 'ಹೆಚ್ಚಿನ ಆದಾಯ',
    navCompanyInvest: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್‌ನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ',
    navPortfolio: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೊ',
    navSearchPlaceholder: 'ನಿವಾಸಗಳು, ಪ್ರದೇಶಗಳನ್ನು ಹುಡುಕಿ...',
    navContactDesk: 'ಸಲಹಾ ಡೆಸ್ಕ್: +91 80 4000 8000',
    navAdminConsole: 'ನಿರ್ವಾಹಕ ಕನ್ಸೋಲ್',
    navSignIn: 'ಸೈನ್ ಇನ್',
    navSignOut: 'ಸೈನ್ ಔಟ್',
    navMyInvestments: 'ನನ್ನ ಹೂಡಿಕೆಗಳು',
    
    // Hero (The Agency Luxury Style)
    heroWindowToThe: 'ವಿಶ್ವದ ಅತ್ಯುತ್ತಮ',
    heroFinestRealEstate: 'ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ಗೆ ನಿಮ್ಮ ಕಿಟಕಿ',
    heroTabBuy: 'ಖರೀದಿಸಿ',
    heroTabCoInvest: 'ಸಹ-ಹೂಡಿಕೆ',
    heroSearchPlaceholder: 'ಸ್ಥಳ, ವಿಳಾಸ, ಲಿಸ್ಟಿಂಗ್ ಐಡಿ ಅಥವಾ ಮೈಕ್ರೋಮಾರ್ಕೆಟ್ ನಮೂದಿಸಿ...',
    heroExploreListings: 'ಪಟ್ಟಿಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    heroAdvisoryDesk: 'ಸಲಹಾ ಡೆಸ್ಕ್: +91 80 4000 8000',
    heroDirectDeveloper: 'ನೇರ ಡೆವಲಪರ್ ಪ್ರಾತಿನಿಧ್ಯ',
    heroZeroBrokerage: '0% ದಲ್ಲಾಳಿ ಶುಲ್ಕ ಖಾತರಿ',
    heroReraDiligence: '100% ರೆರಾ ಪರಿಶೀಲನೆ',
    heroResponseTime: 'ಸರಾಸರಿ ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ: 15 ನಿಮಿಷಗಳು',
    
    // Categories & Filters
    catAll: 'ಎಲ್ಲಾ ನಿವಾಸಗಳು',
    catVillas: 'ಖಾಸಗಿ ವಿಲ್ಲಾಗಳು',
    catPenthouses: 'ಸ್ಕೈ ಪೆಂಟ್‌ಹೌಸ್‌ಗಳು',
    catCommercial: 'ವಾಣಿಜ್ಯ ಕೇಂದ್ರಗಳು',
    catPreLaunch: 'ಪೂರ್ವ ಬಿಡುಗಡೆ ಯೋಜನೆಗಳು',
    filterTitle: 'ಆಸ್ತಿ ಫಿಲ್ಟರ್‌ಗಳು',
    filterSubtitle: 'ಆಸ್ತಿಯ ಪ್ರಕಾರ, ಬಿಕೆಹೆಚ್, ಬಜೆಟ್ ಮತ್ತು ಸ್ಥಳದ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ',
    filterPropertyType: 'ಆಸ್ತಿಯ ಪ್ರಕಾರ',
    filterUnitConfig: 'ವಿನ್ಯಾಸ (BHK)',
    filterLocation: 'ಸ್ಥಳ',
    filterStage: 'ನಿರ್ಮಾಣದ ಹಂತ',
    filterSort: 'ವಿಂಗಡಿಸಿ',
    filterPreLaunchOnly: 'ಪೂರ್ವ-ಬಿಡುಗಡೆ ಯೋಜನೆಗಳು ಮಾತ್ರ',
    filterBudget: 'ಖರೀದಿ ಬಜೆಟ್ ಮಿತಿ',
    filterAnyBudget: 'ಯಾವುದೇ ಬಜೆಟ್',
    filterReset: 'ಮರುಹೊಂದಿಸಿ',
    filterClearAll: 'ಎಲ್ಲವನ್ನೂ ತೆರವುಗೊಳಿಸಿ',
    filterActive: 'ಸಕ್ರಿಯ',
    filterPriceLowHigh: 'ಬೆಲೆ: ಕಡಿಮೆಯಿಂದ ಹೆಚ್ಚು',
    filterPriceHighLow: 'ಬೆಲೆ: ಹೆಚ್ಚಿನಿಂದ ಕಡಿಮೆ',
    filterAreaLargest: 'ಅತಿ ದೊಡ್ಡ ಕಾರ್ಪೆಟ್ ವಿಸ್ತೀರ್ಣ',
    
    // Concept / Architectural Standard
    conceptPreTitle: 'ವಾಸ್ತುಶಿಲ್ಪದ ಗುಣಮಟ್ಟ',
    conceptHeading: 'ಗೌಪ್ಯತೆ, ಬೆಳಕು ಮತ್ತು ಸುಂದರ ಜೀವನಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಿವಾಸಗಳು.',
    conceptDescription: 'ನಾವು ಪರಿಶೀಲಿಸಲಾದ ವಾಸ್ತುಶಿಲ್ಪ ವಿಲ್ಲಾಗಳು, ಸ್ಕೈ ಪೆಂಟ್‌ಹೌಸ್‌ಗಳು ಮತ್ತು ಪ್ರೀ-ಲೀಸ್ಡ್ ಟೆಕ್ ಪಾರ್ಕ್‌ಗಳ ಸಂಗ್ರಹವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತೇವೆ. ಪ್ರತಿಯೊಂದು ಮನೆಯನ್ನು 30 ವರ್ಷಗಳ ಕಾನೂನು ದಾಖಲೆಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
    conceptCraftedTitle: 'ಸಾವರಿನ್ ಕ್ರೆಸ್ಟ್ ಸ್ಕೈ ವಿಲ್ಲಾ',
    conceptExploreUnit: 'ಮನೆ ವೀಕ್ಷಿಸಿ',
    conceptAuthenticTitle: 'ನೈಜ ಗುಣಮಟ್ಟ',
    conceptAuthenticSub: 'ಸ್ಥಳೀಯ ಸಾದಹಳ್ಳಿ ಗ್ರಾನೈಟ್, ವಾಸ್ತುಶಿಲ್ಪದ ಕಾಂಕ್ರೀಟ್, ಡಬಲ್-ಗ್ಲೇಸ್ಡ್ ಸದ್ದು ನಿರೋಧಕ ಗಾಜಿನ ಗೋಡೆಗಳು.',
    conceptGuaranteePre: 'ನಮ್ಮ ಪರಿಶೀಲನಾ ಖಾತರಿ',
    conceptGuaranteeHeading: 'ನೈಜ ನಿರ್ಮಾಣ ಸಾಮಗ್ರಿಗಳು. ಪರಿಶೀಲಿಸಿದ ಕಾನೂನು ದಾಖಲೆಗಳು.',
    conceptGuaranteeDesc: 'ನಾವು ಬೆಂಗಳೂರಿನ ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ ಪಾರದರ್ಶಕತೆ ತರುತ್ತೇವೆ. ಯಾವುದೇ ಕೃತಕ ಸೂಪರ್ ಬಿಲ್ಟ್-ಅಪ್ ಇಲ್ಲ, 0% ರಹಸ್ಯ ಶುಲ್ಕ ಮತ್ತು 100% ನಿಖರ ರೆರಾ ಕಾರ್ಪೆಟ್ ವಿಸ್ತೀರ್ಣ.',
    conceptTitle1: '14 ಅಡಿ ಸೀಲಿಂಗ್ ಎತ್ತರ',
    conceptSubtitle1: 'ಡಬಲ್-ಹೈಟ್ ಲಿವಿಂಗ್ ಹಾಲ್',
    conceptTitle2: '100% ಸ್ಪಷ್ಟ ಟೈಟಲ್',
    conceptSubtitle2: '30 ವರ್ಷಗಳ ವಕೀಲರ ಪರಿಶೀಲನೆ',
    conceptDirectRepTitle: 'ನೇರ ಡೆವಲಪರ್ ಪ್ರಾತಿನಿಧ್ಯ',
    conceptDirectRepDesc: 'ಗ್ರಾಹಕರಿಗೆ 0% ದಲ್ಲಾಳಿ ಶುಲ್ಕ • ಬಿಲ್ಡರ್‌ಗಳೊಂದಿಗೆ ನೇರ ಉತ್ತಮ ಬೆಲೆ ಖಾತರಿ',
    
    // Micromarkets Explorer
    microExplorerTag: 'ಸಂವಾದಾತ್ಮಕ ಮೈಕ್ರೋಮಾರ್ಕೆಟ್ ಅನ್ವೇಷಕ',
    microExplorerHeading: 'ಪ್ರಯಾಣದ ಸಮಯ ಮತ್ತು ಬೆಲೆಗಳನ್ನು ನೋಡಲು ಯಾವುದೇ ವಲಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ',
    microSubhead: 'ಬೆಂಗಳೂರು ಮೆಟ್ರೋ ಮತ್ತು ರಸ್ತೆ ಜಾಲ',
    microKeyAnchors: 'ಪ್ರಮುಖ ಕೇಂದ್ರಗಳು:',
    microViewResidences: 'ನಿವಾಸಗಳನ್ನು ವೀಕ್ಷಿಸಿ:',
    
    // Property Catalog & Cards
    catalogShowingTitle: 'ಪರಿಶೀಲಿಸಿದ ನಿವಾಸಗಳು ಮತ್ತು ವಾಣಿಜ್ಯ ಕೇಂದ್ರಗಳು',
    catalogShowingSub: 'ಪರಿಶೀಲಿಸಲಾದ ನಿವಾಸಗಳು, 0% ದಲ್ಲಾಳಿ ಶುಲ್ಕ ಮತ್ತು 100% ರೆರಾ ಕಾನೂನು ಭದ್ರತೆಯೊಂದಿಗೆ.',
    catalogClearFilter: 'ಫಿಲ್ಟರ್ ತೆರವುಗೊಳಿಸಿ',
    catalogReraVerified: '100% ರೆರಾ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    catalogNoMatch: 'ಯಾವುದೇ ಆಸ್ತಿ ಕಂಡುಬಂದಿಲ್ಲ',
    catalogNoMatchDesc: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಬಜೆಟ್ ಮಿತಿಯನ್ನು ಹೆಚ್ಚಿಸಿ ಅಥವಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ.',
    catalogViewAll: 'ಎಲ್ಲಾ ನಿವಾಸಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    cardForSale: 'ಮಾರಾಟಕ್ಕಿದೆ',
    cardPreLaunch: 'ಪೂರ್ವ ಬಿಡುಗಡೆ',
    cardReraVerified: 'ರೆರಾ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    cardWatchTour: '4K ವಿಡಿಯೋ ಪ್ರವಾಸ',
    cardConfig: 'ವಿನ್ಯಾಸ',
    cardCarpetArea: 'ಕಾರ್ಪೆಟ್ ವಿಸ್ತೀರ್ಣ',
    cardEfficiency: 'ದಕ್ಷತೆ',
    cardCoInvest: 'ಸಹ-ಹೂಡಿಕೆ',
    cardNetYield: 'ನಿವ್ವಳ ಆದಾಯ',
    cardExplore: 'ವೀಕ್ಷಿಸಿ',
    cardInvestBtn: 'ಹೂಡಿಕೆ ಮಾಡಿ',
    cardStartsFrom: 'ಪ್ರಾರಂಭಿಕ ಮೊತ್ತ',
    cardMonthlyDividend: 'ಮಾಸಿಕ ಲಾಭಾಂಶ',
    
    // Property Detail Modal
    modalHdGallery: 'ಎಚ್‌ಡಿ ಗ್ಯಾಲರಿ',
    modalVideoTour: 'ವಿಡಿಯೋ ಪ್ರವಾಸ',
    modalFloorPlans: '2D/3D ಫ್ಲೋರ್ ಪ್ಲಾನ್‌ಗಳು',
    modalVerifiedOnSite: 'ರೆಮ್ ತಂಡದಿಂದ ಸ್ಥಳದಲ್ಲೇ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    modalSpatialSpecs: 'ಸಂಪೂರ್ಣ ವಿಸ್ತೀರ್ಣ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್ ವಿವರಗಳು',
    modalEngineeringSpecs: 'ನಿರ್ಮಾಣ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ವಿಶೇಷತೆಗಳು',
    modalLifestyleAmenities: 'ಜೀವನಶೈಲಿ ಸೌಲಭ್ಯಗಳು',
    modalCoInvestSectionTitle: 'ಈ ಆಸ್ತಿಯಲ್ಲಿ ಸಹ-ಹೂಡಿಕೆ ಮಾಡಿ ಮತ್ತು ನಿಯಮಿತ ಆದಾಯ ಗಳಿಸಿ',
    modalCoInvestSectionSub: 'ಪ್ರತಿಷ್ಠಿತ ಕಾರ್ಪೊರೇಟ್ ಬಾಡಿಗೆದಾರರಿಗೆ ನೀಡಲಾಗಿದೆ. ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರ ಮಾಸಿಕ ಲಾಭಾಂಶ + ಮೌಲ್ಯ ವೃದ್ಧಿಯ ಲಾಭ ಪಡೆಯಿರಿ.',
    modalMinInvestment: 'ಕನಿಷ್ಠ ಹೂಡಿಕೆ',
    modalGrossYield: 'ಒಟ್ಟು ಆದಾಯ',
    modalFundingProgress: 'ಸಿಂಡಿಕೇಟ್ ಹೂಡಿಕೆ ಪ್ರಗತಿ',
    modalFunded: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
    modalTotalValuation: 'ಒಟ್ಟು ಮೌಲ್ಯಮಾಪನ',
    modalTargetIRR: 'ನಿರೀಕ್ಷಿತ ಐಆರ್‌ಆರ್',
    modalAnnualYield: 'ವಾರ್ಷಿಕ ಆದಾಯ',
    modalCreditedMonthly: 'ಪ್ರತಿ ತಿಂಗಳ 5 ನೇ ತಾರೀಖಿನಂದು ಜಮೆ',
    modalTenure: 'ಅವಧಿ',
    modalCapitalAppreciation: 'ಬಂಡವಾಳ ವೃದ್ಧಿ',
    modalLegalTitle: 'ಕಾನೂನು ಸ್ವಾಮ್ಯ',
    modalBookPriorityToken: 'ಟೋಕನ್ ಕಾಯ್ದಿರಿಸಿ',
    modalClaimShare: '1 ಷೇರು ಪಡೆಯಿರಿ',
    modalConciergeTours: 'ಕನ್ಸೈರ್ಜ್ ಸೈಟ್ ಭೇಟಿ',
    modalBookVipWalkthrough: 'ವಿಶೇಷ ವಿಐಪಿ ಸೈಟ್ ಭೇಟಿ ಕಾಯ್ದಿರಿಸಿ',
    modalWalkthroughDesc: 'ರೆಮ್ ಹಿರಿಯ ವ್ಯವಸ್ಥಾಪಕರೊಂದಿಗೆ ಆಸ್ತಿಯನ್ನು ಖುದ್ದಾಗಿ ವೀಕ್ಷಿಸಿ. 0% ದಲ್ಲಾಳಿ ಶುಲ್ಕ.',
    modalPreferredDate: 'ಆದ್ಯತೆಯ ದಿನಾಂಕ',
    modalPreferredTime: 'ಆದ್ಯತೆಯ ಸಮಯ',
    modalPhysicalVisit: 'ನೇರ ಸೈಟ್ ಭೇಟಿ',
    modalVirtualVisit: 'ಲೈವ್ ವರ್ಚುವಲ್ ಪ್ರವಾಸ',
    modalConfirmVisit: 'ಸೈಟ್ ಭೇಟಿ ದೃಢೀಕರಿಸಿ',
    modalDownloadBrochure: 'ಮಾಹಿತಿ ಪುಸ್ತಕ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    modalClose: 'ಮುಚ್ಚಿ',
    
    // Investment Hub
    hubBadge: 'ಇತರರೊಂದಿಗೆ ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ ಸಹ-ಹೂಡಿಕೆ ಮಾಡಿ',
    hubHeading1: 'ಉತ್ತಮ ಆಸ್ತಿಗಳಲ್ಲಿ ಪಾಲುದಾರರಾಗಿ.',
    hubHeading2: 'ಪ್ರತಿ ತಿಂಗಳು ಲಾಭಾಂಶ ಪಡೆಯಿರಿ.',
    hubSubtitle: 'ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಸಂಪತ್ತು ಬೆಳೆಸಲು ಸುರಕ್ಷಿತ ಮಾರ್ಗವಾಗಿದೆ, ಆದರೆ ವಾಣಿಜ್ಯ ಆಸ್ತಿಯನ್ನು ಒಬ್ಬರೇ ಖರೀದಿಸಲು ಕೋಟಿಗಟ್ಟಲೆ ಹಣ ಬೇಕಾಗುತ್ತದೆ. ಈಗ ನೀವು ಇತರರೊಂದಿಗೆ ಸೇರಿ ಕೇವಲ ₹50,000 ದಿಂದ ಪ್ರಾರಂಭಿಸಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನಿಯಮಿತ ಮಾಸಿಕ ಆದಾಯ ಪಡೆಯಬಹುದು.',
    hubMonthlyPayoutPill: 'ನೇರ ಬ್ಯಾಂಕ್ ಜಮೆಯ ಮಾಸಿಕ ಆದಾಯ',
    hubGrowthPill: 'ಆಸ್ತಿ ಮೌಲ್ಯ ವೃದ್ಧಿಯಲ್ಲಿ ಪಾಲು',
    hubLegalTitlePill: '100% ಪರಿಶೀಲಿಸಿದ ಕಾನೂನುಬದ್ಧ ಸಹ-ಹೂಡಿಕೆ',
    hubZeroHasslePill: 'ಯಾವುದೇ ನಿರ್ವಹಣಾ ತೊಂದರೆ ಇಲ್ಲ',
    hubSeePropertiesBtn: 'ಲಭ್ಯವಿರುವ ಆಸ್ತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    hubMyInvestmentsBtn: 'ನನ್ನ ಹೂಡಿಕೆಗಳು',
    hubHowItWorksTag: 'ಸರಳ ಮತ್ತು ಪಾರದರ್ಶಕ',
    hubHowItWorksHeading: '3 ಸರಳ ಹಂತಗಳಲ್ಲಿ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    hubHowItWorksSubtitle: 'ಯಾವುದೇ ಗೊಂದಲವಿಲ್ಲ, ರಹಸ್ಯ ಶುಲ್ಕಗಳಿಲ್ಲ. ಸರಳ ಸಹ-ಹೂಡಿಕೆ.',
    hubStep1Title: 'ನಿಮ್ಮಿಷ್ಟದ ಆಸ್ತಿಯನ್ನು ಆರಿಸಿ',
    hubStep1Desc: 'ಕಾರ್ಪೊರೇಟ್ ಬಾಡಿಗೆದಾರರು ಈಗಾಗಲೇ ಇರುವ ಟೆಕ್ ಪಾರ್ಕ್ ಮತ್ತು ಮಳಿಗೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.',
    hubStep2Title: 'ಹೂಡಿಕೆಯ ಮೊತ್ತವನ್ನು ನಿರ್ಧರಿಸಿ',
    hubStep2Desc: '₹50,000 ದಿಂದ ₹5 ಲಕ್ಷ+ ವರೆಗೆ ನಿಮ್ಮ ಬಜೆಟ್ ಪ್ರಕಾರ ಹೂಡಿಕೆ ಮಾಡಿ. ಅಧಿಕೃತ ಕಾನೂನು ಪತ್ರಗಳನ್ನು ಪಡೆಯಿರಿ.',
    hubStep3Title: 'ನಿರಾಳವಾಗಿ ಮಾಸಿಕ ಆದಾಯ ಪಡೆಯಿರಿ',
    hubStep3Desc: 'ಪ್ರತಿ ತಿಂಗಳು ನಿಮ್ಮ ಪಾಲು ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಬರುತ್ತದೆ. ಆಸ್ತಿ ಮಾರಾಟವಾದಾಗ ಪೂರ್ಣ ಲಾಭ ನಿಮ್ಮದಾಗುತ್ತದೆ.',
    hubCatalogHeading: 'ಸಹ-ಹೂಡಿಕೆಗೆ ಲಭ್ಯವಿರುವ ಆಸ್ತಿಗಳು',
    hubCatalogSubtitle: 'ಪರಿಶೀಲಿಸಿದ ಕಾನೂನು ದಾಖಲೆಗಳು ಮತ್ತು ಪ್ರಮುಖ ಕಂಪನಿಗಳ ಬಾಡಿಗೆದಾರರನ್ನು ಹೊಂದಿರುವ ಬೆಂಗಳೂರಿನ ಆಸ್ತಿಗಳು.',
    hubAvailableCount: 'ಲಭ್ಯವಿರುವ ಆಸ್ತಿಗಳು',
    hubStartWith: 'ಪ್ರಾರಂಭಿಕ ಮೊತ್ತ',
    hubTenant: 'ಬಾಡಿಗೆದಾರರು',
    hubJoinedBy: 'ಒಟ್ಟು ಸಹ-ಹೂಡಿಕೆದಾರರು',
    hubExpectedAnnualYield: 'ನಿರೀಕ್ಷಿತ ವಾರ್ಷಿಕ ಆದಾಯ',
    hubViewDetails: 'ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    hubInvestInProp: 'ಆಸ್ತಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ',
    hubFaqTag: 'ಸ್ಪಷ್ಟ ಮತ್ತು ಸರಳ',
    hubFaqHeading: 'ಸಹ-ಹೂಡಿಕೆಯ ಕುರಿತು ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು',
    hubFaqSubtitle: 'ಆರಂಭಿಸಲು ನೀವು ತಿಳಿದುಕೊಳ್ಳಬೇಕಾದ ಎಲ್ಲಾ ಮುಖ್ಯ ಮಾಹಿತಿ.',
    hubFaq1Q: 'ಆಸ್ತಿಯಲ್ಲಿ ಸಹ-ಹೂಡಿಕೆ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?',
    hubFaq1A: 'ಒಬ್ಬರೇ ಕೋಟಿಗಟ್ಟಲೆ ಹಣ ಹಾಕುವ ಬದಲು, ಹಲವರು ಒಟ್ಟಾಗಿ ಆಸ್ತಿಯಲ್ಲಿ ಸಹ-ಹೂಡಿಕೆ ಮಾಡುತ್ತಾರೆ. ಪ್ರತಿಯೊಬ್ಬರೂ ತಮ್ಮ ಅನುಕೂಲಕ್ಕೆ ತಕ್ಕಂತೆ (ಕನಿಷ್ಠ ₹50,000 ದಿಂದ) ಹಣ ಹೂಡಿ ತಮ್ಮ ಪಾಲಿನ ಮಾಸಿಕ ಆದಾಯ ಪಡೆಯುತ್ತಾರೆ.',
    hubFaq2Q: 'ಲಾಭಾಂಶ ಯಾವಾಗ ಮತ್ತು ಹೇಗೆ ಬರುತ್ತದೆ?',
    hubFaq2A: 'ಆಸ್ತಿಗಳನ್ನು ಈಗಾಗಲೇ ಪ್ರಮುಖ ಕಂಪನಿಗಳಿಗೆ ಬಾಡಿಗೆಗೆ ನೀಡಲಾಗಿದೆ. ನಿಮ್ಮ ಪಾಲಿನ ಲಾಭಾಂಶವು ಪ್ರತಿ ತಿಂಗಳ 5 ನೇ ತಾರೀಖಿನಂದು ನೆಫ್ಟ್ (NEFT) ಮೂಲಕ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ನೇರವಾಗಿ ಜಮೆಯಾಗುತ್ತದೆ.',
    hubFaq3Q: 'ಆಸ್ತಿ ಮಾರಾಟವಾದಾಗ ಲಾಭ ಹೇಗೆ ಸಿಗುತ್ತದೆ?',
    hubFaq3A: 'ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಆಸ್ತಿಗಳ ಮೌಲ್ಯ ಕಾಲಕ್ರಮೇಣ ಹೆಚ್ಚಾಗುತ್ತದೆ. 3 ರಿಂದ 5 ವರ್ಷಗಳ ನಂತರ, ಆಸ್ತಿಯನ್ನು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡಲಾಗುತ್ತದೆ. ನಿಮ್ಮ ಮೂಲ ಬಂಡವಾಳದ ಜೊತೆಗೆ ಪೂರ್ಣ ಮೌಲ್ಯ ವೃದ್ಧಿಯ ಲಾಭ ನಿಮಗೆ ಸಿಗುತ್ತದೆ.',
    hubFaq4Q: 'ನನ್ನ ಹಣವನ್ನು ಮಧ್ಯದಲ್ಲೇ ಹಿಂಪಡೆಯಬಹುದೇ?',
    hubFaq4A: 'ಮೊದಲ 12 ತಿಂಗಳ ನಂತರ, ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯದಲ್ಲಿ ನಿಮ್ಮ ಪಾಲನ್ನು ಇತರ ಖರೀದಿದಾರರಿಗೆ ಸುಲಭವಾಗಿ ವರ್ಗಾಯಿಸಬಹುದು.',
    hubFaq5Q: 'ಆಸ್ತಿ ದುರಸ್ತಿ ಮತ್ತು ನಿರ್ವಹಣೆಯನ್ನು ಯಾರು ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ?',
    hubFaq5A: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್ ಸಂಸ್ಥೆಯು 100% ದೈನಂದಿನ ನಿರ್ವಹಣೆ, ತೆರಿಗೆ ಮತ್ತು ಬಾಡಿಗೆದಾರರ ನಿರ್ವಹಣೆಯನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತದೆ. ನೀವು ಕೇವಲ ಮಾಸಿಕ ಆದಾಯವನ್ನು ಆನಂದಿಸುತ್ತೀರಿ.',
    hubFriendsHelp: 'ಸ್ನೇಹಿತರೊಂದಿಗೆ ಸೇರಿ ಹೂಡಿಕೆ ಮಾಡಲು ಬಯಸುವಿರಾ?',
    hubFriendsHelpDesc: 'ಖಾಸಗಿ ಗುಂಪು ಹೂಡಿಕೆಯನ್ನು ರಚಿಸಲು ನಮ್ಮ ಕನ್ಸೈರ್ಜ್ ತಂಡವು ಸಂಪೂರ್ಣ ನೆರವು ನೀಡುತ್ತದೆ.',
    hubTalkToUs: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    
    // Invest Modal
    invModalTitle: 'ಆಸ್ತಿ ಸಹ-ಹೂಡಿಕೆ',
    invModalCoInvestConfirmed: 'ಸಹ-ಹೂಡಿಕೆ ದೃಢಪಟ್ಟಿದೆ',
    invModalWelcome: 'ಆಸ್ತಿಗೆ ಸುಸ್ವಾಗತ!',
    invModalBenefitMonthly: 'ನಿಮ್ಮ ಬ್ಯಾಂಕಿಗೆ ಮಾಸಿಕ ಲಾಭಾಂಶ:',
    invModalBenefitDeposit: 'ಮೊದಲ ಜಮೆ:',
    invModalBenefitGain: 'ಅಂದಾಜು 4-ವರ್ಷದ ಆಸ್ತಿ ಲಾಭ:',
    invModalStatusTag: 'ಸಹ-ಹೂಡಿಕೆ ಸ್ಥಿತಿ:',
    invModalActiveCoInvestor: 'ಸಕ್ರಿಯ ಸಹ-ಹೂಡಿಕೆದಾರ',
    invModalViewPortfolio: 'ನನ್ನ ಪೋರ್ಟ್‌ಫೋಲಿಯೊದಲ್ಲಿ ವೀಕ್ಷಿಸಿ',
    invModalDone: 'ಮುಗಿದಿದೆ',
    invModalRentalYield: 'ವಾರ್ಷಿಕ ಆದಾಯ',
    invModalPayoutFrequency: 'ಲಾಭಾಂಶ ಆವರ್ತನ',
    invModalHoldingPeriod: 'ಹೂಡಿಕೆ ಅವಧಿ',
    invModalChooseContribution: 'ನಿಮ್ಮ ಹೂಡಿಕೆಯ ಮೊತ್ತವನ್ನು ಆರಿಸಿ:',
    invModalMinimum: 'ಕನಿಷ್ಠ:',
    invModalEstimatedMonthly: 'ಅಂದಾಜು ಮಾಸಿಕ ಆದಾಯ:',
    invModalDepositSchedule: 'ಜಮೆ ವೇಳಾಪಟ್ಟಿ:',
    invModalStake: 'ನಿಮ್ಮ ಸಹ-ಹೂಡಿಕೆಯ ಪಾಲು:',
    invModalEstValue: 'ಅವಧಿಯ ನಂತರ ಅಂದಾಜು ಮೌಲ್ಯ:',
    invModalSecurityDeed: 'ನೇರ ಸಹ-ಹೂಡಿಕೆ ಪತ್ರ • ಬ್ಯಾಂಕಿಗೆ ನೇರ ಪಾವತಿ • 100% ಪಾರದರ್ಶಕ',
    invModalAgreement: 'ನಾನು ಸಹ-ಹೂಡಿಕೆ ನಿಯಮಗಳು ಮತ್ತು ನೋಂದಾಯಿತ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಮಾಸಿಕ ಲಾಭಾಂಶ ಜಮೆಗೆ ಒಪ್ಪುತ್ತೇನೆ.',
    invModalCancel: 'ರದ್ದುಮಾಡಿ',
    invModalJoinBtn: 'ಸಹ-ಹೂಡಿಕೆದಾರರೊಂದಿಗೆ ಸೇರಿ',
    
    // Portfolio
    portPortfolioOf: ' ಅವರ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ',
    portInvestNewAsset: 'ಹೊಸ ಆಸ್ತಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ',
    portCapitalInvested: 'ಒಟ್ಟು ಹೂಡಿಕೆ ಮಾಡಿದ ಬಂಡವಾಳ',
    portAcrossAssets: 'ಸಕ್ರಿಯ ಆಸ್ತಿಗಳಲ್ಲಿ',
    portCurrentValuation: 'ಪ್ರಸ್ತುತ ಮೌಲ್ಯಮಾಪನ',
    portUnrealizedGain: 'ನಿವ್ವಳ ಲಾಭ',
    portMonthlyIncome: 'ಮಾಸಿಕ ಆದಾಯ',
    portNextPayout: 'ಮುಂದಿನ ಪಾವತಿ: ಮುಂದಿನ ತಿಂಗಳ 5 ನೇ ತಾರೀಕು',
    portCumulativeDistributions: 'ಒಟ್ಟು ಪಡೆದ ಲಾಭಾಂಶ',
    portCreditedToBank: '100% ಬ್ಯಾಂಕಿಗೆ ಜಮೆಯಾಗಿದೆ',
    portTabHoldings: 'ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಆಸ್ತಿಗಳು',
    portTabShortlist: 'ಉಳಿಸಿದ ಆಸ್ತಿಗಳು',
    portTabVisits: 'ನಿಗದಿತ ಸೈಟ್ ಭೇಟಿಗಳು',
    portNoHoldings: 'ಇನ್ನೂ ಯಾವುದೇ ಸಕ್ರಿಯ ಆಸ್ತಿಗಳಿಲ್ಲ',
    portNoHoldingsDesc: '₹5 ಲಕ್ಷದಿಂದ ಪ್ರಾರಂಭವಾಗುವ ವಾಣಿಜ್ಯ ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ ನಿಮ್ಮ ನಿಷ್ಕ್ರಿಯ ಆದಾಯ ಪೋರ್ಟ್‌ಫೋಲಿಯೊವನ್ನು ನಿರ್ಮಿಸಿ.',
    portBrowseInvestments: 'ಹೂಡಿಕೆ ಅವಕಾಶಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    portHoldingStatus: 'ಸ್ಥಿತಿ',
    portInvestedOn: 'ಹೂಡಿಕೆ ಮಾಡಿದ ದಿನಾಂಕ',
    portMonthlyPayout: 'ಮಾಸಿಕ ಆದಾಯ',
    portSyndicateShare: 'ಸಿಂಡಿಕೇಟ್ ಪಾಲುದಾರಿಕೆ:',
    portTotalDividends: 'ಗಳಿಸಿದ ಒಟ್ಟು ಲಾಭಾಂಶ:',
    portTargetExit: '4-ವರ್ಷದ ನಿರ್ಗಮನ ಗುರಿ:',
    portNextDistribution: 'ಮುಂದಿನ ವಿತರಣೆ:',
    portSpvCertificate: 'ಎಸ್‍ಪಿವಿ ಪ್ರಮಾಣಪತ್ರ',
    portAssetDetails: 'ಆಸ್ತಿಯ ವಿವರಗಳು',
    portEmptyShortlist: 'ನಿಮ್ಮ ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ',
    portEmptyShortlistDesc: 'ಬೆಲೆಗಳನ್ನು ಗಮನಿಸಲು ಯಾವುದೇ ಆಸ್ತಿ ಕಾರ್ಡ್‌ನಲ್ಲಿರುವ ಹೃದಯ ಐಕಾನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.',
    portBrowseProperties: 'ಆಸ್ತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    portNoVisits: 'ಯಾವುದೇ ನಿಗದಿತ ಭೇಟಿಗಳಿಲ್ಲ',
    portNoVisitsDesc: 'ನೀವು ಯಾವುದೇ ಆಸ್ತಿ ಪುಟದಿಂದ ವಿಐಪಿ ಸೈಟ್ ಭೇಟಿಯನ್ನು ನಿಗದಿಪಡಿಸಬಹುದು.',
    portFindProperties: 'ಆಸ್ತಿಗಳನ್ನು ಹುಡುಕಿ',
    portConciergeAssigned: 'ಕನ್ಸೈರ್ಜ್ ನಿಯೋಜಿಸಲಾಗಿದೆ',
    
    // Corporate Investment Modal
    corpModalTitle: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್‌ನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ',
    corpModalSubtitle: 'ಕಾರ್ಪೊರೇಟ್ ಬೆಳವಣಿಗೆ ಇಕ್ವಿಟಿ ಸುತ್ತು • ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಪ್ರಾಪ್-ಟೆಕ್ ವೇದಿಕೆಯಲ್ಲಿ ಪಾಲುದಾರರಾಗಿ',
    corpRoundDetails: 'ಪ್ರೀ-ಸೀರೀಸ್ ಎ / ₹15 ಕೋಟಿ ಸಿಂಡಿಕೇಟ್',
    corpInstrument: 'ಕಡ್ಡಾಯ ಪರಿವರ್ತನೀಯ ಆದ್ಯತೆಯ ಷೇರುಗಳು (CCPS)',
    corpMinTicket: 'ಕನಿಷ್ಠ ಹೂಡಿಕೆ: ₹5,00,000 (ಏಂಜೆಲ್) • ₹25,00,000 (ಸಂಸ್ಥೆಗಳು)',
    corpPledgeBtn: 'ಡೇಟಾ ರೂಮ್ ಮತ್ತು ಟರ್ಮ್ ಶೀಟ್ ವಿನಂತಿಸಿ',
    corpDownloadDeck: 'ಪಿಚ್ ಡೆಕ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (PDF)',
    
    // Footer
    footerSalesSuite: 'ಖಾಸಗಿ ಗ್ರಾಹಕ ಕನ್ಸೈರ್ಜ್ ಮತ್ತು ಮಾರಾಟ ಕೇಂದ್ರ',
    footerRights: '© 2026 ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್ ಇಂಡಿಯಾ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    footerBackToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ',
    footerStaffAccess: 'ಸಿಬ್ಬಂದಿ ಪ್ರವೇಶ',
    footerDirectDev: 'ನೇರ ಡೆವಲಪರ್ ಪ್ರಾತಿನಿಧ್ಯ. 0% ದಲ್ಲಾಳಿ ಶುಲ್ಕ. ಎಲ್ಲಾ ಆಸ್ತಿಗಳ ದಾಖಲೆಗಳು, ರೆರಾ ಮತ್ತು ಕಾರ್ಪೆಟ್ ವಿಸ್ತೀರ್ಣ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
    footerInvestEquity: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್ ಇಕ್ವಿಟಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ',
    footerCuratedCollections: 'ವಿಶಿಷ್ಟ ಸಂಗ್ರಹ',
    footerSkyPenthouses: 'ಸ್ಕೈ ಪೆಂಟ್‌ಹೌಸ್‌ಗಳು',
    footerGardenVillas: 'ಖಾಸಗಿ ಗಾರ್ಡನ್ ವಿಲ್ಲಾಗಳು',
    footerCommercialHubs: 'ಹೆಚ್ಚಿನ-ಆದಾಯದ ವಾಣಿಜ್ಯ ಟೆಕ್ ಪಾರ್ಕ್‌ಗಳು',
    footerCompliance: 'ವಿಶ್ವಾಸಾರ್ಹತೆ ಮತ್ತು ಕಾನೂನು ಭದ್ರತೆ',
    footerPrivacyPolicy: 'ಗೌಪ್ಯತೆ ನೀತಿ (DPDPA 2023)',
    footerTermsConditions: 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು (ರೆರಾ ಅನುಸರಣೆ)',
    footerRefundPolicy: '100% ಮರುಪಾವತಿಸಬಹುದಾದ ಟೋಕನ್ ನೀತಿ',
    footerInquireDirectly: 'ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ',
    footerScheduleConsultation: 'ಖಾಸಗಿ ಸಮಾಲೋಚನೆ ಅಥವಾ ಸೈಟ್ ಭೇಟಿಯನ್ನು ನಿಗದಿಪಡಿಸಿ.'
  }
};

export const getTranslation = (lang: Language): Translations => TRANSLATIONS[lang] || TRANSLATIONS.en;


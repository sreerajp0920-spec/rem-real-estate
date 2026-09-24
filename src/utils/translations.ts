export type Language = 'en' | 'hi' | 'kn';

export interface Translations {
  // Brand
  brandName: string;
  brandTagline: string;
  
  // Navigation
  navProperties: string;
  navCompanyInvest: string;
  navPortfolio: string;
  navSearchPlaceholder: string;
  navContactDesk: string;
  
  // Hero
  heroTag: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroSubtitle: string;
  heroExploreBtn: string;
  heroInvestCompanyBtn: string;
  heroDirectDeveloper: string;
  heroZeroBrokerage: string;
  heroReraDiligence: string;
  heroResponseTime: string;
  
  // Hero Views
  viewPool: string;
  viewFacade: string;
  viewSolarium: string;
  
  // Categories
  catAll: string;
  catVillas: string;
  catPenthouses: string;
  catCommercial: string;
  catPreLaunch: string;
  
  // Concept / Manifesto
  conceptPreTitle: string;
  conceptHeading: string;
  conceptDescription: string;
  conceptTitle1: string;
  conceptSubtitle1: string;
  conceptTitle2: string;
  conceptSubtitle2: string;
  
  // Micromarkets
  microExplorerTag: string;
  microExplorerHeading: string;
  microViewResidences: string;
  
  // Property Card
  cardForSale: string;
  cardPreLaunch: string;
  cardReraVerified: string;
  cardWatchTour: string;
  cardConfig: string;
  cardCarpetArea: string;
  cardEfficiency: string;
  cardCoOwnership: string;
  cardNetYield: string;
  cardExplore: string;
  cardInvestBtn: string;
  
  // Corporate Investment
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
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    brandName: 'REM ESTATES',
    brandTagline: 'Architectural Residences • Bengaluru',
    
    navProperties: 'Residences',
    navCompanyInvest: 'Invest in REM Estates',
    navPortfolio: 'Portfolio',
    navSearchPlaceholder: 'Search residences, localities...',
    navContactDesk: 'Advisory: +91 80 4000 8000',
    
    heroTag: 'BENGALURU ARCHITECTURAL COLLECTION',
    heroHeadline1: 'SPACES DESIGNED FOR LIVING.',
    heroHeadline2: 'BUILT TO ENDURE.',
    heroSubtitle: 'Curated private villas, panoramic sky penthouses, and Grade-A commercial tech parks across Indiranagar, Whitefield, and Outer Ring Road. 100% verified legal title clearance and direct developer pricing.',
    heroExploreBtn: 'Explore 25 Available Residences',
    heroInvestCompanyBtn: 'Invest in Company (Equity Round)',
    heroDirectDeveloper: 'DIRECT DEVELOPER REPRESENTATION',
    heroZeroBrokerage: 'Zero Brokerage Guaranteed',
    heroReraDiligence: '100% RERA Diligence',
    heroResponseTime: 'Avg. Response Time: 15 Minutes',
    
    viewPool: '01 / Horizon Pool & Terrace',
    viewFacade: '02 / Double-Height Façade',
    viewSolarium: '03 / Sky Penthouse Solarium',
    
    catAll: 'All Residences',
    catVillas: 'Private Villas',
    catPenthouses: 'Sky Penthouses',
    catCommercial: 'Commercial Hubs',
    catPreLaunch: 'Pre-Launch Projects',
    
    conceptPreTitle: 'THE ARCHITECTURAL STANDARD',
    conceptHeading: 'RESIDENCES DESIGNED FOR PRIVACY, LIGHT AND TIMELESS LIVING.',
    conceptDescription: 'We represent an exclusive collection of verified architectural villas, sky penthouses, and pre-leased tech parks. Every home is vetted by senior advocates with complete 30-year title reports and RERA Karnataka compliance.',
    conceptTitle1: '14 FT Clearances',
    conceptSubtitle1: 'Double-height living volumes',
    conceptTitle2: '100% Clear Titles',
    conceptSubtitle2: '30-year advocate title search',
    
    microExplorerTag: 'INTERACTIVE MICROMARKET EXPLORER',
    microExplorerHeading: 'Click any zone to inspect drive times & pricing',
    microViewResidences: 'View Residences in',
    
    cardForSale: 'FOR SALE',
    cardPreLaunch: 'PRE-LAUNCH',
    cardReraVerified: 'RERA VERIFIED',
    cardWatchTour: '4K Video Tour',
    cardConfig: 'Config',
    cardCarpetArea: 'Carpet Area',
    cardEfficiency: 'Efficiency',
    cardCoOwnership: 'Co-Ownership',
    cardNetYield: 'Net Yield',
    cardExplore: 'Explore',
    cardInvestBtn: 'Invest',
    
    corpModalTitle: 'Invest in REM Estates Pvt. Ltd.',
    corpModalSubtitle: 'Corporate Growth Equity Round • Back South India’s Premier Prop-Tech Brokerage',
    corpRoundDetails: 'Pre-Series A / ₹15 Cr Syndicate',
    corpInstrument: 'Compulsorily Convertible Preference Shares (CCPS)',
    corpMinTicket: 'Min. Investment: ₹5,00,000 (Angel/HNI) • ₹25,00,000 (Institutional)',
    corpPledgeBtn: 'Request Data Room & Term Sheet',
    corpDownloadDeck: 'Download Confidential Pitch Deck (PDF)',
    
    footerSalesSuite: 'PRIVATE CLIENT CONCIERGE & SALES SUITE',
    footerRights: '© 2026 REM Estates India Pvt. Ltd. All rights reserved.',
    footerBackToTop: 'Back to Top',
    footerStaffAccess: 'Staff Access'
  },
  
  hi: {
    brandName: 'रेम एस्टेट्स',
    brandTagline: 'वास्तुशिल्प आवास • बेंगलुरु',
    
    navProperties: 'आवास सूची',
    navCompanyInvest: 'कंपनी में निवेश करें',
    navPortfolio: 'पोर्टफोलियो',
    navSearchPlaceholder: 'आवास, इलाके खोजें...',
    navContactDesk: 'सलाहकार: +91 80 4000 8000',
    
    heroTag: 'बेंगलुरु स्थापत्य संग्रह',
    heroHeadline1: 'जीने के लिए डिज़ाइन किए गए स्थान।',
    heroHeadline2: 'स्थायित्व के लिए निर्मित।',
    heroSubtitle: 'इंदिरानगर, व्हाइटफील्ड और आउटर रिंग रोड में सत्यापित लक्जरी विला, स्काई पेंटहाउस और ग्रेड-ए वाणिज्यिक आईटी पार्क। 100% स्पष्ट कानूनी दस्तावेज और शून्य दलाली।',
    heroExploreBtn: 'उपलब्ध 25 आवास देखें',
    heroInvestCompanyBtn: 'रेम एस्टेट्स में निवेश (इक्विटी राउंड)',
    heroDirectDeveloper: 'सीधे डेवलपर प्रतिनिधित्व',
    heroZeroBrokerage: 'शून्य ब्रोकरेज गारंटी',
    heroReraDiligence: '100% रेरा सत्यापन',
    heroResponseTime: 'औसत प्रतिक्रिया समय: 15 मिनट',
    
    viewPool: '01 / क्षितिज पूल और छत',
    viewFacade: '02 / डबल-ऊंचाई का मुखौटा',
    viewSolarium: '03 / स्काई पेंटहाउस सोलारियम',
    
    catAll: 'सभी संपत्तियां',
    catVillas: 'निजी विला',
    catPenthouses: 'स्काई पेंटहाउस',
    catCommercial: 'वाणिज्यिक हब',
    catPreLaunch: 'प्री-लॉन्च परियोजनाएं',
    
    conceptPreTitle: 'स्थापत्य मानक',
    conceptHeading: 'गोपनीयता, प्रकाश और कालातीत जीवन के लिए निर्मित आवास।',
    conceptDescription: 'हम सत्यापित वास्तुशिल्प विला, स्काई पेंटहाउस और प्री-लीज़्ड आईटी पार्कों का प्रतिनिधित्व करते हैं। प्रत्येक घर को 30-वर्षीय शीर्षक खोज रिपोर्ट और कर्नाटक रेरा अनुपालन के साथ जांचा गया है।',
    conceptTitle1: '14 फीट ऊंचाई',
    conceptSubtitle1: 'डबल-हाइट लिविंग वॉल्यूम',
    conceptTitle2: '100% स्पष्ट शीर्षक',
    conceptSubtitle2: '30-वर्षीय वकील शीर्षक रिपोर्ट',
    
    microExplorerTag: 'इंटरैक्टिव माइक्रომार्केट एक्सप्लोरर',
    microExplorerHeading: 'ड्राइव समय और मूल्य देखने के लिए किसी भी क्षेत्र पर क्लिक करें',
    microViewResidences: 'आवास देखें:',
    
    cardForSale: 'बिक्री के लिए',
    cardPreLaunch: 'प्री-लॉन्च',
    cardReraVerified: 'रेरा सत्यापित',
    cardWatchTour: '4K वीडियो टूर',
    cardConfig: 'कॉन्फ़िग',
    cardCarpetArea: 'कारपेट एरिया',
    cardEfficiency: 'दक्षता',
    cardCoOwnership: 'सह-स्वामित्व',
    cardNetYield: 'शुद्ध यील्ड',
    cardExplore: 'देखें',
    cardInvestBtn: 'निवेश करें',
    
    corpModalTitle: 'रेम एस्टेट्स प्राइवेट लिमिटेड में निवेश करें',
    corpModalSubtitle: 'कॉर्पोरेट विकास इक्विटी राउंड • दक्षिण भारत के अग्रणी प्रॉप-टेक प्लेटफॉर्म में हिस्सेदारी',
    corpRoundDetails: 'प्री-सीरीज़ ए / ₹15 करोड़ सिंडिकेट',
    corpInstrument: 'अनिवार्य परिवर्तनीय वरीयता शेयर (CCPS)',
    corpMinTicket: 'न्यूनतम निवेश: ₹5,00,000 (एंजेल) • ₹25,00,000 (संस्थागत)',
    corpPledgeBtn: 'डेटा रूम और टर्म शीट का अनुरोध करें',
    corpDownloadDeck: 'गोपनीय पिच डेक डाउनलोड करें (PDF)',
    
    footerSalesSuite: 'निजी ग्राहक सलाहकार एवं बिक्री केंद्र',
    footerRights: '© 2026 रेम एस्टेट्स इंडिया प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।',
    footerBackToTop: 'शीर्ष पर वापस जाएं',
    footerStaffAccess: 'स्टाफ लॉगिन'
  },
  
  kn: {
    brandName: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್',
    brandTagline: 'ವಾಸ್ತುಶಿಲ್ಪ ನಿವಾಸಗಳು • ಬೆಂಗಳೂರು',
    
    navProperties: 'ನಿವಾಸಗಳು',
    navCompanyInvest: 'ಕಂಪನಿಯಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ',
    navPortfolio: 'ಪೋರ್ಟ್‌ಫೋಲಿಯೊ',
    navSearchPlaceholder: 'ನಿವಾಸಗಳು, ಪ್ರದೇಶಗಳನ್ನು ಹುಡುಕಿ...',
    navContactDesk: 'ಸಲಹಾ ಡೆಸ್ಕ್: +91 80 4000 8000',
    
    heroTag: 'ಬೆಂಗಳೂರು ವಾಸ್ತುಶಿಲ್ಪ ಸಂಗ್ರಹ',
    heroHeadline1: 'ಜೀವನಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸ್ಥಳಗಳು.',
    heroHeadline2: 'ಶಾಶ್ವತ ಬಾಳಿಕೆಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
    heroSubtitle: 'ಇಂದಿರಾನಗರ, ವೈಟ್‌ಫೀಲ್ಡ್ ಮತ್ತು ಔಟರ್ ರಿಂಗ್ ರೋಡ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಲಾದ ಖಾಸಗಿ ವಿಲ್ಲಾಗಳು, ಸ್ಕೈ ಪೆಂಟ್‌ಹೌಸ್‌ಗಳು ಮತ್ತು ವಾಣಿಜ್ಯ ಟೆಕ್ ಪಾರ್ಕ್‌ಗಳು. 100% ಸ್ಪಷ್ಟ ಕಾನೂನು ದಾಖಲೆಗಳು ಮತ್ತು 0% ದಲ್ಲಾಳಿ ಶುಲ್ಕ.',
    heroExploreBtn: 'ಲಭ್ಯವಿರುವ 25 ನಿವಾಸಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    heroInvestCompanyBtn: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್‌ನಲ್ಲಿ ಹೂಡಿಕೆ (ಇಕ್ವಿಟಿ ಸುತ್ತು)',
    heroDirectDeveloper: 'ನೇರ ಡೆವಲಪರ್ ಪ್ರಾತಿನಿಧ್ಯ',
    heroZeroBrokerage: '0% ದಲ್ಲಾಳಿ ಶುಲ್ಕ ಖಾತರಿ',
    heroReraDiligence: '100% ರೆರಾ ಪರಿಶೀಲನೆ',
    heroResponseTime: 'ಸರಾಸರಿ ಪ್ರತಿಕ್ರಿಯೆ ಸಮಯ: 15 ನಿಮಿಷಗಳು',
    
    viewPool: '01 / ಹಾರಿಜಾನ್ ಪೂಲ್ ಮತ್ತು ಟೆರೇಸ್',
    viewFacade: '02 / ಡಬಲ್-ಹೈಟ್ ಮುಂಭಾಗ',
    viewSolarium: '03 / ಸ್ಕೈ ಪೆಂಟ್‌ಹೌಸ್ ಸೋಲಾರಿಯಂ',
    
    catAll: 'ಎಲ್ಲಾ ನಿವಾಸಗಳು',
    catVillas: 'ಖಾಸಗಿ ವಿಲ್ಲಾಗಳು',
    catPenthouses: 'ಸ್ಕೈ ಪೆಂಟ್‌ಹೌಸ್‌ಗಳು',
    catCommercial: 'ವಾಣಿಜ್ಯ ಕೇಂದ್ರಗಳು',
    catPreLaunch: 'ಪೂರ್ವ ಬಿಡುಗಡೆ ಯೋಜನೆಗಳು',
    
    conceptPreTitle: 'ವಾಸ್ತುಶಿಲ್ಪದ ಗುಣಮಟ್ಟ',
    conceptHeading: 'ಗೌಪ್ಯತೆ, ಬೆಳಕು ಮತ್ತು ಸುಂದರ ಜೀವನಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ನಿವಾಸಗಳು.',
    conceptDescription: 'ನಾವು ಪರಿಶೀಲಿಸಲಾದ ವಾಸ್ತುಶಿಲ್ಪ ವಿಲ್ಲಾಗಳು, ಸ್ಕೈ ಪೆಂಟ್‌ಹೌಸ್‌ಗಳು ಮತ್ತು ಪ್ರೀ-ಲೀಸ್ಡ್ ಟೆಕ್ ಪಾರ್ಕ್‌ಗಳ ಸಂಗ್ರಹವನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತೇವೆ. ಪ್ರತಿಯೊಂದು ಮನೆಯನ್ನು 30 ವರ್ಷಗಳ ಕಾನೂನು ದಾಖಲೆಗಳೊಂದಿಗೆ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.',
    conceptTitle1: '14 ಅಡಿ ಸೀಲಿಂಗ್ ಎತ್ತರ',
    conceptSubtitle1: 'ಡಬಲ್-ಹೈಟ್ ಲಿವಿಂಗ್ ಹಾಲ್',
    conceptTitle2: '100% ಸ್ಪಷ್ಟ ಟೈಟಲ್',
    conceptSubtitle2: '30 ವರ್ಷಗಳ ವಕೀಲರ ಪರಿಶೀಲನೆ',
    
    microExplorerTag: 'ಸಂವಾದಾತ್ಮಕ ಮೈಕ್ರೋಮಾರ್ಕೆಟ್ ಅನ್ವೇಷಕ',
    microExplorerHeading: 'ಪ್ರಯಾಣದ ಸಮಯ ಮತ್ತು ಬೆಲೆಗಳನ್ನು ನೋಡಲು ಯಾವುದೇ ವಲಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ',
    microViewResidences: 'ನಿವಾಸಗಳನ್ನು ವೀಕ್ಷಿಸಿ:',
    
    cardForSale: 'ಮಾರಾಟಕ್ಕಿದೆ',
    cardPreLaunch: 'ಪೂರ್ವ ಬಿಡುಗಡೆ',
    cardReraVerified: 'ರೆರಾ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    cardWatchTour: '4K ವಿಡಿಯೋ ಪ್ರವಾಸ',
    cardConfig: 'ವಿನ್ಯಾಸ',
    cardCarpetArea: 'ಕಾರ್ಪೆಟ್ ವಿಸ್ತೀರ್ಣ',
    cardEfficiency: 'ದಕ್ಷತೆ',
    cardCoOwnership: 'ಸಹ-ಮಾಲೀಕತ್ವ',
    cardNetYield: 'ನಿವ್ವಳ ಆದಾಯ',
    cardExplore: 'ವೀಕ್ಷಿಸಿ',
    cardInvestBtn: 'ಹೂಡಿಕೆ ಮಾಡಿ',
    
    corpModalTitle: 'ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್‌ನಲ್ಲಿ ಹೂಡಿಕೆ ಮಾಡಿ',
    corpModalSubtitle: 'ಕಾರ್ಪೊರೇಟ್ ಬೆಳವಣಿಗೆ ಇಕ್ವಿಟಿ ಸುತ್ತು • ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಪ್ರಾಪ್-ಟೆಕ್ ವೇದಿಕೆಯಲ್ಲಿ ಪಾಲುದಾರರಾಗಿ',
    corpRoundDetails: 'ಪ್ರೀ-ಸೀರೀಸ್ ಎ / ₹15 ಕೋಟಿ ಸಿಂಡಿಕೇಟ್',
    corpInstrument: 'ಕಡ್ಡಾಯ ಪರಿವರ್ತನೀಯ ಆದ್ಯತೆಯ ಷೇರುಗಳು (CCPS)',
    corpMinTicket: 'ಕನಿಷ್ಠ ಹೂಡಿಕೆ: ₹5,00,000 (ಏಂಜೆಲ್) • ₹25,00,000 (ಸಂಸ್ಥೆಗಳು)',
    corpPledgeBtn: 'ಡೇಟಾ ರೂಮ್ ಮತ್ತು ಟರ್ಮ್ ಶೀಟ್ ವಿನಂತಿಸಿ',
    corpDownloadDeck: 'ಪಿಚ್ ಡೆಕ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (PDF)',
    
    footerSalesSuite: 'ಖಾಸಗಿ ಗ್ರಾಹಕ ಕನ್ಸೈರ್ಜ್ ಮತ್ತು ಮಾರಾಟ ಕೇಂದ್ರ',
    footerRights: '© 2026 ರೆಮ್ ಎಸ್ಟೇಟ್ಸ್ ಇಂಡಿಯಾ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    footerBackToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ',
    footerStaffAccess: 'ಸಿಬ್ಬಂದಿ ಪ್ರವೇಶ'
  }
};

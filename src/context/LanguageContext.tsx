import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'te'

type LanguageContextType = {
  lang: Lang
  toggleLang: () => void
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'te' : 'en'))
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

// Small static UI-string dictionary for labels used across components
export const strings = {
  home: { en: 'Home', te: 'హోమ్' },
  about: { en: 'About', te: 'గురించి' },
  products: { en: 'Products', te: 'ఉత్పత్తులు' },
  gallery: { en: 'Gallery', te: 'గ్యాలరీ' },
  contact: { en: 'Contact', te: 'సంప్రదించండి' },
  callNow: { en: 'Call Now', te: 'కాల్ చేయండి' },
  whatsappEnquiry: { en: 'WhatsApp Enquiry', te: 'వాట్సాప్ చేయండి' },
  getQuote: { en: 'Get a Quote', te: 'కోటేషన్ పొందండి' },
  enquireNow: { en: 'Enquire Now', te: 'విచారించండి' },
  aboutHeading: { en: 'About the Business', te: 'వ్యాపారం గురించి' },
  whyChooseUs: { en: 'Why Choose Us', te: 'మమ్మల్ని ఎందుకు ఎంచుకోవాలి' },
  qualityTrust: { en: 'Quality & Trust', te: 'నాణ్యత & నమ్మకం' },
  enquiryQuote: { en: 'Enquiry / Get a Quote', te: 'విచారణ / కోటేషన్' },
  location: { en: 'Location', te: 'లొకేషన్' },
  getDirections: { en: 'Get Directions', te: 'దారి చూపండి' },
  sendEnquiry: { en: 'Send Enquiry', te: 'పంపండి' },
  name: { en: 'Name', te: 'పేరు' },
  phoneNumber: { en: 'Phone Number', te: 'ఫోన్ నంబర్' },
  productRequired: { en: 'Product Required', te: 'కావలసిన ఉత్పత్తి' },
  quantity: { en: 'Quantity', te: 'పరిమాణం' },
  message: { en: 'Message', te: 'సందేశం' },
  gst: { en: 'GST No.', te: 'జీఎస్టీ నెం.' },
  address: { en: 'Address', te: 'చిరునామా' },
  phone: { en: 'Phone', te: 'ఫోన్' },
}

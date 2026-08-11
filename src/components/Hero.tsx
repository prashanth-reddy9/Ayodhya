import { useLanguage, strings } from '../context/LanguageContext'
import { business, telLink, whatsappLink } from '../data/business'
import { PhoneIcon, WhatsAppIcon } from './Icons'
import timberLog from '../assets/Timber_Log.png'

export default function Hero() {
  const { lang } = useLanguage()
  const message = lang === 'te' ? business.whatsappMessageTe : business.whatsappMessageEn

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={timberLog} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/60" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          <span className="inline-block text-gold text-xs font-semibold tracking-widest uppercase border border-gold/40 rounded-full px-4 py-1.5 mb-6">
            {lang === 'te' ? 'నాణ్యమైన కర్ర & నిర్మాణ సామాగ్రి' : 'Quality Timber & Building Materials'}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-cream leading-[1.05] mb-3">
            {lang === 'te' ? business.nameTe : business.nameEn}
          </h1>
          <p className="font-display text-xl sm:text-2xl text-wood-200 mb-6">
            {lang === 'te' ? business.headlineTe : business.headlineEn}
          </p>

          <p className="text-wood-100/90 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            {lang === 'te' ? business.taglineTe : business.taglineEn}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={telLink(business.phones[0])}
              className="inline-flex items-center gap-2 bg-gold hover:bg-wood-300 text-charcoal font-semibold text-sm px-6 py-3.5 rounded transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {strings.callNow[lang]}
            </a>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1FB855] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {strings.whatsappEnquiry[lang]}
            </a>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 border border-wood-200/50 text-cream font-semibold text-sm px-6 py-3.5 rounded hover:bg-cream/10 transition-colors"
            >
              {strings.getQuote[lang]}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-wood-200/80 text-sm">
            <a href={telLink(business.phones[0])} className="hover:text-gold transition-colors">{business.phones[0]}</a>
            <a href={telLink(business.phones[1])} className="hover:text-gold transition-colors">{business.phones[1]}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
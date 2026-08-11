import { useLanguage, strings } from '../context/LanguageContext'
import { business, telLink, whatsappLink } from '../data/business'
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from './Icons'

export default function Contact() {
  const { lang } = useLanguage()
  const address = lang === 'te' ? business.addressTe : business.addressEn
  const message = lang === 'te' ? business.whatsappMessageTe : business.whatsappMessageEn
  const shopLat = 18.026872
  const shopLng = 79.504355


  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${shopLat},${shopLng}`
        

  return (
    <section id="contact" className="section-pad bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-10">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">
            {strings.contact[lang]}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
            {lang === 'te' ? business.nameTe : business.nameEn}
          </h2>
          <p className="font-display text-lg text-wood-200 mt-1">
            {lang === 'te' ? business.headlineTe : business.headlineEn}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="text-xs font-semibold text-wood-300 uppercase tracking-widest mb-2">{strings.phone[lang]}</div>
            <a href={telLink(business.phones[0])} className="block text-lg hover:text-gold transition-colors">{business.phones[0]}</a>
            <a href={telLink(business.phones[1])} className="block text-lg hover:text-gold transition-colors">{business.phones[1]}</a>
          </div>
          <div>
            <div className="text-xs font-semibold text-wood-300 uppercase tracking-widest mb-2">{strings.gst[lang]}</div>
            <div className="text-lg">{business.gst}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-wood-300 uppercase tracking-widest mb-2">{strings.address[lang]}</div>
            <div className="text-base leading-relaxed text-wood-100/90">
              {address.map((line) => <div key={line}>{line}</div>)}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={telLink(business.phones[0])} className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold text-sm px-5 py-3 rounded">
            <PhoneIcon className="w-4 h-4" /> {lang === 'te' ? `కాల్ చేయండి ${business.phones[0]}` : `Call ${business.phones[0]}`}
          </a>
          <a href={telLink(business.phones[1])} className="inline-flex items-center gap-2 border border-cream/30 text-cream font-semibold text-sm px-5 py-3 rounded">
            <PhoneIcon className="w-4 h-4" /> {lang === 'te' ? `కాల్ చేయండి ${business.phones[1]}` : `Call ${business.phones[1]}`}
          </a>
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-5 py-3 rounded">
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-cream/30 text-cream font-semibold text-sm px-5 py-3 rounded">
            <MapPinIcon className="w-4 h-4" /> {strings.getDirections[lang]}
          </a>
        </div>
      </div>
    </section>
  )
}

import { useLanguage, strings } from '../context/LanguageContext'
import { business, telLink, whatsappLink } from '../data/business'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function MobileCTA() {
  const { lang } = useLanguage()
  const message = lang === 'te' ? business.whatsappMessageTe : business.whatsappMessageEn

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-wood-300 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <a
        href={telLink(business.phones[0])}
        className="flex items-center justify-center gap-2 bg-wood-700 text-cream font-semibold text-sm py-4"
      >
        <PhoneIcon className="w-4 h-4" />
        {strings.callNow[lang]}
      </a>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm py-4"
      >
        <WhatsAppIcon className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  )
}

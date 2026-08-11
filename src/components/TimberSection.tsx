import { useLanguage, strings } from '../context/LanguageContext'
import { business, telLink, whatsappLink } from '../data/business'
import { PhoneIcon, WhatsAppIcon, CheckIcon } from './Icons'
import timberLog2 from '../assets/Timber_Log2.png'

export default function TimberSection() {
  const { lang } = useLanguage()
  const message =
    lang === 'te'
      ? 'నమస్కారం, నేను టింబర్ గురించి తెలుసుకోవాలనుకుంటున్నాను.'
      : 'Hello, I would like to enquire about timber.'

  const points =
    lang === 'te'
      ? [
          'నిర్మాణ మరియు ఫర్నిచర్ అవసరాలకు తగిన కర్ర ఎంపిక',
          'వుడ్‌వర్కింగ్ ప్రాజెక్టులకు అనుకూలం',
          'మీ అవసరం ప్రకారం తగిన రకాన్ని ఎంచుకోవడంలో సహాయం',
        ]
      : [
          'Timber selected for construction and furniture use',
          'Suitable for a range of woodworking projects',
          'Guidance in choosing the right variety for your need',
        ]

  return (
    <section className="grid md:grid-cols-2">
      <div className="relative min-h-[280px] md:min-h-0">
        <img src={timberLog2} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="bg-wood-800 text-cream flex flex-col justify-center px-6 sm:px-10 md:px-14 py-14 md:py-20">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">
          {lang === 'te' ? '01 — కర్ర' : '01 — Timber'}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
          {lang === 'te' ? 'నాణ్యమైన కర్ర' : 'Quality Timber'}
        </h2>
        <p className="text-wood-100/90 leading-relaxed mb-6 max-w-md">
          {lang === 'te'
            ? 'నిర్మాణం, ఫర్నిచర్ మరియు వుడ్‌వర్కింగ్ కోసం వివిధ రకాల కర్రను అందిస్తాము. మీ ప్రాజెక్ట్‌కు తగిన కర్రను ఎంచుకోవడంలో మేము మీకు సహాయం చేస్తాము.'
            : 'We supply a range of timber for construction, furniture and woodworking. Our team can help you choose the right timber for your specific project.'}
        </p>
        <ul className="space-y-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-wood-100/90">
              <CheckIcon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <a href={telLink(business.phones[0])} className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold text-sm px-5 py-3 rounded">
            <PhoneIcon className="w-4 h-4" /> {strings.callNow[lang]}
          </a>
          <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-5 py-3 rounded">
            <WhatsAppIcon className="w-4 h-4" /> {strings.whatsappEnquiry[lang]}
          </a>
          <a href="#enquiry" className="inline-flex items-center gap-2 border border-cream/30 text-cream font-semibold text-sm px-5 py-3 rounded">
            {strings.getQuote[lang]}
          </a>
        </div>
      </div>
    </section>
  )
}
import { useLanguage, strings } from '../context/LanguageContext'
import { whatsappLink } from '../data/business'
import { WhatsAppIcon } from './Icons'
import timberPlank from '../assets/Timber_Plank.png'

export default function PlywoodSection() {
  const { lang } = useLanguage()
  const message =
    lang === 'te'
      ? 'నమస్కారం, నేను ప్లైవుడ్ గురించి తెలుసుకోవాలనుకుంటున్నాను.'
      : 'Hello, I would like to enquire about plywood.'

  const uses =
    lang === 'te'
      ? ['ఫర్నిచర్', 'ఇంటీరియర్స్', 'నిర్మాణం', 'క్యాబినెట్లు']
      : ['Furniture', 'Interiors', 'Construction', 'Cabinets']

  return (
    <section className="grid md:grid-cols-2 md:[direction:rtl]">
      <div className="relative min-h-[280px] md:min-h-0 md:[direction:ltr]">
        <img src={timberPlank} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="bg-wood-100 flex flex-col justify-center px-6 sm:px-10 md:px-14 py-14 md:py-20 md:[direction:ltr]">
        <span className="text-wood-500 text-xs font-semibold tracking-widest uppercase mb-3">
          {lang === 'te' ? '02 — ప్లైవుడ్' : '02 — Plywood'}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-800 mb-4">
          {lang === 'te' ? 'ప్లైవుడ్' : 'Plywood'}
        </h2>
        <p className="text-wood-700 leading-relaxed mb-6 max-w-md">
          {lang === 'te'
            ? 'ఫర్నిచర్, ఇంటీరియర్స్ మరియు నిర్మాణ అవసరాలకు తగిన ప్లైవుడ్ కోసం విచారించండి. మీ అవసరాన్ని తెలియజేస్తే, తగిన ఆప్షన్‌ను సూచిస్తాము.'
            : 'Enquire about plywood suitable for furniture, interiors and construction. Let us know your requirement and we\u2019ll point you to the right option.'}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {uses.map((u) => (
            <span key={u} className="text-xs font-medium bg-white border border-wood-300 text-wood-700 rounded-full px-3.5 py-1.5">
              {u}
            </span>
          ))}
        </div>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-fit bg-wood-700 hover:bg-wood-800 text-cream font-semibold text-sm px-5 py-3 rounded transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" /> {strings.enquireNow[lang]}
        </a>
      </div>
    </section>
  )
}
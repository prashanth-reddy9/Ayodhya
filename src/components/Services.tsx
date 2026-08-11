import { useLanguage, strings } from '../context/LanguageContext'
import { business, telLink, whatsappLink } from '../data/business'
import { PhoneIcon, WhatsAppIcon, CheckIcon } from './Icons'
import cuttingMachine from '../assets/Cutting_Machine.png'

export default function Services() {
  const { lang } = useLanguage()
  const message =
    lang === 'te'
      ? 'నమస్కారం, నేను వుడ్ సాయింగ్ / సైజింగ్ సేవల గురించి తెలుసుకోవాలనుకుంటున్నాను.'
      : 'Hello, I would like to enquire about wood sawing and sizing services.'

  const points =
    lang === 'te'
      ? [
          'దుంగలను మీ కొలతలకు కచ్చితంగా కత్తిరించడం',
          'అనుభవజ్ఞులైన కార్మికులతో సామిల్ సేవ',
          'ఫర్నిచర్ మరియు నిర్మాణ అవసరాలకు ప్లానింగ్ & సైజింగ్',
        ]
      : [
          'Logs cut precisely to your required dimensions',
          'On-site sawmill run by skilled, experienced workers',
          'Planing & sizing for furniture and construction needs',
        ]

  return (
    <section className="grid md:grid-cols-2">
      <div className="relative min-h-[280px] md:min-h-0">
        <img src={cuttingMachine} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="bg-wood-800 text-cream flex flex-col justify-center px-6 sm:px-10 md:px-14 py-14 md:py-20">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">
          {lang === 'te' ? '03 — సేవలు' : '03 — Services'}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
          {lang === 'te' ? 'వుడ్ సాయింగ్, ప్లానింగ్ & సైజింగ్' : 'Wood Sawing, Planing & Sizing'}
        </h2>
        <p className="text-wood-100/90 leading-relaxed mb-6 max-w-md">
          {lang === 'te'
            ? 'కలపను ఎక్కువ ఫర్నిచర్‌గా మలచడానికి, మా వద్ద అత్యుత్తమ సామిల్ మరియు నైపుణ్యం కలిగిన కార్మికులు ఉన్నారు, వారు దుంగలను నిర్దేశిత కొలతలకు ప్లాన్ చేసి, కత్తిరిస్తారు. అదనంగా, మేము వుడ్-ప్లానింగ్ సేవలను కూడా అందిస్తాము.'
            : 'To make the most furniture possible out of the wood, we have the best sawmill and skilled workers who plan the sizing and slicing of the logs to the specified sizes. Additionally, we offer wood-planing services.'}
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
        </div>
      </div>
    </section>
  )
}
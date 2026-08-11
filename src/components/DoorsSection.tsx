import { useLanguage, strings } from '../context/LanguageContext'
import { whatsappLink } from '../data/business'
import { WhatsAppIcon } from './Icons'
import { DoorArt } from './WoodArt'

export default function DoorsSection() {
  const { lang } = useLanguage()
  const message =
    lang === 'te'
      ? 'నమస్కారం, నేను తలుపుల గురించి తెలుసుకోవాలనుకుంటున్నాను.'
      : 'Hello, I would like to enquire about doors.'

  const types =
    lang === 'te'
      ? ['ప్రధాన తలుపులు', 'ఇంటీరియర్ తలుపులు', 'చెక్క తలుపులు', 'తలుపు సామాగ్రి']
      : ['Main doors', 'Interior doors', 'Wooden doors', 'Door-related materials']

  return (
    <section className="grid md:grid-cols-2">
      <div className="relative min-h-[280px] md:min-h-0">
        <DoorArt className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="bg-wood-800 text-cream flex flex-col justify-center px-6 sm:px-10 md:px-14 py-14 md:py-20">
        <span className="text-gold text-xs font-semibold tracking-widest uppercase mb-3">
          {lang === 'te' ? '03 — తలుపులు' : '03 — Doors'}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">
          {lang === 'te' ? 'తలుపులు' : 'Doors'}
        </h2>
        <p className="text-wood-100/90 leading-relaxed mb-6 max-w-md">
          {lang === 'te'
            ? 'నివాస మరియు వాణిజ్య అవసరాలకు చెక్క తలుపులు మరియు సంబంధిత సామాగ్రి కోసం విచారించండి.'
            : 'Enquire about wooden doors and related materials for residential and commercial requirements.'}
        </p>
        <ul className="grid grid-cols-2 gap-3 mb-8">
          {types.map((t) => (
            <li key={t} className="text-sm text-wood-100/90 border-l-2 border-gold pl-3">
              {t}
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-fit bg-gold text-charcoal font-semibold text-sm px-5 py-3 rounded"
        >
          <WhatsAppIcon className="w-4 h-4" />
          {lang === 'te' ? 'తలుపుల గురించి విచారించండి' : 'Enquire About Doors'}
        </a>
      </div>
    </section>
  )
}

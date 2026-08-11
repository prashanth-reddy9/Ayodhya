import { useLanguage, strings } from '../context/LanguageContext'
import { business } from '../data/business'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="bg-charcoal-light text-wood-200 pt-12 pb-8 border-t border-wood-700/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-wood-700/40">
          <div>
            <div className="font-display text-xl text-cream mb-2">
              {lang === 'te' ? business.nameTe : business.nameEn}
            </div>
            <p className="text-sm text-wood-300">
              {lang === 'te' ? business.headlineTe : business.headlineEn}
            </p>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-wood-400 uppercase tracking-widest mb-3">
              {strings.products[lang]}
            </h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-gold transition-colors">{lang === 'te' ? 'కర్ర' : 'Timber'}</a></li>
              <li><a href="#products" className="hover:text-gold transition-colors">{lang === 'te' ? 'ప్లైవుడ్' : 'Plywood'}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-wood-400 uppercase tracking-widest mb-3">
              {lang === 'te' ? 'లింకులు' : 'Links'}
            </h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">{strings.home[lang]}</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">{strings.about[lang]}</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">{strings.gallery[lang]}</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">{strings.contact[lang]}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-semibold text-wood-400 uppercase tracking-widest mb-3">
              {strings.contact[lang]}
            </h5>
            <ul className="space-y-2 text-sm">
              <li><a href={`tel:${business.phones[0]}`} className="hover:text-gold transition-colors">{business.phones[0]}</a></li>
              <li><a href={`tel:${business.phones[1]}`} className="hover:text-gold transition-colors">{business.phones[1]}</a></li>
              <li className="text-wood-400">{strings.gst[lang]}: {business.gst}</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-xs text-wood-400 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {business.nameEn} {business.headlineEn}.</span>
          <span>{lang === 'te' ? 'హనుమకొండలో స్థానిక వ్యాపారం' : 'Locally based in Hanumakonda'}</span>
        </div>
      </div>
    </footer>
  )
}
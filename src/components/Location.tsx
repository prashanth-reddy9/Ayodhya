import { useLanguage, strings } from '../context/LanguageContext'
import { business } from '../data/business'
import { MapPinIcon } from './Icons'

// Confirmed GPS coordinates for the depot: 18°01'35.9"N 79°30'15.8"E
const shopLat = 18.0268511
const shopLng = 79.5043258


const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${shopLat},${shopLng}`
const mapsEmbedUrl = `https://www.google.com/maps?q=${shopLat},${shopLng}&z=17&output=embed`

export default function Location() {
  const { lang } = useLanguage()
  const address = lang === 'te' ? business.addressTe : business.addressEn

  return (
    <section className="section-pad bg-wood-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-wood-500 text-xs font-semibold tracking-widest uppercase">
              {strings.location[lang]}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-800 mt-3 mb-5">
              {lang === 'te' ? 'మా షాప్‌ను కనుగొనండి' : 'Find Our Shop'}
            </h2>
            <div className="flex items-start gap-3 text-wood-700 mb-6">
              <MapPinIcon className="w-5 h-5 mt-1 shrink-0 text-wood-500" />
              <div className="leading-relaxed">
                {address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
            <a
              href={mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-wood-700 hover:bg-wood-800 text-cream font-semibold text-sm px-5 py-3 rounded transition-colors"
            >
              <MapPinIcon className="w-4 h-4" />
              {strings.getDirections[lang]}
            </a>
          </div>
          <div className="aspect-[4/3] rounded overflow-hidden border border-wood-200">
            <iframe
              title={lang === 'te' ? 'మా డిపో లొకేషన్' : 'Our depot location'}
              src={mapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
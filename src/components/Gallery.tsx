import { useLanguage } from '../context/LanguageContext'
import timberLog from '../assets/Timber_Log.png'
import timberLog3 from '../assets/Timber_Log3.png'
import timberPlank from '../assets/Timber_Plank.png'
import timberBeam from '../assets/Timber_Beam.png'

export default function Gallery() {
  const { lang } = useLanguage()

  const items = [
    { src: timberLog, te: 'కర్ర దుంగలు', en: 'Timber Logs' },
    { src: timberPlank, te: 'కర్ర పలకలు', en: 'Wooden Planks' },
    { src: timberBeam, te: 'కర్ర దూలాలు', en: 'Wood Beams' }
  ]

  return (
    <section id="gallery" className="section-pad bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <span className="text-wood-500 text-xs font-semibold tracking-widest uppercase">
            {lang === 'te' ? 'గ్యాలరీ' : 'Gallery'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-800 mt-3">
            {lang === 'te' ? 'మా ఉత్పత్తుల గ్యాలరీ' : 'Product Gallery'}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded overflow-hidden group border border-wood-200"
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-cream text-sm font-medium">
                {lang === 'te' ? item.te : item.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
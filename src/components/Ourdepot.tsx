import { useLanguage } from '../context/LanguageContext'
import timberDepotEntry from '../assets/TimberDepoyEntry.png'
import allWoods from '../assets/Allwoods.png'

export default function OurDepot() {
  const { lang } = useLanguage()

  const photos = [
    {
      src: timberDepotEntry,
      te: 'మా టింబర్ డిపో',
      en: 'Our Timber Depot',
    },
    {
      src: allWoods,
      te: 'అన్ని రకాల కర్ర స్టాక్',
      en: 'All Types of Wood in Stock',
    },
  ]

  return (
    <section className="section-pad bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <span className="text-wood-500 text-xs font-semibold tracking-widest uppercase">
            {lang === 'te' ? 'మా డిపో' : 'Our Depot'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-800 mt-3">
            {lang === 'te' ? 'మా డిపోను చూడండి' : 'Take a Look Inside Our Depot'}
          </h2>
          <p className="text-wood-600 mt-3">
            {lang === 'te'
              ? 'మా యార్డ్‌లో లభించే కర్ర రకాలు మరియు స్టాక్ ఇక్కడ చూడవచ్చు.'
              : 'A real look at our yard and the wood stock available on-site.'}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {photos.map((p) => (
            <div
              key={p.en}
              className="relative aspect-[4/3] rounded overflow-hidden group border border-wood-200"
            >
              <img
                src={p.src}
                alt={p.en}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-cream text-sm font-medium">
                {lang === 'te' ? p.te : p.en}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
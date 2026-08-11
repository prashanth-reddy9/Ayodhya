import { useLanguage, strings } from '../context/LanguageContext'
import { woodVarieties } from '../data/products'

export default function About() {
  const { lang } = useLanguage()

  return (
    <section id="about" className="section-pad bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-wood-500 text-xs font-semibold tracking-widest uppercase">
              {lang === 'te' ? 'మా గురించి' : 'About Us'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-800 mt-3 mb-6">
              {strings.aboutHeading[lang]}
            </h2>
            <div className="space-y-4 text-wood-700 leading-relaxed">
              {lang === 'te' ? (
                <>
                  <p>
                    అయోధ్య సామిల్ & టింబర్ డిపో హనుమకొండలో కర్ర, ప్లైవుడ్ మరియు
                    నిర్మాణ సామాగ్రిని అందించే స్థానిక వ్యాపారం. కస్టమర్ల నిర్మాణ మరియు
                    చెక్క పని అవసరాలకు తగిన నాణ్యమైన మెటీరియల్‌ను సరసమైన ధరలకు అందించడమే
                    మా లక్ష్యం.
                  </p>
                  <p>
                    మా వద్ద ఇండియన్ టేకు, నాన్‌టేకు, పెద్దేగి, మద్ది వంటి కర్ర రకాలు
                    అందుబాటులో ఉంటాయి. మీ అవసరానికి తగిన కర్రను ఎంచుకోవడంలో మేము
                    సహాయపడతాము.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ayodhya Sawmill & Timber Depot is a local business in Hanumakonda supplying
                    timber, plywood and related building materials. We focus on
                    providing reliable materials for construction and woodworking
                    requirements at reasonable prices.
                  </p>
                  <p>
                    Wood varieties available include Indian teak, non-teak, peddegi and
                    maddi. Our team helps customers choose materials suited to their
                    specific requirement.
                  </p>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="text-wood-500 text-xs font-semibold tracking-widest uppercase mb-4">
              {lang === 'te' ? 'లభించే కర్ర రకాలు' : 'Wood Varieties Available'}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {woodVarieties.map((w) => (
                <div
                  key={w.en}
                  className="bg-white border border-wood-200 rounded px-4 py-4 shadow-card"
                >
                  <div className="font-display text-lg text-wood-800">
                    {lang === 'te' ? w.te : w.en}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-wood-500 mt-4">
              {lang === 'te'
                ? 'లభ్యత ఎప్పటికప్పుడు మారవచ్చు — దయచేసి కాల్ చేసి ధృవీకరించుకోండి.'
                : 'Availability may vary — please call to confirm current stock.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
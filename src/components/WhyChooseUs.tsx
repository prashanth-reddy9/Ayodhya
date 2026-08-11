import { useLanguage, strings } from '../context/LanguageContext'
import { CheckIcon, PhoneIcon } from './Icons'

export default function WhyChooseUs() {
  const { lang } = useLanguage()

  const cards = [
    {
      icon: CheckIcon,
      titleTe: '100% ఉత్తమ ఉత్పత్తులు',
      titleEn: '100% Best Products',
      descTe: 'మా వద్ద లభించే ప్రతి కర్రలో నాణ్యతకు హామీ.',
      descEn: 'Every piece of wood we sell is backed by our quality commitment.',
    },
    {
      icon: CheckIcon,
      titleTe: 'అన్ని రకాల కర్ర',
      titleEn: 'All Types of Wood',
      descTe: 'ఇండియన్ టేకు, నాన్‌టేకు, పెద్దేగి, మద్ది మొదలగు అన్ని రకాలు ఒకే చోట.',
      descEn: 'Teak, non-teak, peddegi, maddi and more — every variety under one roof.',
    },
    {
      icon: CheckIcon,
      titleTe: 'నాణ్యమైన సామాగ్రి',
      titleEn: 'Quality Materials',
      descTe: 'నిర్మాణ మరియు వుడ్‌వర్కింగ్ అవసరాలకు నమ్మదగిన సామాగ్రి.',
      descEn: 'Reliable materials for construction and woodworking requirements.',
    },
    {
      icon: CheckIcon,
      titleTe: 'కస్టమర్-కేంద్రీకృత సేవ',
      titleEn: 'Customer Focused',
      descTe: 'మీ అవసరానికి తగిన సామాగ్రిని ఎంచుకోవడంలో సహాయం.',
      descEn: 'Helping customers find the right materials for their requirements.',
    },
    {
      icon: CheckIcon,
      titleTe: 'సరసమైన ధరలు',
      titleEn: 'Competitive Pricing',
      descTe: 'నాణ్యమైన ఉత్పత్తులు సరసమైన ధరలకు.',
      descEn: 'Quality products at reasonable prices.',
    },
    {
      icon: CheckIcon,
      titleTe: 'స్థానిక వ్యాపారం',
      titleEn: 'Local Business',
      descTe: 'హనుమకొండ మరియు పరిసర ప్రాంతాల్లో సౌకర్యవంతంగా సేవలు.',
      descEn: 'Conveniently serving customers in Hanumakonda and surrounding areas.',
    },
    {
      icon: PhoneIcon,
      titleTe: 'నేరుగా సంప్రదింపు',
      titleEn: 'Direct Contact',
      descTe: 'ఫోన్ మరియు వాట్సాప్ ద్వారా సులభమైన సంప్రదింపు.',
      descEn: 'Easy access through phone and WhatsApp.',
    },
  ]

  return (
    <section className="section-pad bg-wood-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <span className="text-wood-500 text-xs font-semibold tracking-widest uppercase">
            {lang === 'te' ? 'నమ్మకం' : 'Trust'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-800 mt-3">
            {strings.whyChooseUs[lang]}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.titleEn} className="bg-white border border-wood-200 rounded p-6 shadow-card">
              <div className="w-10 h-10 rounded-full bg-wood-700 text-cream flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg text-wood-800 mb-2">
                {lang === 'te' ? c.titleTe : c.titleEn}
              </h3>
              <p className="text-sm text-wood-600 leading-relaxed">
                {lang === 'te' ? c.descTe : c.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
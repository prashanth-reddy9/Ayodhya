import { useLanguage, strings } from '../context/LanguageContext'
import { ProductCategory } from '../data/products'
import { categoryIcon } from './Icons'
import { business, whatsappLink } from '../data/business'

export default function ProductCard({ category }: { category: ProductCategory }) {
  const { lang } = useLanguage()
  const Icon = categoryIcon[category.icon]
  const name = lang === 'te' ? category.nameTe : category.nameEn
  const message =
    lang === 'te'
      ? `నమస్కారం, నేను ${category.nameTe} గురించి తెలుసుకోవాలనుకుంటున్నాను.`
      : `Hello, I would like to enquire about ${category.nameEn}.`

  return (
    <div className="bg-white border border-wood-200 rounded shadow-card p-6 flex flex-col hover:border-wood-400 transition-colors">
      <div className="w-14 h-14 rounded-full bg-wood-100 flex items-center justify-center text-wood-600 mb-4">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-display text-xl text-wood-800 mb-2">{name}</h3>
      <p className="text-sm text-wood-600 leading-relaxed mb-5 flex-1">
        {lang === 'te' ? category.descriptionTe : category.descriptionEn}
      </p>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-wood-700 hover:text-wood-900 inline-flex items-center gap-1.5"
      >
        {strings.enquireNow[lang]} <span aria-hidden>→</span>
      </a>
    </div>
  )
}

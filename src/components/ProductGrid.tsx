import { useLanguage, strings } from '../context/LanguageContext'
import { productCategories } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const { lang } = useLanguage()

  return (
    <section id="products" className="section-pad bg-wood-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-12">
          <span className="text-wood-500 text-xs font-semibold tracking-widest uppercase">
            {lang === 'te' ? 'మా ఉత్పత్తులు' : 'Our Products'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-800 mt-3">
            {strings.products[lang]}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <ProductCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

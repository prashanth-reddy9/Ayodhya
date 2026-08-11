export type ProductCategory = {
  id: string
  nameTe: string
  nameEn: string
  descriptionTe: string
  descriptionEn: string
  icon: 'timber' | 'plywood' | 'wood' | 'building'
}

export const productCategories: ProductCategory[] = [
  {
    id: 'timber',
    nameTe: 'కర్ర (టింబర్)',
    nameEn: 'Timber',
    descriptionTe: 'నిర్మాణం, ఫర్నిచర్ మరియు ఇతర చెక్క పనులకు అనువైన నాణ్యమైన కర్ర.',
    descriptionEn: 'Quality timber suitable for construction, furniture and other woodworking requirements.',
    icon: 'timber',
  },
  {
    id: 'plywood',
    nameTe: 'ప్లైవుడ్',
    nameEn: 'Plywood',
    descriptionTe: 'ఫర్నిచర్, ఇంటీరియర్స్ మరియు నిర్మాణ అవసరాలకు నమ్మదగిన ప్లైవుడ్ ఆప్షన్లు.',
    descriptionEn: 'Reliable plywood options for furniture, interiors and construction applications.',
    icon: 'plywood',
  },
  {
    id: 'wood-products',
    nameTe: 'కర్ర ఉత్పత్తులు',
    nameEn: 'Wood Products',
    descriptionTe: 'వివిధ నిర్మాణ మరియు వుడ్‌వర్కింగ్ అవసరాలకు నాణ్యమైన కర్ర సామాగ్రి.',
    descriptionEn: 'Quality wood materials for various construction and woodworking needs.',
    icon: 'wood',
  }
]

// Wood varieties as printed on the business card — not invented.
export const woodVarieties = [
  { te: 'ఇండియన్ టేకు', en: 'Indian Teak' },
  { te: 'నాన్‌టేకు', en: 'Non-Teak' },
  { te: 'పెద్దేగి', en: 'Peddegi' },
  { te: 'మద్ది', en: 'Maddi' },
]
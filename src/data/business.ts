// All business information below is taken directly from the provided business card.
// Nothing here (name, numbers, address, GST) has been invented or guessed.

export const business = {
  nameTe: 'అయోధ్య',
  nameEn: 'Ayodhya',

  headlineTe: 'సామిల్ & టింబర్ డిపో',
  headlineEn: 'Sawmill & Timber Depot',

  // Directly from the card: "మా వద్ద ఇండియన్ టేకు, నాన్‌టేకు, పెద్దేగి, మద్ది
  // మొదలగు కర్ర సరసమైన ధరలకు లభించును"
  taglineTe: 'మా వద్ద ఇండియన్ టేకు, నాన్‌టేకు, పెద్దేగి, మద్ది మొదలగు కర్ర సరసమైన ధరలకు లభించును.',
  taglineEn: 'Indian teak, non-teak, peddegi, maddi and other timber varieties — available at reasonable prices.',

  gst: '36BIGPV7564P1Z5',

  phones: ['8978948306', '8500441974'],
  whatsappNumber: '918978948306', // used for wa.me link (India country code + primary number)

  addressTe: ['56-3-31/1/1/వ/1,', 'దేవనపేటి,', 'హనుమకొండ,', 'హనుమకొండ'],
  addressEn: ['56-3-31/1/1/V/1,', 'Devannapeta,', 'Hanumakonda,', 'Hanumakonda'],

  whatsappMessageTe: 'నమస్కారం అయోధ్య టింబర్ డిపో, మీ ఉత్పత్తుల గురించి తెలుసుకోవాలనుకుంటున్నాను.',
  whatsappMessageEn: 'Hello Ayodhya Timber Depot, I would like to enquire about your products.',
}

export const telLink = (num: string) => `tel:${num}`

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`

import { useState, FormEvent } from 'react'
import { useLanguage, strings } from '../context/LanguageContext'
import { business, telLink, whatsappLink } from '../data/business'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function EnquiryForm() {
  const { lang } = useLanguage()
  const [form, setForm] = useState({ name: '', phone: '', product: '', quantity: '', message: '' })

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // No backend is connected — the enquiry is sent via WhatsApp with the
    // details the customer entered, so nothing is silently lost.
    const lines =
      lang === 'te'
        ? [
            'నమస్కారం అయోధ్య టింబర్ డిపో,',
            form.name && `పేరు: ${form.name}`,
            form.phone && `ఫోన్: ${form.phone}`,
            form.product && `కావలసిన ఉత్పత్తి: ${form.product}`,
            form.quantity && `పరిమాణం: ${form.quantity}`,
            form.message && `సందేశం: ${form.message}`,
          ]
        : [
            'Hello Ayodhya Timber Depot,',
            form.name && `Name: ${form.name}`,
            form.phone && `Phone: ${form.phone}`,
            form.product && `Product required: ${form.product}`,
            form.quantity && `Quantity: ${form.quantity}`,
            form.message && `Message: ${form.message}`,
          ]
    const text = lines.filter(Boolean).join('\n')
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full bg-white border border-wood-300 rounded px-4 py-3 text-sm text-wood-800 placeholder:text-wood-400 focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent'

  return (
    <section id="enquiry" className="section-pad bg-wood-800 text-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              {lang === 'te' ? 'విచారణ' : 'Enquiry'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-5">
              {strings.enquiryQuote[lang]}
            </h2>
            <p className="text-wood-100/85 leading-relaxed mb-8 max-w-sm">
              {lang === 'te'
                ? 'ఫారం నింపండి — వాట్సాప్ ద్వారా వివరాలతో నేరుగా మాకు పంపబడుతుంది. లేదా నేరుగా కాల్ చేయండి.'
                : 'Fill in the form — your details are sent to us directly via WhatsApp. Or simply call us.'}
            </p>
            <div className="flex flex-col gap-3">
              <a href={telLink(business.phones[0])} className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold text-sm px-5 py-3 rounded w-fit">
                <PhoneIcon className="w-4 h-4" /> {strings.callNow[lang]} — {business.phones[0]}
              </a>
              <a
                href={whatsappLink(lang === 'te' ? business.whatsappMessageTe : business.whatsappMessageEn)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-5 py-3 rounded w-fit"
              >
                <WhatsAppIcon className="w-4 h-4" /> {lang === 'te' ? 'వాట్సాప్ చేయండి' : 'WhatsApp Us'}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-wood-700/40 border border-wood-600 rounded p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-wood-100/80 mb-1.5">{strings.name[lang]}</label>
              <input required value={form.name} onChange={update('name')} className={inputClass} placeholder={lang === 'te' ? 'మీ పేరు' : 'Your name'} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-wood-100/80 mb-1.5">{strings.phoneNumber[lang]}</label>
              <input required type="tel" value={form.phone} onChange={update('phone')} className={inputClass} placeholder={lang === 'te' ? 'మీ ఫోన్ నంబర్' : 'Your phone number'} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-wood-100/80 mb-1.5">{strings.productRequired[lang]}</label>
              <input value={form.product} onChange={update('product')} className={inputClass} placeholder={lang === 'te' ? 'ఉదా. కర్ర, ప్లైవుడ్' : 'e.g. Timber, Plywood'} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-wood-100/80 mb-1.5">{strings.quantity[lang]}</label>
              <input value={form.quantity} onChange={update('quantity')} className={inputClass} placeholder={lang === 'te' ? 'పరిమాణం' : 'Approximate quantity'} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-wood-100/80 mb-1.5">{strings.message[lang]}</label>
              <textarea value={form.message} onChange={update('message')} rows={3} className={inputClass} placeholder={lang === 'te' ? 'మీ అవసరం గురించి రాయండి' : 'Tell us about your requirement'} />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-wood-300 text-charcoal font-semibold text-sm px-5 py-3.5 rounded transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {strings.sendEnquiry[lang]}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
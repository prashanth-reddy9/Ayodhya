import { useState } from 'react'
import { useLanguage, strings } from '../context/LanguageContext'
import { business, telLink } from '../data/business'
import { PhoneIcon, MenuIcon, CloseIcon } from './Icons'
import ayodhyaLogo from '../assets/Ayodhya_logo.png'

const navItems = [
  { id: 'home', href: '#home' },
  { id: 'about', href: '#about' },
  { id: 'products', href: '#products' },
  { id: 'gallery', href: '#gallery' },
  { id: 'contact', href: '#contact' },
] as const

export default function Navbar() {
  const { lang, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur border-b border-wood-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-wood-700 flex items-center justify-center overflow-hidden">
            <img src={ayodhyaLogo} alt={business.nameEn} className="w-full h-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-wood-800 text-base md:text-lg">
              {lang === 'te' ? business.nameTe : business.nameEn}
            </div>
            <div className="text-[10px] md:text-xs text-wood-500 tracking-wide uppercase">
              {lang === 'te' ? business.headlineTe : business.headlineEn}
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-wood-700 hover:text-wood-900 transition-colors"
            >
              {strings[item.id][lang]}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold text-wood-600 border border-wood-300 rounded px-3 py-1.5 hover:bg-wood-100 transition-colors"
            aria-label="Switch language"
          >
            తెలుగు | English
          </button>
          <a
            href={telLink(business.phones[0])}
            className="inline-flex items-center gap-2 bg-wood-700 hover:bg-wood-800 text-cream text-sm font-semibold px-4 py-2.5 rounded transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            {strings.callNow[lang]}
          </a>
        </div>

        <button
          className="md:hidden text-wood-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-wood-200 px-5 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-lg text-wood-800"
            >
              {strings[item.id][lang]}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-xs font-semibold text-wood-600 border border-wood-300 rounded px-3 py-2 w-fit"
          >
            తెలుగు | English
          </button>
          <a
            href={telLink(business.phones[0])}
            className="inline-flex items-center justify-center gap-2 bg-wood-700 text-cream text-sm font-semibold px-4 py-3 rounded"
          >
            <PhoneIcon className="w-4 h-4" />
            {strings.callNow[lang]}
          </a>
        </div>
      )}
    </header>
  )
}
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductGrid from './components/ProductGrid'
import TimberSection from './components/TimberSection'
import PlywoodSection from './components/PlywoodSection'
import Services from './components/Services'
import OurDepot from './components/Ourdepot'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import EnquiryForm from './components/EnquiryForm'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

export default function App() {
  return (
    <LanguageProvider>
      <div className="pb-16 md:pb-0">
        <Navbar />
        <Hero />
        <About />
        <ProductGrid />
        <TimberSection />
        <PlywoodSection />
        <Services />
        <OurDepot />
        <WhyChooseUs />
        <Gallery />
        <EnquiryForm />
        <Location />
        <Contact />
        <Footer />
        <MobileCTA />
      </div>
    </LanguageProvider>
  )
}
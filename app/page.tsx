import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { ServicesSection } from "@/components/ServicesSection"
import { PricingGrid } from "@/components/PricingGrid"
import { ContactForm } from "@/components/ContactForm"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ServicesSection />
      <PricingGrid />
      <Testimonials />

      {/* Interactive Map (Embedded) */}
      <section className="w-full h-[400px] bg-muted relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.056093552097!2d-98.9056488612061!3d19.336423986938925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e29202029961%3A0xe5493291583ab0c4!2sPante%C3%B3n%20Bethania!5e0!3m2!1ses-419!2smx!4v1707519532655!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}

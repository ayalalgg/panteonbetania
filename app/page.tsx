import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { AmenitiesSection } from "@/components/AmenitiesSection"
import { MembershipsSection } from "@/components/MembershipsSection"
import { Testimonials } from "@/components/Testimonials"
import { ContactForm } from "@/components/ContactForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar />
      <Hero />

      {/* Flow: Hero -> Amenities (Lifestyle) -> Memberships (Product) -> Map -> Social Proof -> Contact */}
      <AmenitiesSection />
      <MembershipsSection />

      {/* Interactive Master Plan (Embedded Map Placeholder) */}
      <section id="mapa" className="w-full bg-primary py-24 text-center">
        <div className="container mx-auto px-6 mb-12">
          <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase font-semibold">
            Ubicación Privilegiada
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
            Master Plan
          </h2>
        </div>

        <div className="w-full h-[500px] relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.056093552097!2d-98.9056488612061!3d19.336423986938925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e29202029961%3A0xe5493291583ab0c4!2sPante%C3%B3n%20Bethania!5e0!3m2!1ses-419!2smx!4v1707519532655!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </section>

      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

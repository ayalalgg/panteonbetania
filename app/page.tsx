import { ListingGallery } from "@/components/ListingGallery"
import { PropertyInfo } from "@/components/PropertyInfo"
import { BrokerProfile } from "@/components/BrokerProfile"
import { StickyAction } from "@/components/StickyAction"
import { AmenitiesSection } from "@/components/AmenitiesSection"
import { Testimonials } from "@/components/Testimonials"
import { MembershipsSection } from "@/components/MembershipsSection"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pb-24 md:pb-0">
      {/* Mobile-first Layout Container */}
      <div className="max-w-screen-md mx-auto bg-white shadow-xl min-h-screen overflow-hidden">

        {/* 1. Gallery Carousel */}
        <ListingGallery />

        {/* 2. Key Info (Price, Title, Specs) */}
        <PropertyInfo />

        {/* 3. Description (Short) */}
        <div className="px-6 py-8">
          <h3 className="font-serif text-lg font-bold text-primary mb-3">Descripción</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Un santuario de paz diseñado para el descanso eterno. Panteón Bethania ofrece perpetuidades en un entorno exclusivo con jardines botánicos, seguridad privada y un servicio de concierge familiar que honra su legado con la mayor dignidad.
          </p>
        </div>

        <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

        {/* 4. Amenities List */}
        <div className="py-4">
          <AmenitiesSection />
        </div>

        <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

        {/* 5. Plans / Memberships */}
        <div className="px-6 py-8">
          <h3 className="font-serif text-lg font-bold text-primary mb-6">Planes Disponibles</h3>
          <MembershipsSection />
        </div>

        <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

        {/* 6. Broker / Concierge */}
        <BrokerProfile />

        {/* 7. Reviews */}
        <div className="bg-muted/10">
          <Testimonials />
        </div>

      </div>

      {/* Sticky Bottom Action (Mobile) */}
      <StickyAction />
    </main>
  )
}

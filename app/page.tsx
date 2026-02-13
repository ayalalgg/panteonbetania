import { ListingGallery } from "@/components/ListingGallery"
import { PropertyInfo } from "@/components/PropertyInfo"
import { BrokerProfile } from "@/components/BrokerProfile"
import { StickyAction } from "@/components/StickyAction"
import { AmenitiesSection } from "@/components/AmenitiesSection"
import { Testimonials } from "@/components/Testimonials"
import { MembershipsSection } from "@/components/MembershipsSection"
import { Separator } from "@/components/ui/separator"
import { DesktopBookingButton } from "@/components/DesktopBookingButton"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans pb-24 md:pb-0">
      {/* Container: Max-width limited on desktop for 'App' feel, but cleaner */}
      <div className="max-w-7xl mx-auto min-h-screen overflow-hidden bg-white shadow-none md:shadow-2xl">

        <div className="grid grid-cols-1 md:grid-cols-5 h-full">

          {/* LEFT COLUMN: Gallery (Sticky on Desktop) */}
          <div className="md:col-span-3 md:h-screen md:sticky md:top-0 md:overflow-hidden bg-gray-100">
            <ListingGallery />
          </div>

          {/* RIGHT COLUMN: Details (Scrollable on Desktop) */}
          <div className="md:col-span-2 md:h-screen md:overflow-y-auto bg-white">
            {/* Key Info */}
            <PropertyInfo />

            {/* Desktop Action Button (Hidden on Mobile) */}
            <div className="hidden md:block px-6 pt-2 pb-6">
              <DesktopBookingButton />
            </div>

            <Separator className="my-0 w-full bg-border/40" />

            {/* Description */}
            <div className="px-6 py-8">
              <h3 className="font-serif text-lg font-bold text-primary mb-3">Descripción</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Un santuario de paz diseñado para el descanso eterno. Panteón Bethania ofrece perpetuidades en un entorno exclusivo con jardines botánicos, seguridad privada y un servicio de concierge familiar que honra su legado con la mayor dignidad.
              </p>
            </div>

            <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

            {/* Amenities */}
            <div className="py-4">
              <AmenitiesSection />
            </div>

            <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

            {/* Memberships */}
            <div className="px-6 py-8">
              <h3 className="font-serif text-lg font-bold text-primary mb-6">Planes Disponibles</h3>
              <MembershipsSection />
            </div>

            <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

            {/* Broker */}
            <BrokerProfile />

            {/* Reviews */}
            <div className="bg-muted/10">
              <Testimonials />
            </div>

            {/* Footer Space on Desktop */}
            <div className="h-12 md:h-24"></div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action (Mobile Only) */}
      <StickyAction />
    </main>
  )
}

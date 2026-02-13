import { ListingGallery } from "@/components/ListingGallery";
import { PropertyInfo } from "@/components/PropertyInfo";
import { BrokerProfile } from "@/components/BrokerProfile";
import { MembershipsSection } from "@/components/MembershipsSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { ContactForm } from "@/components/ContactForm";
import { StickyAction } from "@/components/StickyAction";
import { Footer } from "@/components/Footer";
import { DesktopBookingButton } from "@/components/DesktopBookingButton";
import { VideoSection } from "@/components/VideoSection";
import { MapSection } from "@/components/MapSection";
import { createClient } from "@/utils/supabase/server";
import { Separator } from "@/components/ui/separator";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = await createClient();

  // Fetch Panteon Bethania data
  const { data: location } = await supabase
    .from('locations')
    .select('*')
    .in('slug', ['panteonbethania', 'panteon-bethania']) // Try both potential slugs
    .single();

  // Extract fields
  const galleryImages = location?.gallery && location.gallery.length > 0 ? location.gallery : undefined;
  const mtTitle = location?.name;
  const mtAddress = location?.address;
  const mtTags = location?.tags;
  const mtDescription = location?.description || "Un santuario de paz diseñado para el descanso eterno. Panteón Bethania ofrece perpetuidades en un entorno exclusivo con jardines botánicos, seguridad privada y un servicio de concierge familiar que honra su legado con la mayor dignidad.";
  const mtVideoUrl = location?.video_url;
  const mtMapUrl = location?.map_url;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans pb-24 md:pb-0">

      {/* HERO SECTION: Gallery */}
      <div className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto md:px-6 md:pt-6">
          <div className="rounded-none md:rounded-[2rem] overflow-hidden shadow-none md:shadow-2xl border-none md:border border-white/20">
            <ListingGallery images={galleryImages} />
          </div>
        </div>
      </div>

      {/* CONTENT SECTION: Single Column Centered */}
      <div className="max-w-4xl mx-auto bg-white relative z-10 -mt-6 md:mt-8 rounded-t-[2rem] md:rounded-none shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-none p-6 md:p-0 mb-16 md:mb-24">

        {/* Header Info */}
        <div className="md:text-center md:py-8">
          <PropertyInfo title={mtTitle} address={mtAddress} tags={mtTags} />
        </div>

        {/* Desktop Action */}
        <div className="hidden md:flex justify-center py-6">
          <DesktopBookingButton />
        </div>

        <Separator className="my-6 w-full bg-border/40" />

        {/* Description */}
        <div className="py-2 md:px-8">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4 md:text-center">Descripción</h3>
          <p className="text-muted-foreground leading-loose text-base md:text-lg md:text-center max-w-2xl mx-auto">
            {mtDescription}
          </p>
        </div>

        <Separator className="my-8 w-[80%] mx-auto bg-border/40" />

        {/* Amenities */}
        <div className="py-4">
          <AmenitiesSection />
        </div>

        <Separator className="my-8 w-[80%] mx-auto bg-border/40" />

        {/* Video Tour */}
        <div className="px-6 md:px-0">
          <VideoSection videoUrl={mtVideoUrl} />
        </div>

        <Separator className="my-8 w-[80%] mx-auto bg-border/40" />

        {/* DEFINITION: What is a Gaveta? */}
        <div className="py-8 px-6 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
            Concepto
          </span>
          <h3 className="font-serif text-2xl font-bold text-primary mb-3">
            ¿Qué es una Gaveta?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Una gaveta es un espacio individual de concreto diseñado para resguardar dignamente a un ser querido.
            Nuestras fosas se componen de múltiples gavetas, permitiendo mantener a la familia unida en un mismo lugar.
          </p>
        </div>

        <Separator className="my-8 w-[80%] mx-auto bg-border/40" />

        {/* Plans */}
        <div className="py-4 md:text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-8">Planes Disponibles</h3>
          <MembershipsSection />

          {/* Maintenance Cost Info */}
          <div className="mt-8 mx-auto max-w-3xl px-6">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
              <div className="p-2 bg-primary/10 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Cuota de Mantenimiento Anual</p>
                <p className="text-sm text-muted-foreground">
                  12 UMAS vigentes (Aproximadamente <span className="font-bold text-primary">$1,408.00 MXN</span>).
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 w-[80%] mx-auto bg-border/40" />

        {/* Broker */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <BrokerProfile />
          </div>
        </div>

        <Separator className="my-12 w-[80%] mx-auto bg-border/40" />

        {/* Map */}
        <div className="px-4 md:px-0">
          <MapSection mapUrl={mtMapUrl} address={mtAddress} />
        </div>

        {/* Contact Form */}
        <div id="contact" className="scroll-mt-20 mt-12">
          <ContactForm />
        </div>

      </div>

      <Footer />

      {/* Sticky Bottom Action (Mobile Only) */}
      <StickyAction />
    </main>
  )
}

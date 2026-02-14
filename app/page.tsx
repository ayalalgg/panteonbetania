import { ListingGallery } from "@/components/ListingGallery";
import { BrokerProfile } from "@/components/BrokerProfile";
import { PropertyInfo } from "@/components/PropertyInfo";
import { MembershipsSection } from "@/components/MembershipsSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { ContactForm } from "@/components/ContactForm";
import { StickyAction } from "@/components/StickyAction";
import { DesktopBookingButton } from "@/components/DesktopBookingButton";
import { MapSection } from "@/components/MapSection";
import { ConceptGlossary } from "@/components/ConceptGlossary";
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
    <main className="min-h-screen bg-background text-foreground font-sans">

      {/* HERO SECTION: Gallery (Edge-to-Edge) */}
      <section className="w-full bg-gray-100">
        <div className="max-w-[1600px] mx-auto md:px-6 md:pt-6">
          <div className="md:rounded-[2rem] overflow-hidden shadow-none md:shadow-2xl border-none md:border border-white/20">
            <ListingGallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* CORE INFO: Header & Description (Centered) */}
      <section className="bg-white relative z-10 -mt-8 md:mt-0 rounded-t-[2.5rem] md:rounded-none px-6 md:px-0">
        <div className="max-w-4xl mx-auto py-10 md:py-16">
          <PropertyInfo title={mtTitle} address={mtAddress} tags={mtTags} />

          <div className="hidden md:flex justify-center mt-12 mb-8">
            <DesktopBookingButton />
          </div>

          <Separator className="my-12 opacity-40" />

          <div className="space-y-6 md:text-center">
            <h3 className="font-serif text-3xl font-bold text-primary">Descripción</h3>
            <p className="text-muted-foreground leading-loose text-lg max-w-2xl mx-auto">
              {mtDescription}
            </p>
          </div>
        </div>
      </section>

      {/* AMENITIES & VIDEO TOUR SECTION (Fused Layout) */}
      <AmenitiesSection videoUrl={mtVideoUrl} />

      {/* CONCEPT GLOSSARY SECTION (Unified Definitions) */}
      <ConceptGlossary />

      {/* MEMBERSHIPS (Already Full-Bleed Background) */}
      <section id="planes" className="scroll-mt-20">
        <MembershipsSection />

        {/* Maintenance & Future Costs Info - Integrated below section */}
        <div className="bg-primary py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="p-4 bg-white/20 rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold">Cuota de Mantenimiento Anual</p>
                <p className="text-white/80 leading-relaxed font-light">
                  12 UMAS vigentes (Aproximadamente <span className="font-bold text-accent">$1,408.00 MXN</span>), garantizando la impecabilidad de los jardines a perpetuidad.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="p-4 bg-white/20 rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold">Apertura de Eventos Futuros</p>
                <p className="text-white/80 leading-relaxed font-light">
                  Costo por apertura: <span className="font-bold text-accent">$2,600.00 MXN</span>. Incluye: grabado, toldo, sillas, apertura y cierre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & MAP (Expansive) */}
      <section className="w-full bg-muted/20 py-24 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <MapSection mapUrl={mtMapUrl} address={mtAddress} />
        </div>
      </section>

      {/* GESTIÓN Y RESPALDO: Grupo Funerario Ayala */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">
              Respaldo Institucional
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              Gestión Profesional
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Panteón Bethania es gestionado por <span className="font-bold text-primary">Grupo Funerario Ayala</span>, garantizando excelencia, respeto y el respaldo de una institución líder en cada servicio.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BrokerProfile />
          </div>
        </div>
      </section>

      {/* CONTACT (Clean & Direct) */}
      <section id="contacto" className="scroll-mt-20">
        <ContactForm />
      </section>

      {/* Sticky Bottom Action (Mobile Only) */}
      <StickyAction />
    </main>
  )
}

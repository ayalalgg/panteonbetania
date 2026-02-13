import { ListingGallery } from "@/components/ListingGallery";
import { PropertyInfo } from "@/components/PropertyInfo";
import { BrokerProfile } from "@/components/BrokerProfile";
import { MembershipsSection } from "@/components/MembershipsSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { StickyAction } from "@/components/StickyAction";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { DesktopBookingButton } from "@/components/DesktopBookingButton";
import { createClient } from "@/utils/supabase/server";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = await createClient();

  // Fetch Panteon Bethania data
  const { data: location } = await supabase
    .from('locations')
    .select('*')
    .in('slug', ['panteonbethania', 'panteon-bethania']) // Try both potential slugs
    .single();

  // Extract gallery or use fallback
  const galleryImages = location?.gallery && location.gallery.length > 0
    ? location.gallery
    : undefined;

  // Extract description or other fields if you want to pass them to PropertyInfo later
  // For now, we mainly focus on gallery as requested.

  return (
            </div >

    <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

  {/* Memberships */ }
            <div className="px-6 py-8">
              <h3 className="font-serif text-lg font-bold text-primary mb-6">Planes Disponibles</h3>
              <MembershipsSection />
            </div>

            <Separator className="my-0 w-[90%] mx-auto bg-border/40" />

  {/* Broker */ }
  <BrokerProfile />

  {/* Reviews */ }
  <div className="bg-muted/10">
    <Testimonials />
  </div>

  {/* Footer Space on Desktop */ }
  <div className="h-12 md:h-24"></div>
          </div >
        </div >
      </div >

    {/* Sticky Bottom Action (Mobile Only) */ }
    < StickyAction />
    </main >
  )
}

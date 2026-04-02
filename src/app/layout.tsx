import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/playfair-display"; // Defaults to weight 400
import "@fontsource/playfair-display/700.css"; // Weight 700
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // Weight 700
import { cn } from "@/lib/utils";
import Script from 'next/script';
import { ClientProvider } from "@/context/ClientContext";
import Link from "next/link";
import { AccessBlocker } from "@/components/AccessBlocker";

export const metadata: Metadata = {
  title: "Panteón Bethania | Grupo Funerario Ayala - El Panteón Privado más Exclusivo",
  description: "Panteón Bethania por Grupo Funerario Ayala. El panteón privado líder en Ixtapaluca. Ofrecemos perpetuidades, nichos y servicios funerarios con el respaldo y prestigio de Grupo Ayala.",
  keywords: ["panteon privado ixtapaluca", "servicios funerarios ixtapaluca", "nichos funerarios", "perpetuidad panteon", "panteon bethania", "grupo funerario ayala"],
  openGraph: {
    title: "Panteón Bethania | Grupo Funerario Ayala",
    description: "Santuario de paz y descanso eterno con el respaldo de Grupo Funerario Ayala en Ixtapaluca.",
    url: "https://panteonbethania.com",
    siteName: "Panteón Bethania",
    images: [
      {
        url: "https://res.cloudinary.com/dbnocozci/image/upload/v1770976684/ayala/locations/gallery/bni9meljmkzahpi82yq7.jpg",
        width: 1200,
        height: 630,
        alt: "Edificio Principal Panteón Bethania",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panteón Bethania | Grupo Funerario Ayala",
    description: "Infraestructura moderna y servicios de excelencia por Grupo Funerario Ayala.",
    images: ["https://res.cloudinary.com/dbnocozci/image/upload/v1770976684/ayala/locations/gallery/bni9meljmkzahpi82yq7.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-K753W8TP";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("antialiased min-h-screen bg-background text-foreground font-sans")}>
        <ClientProvider>
          {/* Google Tag Manager */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          
          {/* Fixed Home Button Link to Ayala Funeral */}
          <div className="fixed top-4 left-4 md:top-8 md:left-8 z-[100] print:hidden">
            <a
              href="https://ayalafuneral.com"
              className="block p-1.5 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group ring-1 ring-black/5"
              title="Ir a Ayala Funeral"
            >
              <img
                src="https://res.cloudinary.com/dbnocozci/image/upload/v1766397648/ayala/assets/dntmt8shzyt1aqm9ge3h.png"
                alt="Logo Ayala Funeral"
                className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-sm"
              />
            </a>
          </div>

          {children}
          <AccessBlocker />
        </ClientProvider>
      </body>
    </html>
  );
}

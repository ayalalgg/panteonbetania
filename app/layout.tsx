import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/playfair-display"; // Defaults to weight 400
import "@fontsource/playfair-display/700.css"; // Weight 700
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/700.css"; // Weight 700
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Panteón Bethania | Grupo Funerario Ayala",
  description: "Un espacio de paz y descanso eterno. Panteón Bethania ofrece perpetuidades y servicios funerarios de alta calidad.",
  icons: {
    icon: "https://res.cloudinary.com/dbnocozci/image/upload/v1766397648/ayala/assets/dntmt8shzyt1aqm9ge3h.png",
    apple: "https://res.cloudinary.com/dbnocozci/image/upload/v1766397649/ayala/assets/poztqwhc9tyedvtov8qv.png",
  },
};

import { GoogleTagManager } from '@next/third-parties/google';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-K753W8TP";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <GoogleTagManager gtmId={gtmId} />
      <body className={cn("antialiased min-h-screen bg-background text-foreground font-sans")}>
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
      </body>
    </html>
  );
}

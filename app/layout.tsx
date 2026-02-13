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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("antialiased min-h-screen bg-background text-foreground font-sans")}>
        {children}
      </body>
    </html>
  );
}

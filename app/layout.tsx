import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Panteón Bethania | Ixtapaluca',
  description: 'Panteón privado con opciones a perpetuidad y temporalidad. Un lugar de paz y descanso eterno en San Francisco Acuautla, Ixtapaluca.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

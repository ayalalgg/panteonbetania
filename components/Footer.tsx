"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="font-serif text-3xl font-bold text-accent">
                                Panteón Bethania
                            </span>
                        </Link>
                        <p className="text-primary-foreground/80 leading-relaxed max-w-sm">
                            Honramos la memoria de quienes partieron, ofreciendo un espacio de paz, dignidad y respeto eterno en Ixtapaluca.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-accent transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-accent">Enlaces Rápidos</h3>
                        <ul className="space-y-3">
                            {['Inicio', 'Perpetuidad', 'Temporalidad', 'Servicios', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-accent">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                                <span className="text-primary-foreground/80">
                                    Camino a las Minas S/N, Ixtapaluca, Estado de México
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href="tel:+525545065063" className="text-primary-foreground/80 hover:text-accent transition-colors">
                                    +52 55 4506 5063
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <a href="mailto:info@panteonbethania.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                                    info@panteonbethania.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-primary-foreground/20 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 gap-4">
                    <p>© {new Date().getFullYear()} Grupo Funerario Ayala. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:text-accent transition-colors">Aviso de Privacidad</Link>
                        <Link href="/terminos" className="hover:text-accent transition-colors">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

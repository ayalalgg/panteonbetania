"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-24 pb-12 font-sans relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <span className="font-serif text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                Panteón Bethania
                            </span>
                        </Link>
                        <p className="text-white/70 leading-relaxed max-w-sm font-light">
                            Un legado de paz y distinción. Preservando historias familiares con la dignidad que merecen, en un entorno de belleza perpetua.
                        </p>
                        <div className="flex gap-6 pt-4">
                            <a href="#" className="text-white/60 hover:text-accent transition-colors transform hover:scale-110 duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white/60 hover:text-accent transition-colors transform hover:scale-110 duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-8 text-accent">Explorar Club</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Membresías', href: '#membresias' },
                                { name: 'Amenidades', href: '#amenidades' },
                                { name: 'Master Plan', href: '#mapa' },
                                { name: 'Concierge', href: '#contacto' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-8 text-accent">Concierge</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1Group-hover:scale-110 transition-transform" />
                                <span className="text-white/70 group-hover:text-white transition-colors">
                                    Camino a las Minas S/N, Ixtapaluca, Estado de México
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Phone className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="tel:+525545065063" className="text-white/70 group-hover:text-white transition-colors">
                                    +52 55 4506 5063
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Mail className="w-5 h-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="mailto:concierge@panteonbethania.com" className="text-white/70 group-hover:text-white transition-colors">
                                    concierge@panteonbethania.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="bg-white/10 my-12" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40 gap-6 font-light">
                    <p>© {new Date().getFullYear()} Grupo Funerario Ayala. Club del Eterno Descanso.</p>
                    <div className="flex gap-8">
                        <Link href="/privacidad" className="hover:text-accent transition-colors">Aviso de Privacidad</Link>
                        <Link href="/terminos" className="hover:text-accent transition-colors">Términos del Club</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

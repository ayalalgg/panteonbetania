"use client"

import { MessageCircle, Phone, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BrokerProfile() {
    return (
        <div className="p-5 md:p-8 bg-[#0F2F28] text-white rounded-[2rem] md:rounded-[2.5rem] mx-4 md:mx-0 overflow-hidden shadow-2xl border border-white/5 relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-700" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-6">
                <div className="relative">
                    <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-white/20 shadow-2xl bg-white p-1">
                        <AvatarImage src="https://res.cloudinary.com/dbnocozci/image/upload/v1766397648/ayala/assets/dntmt8shzyt1aqm9ge3h.png" alt="Grupo Funerario Ayala" className="object-contain" />
                        <AvatarFallback className="text-primary font-bold">GA</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg ring-2 ring-[#0F2F28]">
                        <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-green-600 fill-green-100" />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] uppercase font-bold tracking-wider mb-2">
                        Distribuidor Autorizado Premium
                    </div>
                    <h3 className="font-serif text-xl md:text-3xl font-bold text-white tracking-tight mb-2">
                        Grupo Funerario Ayala
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-[10px] md:text-xs font-bold text-white/90 bg-white/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full backdrop-blur-md border border-white/10">
                            4.9 Excelencia en Servicio
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed text-center md:text-left">
                        <span className="text-accent font-bold">¡IMPORTANTE!</span> Solicita tu <span className="underline decoration-accent underline-offset-4">Folio de Seguridad Ayala</span> antes de visitar el panteón para garantizar tus beneficios y atención exclusiva por nuestro personal.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <Button
                        variant="default"
                        className="h-12 md:h-14 bg-accent text-accent-foreground hover:bg-white hover:text-[#0F2F28] font-bold text-base md:text-lg rounded-xl md:rounded-2xl shadow-xl transition-all duration-300 active:scale-95 group"
                        onClick={() => window.open('https://wa.me/525623355155?text=Hola,%20quiero%20generar%20mi%20Folio%20de%20Seguridad%20Ayala%20para%20asegurar%20mis%20beneficios%20en%20Panteón%20Bethania.', '_blank')}
                    >
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 fill-current" />
                        Generar Folio
                    </Button>
                    <Button
                        variant="outline"
                        className="h-12 md:h-14 border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all duration-300 active:scale-95 group"
                        onClick={() => window.location.href = 'tel:+525623355155'}
                    >
                        <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 fill-current" />
                        Llamar Asesor
                    </Button>
                </div>
            </div>
        </div>
    )
}

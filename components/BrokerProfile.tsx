"use client"

import { MessageCircle, Phone, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BrokerProfile() {
    return (
        <div className="p-8 bg-[#0F2F28] text-white rounded-[2.5rem] mx-4 md:mx-0 overflow-hidden shadow-2xl border border-white/5 relative group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-700" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                <div className="relative">
                    <Avatar className="h-20 w-20 border-2 border-white/20 shadow-2xl bg-white p-1">
                        <AvatarImage src="https://res.cloudinary.com/dbnocozci/image/upload/v1766397648/ayala/assets/dntmt8shzyt1aqm9ge3h.png" alt="Grupo Funerario Ayala" className="object-contain" />
                        <AvatarFallback className="text-primary font-bold">GA</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg ring-2 ring-[#0F2F28]">
                        <ShieldCheck className="w-4 h-4 text-green-600 fill-green-100" />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                        Grupo Funerario Ayala
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-xs font-bold text-white/90 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                            4.9 Excelencia
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <p className="text-base text-white/80 font-light leading-relaxed text-center md:text-left max-w-xl">
                    Asesores especializados listos para brindarte la mejor atención y resolver todas tus dudas sobre nuestros planes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <Button
                        variant="default"
                        className="h-14 bg-white text-[#0F2F28] hover:bg-white/90 font-bold text-lg rounded-2xl shadow-xl transition-all duration-300 active:scale-95 group"
                        onClick={() => window.open('https://wa.me/525623355155', '_blank')}
                    >
                        <MessageCircle className="w-5 h-5 mr-3 fill-current" />
                        WhatsApp
                    </Button>
                    <Button
                        variant="outline"
                        className="h-14 border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent rounded-2xl font-bold text-lg transition-all duration-300 active:scale-95 group"
                        onClick={() => window.location.href = 'tel:+525623355155'}
                    >
                        <Phone className="w-5 h-5 mr-3 fill-current" />
                        Llamar
                    </Button>
                </div>
            </div>
        </div>
    )
}

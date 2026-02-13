"use client"

import { MessageCircle, Phone, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BrokerProfile() {
    return (
        <div className="p-6 border-b border-border/40 bg-gradient-to-br from-[#1a3c34] to-[#142f29] text-white">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Avatar className="h-16 w-16 border-2 border-white/20 shadow-xl bg-white p-1">
                            <AvatarImage src="https://res.cloudinary.com/dbnocozci/image/upload/v1766397648/ayala/assets/dntmt8shzyt1aqm9ge3h.png" alt="Grupo Funerario Ayala" className="object-contain" />
                            <AvatarFallback className="text-primary font-bold">GA</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-green-600 fill-green-100" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                                Grupo Funerario Ayala
                            </h3>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                            <div className="flex text-yellow-400">
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                            </div>
                            <span className="text-[10px] font-medium text-white/80 bg-white/10 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                                4.9 Excelencia
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <p className="text-sm text-white/70 font-light leading-relaxed">
                    Asesores especializados listos para brindarte la mejor atención y resolver todas tus dudas sobre nuestros planes.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button
                        variant="default"
                        className="w-full bg-white text-[#1a3c34] hover:bg-white/90 font-semibold shadow-lg group transition-all duration-300"
                        onClick={() => window.open('https://wa.me/525623355155', '_blank')}
                    >
                        <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        WhatsApp
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent backdrop-blur-sm group"
                        onClick={() => window.location.href = 'tel:+525623355155'}
                    >
                        <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Llamar
                    </Button>
                </div>
            </div>
        </div>
    )
}

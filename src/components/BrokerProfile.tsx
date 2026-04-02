"use client"

import { MessageCircle, Phone, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppCapture } from "./WhatsAppCapture"

export function BrokerProfile() {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-primary/5 shadow-2xl relative overflow-hidden group">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                {/* Photo & Badge */}
                <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                            src="https://res.cloudinary.com/dbnocozci/image/upload/v1770976684/ayala/locations/gallery/pjt6m4e2g9w1zqy3x5f2.jpg" 
                            alt="Asesor Grupo Funerario Ayala"
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-accent text-primary px-4 py-2 rounded-2xl shadow-xl border-4 border-white">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-accent">Asesoría Directa</span>
                        <h4 className="text-3xl font-serif font-bold text-primary italic">Grupo Funerario Ayala</h4>
                        <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Portal Autorizado • Panteón Bethania</p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-md">
                        Evita intermediarios y asegura el mejor precio. Al contactarnos, generamos tu <span className="font-bold text-primary underline decoration-accent decoration-2 underline-offset-4">Folio de Seguridad Ayala</span>, garantizando que tu atención sea directa con nosotros al llegar a las instalaciones.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6">
                        <WhatsAppCapture>
                            {(handleWhatsAppClick) => (
                                <Button
                                    variant="default"
                                    className="h-12 md:h-14 bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-lg rounded-xl md:rounded-2xl shadow-xl transition-all duration-300 active:scale-95 group"
                                    onClick={() => handleWhatsAppClick('Quiero generar mi Folio de Seguridad Ayala para asegurar mis beneficios en Panteón Bethania.')}
                                >
                                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 fill-current text-accent" />
                                    Generar Folio
                                </Button>
                            )}
                        </WhatsAppCapture>
                        <Button
                            variant="outline"
                            className="h-12 md:h-14 border-primary/20 text-primary hover:bg-primary/5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all duration-300 active:scale-95 group"
                            onClick={() => window.location.href = 'tel:+525623355155'}
                        >
                            <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 fill-current" />
                            Llamar Asesor
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

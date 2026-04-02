"use client"

import { motion } from "framer-motion"
import { Search, FileText, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Elección del Espacio",
        description: "Explora nuestras opciones de Perpetuidad, Nichos o Temporalidad. Nuestros asesores te ayudarán a encontrar la ubicación perfecta dentro de nuestros jardines.",
        icon: Search,
        color: "bg-blue-500"
    },
    {
        number: "02",
        title: "Personalización del Plan",
        description: "Elige entre pago de contado o financiamiento de hasta 35 meses. Adaptamos el plan a tus posibilidades financieras actuales.",
        icon: FileText,
        color: "bg-emerald-500"
    },
    {
        number: "03",
        title: "Formalización Legal",
        description: "Firmamos el contrato de prestación de servicios. Recibes tu documentación oficial que avala tu propiedad o derecho de uso.",
        icon: ShieldCheck,
        color: "bg-accent"
    },
    {
        number: "04",
        title: "Tranquilidad Total",
        description: "Desde este momento, tu familia cuenta con el respaldo de Panteón Bethania. Estamos contigo en cada paso del camino, 24/7.",
        icon: HeartHandshake,
        color: "bg-primary"
    }
]

export function ProcessTimeline() {
    return (
        <section className="py-32 px-6 bg-gradient-to-b from-white to-muted/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-bold px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10"
                        >
                            Pasos Simples
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-serif font-bold text-primary tracking-tight"
                        >
                            Tu Camino a la <span className="text-accent italic">Protección</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg font-light max-w-sm leading-relaxed"
                    >
                        Proceso transparente y humano, diseñado para brindarte seguridad en los momentos que más importan.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="space-y-8">
                                    {/* Icon & Number Header */}
                                    <div className="flex items-center gap-6 lg:flex-col lg:items-start group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="relative">
                                            <div className="w-20 h-20 rounded-[2rem] bg-white border border-primary/5 shadow-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                <step.icon className="w-9 h-9" />
                                            </div>
                                            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-primary font-bold text-xs flex items-center justify-center shadow-lg border-4 border-white">
                                                {step.number}
                                            </div>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="hidden lg:block absolute top-[120px] -right-[15%] opacity-20">
                                                <ArrowRight className="w-8 h-8 text-primary" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground font-light leading-relaxed text-base">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Decorative Dot (Desktop) */}
                                    <div className="hidden lg:flex justify-center pt-8">
                                        <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-accent group-hover:scale-150 transition-all duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action Banner */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-10 md:p-16 rounded-[4rem] bg-primary text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
                    <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" />
                    
                    <div className="relative z-10 space-y-4 text-center md:text-left">
                        <h4 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
                            ¿Listo para comenzar?
                        </h4>
                        <p className="text-white/60 text-lg md:text-xl font-light max-w-xl">
                            Te acompañamos en este proceso con respeto y profesionalismo. Inicia tu trámite hoy mismo con asesoría especializada.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <button 
                            onClick={() => window.open('https://wa.me/525623355155?text=Hola, quiero iniciar el proceso de contratación para un servicio funerario.', '_blank')}
                            className="bg-accent text-primary hover:bg-white text-lg font-bold px-12 py-5 rounded-2xl transition-all shadow-2xl hover:scale-[1.02] active:scale-95 flex items-center gap-4"
                        >
                            Comenzar Proceso
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

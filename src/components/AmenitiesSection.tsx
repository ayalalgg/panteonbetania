"use client"

import { ShieldCheck, Flower2, Home, Map } from "lucide-react"
import { motion } from "framer-motion"
import { VideoSection } from "./VideoSection"

const amenities = [
    {
        icon: Flower2,
        title: "Jardines Botánicos",
        desc: "Extensas áreas de césped y flora endémica cuidadosamente mantenidas para crear un oasis de paz y reflexión solemne.",
    },
    {
        icon: ShieldCheck,
        title: "Protocolo de Seguridad",
        desc: "Vigilancia privada 24/7 y control de acceso digitalizado para garantizar la tranquilidad total de su familia y el resguardo del sitio.",
    },
    {
        icon: Home,
        title: "Galería de Nichos Elite",
        desc: "Instalaciones de primer nivel con acabados de lujo, diseñadas para brindar confort térmico y visual en cada visita.",
    },
    {
        icon: Map,
        title: "Ubicación Estratégica",
        desc: "Fácil acceso y rutas optimizadas dentro del recinto, con señalética clara y senderos amplios para recorridos dignos.",
    },
]

interface AmenitiesSectionProps {
    videoUrl?: string | null;
}

export function AmenitiesSection({ videoUrl }: AmenitiesSectionProps) {
    return (
        <section id="amenidades" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muted/10 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT SIDE: Description & Items */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-bold"
                            >
                                Valor Agregado
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight tracking-tight"
                            >
                                Amenidades que <br /> <span className="text-accent italic">honran la vida</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-xl italic"
                            >
                                "Un santuario diseñado para el descanso eterno, donde cada detalle ha sido pensado para brindar paz y distinción."
                            </motion.p>
                        </div>

                        <div className="full-bleed-carousel gap-8 py-4 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 sm:overflow-visible sm:mx-0 sm:px-0 sm:snap-none">
                            {amenities.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-start gap-5 group snap-center min-w-[280px] sm:min-w-0"
                                >
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-primary/5 shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-serif text-xl font-bold text-primary tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground text-base leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Video Tour */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full group"
                        >
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <div className="text-center mb-8 lg:hidden">
                                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Experiencia Virtual</span>
                                <h3 className="text-3xl font-serif font-bold text-primary">Recorrido por el Santuario</h3>
                            </div>

                            <div className="rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-primary/10 group-hover:shadow-accent/10 transition-shadow duration-700">
                                <VideoSection videoUrl={videoUrl} />
                            </div>
                            
                            {/* Visual cue for video */}
                            <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
                                <div className="flex -space-x-2">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted bg-cover" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=${i}')` }} />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground font-semibold italic">+1,200 familias confían en nosotros</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

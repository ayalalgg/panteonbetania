"use client"

import { ShieldCheck, Flower2, Home } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { VideoSection } from "./VideoSection"

const amenities = [
    {
        icon: Flower2,
        title: "Jardines de Pasto",
        desc: "Extensas áreas de césped cuidadosamente mantenidas para un entorno digno y solemne.",
    },
    {
        icon: ShieldCheck,
        title: "Seguridad 24/7",
        desc: "Monitoreo constante y acceso controlado para garantizar la paz absoluta.",
    },
    {
        icon: Home,
        title: "Instalaciones Cómodas",
        desc: "Espacios funcionales de primer nivel diseñados para brindar confort en cada visita.",
    },
]

interface AmenitiesSectionProps {
    videoUrl?: string | null;
}

export function AmenitiesSection({ videoUrl }: AmenitiesSectionProps) {
    return (
        <section id="amenidades" className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* LEFT SIDE: Description & Items */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-6">
                            <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">
                                Infraestructura Elite
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                                Amenidades que <br className="hidden md:block" /> hacen la diferencia
                            </h2>
                            <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
                                Un espacio que cuenta con infraestructura moderna y extensas áreas de pasto diseñadas para honrar la memoria de sus seres queridos con la mayor distinción.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {amenities.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg font-bold text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
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
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full"
                        >

                            <div className="text-center mb-6 lg:hidden">
                                <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-2 block">Experiencia Virtual</span>
                                <h3 className="text-2xl font-serif font-bold text-primary">Recorrido por las Instalaciones</h3>
                            </div>

                            <div className="rounded-2xl overflow-hidden border border-primary/10">
                                <VideoSection videoUrl={videoUrl} />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}

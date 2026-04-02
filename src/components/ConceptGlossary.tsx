"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Flower2, Box, Clock } from "lucide-react"

const concepts = [
    {
        title: "Perpetuidad",
        icon: ShieldCheck,
        desc: "Propiedad definitiva bajo tierra en jardines, con derecho de uso para siempre.",
        badge: "Garantía"
    },
    {
        title: "Nicho",
        icon: Flower2,
        desc: "Espacio en muro con cristal templado para una vista digna y honorable.",
        badge: "Exclusivo"
    },
    {
        title: "Gaveta",
        icon: Box,
        desc: "Espacio individual de concreto diseñado para el resguardo digno de un ser querido.",
        badge: "Fundamental"
    },
    {
        title: "Temporalidad",
        icon: Clock,
        desc: "Uso por periodo determinado (7 años) en espacios individuales sobre tierra (mural).",
        badge: "Flexible"
    }
]

export function ConceptGlossary() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase font-bold">
                        Glosario de Servicios
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
                        Comprende tu Inversión
                    </h2>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        Conoce los conceptos clave que definen la excelencia y el resguardo en Panteón Bethania.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {concepts.map((concept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-muted/5 p-8 rounded-[2.5rem] border border-primary/5 hover:border-primary/10 hover:bg-muted/10 transition-all duration-300 group relative"
                        >
                            <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded-full">
                                    {concept.badge}
                                </span>
                            </div>

                            <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                                <concept.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-serif font-bold text-primary mb-3">
                                {concept.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed font-light">
                                {concept.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { ShieldCheck, Flower2, Clock, Map, UserCheck, Coffee } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const amenities = [
    {
        icon: Flower2,
        title: "Jardines Botánicos",
        desc: "Paisajismo de autor con especies endémicas, diseñado para la contemplación.",
    },
    {
        icon: ShieldCheck,
        title: "Seguridad Elite 24/7",
        desc: "Monitoreo constante y acceso controlado para garantizar tu privacidad y paz.",
    },
    {
        icon: UserCheck,
        title: "Concierge Familiar",
        desc: "Asistencia personalizada para cualquier requerimiento durante tu visita.",
    },
    {
        icon: Coffee,
        title: "Lounge de Homenaje",
        desc: "Espacios privados y confortables para reuniones familiares íntimas.",
    },
]

export function AmenitiesSection() {
    return (
        <section id="amenidades" className="py-24 bg-background relative overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                        Experiencia Premium
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Amenidades Exclusivas
                    </h2>
                    <p className="text-muted-foreground text-lg font-sans font-light max-w-2xl mx-auto leading-relaxed">
                        Más que un panteón, un santuario diseñado con los estándares de un club privado, donde cada detalle honra la memoria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-none bg-transparent group">
                                <CardContent className="p-6 text-center space-y-6">
                                    <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500 ease-out shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                                        <item.icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-primary mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

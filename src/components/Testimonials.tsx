"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "La paz que se respira aquí es indescriptible. Es, sin duda, el lugar más digno para honrar a quienes amamos.",
        author: "Familia Montiel",
        role: "Miembros Fundadores"
    },
    {
        quote: "La atención del concierge superó todas mis expectativas. Un servicio impecable en los momentos más delicados.",
        author: "Dr. Roberto Villalobos",
        role: "Propietario de Residencia"
    },
    {
        quote: "Los jardines son una obra de arte. Venir aquí no se siente como visitar un panteón, sino un santuario de memoria.",
        author: "Arq. Sofía Méndez",
        role: "Socia del Club"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background border-t border-primary/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                        Voces de Nuestra Comunidad
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Testimonios</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="border-none shadow-sm bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="pt-10 px-8 pb-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                                    <Quote className="w-5 h-5 fill-current" />
                                </div>
                                <p className="font-serif text-lg italic text-primary/80 mb-8 leading-relaxed">
                                    "{item.quote}"
                                </p>
                                <div className="mt-auto">
                                    <p className="font-bold font-sans text-primary uppercase tracking-wide text-sm">{item.author}</p>
                                    <div className="h-0.5 w-8 bg-accent mx-auto my-2" />
                                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">{item.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "En momentos tan difíciles, encontrar un lugar que trate a tu familia con tanto respeto y dignidad es un alivio. Gracias por todo.",
        author: "Familia Hernández",
        role: "Cliente Perpetuidad"
    },
    {
        quote: "Las instalaciones son hermosas y siempre están impecables. Es un lugar de verdadera paz para visitar a nuestros seres queridos.",
        author: "Roberto Martínez",
        role: "Visitante Recurrente"
    },
    {
        quote: "El proceso fue muy claro y el personal muy amable. Nos ayudaron a tomar la mejor decisión sin presionarnos.",
        author: "Ana López",
        role: "Cliente Previsión"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Testimonios</h2>
                    <p className="text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
                        La confianza de las familias es nuestro mayor reconocimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="border-none shadow-md bg-muted/30 hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8 px-8">
                                <Quote className="w-10 h-10 text-accent/40 mb-4" />
                                <p className="font-serif text-lg italic text-foreground/80 mb-6">
                                    "{item.quote}"
                                </p>
                                <div>
                                    <p className="font-bold font-sans text-primary">{item.author}</p>
                                    <p className="text-sm text-muted-foreground font-sans">{item.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const memberships = [
    {
        title: "Suite Memorial",
        subtitle: "Perpetuidad 2 Gavetas",
        price: "Consultar",
        features: [
            "Título de Propiedad a Perpetuidad",
            "Capacidad para 2 personas",
            "Ubicación en Jardín Central",
            "1er año de mantenimiento incluido",
        ],
        highlight: false,
    },
    {
        title: "Residencia Familiar",
        subtitle: "Perpetuidad 4 Gavetas",
        price: "Recomendado",
        features: [
            "Título de Propiedad a Perpetuidad",
            "Capacidad para 4 personas",
            "Ubicación Premium (Frente a Lagos)",
            "3 años de mantenimiento incluido",
            "Servicio de Concierge Prioritario"
        ],
        highlight: true,
    },
    {
        title: "Membresía Temporal",
        subtitle: "Temporalidad 7 Años",
        price: "Flexible",
        features: [
            "Derecho de uso por 7 años",
            "Renovación garantizada",
            "Mantenimiento anual incluido",
            "Opción a compra definitiva",
        ],
        highlight: false,
    },
]

export function MembershipsSection() {
    return (
        <section id="membresias" className="py-32 bg-primary relative text-primary-foreground">
            {/* Background Texture/Pattern could go here */}

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                            Legado y Pertenencia
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                            Suscripciones & Residencias
                        </h2>
                        <p className="text-white/70 text-lg font-sans font-light">
                            Elija el espacio que honrará su historia. Propiedades a perpetuidad con plusvalía garantizada.
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-accent text-accent hover:bg-accent hover:text-primary-foreground font-serif tracking-wide"
                        onClick={() => window.open('https://wa.me/525545065063', '_blank')}
                    >
                        Agendar Cita con Asesor
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {memberships.map((plan, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "relative border-none overflow-hidden transition-all duration-500 hover:-translate-y-2",
                                // Glassmorphism effect
                                "bg-white/5 backdrop-blur-md border border-white/10",
                                plan.highlight ? "ring-1 ring-accent shadow-[0_0_40px_rgba(212,175,55,0.2)]" : "hover:bg-white/10"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-accent text-primary font-bold text-xs uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                                    Residencia Destacada
                                </div>
                            )}

                            <CardContent className="p-8 space-y-8">
                                <div className="space-y-2">
                                    <h3 className="font-serif text-2xl font-medium text-white">
                                        {plan.title}
                                    </h3>
                                    <p className="text-accent font-sans text-sm uppercase tracking-wider font-semibold">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-accent/50 to-transparent" />

                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-4 text-white/80 font-sans font-light text-sm">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={cn(
                                        "w-full py-6 text-sm tracking-wide uppercase font-semibold transition-all duration-300",
                                        plan.highlight
                                            ? "bg-accent text-primary hover:bg-white"
                                            : "bg-white/10 text-white hover:bg-white hover:text-primary"
                                    )}
                                    onClick={() => window.open(`https://wa.me/525545065063?text=Me interesa la ${plan.title}`, '_blank')}
                                >
                                    Solicitar Información
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

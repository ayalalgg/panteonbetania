"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const pricingPlans = [
    {
        title: "Fosa 2 Gavetas",
        price: 29720,
        enganche: 7000,
        features: ["Capacidad para 2 personas", "Ubicación General"],
        financing: [
            { months: 11, monthly: 2219, total: 31404 },
            { months: 23, monthly: 1139, total: 33192 },
            { months: 35, monthly: 802, total: 35064 },
        ]
    },
    {
        title: "Fosa 3 Gavetas",
        price: 41720,
        enganche: 8885,
        features: ["Capacidad para 3 personas", "Ubicación General"],
        financing: [
            { months: 11, monthly: 3204, total: 44124 },
            { months: 23, monthly: 1643, total: 46656 },
            { months: 35, monthly: 1157, total: 49356 },
        ]
    },
    {
        title: "Fosa 4 Gavetas",
        price: 48300,
        enganche: 10000,
        features: ["Capacidad para 4 personas", "Ubicación General"],
        financing: [
            { months: 11, monthly: 3694, total: 50628 },
            { months: 23, monthly: 1874, total: 53088 },
            { months: 35, monthly: 1305, total: 55656 },
        ]
    },
    {
        title: "Fosa 5 Gavetas",
        price: 55800,
        enganche: 10500,
        features: ["Capacidad para 5 personas", "Ubicación General"],
        financing: [
            { months: 11, monthly: 4315, total: 57960 },
            { months: 23, monthly: 2162, total: 60216 },
            { months: 35, monthly: 1488, total: 62568 },
        ]
    }
]

// ... (MembershipsSection component restored)

export function MembershipsSection() {
    return (
        <section id="planes" className="py-24 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                        Inversión Inteligente
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                        Planes a Perpetuidad
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto font-light">
                        Propiedad <strong>Bajo Tierra</strong> en hermosos jardines con pasto.
                        <br />
                        Incluye: Lápida, florero y derecho a perpetuidad.
                    </p>
                </div>

                {/* Perpetuity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>

                {/* Temporalities Section */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-primary px-4 text-sm text-white/50 uppercase tracking-widest">Opciones Flexibles</span>
                    </div>
                </div>

                <div className="mt-16 text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
                        Temporalidades
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto font-light">
                        Espacios individuales <strong>Sobre Tierra</strong> (Gavetas Murales).
                    </p>
                </div>

                <div className="max-w-md mx-auto">
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Gaveta Temporal</h3>
                            <div className="flex justify-center items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold text-accent">
                                    $9,500
                                </span>
                                <span className="text-sm text-white/60">MXN / Persona</span>
                            </div>

                            <ul className="space-y-3 mb-8 text-left inline-block">
                                <li className="flex items-center gap-3 text-sm text-white/80">
                                    <Check className="w-4 h-4 text-accent" />
                                    <span>Ubicación: Sobre Tierra (Mural)</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white/80">
                                    <Check className="w-4 h-4 text-accent" />
                                    <span>Capacidad: 1 Persona</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white/80">
                                    <Check className="w-4 h-4 text-accent" />
                                    <span>Ideal para necesidad inmediata</span>
                                </li>
                            </ul>

                            <Button
                                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                                onClick={() => window.open(`https://wa.me/525545065063?text=Me interesa una Gaveta Temporal`, '_blank')}
                            >
                                Solicitar Información
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function PricingCard({ plan }: { plan: any }) {
    const [showFinancing, setShowFinancing] = useState(false)

    return (
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-300">
            <CardContent className="p-6">
                <div className="mb-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{plan.title}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold text-accent">
                            ${plan.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-white/60">MXN Contado</span>
                    </div>

                    {/* TOTAL INITIAL PAYMENT CALCULATION */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 space-y-2">
                        <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                            <span className="text-sm font-semibold text-white">Pago Inicial Total</span>
                            <span className="text-lg font-bold text-accent">
                                ${(plan.enganche + 2600 + 1408).toLocaleString()}
                            </span>
                        </div>

                        <div className="text-[10px] space-y-1 text-white/60">
                            <div className="flex justify-between">
                                <span>Enganche:</span>
                                <span>${plan.enganche.toLocaleString()}</span>
                            </div>
                            <div className="space-y-0.5">
                                <div className="flex justify-between">
                                    <span>Gastos de Apertura:</span>
                                    <span>$2,600</span>
                                </div>
                                <p className="text-[9px] text-white/40 italic leading-tight pl-2">
                                    * Incluye: Grabado, toldo, sillas, apertura y cierre.
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <span>1ª Anualidad Mantenimiento:</span>
                                <span>$1,408</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                            <Check className="w-4 h-4 text-accent" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <Button
                    variant="ghost"
                    className="w-full justify-between text-white/90 hover:text-white hover:bg-white/10 mb-4 group"
                    onClick={() => setShowFinancing(!showFinancing)}
                >
                    <span className="text-sm font-medium">Ver Financiamiento</span>
                    {showFinancing ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>

                <AnimatePresence>
                    {showFinancing && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-3 bg-black/20 rounded-lg p-3 mb-6">
                                {plan.financing.map((opt: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center text-sm border-b border-white/10 last:border-0 pb-2 last:pb-0">
                                        <span className="text-white/70">{opt.months} Meses</span>
                                        <div className="text-right">
                                            <div className="text-accent font-bold">${opt.monthly.toLocaleString()}/mes</div>
                                            <div className="text-[10px] text-white/40">Total: ${opt.total.toLocaleString()}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Button
                    className="w-full bg-accent text-primary hover:bg-white font-semibold"
                    onClick={() => window.open(`https://wa.me/525545065063?text=Me interesa información sobre ${plan.title}`, '_blank')}
                >
                    Solicitar
                </Button>
            </CardContent>
        </Card>
    )
}

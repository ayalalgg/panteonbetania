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
        features: ["Capacidad para 3 personas", "Ubicación Preferencial"],
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
        features: ["Capacidad para 4 personas", "Ubicación Premium"],
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
        features: ["Capacidad para 5 personas", "Ubicación Familiar"],
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
                        Elija la opción que mejor se adapte a su familia. Todos nuestros precios incluyen IVA y garantizan la propiedad a perpetuidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
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
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-accent">
                            ${plan.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-white/60">MXN Contado</span>
                    </div>

                    <div className="mt-2 space-y-1">
                        <p className="text-sm font-semibold text-white/80">
                            Enganche: ${plan.enganche.toLocaleString()}
                        </p>
                        <div className="text-xs text-white/60">
                            <span className="text-accent">+ $2,600</span> por Gastos de Apertura
                            <p className="text-[10px] text-white/40 mt-0.5 leading-tight">
                                (Incluye: Grabado de cripta, toldo, sillas, apertura y cierre)
                            </p>
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

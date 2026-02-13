"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Star } from "lucide-react"
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

const nichoPlans = [
    {
        title: "Nicho 1 Urna (Fila 1, 2, 5, 6)",
        price: 13600,
        enganche: 4080,
        features: ["Capacidad: 1 Urna", "Ubicación: Filas 1, 2, 5, 6", "Nicho en Muro"],
        financing: [
            { months: 11, monthly: 935, total: 14365 },
            { months: 23, monthly: 483, total: 15189 },
            { months: 35, monthly: 342, total: 16050 },
        ]
    },
    {
        title: "Nicho 1 Urna (Fila 3 y 4)",
        price: 12600,
        enganche: 3780,
        features: ["Capacidad: 1 Urna", "Ubicación: Filas 3 y 4 (Altura Media)", "Nicho en Muro"],
        financing: [
            { months: 11, monthly: 867, total: 13317 },
            { months: 23, monthly: 447, total: 14061 },
            { months: 35, monthly: 317, total: 14875 },
        ]
    },
    {
        title: "Nicho 4 Urnas (Fila 1, 2, 5, 6)",
        price: 21000,
        enganche: 6300,
        features: ["Capacidad: 4 Urnas", "Ubicación: Filas 1, 2, 5, 6", "Nicho Familiar"],
        financing: [
            { months: 11, monthly: 1444, total: 22184 },
            { months: 23, monthly: 746, total: 23458 },
            { months: 35, monthly: 528, total: 24780 },
        ]
    },
    {
        title: "Nicho 4 Urnas (Fila 3 y 4)",
        price: 21900,
        enganche: 6570,
        features: ["Capacidad: 4 Urnas", "Ubicación: Filas 3 y 4 (Altura Media)", "Nicho Familiar"],
        financing: [
            { months: 11, monthly: 1506, total: 23136 },
            { months: 23, monthly: 778, total: 24464 },
            { months: 35, monthly: 551, total: 25855 },
        ]
    }
]

export function MembershipsSection() {
    const [mainTab, setMainTab] = useState<'panteon' | 'nichos'>('panteon')
    const [panteonTab, setPanteonTab] = useState<'perpetuidad' | 'temporalidad'>('perpetuidad')

    return (
        <section id="planes" className="py-24 bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 space-y-4">
                    <span className="text-accent font-sans text-sm tracking-[0.2em] uppercase font-semibold">
                        Inversión Inteligente
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                        Nuestros Planes
                    </h2>

                    {/* MAIN LEVEL SWITCHER: PANTEON vs NICHOS */}
                    <div className="flex justify-center mt-8 mb-6">
                        <div className="bg-white/10 p-1 rounded-full inline-flex relative w-full max-w-xs md:max-w-sm">
                            <button
                                onClick={() => setMainTab('panteon')}
                                className={cn(
                                    "flex-1 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 relative z-10",
                                    mainTab === 'panteon' ? "text-primary" : "text-white/70 hover:text-white"
                                )}
                            >
                                Panteón
                            </button>
                            <button
                                onClick={() => setMainTab('nichos')}
                                className={cn(
                                    "flex-1 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 relative z-10",
                                    mainTab === 'nichos' ? "text-primary" : "text-white/70 hover:text-white"
                                )}
                            >
                                Nichos
                            </button>

                            {/* Sliding Background for Main Switcher */}
                            <motion.div
                                className="absolute top-1 bottom-1 bg-accent rounded-full"
                                initial={false}
                                animate={{
                                    left: mainTab === 'panteon' ? 4 : '50%',
                                    width: 'calc(50% - 4px)',
                                    x: 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </div>

                    {/* SECOND LEVEL SWITCHER (Only for Panteón) */}
                    <AnimatePresence mode="wait">
                        {mainTab === 'panteon' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="flex justify-center mb-8"
                            >
                                <div className="bg-white/5 p-1 rounded-lg inline-flex relative justify-center gap-1">
                                    <button
                                        onClick={() => setPanteonTab('perpetuidad')}
                                        className={cn(
                                            "px-4 md:px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 relative z-10",
                                            panteonTab === 'perpetuidad' ? "text-primary font-bold" : "text-white/70 hover:text-white"
                                        )}
                                    >
                                        Perpetuidades
                                    </button>
                                    <button
                                        onClick={() => setPanteonTab('temporalidad')}
                                        className={cn(
                                            "px-4 md:px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 relative z-10",
                                            panteonTab === 'temporalidad' ? "text-primary font-bold" : "text-white/70 hover:text-white"
                                        )}
                                    >
                                        Temporalidades
                                    </button>

                                    <motion.div
                                        className="absolute top-1 bottom-1 bg-accent rounded-md"
                                        initial={false}
                                        animate={{
                                            left: panteonTab === 'perpetuidad' ? 4 : '50%',
                                            width: 'calc(50% - 4px)',
                                            x: 0
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* INTRO TEXT SWITCHER */}
                    <p className="text-white/70 max-w-2xl mx-auto font-light min-h-[48px]">
                        {mainTab === 'nichos'
                            ? "Espacios elegantes en muro para resguardo de urnas. Disponibles para 1 o 4 urnas en diferentes ubicaciones."
                            : panteonTab === 'perpetuidad'
                                ? "Propiedad Bajo Tierra en hermosos jardines con pasto. Incluye: Lápida, florero y derecho a perpetuidad."
                                : "Espacios individuales Sobre Tierra (Gavetas Murales) ideales para necesidad inmediata. Opción flexible por 7 años."
                        }
                    </p>

                    <div className="flex justify-center mt-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase">
                            <Star className="w-3 h-3 fill-current" />
                            Precios exclusivos con Grupo Funerario Ayala
                        </span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {mainTab === 'nichos' ? (
                        // NICHOS GRID
                        <motion.div
                            key="nichos-grid"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {nichoPlans.map((plan, index) => (
                                <PricingCard key={index} plan={plan} />
                            ))}
                        </motion.div>
                    ) : (
                        // PANTEON CONTENT (Perpetuidad or Temporalidad)
                        panteonTab === 'perpetuidad' ? (
                            <motion.div
                                key="perpetuidad"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            >
                                {pricingPlans.map((plan, index) => (
                                    <PricingCard key={index} plan={plan} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="temporalidad"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-md mx-auto"
                            >
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
                                                <span>Libre de pago de mantenimiento</span>
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-white/80">
                                                <Check className="w-4 h-4 text-accent" />
                                                <span>Ideal para necesidad inmediata</span>
                                            </li>
                                        </ul>

                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-8 max-w-sm mx-auto">
                                            <h4 className="text-sm font-semibold text-white mb-3 tracking-wide uppercase text-xs text-white/50">Facilidad de Pago</h4>
                                            <div className="space-y-2 text-sm text-white/80">
                                                <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                                                    <span>Pago Inicial:</span>
                                                    <span className="text-lg font-bold text-accent">$5,500</span>
                                                </div>
                                                <div className="flex justify-between items-center text-xs">
                                                    <span>Restante ($4,000):</span>
                                                    <span className="text-white/60">Diferido en anualidades</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
                                            onClick={() => window.open(`https://wa.me/525545065063?text=Me interesa una Gaveta Temporal`, '_blank')}
                                        >
                                            Solicitar Información
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    )}
                </AnimatePresence>
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

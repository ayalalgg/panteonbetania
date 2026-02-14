"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Star, Plus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

/* ─── DATOS: Planes del Panteón ─── */

const pricingPlans = [
    {
        title: "Fosa 2 Gavetas",
        price: 29720,
        enganche: 7000,
        openingCost: 1800,
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
        openingCost: 1800,
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
        openingCost: 1800,
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
        openingCost: 1800,
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
        price: 12600,
        enganche: 3780,
        openingCost: 0,
        features: ["Capacidad: 1 Urna", "Ubicación: Filas 1, 2, 5, 6", "Nicho de Galería"],
        financing: [
            { months: 11, monthly: 867, total: 13317 },
            { months: 23, monthly: 447, total: 14061 },
            { months: 35, monthly: 317, total: 14875 },
        ]
    },
    {
        title: "Nicho 1 Urna (Fila 3 y 4)",
        price: 13600,
        enganche: 4080,
        openingCost: 0,
        features: ["Capacidad: 1 Urna", "Ubicación: Filas 3 y 4 (Altura Media)", "Nicho de Galería"],
        financing: [
            { months: 11, monthly: 935, total: 14365 },
            { months: 23, monthly: 483, total: 15189 },
            { months: 35, monthly: 342, total: 16050 },
        ]
    },
    {
        title: "Nicho 4 Urnas (Fila 1, 2, 5, 6)",
        price: 21000,
        enganche: 6300,
        openingCost: 0,
        features: ["Capacidad: 4 Urnas", "Ubicación: Filas 1, 2, 5, 6", "Nicho de Galería"],
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
        openingCost: 0,
        features: ["Capacidad: 4 Urnas", "Ubicación: Filas 3 y 4 (Altura Media)", "Nicho de Galería"],
        financing: [
            { months: 11, monthly: 1506, total: 23136 },
            { months: 23, monthly: 778, total: 24464 },
            { months: 35, monthly: 551, total: 25855 },
        ]
    }
]

/* ─── DATOS: Servicios Funerarios de Ayala Funeral ─── */

interface FuneralService {
    id: string
    name: string
    description: string
    price: number   // precio desde domicilio
    includes: string[]
    type: 'sepultura' | 'cremacion'
}

const funeralServices: FuneralService[] = [
    // Sepultura: para combinar con Fosas
    {
        id: 'sep-tradicional',
        name: 'Tradicional',
        description: 'Velación en domicilio',
        price: 12300,
        includes: [
            "Ataúd clásico",
            "Liberación de hospital o domicilio",
            "Preservación y arreglo estético",
            "Gestoría de trámites gubernamentales",
            "Equipo de velación para novenario",
            "Carroza local a panteón",
        ],
        type: 'sepultura',
    },
    {
        id: 'sep-velatorio',
        name: 'Velatorio',
        description: 'Velación en sala',
        price: 14600,
        includes: [
            "Ataúd clásico",
            "Liberación de hospital o domicilio",
            "Preservación y arreglo estético",
            "Gestoría de trámites gubernamentales",
            "Sala de velación (25 personas / 24 hrs)",
            "Carroza local a panteón",
        ],
        type: 'sepultura',
    },
    // Cremación: para combinar con Nichos
    {
        id: 'crem-directa',
        name: 'Directa',
        description: 'Sin velación',
        price: 8800,
        includes: [
            "Liberación de hospital o domicilio",
            "Carroza a horno crematorio",
            "Cremación",
            "Gestoría de trámites gubernamentales",
            "Urna de cenizas universal",
        ],
        type: 'cremacion',
    },
    {
        id: 'crem-tradicional',
        name: 'Tradicional',
        description: 'Velación en domicilio',
        price: 13900,
        includes: [
            "Ataúd para velación D/U",
            "Liberación de hospital o domicilio",
            "Preservación y arreglo estético",
            "Gestoría de trámites gubernamentales",
            "Equipo de velación para novenario",
            "Carroza a horno crematorio",
            "Cremación",
            "Urna de cenizas universal",
        ],
        type: 'cremacion',
    },
    {
        id: 'crem-velatorio',
        name: 'Velatorio',
        description: 'Velación en sala',
        price: 16200,
        includes: [
            "Ataúd para velación D/U",
            "Liberación de hospital o domicilio",
            "Preservación y arreglo estético",
            "Gestoría de trámites gubernamentales",
            "Sala de velación (25 personas / 24 hrs)",
            "Carroza a horno crematorio",
            "Cremación",
            "Urna de cenizas universal",
        ],
        type: 'cremacion',
    },
]

/* ─── COMPONENTE PRINCIPAL ─── */

export function MembershipsSection() {
    const [mainTab, setMainTab] = useState<'panteon' | 'nichos'>('panteon')
    const [panteonTab, setPanteonTab] = useState<'perpetuidad' | 'temporalidad'>('perpetuidad')

    // Estado del combo funerario
    const [comboEnabled, setComboEnabled] = useState(false)
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)

    // Servicios relevantes según el tab activo
    const relevantServices = mainTab === 'nichos'
        ? funeralServices.filter(s => s.type === 'cremacion')
        : funeralServices.filter(s => s.type === 'sepultura')

    const selectedService = funeralServices.find(s => s.id === selectedServiceId) || null

    // Cuando cambia el tab principal, resetear selección
    const handleMainTabChange = (tab: 'panteon' | 'nichos') => {
        setMainTab(tab)
        setComboEnabled(false)
        setSelectedServiceId(null)
    }

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
                                onClick={() => handleMainTabChange('panteon')}
                                className={cn(
                                    "flex-1 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 relative z-10",
                                    mainTab === 'panteon' ? "text-primary" : "text-white/70 hover:text-white"
                                )}
                            >
                                Panteón
                            </button>
                            <button
                                onClick={() => handleMainTabChange('nichos')}
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

                {/* ─── COMBO BANNER: Incluir Servicio Funerario ─── */}
                {(
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto mb-10"
                    >
                        <div className={cn(
                            "rounded-2xl border p-5 transition-all duration-500",
                            comboEnabled
                                ? "bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border-emerald-500/40 shadow-lg shadow-emerald-500/10"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                        )}>
                            {/* Toggle Row */}
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                                        comboEnabled ? "bg-emerald-500 shadow-lg shadow-emerald-500/30" : "bg-white/10"
                                    )}>
                                        <Plus className={cn("w-5 h-5 transition-transform duration-300", comboEnabled ? "text-white rotate-45" : "text-white/60")} />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                                            Incluir Servicio Funerario de Uso Inmediato
                                            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                                        </h4>
                                        <p className="text-[11px] md:text-xs text-white/50 leading-tight mt-0.5">
                                            Combina tu plan de {mainTab === 'nichos' ? 'nicho' : 'panteón'} con un servicio funerario completo de Grupo Funerario Ayala
                                        </p>
                                    </div>
                                </div>

                                {/* Toggle Switch */}
                                <button
                                    onClick={() => {
                                        const newVal = !comboEnabled
                                        setComboEnabled(newVal)
                                        if (newVal && !selectedServiceId) {
                                            setSelectedServiceId(relevantServices[0]?.id || null)
                                        }
                                        if (!newVal) setSelectedServiceId(null)
                                    }}
                                    className={cn(
                                        "relative w-14 h-7 rounded-full transition-all duration-300 shrink-0",
                                        comboEnabled ? "bg-emerald-500" : "bg-white/20"
                                    )}
                                >
                                    <motion.div
                                        className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                                        animate={{ left: comboEnabled ? 32 : 4 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                </button>
                            </div>

                            {/* Service Options (Expanded) */}
                            <AnimatePresence>
                                {comboEnabled && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-5 pt-5 border-t border-white/10">
                                            <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-3">
                                                Selecciona el tipo de servicio {mainTab === 'nichos' ? '(Cremación)' : '(Sepultura)'}
                                            </p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {relevantServices.map(service => (
                                                    <button
                                                        key={service.id}
                                                        onClick={() => setSelectedServiceId(service.id)}
                                                        className={cn(
                                                            "text-left p-4 rounded-xl border transition-all duration-300",
                                                            selectedServiceId === service.id
                                                                ? "bg-emerald-500/20 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                                                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                                        )}
                                                    >
                                                        <div className="flex items-center justify-between mb-1">
                                                            <span className="font-bold text-sm text-white">{service.name}</span>
                                                            <span className="text-emerald-400 font-bold text-sm">
                                                                +${service.price.toLocaleString()}
                                                            </span>
                                                        </div>
                                                        <p className="text-[10px] text-white/50">{service.description}</p>

                                                        {selectedServiceId === service.id && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                className="mt-3 pt-3 border-t border-white/10"
                                                            >
                                                                <ul className="space-y-1.5">
                                                                    {service.includes.map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-2 text-[10px] text-white/60">
                                                                            <Check className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                                                                            <span>{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </motion.div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}

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
                                <PricingCard key={index} plan={plan} section="Nichos" comboService={selectedService} />
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
                                    <PricingCard key={index} plan={plan} section="Panteón" comboService={selectedService} />
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
                                <TemporalidadCard comboService={selectedService} />
                            </motion.div>
                        )
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

/* ─── TARJETA DE PLAN (con combo dinámico) ─── */

function PricingCard({ plan, section, comboService }: { plan: any, section: string, comboService: FuneralService | null }) {
    const [showFinancing, setShowFinancing] = useState(false)
    const openingCost = plan.openingCost ?? 0
    const maintenanceCost = 1408

    // Precios dinámicos según combo
    const comboPrice = comboService?.price || 0
    const totalPrice = plan.price + comboPrice
    const totalInitial = plan.enganche + openingCost + maintenanceCost + comboPrice

    // Financiamiento: solo cubre el costo del panteón (el servicio funerario se paga de contado en el Uso Inmediato)
    const financing = plan.financing
    const isComboActive = comboService !== null

    return (
        <Card className={cn(
            "backdrop-blur-sm border-white/10 overflow-hidden transition-all duration-500",
            isComboActive
                ? "bg-gradient-to-b from-emerald-900/20 to-white/5 border-emerald-500/20 shadow-lg shadow-emerald-500/5"
                : "bg-white/5 hover:bg-white/10"
        )}>
            <CardContent className="p-6">
                <div className="mb-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{plan.title}</h3>
                    <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                            <motion.span
                                key={totalPrice}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl font-bold text-accent"
                            >
                                ${totalPrice.toLocaleString()}
                            </motion.span>
                            <span className="text-xs text-white/60">MXN Contado</span>
                        </div>

                        {isComboActive && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-1"
                            >
                                <span className="text-[10px] text-emerald-400 font-semibold">
                                    Panteón ${plan.price.toLocaleString()} + Servicio Funerario ${comboPrice.toLocaleString()}
                                </span>
                            </motion.div>
                        )}

                        <p className="text-[10px] text-white/40 italic leading-tight mt-1">
                            + Gastos de Uso Inmediato (Apertura y Mantenimiento)
                        </p>
                    </div>

                    {/* TOTAL INITIAL PAYMENT CALCULATION */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 space-y-2">
                        <div className="flex justify-between items-start border-b border-white/10 pb-2 mb-2">
                            <div>
                                <span className="text-sm font-semibold text-white block">Pago total de Uso Inmediato</span>
                                <span className="text-[10px] text-white/40 italic">En plan financiado</span>
                            </div>
                            <motion.span
                                key={totalInitial}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-lg font-bold text-accent"
                            >
                                ${totalInitial.toLocaleString()}
                            </motion.span>
                        </div>

                        <div className="text-[10px] space-y-1 text-white/60">
                            <div className="flex justify-between">
                                <span>Enganche:</span>
                                <span>${plan.enganche.toLocaleString()}</span>
                            </div>

                            {openingCost > 0 && (
                                <div className="space-y-1">
                                    <div className="flex justify-between">
                                        <span>Apertura (1er Evento):</span>
                                        <span>${openingCost.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-white/70 text-[10px] mt-1">
                                        <span>Apertura (Eventos Futuros):</span>
                                        <span>$2,600</span>
                                    </div>
                                    <p className="text-[9px] text-white/40 italic leading-tight pl-2 mt-1">
                                        * Ambos incluyen: Grabado, toldo, sillas, apertura y cierre.
                                    </p>
                                </div>
                            )}

                            <div className="flex justify-between">
                                <span>1ª Anualidad Mantenimiento:</span>
                                <span>${maintenanceCost.toLocaleString()}</span>
                            </div>

                            {isComboActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-between text-emerald-400 font-semibold pt-1 border-t border-white/10"
                                >
                                    <span>Servicio Funerario ({comboService.name}):</span>
                                    <span>${comboPrice.toLocaleString()}</span>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                <ul className="space-y-3 mb-4">
                    {plan.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                            <Check className="w-4 h-4 text-accent" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Combo Service Features */}
                <AnimatePresence>
                    {isComboActive && comboService && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="mb-4 pt-3 border-t border-emerald-500/20">
                                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3" />
                                    Servicio Funerario Incluido ({comboService.name})
                                </p>
                                <ul className="space-y-2">
                                    {comboService.includes.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[11px] text-emerald-300/70">
                                            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Button
                    onClick={() => setShowFinancing(!showFinancing)}
                    className={cn(
                        "w-full justify-between mb-4 h-12 px-6 rounded-xl transition-all duration-300",
                        "bg-white/10 border border-white/20 hover:bg-white/20 hover:border-accent/40",
                        "text-white font-medium shadow-sm hover:shadow-md hover:shadow-accent/10 active:scale-[0.98]",
                        showFinancing && "bg-white/20 border-accent/40 shadow-inner"
                    )}
                >
                    <span className="text-sm">Ver Financiamiento</span>
                    <motion.div
                        animate={{ rotate: showFinancing ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <ChevronDown className="w-5 h-5 text-accent" />
                    </motion.div>
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
                                {financing.map((opt: any, i: number) => (
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
                    className={cn(
                        "w-full font-semibold",
                        isComboActive
                            ? "bg-emerald-500 text-white hover:bg-emerald-600"
                            : "bg-accent text-primary hover:bg-white"
                    )}
                    onClick={() => {
                        const comboText = isComboActive && comboService
                            ? ` con Servicio Funerario "${comboService.name}" (Paquete Integral)`
                            : ''
                        window.open(
                            `https://wa.me/525623355155?text=Me interesa información sobre el plan "${plan.title}"${comboText} en la sección de ${section} de Panteón Bethania.`,
                            '_blank'
                        )
                    }}
                >
                    {isComboActive ? '✨ Cotizar Paquete Integral' : 'Contacta a un asesor'}
                </Button>
            </CardContent>
        </Card>
    )
}

/* ─── TARJETA DE TEMPORALIDAD (con combo dinámico) ─── */

function TemporalidadCard({ comboService }: { comboService: FuneralService | null }) {
    const basePrice = 9500
    const baseEnganche = 5500
    const baseRestante = 4000
    const comboPrice = comboService?.price || 0
    const totalPrice = basePrice + comboPrice
    const totalEnganche = baseEnganche + comboPrice
    const isComboActive = comboService !== null

    return (
        <Card className={cn(
            "backdrop-blur-sm border-white/10 overflow-hidden transition-all duration-500",
            isComboActive
                ? "bg-gradient-to-b from-emerald-900/20 to-white/5 border-emerald-500/20 shadow-lg shadow-emerald-500/5"
                : "bg-white/5 hover:bg-white/10"
        )}>
            <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Gaveta Temporal</h3>
                <div className="flex justify-center items-baseline gap-1 mb-2">
                    <motion.span
                        key={totalPrice}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-accent"
                    >
                        ${totalPrice.toLocaleString()}
                    </motion.span>
                    <span className="text-sm text-white/60">MXN / Persona</span>
                </div>

                {isComboActive && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-[10px] text-emerald-400 font-semibold mb-4"
                    >
                        Gaveta ${basePrice.toLocaleString()} + Servicio Funerario ${comboPrice.toLocaleString()}
                    </motion.p>
                )}

                <ul className="space-y-3 mb-6 text-left inline-block">
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

                {/* Combo Service Features */}
                <AnimatePresence>
                    {isComboActive && comboService && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mb-6"
                        >
                            <div className="pt-3 border-t border-emerald-500/20 text-left">
                                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3" />
                                    Servicio Funerario Incluido ({comboService.name})
                                </p>
                                <ul className="space-y-2">
                                    {comboService.includes.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[11px] text-emerald-300/70">
                                            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-8 max-w-sm mx-auto">
                    <h4 className="text-xs font-semibold tracking-wide uppercase text-white/50 mb-3">Facilidad de Pago</h4>
                    <div className="space-y-2 text-sm text-white/80">
                        <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-2">
                            <span>Pago Inicial:</span>
                            <motion.span
                                key={totalEnganche}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-lg font-bold text-accent"
                            >
                                ${totalEnganche.toLocaleString()}
                            </motion.span>
                        </div>

                        {isComboActive && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-between items-center text-[10px] text-emerald-400 border-b border-white/10 pb-2 mb-2"
                            >
                                <span>Incluye Servicio Funerario ({comboService?.name}):</span>
                                <span className="font-semibold">${comboPrice.toLocaleString()}</span>
                            </motion.div>
                        )}

                        <div className="flex justify-between items-center text-xs">
                            <span>Restante (${baseRestante.toLocaleString()}):</span>
                            <span className="text-white/60">Diferido en anualidades</span>
                        </div>
                    </div>
                </div>

                <Button
                    className={cn(
                        "w-full font-semibold",
                        isComboActive
                            ? "bg-emerald-500 text-white hover:bg-emerald-600"
                            : "bg-white text-primary hover:bg-white/90"
                    )}
                    onClick={() => {
                        const comboText = isComboActive && comboService
                            ? ` con Servicio Funerario "${comboService.name}" (Paquete Integral)`
                            : ''
                        window.open(
                            `https://wa.me/525623355155?text=Me interesa información sobre la Gaveta Temporal (7 años)${comboText} en Panteón Bethania.`,
                            '_blank'
                        )
                    }}
                >
                    {isComboActive ? '✨ Cotizar Paquete Integral' : 'Contacta a un asesor'}
                </Button>
            </CardContent>
        </Card>
    )
}

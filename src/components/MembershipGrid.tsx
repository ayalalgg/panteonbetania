"use client"

import { useState } from "react"
import { Plus, Sparkles, Building2, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { MembershipPricingCard } from "./MembershipPricingCard"
import { ProtectionCalculator } from "./ProtectionCalculator"

/* ─── DATOS POR DEFECTO ─── */

const defaultNichoPlans = [
    { title: "Nicho 1 Urna (Pared)", price: 12600, enganche: 3780, features: ["Capacidad: 1 Urna", "Ubicación: Filas 1, 2, 5, 6", "Nicho de Galería"], financing: [{ months: 11, monthly: 867, total: 13317 }, { months: 23, monthly: 447, total: 14061 }, { months: 35, monthly: 317, total: 14875 }] },
    { title: "Nicho 4 Urnas (Pared)", price: 21000, enganche: 6300, features: ["Capacidad: 4 Urnas", "Ubicación: Filas 1, 2, 5, 6", "Nicho de Galería"], financing: [{ months: 11, monthly: 1444, total: 22184 }, { months: 23, monthly: 746, total: 23458 }, { months: 35, monthly: 528, total: 24780 }] }
]

const funeralServices = [
    { id: 'sep-tradicional', name: 'Tradicional', desc: 'Velación en domicilio', priceHome: 12300, priceHospital: 10400, includes: ["Ataúd clásico", "Liberación local", "Preservación", "Gestoría", "Equipo de velación"], type: 'sepultura' },
    { id: 'sep-velatorio', name: 'Velatorio', desc: 'Velación en sala', priceHome: 14600, priceHospital: 12700, includes: ["Ataúd clásico", "Liberación local", "Preservación", "Gestoría", "Sala de velación"], type: 'sepultura' },
    { id: 'crem-directa', name: 'Directa', desc: 'Sin velación', priceHome: 8800, priceHospital: 6900, includes: ["Liberación local", "Cremación", "Gestoría", "Urna universal"], type: 'cremacion' },
    { id: 'crem-velatorio', name: 'Velatorio', desc: 'Velación en sala', priceHome: 16200, priceHospital: 14300, includes: ["Ataúd para velación", "Sala de velación", "Cremación", "Urna universal"], type: 'cremacion' }
]

interface MembershipGridProps {
    plansData?: any
}

export function MembershipGrid({ plansData }: MembershipGridProps) {
    const [mainTab, setMainTab] = useState<'panteon' | 'nichos'>('panteon')
    const [comboEnabled, setComboEnabled] = useState(false)
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null)
    const [pickupLocation, setPickupLocation] = useState<'hospital' | 'domicilio'>('hospital')

    // Prepare data
    const activeNichos = plansData?.nichos || defaultNichoPlans

    const relevantServices = mainTab === 'nichos'
        ? funeralServices.filter(s => s.type === 'cremacion')
        : funeralServices.filter(s => s.type === 'sepultura')

    const rawService = funeralServices.find(s => s.id === selectedServiceId) || null
    const selectedService = rawService ? {
        ...rawService,
        price: pickupLocation === 'hospital' ? rawService.priceHospital : rawService.priceHome
    } : null

    const handleMainTabChange = (tab: 'panteon' | 'nichos') => {
        setMainTab(tab)
        setComboEnabled(false)
        setSelectedServiceId(null)
    }

    return (
        <div className="space-y-12">
            {/* SWITCHERS */}
            <div className="flex flex-col items-center gap-6">
                <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full inline-flex relative w-full max-w-sm border border-white/10 shadow-lg">
                    <button onClick={() => handleMainTabChange('panteon')} className={cn("flex-1 py-3.5 rounded-full text-sm font-bold transition-all relative z-10", mainTab === 'panteon' ? "text-primary" : "text-white/60 hover:text-white")}>Panteón</button>
                    <button onClick={() => handleMainTabChange('nichos')} className={cn("flex-1 py-3.5 rounded-full text-sm font-bold transition-all relative z-10", mainTab === 'nichos' ? "text-primary" : "text-white/60 hover:text-white")}>Nichos</button>
                    <motion.div className="absolute top-1.5 bottom-1.5 bg-accent rounded-full shadow-lg" initial={false} animate={{ left: mainTab === 'panteon' ? 6 : '50%', width: 'calc(50% - 6px)' }} />
                </div>
            </div>

            <AnimatePresence mode="wait">
                {mainTab === 'panteon' ? (
                    <motion.div 
                        key="panteon-calc"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                    >
                        <ProtectionCalculator />
                    </motion.div>
                ) : (
                    <motion.div 
                        key="nichos-grid"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="space-y-12"
                    >
                        {/* COMBO CONFIGURATOR (Only for Nichos now or we could move it to Calculator later) */}
                        <motion.div layout className={cn("max-w-4xl mx-auto rounded-[2rem] border transition-all duration-500 overflow-hidden", comboEnabled ? "bg-emerald-900/20 border-emerald-500/40 shadow-2xl shadow-emerald-500/10" : "bg-white/5 border-white/10 hover:border-white/20 shadow-xl")}>
                            <div className="p-8">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-5">
                                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500", comboEnabled ? "bg-emerald-500 shadow-xl shadow-emerald-500/30" : "bg-white/10")}>
                                            <Plus className={cn("w-6 h-6 transition-transform duration-500", comboEnabled ? "text-white rotate-45" : "text-white/40")} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white flex items-center gap-3">Paquete Integral Nichos <Sparkles className={cn("w-5 h-5 text-emerald-400 opacity-0 transition-opacity duration-500", comboEnabled && "opacity-100")} /></h4>
                                            <p className="text-sm text-white/40 mt-1 max-w-md">Combina tu plan de nicho con un servicio funerario completo de Grupo Funerario Ayala.</p>
                                        </div>
                                    </div>

                                    <button onClick={() => { const newVal = !comboEnabled; setComboEnabled(newVal); if (newVal && !selectedServiceId) setSelectedServiceId(relevantServices[0]?.id || null); if (!newVal) setSelectedServiceId(null); }} className={cn("relative w-16 h-8 rounded-full transition-colors duration-500", comboEnabled ? "bg-emerald-500" : "bg-white/10")}>
                                        <motion.div className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg" animate={{ left: comboEnabled ? 36 : 4 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {comboEnabled && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-8 pt-8 border-t border-white/10">
                                            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                                                <div className="md:col-span-4 space-y-4">
                                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2 underline underline-offset-4 decoration-accent/30">1. Lugar de Retiro</p>
                                                    <div className="flex flex-col gap-2">
                                                        <button onClick={() => setPickupLocation('hospital')} className={cn("flex items-center gap-4 p-4 rounded-2xl border transition-all", pickupLocation === 'hospital' ? "bg-emerald-500 border-emerald-400 shadow-lg text-white" : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10")}>
                                                            <Building2 className="w-5 h-5" />
                                                            <div className="text-left"><p className="text-sm font-bold">Hospital</p><p className="text-[10px] opacity-60">Liberación en clínica</p></div>
                                                        </button>
                                                        <button onClick={() => setPickupLocation('domicilio')} className={cn("flex items-center gap-4 p-4 rounded-2xl border transition-all", pickupLocation === 'domicilio' ? "bg-emerald-500 border-emerald-400 shadow-lg text-white" : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10")}>
                                                            <User className="w-5 h-5" />
                                                            <div className="text-left"><p className="text-sm font-bold">Domicilio</p><p className="text-[10px] opacity-60">Preservación en casa</p></div>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="md:col-span-8 space-y-4">
                                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2 underline underline-offset-4 decoration-accent/30">2. Tipo de Servicio</p>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        {relevantServices.map(service => {
                                                            const activePrice = pickupLocation === 'hospital' ? service.priceHospital : service.priceHome
                                                            return (
                                                                <button key={service.id} onClick={() => setSelectedServiceId(service.id)} className={cn("text-left p-4 rounded-2xl border transition-all", selectedServiceId === service.id ? "bg-emerald-500/20 border-emerald-500/50 shadow-inner" : "bg-white/5 border-white/5 hover:bg-white/10")}>
                                                                    <div className="flex justify-between items-start mb-2"><span className="font-bold text-sm text-white">{service.name}</span><span className="text-emerald-400 font-bold text-sm">+${activePrice.toLocaleString()}</span></div>
                                                                    <p className="text-[10px] text-white/40 leading-relaxed">{service.desc}</p>
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8">
                            {activeNichos.map((plan: any, i: number) => (
                                <MembershipPricingCard key={i} plan={plan} section="Nichos" comboService={selectedService} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

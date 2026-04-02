"use client"

import { useState } from "react"
import { Check, ChevronDown, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface PricingCardProps {
    plan: any
    section: string
    comboService: any | null
}

export function MembershipPricingCard({ plan, section, comboService }: PricingCardProps) {
    const [showFinancing, setShowFinancing] = useState(false)
    const isComboActive = comboService !== null
    const isTemporalidad = section === "Temporalidad"

    // Logic for costs
    const openingCost = plan.openingCost ?? 0
    const maintenanceCost = 1408
    const comboPrice = comboService?.price || 0
    const totalPrice = plan.price + comboPrice
    
    // Total Initial logic differs for Temporalidad
    const totalInitial = isTemporalidad 
        ? (plan.enganche + comboPrice)
        : (plan.enganche + openingCost + maintenanceCost + comboPrice)

    const financing = plan.financing || []

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className={cn(
                "group relative backdrop-blur-xl border-white/10 overflow-hidden transition-all duration-700 h-full flex flex-col",
                isComboActive
                    ? "bg-gradient-to-br from-emerald-900/40 via-primary/20 to-white/5 border-emerald-500/30 shadow-2xl shadow-emerald-500/10"
                    : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-accent/30 shadow-xl"
            )}>
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
                
                {plan.price > 45000 && !isComboActive && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="bg-accent/20 text-accent text-[10px] font-bold px-3 py-1 rounded-full border border-accent/30 backdrop-blur-md uppercase tracking-wider">
                            Más Popular
                        </span>
                    </div>
                )}

                {isComboActive && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-emerald-500/30 uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Paquete Integral
                        </span>
                    </div>
                )}

                <CardContent className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                    <div className="mb-8">
                        <h3 className={cn(
                            "text-xl md:text-2xl font-serif font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300",
                            isTemporalidad && "text-center"
                        )}>
                            {plan.title}
                        </h3>
                        
                        <div className={cn("mb-6", isTemporalidad && "text-center")}>
                            <div className="flex items-baseline justify-center md:justify-start gap-2 mb-1">
                                <motion.span
                                    key={totalPrice}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-3xl md:text-4xl font-bold text-accent tracking-tighter"
                                >
                                    ${totalPrice.toLocaleString()}
                                </motion.span>
                                <span className="text-xs text-white/50 font-light italic">MXN Contado</span>
                            </div>

                            {isComboActive && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-medium"
                                >
                                    Panteón ${plan.price.toLocaleString()} + Servicio ${comboPrice.toLocaleString()}
                                </motion.div>
                            )}
                            
                            {!isComboActive && !isTemporalidad && (
                                <p className="text-[10px] text-white/30 italic mt-2 leading-tight">
                                    + Gastos de Uso Inmediato (Apertura y Mantenimiento)
                                </p>
                            )}
                        </div>

                        {/* INITIAL PAYMENT HIGHLIGHT */}
                        <div className="bg-white/5 rounded-2xl p-5 border border-white/10 shadow-inner backdrop-blur-md">
                            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                                <div>
                                    <span className="text-xs font-semibold text-white/70 block uppercase tracking-tighter">Pago Total Inicial</span>
                                    <span className="text-[10px] text-white/40 font-light">Para Uso Inmediato</span>
                                </div>
                                <motion.span
                                    key={totalInitial}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-2xl font-bold text-white"
                                >
                                    ${totalInitial.toLocaleString()}
                                </motion.span>
                            </div>

                            <div className="space-y-2.5">
                                <div className="flex justify-between text-[11px] text-white/60">
                                    <span>Enganche del Plan:</span>
                                    <span className="text-white font-medium">${plan.enganche.toLocaleString()}</span>
                                </div>

                                {!isTemporalidad && openingCost > 0 && (
                                    <div className="flex justify-between text-[11px] text-white/60">
                                        <div className="flex flex-col">
                                            <span>Apertura (1er Evento):</span>
                                            <span className="text-[9px] text-white/30 italic">Toldo, sillas, grabado, apertura/cierre</span>
                                        </div>
                                        <span className="text-white font-medium">${openingCost.toLocaleString()}</span>
                                    </div>
                                )}

                                {!isTemporalidad && (
                                    <div className="flex justify-between text-[11px] text-white/60">
                                        <span>1ª Anualidad Mantenimiento:</span>
                                        <span className="text-white font-medium">${maintenanceCost.toLocaleString()}</span>
                                    </div>
                                )}

                                {isComboActive && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex justify-between text-[11px] text-emerald-400 font-bold pt-2 border-t border-white/5"
                                    >
                                        <span>Servicio Funerario Incluido:</span>
                                        <span>${comboPrice.toLocaleString()}</span>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-4 mb-8">
                        <p className="text-[10px] text-accent font-bold uppercase tracking-[0.2em] mb-2">Beneficios del Plan</p>
                        <ul className="space-y-3">
                            {plan.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-snug">
                                    <div className="mt-1 w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                        <Check className="w-2.5 h-2.5 text-accent" />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {isComboActive && (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="pt-4 border-t border-emerald-500/20"
                                >
                                    <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                        <Sparkles className="w-3 h-3" />
                                        Incluye Servicio {comboService.name}
                                    </p>
                                    <ul className="space-y-2">
                                        {comboService.includes.slice(0, 4).map((item: string, i: number) => (
                                            <li key={i} className="flex items-center gap-2 text-[11px] text-white/50">
                                                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                                <span className="truncate">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>

                    <div className="mt-auto space-y-4">
                        {!isTemporalidad && financing.length > 0 && (
                            <div className="relative">
                                <Button
                                    onClick={() => setShowFinancing(!showFinancing)}
                                    variant="outline"
                                    className={cn(
                                        "w-full justify-between h-11 px-4 rounded-xl transition-all duration-500 bg-white/5 border-white/10 hover:border-accent/40 text-white font-medium overflow-hidden",
                                        showFinancing && "bg-white/10 border-accent/40"
                                    )}
                                >
                                    <span className="text-xs">Ver Financiamiento</span>
                                    <motion.div animate={{ rotate: showFinancing ? 180 : 0 }}>
                                        <ChevronDown className="w-4 h-4 text-accent" />
                                    </motion.div>
                                </Button>

                                <AnimatePresence>
                                    {showFinancing && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden mt-2 bg-black/40 rounded-xl border border-white/5 p-4"
                                        >
                                            <div className="space-y-3">
                                                {financing.map((opt: any, i: number) => (
                                                    <div key={i} className="flex justify-between items-center text-xs border-b border-white/5 last:border-0 pb-2 last:pb-0">
                                                        <span className="text-white/50">{opt.months} Meses</span>
                                                        <div className="text-right">
                                                            <div className="text-accent font-bold">${opt.monthly.toLocaleString()}</div>
                                                            <div className="text-[10px] text-white/30">Total: ${opt.total.toLocaleString()}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        <Button
                            className={cn(
                                "w-full h-14 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg active:scale-[0.98]",
                                isComboActive
                                    ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20"
                                    : "bg-accent text-primary hover:bg-white shadow-accent/20"
                            )}
                            onClick={() => {
                                const comboText = isComboActive
                                    ? ` con Servicio Funerario "${comboService.name}" (Paquete Integral)`
                                    : ''
                                const msg = isTemporalidad 
                                    ? `Me interesa información sobre la Gaveta Temporal (7 años)${comboText} en Panteón Bethania.`
                                    : `Me interesa información sobre el plan "${plan.title}"${comboText} en la sección de ${section} de Panteón Bethania.`
                                
                                window.open(`https://wa.me/525623355155?text=${encodeURIComponent(msg)}`, '_blank')
                            }}
                        >
                            {isComboActive ? 'Cotizar Paquete Integral ✨' : 'Contactar Asesor'}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

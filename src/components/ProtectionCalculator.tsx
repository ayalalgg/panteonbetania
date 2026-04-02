"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
    ShieldCheck, 
    Clock, 
    ChevronRight, 
    Sparkles, 
    Info, 
    Check, 
    Calendar, 
    Building2,
    ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { PROTECTION_PLANS, ProtectionPlan, FinancingOption } from "@/data/protection-plans"

export function ProtectionCalculator() {
    const [mode, setMode] = useState<'prevision' | 'inmediato'>('prevision')
    const [selectedGavetas, setSelectedGavetas] = useState<number>(2)
    const [selectedMonths, setSelectedMonths] = useState<number>(36)

    // Find the current plan
    const currentPlan = useMemo<ProtectionPlan>(() => 
        PROTECTION_PLANS.find((p: ProtectionPlan) => p.gavetas === selectedGavetas) || PROTECTION_PLANS[0]
    , [selectedGavetas])

    // Get available financing for current mode
    const availableFinancing = useMemo<FinancingOption[]>(() => 
        mode === 'prevision' ? currentPlan.previsionFinancing : currentPlan.inmediatoFinancing
    , [mode, currentPlan])

    // Find current financing option
    const currentFinancing = useMemo<FinancingOption>(() => {
        const found = availableFinancing.find((f: FinancingOption) => f.months === selectedMonths)
        return found || availableFinancing[0]
    }, [availableFinancing, selectedMonths])

    // Auto-adjust months if not available in new mode
    useMemo(() => {
        const isAvailable = availableFinancing.some(f => f.months === selectedMonths)
        if (!isAvailable) {
            setSelectedMonths(availableFinancing[0].months)
        }
    }, [availableFinancing])

    // Calculations
    const enganche = mode === 'prevision' ? currentPlan.enganchePrevision : currentPlan.engancheInmediato
    const maintenance = mode === 'inmediato' ? currentPlan.maintenanceCost : 0
    const totalInitial = enganche + maintenance

    const monthlyPayment = currentFinancing.monthly
    const isInterestFree = mode === 'prevision' && (selectedMonths === 3 || selectedMonths === 6)

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER */}
                <div className="text-center mb-16 space-y-4">
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-accent/10 text-accent text-xs font-bold px-6 py-2 rounded-full border border-accent/20 tracking-[0.3em] uppercase"
                    >
                        Herramienta de Planeación
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary tracking-tight">
                        Calculadora de <span className="text-accent italic">Protección</span>
                    </h2>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                        Personaliza tu plan de previsión o resuelve una necesidad inmediata con transparencia total.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LEFT COLUMN: Controls */}
                    <div className="lg:col-span-12 xl:col-span-8 space-y-12">
                        
                        {/* 1. SELECCIÓN DE ESCENARIO */}
                        <div className="space-y-6">
                            <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</span>
                                ¿Cuál es tu situación actual?
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button 
                                    onClick={() => setMode('prevision')}
                                    className={cn(
                                        "p-8 rounded-[2.5rem] border text-left transition-all duration-500 group relative overflow-hidden",
                                        mode === 'prevision' 
                                            ? "bg-primary text-white border-primary shadow-2xl" 
                                            : "bg-white border-primary/10 hover:border-primary/30"
                                    )}
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                                            mode === 'prevision' ? "bg-accent text-primary" : "bg-primary/5 text-primary"
                                        )}>
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold">Estoy Planeando</h4>
                                    </div>
                                    <p className={cn(
                                        "text-sm font-light leading-relaxed",
                                        mode === 'prevision' ? "text-white/60" : "text-muted-foreground"
                                    )}>
                                        Quiero proteger a mi familia a futuro con mensualidades cómodas y el enganche más bajo.
                                    </p>
                                    {mode === 'prevision' && <Sparkles className="absolute top-4 right-4 text-accent w-5 h-5 animate-pulse" />}
                                </button>

                                <button 
                                    onClick={() => setMode('inmediato')}
                                    className={cn(
                                        "p-8 rounded-[2.5rem] border text-left transition-all duration-500 group relative overflow-hidden",
                                        mode === 'inmediato' 
                                            ? "bg-accent text-primary border-accent shadow-2xl" 
                                            : "bg-white border-primary/10 hover:border-primary/30"
                                    )}
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className={cn(
                                            "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                                            mode === 'inmediato' ? "bg-primary text-white" : "bg-primary/5 text-primary"
                                        )}>
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold">Es urgente (Hoy)</h4>
                                    </div>
                                    <p className={cn(
                                        "text-sm font-light leading-relaxed",
                                        mode === 'inmediato' ? "text-primary/70" : "text-muted-foreground"
                                    )}>
                                        Tengo un suceso hoy y necesito una solución inmediata. Requiere pago de apertura.
                                    </p>
                                </button>
                            </div>
                        </div>

                        {/* 2. SELECCIÓN DE CAPACIDAD */}
                        <div className="space-y-6">
                            <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</span>
                                ¿Cuántas personas deseas proteger?
                            </label>
                            <div className="flex flex-wrap gap-4">
                                {[2, 3, 4, 5].map((num) => (
                                    <button 
                                        key={num}
                                        onClick={() => setSelectedGavetas(num)}
                                        className={cn(
                                            "flex-1 min-w-[120px] py-6 px-4 rounded-3xl border font-bold transition-all duration-500 flex flex-col items-center gap-2",
                                            selectedGavetas === num 
                                                ? "bg-primary text-white border-primary shadow-xl scale-[1.05]" 
                                                : "bg-white border-primary/10 text-primary/60 hover:border-primary/40"
                                        )}
                                    >
                                        <span className="text-3xl font-serif leading-none">{num}</span>
                                        <span className="text-[10px] uppercase tracking-widest">{num === 1 ? 'Gaveta' : 'Gavetas'}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. SELECCIÓN DE PLAZO */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</span>
                                    ¿A cuántos meses deseas pagar?
                                </label>
                                <span className="text-xs text-accent font-bold italic">
                                    {mode === 'prevision' ? 'Plazos de hasta 72 meses' : 'Crédito inmediato'}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                                {availableFinancing.map((opt) => (
                                    <button 
                                        key={opt.months}
                                        onClick={() => setSelectedMonths(opt.months)}
                                        className={cn(
                                            "py-4 rounded-2xl border text-sm font-bold transition-all relative overflow-hidden",
                                            selectedMonths === opt.months 
                                                ? "bg-primary text-white border-primary shadow-lg" 
                                                : "bg-white border-primary/5 text-primary/40 hover:bg-primary/5 hover:border-primary/20"
                                        )}
                                    >
                                        {opt.months} M
                                        {(opt.months === 3 || opt.months === 6) && mode === 'prevision' && (
                                            <div className="absolute top-0 right-0">
                                                <div className="bg-accent text-primary text-[6px] font-black px-1 py-0.5 rounded-bl-lg uppercase">0%</div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Summary Card */}
                    <div className="lg:col-span-12 xl:col-span-4 sticky top-12">
                        <motion.div 
                            layout
                            className="bg-primary rounded-[3rem] p-10 text-white shadow-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                            
                            <div className="relative z-10 space-y-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Sparkles className="w-5 h-5 text-accent" />
                                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">Tu Plan de Protección</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold italic mb-2">
                                        Fosa {selectedGavetas} Gavetas
                                    </h3>
                                    <p className="text-xs text-white/40 font-light underline decoration-accent/30 underline-offset-4">
                                        {mode === 'prevision' ? 'Modalidad: Planeación Previsora' : 'Modalidad: Uso Inmediato'}
                                    </p>
                                </div>

                                <div className="space-y-6 pt-6 border-t border-white/10">
                                    {/* PAGO INICIAL */}
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <span className="text-xs font-bold text-white/50 uppercase">Pago Inicial</span>
                                            <div className="flex flex-col text-[10px] text-white/30 italic">
                                                <span>Enganche: ${enganche.toLocaleString()}</span>
                                                {maintenance > 0 && <span>Mantenimiento: ${maintenance.toLocaleString()}</span>}
                                            </div>
                                        </div>
                                        <span className="text-3xl font-bold text-accent">${totalInitial.toLocaleString()}</span>
                                    </div>

                                    {/* MENSUALIDAD */}
                                    <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex justify-between items-center group">
                                        <div>
                                            <span className="text-[10px] font-bold text-white/50 uppercase block">Mensualidad</span>
                                            <span className="text-2xl font-bold">{selectedMonths} pagos de</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                                                ${Math.ceil(monthlyPayment).toLocaleString()}
                                            </div>
                                            {isInterestFree && (
                                                <span className="text-[8px] bg-accent text-primary font-black px-2 py-0.5 rounded-full uppercase">Sin Intereses</span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* TOTAL INFO */}
                                <div className="pt-6 border-t border-white/10 space-y-4">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-white/40">Costo Final Propiedad:</span>
                                        <span className="font-bold text-white/70">${currentFinancing.total.toLocaleString()} MXN</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-white/40 italic flex items-center gap-1">
                                            <Info className="w-3 h-3" />
                                            Precios sujetos a disponibilidad
                                        </span>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => {
                                        const msg = `Hola! Usé la calculadora web. Me interesa el plan de ${selectedGavetas} Gavetas a ${selectedMonths} meses en modalidad de ${mode === 'prevision' ? 'Previsión' : 'Uso Inmediato'}.`
                                        window.open(`https://wa.me/525623355155?text=${encodeURIComponent(msg)}`, '_blank')
                                    }}
                                    className="w-full h-16 bg-accent text-primary rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all hover:bg-white hover:scale-[1.02] active:scale-95 shadow-2xl"
                                >
                                    Fijar Cotización por WhatsApp
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                        </motion.div>
                        
                        {/* ADICIONALES */}
                        <div className="mt-8 p-6 rounded-3xl border border-primary/5 bg-muted/30">
                            <h5 className="text-xs font-bold text-primary mb-3 flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                ¿Qué incluye este plan?
                            </h5>
                            <ul className="space-y-2">
                                {currentPlan.features.map((f, i) => (
                                    <li key={i} className="text-[10px] text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary/20" />
                                        {f}
                                    </li>
                                ))}
                                <li className="text-[10px] text-muted-foreground flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-primary/20" />
                                    No incluye construcción de lápida (opcional)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* COMPARATIVE HIGHLIGHT */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 rounded-[3.5rem] bg-gradient-to-r from-primary to-accent/20 text-white flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <Sparkles className="w-10 h-10 text-accent" />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-2xl font-serif font-bold underline decoration-accent/30 underline-offset-8">¿Por qué elegir Previsión?</h4>
                        <p className="text-white/60 font-light text-base max-w-3xl leading-relaxed">
                            Aunque el costo final de la propiedad es el mismo, la modalidad de **Previsión** te permite iniciar con solo **$1,500 MXN** y diferir el resto hasta en **6 años**, protegiendo tu economía familiar contra la inflación y gastos de emergencia inesperados.
                        </p>
                    </div>
                    <div className="hidden lg:block ml-auto">
                        <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                            <span className="text-[10px] text-white/40 block mb-1">Ahorro en Desembolso Inicial</span>
                            <span className="text-3xl font-bold text-accent">~80%</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

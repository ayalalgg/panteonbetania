"use client"

import { useState, useMemo, useEffect } from "react"
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
    ArrowRight,
    LayoutGrid,
    Inbox
} from "lucide-react"
import { cn } from "@/lib/utils"
import { PROTECTION_PLANS, NICHO_PLANS, ProtectionPlan, FinancingOption } from "@/data/protection-plans"

export function ProtectionCalculator() {
    const [category, setCategory] = useState<'panteon' | 'nichos'>('panteon')
    const [mode, setMode] = useState<'prevision' | 'inmediato'>('prevision')
    
    // Panteon state
    const [selectedGavetas, setSelectedGavetas] = useState<number>(2)
    
    // Nichos state
    const [selectedUrnas, setSelectedUrnas] = useState<number>(2)
    const [selectedLocation, setSelectedLocation] = useState<'Central (Filas 3 y 4)' | 'Lateral (Filas 1, 2, 5, 6)'>('Central (Filas 3 y 4)')

    const [selectedMonths, setSelectedMonths] = useState<number>(36)

    // Find the current plan based on category
    const currentPlan = useMemo<ProtectionPlan>(() => {
        if (category === 'panteon') {
            return PROTECTION_PLANS.find((p: ProtectionPlan) => p.gavetas === selectedGavetas) || PROTECTION_PLANS[0]
        } else {
            return NICHO_PLANS.find((p: ProtectionPlan) => 
                p.urnas === selectedUrnas && p.location === selectedLocation
            ) || NICHO_PLANS[0]
        }
    }, [category, selectedGavetas, selectedUrnas, selectedLocation])

    // Get available financing for current mode
    const availableFinancing = useMemo<FinancingOption[]>(() => {
        const base = mode === 'prevision' ? currentPlan.previsionFinancing : currentPlan.inmediatoFinancing
        return [
            { months: 0, monthly: 0, total: currentPlan.priceContado },
            ...base
        ]
    }, [mode, currentPlan])

    // Find current financing option
    const currentFinancing = useMemo<FinancingOption>(() => {
        const found = availableFinancing.find((f: FinancingOption) => f.months === selectedMonths)
        return found || availableFinancing[0]
    }, [availableFinancing, selectedMonths])

    // Auto-adjust months if not available in new mode or category
    useEffect(() => {
        const isAvailable = availableFinancing.some((f: FinancingOption) => f.months === selectedMonths)
        if (!isAvailable) {
            // Default to 36 months if possible, otherwise first available
            const has36 = availableFinancing.find((f: FinancingOption) => f.months === 36)
            setSelectedMonths(has36 ? 36 : (availableFinancing[1]?.months || availableFinancing[0].months))
        }
    }, [availableFinancing, selectedMonths])

    // Calculations
    const isContado = selectedMonths === 0
    const baseEnganche = mode === 'prevision' ? currentPlan.enganchePrevision : currentPlan.engancheInmediato
    const enganche = isContado ? currentPlan.priceContado : baseEnganche
    const maintenance = mode === 'inmediato' ? currentPlan.maintenanceCost : 0
    const totalInitial = enganche + maintenance

    const monthlyPayment = currentFinancing.monthly
    const isInterestFree = mode === 'prevision' && (selectedMonths === 3 || selectedMonths === 6)

    return (
        <section className="py-24 px-6 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER */}
                <div className="text-center mb-16 space-y-6">
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-accent/10 text-accent text-xs font-bold px-6 py-2 rounded-full border border-accent/20 tracking-[0.3em] uppercase inline-block"
                    >
                        Panteón Bethania
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary tracking-tight">
                        Calculadora de <span className="text-accent italic">Protección</span>
                    </h2>
                    
                    {/* CATEGORY SELECTOR */}
                    <div className="flex justify-center mt-8 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
                        <div className="bg-white p-2 rounded-[2rem] shadow-xl border border-primary/5 flex gap-2 shrink-0">
                            <button 
                                onClick={() => setCategory('panteon')}
                                className={cn(
                                    "px-10 py-4 rounded-[1.5rem] font-bold transition-all flex items-center gap-3",
                                    category === 'panteon' ? "bg-primary text-white shadow-lg" : "text-primary/60 hover:bg-primary/5"
                                )}
                            >
                                <LayoutGrid className="w-5 h-5" />
                                Panteón
                            </button>
                            <button 
                                onClick={() => setCategory('nichos')}
                                className={cn(
                                    "px-10 py-4 rounded-[1.5rem] font-bold transition-all flex items-center gap-3",
                                    category === 'nichos' ? "bg-primary text-white shadow-lg" : "text-primary/60 hover:bg-primary/5"
                                )}
                            >
                                <Inbox className="w-5 h-5" />
                                Nichos
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LEFT COLUMN: Controls */}
                    <div className="lg:col-span-12 xl:col-span-8 space-y-12">
                        
                        {/* 1. SELECCIÓN DE ESCENARIO */}
                        <div className="space-y-6">
                            <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm shadow-lg">1</span>
                                ¿Cuál es tu situación actual?
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button 
                                    onClick={() => setMode('prevision')}
                                    className={cn(
                                        "p-8 rounded-[2.5rem] border text-left transition-all duration-500 group relative overflow-hidden",
                                        mode === 'prevision' 
                                            ? "bg-primary text-white border-primary shadow-2xl scale-[1.02]" 
                                            : "bg-white border-primary/10 hover:border-primary/30"
                                    )}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-lg",
                                            mode === 'prevision' ? "bg-accent text-primary" : "bg-primary/5 text-primary"
                                        )}>
                                            <Clock className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold">Quiero Prevenir</h4>
                                            <p className={cn("text-xs font-bold uppercase tracking-widest", mode === 'prevision' ? "text-accent" : "text-primary/60")}>A Futuro</p>
                                        </div>
                                    </div>
                                    <p className={cn(
                                        "text-sm font-light leading-relaxed",
                                        mode === 'prevision' ? "text-white/80" : "text-muted-foreground"
                                    )}>
                                        Asegura el precio actual y obtén hasta 6 años de financiamiento con el enganche más bajo.
                                    </p>
                                    {mode === 'prevision' && <Sparkles className="absolute top-4 right-4 text-accent w-6 h-6 animate-pulse" />}
                                </button>

                                <button 
                                    onClick={() => setMode('inmediato')}
                                    className={cn(
                                        "p-8 rounded-[2.5rem] border text-left transition-all duration-500 group relative overflow-hidden",
                                        mode === 'inmediato' 
                                            ? "bg-accent text-primary border-accent shadow-2xl scale-[1.02]" 
                                            : "bg-white border-primary/10 hover:border-primary/30"
                                    )}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-lg",
                                            mode === 'inmediato' ? "bg-primary text-white" : "bg-primary/5 text-primary"
                                        )}>
                                            <ShieldCheck className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold">Uso Inmediato</h4>
                                            <p className={cn("text-xs font-bold uppercase tracking-widest", mode === 'inmediato' ? "text-primary" : "text-primary/60")}>Necesidad Hoy</p>
                                        </div>
                                    </div>
                                    <p className={cn(
                                        "text-sm font-light leading-relaxed",
                                        mode === 'inmediato' ? "text-primary font-medium" : "text-muted-foreground"
                                    )}>
                                        Atención inmediata en caso de fallecimiento. Requiere liquidación o enganche mayor.
                                    </p>
                                </button>
                            </div>
                        </div>

                        {/* 2. CONFIGURACIÓN DE PROPIEDAD */}
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm shadow-lg">2</span>
                                Configura tu {category === 'panteon' ? 'Fosa' : 'Nicho'}
                            </label>

                            {category === 'panteon' ? (
                                <div className="space-y-6">
                                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest italic">Número de Gavetas:</p>
                                    <div className="full-bleed-carousel gap-4 py-4">
                                            { [2, 3, 4, 5].map((num) => {
                                                const plan = PROTECTION_PLANS.find(p => p.gavetas === num);
                                                return (
                                                    <button 
                                                        key={num}
                                                        onClick={() => setSelectedGavetas(num)}
                                                        className={cn(
                                                            "flex-1 min-w-[140px] md:min-w-[120px] py-8 rounded-[2rem] border font-bold transition-all duration-500 flex flex-col items-center gap-2 group relative overflow-hidden snap-center",
                                                            selectedGavetas === num 
                                                                ? "bg-primary text-white border-primary shadow-xl scale-[1.05]" 
                                                                : "bg-white border-primary/10 text-primary/60 hover:border-primary/40"
                                                        )}
                                                    >
                                                        <span className="text-4xl font-serif leading-none">{num}</span>
                                                        <span className="text-xs uppercase tracking-widest font-bold">Gavetas</span>
                                                        <div className={cn(
                                                            "mt-4 px-3 py-1 rounded-full text-[10px] font-bold border transition-colors",
                                                            selectedGavetas === num ? "bg-white/10 border-white/20 text-accent" : "bg-primary/5 border-primary/10 text-primary"
                                                        )}>
                                                            Contado: ${plan?.priceContado.toLocaleString()}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <p className="text-xs font-bold text-primary/40 uppercase tracking-widest italic">Capacidad de Urnas:</p>
                                        <div className="full-bleed-carousel gap-4 py-2">
                                            { [2, 4].map((num) => {
                                                const plan = NICHO_PLANS.find(p => p.urnas === num && p.location === selectedLocation);
                                                return (
                                                    <button 
                                                        key={num}
                                                        onClick={() => setSelectedUrnas(num)}
                                                        className={cn(
                                                            "flex-1 min-w-[120px] py-6 rounded-3xl border font-bold transition-all flex flex-col items-center gap-1 snap-center",
                                                            selectedUrnas === num 
                                                                ? "bg-primary text-white border-primary shadow-lg" 
                                                                : "bg-white border-primary/10 text-primary/60"
                                                        )}
                                                    >
                                                        <span className="text-2xl font-serif">{num}</span>
                                                        <span className="text-[10px] font-bold uppercase tracking-tighter">{num === 1 ? 'Urna' : 'Urnas'}</span>
                                                        <span className="text-[9px] opacity-60 font-medium">${plan?.priceContado.toLocaleString()}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <p className="text-xs font-bold text-primary/40 uppercase tracking-widest italic">Ubicación (Fila):</p>
                                        <div className="full-bleed-carousel gap-4 py-2">
                                            {[
                                                { label: 'Central (Ojos)', value: 'Central (Filas 3 y 4)' },
                                                { label: 'Lateral', value: 'Lateral (Filas 1, 2, 5, 6)' }
                                            ].map((loc) => (
                                                <button 
                                                    key={loc.value}
                                                    onClick={() => setSelectedLocation(loc.value as any)}
                                                    className={cn(
                                                        "flex-1 min-w-[140px] py-6 rounded-3xl border font-bold transition-all text-xs leading-tight px-4 snap-center",
                                                        selectedLocation === loc.value 
                                                            ? "bg-primary text-white border-primary shadow-lg" 
                                                            : "bg-white border-primary/10 text-primary/60"
                                                    )}
                                                >
                                                    {loc.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 3. SELECCIÓN DE PLAZO */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm shadow-lg">3</span>
                                    Plan de Financiamiento
                                </label>
                                <span className={cn(
                                    "text-xs font-bold italic transition-colors",
                                    mode === 'prevision' ? "text-accent" : "text-primary/60"
                                )}>
                                    {mode === 'prevision' ? 'Hasta 72 meses disponible' : 'Diferido inmediato'}
                                </span>
                            </div>
                            <div className="full-bleed-carousel gap-3 py-4">
                                {availableFinancing.map((opt) => (
                                    <button 
                                        key={opt.months}
                                        onClick={() => setSelectedMonths(opt.months)}
                                        className={cn(
                                            "min-w-[80px] py-6 rounded-2xl border text-sm font-black transition-all relative overflow-hidden snap-center",
                                            selectedMonths === opt.months 
                                                ? "bg-primary text-white border-primary shadow-xl scale-[1.05]" 
                                                : "bg-white border-primary/5 text-primary/40 hover:bg-white hover:border-primary/20"
                                        )}
                                    >
                                        {opt.months === 0 ? "Contado" : `${opt.months} M`}
                                        {(opt.months === 3 || opt.months === 6) && mode === 'prevision' && (
                                            <div className="absolute top-0 right-0">
                                                <div className="bg-accent text-primary text-[8px] font-black px-2 py-1 rounded-bl-xl uppercase tracking-tighter shadow-sm">0%</div>
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
                            className="bg-primary rounded-[3.5rem] p-10 text-white shadow-3xl relative overflow-hidden"
                        >
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            
                            <div className="relative z-10 space-y-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Sparkles className="w-4 h-4 text-accent" />
                                        </div>
                                        <span className="text-xs uppercase font-black tracking-[0.3em] text-white/70">Resumen del Plan</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold italic mb-3 leading-tight">
                                        {currentPlan.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className={cn(
                                            "text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest",
                                            mode === 'prevision' ? "bg-accent/20 text-accent border border-accent/30" : "bg-white/10 text-white/60 border border-white/10"
                                        )}>
                                            {mode === 'prevision' ? 'Planeación' : 'Uso Inmediato'}
                                        </span>
                                        {currentPlan.location && (
                                             <span className="text-[10px] text-white/70 uppercase font-bold">{currentPlan.location}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-8 pt-10 border-t border-white/5">
                                    {/* PAGO INICIAL */}
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-2">
                                             <span className="text-xs font-black text-white/70 uppercase tracking-[0.2em]">Pago Inicial Hoy</span>
                                             <div className="flex flex-col text-xs text-white/60 italic font-medium">
                                                 <span>• {isContado ? 'Liquidación Total' : 'Enganche'}: ${enganche.toLocaleString()}</span>
                                                {maintenance > 0 && <span>• Mantenimiento 2025: ${maintenance.toLocaleString()}</span>}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-4xl font-serif font-bold text-accent italic">${totalInitial.toLocaleString()}</span>
                                             <span className="block text-[10px] text-accent font-bold uppercase mt-1">Gasto Único Inicial</span>
                                        </div>
                                    </div>

                                    {/* MENSUALIDAD */}
                                    <div className="bg-white/[0.03] rounded-[2rem] p-8 border border-white/5 backdrop-blur-md relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="relative z-10 flex justify-between items-center">
                                            <div>
                                                 <span className="text-xs font-black text-white/70 uppercase tracking-widest block mb-2">{isContado ? 'Plan Seleccionado' : 'Mensualidad Fija'}</span>
                                                <span className="text-2xl font-bold">{isContado ? 'Pago Único' : `${selectedMonths} pagos de`}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl font-serif font-black text-white group-hover:text-accent transition-all duration-500 scale-110">
                                                     ${isContado ? currentPlan.priceContado.toLocaleString() : Math.ceil(monthlyPayment).toLocaleString()}
                                                </div>
                                                {isInterestFree && !isContado && (
                                                    <div className="flex justify-end mt-2">
                                                         <span className="text-[10px] bg-accent text-primary font-black px-3 py-1 rounded-full uppercase tracking-tighter">Meses Sin Intereses</span>
                                                    </div>
                                                )}
                                                {isContado && (
                                                    <div className="flex justify-end mt-2">
                                                         <span className="text-[10px] bg-emerald-500 text-white font-black px-3 py-1 rounded-full uppercase tracking-tighter">Máximo Ahorro</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TOTAL INFO */}
                                <div className="pt-8 border-t border-white/5 space-y-4">
                                    <div className="flex justify-between items-center">
                                         <span className="text-xs text-white/60 font-semibold italic">Precio de Contado:</span>
                                        <span className="text-sm font-bold text-white/50">${currentPlan.priceContado.toLocaleString()} MXN</span>
                                    </div>

                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                         <span className="text-xs text-white/60 font-semibold italic">Costo por Financiamiento:</span>
                                        <span className={cn(
                                            "text-sm font-bold",
                                            (currentFinancing.total - currentPlan.priceContado) > 0 ? "text-rose-400" : "text-emerald-400"
                                        )}>
                                            {currentFinancing.total - currentPlan.priceContado > 0 
                                                ? `+$${(currentFinancing.total - currentPlan.priceContado).toLocaleString()} (${(((currentFinancing.total - currentPlan.priceContado) / currentPlan.priceContado) * 100).toFixed(1)}%)`
                                                : '$0 (0% Interés)'
                                            }
                                        </span>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                         <span className="text-xs text-white/60 font-semibold">Inversión Final Proyectada:</span>
                                        <span className="text-sm font-bold text-white/80">${currentFinancing.total.toLocaleString()} MXN</span>
                                    </div>
                                    
                                    <div className="bg-accent/10 border border-accent/20 rounded-2xl p-4 mb-6">
                                        <div className="flex gap-3">
                                            <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                                            <p className="text-[11px] leading-tight text-white/90">
                                                <span className="font-black text-accent uppercase block mb-1">Folio de Atención Requerido</span>
                                                Para validar este precio y asegurar tu promoción, solicita tu **Folio de Seguridad Ayala** ahora mismo. Presentarlo es obligatorio al llegar al panteón para evitar cargos de terceros.
                                            </p>
                                        </div>
                                    </div>

                                    <button 
                                        onClick={() => {
                                            const msg = `Hola! Me interesa generar mi Folio de Seguridad Ayala para el plan: ${currentPlan.title} (${currentPlan.location || ''}) a ${selectedMonths} meses en modalidad de ${mode === 'prevision' ? 'Previsión' : 'Uso Inmediato'}.`
                                            window.open(`https://wa.me/525623355155?text=${encodeURIComponent(msg)}`, '_blank')
                                        }}
                                        className="w-full h-20 bg-accent text-primary rounded-3xl font-black text-sm flex items-center justify-center gap-4 transition-all hover:bg-white hover:scale-[1.02] active:scale-95 shadow-2xl relative group overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        <span className="relative z-10 flex items-center gap-3">
                                            Solicitar Cotización PDF
                                            <ArrowRight className="w-6 h-6" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* INCLUSIONES */}
                        <div className="mt-8 p-8 rounded-[2.5rem] border border-primary/5 bg-white shadow-xl">
                            <h5 className="text-xs font-black text-primary mb-5 flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                Beneficios Bethania
                            </h5>
                            <ul className="space-y-4">
                                {currentPlan.features.map((f: string, i: number) => (
                                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-sm" />
                                        {f}
                                    </li>
                                ))}
                                <li className="text-xs text-muted-foreground flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-sm" />
                                    Derecho de uso a perpetuidad
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
                    className="mt-24 p-12 md:p-20 rounded-[4rem] bg-primary text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden group"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="w-24 h-24 rounded-3xl bg-accent flex items-center justify-center shrink-0 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                        <Building2 className="w-12 h-12 text-primary" />
                    </div>
                    <div className="space-y-6 relative z-10">
                        <h4 className="text-3xl font-serif font-bold italic leading-tight">
                            ¿Por qué contratar <span className="text-accent underline decoration-accent/30 underline-offset-8">antes de tiempo?</span>
                        </h4>
                        <p className="text-white/60 font-light text-lg max-w-3xl leading-relaxed">
                            Al contratar en **Previsión**, congelas el costo de hoy para siempre. Un {category === 'panteon' ? 'terreno' : 'nicho'} funerario aumenta su valor entre un **8% y 12% anual**. Al elegir esta modalidad, no solo ahorras dinero, sino que evitas a tu familia trámites dolorosos y desembolsos fuertes en momentos de crisis.
                        </p>
                    </div>
                    <div className="lg:ml-auto relative z-10">
                        <div className="px-10 py-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-center backdrop-blur-md">
                            <span className="text-[10px] text-white/40 font-black block mb-2 uppercase tracking-widest">Inversión Inicial</span>
                            <span className="text-5xl font-serif font-bold text-accent italic">-$1,500</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

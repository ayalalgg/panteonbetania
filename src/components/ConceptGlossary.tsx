"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldCheck, Flower2, Box, Clock, Smartphone, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react"
import { WhatsAppCapture } from "./WhatsAppCapture"
import { cn } from "@/lib/utils"

const concepts = [
    {
        id: "perpetuidad",
        title: "Perpetuidad",
        icon: ShieldCheck,
        desc: "Propiedad definitiva bajo tierra en jardines botánicos. Es una inversión de por vida que garantiza un lugar de descanso eterno sin preocupaciones futuras.",
        benefits: ["Protección patrimonial", "Transferible", "Nunca caduca", "Seguridad privada 24/7"],
        badge: "Garantía de Por Vida",
        extra: "Incluye el derecho de uso a perpetuidad y mantenimiento constante de los jardines."
    },
    {
        id: "nicho",
        title: "Nicho",
        icon: Flower2,
        desc: "Espacios elegantes en muro diseñados para el resguardo de urnas con cenizas. Con cristal templado para una vista digna y solemne.",
        benefits: ["Diseño moderno", "Fácil mantenimiento", "Vistas privilegiadas", "Ubicación en galería"],
        badge: "Exclusividad",
        extra: "Ideal para quienes prefieren la cremación y buscan un entorno estéticamente superior."
    },
    {
        id: "gaveta",
        title: "Gaveta",
        icon: Box,
        desc: "Espacio individual de concreto diseñado para el resguardo digno. Es la base fundamental de un descanso seguro y estructurado.",
        benefits: ["Estructura reforzada", "Higiene garantizada", "Uso eficiente", "Dignidad absoluta"],
        badge: "Fundamental",
        extra: "Nuestras gavetas cumplen con las normativas sanitarias más estrictas."
    },
    {
        id: "temporalidad",
        title: "Temporalidad",
        icon: Clock,
        desc: "Uso por un periodo determinado (7 años) en espacios individuales sobre tierra. Una opción flexible para necesidades inmediatas.",
        benefits: ["Costo accesible", "Disponibilidad inmediata", "Sin anualidades", "Renovable"],
        badge: "Flexibilidad Total",
        extra: "Transcurridos los 7 años, se puede optar por la cremación o traslado a perpetuidad."
    }
]

export function ConceptGlossary() {
    const [selectedTab, setSelectedTab] = useState<'basics' | 'comparison'>('basics')
    const [activeConcept, setActiveConcept] = useState(concepts[0])

    return (
        <section className="py-32 px-6 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-bold"
                    >
                        Guía de Decisión
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-primary"
                    >
                        Comprende tu <span className="text-accent italic">Inversión</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Diseñamos esta guía interactiva para que elijas con total claridad el futuro de tus seres queridos.
                    </motion.p>
                </div>

                {/* TAB SELECTOR */}
                <div className="flex justify-center mb-16">
                    <div className="bg-muted/30 p-1.5 rounded-2xl md:rounded-full inline-flex flex-col md:flex-row gap-2 border border-muted-foreground/10 shadow-sm">
                        <button 
                            onClick={() => setSelectedTab('basics')}
                            className={cn(
                                "px-8 py-3 rounded-xl md:rounded-full text-sm font-bold transition-all duration-500 flex items-center gap-2",
                                selectedTab === 'basics' ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:bg-muted/50"
                            )}
                        >
                            <HelpCircle className="w-4 h-4" />
                            Conceptos Clave
                        </button>
                        <button 
                            onClick={() => setSelectedTab('comparison')}
                            className={cn(
                                "px-8 py-3 rounded-xl md:rounded-full text-sm font-bold transition-all duration-500 flex items-center gap-2",
                                selectedTab === 'comparison' ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:bg-muted/50"
                            )}
                        >
                            <AlertCircle className="w-4 h-4" />
                            Comparar Inversión
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {selectedTab === 'basics' ? (
                        <motion.div 
                            key="basics"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                        >
                            {/* Navigation List */}
                            <div className="lg:col-span-4 full-bleed-carousel gap-4 py-4 lg:flex-col lg:space-y-4 lg:overflow-visible lg:mx-0 lg:px-0 lg:snap-none">
                                {concepts.map((concept) => (
                                    <button
                                        key={concept.id}
                                        onClick={() => setActiveConcept(concept)}
                                        className={cn(
                                            "min-w-[280px] lg:min-w-0 p-6 text-left rounded-[2rem] border transition-all duration-500 group relative overflow-hidden snap-center",
                                            activeConcept.id === concept.id 
                                                ? "bg-primary text-white border-primary shadow-xl scale-[1.02]" 
                                                : "bg-muted/5 border-primary/5 hover:border-primary/20 hover:bg-muted/10"
                                        )}
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className={cn(
                                                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110",
                                                activeConcept.id === concept.id ? "bg-accent text-primary shadow-lg shadow-accent/20" : "bg-primary/10 text-primary"
                                            )}>
                                                <concept.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif font-bold text-lg">{concept.title}</h3>
                                                <span className={cn(
                                                    "text-xs font-bold uppercase tracking-widest",
                                                    activeConcept.id === concept.id ? "text-accent" : "text-muted-foreground/80"
                                                )}>
                                                    {concept.badge}
                                                </span>
                                            </div>
                                        </div>
                                        {activeConcept.id === concept.id && (
                                            <motion.div 
                                                layoutId="pill"
                                                className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Detail Panel */}
                            <div className="lg:col-span-8 bg-muted/5 border border-primary/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center md:text-left md:items-start group min-h-[500px]">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                    <activeConcept.icon className="w-64 h-64 text-primary" />
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeConcept.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative z-10 space-y-8"
                                    >
                                        <div className="space-y-4">
                                            <span className="bg-accent/10 text-accent text-xs font-bold px-4 py-1 rounded-full border border-accent/20 tracking-wider">
                                                DETALLES DEL SERVICIO
                                            </span>
                                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary tracking-tight">
                                                {activeConcept.title}
                                            </h2>
                                            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed italic font-light max-w-2xl">
                                                "{activeConcept.desc}"
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Beneficios Principales</h4>
                                                <ul className="space-y-3">
                                                    {activeConcept.benefits.map((benefit, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                                            </div>
                                                            <span className="text-base">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-6 bg-white rounded-3xl border border-primary/5 shadow-sm">
                                                <h4 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">Nota Informativa</h4>
                                                <p className="text-muted-foreground text-base leading-relaxed font-light">
                                                    {activeConcept.extra}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-8">
                                            <WhatsAppCapture>
                                                {(handleWhatsAppClick) => (
                                                    <button 
                                                        onClick={() => handleWhatsAppClick(`Quisiera más información didáctica sobre el concepto de ${activeConcept.title}.`)}
                                                        className="bg-primary text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:bg-black transition-all hover:scale-[1.02] active:scale-95"
                                                    >
                                                        Consultar con un Asesor
                                                        <Smartphone className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </WhatsAppCapture>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="comparison"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-muted/5 border border-primary/5 rounded-[3rem] overflow-hidden shadow-sm"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Perpetuidad Column */}
                                <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-primary/5 hover:bg-primary/[0.02] transition-colors duration-500">
                                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
                                        <ShieldCheck className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-primary mb-4">Perpetuidad</h3>
                                    <p className="text-muted-foreground font-light text-lg mb-8">Es el derecho de uso infinito. Una inversión que queda como legado para tu familia de generación en generación.</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-base">Propiedad Definitiva</p>
                                                <p className="text-muted-foreground text-sm font-light">Nunca caduca ni vence tras 7 años.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-base">Plusvalía Creciente</p>
                                                <p className="text-muted-foreground text-sm font-light">El valor de tu espacio aumenta con el tiempo.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-base">Financiamiento</p>
                                                <p className="text-muted-foreground text-sm font-light">Planes de hasta 36 meses de crédito.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Temporalidad Column */}
                                <div className="p-8 md:p-16 hover:bg-accent/5 transition-colors duration-500">
                                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-accent/20">
                                        <Clock className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-primary mb-4">Temporalidad</h3>
                                    <p className="text-muted-foreground font-light text-lg mb-8">Uso individual por un periodo de 7 años. Una solución pragmática ante imprevistos.</p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-base">Costo de Oportunidad</p>
                                                <p className="text-muted-foreground text-sm font-light">Inversión inicial significativamente menor.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-base">Uso Inmediato</p>
                                                <p className="text-muted-foreground text-sm font-light">Ideal para cubrir la emergencia hoy mismo.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary text-base">Transicionable</p>
                                                <p className="text-muted-foreground text-sm font-light">Se puede acreditar a una perpetuidad a futuro.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Banner */}
                            <div className="bg-primary p-8 md:p-12 text-center text-white relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                                    <h4 className="text-2xl font-serif font-bold">¿Aún tienes dudas sobre cuál elegir?</h4>
                                    <p className="text-white/60 font-light">Nuestros expertos pueden ayudarte a realizar un cálculo de inversión basado en tus necesidades familiares.</p>
                                    <WhatsAppCapture>
                                        {(handleWhatsAppClick) => (
                                            <button 
                                                onClick={() => handleWhatsAppClick('Deseo ayuda para comparar los servicios de Perpetuidad vs Temporalidad.')}
                                                className="bg-accent text-primary px-12 py-4 rounded-2xl font-bold hover:bg-white transition-all shadow-2xl"
                                            >
                                                Solicitar Asesoría de Inversión
                                            </button>
                                        )}
                                    </WhatsAppCapture>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

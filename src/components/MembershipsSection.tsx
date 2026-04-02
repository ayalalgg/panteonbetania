"use client"

import { MembershipGrid } from "./MembershipGrid"

interface MembershipsSectionProps {
    plansData?: {
        perpetuidades?: any[];
        nichos?: any[];
        temporalidad?: { title: string; price: number; enganche: number; features: string[] };
    };
}

export function MembershipsSection({ plansData }: MembershipsSectionProps) {
    return (
        <section id="planes" className="py-32 bg-gradient-to-b from-primary to-black text-primary-foreground relative overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Inversión Inteligente para el Futuro
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight">
                        Planes de <span className="text-accent italic">Protección</span>
                    </h2>

                    <p className="text-white/60 max-w-3xl mx-auto font-light text-lg md:text-xl leading-relaxed">
                        Nuestras soluciones integrales ofrecen la tranquilidad que tu familia merece, combinando espacios exclusivos con servicios funerarios de excelencia.
                    </p>
                </div>

                <MembershipGrid plansData={plansData} />
            </div>
        </section>
    )
}

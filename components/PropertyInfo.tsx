"use client"

import { MapPin, ShieldCheck, Flower2, Infinity, Users, Check } from "lucide-react"

interface PropertyInfoProps {
    title?: string
    address?: string
    tags?: string[]
}

export function PropertyInfo({
    title = "Panteón Bethania",
    address = "Ixtapaluca, Estado de México",
    tags
}: PropertyInfoProps) {
    return (
        <div className="py-2">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                <div className="space-y-2">
                    <h2 className="text-xs font-sans font-bold text-accent uppercase tracking-[0.2em]">
                        El Panteón Privado de Ixtapaluca
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-tight">
                        {title}
                    </h1>
                    {/* Location */}
                    <div className="flex items-center gap-2 text-muted-foreground pt-1">
                        <MapPin className="w-4 h-4 text-accent/70" />
                        <span className="text-sm font-medium">{address}</span>
                    </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 min-w-[200px] w-full md:w-auto">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1 font-bold">Inversión Inicial desde</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">$7,000</span>
                        <span className="text-sm font-medium text-primary/60">MXN</span>
                    </div>
                </div>
            </div>

            {/* Specs Pills (Horizontal Scroll) */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                {tags && tags.length > 0 ? (
                    tags.map((tag, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center min-w-[6rem] h-20 bg-muted/30 rounded-2xl border border-border/50 px-2 text-center">
                            <Check className="w-5 h-5 text-primary mb-2 opacity-80" />
                            <span className="text-xs font-semibold text-primary/80 leading-tight">{tag}</span>
                        </div>
                    ))
                ) : (
                    <>
                        <div className="flex flex-col items-center justify-center min-w-[5rem] h-20 bg-muted/30 rounded-2xl border border-border/50">
                            <Users className="w-6 h-6 text-primary mb-2 opacity-80" />
                            <span className="text-xs font-semibold text-primary/80">2-4 Gavetas</span>
                        </div>
                        <div className="flex flex-col items-center justify-center min-w-[5rem] h-20 bg-muted/30 rounded-2xl border border-border/50">
                            <Infinity className="w-6 h-6 text-primary mb-2 opacity-80" />
                            <span className="text-xs font-semibold text-primary/80">Perpetuidad</span>
                        </div>
                        <div className="flex flex-col items-center justify-center min-w-[5rem] h-20 bg-muted/30 rounded-2xl border border-border/50">
                            <ShieldCheck className="w-6 h-6 text-primary mb-2 opacity-80" />
                            <span className="text-xs font-semibold text-primary/80">Seguro 24/7</span>
                        </div>
                        <div className="flex flex-col items-center justify-center min-w-[5rem] h-20 bg-muted/30 rounded-2xl border border-border/50">
                            <Flower2 className="w-6 h-6 text-primary mb-2 opacity-80" />
                            <span className="text-xs font-semibold text-primary/80">Jardines</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

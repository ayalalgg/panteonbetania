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
        <div className="px-6 py-6 border-b border-border/40">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-sm font-sans font-semibold text-accent uppercase tracking-wider mb-1">
                        Club del Eterno Descanso
                    </h2>
                    <h1 className="text-3xl font-serif font-bold text-primary">
                        {title}
                    </h1>
                </div>
                <div className="text-right">
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Pago inicial desde</p>
                        <p className="text-2xl font-bold text-primary">$7,000</p>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-sans">{address}</span>
            </div>

            {/* Specs Pills (Horizontal Scroll) */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
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

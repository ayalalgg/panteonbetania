"use client"

import { MapPin, ShieldCheck, Flower2, Infinity, Users } from "lucide-react"

export function PropertyInfo() {
    return (
        <div className="px-6 py-6 border-b border-border/40">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-sm font-sans font-semibold text-accent uppercase tracking-wider mb-1">
                        Club del Eterno Descanso
                    </h2>
                    <h1 className="text-3xl font-serif font-bold text-primary">
                        Panteón Bethania
                    </h1>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-primary">$25,000</p>
                    <p className="text-xs text-muted-foreground">Desde / Plan</p>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-sans">Ixtapaluca, Estado de México</span>
            </div>

            {/* Specs Pills (Horizontal Scroll) */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
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
            </div>
        </div>
    )
}

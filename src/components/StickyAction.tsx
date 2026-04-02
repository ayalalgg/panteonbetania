"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Phone } from "lucide-react"

export function StickyAction() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const plansSection = document.getElementById('planes')
            if (!plansSection) return

            const rect = plansSection.getBoundingClientRect()
            // Hide if the top of the plans section is nearing the viewport or we are inside/past it
            // We'll hide it when the plans section enters the viewport
            const isPlansVisible = rect.top < window.innerHeight && rect.bottom >= 0

            setIsVisible(!isPlansVisible)
        }

        window.addEventListener('scroll', handleScroll)
        // Initial check
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToPlans = () => {
        const plansSection = document.getElementById('planes')
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={cn(
            "fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-primary/10 px-4 py-3 pb-8 md:pb-6 shadow-[0_-5px_30px_rgba(0,0,0,0.12)] md:hidden transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}>
            <div className="max-w-md mx-auto space-y-3">
                <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Portal Autorizado Grupo Ayala</span>
                </div>
                <div className="flex gap-3 items-center">
                    <Button
                        variant="outline"
                        className="w-14 h-12 rounded-2xl border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 shrink-0 p-0 shadow-sm"
                        asChild
                    >
                        <a href="tel:+525623355155" id="tracking-btn-call" title="Llamar ahora">
                            <Phone className="w-6 h-6" />
                        </a>
                    </Button>
                    <Button
                        id="tracking-btn-plans"
                        className="flex-1 rounded-2xl h-12 text-sm font-black bg-accent text-primary hover:bg-accent/90 shadow-xl shadow-accent/20 active:scale-[0.98] transition-all uppercase tracking-wider"
                        onClick={scrollToPlans}
                    >
                        Asegurar Beneficios Ayala
                    </Button>
                </div>
            </div>
        </div>
    )
}

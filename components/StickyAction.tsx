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
            "fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-t border-border/50 px-4 py-3 pb-8 md:pb-6 shadow-[0_-5px_25px_rgba(0,0,0,0.08)] md:hidden transition-transform duration-300",
            isVisible ? "translate-y-0" : "translate-y-full"
        )}>
            <div className="flex gap-3 items-center max-w-md mx-auto">
                <Button
                    variant="outline"
                    className="w-12 h-11 rounded-xl border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 shrink-0 p-0"
                    onClick={() => window.location.href = 'tel:+525623355155'}
                    title="Llamar ahora"
                >
                    <Phone className="w-5 h-5" />
                </Button>
                <Button
                    className="flex-1 rounded-xl h-11 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/10 active:scale-[0.98] transition-all"
                    onClick={scrollToPlans}
                >
                    Ver Costos y Planes
                </Button>
            </div>
        </div>
    )
}

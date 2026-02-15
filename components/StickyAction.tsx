"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

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
            "fixed bottom-0 left-0 w-full z-50 bg-white border-t border-border/50 p-4 pb-8 md:pb-6 shadow-[0_-5px_25px_rgba(0,0,0,0.08)] md:hidden transition-transform duration-300",
            isVisible ? "translate-y-0" : "translate-y-full"
        )}>
            <div className="flex gap-4 items-center">
                <div className="flex-1">
                    <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold">Pago inicial desde</p>
                    <p className="text-lg font-bold text-primary">$7,000 MXN</p>
                </div>
                <Button
                    className="flex-[2] rounded-xl h-12 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/10"
                    onClick={scrollToPlans}
                >
                    Ver Costos
                </Button>
            </div>
        </div>
    )
}

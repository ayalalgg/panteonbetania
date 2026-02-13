"use client"

import { Button } from "@/components/ui/button"

export function StickyAction() {
    const scrollToPlans = () => {
        const plansSection = document.getElementById('planes')
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-border/50 p-4 pb-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] md:hidden">
            <div className="flex gap-4 items-center">
                <div className="flex-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Pago inicial desde</p>
                    <p className="text-xl font-bold text-primary">$7,000 MXN</p>
                </div>
                <Button
                    className="flex-[2] rounded-full h-12 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                    onClick={scrollToPlans}
                >
                    Ver Costos
                </Button>
            </div>
        </div>
    )
}

"use client"

import { Button } from "@/components/ui/button"

export function DesktopBookingButton() {
    const scrollToPlans = () => {
        const plansSection = document.getElementById('planes')
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Button
            className="w-full rounded-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            onClick={scrollToPlans}
        >
            Ver Costos
        </Button>
    )
}

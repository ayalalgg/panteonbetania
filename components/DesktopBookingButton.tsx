"use client"

import { Button } from "@/components/ui/button"

export function DesktopBookingButton() {
    return (
        <Button
            className="w-full rounded-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            onClick={() => window.open('https://wa.me/525545065063?text=Me interesa agendar una visita', '_blank')}
        >
            Agendar Visita
        </Button>
    )
}

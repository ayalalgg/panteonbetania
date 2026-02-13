"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BrokerProfile() {
    return (
        <div className="px-6 py-6 border-b border-border/40">
            <h3 className="font-serif text-lg font-bold text-primary mb-4">Asesores de Grupo Funerario Ayala</h3>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Avatar className="h-14 w-14 border-2 border-white shadow-md bg-white p-1">
                            <AvatarImage src="/favicon.ico" alt="Grupo Funerario Ayala" className="object-contain" />
                            <AvatarFallback>GA</AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                        <p className="font-bold text-primary font-serif">Grupo Funerario Ayala</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Atención Personalizada</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-10 w-10 bg-accent/20 text-accent-foreground hover:bg-accent/30"
                        onClick={() => window.open('https://wa.me/525623355155', '_blank')}
                    >
                        <MessageCircle className="w-5 h-5" />
                    </Button>
                    <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20"
                        onClick={() => window.location.href = 'tel:+525623355155'}
                    >
                        <Phone className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

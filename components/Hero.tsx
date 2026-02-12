"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 grayscale"
                >
                    {/* Placeholder video or fallback to image if no video */}
                    <source src="https://videos.pexels.com/video-files/3205912/3205912-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground drop-shadow-md"
                >
                    Un lugar de <span className="text-accent italic">Paz</span> y Descanso Eterno
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto drop-shadow-sm"
                >
                    Panteón Bethania ofrece perpetuidades exclusivas y servicios integrales en Ixtapaluca. Honramos la memoria de tus seres queridos con dignidad.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button size="lg" className="text-lg px-8" asChild>
                        <a href="#contacto">Solicitar Información <ChevronRight className="w-5 h-5 ml-2" /></a>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                        <a href="#perpetuidad">Ver Planes</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    {/* Placeholder video of peaceful nature/luxury garden */}
                    <source src="https://videos.pexels.com/video-files/3205912/3205912-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-accent font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                        Bienvenido al Club del Eterno Descanso
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white drop-shadow-2xl mb-6">
                        La Exclusividad <br /> es <span className="text-accent italic">Eterna</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-white/90 font-sans font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                >
                    Un legado a la altura de tu historia, en un entorno de paz absoluta diseñado para quienes exigen lo mejor, siempre.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
                >
                    <Button
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                        asChild
                    >
                        <a href="#contacto">Solicitar Membresía <ChevronRight className="w-5 h-5 ml-2" /></a>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
                        asChild
                    >
                        <a href="#amenidades">Explorar Amenidades</a>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <span className="text-xs uppercase tracking-widest">Descubrir</span>
            </motion.div>
        </section>
    )
}

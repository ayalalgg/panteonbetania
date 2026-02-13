"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Share2, Maximize2, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const defaultImages = [
    "https://images.pexels.com/photos/3205912/pexels-photo-3205912.jpeg", // 1. Jardín Principal
    "https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg", // 2. Detalle Estatua
    "https://images.pexels.com/photos/14534800/pexels-photo-14534800.jpeg", // 3. Atardecer
    "https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg", // 4. Flores
    "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg", // 5. Camino
]

interface ListingGalleryProps {
    images?: string[]
}

export function ListingGallery({ images = defaultImages }: ListingGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)

    return (
        <>
            <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[500px] bg-background md:bg-gray-100 flex flex-col justify-center p-4 md:p-8 overflow-hidden">

                {/* Main Floating Card */}
                <div
                    className="relative w-full max-w-2xl mx-auto aspect-[4/5] md:aspect-[3/4] lg:aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/10 bg-white ring-1 ring-black/5 cursor-zoom-in group z-10 block"
                    onClick={() => setIsZoomed(true)}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Vista Panteón Bethania ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>

                    {/* Top Overlay Actions */}
                    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-20">
                        <div>
                            {/* Home Button linking to main site */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="bg-black/20 backdrop-blur-md text-white hover:bg-black/40 rounded-xl"
                                onClick={() => window.location.href = 'https://ayalafuneral.com'}
                            >
                                <Home className="w-5 h-5" />
                            </Button>
                        </div>
                        <div className="flex gap-3 ml-auto">
                            <Button variant="ghost" size="icon" className="bg-black/20 backdrop-blur-md text-white hover:bg-black/40 rounded-xl transition-all hover:scale-105">
                                <Share2 className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Hover Zoom Hint */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                            <Maximize2 className="w-4 h-4" /> <span className="text-xs font-bold uppercase tracking-wider">Ampliar</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Pill (Floating) */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl p-2 flex gap-2 overflow-x-auto scrollbar-hide shadow-2xl z-20 ring-1 ring-white/10">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={cn(
                                "relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 group focus:outline-none",
                                idx === currentIndex
                                    ? "border-accent ring-2 ring-accent/50 scale-105 opacity-100"
                                    : "border-white/10 opacity-70 hover:opacity-100 hover:scale-105"
                            )}
                        >
                            <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Full Screen Zoom Modal */}
            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setIsZoomed(false)}
                    >
                        <button
                            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                            onClick={() => setIsZoomed(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            src={images[currentIndex]}
                            alt="Zoom Detail"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

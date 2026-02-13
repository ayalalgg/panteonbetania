"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Share2, Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
    "https://images.pexels.com/photos/3205912/pexels-photo-3205912.jpeg", // Placeholder 1
    "https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg", // Placeholder 2
    "https://images.pexels.com/photos/14534800/pexels-photo-14534800.jpeg", // Placeholder 3
]

export function ListingGallery() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-100 overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Listing View ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>

            {/* Top Overlays */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start pt-12 md:pt-6 z-10 bg-gradient-to-b from-black/40 to-transparent">
                <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-md text-white hover:bg-white/40 rounded-full">
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <div className="flex gap-3">
                    <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-md text-white hover:bg-white/40 rounded-full">
                        <Share2 className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-white/20 backdrop-blur-md text-white hover:bg-white/40 rounded-full">
                        <Heart className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Navigation Arrows (Desktop) */}
            <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white hover:bg-white/30 rounded-full hidden md:flex"
            >
                <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white hover:bg-white/30 rounded-full hidden md:flex"
            >
                <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-white w-4" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

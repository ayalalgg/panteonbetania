"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Inicio", href: "#hero" },
        { name: "Perpetuidad", href: "#perpetuidad" },
        { name: "Temporalidad", href: "#temporalidad" },
        { name: "Servicios", href: "#servicios" },
        { name: "Contacto", href: "#contacto" },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/90 backdrop-blur-md border-b shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-serif font-bold tracking-tight text-foreground">
                        Panteón Bethania
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-sans font-medium hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => window.open('https://wa.me/525545065063', '_blank')}>
                        <Phone className="w-4 h-4 mr-2" />
                        Asesoría
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background border-b shadow-lg md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium py-2 border-b border-border/50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" onClick={() => window.open('https://wa.me/525545065063', '_blank')}>
                                <Phone className="w-4 h-4 mr-2" />
                                Hablar con un Asesor
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

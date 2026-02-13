"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
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
        { name: "Membresías", href: "#membresias" },
        { name: "Amenidades", href: "#amenidades" },
        { name: "Master Plan", href: "#mapa" },
        { name: "Concierge", href: "#contacto" },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
                scrolled
                    ? "bg-primary/95 backdrop-blur-md border-b border-accent/20 py-3 shadow-xl"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className={cn(
                        "text-2xl font-serif font-bold tracking-tight transition-colors duration-300",
                        scrolled ? "text-primary-foreground" : "text-white"
                    )}>
                        Panteón Bethania
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-sans font-medium tracking-wide hover:text-accent transition-colors duration-300 uppercase",
                                scrolled ? "text-primary-foreground/90" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant="default"
                        size="sm"
                        className={cn(
                            "bg-accent text-accent-foreground hover:bg-accent/90 font-serif tracking-wide",
                            "border border-accent/50 shadow-lg hover:shadow-accent/20 transition-all duration-300"
                        )}
                        onClick={() => window.open('https://wa.me/525545065063', '_blank')}
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        Agendar Visita
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        scrolled ? "text-primary-foreground" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-primary border-b border-accent/20 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-serif font-medium text-primary-foreground/90 hover:text-accent transition-colors border-b border-primary-foreground/10 pb-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                                onClick={() => window.open('https://wa.me/525545065063', '_blank')}
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Contactar Concierge
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

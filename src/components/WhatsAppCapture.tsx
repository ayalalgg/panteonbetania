"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ArrowRight, User, ShieldCheck } from 'lucide-react'
import { useClient } from '@/context/ClientContext'

interface WhatsAppCaptureProps {
  children: (handleWhatsAppClick: (message: string) => void) => React.ReactNode
}

export function WhatsAppCapture({ children }: WhatsAppCaptureProps) {
  const { clientName, setClientName, isNameCaptured } = useClient()
  const [isOpen, setIsOpen] = useState(false)
  const [tempName, setTempName] = useState('')
  const [pendingMessage, setPendingMessage] = useState('')

  const handleWhatsAppClick = (message: string) => {
    if (isNameCaptured) {
      // If we already have the name, redirect directly
      const finalMsg = `Hola, soy ${clientName}. ${message}`
      window.open(`https://wa.me/525623355155?text=${encodeURIComponent(finalMsg)}`, '_blank')
    } else {
      // Otherwise, open the name capture modal
      setPendingMessage(message)
      setIsOpen(true)
    }
  }

  const handleConfirm = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (tempName.trim().length < 3) return

    setClientName(tempName.trim())
    setIsOpen(false)

    // Proceed to WhatsApp
    const finalMsg = `Hola, soy ${tempName.trim()}. ${pendingMessage}`
    window.open(`https://wa.me/525623355155?text=${encodeURIComponent(finalMsg)}`, '_blank')
  }

  return (
    <>
      {children(handleWhatsAppClick)}

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-3xl overflow-hidden border border-primary/5"
            >
              {/* Header Decorative */}
              <div className="bg-primary p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-inner">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold italic leading-tight">Grupo Ayala</h3>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-accent font-black">Portal de Venta Autorizado</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10 space-y-8">
                <div className="space-y-2">
                  <p className="text-primary font-bold text-lg leading-tight">
                    ¿Cómo deberíamos dirigirnos a ti?
                  </p>
                  <p className="text-muted-foreground text-sm font-light">
                    Para brindarte atención personalizada y asegurar tus beneficios, ingresa tu nombre completo antes de continuar.
                  </p>
                </div>

                <form onSubmit={handleConfirm} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/20" />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Nombre Completo"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="w-full h-16 pl-14 pr-6 rounded-2xl border border-primary/10 bg-slate-50 focus:bg-white focus:border-accent focus:ring-0 transition-all font-medium text-primary placeholder:text-primary/20"
                    />
                  </div>

                  <button
                    disabled={tempName.trim().length < 3}
                    className="w-full h-16 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-primary/95 disabled:opacity-50 disabled:grayscale shadow-xl"
                  >
                    Continuar a WhatsApp
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </button>
                </form>

                <div className="flex items-center gap-3 justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">
                    Atención Directa y Segura
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

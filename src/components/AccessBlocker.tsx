"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, ArrowRight, ExternalLink } from 'lucide-react'

export function AccessBlocker() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Prevent scroll on the background
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Heavy Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-primary/90 backdrop-blur-2xl"
      />

      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        className="relative w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 text-center shadow-3xl overflow-hidden group"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-50" />

        <div className="relative z-10 space-y-10">
          {/* Icon Header */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent blur-2xl opacity-20 animate-pulse scale-150" />
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center relative shadow-2xl border border-white/20">
                <Lock className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-accent font-sans text-xs md:text-sm tracking-[0.4em] uppercase font-black drop-shadow-sm">
                Seguridad & Control Ayala
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Acceso Restringido
              </h2>
            </div>
            
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
              Grupo Funerario Ayala <span className="text-white font-bold underline decoration-accent decoration-2 underline-offset-4">bloqueó</span> el acceso al contenido de esta web, comunícate mejor visita <a href="https://ayalafuneral.com/" className="text-accent hover:underline">(https://ayalafuneral.com/)</a>
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4 flex flex-col md:flex-row gap-4 items-center justify-center">
            <a
              href="https://ayalafuneral.com/"
              className="w-full md:w-auto h-20 px-10 bg-accent text-primary rounded-2xl font-bold flex items-center justify-center gap-4 transition-all hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(212,175,55,0.3)] group"
            >
              Ir a Ayala Funeral
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
            </a>
            
            <p className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-widest mt-4 md:mt-0">
              Redirigiendo a Portal Oficial
            </p>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
      </motion.div>
    </div>
  )
}

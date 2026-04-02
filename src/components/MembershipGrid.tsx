"use client"

import { motion } from "framer-motion"
import { ProtectionCalculator } from "./ProtectionCalculator"

export function MembershipGrid() {
    return (
        <div className="space-y-12">
            {/* 
                La Calculadora de Protección ahora maneja tanto Panteón como Nichos, 
                eliminando la necesidad de pestañas redundantes y cuadrículas estáticas.
            */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <ProtectionCalculator />
            </motion.div>
        </div>
    )
}

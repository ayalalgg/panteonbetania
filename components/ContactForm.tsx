"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre es muy corto" }),
    phone: z.string().min(10, { message: "El teléfono debe tener 10 dígitos" }),
    message: z.string().optional(),
})

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Construct WhatsApp message
        const text = `Hola, soy ${values.name}. Me interesa información general sobre Panteón Bethania. Mi número es ${values.phone}. Mensaje: ${values.message || "Quisiera que me contactara un asesor."}`
        const url = `https://wa.me/525623355155?text=${encodeURIComponent(text)}`
        window.open(url, '_blank')
    }

    return (
        <section id="contacto" className="py-24 bg-[#FDFCFB] relative overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* LEFT SIDE: Premium Info */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <span className="text-accent font-sans text-xs tracking-[0.4em] uppercase font-bold">
                                    Atención Personalizada
                                </span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                                    Estamos a <br /> su disposición
                                </h2>
                                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                                    Permítanos acompañarle con la dignidad y el respeto que su familia merece. Nuestros asesores están disponibles para brindarle toda la información necesaria.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 shrink-0 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-accent font-bold tracking-widest uppercase mb-1">Línea Directa 24/7</p>
                                        <a href="tel:+525623355155" className="text-xl font-serif font-bold text-primary hover:text-accent transition-colors tracking-tight">
                                            +52 56 2335 5155
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 shrink-0 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-accent font-bold tracking-widest uppercase mb-1">Ubicación</p>
                                        <p className="text-lg font-serif font-bold text-primary leading-tight">
                                            Carr. Federal México-Puebla <br /> Km 28.5
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE: Elegant Form */}
                        <div className="lg:col-span-7">
                            <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.04)] bg-white rounded-[2.5rem] p-4 md:p-8">
                                <CardHeader className="pb-8 space-y-2">
                                    <CardTitle className="font-serif text-3xl text-primary text-center lg:text-left">Inicie una charla</CardTitle>
                                    <CardDescription className="font-sans text-muted-foreground text-center lg:text-left">
                                        Complete sus datos y un asesor se pondrá en contacto con usted.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-sans">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="name" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Nombre Completo</Label>
                                                <Input
                                                    id="name"
                                                    placeholder="Ej. Juan Pérez"
                                                    {...form.register("name")}
                                                    className="h-14 bg-muted/30 border-none rounded-xl focus-visible:ring-accent placeholder:text-muted-foreground/40"
                                                />
                                                {form.formState.errors.name && <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>}
                                            </div>

                                            <div className="space-y-3">
                                                <Label htmlFor="phone" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Teléfono / WhatsApp</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="10 dígitos"
                                                    {...form.register("phone")}
                                                    className="h-14 bg-muted/30 border-none rounded-xl focus-visible:ring-accent placeholder:text-muted-foreground/40"
                                                />
                                                {form.formState.errors.phone && <p className="text-xs text-destructive mt-1">{form.formState.errors.phone.message}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">¿Cómo podemos ayudarle?</Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Escriba aquí su consulta..."
                                                {...form.register("message")}
                                                className="min-h-[120px] bg-muted/30 border-none rounded-xl focus-visible:ring-accent resize-none placeholder:text-muted-foreground/40 p-4"
                                            />
                                        </div>

                                        <Button type="submit" className="w-full text-lg h-16 bg-primary text-primary-foreground hover:bg-primary/95 rounded-2xl shadow-xl shadow-primary/10 transition-all duration-300 group">
                                            <span className="flex items-center gap-3">
                                                Pregunta a un asesor
                                                <motion.span
                                                    animate={{ x: [0, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                                >
                                                    →
                                                </motion.span>
                                            </span>
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

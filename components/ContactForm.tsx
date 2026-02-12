"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Mail } from "lucide-react"

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
        const text = `Hola, mi nombre es ${values.name}. Teléfono: ${values.phone}. Mensaje: ${values.message || "Me interesa información."}`
        const url = `https://wa.me/525545065063?text=${encodeURIComponent(text)}`
        window.open(url, '_blank')
    }

    return (
        <section id="contacto" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Info Side */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Estamos para Ayudarte</h2>
                        <p className="text-muted-foreground text-lg font-sans">
                            Comunícate con nuestros asesores para resolver todas tus dudas sobre precios, ubicación y trámites. Atendemos las 24 horas.
                        </p>

                        <div className="space-y-6 font-sans">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-accent/10 p-3 rounded-full text-accent">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Llámanos</p>
                                    <a href="tel:+525545065063" className="text-muted-foreground hover:text-accent transition-colors">+52 55 4506 5063</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-accent/10 p-3 rounded-full text-accent">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Visítanos</p>
                                    <p className="text-muted-foreground">Carr. Federal México-Puebla Km 28.5</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-accent/10 p-3 rounded-full text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Escríbenos</p>
                                    <a href="mailto:contacto@panteonbethania.com" className="text-muted-foreground hover:text-accent transition-colors">contacto@panteonbethania.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <Card className="shadow-xl border-none ring-1 ring-border/50">
                        <CardHeader>
                            <CardTitle className="font-serif text-2xl">Envíanos un Mensaje</CardTitle>
                            <CardDescription className="font-sans">Te responderemos a la brevedad posible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 font-sans">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre Completo</Label>
                                    <Input id="name" placeholder="Tu nombre" {...form.register("name")} className="focus-visible:ring-accent" />
                                    {form.formState.errors.name && <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                                    <Input id="phone" type="tel" placeholder="10 dígitos" {...form.register("phone")} className="focus-visible:ring-accent" />
                                    {form.formState.errors.phone && <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Mensaje (Opcional)</Label>
                                    <Textarea id="message" placeholder="¿En qué podemos ayudarte?" {...form.register("message")} className="focus-visible:ring-accent" />
                                </div>

                                <Button type="submit" className="w-full text-lg h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                                    Enviar por WhatsApp
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

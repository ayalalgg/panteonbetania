"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const products = [
    {
        title: "Perpetuidad 2 Gavetas",
        price: "Consultar Precio",
        features: [
            "Propiedad a perpetuidad",
            "Capacidad para 2 personas",
            "Mantenimiento incluido (1er año)",
            "Título de propiedad inmediato",
        ],
        popular: false,
        section: "perpetuidad"
    },
    {
        title: "Perpetuidad 3 Gavetas",
        price: "Recomendado",
        features: [
            "Propiedad a perpetuidad",
            "Capacidad para 3 personas",
            "Ubicación preferencial",
            "Facilidades de pago",
        ],
        popular: true,
        section: "perpetuidad"
    },
    {
        title: "Perpetuidad 5 Gavetas",
        price: "Familiar",
        features: [
            "Propiedad a perpetuidad",
            "Capacidad para 5 personas",
            "Espacio amplio",
            "Ideal para familias grandes",
        ],
        popular: false,
        section: "perpetuidad"
    },
    {
        title: "Temporalidad 7 Años",
        price: "Económico",
        features: [
            "Uso por 7 años renovable",
            "Incluye servicio de inhumación",
            "Mantenimiento incluido",
            "Opción a compra posterior",
        ],
        popular: false,
        section: "temporalidad"
    },
]

export function PricingGrid() {
    return (
        <section className="py-24" id="perpetuidad">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Planes a tu Medida</h2>
                    <p className="text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
                        Opciones de perpetuidad y temporalidad diseñadas para brindar tranquilidad y seguridad a tu familia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-muted",
                                product.popular ? "border-accent shadow-lg ring-1 ring-accent/50" : ""
                            )}
                        >
                            {product.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-sans font-medium shadow-md">
                                    Más Popular
                                </div>
                            )}

                            <CardHeader>
                                <CardTitle className="text-xl font-serif">{product.title}</CardTitle>
                                <CardDescription className="text-lg font-bold font-serif text-primary mt-2">
                                    {product.price}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <ul className="space-y-4">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                                            <Check className="w-5 h-5 text-accent shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    className={cn("w-full font-sans", product.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}
                                    size="lg"
                                    onClick={() => window.open(`https://wa.me/525623355155?text=Hola, me interesa información sobre ${product.title}`, '_blank')}
                                >
                                    Solicitar Cotización
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { Shield, Trees, Clock, Map } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
    {
        icon: Trees,
        title: "Áreas Verdes",
        desc: "Espacios amplios, cuidados y tranquilos para la reflexión y el recuerdo.",
    },
    {
        icon: Shield,
        title: "Seguridad 24/7",
        desc: "Vigilancia permanente y control de acceso para tu total tranquilidad.",
    },
    {
        icon: Clock,
        title: "Horario Amplio",
        desc: "Visitas permitidas los 365 días del año en horarios cómodos.",
    },
    {
        icon: Map,
        title: "Ubicación Accesible",
        desc: "Fácil acceso desde la carretera federal, con estacionamiento propio.",
    },
]

export function ServicesSection() {
    return (
        <section id="servicios" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Nuestros Servicios</h2>
                    <p className="text-muted-foreground text-lg font-sans max-w-2xl mx-auto">
                        Diseñamos cada detalle para ofrecer comodidad, seguridad y respeto a las familias.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <CardHeader className="text-center">
                                <div className="mx-auto bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-accent">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="mb-2 font-serif text-xl">{service.title}</CardTitle>
                                <CardDescription className="font-sans line-clamp-3">{service.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

'use client';

import React from 'react';
import { Phone, MapPin, Clock, Check, Shield, Trees, Car, ArrowRight, MessageCircle, Star } from 'lucide-react';

const PRODUCTS = [
    {
        title: "Perpetuidad 2 Gavetas",
        price: "Consultar",
        features: [
            "Propiedad a perpetuidad",
            "Capacidad para 2 personas",
            "Mantenimiento incluido",
            "Título de propiedad inmediato"
        ],
        highlight: false
    },
    {
        title: "Perpetuidad 3 Gavetas",
        price: "Consultar",
        features: [
            "Propiedad a perpetuidad",
            "Capacidad para 3 personas",
            "Ubicación preferencial",
            "Mantenimiento incluido",
            "Título de propiedad inmediato"
        ],
        highlight: true
    },
    {
        title: "Perpetuidad 5 Gavetas",
        price: "Consultar",
        features: [
            "Propiedad a perpetuidad",
            "Espacio familiar amplio",
            "Capacidad para 5 personas",
            "Area exclusiva",
            "Mantenimiento incluido"
        ],
        highlight: false
    },
    {
        title: "Temporalidad",
        price: "Desde $X,XXX",
        features: [
            "Uso por 7 años (renovable)",
            "Opción económica",
            "Incluye servicio de inhumación",
            "Mantenimiento básico"
        ],
        highlight: false,
        type: 'temporal'
    }
];

const SERVICES = [
    { icon: Trees, title: "Áreas Verdes", desc: "Espacios tranquilos y cuidados para la reflexión." },
    { icon: Shield, title: "Seguridad 24/7", desc: "Vigilancia permanente para tu tranquilidad." },
    { icon: Car, title: "Estacionamiento", desc: "Amplio estacionamiento para visitantes." },
    { icon: Clock, title: "Horario Amplio", desc: "Abierto los 365 días del año." },
];

export default function LandingPage() {
    const handleContact = (productName: string) => {
        const message = `Hola, me interesa información sobre: ${productName}`;
        window.open(`https://wa.me/525623355155?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            {/* Placeholder Logo */}
                            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-serif font-bold">B</div>
                            <span className="font-serif text-xl font-bold text-slate-800">Panteón Bethania</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#productos" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Perpetuidades</a>
                            <a href="#servicios" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Servicios</a>
                            <a href="#ubicacion" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Ubicación</a>
                            <button
                                onClick={() => handleContact('Información General')}
                                className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
                            >
                                Contactar
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dbnocozci/image/upload/v1766397647/ayala/assets/ww9hgqyhrrismucgcooc.png"
                        alt="Panteón Bethania"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 font-medium text-sm uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
                        San Francisco Acuautla, Ixtapaluca
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Un lugar de paz y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">descanso eterno</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        Asegura la tranquilidad de tu familia con nuestras opciones a perpetuidad y temporalidad en las mejores instalaciones de la región.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <a
                            href="#productos"
                            className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-500 transition-all hover:scale-105 shadow-xl shadow-emerald-900/20"
                        >
                            Ver Opciones
                        </a>
                        <button
                            onClick={() => handleContact('Agendar Cita')}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Agendar Visita
                        </button>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="productos" className="py-24 px-4 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Nuestros Planes</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Diseñados para adaptarse a las necesidades de cada familia, con facilidades de pago y trámites incluidos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRODUCTS.map((product, idx) => (
                            <div
                                key={idx}
                                className={`relative rounded-3xl p-8 border ${product.highlight ? 'border-emerald-500 ring-4 ring-emerald-500/10 shadow-2xl bg-slate-900 text-white' : 'border-slate-200 bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1'} transition-all duration-300 flex flex-col`}
                            >
                                {product.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Más Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className={`text-xl font-bold mb-2 ${product.highlight ? 'text-white' : 'text-slate-900'}`}>{product.title}</h3>
                                    <div className={`text-3xl font-bold ${product.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                        {product.price}
                                    </div>
                                    {product.type === 'temporal' && (
                                        <span className={`text-xs font-medium px-2 py-1 rounded-md mt-2 inline-block ${product.highlight ? 'bg-white/10' : 'bg-slate-100 text-slate-600'}`}>
                                            Renovable
                                        </span>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {product.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 flex-shrink-0 ${product.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                                            <span className={`text-sm ${product.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleContact(product.title)}
                                    className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${product.highlight
                                            ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                                            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                        }`}
                                >
                                    Solicitar Cotización <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-24 px-4 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-2 block">Por qué elegirnos</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                                Instalaciones dignas y servicios integrales
                            </h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Panteón Bethania no es solo un cementerio, es un parque funeral diseñado para brindar paz y confort a las familias en sus momentos de visita y recuerdo.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {SERVICES.map((service, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                                            <p className="text-sm text-slate-500">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.568345638104!2d-98.88998782396!3d19.337989981926235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f005c2d1b7d%3A0x6b729e99a777174e!2sPante%C3%B3n%20Betania!5e0!3m2!1ses-419!2smx!4v1707760000000!5m2!1ses-419!2smx"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-6 border-t border-slate-200">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900">Ubicación Estratégica</h4>
                                        <p className="text-sm text-slate-600">San Francisco Acuautla, Ixtapaluca, Estado de México.</p>
                                        <a
                                            href="https://maps.app.goo.gl/XXXX"
                                            target="_blank"
                                            className="text-emerald-600 text-sm font-bold mt-2 inline-flex items-center gap-1 hover:underline"
                                        >
                                            Ver en Google Maps <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">¿Interesado en asegurar tu patrimonio familiar?</h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Nuestros asesores están listos para brindarte toda la información y planes de financiamiento disponibles.
                    </p>
                    <button
                        onClick={() => handleContact('Asesoría Personalizada')}
                        className="px-10 py-4 bg-emerald-500 text-white rounded-full font-bold text-lg hover:bg-emerald-400 transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 inline-flex items-center gap-3"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Hablar con un Asesor
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white font-serif font-bold">B</div>
                        <span className="text-white font-bold text-lg">Panteón Bethania</span>
                    </div>
                    <p className="text-sm">
                        © {new Date().getFullYear()} Grupo Funerario Ayala. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

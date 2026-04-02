"use client"

import { MapPin } from "lucide-react"

interface MapSectionProps {
    mapUrl?: string | null;
    address?: string | null;
}

export function MapSection({ mapUrl, address }: MapSectionProps) {
    if (!mapUrl) return null;

    const hasMapEmbed = mapUrl.includes('embed');
    const googleMapsLink = hasMapEmbed ? `https://maps.google.com/?q=${encodeURIComponent(address || '')}` : mapUrl;

    return (
        <div className="w-full">
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/10 bg-gray-100 ring-1 ring-black/5">
                {hasMapEmbed ? (
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <div className="text-center p-6">
                            <MapPin className="w-12 h-12 mx-auto mb-3 text-primary/50" />
                            <p className="font-bold text-sm uppercase tracking-widest text-primary mb-4">{address}</p>
                            <a
                                href={mapUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all"
                            >
                                Ver en Google Maps
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {address && (
                <div className="flex justify-center mt-4">
                    <a
                        href={googleMapsLink || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors text-sm font-medium"
                    >
                        <MapPin className="w-4 h-4" />
                        <span>{address}</span>
                    </a>
                </div>
            )}
        </div>
    )
}

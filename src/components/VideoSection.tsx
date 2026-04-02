"use client"

import { PlayCircle } from "lucide-react"

interface VideoSectionProps {
    videoUrl?: string | null;
}

export function VideoSection({ videoUrl }: VideoSectionProps) {
    if (!videoUrl) return null;

    // Helper to get embed URL
    const getEmbedUrl = (url: string) => {
        if (url.includes('shorts/')) {
            const shortId = url.split('shorts/')[1]?.split('?')[0];
            return `https://www.youtube.com/embed/${shortId}`;
        } else if (url.includes('watch?v=')) {
            return url.replace('watch?v=', 'embed/').split('&')[0];
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1]?.split('?')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    };

    const embedUrl = getEmbedUrl(videoUrl);
    const isShort = videoUrl.includes('shorts/');

    return (
        <div className="w-full h-full">
            <div className={`w-full mx-auto ${isShort ? 'aspect-[9/16] max-w-sm' : 'aspect-video w-full'} rounded-3xl overflow-hidden bg-black relative group ring-1 ring-white/10`}>
                {videoUrl.includes('youtube') || videoUrl.includes('youtu.be') ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={embedUrl}
                        title="Video recorrido"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full bg-black/10">
                        <a href={videoUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 text-primary hover:scale-105 transition-all">
                            <PlayCircle className="w-20 h-20 drop-shadow-lg" />
                            <span className="font-bold text-lg">Ver Video Completo</span>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

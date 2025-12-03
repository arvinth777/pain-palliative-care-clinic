'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroCarousel() {
    const images = [
        {
            src: "/images/dr-kirupakaran.jpg",
            alt: "Dr. Kirupakaran - Pain Management Specialist"
        },
        {
            src: "/images/procedure-1.png",
            alt: "Advanced pain management procedure"
        },
        {
            src: "/images/procedure-2.png",
            alt: "State-of-the-art medical equipment"
        },
        {
            src: "/images/procedure-5.png",
            alt: "Ultrasound-guided procedure"
        }
    ];

    return (
        <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                className="w-full h-full"
            >
                <CarouselContent className="h-full -ml-0">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-0 h-full relative w-full">
                            <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover object-center"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Gradient Overlay for "Fade to White" effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none z-10" />

            {/* Bottom Gradient for smooth transition to content below */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </div>
    );
}

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Tiger\'s Nest Monastery, Bhutan',
    caption: 'The iconic Tiger\'s Nest Monastery perched on a cliffside'
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Punakha Dzong, Bhutan',
    caption: 'The majestic Punakha Dzong surrounded by purple jacaranda trees'
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Prayer flags in Bhutan',
    caption: 'Colorful prayer flags against the backdrop of the Himalayas'
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Dochula Pass, Bhutan',
    caption: '108 chortens at Dochula Pass with mountain views'
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Bhutanese Festival, Bhutan',
    caption: 'Traditional mask dancers at a Bhutanese festival'
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    alt: 'Bhutanese architecture',
    caption: 'Traditional Bhutanese architecture with detailed paintings'
  }
];

export const GallerySection = () => {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  
  // Preload first 3 images immediately
  useEffect(() => {
    // Preload first 3 images
    const initialImages = [0, 1, 2];
    setVisibleImages(initialImages);
    
    // Preload the rest of the images in the background
    const preloadImages = () => {
      const remainingImages = [3, 4, 5];
      remainingImages.forEach(index => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = galleryImages[index].src;
        document.head.appendChild(link);
        
        // Remove the link after it's loaded
        link.onload = () => {
          setVisibleImages(prev => [...prev, index]);
          document.head.removeChild(link);
        };
      });
    };
    
    // Start preloading after a short delay
    const timer = setTimeout(preloadImages, 500); // Reduced delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bhutan-dark mb-3 sm:mb-4">Gallery</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of Bhutan through our collection of stunning photographs capturing the country's magnificent landscapes, architecture, and cultural experiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 sm:p-2 h-full">
                    <div className="relative group h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-md">
                      {visibleImages.includes(index) ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform group-hover:scale-110 duration-500"
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={60}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjY4OEI4Li8vQUVFRUVFRUVFRUVFRUVFRUVFRUX/2wBDAR0XFyAeIBohHh4hIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                        <p className="text-white text-xs sm:text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 sm:left-2" />
            <CarouselNext className="right-1 sm:right-2" />
          </Carousel>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link href="/gallery">
            <Button className="bg-bhutan-red text-white hover:bg-bhutan-red/90 text-sm sm:text-base">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

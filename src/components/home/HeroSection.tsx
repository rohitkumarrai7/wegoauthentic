"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  fallback?: string;
  alt: string;
}

// Reduced number of slides to improve performance
const slides: Slide[] = [
  {
    id: 1,
    image: '/images/slides/bhutan-1.jpg',
    alt: "Bhutan Landscape"
  },
  {
    id: 2,
    image: '/images/slides/bhutan-2.jpg',
    alt: "Bhutan Mountains"
  },
  {
    id: 3,
    image: '/images/slides/bhutan-3.jpg',
    alt: "Bhutan Cultural Experience"
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  
  // Preload all images on component mount
  useEffect(() => {
    // Preload all images in the background
    slides.forEach((slide, index) => {
      if (index !== currentSlide) { // Don't preload current slide as it's already loading
        // Use DOM Image constructor rather than Next.js Image
        const img = document.createElement('img');
        img.src = slide.image;
        
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, index]));
        };
        
        img.onerror = () => {
          console.error(`Failed to load image: ${slide.image}`);
          setImageErrors(prev => new Set([...prev, index]));
        };
      }
    });
  }, [currentSlide]); // Added currentSlide as dependency

  // Set images as loaded after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 50); // Reduced delay for faster initial display
    
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slides with longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Increased interval for better user experience
    return () => clearInterval(interval);
  }, []);

  const scrollToTravelOptions = () => {
    const travelOptionsSection = document.getElementById('travel-options');
    if (travelOptionsSection) {
      travelOptionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden"
    >
      {/* Dynamic Slideshow - Simplified */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.4 }} // Reduced transition duration
            className="h-full w-full relative"
          >
            {imagesLoaded ? (
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover"
                priority={true} // Always prioritize loading
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 100vw"
                quality={60} // Reduced quality for faster loading
                loading="eager" // Always eager load for hero section
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjY4OEI4Li8vQUVFRUVFRUVFRUVFRUVFRUVFRUX/2wBDAR0XFyAeIBohHh4hIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onError={() => {
                  console.error(`Failed to load image: ${slides[currentSlide].image}`);
                  setImageErrors(prev => new Set([...prev, currentSlide]));
                }}
                unoptimized={true}
              />
            ) : (
              <div className="w-full h-full bg-bhutan-dark flex items-center justify-center">
                <div className="animate-pulse w-12 h-12 rounded-full bg-bhutan-red"></div>
              </div>
            )}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Simplified Slide indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-0 right-0 flex justify-center space-x-2 z-20 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg leading-tight">
            Welcome to the <span className="text-bhutan-red">LAND OF THE THUNDER DRAGON</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-white/90 drop-shadow">
            Experience the authentic beauty, culture, and traditions of Bhutan
          </p>
          <div className="inline-block">
            <Button
              size="lg"
              variant="default"
              className="bg-bhutan-red text-white hover:bg-bhutan-red/90 hover:text-white rounded-full text-sm md:text-base py-2 md:py-6 px-4 md:px-8 h-auto shadow-md font-semibold"
              onClick={scrollToTravelOptions}
            >
              <span className="text-white">BOOK NOW</span> <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

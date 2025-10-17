"use client";

import React, { useState, useEffect } from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { motion } from 'framer-motion';

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/gallery-1.jpg',
    alt: 'Tiger\'s Nest Monastery, Bhutan'
  },
  {
    id: 2,
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Punakha Dzong, Bhutan'
  },
  {
    id: 3,
    src: '/images/gallery/gallery-3.jpg',
    alt: 'Prayer flags in Bhutan'
  },
  {
    id: 4,
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Dochula Pass, Bhutan'
  },
  {
    id: 5,
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Bhutanese Festival, Bhutan'
  },
  {
    id: 6,
    src: '/images/gallery/gallery-6.jpg',
    alt: 'Bhutanese architecture'
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
        const img = new window.Image();
        img.src = galleryImages[index].src;

        img.onload = () => {
          setVisibleImages(prev => [...prev, index]);
        };
      });
    };

    // Start preloading after a short delay
    const timer = setTimeout(preloadImages, 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9, rotateY: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.8 }
    }
  };

  return (
    <motion.section
      className="py-12 sm:py-16 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={headerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-bhutan-dark mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gallery
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore the beauty of Bhutan through our collection of stunning photographs capturing the country's magnificent landscapes, architecture, and cultural experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="p-1 sm:p-2 h-full"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="relative group h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      {visibleImages.includes(index) ? (
                        <OptimizedImage
                          src={image.src}
                          alt={image.alt}
                          fill
                          priority={index < 2}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={80}
                          className="object-cover transition-transform group-hover:scale-110 duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 sm:left-2" />
            <CarouselNext className="right-1 sm:right-2" />
          </Carousel>
        </motion.div>

        <motion.div
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/gallery">
              <Button className="bg-bhutan-red text-white hover:bg-bhutan-red/90 text-sm sm:text-base transform transition-transform hover:scale-105">
                View Full Gallery
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

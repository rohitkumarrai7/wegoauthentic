"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/images/slides/bhutan-1.jpg',
    alt: 'Bhutan Landscape'
  },
  {
    id: 2,
    image: '/images/slides/bhutan-2.jpg',
    alt: 'Bhutan Mountains'
  },
  {
    id: 3,
    image: '/images/slides/bhutan-3.jpg',
    alt: 'Bhutan Culture'
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' }
  }),
};

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setImagesLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTravelOptions = () => {
    const section = document.getElementById('travel-options');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="hero">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ clipPath: 'circle(0% at 50% 50%)', scale: 1.2 }}
          animate={{ clipPath: 'circle(150% at 50% 50%)', scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            className="object-cover"
            priority={true}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, ease: 'linear' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-6 text-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Discover the <span className="text-bhutan-red">LAND OF THE THUNDER DRAGON</span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 drop-shadow-md"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Explore Bhutan’s untouched culture, breathtaking valleys, and soul-refreshing peace.
        </motion.p>

        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-6"
        >
          <Button
            size="lg"
            className="bg-bhutan-red text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
            onClick={scrollToTravelOptions}
          >
            Book Now <FiArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

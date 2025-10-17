"use client";

import React, { useEffect, useState } from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
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
    image: '/images/slides/bhutan-3.PNG',
    alt: "Bhutan Mountains"
  },
  {
    id: 3,
    image: '/images/slides/bhutan-4.PNG',
    alt: "Bhutan Cultural Experience"
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

  // Enhanced animation variants for hero content
  const titleSplitAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };

  const scrollIndicatorVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="hero">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          exit={{ clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <OptimizedImage
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            priority={true}
            sizes="100vw"
            quality={90}
          />

          {/* Parallax effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          {/* Dynamic gradient overlay */}
          <motion.div
            className="absolute inset-0 z-10"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
                'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%)',
                'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Subtle light effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Enhanced floating orbs with wave motion */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-bhutan-red/20 backdrop-blur-sm"
                style={{
                  width: `${20 + i * 5}px`,
                  height: `${20 + i * 5}px`,
                  left: `${15 + i * 15}%`,
                  top: `${25 + (i % 2) * 30}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-8, 12, -8],
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.05, 0.25, 0.05]
                }}
                transition={{
                  duration: 6 + i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8
                }}
              />
            ))}

            {/* Minimal star effect */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${10 + (i % 3) * 15}%`,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-6 text-center">
        {/* Split title animation */}
        <div className="overflow-hidden">
          {["Discover the", "LAND OF THE THUNDER DRAGON"].map((text, index) => (
            <motion.div
              key={index}
              variants={titleSplitAnimation}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {index === 0 ? (
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl">
                  {text} <motion.span
                    className="text-bhutan-red"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(255,0,0,0.8)",
                        "0 0 30px rgba(255,0,0,1)",
                        "0 0 20px rgba(255,0,0,0.8)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    THUNDER DRAGON
                  </motion.span>
                </h1>
              ) : (
                <motion.p
                  className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 drop-shadow-md"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Explore Bhutan’s untouched culture, breathtaking valleys, and soul-refreshing peace.
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="lg"
              className="bg-bhutan-red hover:bg-bhutan-red/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300 hover:brightness-110"
              onClick={scrollToTravelOptions}
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ x: 2 }}
              >
                Book Your Journey
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FiArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
            whileHover={{ borderColor: "rgba(255, 0, 0, 0.8)" }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-10 bg-white shadow-lg" : "w-3 bg-white/40"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <motion.div
                className="h-full bg-bhutan-red rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

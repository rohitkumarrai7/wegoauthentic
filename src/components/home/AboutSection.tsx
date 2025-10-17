"use client";

import React from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const AboutSection = () => {
  const whatsappLink = "https://wa.me/919014123598";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -30 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 100, rotateY: 30 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video section */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={imageVariants}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage
                src="/images/about/bhutan-team.jpg"
                alt="We Go Authentic Team"
                fill
                priority={true}
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Link
                  href="https://www.instagram.com/share/BAL3rbRXWS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-bhutan-red h-16 w-16 flex items-center justify-center hover:bg-bhutan-red/90 transition-colors"
                >
                  <FiPlay className="text-white text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Who Are We?
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We are a bunch of young, adventurous souls from India and Bhutan, absolutely obsessed with Bhutan (seriously, we talk about it all the time). Our mission? To give every traveler an epic and authentic Bhutan experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's be real—tourism these days has turned into a big business, with overpriced packages, middlemen everywhere, and a whole lot of fluff. That's why We Go Authentic isn't just another travel company; it's a movement. We show you the real Bhutan, not the "touristy, staged-for-Instagram" Bhutan.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Now, here's the best part: all our itineraries are handcrafted by local Bhutanese guides who actually know the country. No generic, copy-paste tours here! We take you to the hidden spots, the best food joints, and the real cultural gems that other tourists totally miss.
              </motion.p>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                className="rounded-full border-bhutan-red text-bhutan-red hover:bg-bhutan-red hover:text-white"
                onClick={() => {
                  window.location.href = '/about';
                }}
              >
                Read more <FiArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="mt-8 flex justify-center sm:justify-start">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-bhutan-red text-white hover:bg-bhutan-red/90 rounded-full"
                >
                  Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

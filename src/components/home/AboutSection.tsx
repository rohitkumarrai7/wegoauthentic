"use client";

import React from 'react';
import Image from 'next/image';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const AboutSection = () => {
  const whatsappLink = "https://wa.me/919014123598";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/bhutan-team.jpg"
                alt="We Go Authentic Team"
                fill
                className="object-cover"
                quality={75}
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
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
            <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6">Who Are We?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We are a bunch of young, adventurous souls from India and Bhutan, absolutely obsessed with Bhutan (seriously, we talk about it all the time). Our mission? To give every traveler an epic and authentic Bhutan experience.
              </p>
              <p>
                Let's be real—tourism these days has turned into a big business, with overpriced packages, middlemen everywhere, and a whole lot of fluff. That's why We Go Authentic isn't just another travel company; it's a movement. We show you the real Bhutan, not the "touristy, staged-for-Instagram" Bhutan.
              </p>
              <p>
                Now, here's the best part: all our itineraries are handcrafted by local Bhutanese guides who actually know the country. No generic, copy-paste tours here! We take you to the hidden spots, the best food joints, and the real cultural gems that other tourists totally miss.
              </p>
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
    </section>
  );
};

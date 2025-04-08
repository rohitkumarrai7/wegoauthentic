"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const highlights = [
  {
    id: 1,
    title: "World's Only Carbon-Negative Country",
    image: "/images/highlights/carbon-negative.jpg",
    description: "While most countries struggle with pollution, Bhutan absorbs more carbon than it produces! With 70% of its land covered in forests and strict environmental policies, it's one of the greenest places on Earth.",
    mediaType: "image",
  },
  {
    id: 2,
    title: "No Traffic Lights",
    image: "/images/highlights/no-traffic-lights.jpg",
    description: "Bhutan's capital, Thimphu, is one of the only capitals in the world without a single traffic light. Instead, police officers gracefully direct cars with hand signals.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/your-video-id"
  },
  {
    id: 3,
    title: "Measures Success with Happiness, Not Money",
    image: "/images/highlights/happiness.jpg",
    description: "Bhutan is the only country in the world that prioritizes Gross National Happiness over GDP. Here, well-being, culture, and sustainability come first—money comes second!",
    mediaType: "image",
  },
  {
    id: 4,
    title: "Sustainable Development Fee for Visitors",
    image: "/images/highlights/sdf-fee.jpg",
    description: "To preserve its environment and culture, Bhutan charges a Sustainable Development Fee (SDF) per day for tourists. This keeps the country exclusive, less crowded, and incredibly authentic.",
    mediaType: "image",
  },
  {
    id: 5,
    title: "World's Most Dangerous Airport",
    image: "/images/highlights/paro-airport.jpg",
    description: "With only a handful of pilots trained to land here, Paro International Airport is one of the most challenging runways in the world. But don't worry, the views on landing are absolutely insane!",
    mediaType: "image",
  },
  {
    id: 6,
    title: "The Famous Tiger's Nest Monastery",
    image: "/images/highlights/tigers-nest.jpg",
    description: "The Taktsang Monastery, or Tiger's Nest, clings to a cliff 3,000 feet above the Paro Valley. The hike to this sacred site is a must-do and offers some of the most magical views in Bhutan.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/your-video-id"
  },
  {
    id: 7,
    title: "Chillies as a Main Dish",
    image: "/images/highlights/ema-datshi.jpg",
    description: "Bhutanese people love their chillies! Ema Datshi, the national dish, is a spicy mix of chilies and cheese—definitely not for the faint of heart!",
    mediaType: "image",
  },
];

export const WhyBhutanSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Text content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6">WHY SHOULD YOU TRAVEL TO BHUTAN?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-base md:text-lg">
                Bhutan is not just a place you visit—it's a journey into a world of happiness, culture, and untouched nature. From being the only carbon-negative country to having no traffic lights and prioritizing happiness over money, Bhutan is unlike anywhere else on Earth.
              </p>
              <p className="text-base md:text-lg">
                Whether you're marveling at the cliffside Tiger's Nest, experiencing the warmth of the Bhutanese people, or daring to try the fiery Ema Datshi, every moment in Bhutan is pure magic.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/why-bhutan">
                <Button
                  variant="outline"
                  className="rounded-full border-bhutan-red text-bhutan-red hover:bg-bhutan-red hover:text-white"
                >
                  Read more <FiArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Highlights slider */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Carousel className="w-full">
              <CarouselContent>
                {highlights.map((highlight) => (
                  <CarouselItem key={highlight.id} className="sm:basis-1/2 md:basis-1/2 p-1">
                    <div className="h-full p-1">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                        <div className="relative h-48 sm:h-52 md:h-56">
                          <Image
                            src={highlight.image}
                            alt={highlight.title}
                            fill
                            className="object-cover"
                            quality={75}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {highlight.mediaType === "video" && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/50">
                                  <div className="rounded-full bg-bhutan-red h-12 w-12 flex items-center justify-center">
                                    <FiPlay className="text-white text-xl" />
                                  </div>
                                </button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[725px]">
                                <DialogHeader>
                                  <DialogTitle>{highlight.title}</DialogTitle>
                                  <DialogDescription>
                                    {highlight.description}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="aspect-video w-full">
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    src={highlight.videoUrl}
                                    title={highlight.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                  ></iframe>
                                </div>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="font-bold text-lg text-bhutan-dark mb-2">{highlight.title}</h3>
                          <div className="text-gray-700 text-sm flex-grow">
                            <p className="mb-1">{highlight.mediaType === "image" ? "🏞️" : "🎥"}
                              {highlight.mediaType === "image" ? " Photo:" : " VIDEO:"} {highlight.title}
                            </p>
                            <p>✍️ Description: {highlight.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious className="static transform-none translate-x-0 translate-y-0 rounded-full" />
                <CarouselNext className="static transform-none translate-x-0 translate-y-0 rounded-full" />
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

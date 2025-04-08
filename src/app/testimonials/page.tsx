"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { getApprovedTestimonials, Testimonial } from '@/lib/testimonials';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedTripFilter, setSelectedTripFilter] = useState<string | null>(null);

  useEffect(() => {
    // Get testimonials and sort by date (newest first)
    const sortedTestimonials = getApprovedTestimonials().sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setTestimonials(sortedTestimonials);

    // Set up an interval to check for new testimonials
    const intervalId = setInterval(() => {
      const updated = getApprovedTestimonials().sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setTestimonials(updated);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // Get unique trip types for filtering
  const tripTypes = [...new Set(testimonials.map(t => t.trip))];

  // Filter testimonials by trip type if a filter is selected
  const filteredTestimonials = selectedTripFilter
    ? testimonials.filter(t => t.trip === selectedTripFilter)
    : testimonials;

  return (
    <>
      {/* Banner */}
      <section className="relative h-[30vh] md:h-[40vh]">
        <Image
          src="/images/highlights/happiness.jpg"
          alt="Testimonials from Bhutan travelers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Traveler Experiences</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Real stories from real travelers who experienced the magic of Bhutan
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Button
                variant={selectedTripFilter === null ? "default" : "outline"}
                onClick={() => setSelectedTripFilter(null)}
                className={selectedTripFilter === null ? "bg-bhutan-red hover:bg-bhutan-red/90" : ""}
              >
                All Testimonials
              </Button>

              {tripTypes.map(trip => (
                <Button
                  key={trip}
                  variant={selectedTripFilter === trip ? "default" : "outline"}
                  onClick={() => setSelectedTripFilter(trip)}
                  className={selectedTripFilter === trip ? "bg-bhutan-red hover:bg-bhutan-red/90" : ""}
                >
                  {trip}
                </Button>
              ))}
            </div>

            <div className="text-center mb-10">
              <Link href="/#testimonials">
                <Button className="bg-bhutan-red text-white hover:bg-bhutan-red/90">
                  <FiMessageSquare className="mr-2" /> Share Your Experience
                </Button>
              </Link>
            </div>
          </div>

          {filteredTestimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-4">
                      <div>
                        <h3 className="font-bold text-bhutan-dark">{testimonial.name}</h3>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                              size={16}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 flex-grow">
                      <blockquote className="italic text-gray-700">
                        "{testimonial.text}"
                      </blockquote>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-bhutan-red">{testimonial.trip}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No testimonials found</h3>
              <p className="text-gray-600 mb-6">
                {selectedTripFilter
                  ? `No testimonials available for ${selectedTripFilter} yet.`
                  : "No testimonials available yet."}
              </p>
              <Button
                onClick={() => setSelectedTripFilter(null)}
                className="bg-bhutan-red text-white hover:bg-bhutan-red/90"
              >
                View All Testimonials
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bhutan-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Bhutan Story?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join the ranks of our happy travelers and experience the magic of Bhutan for yourself.
          </p>
          <Link href="/packages">
            <Button
              size="lg"
              className="bg-white text-bhutan-red hover:bg-gray-100"
            >
              View Tour Packages <FiArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
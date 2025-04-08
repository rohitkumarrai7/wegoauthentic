"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { FiStar, FiUser, FiAlertCircle } from 'react-icons/fi';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { getApprovedTestimonials, addTestimonial, simulateApproval, Testimonial } from '@/lib/testimonials';

export const TestimonialsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [success, setSuccess] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [testimonialText, setTestimonialText] = useState('');
  const [trip, setTrip] = useState('');

  // Load testimonials on component mount
  useEffect(() => {
    setTestimonials(getApprovedTestimonials());

    // Set up an interval to check for new approved testimonials
    const intervalId = setInterval(() => {
      setTestimonials(getApprovedTestimonials());
    }, 10000); // Check every 10 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  // Submit testimonial
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new testimonial object
    const newTestimonial = {
      name,
      email,
      rating,
      text: testimonialText,
      trip
    };

    // Add to storage
    addTestimonial(newTestimonial);

    // For demo purposes, auto-approve after 5 seconds
    // In a real application, this would be handled by an admin panel
    const testimonials = getApprovedTestimonials();
    const newId = testimonials.length > 0
      ? Math.max(...testimonials.map(t => t.id)) + 1
      : 1;
    simulateApproval(newId, 5000);

    // Show success message
    setSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setSuccess(false);

      // Reset form fields
      setName('');
      setEmail('');
      setRating(5);
      setTestimonialText('');
      setTrip('');
    }, 3000);
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-bhutan-dark mb-3 md:mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            TESTIMONIALS
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Don't just take our word for it! Here are some stories and experiences from our travelers who embarked on the Bhutan journey with us.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {testimonials.length > 0 ? (
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <div className="p-1">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 md:p-8">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                          <div className="w-full">
                            <h3 className="font-bold text-lg text-bhutan-dark text-center md:text-left">{testimonial.name}</h3>
                            <div className="flex justify-center md:justify-start my-2">
                              {[...Array(5)].map((_, i) => (
                                <FiStar
                                  key={i}
                                  className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500 block text-center md:text-left">{testimonial.trip}</span>
                          </div>

                          <div className="w-full">
                            <blockquote className="italic text-gray-700 text-base md:text-lg mb-4 text-center md:text-left">
                              "{testimonial.text}"
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 md:mt-6 gap-2 md:gap-4">
                <CarouselPrevious className="static transform-none translate-x-0 translate-y-0 rounded-full h-8 w-8 md:h-10 md:w-10" />
                <CarouselNext className="static transform-none translate-x-0 translate-y-0 rounded-full h-8 w-8 md:h-10 md:w-10" />
              </div>
            </Carousel>
          ) : (
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <FiAlertCircle className="mx-auto mb-4 text-bhutan-red" size={40} />
              <h3 className="text-xl font-semibold mb-2">No testimonials yet</h3>
              <p className="text-gray-600">Be the first to share your Bhutan experience!</p>
            </div>
          )}

          {/* Share your experience button */}
          <div className="text-center mt-8">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 active:bg-[#FF0000]">
                  Share Your Experience
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px] max-w-[90vw] mx-auto">
                {!success ? (
                  <>
                    <DialogHeader>
                      <DialogTitle>Submit Your Testimonial</DialogTitle>
                      <DialogDescription>
                        Share your Bhutan travel experience with us and help others plan their journey.
                      </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="trip">Which Trip Did You Take?</Label>
                        <select
                          className="w-full rounded-md border border-gray-300 p-2"
                          id="trip"
                          value={trip}
                          onChange={(e) => setTrip(e.target.value)}
                          required
                        >
                          <option value="" disabled>Select your trip</option>
                          <option value="5 Days 4 Nights">5 Days 4 Nights Private Trip</option>
                          <option value="7 Days 6 Nights Private Trip">7 Days 6 Nights Private Trip</option>
                          <option value="7 Days 6 Nights Group Trip">7 Days 6 Nights Group Trip</option>
                          <option value="8 Days 7 Nights">8 Days 7 Nights Private Trip</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="rating">Rate Your Experience</Label>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="h-8 w-8 focus:outline-none"
                            >
                              <FiStar
                                className={star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                size={24}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="testimonial">Your Testimonial</Label>
                        <textarea
                          id="testimonial"
                          placeholder="Tell us about your experience..."
                          className="min-h-[120px] w-full rounded-md border border-gray-300 p-2"
                          value={testimonialText}
                          onChange={(e) => setTestimonialText(e.target.value)}
                          required
                        />
                      </div>

                      <DialogFooter>
                        <Button type="submit" className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 active:bg-[#FF0000]">
                          Submit Testimonial
                        </Button>
                      </DialogFooter>
                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
                    <p className="mb-4 text-gray-600">
                      Your testimonial has been submitted successfully. It will appear on the website after review.
                    </p>
                    <p className="text-sm text-gray-500">
                      (For this demo, your review will appear in about 5 seconds)
                    </p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

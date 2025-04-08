"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Private Trips Section Component
const PrivateTripsSection = () => {
  const tripOptions = [
    {
      days: '5 Days',
      description: 'Short trip',
      href: '/packages/5-days-4-nights',
    },
    {
      days: '7 Days',
      description: 'Standard trip',
      href: '/packages/7-days-6-nights',
    },
    {
      days: '10 Days',
      description: 'Extended trip',
      href: '/packages/10-days-9-nights',
    },
  ];

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-[300px]">
        <Image
          src="/images/trips/private-trip.jpg"
          alt="Private Trip"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={60}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjY4OEI4Li8vQUVFRUVFRUVFRUVFRUVFRUVFRUX/2wBDAR0XFyAeIBohHh4hIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-4 md:p-6">
          <h3 className="text-2xl font-bold text-white mb-2">Private Trips</h3>
          <p className="text-center text-white mb-4">Customize your own Bhutan adventure</p>
          
          <div className="w-full max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-2 md:gap-3 w-full">
              {tripOptions.map((option, index) => (
                <Link 
                  key={index} 
                  href={option.href} 
                  className="block w-full"
                >
                  <div className="bg-white rounded-lg p-2 md:p-4 text-center aspect-square flex flex-col items-center justify-center">
                    <h4 className="font-bold text-bhutan-dark mb-1 md:mb-2 text-sm md:text-base">{option.days}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{option.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
          <span className="text-lg font-bold text-bhutan-dark">Choose your duration</span>
          <span className="text-xl font-bold text-bhutan-red">Custom pricing</span>
        </div>
        <p className="text-gray-700 mb-4">Travel on your own schedule with our private tour options. Whether you're looking for a short getaway or an extended exploration, we have the perfect itinerary for you.</p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="inline-block h-2 w-2 rounded-full bg-bhutan-red mr-2 flex-shrink-0"></span>
            <span>Flexible departure dates</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block h-2 w-2 rounded-full bg-bhutan-red mr-2 flex-shrink-0"></span>
            <span>Customizable itineraries</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block h-2 w-2 rounded-full bg-bhutan-red mr-2 flex-shrink-0"></span>
            <span>Personal guide and vehicle</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export const TravelOptionsSection = () => {
  return (
    <section id="travel-options" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How Can You Travel With Us?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Group Trips */}
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[300px]">
              <Image
                src="/images/trips/group-trip.jpg"
                alt="Group Trip"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABpbQAAsPUAABRlWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAA9tYAAQAAAADTLXBobXRyAAAAAAAQAAAACgAAAAAAAAAAAAAAAAAAAAAAAAB2Y2dwAAAAAAAAAQAAAABgZG5hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc3ZoZAAAAAAAAAAAAAAAAG1kaWEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdmNndAAAAAAAAAAAAAAAAABkYmRyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYWN0aQAAAAAAAAAAAAAAAABtYW91AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdnVlZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0bHVhAAAAAAAAAAAAAAAAQWx0aW8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgZG5hAAAAAAAAAAAAAAAAAAAAAAAA/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgACABQAwERAAIRAQMRAf/EAB0AAAAGAwEAAAAAAAAAAAAAAAAFBwgJAgMEBv/EAC0QAAEDAwMDAgQHAAAAAAAAAAECAwQFBhEABxIICTEVQRMiMmIKQmFxgpGx/8QAGQEAAQUAAAAAAAAAAAAAAAAAAQACAwQF/8QAJBEAAQQCAQIHAAAAAAAAAAAAAAECAxEhQWEEMQUSFSIjJFH/2gAMAwEAAhEDEQA/AE9pS8oT3K9vKVKQPiXJGkSfZJHtW9Zx/mv2eL1Vqv42WwuWn8QkJaMXeugvrI8YkUxx1J/0hRPjHjOhtDL1SFKrNTgv2+RHtOx6pDpUuTEjSpr6lqQuX9jYBHLH6A+/jTNJiIqcCSGVFXki6J55j9aehKUJSlKQAPAAj9RpuIoO5VOiY/w97d09yO6tNuKLSRSqBRG1LQuIlLfqUzHFDRj3G0qSCfucR4GSNDrn/En0vqOyrE6mOyREuhO01VYqdNaZUpPlxl9XFCFKXhKnCcDnyB7nWfI9VXBI4URESz//2Q=="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Group Trips</h3>
                <p className="text-center mb-4">Join fellow travelers for a shared adventure in Bhutan</p>
                <Link href="/packages/group-trip">
                  <Button
                    className="bg-bhutan-red text-white hover:bg-bhutan-red/90 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    View 7 Days 6 Nights Trip <FiArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-bhutan-dark">Starting from</span>
                <span className="text-xl font-bold text-bhutan-red">₹27,999</span>
              </div>
              <p className="text-gray-700">Experience the best of Bhutan on our carefully curated 7-day group adventure. Make new friends while exploring Bhutan's breathtaking landscapes and rich culture.</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="inline-block h-2 w-2 rounded-full bg-bhutan-red mr-2"></span>
                  Fixed departure every Tuesday
                </li>
                <li className="flex items-center">
                  <span className="inline-block h-2 w-2 rounded-full bg-bhutan-red mr-2"></span>
                  Includes all accommodations & transportation
                </li>
                <li className="flex items-center">
                  <span className="inline-block h-2 w-2 rounded-full bg-bhutan-red mr-2"></span>
                  Expert local guides
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Private Trips */}
          <PrivateTripsSection />
        </div>
      </div>
    </section>
  );
}

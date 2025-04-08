import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';

const packages = [
  {
    id: 'group-trip',
    title: '7 Days 6 Nights Group Trip',
    type: 'Group Trip',
    price: '₹27,999',
    image: '/images/packages/group-trip.jpg',
    description: "Experience the best of Bhutan on our carefully curated 7-day group adventure. Make new friends while exploring Bhutan's breathtaking landscapes and rich culture.",
    highlights: [
      'Fixed departure every Tuesday',
      'Includes all accommodations & transportation',
      'Expert local guides',
    ]
  },
  {
    id: '5-days-4-nights',
    title: '5 Days 4 Nights Private Trip',
    type: 'Private Trip',
    price: 'Custom pricing',
    image: '/images/packages/5-days.jpg',
    description: "A quick but immersive journey through Bhutan's highlights, including the legendary Tiger's Nest hike, Thimphu city exploration, and scenic valley tours.",
    highlights: [
      'Flexible departure dates',
      "Tiger's Nest monastery hike",
      'Customizable itinerary',
    ]
  },
  {
    id: '7-days-6-nights',
    title: '7 Days 6 Nights Private Trip',
    type: 'Private Trip',
    price: 'Custom pricing',
    image: '/images/packages/7-days.jpg',
    description: "The perfect balance of cultural exploration and natural beauty with visits to Thimphu, Punakha, and Paro, including the iconic Tiger's Nest hike.",
    highlights: [
      'Flexible departure dates',
      'Visit to Punakha Dzong',
      "Tiger's Nest monastery hike",
    ]
  },
  {
    id: '8-days-7-nights',
    title: '8 Days 7 Nights Private Trip',
    type: 'Private Trip',
    price: 'Custom pricing',
    image: '/images/packages/8-days.jpg',
    description: "Our most comprehensive Bhutan journey, including everything in the 7-day trip plus the stunning Phobjikha Valley with its natural beauty and wildlife.",
    highlights: [
      'Flexible departure dates',
      'Explore Phobjikha Valley',
      'Black-Necked Crane Center visit',
    ]
  },
];

export default function Packages() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="images\gallery\gallery-1.jpg"
          alt="Bhutan Travel Packages"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Bhutan Packages</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">Discover our handcrafted itineraries designed to give you an authentic Bhutan experience</p>
          </div>
        </div>
      </section>

      {/* Packages Listing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6">Choose Your Adventure</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Select from our carefully crafted Bhutan travel packages, designed to
              showcase the best of Bhutan&apos;s natural beauty, cultural heritage, and authentic experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[250px]">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold ${pkg.type === 'Group Trip' ? 'bg-bhutan-red text-white' : 'bg-bhutan-yellow text-bhutan-dark'}`}>
                      {pkg.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-bhutan-dark">{pkg.title}</h3>
                    <span className="text-lg font-bold text-bhutan-red">{pkg.price}</span>
                  </div>

                  <p className="text-gray-700 mb-4">{pkg.description}</p>

                  <ul className="mb-6 space-y-2">
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="inline-block h-2 w-2 rounded-full bg-bhutan-red mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/packages/${pkg.id}`}>
                    <Button className="w-full bg-bhutan-red text-white hover:bg-bhutan-red/90">
                      View Details <FiArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6">Ready to Plan Your Bhutan Adventure?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Not sure which package is right for you? Contact us today and our travel experts will help you
            plan the perfect Bhutan journey based on your preferences and interests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-bhutan-red text-white hover:bg-bhutan-red/90">
                Contact Us
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-bhutan-red text-bhutan-red hover:bg-bhutan-red hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

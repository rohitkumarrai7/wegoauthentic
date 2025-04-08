import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';

const team = [
  {
    id: 1,
    name: 'Dorji Wangchuk',
    role: 'Lead Guide & Co-founder',
    image: '/images/about/team-1.jpg',
    bio: 'Born and raised in Thimphu, Dorji has been guiding travelers through Bhutan for over 10 years. His deep knowledge of Bhutanese culture, history, and hidden gems makes every journey special.',
  },
  {
    id: 2,
    name: 'Tashi Namgay',
    role: 'Guide & Local Expert',
    image: '/images/about/team-2.jpg',
    bio: 'Tashi specializes in adventure travel and knows the mountain trails of Bhutan like the back of his hand. His passion for photography helps travelers capture the perfect memories.',
  },
  {
    id: 3,
    name: 'Amita Sharma',
    role: 'Travel Coordinator & Co-founder',
    image: '/images/about/team-3.jpg',
    bio: 'Based in Mumbai, Amita handles all logistics and ensures your journey is smooth from start to finish. Her attention to detail and problem-solving skills are unmatched.',
  },
  {
    id: 4,
    name: 'Pema Lhamo',
    role: 'Cultural Specialist',
    image: '/images/about/team-4.jpg',
    bio: 'Pema is our expert on Bhutanese festivals, traditions, and cuisine. She loves introducing travelers to authentic local experiences and connecting them with artisans and communities.',
  },
];

export default function About() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="images\gallery\gallery-1.jpg"
          alt="About We Go Authentic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Our story, mission, and the passionate team behind We Go Authentic
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="images\gallery\gallery-11.jpg"
                  alt="We Go Authentic Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We Go Authentic was founded with a simple yet powerful mission: to give travelers a genuine experience of Bhutan, beyond the typical tourist trails.
                </p>
                <p>
                  Our journey began in 2023 when Manoj and Veera met on a trekking expedition. Bonding over their shared passion for authentic travel, they were struck by how many visitors were confined to generic itineraries that lacked real cultural connection. Determined to change this, they set out to create something different—a travel company built on authenticity, community engagement, and sustainability.
                </p>
                <p>
                  Since welcoming our first travelers in 2024, we've grown organically through word-of-mouth from those who appreciate our honest approach, fair pricing, and deep respect for Bhutan's traditions. Though we're a small team, our mission is big: to redefine how people experience the Land of the Thunder Dragon—one meaningful journey at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6">Our Mission</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-16">
            We believe travel should benefit both visitors and the communities they visit. Our mission is three-fold:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-bhutan-red/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-bhutan-red text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-bhutan-dark mb-4">Create Authentic Experiences</h3>
              <p className="text-gray-700">
                We design every itinerary to provide a genuine experience of Bhutan's culture, traditions, and natural beauty—far beyond the typical tourist trail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-bhutan-red/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-bhutan-red text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-bhutan-dark mb-4">Support Local Communities</h3>
              <p className="text-gray-700">
                By working directly with Bhutanese guides, drivers, homestays, and artisans, we ensure tourism benefits reach the local communities rather than middlemen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-bhutan-red/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-bhutan-red text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-bhutan-dark mb-4">Promote Sustainable Travel</h3>
              <p className="text-gray-700">
                We're committed to responsible tourism practices that preserve Bhutan's pristine environment and unique cultural heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6 text-center">Meet Your Guide</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-center">
            Meet L – Your Guide to the Real Bhutan
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
                <Image
                  src="/images/about/bhutan-team.jpg"
                  alt="L - Your Bhutan Guide"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-gray-700">
                Becoming a guide in Bhutan is one of the hardest journeys—aspiring guides must undergo extensive studies, rigorous exams, and field training before earning certification from the Tourism Council of Bhutan. It's a path that demands passion, dedication, and deep knowledge.
              </p>
              <p className="text-gray-700">
                That's why L is truly exceptional. A certified professional with years of experience, she's not just knowledgeable—she's also fun, warm, and one of the nicest people you'll ever meet! Her love for Bhutan shines through in every journey she leads, ensuring that travelers don't just see Bhutan, but truly experience it.
              </p>
              <p className="text-gray-700">
                With L as your guide, you'll discover Bhutan's rich culture, breathtaking landscapes, and hidden gems in the most authentic way possible. Because when it comes to experiencing Bhutan, who knows it better than a local?
              </p>
              <p className="text-gray-700 font-medium">
                Let L show you Bhutan the way it's meant to be seen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-bhutan-dark mb-2">No Middlemen, Better Value</h3>
                  <p className="text-gray-700">
                    By collaborating directly with local guides and services, we eliminate unnecessary middlemen and pass those savings on to you—all while ensuring more of your travel budget benefits local communities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bhutan-dark mb-2">Authentic Local Expertise</h3>
                  <p className="text-gray-700">
                    Our itineraries are crafted by Bhutanese locals who share their insider knowledge, family connections, and lifelong understanding of their homeland—giving you access to experiences no guidebook could reveal.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bhutan-dark mb-2">Personalized Attention</h3>
                  <p className="text-gray-700">
                    As a small company, we provide personalized service from planning through your journey. We're flexible, responsive, and genuinely committed to making your Bhutan experience exceptional.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-bhutan-dark mb-2">Transparent Pricing</h3>
                  <p className="text-gray-700">
                    We believe in total transparency about what's included in your package, with no hidden costs or unexpected add-ons that inflate your final bill.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="images\gallery\adventures\adventure-4.jpg"
                  alt="Local Bhutanese Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bhutan-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Real Bhutan?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Let us help you plan an authentic, memorable journey through the Land of the Thunder Dragon.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/packages">
              <Button
                size="lg"
                className="bg-white text-bhutan-red hover:bg-gray-100"
              >
                Explore Our Packages <FiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white text-bhutan-dark hover:bg-bhutan-red hover:text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

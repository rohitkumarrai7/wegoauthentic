import React from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const highlights = [
  {
    id: 1,
    title: "Bhutan is the world's only carbon-negative country!",
    image: "/images/highlights/carbon-negative.jpg",
    description:
      "While most countries struggle with pollution, Bhutan absorbs more carbon than it produces! With 70% of its land covered in forests and strict environmental policies, it's one of the greenest places on Earth.",
    mediaType: "image",
  },
  {
    id: 2,
    title: "Bhutan has no traffic lights!",
    image: "/images/highlights/no-traffic-lights.jpg",
    description:
      "Forget traffic jams! Bhutan's capital, Thimphu, is one of the only capitals in the world without a single traffic light. Instead, police officers gracefully direct cars with hand signals.",
    mediaType: "video",
    videoUrl: "https://www.instagram.com/reel/DGhfZ-aPdNq/",
  },
  {
    id: 3,
    title: "Bhutan measures success with happiness, not money!",
    image: "/images/highlights/happiness.jpg",
    description:
      "Bhutan is the only country in the world that prioritizes Gross National Happiness over GDP. Here, well-being, culture, and sustainability come first—money comes second!",
    mediaType: "image",
  },
  {
    id: 4,
    title: "You need to pay a daily Sustainable Development Fee to visit.",
    image: "/images/highlights/sdf-fee.jpg",
    description:
      "To preserve its environment and culture, Bhutan charges a Sustainable Development Fee (SDF) per day for tourists. This keeps the country exclusive, less crowded, and incredibly authentic.",
    mediaType: "image",
  },
  {
    id: 5,
    title: "Bhutan has the world's most dangerous airport!",
    image: "/images/highlights/paro-airport.jpg",
    description:
      "With only a handful of pilots trained to land here, Paro International Airport is one of the most challenging runways in the world. But don't worry, the views on landing are absolutely insane!",
    mediaType: "image",
  },
  {
    id: 6,
    title: "The famous 'Tiger's Nest' monastery is perched on a cliff.",
    image: "/images/highlights/tigers-nest.jpg",
    description:
      "The Taktsang Monastery, or Tiger's Nest, clings to a cliff 3,000 feet above the Paro Valley. The hike to this sacred site is a must-do and offers some of the most magical views in Bhutan.",
    mediaType: "video",
    videoUrl: "https://www.instagram.com/reel/DGsvYCWvWrq/",
  },
  {
    id: 7,
    title: "Chillies aren't a spice in Bhutan—they're a main dish!",
    image: "/images/highlights/ema-datshi.jpg",
    description:
      "Bhutanese people love their chillies! Ema Datshi, the national dish, is a spicy mix of chilies and cheese—definitely not for the faint of heart!",
    mediaType: "image",
  },
];

export default function WhyBhutan() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/images/bhutan-landscape.jpg"
          alt="Beautiful Bhutan landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Bhutan?</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Discover the magic and uniqueness of the Land of the Thunder Dragon
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Bhutan is not just a place you visit—it's a journey into a world of happiness, culture,
              and untouched nature. From being the only carbon-negative country to having no traffic
              lights and prioritizing happiness over money, Bhutan is unlike anywhere else on Earth.
              Whether you're marveling at the cliffside Tiger's Nest, experiencing the warmth of the
              Bhutanese people, or daring to try the fiery Ema Datshi, every moment in Bhutan is pure
              magic.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-12 text-center">
            7 Incredible Facts About Bhutan
          </h2>

          <div className="space-y-16">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Image or Video */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover"
                      priority={highlight.id <= 2}
                      quality={80}
                    />
                    {highlight.mediaType === 'video' && highlight.videoUrl && (
                      <a
                        href={highlight.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="rounded-full bg-bhutan-red h-16 w-16 flex items-center justify-center">
                          <FiExternalLink className="text-white text-2xl" />
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-bhutan-dark mb-4">
                    {highlight.title}
                  </h3>
                  <div className="text-gray-700 space-y-3">
                    <p className="text-lg">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-bhutan-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ✨ Visit Bhutan with We Go Authentic ✨
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore the real Bhutan, the local way!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/packages">
              <Button
                size="lg"
                className="bg-white text-bhutan-red hover:bg-gray-100"
              >
                View Our Tour Packages
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/20 font-semibold"
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

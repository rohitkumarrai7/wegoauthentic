"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Link from "next/link";

// Common blur data URL for loading state
const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjY4OEI4Li8vQUVFRUVFRUVFRUVFRUVFRUVFRUX/2wBDAR0XFyAeIBohHh4hIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

const galleryImages = {
  nature: [
    { id: 1, src: '/images/gallery/nature/nature-1.jpg', alt: 'Lush green valleys of Bhutan' },
    { id: 2, src: '/images/gallery/nature/nature-2.jpg', alt: 'Himalayan mountains in Bhutan' },
    { id: 3, src: '/images/gallery/nature/nature-3.jpg', alt: 'Alpine forests in Bhutan' },
    { id: 4, src: '/images/gallery/nature/nature-4.jpg', alt: 'Clear mountain rivers in Bhutan' },
    { id: 5, src: '/images/gallery/nature/nature-5.jpg', alt: 'Scenic landscapes of Bhutan' },
    { id: 6, src: '/images/gallery/nature/nature-6.jpg', alt: 'Phobjikha Valley in Bhutan' },
    { id: 7, src: '/images/gallery/nature/nature-7.jpg', alt: 'Mountain views in Bhutan' },
    { id: 8, src: '/images/gallery/nature/nature-8.jpg', alt: 'Traditional farming in Bhutan' },
  ],
  festivals: [
    { id: 1, src: '/images/gallery/festivals/festival-1.jpg', alt: 'Paro Tsechu festival' },
    { id: 2, src: '/images/gallery/festivals/festival-2.jpg', alt: 'Traditional mask dances in Bhutan' },
    { id: 3, src: '/images/gallery/festivals/festival-3.jpg', alt: 'Thimphu Tsechu celebrations' },
    { id: 4, src: '/images/gallery/festivals/festival-4.jpg', alt: 'Colorful festival costumes' },
    { id: 5, src: '/images/gallery/festivals/festival-5.jpg', alt: 'Religious ceremonies in Bhutan' },
    { id: 6, src: '/images/gallery/festivals/festival-6.jpg', alt: 'Traditional Bhutanese festival' },
    { id: 7, src: '/images/gallery/festivals/festival-7.jpg', alt: 'Traditional Bhutanese festival' },
    { id: 8, src: '/images/gallery/festivals/festival-8.jpg', alt: 'Traditional Bhutanese festival' },
  ],
  groups: [
    { id: 1, src: '/images/gallery/groups/group-1.jpg', alt: 'Group trip to Tigers Nest' },
    { id: 2, src: '/images/gallery/groups/group-2.jpg', alt: 'Group exploring Bhutanese culture' },
    { id: 3, src: '/images/gallery/groups/group-3.jpg', alt: 'Group at traditional festival' },
    { id: 4, src: '/images/gallery/groups/group-4.jpg', alt: 'Group hiking experience' },
    { id: 5, src: '/images/gallery/groups/group-5.jpg', alt: 'Group cultural immersion' },
    { id: 6, src: '/images/gallery/groups/group-6.jpg', alt: 'Group monastery visit' },
    { id: 7, src: '/images/gallery/groups/group-7.jpg', alt: 'Group traditional experience' },
    { id: 8, src: '/images/gallery/groups/group-8.jpg', alt: 'Group adventure activities' },
  ],
  adventures: [
    { id: 1, src: '/images/gallery/adventures/adventure-1.jpg', alt: "Tiger's Nest hike in Bhutan" },
    { id: 2, src: '/images/gallery/adventures/adventure-2.jpg', alt: 'River rafting in Bhutan' },
    { id: 3, src: '/images/gallery/adventures/adventure-3.jpg', alt: 'Mountain biking in Bhutan' },
    { id: 4, src: '/images/gallery/adventures/adventure-4.jpg', alt: 'Trekking in Bhutan' },
    { id: 5, src: '/images/gallery/adventures/adventure-5.jpg', alt: 'Adventure camping in Bhutan' },
    { id: 6, src: '/images/gallery/adventures/adventure-6.jpg', alt: 'Hiking to remote monasteries' },
    { id: 7, src: '/images/gallery/adventures/adventure-7.jpg', alt: 'Hot stone bath experience' },
    { id: 8, src: '/images/gallery/adventures/adventure-8.jpg', alt: 'Adventure activities in Bhutan' },
  ],
};

export default function Gallery() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/images/gallery/gallery-1.jpg"
          alt="Bhutan Gallery"
          fill
          className="object-cover"
          priority={true}
          quality={65}
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="100vw"
          onLoad={() => setIsImageLoading(false)}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bhutan Gallery</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Explore the breathtaking beauty, vibrant culture, and unique experiences Bhutan has to offer
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="nature" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-100">
                <TabsTrigger value="nature" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Nature</TabsTrigger>
                <TabsTrigger value="festivals" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Festivals</TabsTrigger>
                <TabsTrigger value="groups" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Groups</TabsTrigger>
                <TabsTrigger value="adventures" className="data-[state=active]:bg-bhutan-red data-[state=active]:text-white">Adventures</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(galleryImages).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={image.id} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        quality={75}
                        loading={index < 4 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}

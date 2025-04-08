import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { WhyBhutanSection } from '@/components/home/WhyBhutanSection';
import { TravelOptionsSection } from '@/components/home/TravelOptionsSection';
import { GallerySection } from '@/components/home/GallerySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { GroupTripCalendar } from '@/components/home/GroupTripCalendar';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyBhutanSection />
      <TravelOptionsSection />
      <GroupTripCalendar />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}

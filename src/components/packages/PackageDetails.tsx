"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiClock } from 'react-icons/fi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface PackageDetailsProps {
  packageData: {
    id?: string;
    title: string;
    subtitle?: string;
    duration: string;
    price: number | string;
    isPrivate?: boolean;
    bannerImage?: string;
    overview: string;
    route: string[];
    itinerary?: Array<{
      day: number;
      title: string;
      description: string[];
    }>;
    inclusions?: string[];
    exclusions?: string[];
    faqs?: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export function PackageDetails({ packageData }: PackageDetailsProps) {
  const {
    title,
    duration,
    price,
    overview,
    route,
    itinerary = [],
    inclusions = [],
    exclusions = [],
    faqs = []
  } = packageData;

  const whatsappLink = "https://wa.me/919014123598";

  return (
    <section>
      {/* Banner */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={packageData.bannerImage || '/default-banner.jpg'}
          alt={title}
          fill
          className="object-cover brightness-80"
          priority
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-4 md:p-10 text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between flex-wrap gap-4 md:gap-6">
              <div className="mb-3 md:mb-6">
                <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold mb-2 ${packageData.isPrivate ? 'bg-bhutan-yellow text-bhutan-dark' : 'bg-bhutan-red text-white'}`}>
                  {packageData.isPrivate ? 'Private Trip' : 'Group Trip'}
                </span>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2">{title}</h1>
                <p className="text-base md:text-xl opacity-90">{packageData.subtitle}</p>
              </div>
              <div className="bg-white text-bhutan-dark p-6 rounded-lg shadow-lg text-center w-full md:min-w-40 md:w-auto border border-gray-200">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-1">Starting from</div>
                  <div className="text-[#FF0000] font-bold text-2xl md:text-3xl">{price}</div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <FiClock className="text-gray-600 text-lg" />
                  <span className="text-gray-700">{duration}</span>
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-[#FF0000] text-white hover:bg-[#FF0000]/90 active:bg-[#FF0000] h-auto min-h-[52px] text-base uppercase font-medium">
                    CALL NOW
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 md:py-16">
        <Tabs defaultValue="overview">
          <div className="mb-6">
            <TabsList className="grid grid-cols-4 w-full bg-white p-0 rounded-none shadow-sm">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-[#FF0000] bg-white data-[state=active]:text-white text-gray-700 border border-gray-200 py-4 rounded-none font-medium text-center hover:bg-gray-50 text-sm md:text-base whitespace-normal h-full flex items-center justify-center"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="itinerary" 
                className="data-[state=active]:bg-[#FF0000] bg-white data-[state=active]:text-white text-gray-700 border border-gray-200 py-4 rounded-none font-medium text-center hover:bg-gray-50 text-sm md:text-base whitespace-normal h-full flex items-center justify-center"
              >
                Itinerary
              </TabsTrigger>
              <TabsTrigger 
                value="inclusions" 
                className="data-[state=active]:bg-[#FF0000] bg-white data-[state=active]:text-white text-gray-700 border border-gray-200 py-4 rounded-none font-medium text-center hover:bg-gray-50 text-sm md:text-base whitespace-normal h-full flex items-center justify-center"
              >
                Inclusions
              </TabsTrigger>
              <TabsTrigger 
                value="faqs" 
                className="data-[state=active]:bg-[#FF0000] bg-white data-[state=active]:text-white text-gray-700 border border-gray-200 py-4 rounded-none font-medium text-center hover:bg-gray-50 text-sm md:text-base whitespace-normal h-full flex items-center justify-center"
              >
                FAQs
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{overview}</p>

            <h3 className="text-lg font-bold text-gray-800 mb-4">Route</h3>
            <ul className="space-y-3">
              {route.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-500 mt-1.5 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* Itinerary Tab */}
          <TabsContent value="itinerary" className="pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Itinerary: {duration}</h2>
            <Accordion type="single" collapsible className="w-full">
              {itinerary.map((day) => (
                <AccordionItem key={day.day} value={`day-${day.day}`} className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="hover:bg-gray-50 text-left py-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                        {day.day}
                      </span>
                      <h3 className="text-base font-medium text-gray-800">{day.title}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 pl-10">
                    {day.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4 text-sm leading-relaxed">{paragraph}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* Inclusions Tab */}
          <TabsContent value="inclusions" className="pt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Inclusions & Exclusions</h2>
            
            <h3 className="text-xl font-bold text-gray-800 mb-6">Inclusions</h3>
            <ul className="space-y-8 mb-10">
              {inclusions.map((inclusion, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mt-1 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="border border-green-500 rounded p-0.5">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700 text-base leading-relaxed">{inclusion}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-6">Exclusions</h3>
            <ul className="space-y-8">
              {exclusions.map((exclusion, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mt-1 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="border border-red-500 rounded p-0.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                    </svg>
                  </span>
                  <span className="text-gray-700 text-base leading-relaxed">{exclusion}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faqs" className="pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-6">FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="hover:bg-gray-50 text-left py-3">
                    <h3 className="text-gray-800 font-medium text-base">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 px-1">
                    <p className="text-gray-700 text-base leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Booking Form */}
        <div id="booking-form" className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">Book Your Trip</h2>
          <div className="max-w-3xl mx-auto">
            <form 
              action="https://docs.google.com/forms/d/e/1FAIpQLScmh8bjd0SuadicCYQeK6XUA-dfr_cLTDqrU7_sWErEGrJqDQ/formResponse" 
              method="post"
              target="_blank"
              className="bg-white p-6 md:p-8 rounded-lg shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="entry.1675416202" 
                    required 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="entry.1046662939" 
                    required 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="entry.1328288194" 
                  required 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">What are you looking for?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <label className="flex items-center space-x-2 border border-gray-300 rounded p-3 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="entry.1936450652" value="Group Trip(7D/6N)" defaultChecked className="text-red-500" />
                    <span>Group Trip (7D/6N)</span>
                  </label>
                  <label className="flex items-center space-x-2 border border-gray-300 rounded p-3 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="entry.1936450652" value="Private Trip(5D/4N)" className="text-red-500" />
                    <span>Private Trip (5D/4N)</span>
                  </label>
                  <label className="flex items-center space-x-2 border border-gray-300 rounded p-3 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="entry.1936450652" value="Private Trip(7D/6N)" className="text-red-500" />
                    <span>Private Trip (7D/6N)</span>
                  </label>
                  <label className="flex items-center space-x-2 border border-gray-300 rounded p-3 cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="entry.1936450652" value="Private Trip(8D/7N)" className="text-red-500" />
                    <span>Private Trip (8D/7N)</span>
                  </label>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="dates" className="block text-gray-700 font-medium mb-2">What dates are you looking for?</label>
                <input 
                  type="text" 
                  id="dates" 
                  name="entry.1142586912" 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="DD/MM/YYYY - DD/MM/YYYY"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="entry.1033954089" 
                  rows={4} 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us about your requirements or any questions you have"
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 active:bg-[#FF0000] py-3 px-8 rounded-md text-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[180px]"
                >
                  Submit
                </Button>
              </div>
            </form>

            <div className="text-center mt-8">
              <p className="text-base text-gray-700 mb-4">Prefer to chat directly? Contact us on WhatsApp!</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <Button size="lg" className="bg-[#FF0000] text-white hover:bg-[#FF0000]/90 active:bg-[#FF0000] transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Chat with us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

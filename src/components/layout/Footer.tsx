"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiInstagram, FiYoutube, FiMail, FiPhone } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Footer = () => {
  const whatsappLink = "https://wa.me/919014123598";
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Helper function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle click on hash links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.includes('#')) {
      e.preventDefault();
      const sectionId = href.split('#')[1];
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-bhutan-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div 
            className="col-span-1 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="h-14 w-44 md:h-[75px] md:w-[240px] relative">
                <Image
                  src="/logo.png"
                  alt="We Go Authentic Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <p className="text-gray-300 mb-6">
              Experience authentic Bhutan travel with locally-guided tours and handcrafted itineraries.
              We connect you directly with Bhutanese communities for an unforgettable journey.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/we.goauthentic/?igsh=MWdxYTRwZmNtOHh1MQ%3D%3D&utm_source=qr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-bhutan-red transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://youtube.com/@wegoauthentic?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-bhutan-red transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiYoutube size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Private Trips */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-6">Private Trips</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/packages/5-days-4-nights"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  5 Days 4 Nights
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/7-days-6-nights"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  7 Days 6 Nights
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/8-days-7-nights"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  8 Days 7 Nights
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Group Trips */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-6">Group Trips</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/packages/group-trip"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  7 Days 6 Nights
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-6">Connect with us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <FiPhone className="mr-2" /> +91 90141 23598
              </li>
              <li className="flex items-center text-gray-300">
                <FiMail className="mr-2" /> Wegoauthentic@gmail.com
              </li>
            </ul>

            <div className="flex flex-col space-y-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="block">
                  <Button className="w-full bg-bhutan-red hover:bg-bhutan-red/90 text-white transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/#travel-options" onClick={handleLinkClick} className="block">
                  <Button
                    variant="default"
                    className="w-full bg-white text-bhutan-dark hover:bg-bhutan-red hover:text-white transition-all duration-300 font-semibold"
                  >
                    Book Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} We Go Authentic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

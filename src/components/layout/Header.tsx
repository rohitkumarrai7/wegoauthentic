"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappLink = "https://wa.me/919014123598";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-2 md:py-4'}`}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center"
          >
            <div className="h-14 w-44 md:h-[75px] md:w-[240px] relative">
              <Image
                src="/logo.png"
                alt="We Go Authentic Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 176px, 240px"
                quality={90}
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-medium text-sm transition-base hover-underline ${isScrolled ? 'text-bhutan-dark' : 'text-white'} hover:text-bhutan-red`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <span className={`font-medium ${isScrolled ? 'text-bhutan-dark' : 'text-white'}`}>+91 90141 23598</span>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className={`rounded-full btn-animate ${
                    isScrolled 
                      ? 'border-bhutan-red text-bhutan-red hover:bg-bhutan-red hover:text-white' 
                      : 'border-white text-white bg-transparent hover:bg-white hover:text-bhutan-red'
                  }`}
                >
                  <FiPhone className="mr-2" /> Call Us Now
                </Button>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ?
              <FiX className={isScrolled ? 'text-bhutan-dark' : 'text-white'} /> :
              <FiMenu className={isScrolled ? 'text-bhutan-dark' : 'text-white'} />
            }
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 top-[60px] bg-white z-50 overflow-y-auto pb-6"
              >
                <div className="flex flex-col py-8 px-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="py-4 border-b border-gray-100 text-bhutan-dark font-medium hover:text-bhutan-red transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-4 mt-6">
                    <span className="text-bhutan-dark font-medium">+91 90141 23598</span>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="rounded-full border-bhutan-red text-bhutan-dark hover:bg-bhutan-red hover:text-white"
                      >
                        <FiPhone className="mr-2" /> Call Us Now
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

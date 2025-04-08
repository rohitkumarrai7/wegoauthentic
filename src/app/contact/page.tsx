import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FiMail, FiPhone, FiInstagram, FiYoutube } from 'react-icons/fi';
import Link from 'next/link';
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea";

export { Textarea };

export default function Contact() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/images/gallery/gallery-1.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We&apos;re here to help you plan your perfect Bhutan adventure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-bhutan-dark mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible to help plan your Bhutan journey.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tripType">Interested In</Label>
                  <select
                    id="tripType"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bhutan-red/50"
                  >
                    <option value="">Select a trip type</option>
                    <option value="group">7 Days 6 Nights Group Trip</option>
                    <option value="private-5">5 Days 4 Nights Private Trip</option>
                    <option value="private-7">7 Days 6 Nights Private Trip</option>
                    <option value="private-8">8 Days 7 Nights Private Trip</option>
                    <option value="custom">Custom Itinerary</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your travel plans, questions, or special requirements"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-bhutan-red text-white hover:bg-bhutan-red/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-bhutan-dark mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our Bhutan trips? We&apos;re here to help!
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-bhutan-red/10 p-3 rounded-full mr-4">
                    <FiPhone className="text-bhutan-red text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-bhutan-dark">Phone</h3>
                    <p className="text-gray-700">+91 9014123598</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Available Monday-Saturday, 9am-6pm IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bhutan-red/10 p-3 rounded-full mr-4">
                    <FiMail className="text-bhutan-red text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-bhutan-dark">Email</h3>
                    <p className="text-gray-700">Contact@wegoauthentic.com</p>
                    <p className="text-gray-500 text-sm mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bhutan-red/10 p-3 rounded-full mr-4">
                    <FiInstagram className="text-bhutan-red text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-bhutan-dark">Instagram</h3>
                    <Link
                      href="https://www.instagram.com/we.goauthentic?igsh=MWdxYTRwZmNtOHh1MQ%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bhutan-red hover:underline"
                    >
                      @wegoauthentic
                    </Link>
                    <p className="text-gray-500 text-sm mt-1">
                      Follow us for travel inspiration and updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bhutan-red/10 p-3 rounded-full mr-4">
                    <FiYoutube className="text-bhutan-red text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-bhutan-dark">YouTube</h3>
                    <Link
                      href="https://youtube.com/@wegoauthentic?feature=shared"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bhutan-red hover:underline"
                    >
                      We Go Authentic
                    </Link>
                    <p className="text-gray-500 text-sm mt-1">
                      Watch our Bhutan travel videos
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg text-bhutan-dark mb-4">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-bhutan-dark">How far in advance should I book?</h4>
                    <p className="text-gray-700">
                      We recommend booking at least 2-3 months in advance, especially for peak season (March-May, September-November).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-bhutan-dark">Do I need a visa for Bhutan?</h4>
                    <p className="text-gray-700">
                      Yes, all visitors except Indian nationals need a visa for Bhutan. We assist with the visa process as part of our package.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

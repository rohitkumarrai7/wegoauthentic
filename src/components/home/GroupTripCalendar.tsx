"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiCheck } from 'react-icons/fi';

// Generate dates for upcoming Tuesdays
const getUpcomingTuesdays = (count: number) => {
  const tuesdays = [];
  const today = new Date();
  let date = new Date(today);

  // Find next Tuesday
  while (date.getDay() !== 2) { // 2 is Tuesday
    date.setDate(date.getDate() + 1);
  }

  // Get the requested number of Tuesdays
  for (let i = 0; i < count; i++) {
    const tuesdayDate = new Date(date);
    tuesdays.push({
      date: tuesdayDate,
      formattedDate: tuesdayDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      month: tuesdayDate.getMonth(),
      monthName: tuesdayDate.toLocaleDateString('en-US', { month: 'long' }),
      status: i < 3 ? 'booking' : i < 5 ? 'limited' : 'available',
      spotsLeft: i < 3 ? Math.floor(Math.random() * 3) + 1 : i < 5 ? Math.floor(Math.random() * 5) + 3 : 8
    });

    // Move to next Tuesday
    date.setDate(date.getDate() + 7);
  }

  return tuesdays;
};

export const GroupTripCalendar = () => {
  const [upcomingTuesdays, setUpcomingTuesdays] = useState<any[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [uniqueMonths, setUniqueMonths] = useState<{ month: number, name: string }[]>([]);

  // Refresh the calendar data
  useEffect(() => {
    const tuesdayData = getUpcomingTuesdays(12);
    setUpcomingTuesdays(tuesdayData);

    // Get unique months
    const months = Array.from(
      new Set(tuesdayData.map(tuesday => tuesday.month))
    ).map(month => ({
      month,
      name: new Date(new Date().getFullYear(), month).toLocaleDateString('en-US', { month: 'long' })
    }));

    setUniqueMonths(months);
  }, []);

  // Filter tuesdays by selected month
  const filteredTuesdays = selectedMonth !== null
    ? upcomingTuesdays.filter(tuesday => tuesday.month === selectedMonth)
    : upcomingTuesdays;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-bhutan-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Group Trips
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our weekly Tuesday departures for the 7-day Bhutan adventure.
            Book your spot and experience the magic of Bhutan with like-minded travelers.
          </motion.p>
        </div>

        {/* Month filter */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex flex-nowrap gap-1 md:gap-2 justify-start md:justify-center min-w-full md:min-w-0">
            <Button
              variant={selectedMonth === null ? "default" : "outline"}
              className={`${selectedMonth === null ? "bg-bhutan-red" : ""} text-xs md:text-sm py-1 px-2 md:px-4 whitespace-nowrap`}
              onClick={() => setSelectedMonth(null)}
            >
              All Dates
            </Button>
            {uniqueMonths.map((monthObj) => (
              <Button
                key={monthObj.month}
                variant={selectedMonth === monthObj.month ? "default" : "outline"}
                className={`${selectedMonth === monthObj.month ? "bg-bhutan-red" : ""} text-xs md:text-sm py-1 px-2 md:px-4 whitespace-nowrap`}
                onClick={() => setSelectedMonth(monthObj.month)}
              >
                {monthObj.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredTuesdays.map((tuesday, index) => (
            <motion.div
              key={tuesday.formattedDate}
              className={`rounded-lg shadow-md overflow-hidden border ${
                tuesday.status === 'booking'
                  ? 'border-red-500'
                  : tuesday.status === 'limited'
                    ? 'border-yellow-500'
                    : 'border-green-500'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`p-1 md:p-2 text-white text-center ${
                tuesday.status === 'booking'
                  ? 'bg-red-500'
                  : tuesday.status === 'limited'
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
              }`}>
                <div className="text-xs md:text-sm font-medium">
                  {tuesday.status === 'booking'
                    ? 'Booking Fast!'
                    : tuesday.status === 'limited'
                      ? 'Limited Seats'
                      : 'Available'}
                </div>
              </div>
              <div className="p-3 md:p-6">
                <div className="flex items-center justify-center mb-2 md:mb-4">
                  <FiCalendar className="text-bhutan-red text-lg md:text-xl mr-2" />
                  <span className="font-bold text-sm md:text-lg">{tuesday.formattedDate}</span>
                </div>
                <div className="text-center mb-2 md:mb-4">
                  <span className="text-gray-600 text-xs md:text-sm">Group Trip: 7 Days 6 Nights</span>
                </div>
                <ul className="space-y-1 md:space-y-2 mb-3 md:mb-6 text-xs md:text-sm">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-0.5 mr-1 md:mr-2 flex-shrink-0" />
                    <span>All-inclusive package</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-0.5 mr-1 md:mr-2 flex-shrink-0" />
                    <span>English speaking guide</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-0.5 mr-1 md:mr-2 flex-shrink-0" />
                    <span>{tuesday.spotsLeft} spots left</span>
                  </li>
                </ul>
                <div className="flex-shrink-0">
                  <Link href="/packages/group-trip">
                    <Button 
                      className="bg-bhutan-red text-white hover:bg-bhutan-red/90 px-4 py-2 text-sm md:text-base rounded-md flex items-center font-semibold"
                    >
                      <span className="text-white">Book Now</span> <FiArrowRight className="ml-1 md:ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

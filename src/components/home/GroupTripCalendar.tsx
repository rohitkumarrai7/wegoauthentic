"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCalendar, FiCheck } from 'react-icons/fi';

// Generate dates for upcoming Saturdays
const getUpcomingSaturdays = (count: number) => {
  const saturdays = [];
  const today = new Date();
  let date = new Date(today);

  // Find next Saturday
  while (date.getDay() !== 6) { // 6 is Saturday
    date.setDate(date.getDate() + 1);
  }

  // Get the requested number of Saturdays
  for (let i = 0; i < count; i++) {
    const saturdayDate = new Date(date);
    saturdays.push({
      date: saturdayDate,
      formattedDate: saturdayDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      month: saturdayDate.getMonth(),
      monthName: saturdayDate.toLocaleDateString('en-US', { month: 'long' }),
      status: i < 3 ? 'booking' : i < 5 ? 'limited' : 'available',
      spotsLeft: i < 3 ? Math.floor(Math.random() * 3) + 1 : i < 5 ? Math.floor(Math.random() * 5) + 3 : 8
    });

    // Move to next Saturday
    date.setDate(date.getDate() + 7);
  }

  return saturdays;
};

export const GroupTripCalendar = () => {
  const [upcomingSaturdays, setUpcomingSaturdays] = useState<any[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [uniqueMonths, setUniqueMonths] = useState<{ month: number, name: string }[]>([]);

  // Refresh the calendar data
  useEffect(() => {
    const saturdayData = getUpcomingSaturdays(12);
    setUpcomingSaturdays(saturdayData);

    // Get unique months
    const months = Array.from(
      new Set(saturdayData.map(saturday => saturday.month))
    ).map(month => ({
      month,
      name: new Date(new Date().getFullYear(), month as number).toLocaleDateString('en-US', { month: 'long' })
    }));

    setUniqueMonths(months as { month: number, name: string }[]);
  }, []);

  // Filter saturdays by selected month
  const filteredSaturdays = selectedMonth !== null
    ? upcomingSaturdays.filter(saturday => saturday.month === selectedMonth)
    : upcomingSaturdays;

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
            Join our weekly Saturday departures for the 7-day Bhutan adventure.
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
          {filteredSaturdays.map((saturday, index) => (
            <motion.div
              key={saturday.formattedDate}
              className={`rounded-lg shadow-md overflow-hidden border ${
                saturday.status === 'booking'
                  ? 'border-red-500'
                  : saturday.status === 'limited'
                    ? 'border-yellow-500'
                    : 'border-green-500'
              }`}
              style={{ cursor: 'pointer' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`p-1 md:p-2 text-white text-center ${
                saturday.status === 'booking'
                  ? 'bg-red-500'
                  : saturday.status === 'limited'
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
              }`}>
                <div className="text-xs md:text-sm font-medium">
                  {saturday.status === 'booking'
                    ? 'Booking Fast!'
                    : saturday.status === 'limited'
                      ? 'Limited Seats'
                      : 'Available'}
                </div>
              </div>
              <div className="p-3 md:p-6 bg-white group-hover:bg-bhutan-yellow/10 transition-colors duration-300">
                <div className="flex items-center justify-center mb-2 md:mb-4">
                  <FiCalendar className="text-bhutan-red text-lg md:text-xl mr-2" />
                  <span className="font-bold text-sm md:text-lg">{saturday.formattedDate}</span>
                </div>
                <div className="text-center mb-2 md:mb-4">
                  <span className="text-gray-600 text-xs md:text-sm group-hover:text-bhutan-dark transition-colors duration-300">Group Trip: 7 Days 6 Nights</span>
                </div>
                <ul className="space-y-1 md:space-y-2 mb-3 md:mb-6 text-xs md:text-sm">
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-0.5 mr-1 md:mr-2 flex-shrink-0" />
                    <span className="group-hover:text-bhutan-red transition-colors duration-300">All-inclusive package</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-0.5 mr-1 md:mr-2 flex-shrink-0" />
                    <span className="group-hover:text-bhutan-red transition-colors duration-300">English speaking guide</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-green-500 mt-0.5 mr-1 md:mr-2 flex-shrink-0" />
                    <span>{saturday.spotsLeft} spots left</span>
                  </li>
                </ul>
                <div className="flex-shrink-0">
                  <Link href="/packages/group-trip">
                    <Button 
                      className="bg-bhutan-red text-white hover:bg-bhutan-yellow hover:text-bhutan-dark font-bold shadow-md transition-all duration-300 px-4 py-2 text-sm md:text-base rounded-md flex items-center font-semibold"
                    >
                      <span className="text-white group-hover:text-bhutan-dark transition-colors duration-300">Book Now</span> <FiArrowRight className="ml-1 md:ml-2" />
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

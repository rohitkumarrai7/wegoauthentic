"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-bhutan-red/90 to-bhutan-yellow/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        {/* Spinning Bhutan-inspired icon */}
        <motion.div
          className="relative w-16 h-16 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border-4 border-white/20 border-t-white rounded-full"></div>
          <motion.div
            className="absolute inset-2 border-2 border-white/30 border-t-white rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          ></motion.div>
        </motion.div>

        {/* Animated text */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold text-white"
            animate={{ textShadow: ["0 0 8px rgba(255,255,255,0.5)", "0 0 16px rgba(255,255,255,0.8)", "0 0 8px rgba(255,255,255,0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Discovering Bhutan
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Travel-themed floating elements
export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {i % 4 === 0 ? "🏔️" : i % 4 === 1 ? "🌸" : i % 4 === 2 ? "🔔" : "🏛️"}
        </motion.div>
      ))}
    </div>
  );
}

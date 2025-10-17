"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  duration: 0.15,
  ease: "easeInOut",
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

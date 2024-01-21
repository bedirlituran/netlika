"use client";
import { motion } from 'framer-motion';

const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;

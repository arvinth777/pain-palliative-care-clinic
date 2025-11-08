'use client';

import { motion } from 'framer-motion';
import { Heartbeat } from 'phosphor-react';

export default function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-primary-600 mb-4"
      >
        <Heartbeat size={48} weight="duotone" />
      </motion.div>
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  );
}

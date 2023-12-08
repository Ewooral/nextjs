import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertProps {
  message: string;
  isVisible: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, isVisible }) => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 bg-white rounded shadow">
            <p>{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
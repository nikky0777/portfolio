import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-blue-500/20 shadow-lg hover:shadow-xl dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5 text-yellow-500 transform hover:rotate-90 transition-transform duration-300" />
      ) : (
        <FaMoon className="w-5 h-5 text-blue-600 transform hover:-rotate-90 transition-transform duration-300" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 
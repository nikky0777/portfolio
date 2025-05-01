import React from 'react';
import { motion } from 'framer-motion';

interface IllustrationProps {
  type: 'developer' | 'student' | 'certificate' | 'project' | 'achievement';
  className?: string;
}

const Illustrations: React.FC<IllustrationProps> = ({ type, className = '' }) => {
  const illustrations = {
    developer: (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-64">
          {/* Developer at Desk */}
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {/* Desk */}
            <div className="absolute bottom-0 w-full h-4 bg-gray-800 rounded-lg"></div>
            
            {/* Monitor */}
            <div className="absolute bottom-8 left-4 w-24 h-20 bg-gray-700 rounded-lg">
              <div className="absolute inset-1 bg-blue-400/20 rounded-md"></div>
            </div>
            
            {/* Laptop */}
            <div className="absolute bottom-8 right-4 w-20 h-16 bg-gray-700 transform -rotate-6">
              <div className="absolute inset-1 bg-blue-400/20"></div>
            </div>
            
            {/* Person */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-blue-400 rounded-full"> {/* Head */}
                <div className="absolute top-2 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-800 rounded-full"></div>
              </div>
              <div className="w-12 h-16 bg-blue-500 rounded-lg mt-1"></div> {/* Body */}
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 text-blue-400"
            animate={{
              y: [-10, 0, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    ),
    
    student: (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-64">
          {/* Student with Books */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {/* Books Stack */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-4 bg-purple-500 rounded"></div>
              <div className="w-14 h-4 bg-blue-500 rounded -mt-1 ml-2"></div>
              <div className="w-12 h-4 bg-green-500 rounded -mt-1 ml-4"></div>
            </div>
            
            {/* Student Figure */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-purple-400 rounded-full">
                <div className="absolute top-2 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
              </div>
              <div className="w-12 h-16 bg-purple-500 rounded-lg mt-1"></div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              y: [-10, 0, -10],
              rotate: [0, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-8 h-8 text-purple-400">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    ),

    certificate: (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-64">
          {/* Certificate */}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-24 bg-yellow-100 rounded-lg border-4 border-yellow-400">
                <div className="absolute top-4 left-4 right-4 h-2 bg-gray-400"></div>
                <div className="absolute top-8 left-4 right-4 h-2 bg-gray-400"></div>
                <div className="absolute bottom-4 left-8 right-8 h-4 bg-yellow-400 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Floating Stars */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${20 + i * 20}%`,
                left: `${20 + i * 30}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
              }}
            >
              <div className="w-6 h-6 text-yellow-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),

    project: (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-64">
          {/* Project Workspace */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {/* Code Window */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-32 bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-6 bg-gray-700 flex items-center px-2">
                  <div className="w-2 h-2 rounded-full bg-red-400 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="p-2">
                  <div className="w-full h-2 bg-blue-400/30 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-green-400/30 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-purple-400/30 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="w-8 h-8 text-blue-400">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-2.46 10.87a1 1 0 0 0-.8.2l-2.1 2.1a1 1 0 0 1-1.4 0L12 16l-2.7 2.7a1 1 0 0 1-1.4 0l-2.1-2.1a1 1 0 0 0-.8-.2A6 6 0 0 1 2.53 5.8l3.77 3.77a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4L7.4 4.7a1 1 0 0 1 0-1.4L8.8 2h6.4L16.6 3.4a1 1 0 0 1 0 1.4l-1.9 1.5z"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    ),

    achievement: (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-64">
          {/* Trophy */}
          <motion.div
            className="absolute inset-0"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-24">
                <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto"></div>
                <div className="w-4 h-8 bg-yellow-500 mx-auto"></div>
                <div className="w-12 h-2 bg-yellow-600 mx-auto"></div>
              </div>
            </div>
          </motion.div>

          {/* Floating Stars and Sparkles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <div className="w-4 h-4 text-yellow-300">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  };

  return illustrations[type];
};

export default Illustrations; 
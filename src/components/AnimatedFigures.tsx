import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaRobot, FaUserAstronaut, FaCode, FaBrain,
  FaRocket, FaLaptopCode, FaServer, FaDatabase,
  FaChartLine, FaCogs, FaLightbulb, FaNetworkWired
} from 'react-icons/fa'

interface FigureProps {
  icon: React.ElementType
  position: string
  delay: number
  message?: string
  color: string
}

const AnimatedFigure = ({ icon: Icon, position, delay, message, color }: FigureProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`absolute ${position} transform-gpu`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className={`text-6xl ${color} cursor-pointer`}>
          <Icon />
        </div>
        <motion.div
          className="absolute inset-0 bg-secondary/20 rounded-full filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Message Bubble */}
        <AnimatePresence>
          {isHovered && message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-primary p-3 rounded-lg shadow-lg whitespace-nowrap"
            >
              <div className="text-sm text-text-secondary">{message}</div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

const AnimatedFigures = () => {
  const figures: FigureProps[] = [
    {
      icon: FaRobot,
      position: "top-1/4 left-1/4",
      delay: 0,
      message: "AI & Machine Learning Expert",
      color: "text-blue-500"
    },
    {
      icon: FaUserAstronaut,
      position: "top-1/3 right-1/4",
      delay: 0.2,
      message: "Innovative Problem Solver",
      color: "text-purple-500"
    },
    {
      icon: FaCode,
      position: "bottom-1/4 left-1/3",
      delay: 0.4,
      message: "Cloud AI/ML Engineer",
      color: "text-green-500"
    },
    // {
    //   icon: FaBrain,
    //   position: "bottom-1/3 right-1/3",
    //   delay: 0.6,
    //   message: "Data Science Specialist",
    //   color: "text-yellow-500"
    // },
    {
      icon: FaRocket,
      position: "top-1/2 left-1/2",
      delay: 0.8,
      message: "Fast Learner & Innovator",
      color: "text-red-500"
    },
    {
      icon: FaLaptopCode,
      position: "top-2/3 left-1/4",
      delay: 1,
      message: "Web Development Expert",
      color: "text-blue-400"
    },
    {
      icon: FaServer,
      position: "bottom-1/2 right-1/2",
      delay: 1.2,
      message: "Backend Development",
      color: "text-green-400"
    },
    {
      icon: FaDatabase,
      position: "bottom-2/3 right-1/4",
      delay: 1.4,
      message: "Database Management",
      color: "text-purple-400"
    }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {figures.map((figure, index) => (
        <AnimatedFigure key={index} {...figure} />
      ))}
      
      {/* Interactive Network Lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {figures.map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute h-0.5 bg-gradient-to-r from-secondary/20 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-secondary/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedFigures 
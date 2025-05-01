import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaRobot,
  FaTools,
  FaPython,
  FaAws,
  FaServer,
  FaChartBar,
  FaTable,
  FaFileAlt,
  FaChartArea,
  FaChartPie,
} from "react-icons/fa";
import { SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";

interface TrainingItem {
  title: string;
  organization: string;
  duration: string;
  location: string;
  icon: React.ElementType;
  color: string;
  description: string[];
  skills: {
    name: string;
    icon: React.ElementType;
    color: string;
    category: string;
  }[];
}

const trainingList: TrainingItem[] = [
  {
    title: "DSA Summer Training",
    organization: "IBM",
    duration: "Jun 2024 - Jul 2024",
    location: "Remote",
    icon: FaBrain,
    color: "from-blue-500/20 to-purple-500/20",
    description: [
      "Algorithm Design: Implemented efficient algorithms for sorting, searching, and graph traversal",
      "Data Structures: Implemented data structures such as stacks, queues, trees, and graphs",
      "Problem Solving: Applied problem-solving techniques to optimize code performance",
      "Competitive Programming: Participated in coding competitions and achieved top ranks",
    ],
    skills: [
      // Data Processing Tools
      {
        name: "Arrays",
        icon: SiPandas,
        color: "text-blue-400",
        category: "Arrays",
      },
      {
        name: "Strings",
        icon: SiNumpy,
        color: "text-yellow-500",
        category: "Strings",
      },
      // Visualization Tools
      {
        name: "Stacks",
        icon: FaChartArea,
        color: "text-green-500",
        category: "Stacks",
      },
      {
        name: "Queues",
        icon: FaChartPie,
        color: "text-purple-500",
        category: "Queues",
      },
      // ML & NLP Tools
      {
        name: "Trees",
        icon: SiScikitlearn,
        color: "text-orange-500",
        category: "Trees",
      },
      {
        name: "Graphs",
        icon: FaFileAlt,
        color: "text-blue-500",
        category: "Graphs",
      },
      {
        name: "Recursion",
        icon: FaTable,
        color: "text-green-400",
        category: "Recursion",
      },
      {
        name: "Backtracking",
        icon: FaChartBar,
        color: "text-purple-400",
        category: "Backtracking",
      },
    ],
  },
];

const TrainingCard = ({ training }: { training: TrainingItem }) => {
  return (
    <motion.div
      className="relative perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-primary-lighter/10 backdrop-blur-sm p-8 rounded-xl shadow-lg relative overflow-hidden group transform-gpu hover:scale-105 transition-transform duration-300"
        whileHover={{ rotateY: 5, rotateX: 5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${training.color} opacity-30`}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Organization Badge */}
        <motion.div
          className="absolute -top-3 -right-3 bg-secondary/40 backdrop-blur-md px-6 py-2.5 rounded-full text-base font-semibold text-white border-2 border-secondary/50 shadow-lg hover:scale-105 transition-transform duration-300 z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            backgroundColor: "rgba(var(--color-secondary), 0.6)",
            borderColor: "rgba(var(--color-secondary), 0.7)",
          }}
        >
          {training.organization}
        </motion.div>

        {/* Header Section */}
        <div className="flex items-start gap-6 mb-8">
          <motion.div
            className="text-4xl text-secondary transform-gpu"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <training.icon />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {training.title}
            </h3>
            <div className="flex gap-4 text-secondary/80">
              <span className="flex items-center gap-2">
                <FaChartLine className="w-4 h-4" />
                {training.duration}
              </span>
              <span className="flex items-center gap-2">
                <FaServer className="w-4 h-4" />
                {training.location}
              </span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8 space-y-3">
          {training.description.map((desc, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 bg-primary-lighter/20 rounded-lg p-3 border border-secondary/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FaCode className="w-5 h-5 text-secondary mt-1" />
              <p className="text-white/90">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {training.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="bg-primary-lighter/30 backdrop-blur-sm p-4 rounded-lg text-center transform-gpu hover:scale-110 transition-all duration-300 border border-secondary/10 group"
                whileHover={{ rotateY: 10, rotateX: 10 }}
              >
                <motion.div
                  className={`text-2xl ${skill.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <skill.icon />
                </motion.div>
                <p className="text-white/90 text-sm font-medium">
                  {skill.name}
                </p>
                <p className="text-secondary/70 text-xs mt-1">
                  {skill.category}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Training = () => {
  return (
    <section id="training" className="section py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary-light/80" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/10 via-accent-purple/10 to-transparent rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/10 via-primary-lighter/10 to-transparent rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Training & Experience
        </motion.h2>

        <div className="space-y-12">
          {trainingList.map((training, index) => (
            <TrainingCard key={training.title} training={training} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;

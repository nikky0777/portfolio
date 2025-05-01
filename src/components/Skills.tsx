import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaUsers,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaChartBar,
  FaBrain,
  FaDatabase,
  FaUserTie,
  FaCalendarCheck,
  FaLightbulb,
  FaUsers as FaTeam,
  FaClock,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJupyter,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTableau,
} from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";

interface SkillItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: FaCode,
    skills: [
      { name: "Python", icon: FaPython, color: "text-blue-500" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
    ],
  },
  {
    title: "Tools and Libraries",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-400" },
      { name: "Tableau", icon: SiTableau, color: "text-orange-600" },
      { name: "Excel", icon: RiFileExcel2Line, color: "text-orange-400" },
      { name: "Pandas", icon: SiPandas, color: "text-green-500" },
      { name: "NumPy", icon: SiNumpy, color: "text-blue-600" },
      { name: "AWS", icon: FaAws, color: "text-orange-500" },
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    skills: [
      { name: "Leadership", icon: FaUserTie, color: "text-blue-500" },
      {
        name: "Project Management",
        icon: FaCalendarCheck,
        color: "text-green-500",
      },
      { name: "Problem Solving", icon: FaLightbulb, color: "text-yellow-500" },
      { name: "Time Management", icon: FaClock, color: "text-purple-500" },
      { name: "Team Collaboration", icon: FaTeam, color: "text-blue-400" },
    ],
  },
];

const SkillCard = ({ skill }: { skill: SkillItem }) => {
  return (
    <motion.div
      className="relative perspective-1000"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotateY: 10, rotateX: 10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-primary-lighter/10 backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden group transform-gpu border border-secondary/10">
        {/* Glass Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary-lighter/10 to-transparent opacity-50" />

        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent-purple/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Skill Icon */}
          <motion.div
            className={`text-4xl ${skill.color} transform-gpu`}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <skill.icon />
          </motion.div>

          {/* Skill Name */}
          <div className="mt-3 relative">
            <motion.div
              className="bg-primary-dark/40 backdrop-blur-sm px-3 py-1 rounded-full border border-secondary/20"
              whileHover={{
                borderColor: "rgba(100, 255, 218, 0.5)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.p
                className="text-white font-medium text-sm text-center tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section py-20 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 bg-primary-light/80" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 via-accent-purple/20 to-transparent rounded-full filter blur-3xl"
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
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/20 via-primary-lighter/20 to-transparent rounded-full filter blur-3xl"
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

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="backdrop-blur-sm bg-primary-lighter/5 rounded-xl p-8 border border-secondary/10"
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="text-3xl text-secondary mr-3"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <category.icon />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

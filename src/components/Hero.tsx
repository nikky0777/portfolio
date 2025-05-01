import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiCode, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/nikky-singh-65917824a/",
    label: "LinkedIn",
    color: "hover:text-[#0077B5]",
    bgColor: "group-hover:bg-[#0077B5]/10",
  },
  {
    Icon: FiGithub,
    href: "https://github.com/nikky0777",
    label: "GitHub",
    color: "hover:text-white",
    bgColor: "group-hover:bg-white/10",
  },
  {
    Icon: FiCode,
    href: "#",
    label: "LeetCode",
    color: "hover:text-[#FFA116]",
    bgColor: "group-hover:bg-[#FFA116]/10",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="section flex items-center justify-center min-h-screen relative overflow-hidden bg-primary"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-purple/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-light/20 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center w-full max-w-4xl"
          >
            {/* Profile Image - New Modern Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 125,
                delay: 0.1,
              }}
              className="relative group mb-8 mx-40"
            >
              {/* Left Side Word Cloud */}
              <motion.div
                className="absolute -left-40 top-1/2 -translate-y-1/2 space-y-8 z-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-secondary-light to-secondary opacity-75 rounded-full blur-sm group-hover:opacity-100 transition duration-300" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-secondary/20 via-secondary-light/20 to-secondary/20 rounded-full backdrop-blur-sm border border-secondary/50 group-hover:border-secondary-light transition-all duration-300">
                    <span className="text-white font-bold text-lg group-hover:text-secondary-lighter transition-colors duration-300">
                      Driven
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side Word Cloud */}
              <motion.div
                className="absolute -right-40 top-1/2 -translate-y-1/2 space-y-8 z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple via-secondary to-accent-purple opacity-75 rounded-full blur-sm group-hover:opacity-100 transition duration-300" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-accent-purple/30 via-secondary/30 to-accent-purple/30 rounded-full backdrop-blur-sm border border-accent-purple/50 group-hover:border-accent-purple transition-all duration-300">
                    <span className="text-white font-bold text-lg group-hover:text-accent-purple transition-colors duration-300">
                      Tech-Savvy
                    </span>
                    <div className="absolute inset-0 bg-accent-purple/20 rounded-full filter blur opacity-50 group-hover:opacity-75 transition duration-300" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 3, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary-light via-accent-purple to-secondary-light opacity-75 rounded-full blur-sm group-hover:opacity-100 transition duration-300" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-secondary-light/20 via-accent-purple/20 to-secondary-light/20 rounded-full backdrop-blur-sm border border-secondary-light/50 group-hover:border-secondary-lighter transition-all duration-300">
                    <span className="text-white font-bold text-lg group-hover:text-secondary-lighter transition-colors duration-300">
                      Learner
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-72 h-[400px] rounded-2xl overflow-hidden z-10">
                {/* Background Decorative Elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary-light via-secondary to-accent-purple blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

                {/* Image Frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-secondary/20 backdrop-blur-sm">
                  <img
                    src="/my-pic.jpg"
                    alt="Nikky Singh"
                    className="w-full h-full object-cover object-center rounded-2xl transform group-hover:scale-102 transition duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-secondary/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-secondary/30 rounded-br-2xl"></div>

                {/* Animated Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent-purple/10 rounded-2xl"
                  animate={{
                    opacity: [0.2, 0.3, 0.2],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Interactive Elements */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-accent-purple to-secondary-light opacity-30 blur-sm rounded-full group-hover:opacity-50 transition duration-300" />
                  <div className="relative px-6 py-2 bg-primary-lighter/80 rounded-full border border-secondary/20 backdrop-blur-md shadow-lg">
                    <span className="text-secondary-light text-sm font-medium">
                      Data Enthusiast
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-8"
              >
                <span className="relative inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary-light to-white">
                    Nikky Singh
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent-purple via-secondary to-secondary-light"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-accent-purple/20 to-secondary-light/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                  {/* Animated dots */}
                  <div className="absolute -right-4 top-0 w-2 h-2 rounded-full bg-secondary-light animate-pulse" />
                  <div className="absolute -left-4 bottom-0 w-2 h-2 rounded-full bg-accent-purple animate-pulse delay-75" />
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl md:text-4xl font-semibold mb-8 text-text-primary drop-shadow-lg"
              >
                <div className="flex flex-wrap justify-center gap-4">
                  {["Python", "C++", "Java", "Tableau", "Big Data"].map(
                    (skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="relative group"
                      >
                        <div className="px-6 py-3 rounded-lg bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300">
                          <span className="text-[#64ffda] font-medium">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl mb-8 max-w-2xl text-text-primary font-medium bg-primary-lighter/20 p-6 rounded-lg backdrop-blur-sm border border-secondary/20 shadow-lg relative group"
              >
                {/* Golden border effect */}
                <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] opacity-40 group-hover:opacity-60 transition-all duration-300" />
                <div className="absolute -inset-[1px] rounded-lg bg-primary-lighter/90 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent-purple/5 to-secondary-light/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="relative z-10">
                  I build exceptional digital experiences that are fast,
                  accessible, and visually appealing.
                </span>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 via-accent-purple/20 to-secondary-light/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
                {/* Animated golden border corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFD700] rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FFD700] rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FFD700] rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FFD700] rounded-br-lg" />
              </motion.p>

              {/* Contact Info */}
              <div className="mt-8 text-text-secondary">
                <motion.p
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-lighter/20 border border-secondary/30 hover:border-secondary/60 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    navigator.clipboard.writeText("nikkysingh2403@gmail.com")
                  }
                >
                  <FiMail className="w-5 h-5 text-secondary group-hover:text-secondary-light transition-colors" />
                  <span className="text-white group-hover:text-secondary-light transition-colors">
                    nikkysingh2403@gmail.com
                  </span>
                </motion.p>
              </div>

              {/* Social Links with Enhanced Styling */}
              <motion.div
                className="flex justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {socialLinks.map(({ Icon, href, label, color, bgColor }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-text-secondary ${color} p-3 rounded-full transition-all duration-300 relative group flex items-center gap-2 bg-primary-lighter/10 backdrop-blur-sm border border-secondary/10`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${bgColor}`}
                    />
                    <Icon className="h-6 w-6 relative z-10" />
                    <span className="text-sm font-medium relative z-10 whitespace-nowrap pr-2">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

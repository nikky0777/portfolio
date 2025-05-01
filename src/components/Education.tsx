import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaBook,
  FaSchool,
} from "react-icons/fa";

interface Education {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  details: string[];
  icon: React.ElementType;
  image: string;
  website: string;
}

const educationList: Education[] = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech CSE",
    location: "Punjab",
    duration: "2022 - 2026",
    details: ["CGPA: 7.51", "Data Science", "Tech Communities"],
    icon: FaGraduationCap,
    image:
      "https://idealcareer.in/wp-content/uploads/2020/12/en-news-18554188-LPU-campus.jpg.webp",
    website: "https://www.lpu.in/",
  },
  {
    institution: "Divine Public School",
    degree: "Class 12",
    location: "Punjab",
    duration: "2020 - 2021",
    details: ["93.2%"],
    icon: FaSchool,
    image:
      "https://rksdpublicschool.org/wp-content/uploads/2023/12/IMG_9150-1copy-1024x664.jpg",
    website: "#",
  },
  {
    institution: "Divine Public School",
    degree: "Class 10",
    location: "Pubjab",
    duration: "2018 - 2019",
    details: ["89.2%"],
    icon: FaSchool,
    image:
      "https://rksdpublicschool.org/wp-content/uploads/2023/12/IMG_9150-1copy-1024x664.jpg",
    website: "#",
  },
];

const EducationCard = ({
  education,
  index,
}: {
  education: Education;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex ${isEven ? "flex-row" : "flex-row-reverse"} items-center w-full mb-12`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Connecting Line & Icon */}
      <div
        className={`w-1/2 flex ${isEven ? "justify-end" : "justify-start"} relative z-20`}
      >
        <div className="relative w-full flex items-center">
          {/* Line */}
          <div
            className={`h-0.5 bg-gradient-to-${isEven ? "l" : "r"} from-secondary/80 to-transparent w-full relative z-10`}
          ></div>
          {/* Icon Circle */}
          <motion.div
            className="absolute flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-light/90 to-primary-lighter/90 shadow-xl flex items-center justify-center border-2 border-secondary/50 relative z-30"
            style={{ [isEven ? "right" : "left"]: "-2rem" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <education.icon className="w-8 h-8 text-secondary drop-shadow-lg" />
          </motion.div>
        </div>
      </div>

      {/* Card Content */}
      <motion.div
        className="w-1/2 p-1 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-primary-lighter/80 p-6 rounded-xl shadow-xl backdrop-blur-md border border-secondary/20 relative overflow-hidden group"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Background Image with Enhanced Overlay */}
          <div className="absolute inset-0">
            <motion.img
              src={education.image}
              alt={education.institution}
              className="w-full h-full object-cover opacity-40"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary-lighter/60 to-primary/70"
              animate={{
                opacity: isHovered ? 0.8 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute -inset-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent rounded-xl"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10">
            {/* Institution Name with Enhanced Visibility and Link */}
            <div className="flex items-center gap-3 mb-2">
              <motion.h3
                className="text-2xl font-bold text-white drop-shadow-lg bg-primary-lighter/40 px-4 py-2 rounded-lg inline-block"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {education.institution}
              </motion.h3>
              <motion.a
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-lighter/40 p-2.5 rounded-lg hover:bg-primary-lighter/60 transition-all duration-300 group relative flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent-purple/20 to-secondary-light/20 rounded-lg"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <FaUniversity className="w-5 h-5 text-secondary-light relative z-10 group-hover:text-secondary transition-colors duration-300" />
                <span className="text-secondary-light text-sm font-medium relative z-10 group-hover:text-secondary transition-colors duration-300">
                  Visit Website
                </span>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full px-4 py-2 bg-gradient-to-r from-secondary via-accent-purple to-secondary-light rounded-lg shadow-xl border border-secondary/20 whitespace-nowrap z-50"
                    >
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-secondary to-accent-purple rotate-45" />
                      <div className="flex items-center gap-2">
                        <FaUniversity className="w-4 h-4 text-white" />
                        <span className="text-white font-medium text-sm">
                          Click to Visit Official Website
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            </div>

            {/* Degree with Improved Contrast */}
            <motion.p
              className="text-lg text-secondary font-semibold mb-3 drop-shadow-md bg-primary/40 px-4 py-1.5 rounded-lg inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {education.degree}
            </motion.p>

            {/* Duration and Location with Better Visibility */}
            <div className="flex items-center text-sm space-x-4 mb-4">
              <div className="flex items-center space-x-2 bg-primary-dark/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-secondary/30">
                <FaCalendarAlt className="w-4 h-4 text-secondary" />
                <span className="text-white font-medium">
                  {education.duration}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-dark/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-secondary/30">
                <FaMapMarkerAlt className="w-4 h-4 text-secondary" />
                <span className="text-white font-medium">
                  {education.location}
                </span>
              </div>
            </div>

            {/* Details with Enhanced Styling */}
            <div className="flex flex-wrap gap-3">
              {education.details.map((detail, i) => (
                <motion.span
                  key={i}
                  className="bg-primary-dark/50 backdrop-blur-md px-4 py-2 rounded-lg text-sm text-white font-medium border border-secondary/40 hover:border-secondary/60 transition duration-200 shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section
      id="education"
      className="section bg-primary-light py-24 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(128,128,128,0.1)_1px,_transparent_1px)] [background-size:20px_20px] opacity-70"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-white relative z-10 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary">My</span> Education Journey
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Enhanced Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/30 via-secondary/60 to-secondary/30 transform -translate-x-1/2 rounded-full shadow-lg z-10"></div>

          {educationList.map((education, index) => (
            <EducationCard
              key={education.institution}
              education={education}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

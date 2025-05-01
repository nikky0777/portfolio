import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaDownload } from "react-icons/fa";

interface Achievement {
  title: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    title: "District Level Certificate in Athletics",
    description:
      "Achieved District-Level Certificate in Athletics, demonstrating excellence in sportsmanship, discipline, and competitive performance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGYhyRrlI_Gt9TkSCi_-YiQqTof7fza1Gow&s",
  },
  {
    title: "District-level certificate in Volleyball",
    description:
      "Earned District-Level Certificate in Volleyball, showcasing teamwork, strategic gameplay, and athletic proficiency.",
    image:
      "https://www.greaterkashmir.com/wp-content/uploads/2024/09/Screenshot-2024-09-06-at-7.31.10-AM.png",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="group bg-primary-light rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Container with Enhanced Styling */}
              <div className="relative h-48 overflow-hidden bg-primary-lighter/20">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80" />

                {/* Enhanced Trophy Icon Overlay */}
                <motion.div
                  className="absolute top-4 right-4 text-4xl text-secondary"
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaTrophy className="drop-shadow-lg" />
                </motion.div>

                {/* Title Overlay for Better Visibility */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary to-transparent">
                  <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-lg">
                    {achievement.title}
                  </h3>
                </div>
              </div>

              {/* Content Section with Enhanced Styling */}
              <div className="p-6 relative bg-primary-lighter/10 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center backdrop-blur-sm">
                      <FaTrophy className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-text-secondary leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-secondary/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#1a1a1a]/80 p-6 rounded-xl border border-[#2a2a2a] backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white text-center mb-6">
              My Resume
            </h3>

            <div className="flex flex-col items-center gap-6">
              {/* Resume Preview */}
              <div className="relative group w-64">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/cvpreview.png"
                    alt="Resume Preview"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 flex space-x-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#64ffda]" />
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <div className="w-2 h-2 rounded-full bg-accent-purple" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1a1a1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      className="text-4xl text-[#64ffda]"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaDownload />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <motion.a
                href="/cv.pdf"
                download
                className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-[#64ffda]/10 hover:bg-[#64ffda]/20 text-[#64ffda] rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center space-x-2">
                  <FaDownload className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="font-medium">Download Resume</span>
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

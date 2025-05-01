import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaBrain,
  FaRobot,
  FaDocker,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

interface Certificate {
  title: string;
  organization: string;
  date: string;
  icon: React.ElementType;
  color: string;
  link?: string;
  description: string;
  image: string;
  preview: string; // URL to the certificate preview image
}

const certificates: Certificate[] = [
  {
    title: "Programming in C++",
    organization: "Coursera",
    date: "Dec 2023",
    icon: FaBrain,
    color: "from-purple-500/20 to-blue-500/20",
    link: "https://www.coursera.org/share/ec15781b85f41737b64a1ce80fa24c65",
    description: " A Hands-on Introduction on Coursera!",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    preview: "/promptgpt.png",
  },
  {
    title: "Data Analysis with Tableau",
    organization: "Coursera",
    date: "Nov 2024",
    icon: FaRobot,
    color: "from-blue-500/20 to-green-500/20",
    link: "https://coursera.org/share/52f189ef9c02b6e4420a1752aa1ac00e",
    description:
      "Apply Tableau techniques to manipulate and prepare data for analysis.",
    image:
      "https://images.unsplash.com/photo-1702763973490-3b2d40c6ff03?q=80&w=1932&auto=format&fit=crop",
    preview: "/genAI.png",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    organization: "Google",
    date: "Nov 2023",
    icon: FaBrain,
    color: "from-green-500/20 to-yellow-500/20",
    link: "https://coursera.org/share/7a9d5825cfcb18b5a1f8fac1bde53fb4",
    description:
      "Basics of computer networking, including protocols, cloud computing, and troubleshooting.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1932&auto=format&fit=crop",
    preview: "/Dynamic programming, Greedy Algorythms_page-0001.jpg",
  },
  {
    title: "Supervised Machine Learning ",
    organization: "Coursera",
    date: "Nov 2024",
    icon: FaBrain,
    color: "from-blue-500/20 to-purple-500/20",
    link: "https://coursera.org/share/a82df89f16fe1edb9ac4efd4129e09d0",
    description:
      "Build machine learning models in Python using popular machine learning libraries NumPy & scikit-learn",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1932&auto=format&fit=crop",
    preview: "/ChatGPT Advance Data Analysis_page-0001.jpg",
  },
  {
    title: "Intelligence Tools for the Digital Age",
    organization: "Udemy",
    date: "Mar 2023",
    icon: FaRobot,
    color: "from-yellow-500/20 to-blue-500/20",
    link: "https://coursera.org/share/5e51724b1b9d329379efe63de312476c",
    description:
      "Advanced digital tools for effective information analysis and intelligence in the modern digital landscape",
    image:
      "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=1932&auto=format&fit=crop",
    preview: "/Build AI App with ChatGpt ,DALL-E,GPT-4_page-0001.jpg",
  },
  {
    title: "C++ Basic Structures",
    organization: "Coursera",
    date: "Dec 2023",
    icon: FaRobot,
    color: "from-pink-500/20 to-purple-500/20",
    link: "https://www.coursera.org/account/accomplishments/verify/RG8AGAHT7X4N?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    description:
      "Store and manipulate vectors of data, Compare and manipulate strings of text, Read and write to text and CSV files",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1932&auto=format&fit=crop",
    preview: "/Generative AI Primer_page-0001.jpg",
  },
];

const PreviewModal = ({
  certificate,
  isOpen,
  onClose,
}: {
  certificate: Certificate;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full bg-primary-lighter rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Certificate Preview */}
            <div className="relative aspect-[1.4/1] w-full">
              <img
                src={certificate.preview}
                alt={`${certificate.title} Certificate`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Certificate Info */}
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <h3 className="text-xl font-bold text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-white/80">
                {certificate.organization} • {certificate.date}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CertificateCard = ({
  certificate,
  index,
}: {
  certificate: Certificate;
  index: number;
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <motion.div
        className="relative perspective-1000"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="bg-primary p-6 rounded-lg shadow-lg relative overflow-hidden group transform-gpu hover:scale-105 transition-transform duration-300 cursor-pointer"
          whileHover={{ rotateY: 5, rotateX: 5 }}
          style={{ transformStyle: "preserve-3d" }}
          onClick={() => setShowPreview(true)}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${certificate.color} opacity-50`}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-10">
            {/* Organization Badge */}
            <motion.div
              className="absolute -top-2 -right-2 bg-secondary/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-secondary border border-secondary/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {certificate.organization}
            </motion.div>

            <div className="flex items-start gap-4 mb-4">
              <motion.div
                className="text-3xl text-secondary transform-gpu p-2 bg-primary-lighter/30 rounded-lg backdrop-blur-sm"
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <certificate.icon />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {certificate.title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  {certificate.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <motion.div
                className="flex items-center text-text-secondary bg-primary-lighter/50 px-3 py-1 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <FaCalendarAlt className="w-4 h-4 mr-2 text-secondary" />
                <span>{certificate.date}</span>
              </motion.div>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPreview(true);
                }}
                className="flex items-center text-secondary hover:text-secondary-light transition-colors bg-primary-lighter/30 px-3 py-1 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                <span>View Certificate</span>
              </motion.button>
            </div>
          </div>

          {/* Preview Hint Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              className="text-white text-lg font-medium flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              <span>View Certificate</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Certificate Preview Modal */}
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full bg-primary-lighter rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Certificate Preview */}
            <div className="relative aspect-[1.4/1] w-full bg-primary-dark/50">
              <img
                src={certificate.preview}
                alt={`${certificate.title} Certificate`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error(
                    "Error loading certificate preview:",
                    certificate.preview,
                  );
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Certificate Info */}
            <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <h3 className="text-xl font-bold text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-white/80">
                {certificate.organization} • {certificate.date}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section
      id="certificates"
      className="section bg-primary-light py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-text-primary relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <AnimatePresence>
            {visibleCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CertificateCard certificate={certificate} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {certificates.length > 3 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 bg-primary-lighter/20 hover:bg-primary-lighter/30 text-white px-6 py-3 rounded-full border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showAll ? "Show Less" : "View More"}</span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-secondary group-hover:text-secondary-light" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* Background Elements */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl transform-gpu"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl transform-gpu"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  );
};

export default Certificates;

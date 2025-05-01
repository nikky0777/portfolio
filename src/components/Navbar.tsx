import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  // Optimized scroll handler with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);
      }, 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const navLinks = [
    { title: 'About', to: 'hero' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Education', to: 'education' },
    { title: 'Certificates', to: 'certificates' },
    { title: 'Achievements', to: 'achievements' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-primary-lighter/40 backdrop-blur-xl border-b border-secondary/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent-purple/5 to-secondary-light/5" />
        <motion.div
          className="absolute -inset-[100%] bg-[radial-gradient(circle,rgba(120,119,198,0.1)1px,transparent_1px)] [background-size:24px_24px]"
          animate={{
            backgroundPosition: ['0px 0px', '24px 24px'],
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced glow effect */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-secondary-lighter cursor-pointer flex items-center gap-2 hover:text-secondary transition-colors duration-200 relative group"
            >
              <motion.div
                className="absolute -inset-3 bg-gradient-to-r from-secondary via-accent-purple to-secondary-light opacity-25 blur-lg group-hover:opacity-50 transition duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <svg
                className="h-8 w-8 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary-light"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary-dark"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation with cyber effect */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveLink(link.to)}
                  className="relative group px-4 py-2"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent-purple/20 to-secondary-light/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                      activeLink === link.to ? 'opacity-100' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-lg ${
                      activeLink === link.to 
                        ? 'bg-gradient-to-r from-secondary via-accent-purple to-secondary-light opacity-10'
                        : ''
                    }`}
                  />
                  <div className="relative z-10">
                    <span className={`text-sm font-medium transition-all duration-300 ${
                      activeLink === link.to
                        ? 'text-secondary-lighter'
                        : 'text-text-primary group-hover:text-secondary-lighter'
                    }`}>
                      {link.title}
                    </span>
                    {activeLink === link.to && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent-purple to-secondary-light"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-accent-purple/20 to-secondary-light/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button with cyber effect */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group p-2 rounded-lg text-text-primary hover:text-secondary-lighter focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent-purple/20 to-secondary-light/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                animate={{
                  opacity: isOpen ? 0.2 : 0
                }}
              />
              <span className="sr-only">Open main menu</span>
              <div className="relative">
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu with cyber effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative md:hidden border-t border-secondary/10"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-primary-lighter/40 to-primary/40 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <div className="px-2 pt-2 pb-3 space-y-1 relative">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="relative group block"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-accent-purple/10 to-secondary-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                  <span className="block px-3 py-2 rounded-md text-base font-medium text-text-primary group-hover:text-secondary-lighter relative z-10">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 
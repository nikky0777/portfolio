import React, { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Training from './components/Training'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import AnimatedFigures from './components/AnimatedFigures'
import Contact from './components/Contact'

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <ThemeToggle />
      <AnimatedFigures />
      <Hero />
      <Skills />
      <Training />
      <Projects />
      <Education />
      <Certificates />
      <Achievements />
      <Contact />
    </div>
  )
}

const App: React.FC = () => {
  // Initialize theme based on system preference
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App 
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Illustrations from './Illustrations'
import { useTheme } from '../context/ThemeContext'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface Project {
  title: string
  description: string
  date: string
  details: string[]
  tools: string[]
  github?: string
  demo?: string
  image: string
  technologies: string[]
  githubLink: string
  liveLink: string
}

const projects: Project[] = [
  {
    title: "Movie Review Sentiment Analysis",
    description: "A machine learning model that analyzes movie reviews and predicts sentiment (positive/negative) using Natural Language Processing.",
    date: "Mar 2024",
    details: [
      "Developed using Python and NLTK for text processing",
      "Implemented machine learning models for sentiment classification",
      "Achieved high accuracy in sentiment prediction"
    ],
    tools: ["Python", "NLTK", "Scikit-learn", "TensorFlow", "Pandas"],
    github: "https://github.com/yourusername/movie-sentiment",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1074&auto=format&fit=crop",
    technologies: ["Python", "NLTK", "Scikit-learn", "TensorFlow", "Pandas"],
    githubLink: "https://github.com/garvkapoor7/MovieReviewSentimentAnalysisbygarv/tree/main/movie_sentiment_analysis",
    liveLink: "https://movie-sentiment-analysis-bygarv.netlify.app/"
  },
  {
    title: "Adaptica - Adaptive Learning Platform",
    description: "A personalized learning platform that adapts to individual learning styles and pace.",
    date: "Jan 2024 - Present",
    details: [
      "Developed an adaptive learning system using React and Node.js",
      "Implemented ML algorithms for personalized content delivery",
      "Integrated real-time analytics and progress tracking"
    ],
    tools: ["React", "Node.js", "TypeScript", "TensorFlow.js", "MongoDB"],
    github: "https://github.com/yourusername/adaptica",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1170&auto=format&fit=crop",
    technologies: ["React", "Node.js", "TypeScript", "TensorFlow.js", "MongoDB"],
    githubLink: "https://github.com/garvkapoor7/Adaptica_project",
    liveLink: "https://adaptica.netlify.app/"
  },
  {
    title: "Credit Card Fraud Detection Model",
    description: "Machine learning model to detect fraudulent credit card transactions",
    date: "Dec 2023",
    details: [
      "Built and trained a fraud detection model using Python",
      "Achieved 99.2% accuracy on test data",
      "Implemented feature engineering and data preprocessing"
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Jupyter"],
    github: "https://github.com/garvkapoor7/Credit-Card-Fraud-Detection",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format&fit=crop",
    technologies: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Jupyter"],
    githubLink: "https://github.com/garvkapoor7/CreDIT-card-Fraud-detection",
    liveLink: "https://fraud-detection.vercel.app"
  },
  // {
  //   title: "AI-Powered Task Manager",
  //   description: "A smart task management application that uses AI to prioritize and categorize tasks, featuring real-time updates and collaborative features.",
  //   date: "Jan 2024 - Present",
  //   details: [
  //     "Developed using React, Node.js, and MongoDB",
  //     "Integrated OpenAI API for AI-powered task prioritization",
  //     "Implemented real-time updates and collaborative features"
  //   ],
  //   tools: ["React", "Node.js", "MongoDB", "OpenAI API", "Socket.io", "TailwindCSS"],
  //   image: "/projects/task-manager.png",
  //   technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Socket.io", "TailwindCSS"],
  //   githubLink: "https://github.com/yourusername/ai-task-manager",
  //   liveLink: "https://ai-task-manager.vercel.app"
  // },
  // {
  //   title: "E-Commerce Platform",
  //   description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.",
  //   date: "Feb 2024 - Present",
  //   details: [
  //     "Developed using Next.js and TypeScript",
  //     "Integrated Stripe for payment processing",
  //     "Implemented PostgreSQL database and Redis caching"
  //   ],
  //   tools: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
  //   image: "/projects/ecommerce.png",
  //   technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
  //   githubLink: "https://github.com/yourusername/ecommerce-platform",
  //   liveLink: "https://ecommerce-platform.vercel.app"
  // },
  // {
  //   title: "Social Media Dashboard",
  //   description: "A comprehensive dashboard for social media management with analytics, scheduling, and content management features.",
  //   date: "Mar 2024 - Present",
  //   details: [
  //     "Developed using Vue.js and Express",
  //     "Integrated GraphQL for data querying",
  //     "Implemented Docker for containerization and Jest for testing"
  //   ],
  //   tools: ["Vue.js", "Express", "GraphQL", "MongoDB", "Docker", "Jest"],
  //   image: "/projects/social-dashboard.png",
  //   technologies: ["Vue.js", "Express", "GraphQL", "MongoDB", "Docker", "Jest"],
  //   githubLink: "https://github.com/yourusername/social-dashboard",
  //   liveLink: "https://social-dashboard.vercel.app"
  // }
]

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className="section py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark opacity-90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
            <span className="text-secondary-light">.</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Here are some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-xl bg-primary-lighter/20 backdrop-blur-sm border border-secondary/10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Technology Tags Overlay */}
                  <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-wrap gap-2 p-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm bg-secondary/20 text-secondary-light border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-secondary transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-secondary transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
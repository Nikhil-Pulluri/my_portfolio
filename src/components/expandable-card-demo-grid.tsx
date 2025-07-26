'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// Project metadata interface
interface ProjectCard {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  imageUrl: string
  projectUrl: string
  githubUrl?: string
  overview: string
  features: string[]
  duration: string
  status: 'completed' | 'in-progress' | 'planned'
}

export default function ExpandableCard() {
  const [active, setActive] = useState<ProjectCard | null>(null)
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(null)
      }
    }

    if (active) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setActive(null)
    }
  }

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', handleOutsideClick)
      return () => document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [active])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden  ">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading with Background */}
        <div className="mb-16 text-left">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl shadow-2xl mb-6 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-2 tracking-tight drop-shadow-lg">WORKS</h1>
          </div>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">Showcase of my creative projects, technical solutions, and innovative implementations</p>
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {active && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-md h-full w-full z-40" />}
        </AnimatePresence>

        {/* Modal Content */}
        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 grid place-items-center z-50 p-4">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                className="absolute top-6 right-6 z-10 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-full h-12 w-12 shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-200"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>

              <motion.div
                layoutId={`card-${active.id}-${id}`}
                ref={ref}
                className="w-full max-w-2xl mx-4 sm:mx-0 max-h-[90vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700"
              >
                {/* Modal Image */}
                <motion.div layoutId={`image-${active.id}-${id}`} className="relative">
                  <img src={active.imageUrl} alt={active.title} className="w-full h-48 sm:h-64 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        active.status === 'completed' ? 'bg-green-100 text-green-800' : active.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {active.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </motion.div>

                {/* Modal Content */}
                <div className="flex-1 overflow-hidden">
                  {/* Header */}
                  <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="space-y-4">
                      <div>
                        <motion.h3 layoutId={`title-${active.id}-${id}`} className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                          {active.title}
                        </motion.h3>
                        <motion.p layoutId={`description-${active.id}-${id}`} className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-3">
                          {active.description}
                        </motion.p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {active.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs sm:text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                          Duration: {active.duration} • Category: {active.category}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <motion.a
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          href={active.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                        >
                          View Project
                        </motion.a>
                        {active.githubUrl && (
                          <motion.a
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            href={active.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-semibold rounded-xl bg-slate-800 hover:bg-slate-900 text-white transition-colors duration-200 shadow-lg text-center"
                          >
                            GitHub
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 sm:p-6 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
                    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Overview</h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">{active.overview}</p>
                      </div>

                      {active.features.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {active.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectCards.map((card) => (
            <motion.div
              layoutId={`card-${card.id}-${id}`}
              key={card.id}
              onClick={() => setActive(card)}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                {/* Card Image */}
                <motion.div layoutId={`image-${card.id}-${id}`} className="relative overflow-hidden">
                  <img src={card.imageUrl} alt={card.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        card.status === 'completed' ? 'bg-green-500 text-white' : card.status === 'in-progress' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'
                      }`}
                    >
                      {card.status === 'in-progress' ? 'In Progress' : card.status}
                    </span>
                  </div>
                </motion.div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <motion.h3 layoutId={`title-${card.id}-${id}`} className="font-bold text-xl text-slate-900 dark:text-white mb-2 line-clamp-2">
                      {card.title}
                    </motion.h3>
                    <motion.p layoutId={`description-${card.id}-${id}`} className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                      {card.description}
                    </motion.p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {card.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {card.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs">+{card.technologies.length - 3}</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {card.category} • {card.duration}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-slate-700"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </motion.svg>
  )
}

// Project Cards Data - Easy to add more projects
const projectCards: ProjectCard[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern payment integration and real-time inventory management',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    imageUrl: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
    projectUrl: 'https://ui.aceternity.com/templates',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    overview:
      'A comprehensive e-commerce platform built with modern technologies, featuring user authentication, product management, shopping cart functionality, secure payment processing, and real-time order tracking. The platform includes an admin dashboard for inventory management and analytics.',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment integration with Stripe',
      'Real-time order tracking',
      'Admin dashboard for inventory management',
      'Responsive design for all devices',
    ],
    duration: '3 months',
    status: 'completed',
  },
  {
    id: '2',
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with smart responses and conversation analytics',
    category: 'AI/ML',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'WebSocket', 'PostgreSQL'],
    imageUrl: 'https://assets.aceternity.com/demos/babbu-maan.jpeg',
    projectUrl: 'https://ui.aceternity.com/templates',
    githubUrl: 'https://github.com/yourusername/ai-chat',
    overview:
      'An intelligent chat application that leverages AI to provide smart responses, conversation summaries, and user behavior analytics. Built with real-time capabilities and scalable architecture to handle multiple concurrent users.',
    features: [
      'Real-time messaging with WebSocket',
      'AI-powered smart responses',
      'Conversation analytics and insights',
      'Multi-room chat support',
      'Message encryption for security',
      'File sharing capabilities',
      'Mobile-first responsive design',
    ],
    duration: '2 months',
    status: 'in-progress',
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and advanced financial features',
    category: 'Mobile Development',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometrics', 'Redux'],
    imageUrl: 'https://assets.aceternity.com/demos/metallica.jpeg',
    projectUrl: 'https://ui.aceternity.com/templates',
    overview:
      'A secure and user-friendly mobile banking application that provides comprehensive financial services including account management, transfers, bill payments, and investment tracking with enterprise-level security features.',
    features: [
      'Biometric authentication (fingerprint/face)',
      'Account balance and transaction history',
      'Money transfers and bill payments',
      'Investment portfolio tracking',
      'Spending analytics and budgeting',
      'Push notifications for transactions',
      'Offline mode for basic features',
    ],
    duration: '4 months',
    status: 'completed',
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for complex data visualization with real-time updates and custom charts',
    category: 'Data Science',
    technologies: ['D3.js', 'React', 'Python', 'Pandas', 'WebSocket'],
    imageUrl: 'https://assets.aceternity.com/demos/aap-ka-suroor.jpeg',
    projectUrl: 'https://ui.aceternity.com/templates',
    githubUrl: 'https://github.com/yourusername/data-dashboard',
    overview:
      'A powerful data visualization dashboard that transforms complex datasets into interactive and insightful charts and graphs. Features real-time data updates, customizable widgets, and export capabilities for business intelligence.',
    features: [
      'Interactive charts and graphs',
      'Real-time data streaming',
      'Customizable dashboard widgets',
      'Data filtering and drill-down',
      'Export capabilities (PDF, Excel)',
      'Multi-dataset support',
      'Responsive design for all devices',
    ],
    duration: '6 weeks',
    status: 'planned',
  },
]

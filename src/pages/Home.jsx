import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import IconButton from '../components/IconButton'
import TypingAnimation from '../components/TypingAnimation'
import ContactModal from '../components/ContactModal'
import { projects } from '../data/projects'
import './Home.css'

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const iconButtons = [
    { icon: '🩺', label: 'About Me', path: '/about', delay: 0.2 },
    { icon: '💻', label: 'Projects', path: '/projects', delay: 0.3 },
    { icon: '✉️', label: 'Contact', onClick: () => setIsContactOpen(true), delay: 0.4 },
    { icon: '📄', label: 'Resume', path: '/resume', delay: 0.5 },
    { icon: '⚽', label: 'Charities', path: '/charity', delay: 0.6 }
  ]

  const featuredProjects = projects.featured.slice(0, 3)

  return (
    <div className="home-page">
      <NavBar />
      
      {/* Top Section - Notebook Background */}
      <section className="home-hero">
        <div className="notebook-background" />
        
        {/* Animated Name */}
        <motion.h1 
          className="home-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <AnimatedName text="Hala Alzureiqi" />
        </motion.h1>

        {/* Click on Object Text */}
        <motion.div
          className="click-prompt"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span 
            className="click-object-text"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            (Click on an Object)
          </span>
          {isNavExpanded && (
            <motion.div
              className="mini-navbar"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {iconButtons.map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => {
                    setIsNavExpanded(false)
                    if (btn.onClick) btn.onClick()
                  }}
                  className="mini-nav-item"
                >
                  {btn.icon} {btn.label}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Icon Buttons Grid */}
        <div className="icon-buttons-grid">
          {iconButtons.map((btn, index) => (
            <IconButton
              key={btn.label}
              icon={btn.icon}
              label={btn.label}
              path={btn.path}
              onClick={btn.onClick}
              delay={btn.delay}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="decor-element decor-1">🧪</div>
          <div className="decor-element decor-2">📊</div>
          <div className="decor-element decor-3">🔬</div>
        </div>
      </section>

      {/* Purple Divider */}
      <div className="purple-divider">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,0 C300,80 600,20 900,50 C1000,60 1100,40 1200,60 L1200,100 L0,100 Z"
            fill="#9B7EDE"
          />
        </svg>
      </div>

      {/* Bottom Section - Purple Background */}
      <section className="home-bottom">
        <div className="bottom-content">
          <motion.h2
            className="greeting"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Hey, I'm Hala!
          </motion.h2>

          <TypingAnimation />

          <div className="flower-decorations">
            <div className="flower flower-1">🌸</div>
            <div className="flower flower-2">🌸</div>
            <div className="flower flower-3">🌸</div>
          </div>
        </div>

        {/* Featured Work Section */}
        <motion.div
          className="featured-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="featured-title">Featured Work</h3>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h4 className="featured-card-title">{project.title}</h4>
                <p className="featured-card-desc">{project.description}</p>
                <div className="featured-tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

// Animated Name Component (like tul8te.com)
const AnimatedName = ({ text }) => {
  return (
    <span className="animated-name">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="name-char"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeInOut'
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default Home

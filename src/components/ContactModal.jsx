import { motion, AnimatePresence } from 'framer-motion'
import { contactInfo } from '../data/contact'
import './ContactModal.css'

const ContactModal = ({ isOpen, onClose }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`
  }

  const handleResumeClick = () => {
    window.open(contactInfo.resumeUrl, '_blank')
  }

  const handleGithubClick = () => {
    window.open(contactInfo.github, '_blank')
  }

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="contact-modal"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              ×
            </button>
            <h2 id="modal-title" className="modal-title">Connect with Me</h2>
            <div className="contact-icons-grid">
              <motion.button
                className="contact-icon-button github"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGithubClick}
                aria-label="GitHub"
              >
                <span className="contact-icon">🐙</span>
                <span className="contact-icon-label">GitHub</span>
              </motion.button>

              <motion.button
                className="contact-icon-button linkedin"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLinkedInClick}
                aria-label="LinkedIn"
              >
                <span className="contact-icon">💼</span>
                <span className="contact-icon-label">LinkedIn</span>
              </motion.button>

              <motion.button
                className="contact-icon-button email"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailClick}
                aria-label="Email"
              >
                <span className="contact-icon">✉️</span>
                <span className="contact-icon-label">Email</span>
              </motion.button>

              <motion.button
                className="contact-icon-button resume"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeClick}
                aria-label="Resume"
              >
                <span className="contact-icon">📄</span>
                <span className="contact-icon-label">Resume</span>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal

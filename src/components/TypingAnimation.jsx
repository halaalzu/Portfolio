import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { passions } from '../data/passions'
import './TypingAnimation.css'

const TypingAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPassion = passions[currentIndex]
    let timeout

    if (!isDeleting && displayText.length < currentPassion.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentPassion.slice(0, displayText.length + 1))
      }, 100)
    } else if (!isDeleting && displayText.length === currentPassion.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentPassion.slice(0, displayText.length - 1))
      }, 50)
    } else if (isDeleting && displayText.length === 0) {
      // Move to next passion
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % passions.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  return (
    <div className="typing-animation">
      <span className="typing-prefix">I'm passionate about </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {displayText}
          <motion.span
            className="typing-cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export default TypingAnimation

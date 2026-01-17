import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './IconButton.css'

const IconButton = ({ icon, label, path, onClick, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (path) {
      navigate(path)
    }
  }

  return (
    <motion.div
      className="icon-button-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: [0, -3, 3, -3, 3, 0]
      }}
      transition={{ 
        delay, 
        duration: 0.8, 
        type: 'spring', 
        stiffness: 200,
        rotate: { delay: delay + 1, duration: 0.6, repeat: 2 }
      }}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        className={`icon-button ${label.toLowerCase().replace(' ', '-')}`}
        animate={{
          rotate: isHovered ? [0, -5, 5, -5, 5, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          repeat: isHovered ? 1 : 0,
        }}
      >
        <span className="icon-emoji">{icon}</span>
        {isHovered && (
          <motion.span
            className="icon-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  )
}

export default IconButton

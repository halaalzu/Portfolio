import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './NavBar.css'

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/about', label: 'About Me', icon: '🩺' },
    { path: '/projects', label: 'Projects', icon: '💻' },
    { path: '/resume', label: 'Resume', icon: '📄' },
    { path: '/charity', label: 'Charities', icon: '⚽' }
  ]

  return (
    <motion.nav
      className={`nav-bar ${isHome ? 'nav-home' : ''} ${isScrolled ? 'nav-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => !isHome && setIsExpanded(true)}
      onMouseLeave={() => !isHome && setIsExpanded(false)}
    >
      <Link to="/" className="nav-home-link">
        <span className="nav-arabic">هلا</span>
      </Link>
      
      {!isHome && (
        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              className="nav-items"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </motion.nav>
  )
}

export default NavBar

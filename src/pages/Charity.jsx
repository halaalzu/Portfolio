import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { charities } from '../data/charities'
import './Charity.css'

const Charity = () => {
  return (
    <div className="charity-page">
      <NavBar />
      <div className="notebook-background" />

      <motion.div
        className="charity-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Donate!
        </motion.h1>

        <motion.p
          className="charity-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          These are the organizations and causes I'm passionate about supporting. 
          Each charity works to make a meaningful difference in communities and lives around the world.
        </motion.p>

        <div className="Donate-grid charity-grid-3">
          {charities.map((charity, index) => (
            <motion.div
              key={charity.id}
              className="charity-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {charity.image ? (
                <div className="charity-image">
                  <img src={charity.image} alt={charity.name} />
                </div>
              ) : (
                <div className="charity-placeholder">
                  <span className="placeholder-icon">❤️</span>
                </div>
              )}
              
              <div className="charity-content">
                <h3 className="charity-name">{charity.name}</h3>
                <p className="charity-description">{charity.description}</p>
                
                {charity.link && (
                  <motion.a
                    href={charity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="charity-link"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More →
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {charities.length === 0 && (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="empty-icon">❤️</span>
            <p>Check back soon for charities I'm supporting!</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Charity

import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { projects } from '../data/projects'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-page">
      <NavBar />
      <div className="notebook-background" />
      
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Projects
        </motion.h1>

        {/* In Progress Section */}
        <motion.section
          className="projects-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-icon">🚧</span>
            <h2 className="section-title">In Progress</h2>
          </div>
          <div className="projects-grid">
            {projects.inProgress.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="project-status in-progress">{project.status}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Completed Section */}
        <motion.section
          className="projects-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-icon">✅</span>
            <h2 className="section-title">Completed</h2>
          </div>
          <div className="projects-grid">
            {projects.completed.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="project-status completed">{project.status}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="decor decor-1">💻</div>
        <div className="decor decor-2">⚡</div>
        <div className="decor decor-3">🎯</div>
      </div>
    </div>
  )
}

export default Projects

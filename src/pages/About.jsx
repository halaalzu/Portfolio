import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <NavBar />
      <div className="notebook-background" />
      
      <motion.div
        className="about-container"
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
          About Me
        </motion.h1>

        <div className="about-content">
          {/* Personal Blurb */}
          <motion.section
            className="about-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <span className="section-icon">👋</span>
              <h2 className="section-title">Hey, I'm Hala!</h2>
            </div>
            <div className="section-content">
              <p>
                I'm passionate about biomedical design, healthcare innovation, and making a positive impact in underprivileged communities. 
                Through my work and research, I strive to bridge the gap between technology and healthcare to improve patient outcomes.
              </p>
              <p>
                When I'm not working on medical devices or conducting research, you'll find me reading, exploring new ideas, 
                and supporting causes that matter. I believe in the power of interdisciplinary collaboration and continuous learning.
              </p>
            </div>
          </motion.section>

          {/* Core Competencies */}
          <motion.section
            className="about-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-header">
              <span className="section-icon">🔬</span>
              <h2 className="section-title">Core Competencies</h2>
            </div>
            <div className="section-content">
              <div className="competencies-grid">
                <div className="competency-card">
                  <h3>Biomedical Design</h3>
                  <p>Innovative medical device design and development</p>
                </div>
                <div className="competency-card">
                  <h3>Research</h3>
                  <p>Medical research and data analysis</p>
                </div>
                <div className="competency-card">
                  <h3>Healthcare Innovation</h3>
                  <p>Developing accessible healthcare solutions</p>
                </div>
                <div className="competency-card">
                  <h3>Community Impact</h3>
                  <p>Supporting underserved communities</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="section-header">
              <span className="section-icon">⚡</span>
              <h2 className="section-title">Skills</h2>
            </div>
            <div className="section-content">
              <div className="skills-list">
                <div className="skill-category">
                  <h4>Technical</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">3D Modeling</span>
                    <span className="skill-tag">Medical Research</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">Data Analysis</span>
                    <span className="skill-tag">Project Management</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="decor decor-1">🧪</div>
        <div className="decor decor-2">📊</div>
        <div className="decor decor-3">💊</div>
      </div>
    </div>
  )
}

export default About

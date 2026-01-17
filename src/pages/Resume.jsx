import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { workExperience, volunteerExperience, education, technicalSkills, certifications } from '../data/experience'
import { contactInfo } from '../data/contact'
import './Resume.css'

const Resume = () => {
  const handleDownload = () => {
    window.open(contactInfo.resumeUrl, '_blank')
  }

  return (
    <div className="resume-page">
      <NavBar />
      <div className="notebook-background" />
      
      <motion.div
        className="resume-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="page-title">Resume</h1>
          <motion.button
            className="download-btn"
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Download Resume
          </motion.button>
        </motion.div>

        {/* Education */}
        <motion.section
          className="resume-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-icon">🎓</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="resume-content">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="resume-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="item-header">
                  <h3 className="item-title">{edu.degree}</h3>
                  <span className="item-date">{edu.date}</span>
                </div>
                <div className="item-subtitle">{edu.institution}</div>
                <div className="item-location">{edu.location}</div>
                {edu.details && <div className="item-details">{edu.details}</div>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          className="resume-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-icon">💼</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="resume-content">
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="resume-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="item-header">
                  <h3 className="item-title">{exp.title}</h3>
                  <span className="item-date">{exp.date}</span>
                </div>
                <div className="item-subtitle">{exp.company}</div>
                <div className="item-location">{exp.location}</div>
                <p className="item-description">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="item-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Volunteer Experience */}
        {volunteerExperience && volunteerExperience.length > 0 && (
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <span className="section-icon">❤️</span>
              <h2 className="section-title">Volunteer Experience</h2>
            </div>
            <div className="resume-content">
              {volunteerExperience.map((vol, index) => (
                <motion.div
                  key={vol.id}
                  className="resume-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="item-header">
                    <h3 className="item-title">{vol.title}</h3>
                    <span className="item-date">{vol.date}</span>
                  </div>
                  <div className="item-subtitle">{vol.organization}</div>
                  <div className="item-location">{vol.location}</div>
                  <p className="item-description">{vol.description}</p>
                  {vol.achievements && vol.achievements.length > 0 && (
                    <ul className="item-list">
                      {vol.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Technical Skills */}
        <motion.section
          className="resume-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-icon">⚡</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="resume-content">
            <div className="skills-grid">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={index}
                  className="skill-category-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="skill-category-title">{category.category}</h4>
                  <div className="skill-tags">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <span className="section-icon">🏆</span>
              <h2 className="section-title">Certifications</h2>
            </div>
            <div className="resume-content">
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    className="certification-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}
      </motion.div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="decor decor-1">📄</div>
        <div className="decor decor-2">📋</div>
        <div className="decor decor-3">📝</div>
      </div>
    </div>
  )
}

export default Resume

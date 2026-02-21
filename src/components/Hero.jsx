import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>
            Samson Ogundero Tobiloba
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Front End Developer
          </motion.p>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I create beautiful, responsive, and performant front-end applications that users love. Specializing in React,
            I build engaging interfaces for AI platforms, fintech solutions, and high-traffic marketplaces. From pixel-perfect designs
            to interactive real-time experiences, I craft interfaces that solve real problems.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects <FiArrowRight />
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Hire Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="gradient-circle gradient-1"></div>
        <div className="gradient-circle gradient-2"></div>
        <div className="gradient-circle gradient-3"></div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { AiOutlineDownload } from 'react-icons/ai'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Samson Ogundero</h1>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => scrollToSection('about')}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')}>
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')}>
              Services
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
          <li>
            <a 
              href="/Samson_Ogundero_Resume.html" 
              download
              className="resume-btn"
              target="_blank"
            >
              <AiOutlineDownload /> Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

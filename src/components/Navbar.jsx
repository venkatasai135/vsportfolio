import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Check if the current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="navbar-logo">
            <span>Ladi Venkata Sai</span>
          </Link>
        </motion.div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/skills" 
              className={`nav-link ${isActive('/skills') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={`nav-link ${isActive('/projects') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/resume" 
              className={`nav-link ${isActive('/resume') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/education" 
              className={`nav-link ${isActive('/education') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/certifications" 
              className={`nav-link ${isActive('/certifications') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
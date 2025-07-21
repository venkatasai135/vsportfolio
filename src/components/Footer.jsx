import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const linkVariants = {
    hover: { scale: 1.1, color: '#304FFE' }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="footer-content" variants={containerVariants}>
          <motion.div className="footer-logo" variants={itemVariants}>
            <h3>Ladi Venkata Sai</h3>
            <p>Computer Science Student & Web Developer</p>
          </motion.div>
          
          <motion.div className="footer-links" variants={itemVariants}>
            <motion.h4 variants={itemVariants}>Quick Links</motion.h4>
            <motion.ul variants={containerVariants}>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/">Home</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/about">About</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/skills">Skills</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/projects">Projects</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/resume">Resume</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/education">Education</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/certifications">Certifications</Link>
                </motion.div>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.div whileHover="hover" variants={linkVariants}>
                  <Link to="/contact">Contact</Link>
                </motion.div>
              </motion.li>
            </motion.ul>
          </motion.div>
          
          <motion.div className="footer-contact" variants={itemVariants}>
            <motion.h4 variants={itemVariants}>Contact</motion.h4>
            <motion.p variants={itemVariants}>
              <motion.a 
                href="mailto:ladivenkatasai@gmail.com"
                whileHover="hover"
                variants={linkVariants}
              >
                <FaEnvelope /> ladi.venkata.sai@example.com
              </motion.a>
            </motion.p>
            <motion.div className="footer-social" variants={containerVariants}>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <motion.p variants={itemVariants}>&copy; {new Date().getFullYear()} Ladi Venkata Sai. All rights reserved.</motion.p>
          <motion.button 
            className="scroll-to-top" 
            onClick={scrollToTop} 
            aria-label="Scroll to top"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
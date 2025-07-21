import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DesktopHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Add this to your decorative shapes for more dynamic animations
  const decorativeShapes = [
    { top: '15%', left: '10%', size: '60px', delay: 0.2, duration: 20, rotate: 360 },
    { top: '25%', right: '15%', size: '40px', delay: 0.5, duration: 15, rotate: -360 },
    { bottom: '20%', left: '20%', size: '50px', delay: 0.8, duration: 18, rotate: 360 },
    { bottom: '30%', right: '10%', size: '70px', delay: 0.3, duration: 22, rotate: -360 }
  ];
  
  // Then in your render function:
  {decorativeShapes.map((shape, index) => (
    <motion.div
      key={index}
      className="decorative-shape"
      style={{
        top: shape.top,
        left: shape.left,
        right: shape.right,
        bottom: shape.bottom,
        width: shape.size,
        height: shape.size
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.2, 0.4, 0.2], 
        scale: [1, 1.1, 1],
        rotate: shape.rotate
      }}
      transition={{ 
        delay: shape.delay, 
        duration: shape.duration, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  ))}

  return (
    <section className="desktop-hero">
      {/* Animated decorative elements */}
      {decorativeShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="decorative-shape"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            width: shape.size,
            height: shape.size
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: 1,
            rotate: 360
          }}
          transition={{ 
            delay: shape.delay, 
            duration: shape.duration, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-main-content">
            <div className="hero-text-content">
              <motion.div variants={itemVariants} className="hero-greeting">
                Hey, I am
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="hero-name">
                Ladi Venkata Sai
              </motion.h1>
              
              <motion.p variants={itemVariants} className="hero-tagline">
                Web Developer & UI/UX Enthusiast
              </motion.p>
              
              <motion.p variants={itemVariants} className="hero-bio">
                I create modern web experiences with a focus on clean code, intuitive design, and exceptional user experience.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="hero-buttons"
              >
                <Link to="/contact" className="btn btn-primary hire-me-btn">
                  Hire me!
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  View My Work
                </Link>
              </motion.div>
            </div>
            
            {/* Add profile container back */}
            <motion.div 
              variants={itemVariants}
              className="profile-container"
            >
              <div className="profile-image-wrapper">
                <div className="profile-image"></div>
                <div className="rotating-text-container">
                  <div className="rotating-text">
                    {/* Add rotating text spans - these will rotate around the profile image */}
                    <span style={{ transform: 'rotate(0deg) translateX(110px)' }}>Web</span>
                    <span style={{ transform: 'rotate(45deg) translateX(110px)' }}>Developer</span>
                    <span style={{ transform: 'rotate(90deg) translateX(110px)' }}>UI/UX</span>
                    <span style={{ transform: 'rotate(135deg) translateX(110px)' }}>Designer</span>
                    <span style={{ transform: 'rotate(180deg) translateX(110px)' }}>React</span>
                    <span style={{ transform: 'rotate(225deg) translateX(110px)' }}>JavaScript</span>
                    <span style={{ transform: 'rotate(270deg) translateX(110px)' }}>CSS</span>
                    <span style={{ transform: 'rotate(315deg) translateX(110px)' }}>HTML</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="hero-social"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesktopHero;
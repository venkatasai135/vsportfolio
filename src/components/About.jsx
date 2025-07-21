import { FaUserGraduate, FaLaptopCode, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      className="about" 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
        <motion.h2 className="section-title" variants={itemVariants}>About Me</motion.h2>
        
        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              I'm Ladi Venkata Sai, a passionate web developer and UI/UX enthusiast with a strong foundation in computer science. I graduated from Vellore Institute of Technology with a degree in Computer Science and Engineering.
            </motion.p>
            <motion.p variants={itemVariants}>
              I specialize in front-end development with React, but I'm also comfortable working with back-end technologies to build full-stack applications. I believe in the power of clean, efficient code and thoughtful design to create digital experiences that are both functional and delightful to use.
            </motion.p>
          </motion.div>
          
          <motion.div className="about-cards" variants={containerVariants}>
            <motion.div 
              className="about-card" 
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
            >
              <div className="card-icon">
                <FaUserGraduate />
              </div>
              <h3>Education</h3>
              <p>B.Tech in Computer Science from Vellore Institute of Technology</p>
            </motion.div>
            
            <motion.div 
              className="about-card" 
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
            >
              <div className="card-icon">
                <FaLaptopCode />
              </div>
              <h3>Development</h3>
              <p>Full-stack web development with a focus on modern JavaScript frameworks</p>
            </motion.div>
            
            <motion.div 
              className="about-card" 
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
            >
              <div className="card-icon">
                <FaPalette />
              </div>
              <h3>Design</h3>
              <p>UI/UX design with a focus on creating intuitive and engaging user experiences</p>
            </motion.div>
          </motion.div>
        </div>
    </motion.section>
  );
};

export default About;
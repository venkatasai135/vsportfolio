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
            I'm Ladi Venkata Sai, a web developer and UI/UX enthusiast with a strong background in computer science. I studied at KL University, Vijayawada.</motion.p>
            <motion.p variants={itemVariants}>
            My focus is on front-end development using React, but I'm comfortable building full-stack applications. I believe in crafting clean, efficient code and thoughtful designs that create seamless and delightful digital experiences.            </motion.p>
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
              <p>B.Tech in Computer Science from KL University</p>
            </motion.div>
            
            <motion.div 
              className="about-card" 
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 8px 15px rgba(0,0,0,0.1)" }}
            >
              <div className="card-icon">
                <FaLaptopCode />
              </div>
              <h3>Web Development</h3>
              <p>Full-stack development, efficient and user-focused</p>
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
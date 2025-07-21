import { FaCode, FaDatabase, FaLayerGroup, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
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
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: ['C', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaLayerGroup />,
      skills: ['ReactJS', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'UI/UX Tools',
      icon: <FaPalette />,
      skills: ['Figma', 'Canva']
    }
  ];

  return (
    <motion.section 
      className="skills" 
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
        <motion.h2 className="section-title" variants={itemVariants}>Skills</motion.h2>
        <motion.p className="section-description" variants={itemVariants}>
          Technologies and tools I work with to bring ideas to life.
        </motion.p>
        
        <motion.div className="skills-container" variants={itemVariants}>
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-category" 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -3, boxShadow: "0 8px 15px rgba(0,0,0,0.08)" }}
            >
              <motion.div className="category-header" variants={itemVariants}>
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </motion.div>
              <motion.div className="skill-list" variants={itemVariants}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    className="skill-item" 
                    key={skillIndex}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(48, 79, 254, 0.15)", color: "#304FFE" }}
                    variants={itemVariants}
                  >
                    <span>{skill}</span>
                    <div className="skill-progress-container">
                      <motion.div 
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 - skillIndex * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
    </motion.section>
  );
};

export default Skills;
import { FaDownload, FaEye, FaBriefcase, FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume = () => {
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
  
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
    },
    tap: { 
      scale: 0.95 
    }
  };
  // In a real implementation, you would have an actual PDF file path
  const resumePdfPath = '/resume.pdf';

  // Work experience data
  const workExperience = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      period: "May 2023 - August 2023",
      description: "Developed responsive web applications using React.js and implemented UI components following design specifications. Collaborated with senior developers to optimize website performance and fix bugs.",
      skills: ["React.js", "JavaScript", "CSS", "Git"]
    },
    {
      title: "Web Development Project",
      company: "University Project",
      period: "January 2023 - April 2023",
      description: "Led a team of 4 students to develop a full-stack web application for event management. Implemented the frontend using React and integrated it with a Node.js backend.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      title: "UI/UX Design Volunteer",
      company: "Student Association",
      period: "September 2022 - December 2022",
      description: "Redesigned the student association website to improve user experience and accessibility. Created wireframes and prototypes using Figma.",
      skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"]
    }
  ];

  // Education data
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "KL University",
      period: "2023 - 2027",
      description: "Specializing in web development and UI/UX design with a focus on modern JavaScript frameworks and responsive design principles.",
      courses: ["Data Structures & Algorithms", "Web Development", "UI/UX Design"]
    },
    {
      degree: "Intermediate,MPC",
      institution: "Sri Chaitanya",
      period: "2021 – 2023",
      courses: ["Physics", "Chemistry", "Maths"]
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "May 23 2025"
    },
    {
      name: "UI/UX Designing",
      issuer: "LearnX",
      date: "17 November 2023"
    },
    {
      name: "AI Associate",
      issuer: "Salesforce",
      date: "29 October 2024"
    }
  ];

  return (
    <motion.section 
      className="resume" 
      id="resume"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={itemVariants}>Resume</motion.h2>
        <motion.p className="section-description" variants={itemVariants}>
          View or download my resume to learn more about my experience and qualifications.
        </motion.p>
        
        <motion.div 
          className="resume-container"
          variants={containerVariants}
        >
          <motion.div className="resume-actions" variants={itemVariants}>
            <motion.a 
              href={resumePdfPath} 
              download="Ladi_Venkata_Sai_Resume.pdf"
              className="btn btn-primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaDownload /> Download Resume
            </motion.a>
            <motion.a 
              href={resumePdfPath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaEye /> View Resume
            </motion.a>
          </motion.div>
          
          {/* Work Experience Section - Moved to top */}
          <motion.div 
            className="work-experience-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1, stiffness: 100 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="resume-section-header">
              <FaBriefcase className="resume-icon" />
              <h3>Work Experience</h3>
            </div>
            
            <div className="timeline">
              {workExperience.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{job.title}</h4>
                    <div className="timeline-info">
                      <p className="company">{job.company}</p>
                      <p className="period">{job.period}</p>
                    </div>
                    <p className="description">{job.description}</p>
                    <div className="skills-used">
                      {job.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="resume-preview"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.3, stiffness: 100 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Education Section */}
            <div className="resume-section">
              <div className="resume-section-header">
                <FaGraduationCap className="resume-icon" />
                <h3>Education</h3>
              </div>
              
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>{edu.degree}</h4>
                      <div className="timeline-info">
                        <p className="institution">{edu.institution}</p>
                        <p className="period">{edu.period}</p>
                      </div>
                      <p className="description">{edu.description}</p>
                      <div className="courses">
                        <h5>Key Courses:</h5>
                        <div className="course-tags">
                          {edu.courses.map((course, courseIndex) => (
                            <span key={courseIndex} className="course-tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}
            <div className="resume-section">
              <div className="resume-section-header">
                <FaAward className="resume-icon" />
                <h3>Certifications</h3>
              </div>
              
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="certification-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                  >
                    <h4>{cert.name}</h4>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="date">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A responsive weather application that provides real-time weather information using API integration. Users can search for weather conditions in any location worldwide.',
      technologies: ['React', 'JavaScript', 'Weather API', 'CSS'],
      image: '/project-weather.png',
      githubLink: 'https://github.com/venkatasai135',
      liveLink: 'https://weather-app.example.com',
      features: [
        'Real-time weather data from external API',
        'Location-based weather forecasts',
        'Responsive design for all devices',
        'Interactive UI with weather animations'
      ]
    },
    {
      id: 2,
      title: 'Library Management System',
      description: 'A full-stack application for managing library resources, including books, members, and borrowing records. Features user authentication and role-based access control.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      image: '/project-library.jpg',
      githubLink: 'https://github.com/venkatasai135',
      liveLink: 'https://library-system.example.com',
      features: [
        'User authentication and authorization',
        'Book catalog with search functionality',
        'Member management system',
        'Borrowing and returning workflow',
        'Admin dashboard with analytics'
      ]
    },
    {
      id: 3,
      title: 'Online Voting System',
      description: 'A secure online voting platform that allows organizations to conduct elections electronically. Includes features for voter verification and real-time result tabulation.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      image: '/project-voting.jpg',
      githubLink: 'https://github.com/venkatasai135',
      liveLink: 'https://voting-system.example.com',
      features: [
        'Secure voter authentication',
        'Real-time vote counting',
        'Admin panel for election management',
        'Result visualization with charts',
        'Mobile-friendly interface'
      ]
    },
    {
      id: 4,
      title: 'Content Management System',
      description: 'A customizable CMS that allows users to create, manage, and publish digital content. Designed with a focus on user experience and flexibility.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL'],
      image: '/project-cms.jpg',
      githubLink: 'https://github.com/venkatasai135',
      liveLink: 'https://cms.example.com',
      features: [
        'Content creation and editing',
        'User role management',
        'Media library',
        'Custom templates',
        'SEO optimization tools'
      ]
    }
  ];

  return (
    <motion.section 
      className="projects" 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 className="section-title" variants={itemVariants}>Projects</motion.h2>
        <motion.p className="section-description" variants={itemVariants}>
          Here are some of the projects I've worked on that showcase my skills and experience.
        </motion.p>
        
        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div 
              className="project-card" 
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="project-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img src={project.image} alt={project.title} />
              </motion.div>
              <motion.div className="project-content" variants={itemVariants}>
                <motion.h3 variants={itemVariants}>{project.title}</motion.h3>
                <motion.p variants={itemVariants}>{project.description}</motion.p>
                
                <motion.div className="project-tech" variants={itemVariants}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </motion.div>
                
                <motion.div className="project-features" variants={itemVariants}>
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <motion.li key={index} variants={itemVariants}>{feature}</motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div className="project-links" variants={itemVariants}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                    <FaGithub /> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
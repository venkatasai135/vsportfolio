import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Ladi Venkata Sai</h1>
        <h2>Computer Science Student & Web Developer</h2>
        <p>
          A passionate engineering student with a focus on web development, 
          full-stack applications, and UI/UX design.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
        <div className="social-icons">
          <a href="https://github.com/venkatasai135" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ladi-venkata-sai-b8598226b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
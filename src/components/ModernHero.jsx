import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ModernHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after component mounts for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Text that will rotate around the profile image
  const circleText = "Developer - Designer - Photographer - Editor - ";

  return (
    <section className="modern-hero">
      <div className="mobile-frame">
        <div className="mobile-content">
          <div className={`intro-section ${isLoaded ? 'loaded' : ''}`}>
            <div className="greeting">Hey, I am</div>
            <h1 className="name">Ladi Venkata Sai</h1>
            <p className="tagline">Computer Science Student & Web Developer</p>
          </div>
          
          <Link to="/contact" className={`hire-button ${isLoaded ? 'loaded' : ''}`}>
            Hire me!
          </Link>
          
          <div className="profile-container">
            <div className="profile-image-wrapper">
              {/* Profile image - replace placeholder with actual image */}
              <div className="profile-image" role="img" aria-label="Profile photo of Ladi Venkata Sai"></div>
              
              <div className="rotating-text-container">
                <div className="rotating-text">
                  {[...Array(36)].map((_, i) => {
                    const char = circleText[i % circleText.length];
                    const rotation = i * 10; // 10 degrees per character
                    return (
                      <span 
                        key={i} 
                        style={{ 
                          transform: `rotate(${rotation}deg)`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
import DesktopHero from '../components/DesktopHero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';

const HomePage = () => {
  return (
    <div className="home-page">
      <DesktopHero />
      
      <div className="compact-container">
        {/* Remove the about-skills-container div and place components separately */}
        <About />
        <Skills />
        <Projects />
        <Resume />
      </div>
    </div>
  );
};

export default HomePage;
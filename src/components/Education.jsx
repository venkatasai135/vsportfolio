import { FaGraduationCap, FaMedal, FaBook } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-description">
          My academic journey and achievements.
        </p>
        
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>B.Tech in Computer Science</h3>
              <h4>KL University</h4>
              <p className="timeline-period">2023 - 2027 (Expected)</p>
              <div className="timeline-details">
                <p><strong>CGPA:</strong> 8.91</p>
                <p>
                  Currently pursuing my Bachelor's degree in Computer Science, focusing on 
                  web development, algorithms, data structures,UI/UX design and software engineering principles.
                </p>
  
                <div className="key-courses">
                  <h5><FaBook /> Key Courses</h5>
                  <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>Web Development</li>
                    <li>Database Management Systems</li>
                    <li>Object-Oriented Programming</li>
                    <li>Software Engineering</li>
                    <li>UI/UX Design Principles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional education entries can be added here if needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;
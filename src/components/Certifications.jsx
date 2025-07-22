import { FaCertificate, FaExternalLinkAlt, FaImage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: 'October 29, 2024',
      description: 'Certification validating knowledge of AI principles and their application within the Salesforce ecosystem.',
      certificateImage: '/images/certificate-placeholder.svg'
    },
    {
      id: 2,
      title: 'Virtual Internship Program in Networking',
      issuer: 'Cisco AICTE Virtual Internship Program 2024',
      date: 'May - July 2024',
      description: 'This internship was an incredible opportunity to enhance my skills and knowledge in networking, and I am grateful for the chance to learn from industry leaders..',
      certificateImage: '/images/certificate-placeholder.svg'
    },
    {
      id: 3,
      title: 'Python Full Stack',
      issuer: 'EduSkills',
      date: '14 May 2025',
      description: 'Certification validating skills inogramming, including core concepts and advanced techniques.',
      certificateImage: '/images/certificate-placeholder.svg'
    },
    {
      id: 4,
      title: 'Data Analytics Job Simulation',
      issuer: 'Deloitte',
      date: 'May 2025',
      description: 'Certification demonstrating ability to create data visualizations, perform data analysis, and share insights using Power BI.',
      certificateImage: '/images/certificate-placeholder.svg'
    },
    {
      id: 5,
      title: 'Deloitte Data Analyticion',
      issuer: 'Deloitte & Foe',
      date: 'October 2023',
      description: 'Completion of a virtual work experience program focused on data analytics techniques and business applications.',
      certificateImage: '/images/certificate-placeholder.svg'
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-description">
          Professional certifications and credentials that validate my skills and knowledge.
        </p>
        
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="certification-card" key={cert.id}>
              <div className="certification-icon">
                <FaCertificate />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
                <p className="certification-description">{cert.description}</p>
                <div className="certificate-preview">
                  <Link 
                    to={`/certificate/${cert.id}`}
                    className="certificate-link"
                  >
                    <img 
                      src={cert.certificateImage} 
                      alt={`${cert.title} Certificate`} 
                      className="certificate-thumbnail" 
                    />
                    <div className="view-overlay">
                      <FaImage /> View Certificate
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
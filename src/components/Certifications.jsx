import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: 'June 2023',
      description: 'Certification validating knowledge of AI principles and their application within the Salesforce ecosystem.',
      credentialLink: 'https://example.com/credential/salesforce-ai'
    },
    {
      id: 2,
      title: 'HackerRank Java Certification',
      issuer: 'HackerRank',
      date: 'March 2023',
      description: 'Certification demonstrating proficiency in Java programming language, data structures, and algorithms.',
      credentialLink: 'https://example.com/credential/hackerrank-java'
    },
    {
      id: 3,
      title: 'HackerRank Python Certification',
      issuer: 'HackerRank',
      date: 'April 2023',
      description: 'Certification validating skills in Python programming, including core concepts and advanced techniques.',
      credentialLink: 'https://example.com/credential/hackerrank-python'
    },
    {
      id: 4,
      title: 'Microsoft Power BI',
      issuer: 'Microsoft',
      date: 'August 2023',
      description: 'Certification demonstrating ability to create data visualizations, perform data analysis, and share insights using Power BI.',
      credentialLink: 'https://example.com/credential/microsoft-powerbi'
    },
    {
      id: 5,
      title: 'Deloitte Data Analytics Job Simulation',
      issuer: 'Deloitte & Forage',
      date: 'October 2023',
      description: 'Completion of a virtual work experience program focused on data analytics techniques and business applications.',
      credentialLink: 'https://example.com/credential/deloitte-analytics'
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
                <a 
                  href={cert.credentialLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  View Credential <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
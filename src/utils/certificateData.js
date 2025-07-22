// Certificate data utility file

// This would typically come from an API or database
// For now, we'll store it here for simplicity
const certifications = [
  {
    id: 1,
    title: 'Salesforce AI Developer',
    issuer: 'Salesforce',
    date: 'October 29, 2024',
    description: 'Certification validating knowledge of AI principles and their application within the Salesforce ecosystem.',
    certificateImage: '/images/certificate-placeholder.svg'
  },
  {
    id: 2,
    title: 'Cisco Networking Academy',
    issuer: 'Cisco AICTE Virtual Internship Program 2024',
    date: 'May - July 2024',
    description: 'This internship was an incredible opportunity to enhance my skills and knowledge in networking, and I am grateful for the chance to learn from industry leaders.',
    certificateImage: '/images/certificate-placeholder.svg'
  },
  {
    id: 3,
    title: 'Python Full Stack Developer',
    issuer: 'EduSkills',
    date: '14 May 2025',
    description: 'Certification validating skills in programming, including core concepts and advanced techniques.',
    certificateImage: '/images/certificate-placeholder.svg'
  },
  {
    id: 4,
    title: 'Microsoft Power BI Expert',
    issuer: 'Microsoft',
    date: 'August 2023',
    description: 'Certification demonstrating ability to create data visualizations, perform data analysis, and share insights using Power BI.',
    certificateImage: '/images/certificate-placeholder.svg'
  },
  {
    id: 5,
    title: 'Data Analytics Professional',
    issuer: 'Deloitte & Forage',
    date: 'October 2023',
    description: 'Completion of a virtual work experience program focused on data analytics techniques and business applications.',
    certificateImage: '/images/certificate-placeholder.svg'
  }
];

// Function to get all certifications
export const getAllCertifications = () => {
  return certifications;
};

// Function to get a specific certification by ID
export const getCertificationById = (id) => {
  return certifications.find(cert => cert.id === parseInt(id)) || null;
};
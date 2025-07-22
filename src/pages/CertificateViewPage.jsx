import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaDownload, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getCertificationById } from '../utils/certificateData';

const CertificateViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch certificate data from our utility
    const fetchCertificate = () => {
      setLoading(true);
      
      // Get certificate by ID
      const certificateData = getCertificationById(id);
      
      // Simulate network delay
      setTimeout(() => {
        if (certificateData) {
          setCertificate(certificateData);
        } else {
          // Handle case where certificate is not found
          navigate('/certifications', { replace: true });
        }
        setLoading(false);
      }, 300);
    };
    
    fetchCertificate();
  }, [id, navigate]);

  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleDownload = () => {
    // In a real app, this would trigger a download of the certificate
    // For now, we'll just open the image in a new tab
    window.open(certificate?.certificateImage, '_blank');
  };

  if (loading) {
    return (
      <div className="certificate-view-page">
        <div className="certificate-view-container">
          <button className="back-button" onClick={handleGoBack}>
            <FaArrowLeft /> Back to Certifications
          </button>
          <div className="loading-indicator">Loading certificate...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="certificate-view-page">
      <div className="certificate-view-container">
        <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft /> Back to Certifications
        </button>
        
        <h1 className="certificate-view-title">{certificate?.title || 'Certificate View'}</h1>
        
        <div className="certificate-meta">
          <div className="certificate-meta-item">
            <FaBuilding /> <span>{certificate?.issuer || 'Unknown Issuer'}</span>
          </div>
          <div className="certificate-meta-item">
            <FaCalendarAlt /> <span>{certificate?.date || 'Unknown Date'}</span>
          </div>
        </div>
        
        <div className="certificate-display">
          <img 
            src={certificate?.certificateImage} 
            alt={`${certificate?.title} Certificate`} 
            className="certificate-full-image" 
          />
        </div>
        
        {certificate?.description && (
          <div className="certificate-description">
            <h3>About this Certificate</h3>
            <p>{certificate.description}</p>
          </div>
        )}
        
        <div className="certificate-actions">
          <button className="download-button" onClick={handleDownload}>
            <FaDownload /> Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewPage;
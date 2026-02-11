import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(
          `https://remotive.com/api/remote-jobs?limit=100`
        );
        
        if (response.data && response.data.jobs) {
          const foundJob = response.data.jobs.find(j => j.id === parseInt(id));
          if (foundJob) {
            setJob(foundJob);
          } else {
            setError('Job not found');
          }
        }
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleApply = () => {
    // Show success alert
    alert(' Successfully applied! Your application has been submitted.');
    
    // Mark as applied (optional - you can use this to change button state)
    setApplied(true);
    
    // Optional: Log to console for debugging
    console.log(`Applied for job: ${job?.title} at ${job?.company_name}`);
  };

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner}></div>
        <p>Loading job details...</p>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div style={styles.errorContainer}>
        <h2>Job Not Found</h2>
        <p>{error || "The job you're looking for doesn't exist or has been removed."}</p>
        <Link to="/" style={styles.backLink}>
          ← Back to Job Listings
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>
        ← Back to Job Listings
      </Link>
      
      <div style={styles.header}>
        <h1 style={styles.title}>{job.title}</h1>
        <div style={styles.companyInfo}>
          <h2 style={styles.company}>{job.company_name}</h2>
          <span style={styles.category}>{job.category}</span>
        </div>
      </div>

      <div style={styles.detailsGrid}>
        <div style={styles.detailCard}>
          <h3 style={styles.detailTitle}> Location</h3>
          <p style={styles.detailText}>{job.candidate_required_location || 'Worldwide'}</p>
        </div>
        <div style={styles.detailCard}>
          <h3 style={styles.detailTitle}> Salary</h3>
          <p style={styles.detailText}>{job.salary || 'Not specified'}</p>
        </div>
        <div style={styles.detailCard}>
          <h3 style={styles.detailTitle}> Job Type</h3>
          <p style={styles.detailText}>{job.job_type || 'Full-time'}</p>
        </div>
        <div style={styles.detailCard}>
          <h3 style={styles.detailTitle}> Posted</h3>
          <p style={styles.detailText}>
            {job.publication_date ? new Date(job.publication_date).toLocaleDateString() : 'Recently'}
          </p>
        </div>
      </div>

      <div style={styles.description}>
        <h3 style={styles.descriptionTitle}>Job Description</h3>
        <div 
          style={styles.descriptionContent}
          dangerouslySetInnerHTML={{ __html: job.description || 'No description available.' }}
        />
      </div>

      <div style={styles.actions}>
        {applied ? (
          <div style={styles.appliedMessage}>
            <p style={styles.successText}> You have successfully applied for this position!</p>
            <button 
              onClick={() => setApplied(false)} 
              style={styles.applyAgainButton}
            >
              Apply Again
            </button>
          </div>
        ) : (
          <button 
            onClick={handleApply}
            style={styles.applyButton}
          >
            {applied ? 'Applied ✓' : 'Apply Now →'}
          </button>
        )}
        
        {/* Optional: Keep the original Remotive link as a secondary option */}
        <p style={styles.externalLink}>
          Or apply directly on{' '}
          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.remotiveLink}
          >
            Remotive's website
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px'
  },
  backLink: {
    display: 'inline-block',
    color: '#3498db',
    marginBottom: '30px',
    fontSize: '16px',
    fontWeight: '500'
  },
  header: {
    marginBottom: '40px'
  },
  title: {
    fontSize: '32px',
    color: '#2c3e50',
    marginBottom: '15px'
  },
  companyInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },
  company: {
    fontSize: '24px',
    color: '#3498db'
  },
  category: {
    backgroundColor: '#ecf0f1',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600'
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginBottom: '40px'
  },
  detailCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  detailTitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  detailText: {
    fontSize: '16px',
    color: '#2c3e50',
    fontWeight: '500'
  },
  description: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    marginBottom: '40px'
  },
  descriptionTitle: {
    fontSize: '24px',
    color: '#2c3e50',
    marginBottom: '20px'
  },
  descriptionContent: {
    lineHeight: '1.8',
    color: '#333'
  },
  actions: {
    textAlign: 'center',
    padding: '30px 0'
  },
  applyButton: {
    display: 'inline-block',
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '15px 40px',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '600',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    marginBottom: '20px'
  },
  applyButtonHover: {
    backgroundColor: '#27ae60'
  },
  appliedMessage: {
    backgroundColor: '#d4edda',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid #c3e6cb'
  },
  successText: {
    color: '#155724',
    fontSize: '18px',
    marginBottom: '15px'
  },
  applyAgainButton: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  externalLink: {
    color: '#666',
    fontSize: '14px',
    marginTop: '15px'
  },
  remotiveLink: {
    color: '#3498db',
    fontWeight: '500'
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    textAlign: 'center'
  },
  spinner: {
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px'
  },
  errorContainer: {
    textAlign: 'center',
    padding: '60px 20px'
  }
};

// Add CSS animation for spinner
const addSpinnerAnimation = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
};

// Initialize spinner animation
addSpinnerAnimation();

export default JobDetails;
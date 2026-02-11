import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, loading, error }) => {
  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner}></div>
        <p>Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.error}>
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <p>Please try again or check your internet connection.</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div style={styles.noResults}>
        <h3>No jobs found</h3>
        <p>Try a different search term or check back later!</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>Available Jobs ({jobs.length})</h2>
        <p style={styles.subtitle}>Click on any job to view more details</p>
      </div>
      <div style={styles.grid}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '40px 0'
  },
  header: {
    marginBottom: '30px'
  },
  subtitle: {
    color: '#666',
    marginTop: '5px'
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
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
  error: {
    backgroundColor: '#ffe6e6',
    border: '1px solid #ff9999',
    borderRadius: '8px',
    padding: '30px',
    textAlign: 'center',
    margin: '40px 0'
  },
  noResults: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    padding: '40px',
    textAlign: 'center',
    margin: '40px 0'
  }
};

// Add spinner animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

export default JobList;
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>{job.title}</h3>
        <span style={styles.company}>{job.company_name}</span>
      </div>
      
      <div style={styles.details}>
        <div style={styles.detailItem}>
          <span style={styles.detailLabel}>📍</span>
          <span>{job.candidate_required_location || 'Worldwide'}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.detailLabel}>💰</span>
          <span>{job.salary || 'Salary not specified'}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.detailLabel}>🏷️</span>
          <span>{job.job_type || 'Full-time'}</span>
        </div>
      </div>
      
      <div style={styles.description}>
        {job.description?.substring(0, 150)}...
      </div>
      
      <div style={styles.footer}>
        <span style={styles.category}>
          {job.category || 'Uncategorized'}
        </span>
        <Link to={`/job/${job.id}`} style={styles.viewButton}>
          View Details →
        </Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    marginBottom: '20px',
    border: '1px solid #eee'
  },
  header: {
    marginBottom: '15px'
  },
  title: {
    fontSize: '20px',
    color: '#2c3e50',
    marginBottom: '5px'
  },
  company: {
    fontSize: '16px',
    color: '#3498db',
    fontWeight: '500'
  },
  details: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: '#555'
  },
  detailLabel: {
    fontSize: '16px'
  },
  description: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  category: {
    backgroundColor: '#ecf0f1',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#2c3e50'
  },
  viewButton: {
    color: '#3498db',
    fontWeight: '600',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '4px',
    border: '2px solid #3498db',
    transition: 'all 0.3s'
  }
};

export default JobCard;
import React from 'react';
import '../styles/JobCard.css';
import { jobService } from '../services/jobService';

const JobCard = ({ job }) => {
  const formatDate = (dateString) => {
    return jobService.formatDate(dateString);
  };

  const getExperienceRange = () => {
    if (job.experience_range) {
      return job.experience_range;
    }
    return jobService.getExperienceRange(job.min_experience || 0, job.max_experience || 0);
  };

  const handleApplyClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    alert('Successfully applied!');
    // Still open the job URL in a new tab
    if (job.url && job.url !== '#') {
      window.open(job.url, '_blank');
    }
  };

  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{job.title}</h3>
        <div className="job-meta">
          <span className="job-type">{job.job_type || 'Full-Time'}</span>
          <span className="job-mode">{job.work_mode || 'Remote'}</span>
        </div>
      </div>
      
      <div className="job-details">
        <div className="detail-item">
          <span className="detail-label">Experience:</span>
          <span className="detail-value">{getExperienceRange()}</span>
        </div>
        
        {job.application_deadline && (
          <div className="detail-item">
            <span className="detail-label">Application Deadline:</span>
            <span className="detail-value">{formatDate(job.application_deadline)}</span>
          </div>
        )}
        
        <div className="company-info">
          <span className="company-name">
            <strong>Company:</strong> {job.company_name}
          </span>
          <span className="job-location">
            <strong>Location:</strong> {job.candidate_required_location || 'Worldwide'}
          </span>
        </div>
      </div>
      
      <div className="job-footer">
        <span className="posted-date">
          Posted On: {formatDate(job.publication_date || job.posted_on)}
        </span>
        <a 
          href={job.url || '#'} 
          className="apply-button"
          onClick={handleApplyClick}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobCard;
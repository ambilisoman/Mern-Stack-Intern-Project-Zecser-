import React from 'react';
import '../styles/JobList.css';
import JobCard from './JobCard';

const JobList = ({ jobs}) => {
  return (
    <div className="job-list-container">
      
      <div className="jobs-grid">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobCard key={job.id || index} job={job} />
          ))
        ) : (
          <div className="no-jobs">No jobs found. Try a different search.</div>
        )}
      </div>
    </div>
  );
};

export default JobList;
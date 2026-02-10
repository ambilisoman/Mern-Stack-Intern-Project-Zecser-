import React from "react";
import "../styles/JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Salary:</strong> {job.salary}</p>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;

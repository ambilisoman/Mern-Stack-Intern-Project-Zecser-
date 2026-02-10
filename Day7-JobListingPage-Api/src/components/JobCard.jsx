import Button from "./reusable/Button";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><b>Company:</b> {job.company_name}</p>
      <p><b>Type:</b> {job.job_type}</p>
      <p><b>Location:</b> {job.candidate_required_location}</p>
      <Button text="Apply Now" onClick={() => window.open(job.url, "_blank")} />
    </div>
  );
}

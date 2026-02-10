import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import Loader from "../components/Loader";
import BottomNav from "../components/BottomNav";
import "../styles/jobs.css";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch Jobs from API
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(search)}`
      );
      const data = await res.json();
      setJobs(data.jobs);
    } catch (err) {
      setError("Failed to fetch jobs. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Initial Fetch + Search
  useEffect(() => {
    fetchJobs();
  }, [search]);

  // Auto Refresh every 60 sec
  useEffect(() => {
    const interval = setInterval(fetchJobs, 60000);
    return () => clearInterval(interval);
  }, [search]);

  return (
    <div className="page">
      <Navbar search={search} setSearch={setSearch} />

      <div className="layout">
        <Sidebar />

        <div className="jobs-container">
          <div className="jobs-header">
            <h2>Top job picks for you</h2>
            <p>Based on your profile, preference, and recent activity</p>
          </div>

          {loading && <Loader />}
          {error && <div className="error">{error}</div>}

          {!loading && !error && jobs.length === 0 && (
            <div className="error">No jobs found for "{search}"</div>
          )}

          {!loading && jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

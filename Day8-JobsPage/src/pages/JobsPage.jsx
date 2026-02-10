import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';
import { jobService } from '../services/jobService';
import '../styles/JobsPage.css';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job =>
        job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, jobs]);

  useEffect(() => {
    const total = Math.ceil(filteredJobs.length / jobsPerPage);
    setTotalPages(total > 0 ? total : 1);
  }, [filteredJobs]);

  const fetchJobs = async (searchQuery = '') => {
    setLoading(true);
    setError(null);
    try {
      const jobsData = await jobService.getAllJobs(searchQuery);
      setJobs(jobsData);
      setFilteredJobs(jobsData);
    } catch (err) {
      setError('Failed to load jobs. Please try again later.');
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchTerm(query);
    if (query.trim() === '') {
      fetchJobs();
    } else {
      fetchJobs(query);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getCurrentPageJobs = () => {
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    return filteredJobs.slice(startIndex, endIndex);
  };

  if (error) {
    return (
      <div className="jobs-page">
        <Header />
        <div className="error-container">
          <div className="error-message">
            <h3>Error Loading Jobs</h3>
            <p>{error}</p>
            <button onClick={() => fetchJobs()} className="retry-button">
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="jobs-page">
      <Header />
      <main className="jobs-main-content">
        <div className="page-header">
          <h1 className="page-title">Top job picks for you</h1>
          <p className="page-subtitle">Based on your profile, preferences, and recent activity</p>
        </div>
        
        <SearchBar onSearch={handleSearch} />
        
        <div className="jobs-section">
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading jobs...</p>
            </div>
          ) : (
            <>
              <div className="jobs-header">
                <h2>
                  Top job picks for you
                  <span className="jobs-count"> ({filteredJobs.length} jobs found)</span>
                </h2>
                <p className="jobs-subtitle">
                  Based on your profile, preference, and recent activity
                </p>
              </div>
              
              <JobList jobs={getCurrentPageJobs()} />
              
              {filteredJobs.length > jobsPerPage && (
                <div className="pagination-controls">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-button prev"
                  >
                    Previous
                  </button>
                  
                  {/* <div className="page-numbers">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`page-number ${currentPage === pageNum ? 'active' : ''}`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div> */}
                  
                  {/* <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-button next"
                  >
                    Next
                  </button> */}
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="jobs-footer">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
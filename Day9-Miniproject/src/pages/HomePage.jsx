import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import JobList from '../components/JobList';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('developer');

  const fetchJobs = async (search = 'developer') => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(
        `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(search)}`
      );
      
      if (response.data && response.data.jobs) {
        setJobs(response.data.jobs);
      } else {
        setJobs([]);
      }
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to fetch jobs. Please try again later.');
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(searchTerm);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchJobs(term);
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Find Your Remote Dream Job</h1>
        <p style={styles.heroSubtitle}>
          Browse thousands of remote job opportunities from around the world
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />
      
      <JobList 
        jobs={jobs} 
        loading={loading} 
        error={error} 
      />

      <div style={styles.features}>
        <h2 style={styles.featuresTitle}>Why Use Our Job Board?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🌍</div>
            <h3>Remote Only</h3>
            <p>All jobs are 100% remote positions</p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🆓</div>
            <h3>Free Forever</h3>
            <p>No charges for job seekers</p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>📊</div>
            <h3>Real-time Updates</h3>
            <p>Fresh job listings daily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 0'
  },
  hero: {
    textAlign: 'center',
    marginBottom: '50px',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px'
  },
  heroTitle: {
    fontSize: '36px',
    color: '#2c3e50',
    marginBottom: '15px'
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto'
  },
  features: {
    marginTop: '60px',
    padding: '40px 0'
  },
  featuresTitle: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '28px',
    color: '#2c3e50'
  },
  featuresGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px'
  },
  feature: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '350px',
    textAlign: 'center',
    padding: '30px 20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 15px rgba(0,0,0,0.05)'
  },
  featureIcon: {
    fontSize: '40px',
    marginBottom: '20px'
  }
};

export default HomePage;
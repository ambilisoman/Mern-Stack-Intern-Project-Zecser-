import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for jobs (e.g., 'developer', 'designer', 'marketing')"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search Jobs
        </button>
      </div>
      <div style={styles.exampleText}>
        Try: "frontend", "react", "python", "design", "marketing"
      </div>
    </form>
  );
};

const styles = {
  form: {
    marginBottom: '30px'
  },
  searchContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px'
  },
  input: {
    flex: 1,
    padding: '15px',
    fontSize: '16px',
    border: '2px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border 0.3s'
  },
  button: {
    padding: '15px 30px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  exampleText: {
    fontSize: '14px',
    color: '#666',
    marginLeft: '5px'
  }
};

export default SearchBar;
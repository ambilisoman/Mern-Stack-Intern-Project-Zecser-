// Get environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const JOBS_ENDPOINT = import.meta.env.VITE_API_JOBS_ENDPOINT;

export const jobService = {
  // Fetch all jobs
  async getAllJobs(searchQuery = '') {
    try {
      const url = searchQuery 
        ? `${API_BASE_URL}${JOBS_ENDPOINT}?search=${encodeURIComponent(searchQuery)}`
        : `${API_BASE_URL}${JOBS_ENDPOINT}`;
      
      console.log('Fetching from URL:', url); // Debug log
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      console.log('API Response:', data); // Debug log
      return data.jobs || [];
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Return mock data if API fails for development
      return getMockJobs();
    }
  },

  // Fetch jobs by category
  async getJobsByCategory(category) {
    try {
      const response = await fetch(
        `${API_BASE_URL}${JOBS_ENDPOINT}?category=${category}`
      );
      if (!response.ok) throw new Error('Failed to fetch jobs by category');
      
      const data = await response.json();
      return data.jobs || [];
    } catch (error) {
      console.error('Error fetching jobs by category:', error);
      return [];
    }
  },

  // Format date
  formatDate(dateString) {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },

  // Get experience range
  getExperienceRange(minExp, maxExp) {
    if (minExp === 0 && maxExp === 2) return '0-2 Years';
    if (minExp === 2 && maxExp === 4) return '2-4 Years';
    if (minExp >= 4) return '4+ Years';
    return `${minExp || 0}-${maxExp || 2} Years`;
  }
};

// Mock data for development if API fails
function getMockJobs() {
  return [
    {
      id: 1,
      title: 'Frontend Developer (React.js)',
      company_name: 'TechCorp Inc.',
      job_type: 'Full-Time',
      work_mode: 'Remote',
      min_experience: 2,
      max_experience: 4,
      publication_date: '2025-07-30',
      application_deadline: '2025-08-15',
      candidate_required_location: 'Worldwide',
      url: '#'
    },
    {
      id: 2,
      title: 'Senior Python Backend Developer',
      company_name: 'SKYCATCHFIRE',
      job_type: 'Full-Time',
      work_mode: 'Remote',
      min_experience: 4,
      max_experience: 6,
      publication_date: '2025-07-28',
      candidate_required_location: 'USA',
      url: '#'
    },
    {
      id: 3,
      title: 'Content Reviewer',
      company_name: 'TELUS Digital',
      job_type: 'Part-Time',
      work_mode: 'Remote',
      min_experience: 1,
      max_experience: 3,
      publication_date: '2025-07-29',
      candidate_required_location: 'USA',
      url: '#'
    },
    {
      id: 4,
      title: 'Freelance Writer',
      company_name: 'IAPWE',
      job_type: 'Freelance',
      work_mode: 'Remote',
      min_experience: 1,
      max_experience: 2,
      publication_date: '2025-07-27',
      candidate_required_location: 'Worldwide',
      url: '#'
    }
  ];
}
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.left}>
            <h3 style={styles.logo}>JobListings</h3>
            <p style={styles.description}>
              Find your perfect remote job opportunity from thousands of listings.
            </p>
          </div>
          <div style={styles.right}>
            <p style={styles.apiCredit}>
              Powered by <a 
                href="https://remotive.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.apiLink}
              >
                Remotive API
              </a>
            </p>
            <p style={styles.copyright}>
              © {new Date().getFullYear()} JobListings App. Built for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '40px 0',
    marginTop: '60px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '30px'
  },
  left: {
    flex: 1,
    minWidth: '250px'
  },
  right: {
    flex: 1,
    minWidth: '250px',
    textAlign: 'right'
  },
  logo: {
    fontSize: '24px',
    marginBottom: '15px',
    color: 'white'
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    opacity: '0.8'
  },
  apiCredit: {
    fontSize: '14px',
    marginBottom: '10px'
  },
  apiLink: {
    color: '#3498db',
    fontWeight: '600'
  },
  copyright: {
    fontSize: '12px',
    opacity: '0.6'
  }
};

export default Footer;
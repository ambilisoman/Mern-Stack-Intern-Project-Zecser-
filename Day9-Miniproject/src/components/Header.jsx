import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        {/* Logo Section */}
        <Link to="/" style={styles.logo}>
          <div style={styles.logoContent}>
            <div>
              <h1>Zecpath</h1>
            </div>
          </div>
        </Link>

        {/* Navigation Icons */}
        <nav style={styles.nav}>
          {/* Home Icon */}
          <Link to="/" style={styles.iconContainer}>
            <i className="fas fa-home" style={styles.icon}></i>
            <span style={styles.iconLabel}>Home</span>
          </Link>

          {/* My Network Icon */}
          <Link to="/network" style={styles.iconContainer}>
            <i className="fas fa-users" style={styles.icon}></i>
            <span style={styles.iconLabel}>My Network</span>
          </Link>

          {/* Notifications Icon */}
          <div style={styles.iconContainer}>
            <i className="fas fa-bell" style={styles.icon}></i>
            <span style={styles.iconLabel}>Notifications</span>
            <span style={styles.notificationBadge}>3</span>
          </div>

          {/* User Profile Icon */}
          <div style={styles.iconContainer}>
            <div style={styles.userAvatar}>
              <i className="fas fa-user" style={styles.userIcon}></i>
            </div>
            <div style={styles.userDropdown}>
              <span style={styles.iconLabel}>Me</span>
              <i className="fas fa-chevron-down" style={styles.dropdownArrow}></i>
            </div>
          </div>

          {/* Messages Icon */}
          <Link to="/messages" style={styles.iconContainer}>
            <i className="fas fa-envelope" style={styles.icon}></i>
            <span style={styles.iconLabel}>Messages</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '15px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  logoContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  briefcaseIcon: {
    fontSize: '32px',
    color: '#3498db',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '8px'
  },
  logoH1: {
    fontSize: '24px',
    margin: 0,
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  logoP: {
    fontSize: '12px',
    margin: 0,
    opacity: '0.9',
    color: '#ecf0f1'
  },
  nav: {
    display: 'flex',
    gap: '25px',
    alignItems: 'center'
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    position: 'relative',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: 'all 0.3s ease'
  },
  iconContainerHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  icon: {
    fontSize: '20px',
    marginBottom: '4px'
  },
  iconLabel: {
    fontSize: '12px',
    fontWeight: '500'
  },
  notificationBadge: {
    position: 'absolute',
    top: '-5px',
    right: '5px',
    backgroundColor: '#e74c3c',
    color: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '2px 6px',
    borderRadius: '10px',
    minWidth: '18px',
    textAlign: 'center'
  },
  userAvatar: {
    width: '30px',
    height: '30px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px'
  },
  userIcon: {
    fontSize: '16px',
    color: 'white'
  },
  userDropdown: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  dropdownArrow: {
    fontSize: '10px'
  }
};

// Add hover effect
const addHoverEffect = () => {
  return `
    .icon-container:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
  `;
};

// You can also add this to your global CSS
const HeaderWithStyles = () => {
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = addHoverEffect();
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <Header />;
};

export default HeaderWithStyles;
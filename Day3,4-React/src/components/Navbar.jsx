const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2>Zecpath</h2>

      <div style={styles.menu}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#0d022b",
    color: "white"
  },

  menu: {
    display: "flex",
    gap: "20px"
  },

  link: {
    color: "white",
    textDecoration: "none"
  }
};

export default Navbar;

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
    backgroundColor: "#16063d",
    color: "#fff"
  },

  menu: {
    display: "flex",
    gap: "20px"
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500"
  }
};

export default Navbar;

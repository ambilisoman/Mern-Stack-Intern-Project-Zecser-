const Button = ({ label, alertMsg }) => {

  const handleClick = () => {
    alert(alertMsg);
  };

  return (
    <button style={styles.btn} onClick={handleClick}>
      {label}
    </button>
  );
};

const styles = {
  btn: {
    padding: "10px 20px",
    backgroundColor: "#061f39",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Button;

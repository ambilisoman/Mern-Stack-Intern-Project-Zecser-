import Card from "../components/reusable components/Card";

const Home = () => {
  return (
    <div style={styles.container}>

       <Card
        title="React"
        description="React is used to build UI components."
        image="https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png"
        buttonLabel="Learn More"
      />

      <Card
        title="JavaScript"
        description="JavaScript makes websites interactive."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXwLIZaPTYBwVr990VS_jx0trhiIRLJMP8g&s"
        buttonLabel="Explore"
      />

      <Card
        title="Vite"
        description="Vite is a fast development tool."
        image="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/vite.jpg"
        buttonLabel="Start Now"
      />

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    justifyContent: "center"
  }
};

export default Home;

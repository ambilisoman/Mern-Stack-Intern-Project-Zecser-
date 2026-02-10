import "./Card.css";
import Button from "./Button";

const Card = ({ title, description, image, buttonLabel }) => {
  return (
    <div className="card">
      <img src={image} alt={title} style={styles.img} />

      <h3>{title}</h3>
      <p>{description}</p>

      <Button
        label={buttonLabel}
        alertMsg={`Let's start ${title}`}
        />
    </div>
  );
};

const styles = {
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover"
  }
};

export default Card;

import { HashLink } from "react-router-hash-link";
import restaurantFoodImage from "../assets/restaurant-food.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <HashLink 
            className="button-primary" 
            to="/reservations"
            aria-label="Navigate to reservations page to reserve a table"
          >
            Reserve a table
          </HashLink>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Delicious Mediterranean dishes served at Little Lemon restaurant"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;

import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./MealCard.css";
const MealCard = ({ meal }) => {
  return (
    <article className="meal-card" role="article" aria-label={`${meal.name} menu item`}>
      <div className="meal-card-image">
        <img 
          src={meal.image} 
          alt={`${meal.name} dish`}
          loading="lazy"
        />
      </div>
      <div className="meal-card-header">
        <h3>{meal.name}</h3>
        <span className="meal-price" aria-label={`Price: ${meal.price}`}>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{meal.description}</p>
        <HashLink 
          to="/orderOnline"
          aria-label={`Order ${meal.name} for delivery`}
          className="order-link"
        >
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} aria-hidden="true" />
        </HashLink>
      </div>
    </article>
  );
};

export default MealCard;

import "./TestimonialCard.css";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
const TestimonialCard = ({ customer }) => {
  // Calculate total rating score
  const totalRating = customer.rating.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <article className="testimonial-card" role="article" aria-label={`Review by ${customer.fullName}`}>
      <img 
        src={customer.image} 
        alt={`${customer.fullName}`}
        loading="lazy"
      />
      <h4>{customer.fullName}</h4>
      <div className="rating" role="img" aria-label={`Rating: ${totalRating} out of 5 stars`}>
        {customer.rating.map((ratingPoint, idx) =>
          ratingPoint === 1 ? (
            <IoMdStar key={idx} aria-hidden="true" />
          ) : ratingPoint === 0.5 ? (
            <IoMdStarHalf key={idx} aria-hidden="true" />
          ) : ratingPoint === 0 ? (
            <IoMdStarOutline key={idx} aria-hidden="true" />
          ) : null
        )}
        <span className="rating-text" aria-hidden="true">
          {totalRating} / 5
        </span>
      </div>
      <blockquote cite={customer.fullName}>
        <p>"{customer.says}"</p>
      </blockquote>
    </article>
  );
};

export default TestimonialCard;

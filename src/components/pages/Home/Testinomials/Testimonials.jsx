import "./Testimonials.css";
import TestimonialCard from "../TestinomialsCard/TestimonialCard";
import Alex from "../assets/avatar1.jpg";
import Jordan from "../assets/avatar2.jpg";
import Morgan from "../assets/avatar4.jpg";
import Taylor from "../assets/avatar3.jpg";
const customers = [
  {
    fullName: "Alex Thompson",
    image: Alex,
    rating: [1, 1, 1, 1, 0.5],
    says: "Everything tasted fresh and flavorful. Highly recommend."
  },
  {
    fullName: "Jordan Martinez",
    image: Jordan,
    rating: [1, 1, 1, 1, 0],
    says: "The staff were so friendly and helpful. Great service",
  },
  {
    fullName: "Taylor Anderson",
    image: Taylor,
    rating: [1, 1, 1, 1, 0.5],
    says: "I had a great experience. Will be back soon.",
  },
  {
    fullName: "Morgan Williams",
    image: Morgan,
    rating: [1, 1, 1, 1, 1],
    says: "The staff are wonderful. So kind and helpful.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container grid">
        <h2 id="testimonials-heading">Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

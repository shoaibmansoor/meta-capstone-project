import { render, screen } from "@testing-library/react";
import TestimonialCard from "./TestimonialCard";

/**
 * TestimonialCard Component Tests
 * 
 * Tests testimonial card rendering, ratings, and accessibility
 */
describe("TestimonialCard Component", () => {
  const mockCustomer = {
    fullName: "John Doe",
    image: "/avatar.jpg",
    rating: [1, 1, 1, 1, 0.5],
    says: "Great food and excellent service!",
  };

  const renderTestimonialCard = (customer = mockCustomer) => {
    return render(<TestimonialCard customer={customer} />);
  };

  test("renders customer name", () => {
    renderTestimonialCard();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("renders customer testimonial text", () => {
    renderTestimonialCard();
    expect(screen.getByText(/Great food and excellent service!/)).toBeInTheDocument();
  });

  test("renders customer image with correct alt text", () => {
    renderTestimonialCard();
    const image = screen.getByAltText("John Doe");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/avatar.jpg");
  });

  test("displays correct rating score", () => {
    renderTestimonialCard();
    const rating = screen.getByLabelText(/Rating: 4.5 out of 5 stars/);
    expect(rating).toBeInTheDocument();
  });

  test("calculates rating correctly for full stars", () => {
    const fullStarCustomer = {
      ...mockCustomer,
      rating: [1, 1, 1, 1, 1],
    };
    renderTestimonialCard(fullStarCustomer);
    expect(screen.getByLabelText(/Rating: 5 out of 5 stars/)).toBeInTheDocument();
  });

  test("calculates rating correctly for partial stars", () => {
    const partialStarCustomer = {
      ...mockCustomer,
      rating: [1, 1, 1, 0.5, 0],
    };
    renderTestimonialCard(partialStarCustomer);
    expect(screen.getByLabelText(/Rating: 3.5 out of 5 stars/)).toBeInTheDocument();
  });

  test("has proper article structure with aria label", () => {
    renderTestimonialCard();
    const article = screen.getByRole("article", { name: /Review by John Doe/ });
    expect(article).toBeInTheDocument();
  });

  test("image has lazy loading attribute", () => {
    renderTestimonialCard();
    const image = screen.getByAltText("John Doe");
    expect(image).toHaveAttribute("loading", "lazy");
  });

  test("renders blockquote for testimonial text", () => {
    renderTestimonialCard();
    const blockquote = screen.getByText(/Great food and excellent service!/).closest("blockquote");
    expect(blockquote).toBeInTheDocument();
  });
});


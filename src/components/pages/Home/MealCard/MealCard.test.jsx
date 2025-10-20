import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MealCard from "./MealCard";

/**
 * MealCard Component Tests
 * 
 * Tests meal card rendering and accessibility
 */
describe("MealCard Component", () => {
  const mockMeal = {
    name: "Test Dish",
    image: "/test-image.jpg",
    price: "Rs. 500",
    description: "A delicious test dish with amazing flavors.",
  };

  const renderMealCard = (meal = mockMeal) => {
    return render(
      <BrowserRouter>
        <MealCard meal={meal} />
      </BrowserRouter>
    );
  };

  test("renders meal name", () => {
    renderMealCard();
    expect(screen.getByText("Test Dish")).toBeInTheDocument();
  });

  test("renders meal price", () => {
    renderMealCard();
    expect(screen.getByText("Rs. 500")).toBeInTheDocument();
  });

  test("renders meal description", () => {
    renderMealCard();
    expect(screen.getByText(/A delicious test dish/)).toBeInTheDocument();
  });

  test("renders meal image with correct alt text", () => {
    renderMealCard();
    const image = screen.getByAltText(/Test Dish dish/);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });

  test("renders order delivery link", () => {
    renderMealCard();
    const link = screen.getByRole("link", { name: /Order Test Dish for delivery/ });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/orderOnline");
  });

  test("has proper article structure", () => {
    renderMealCard();
    const article = screen.getByRole("article", { name: /Test Dish menu item/ });
    expect(article).toBeInTheDocument();
  });

  test("image has lazy loading attribute", () => {
    renderMealCard();
    const image = screen.getByAltText(/Test Dish dish/);
    expect(image).toHaveAttribute("loading", "lazy");
  });
});


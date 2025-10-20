import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
describe("App Component", () => {
  // Helper function to render App with Router
  const renderApp = () => {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  test("renders without crashing", () => {
    renderApp();
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders header navigation", () => {
    renderApp();
    const nav = screen.getByRole("navigation", { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
  });

  test("renders footer", () => {
    renderApp();
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  test("renders main content area", () => {
    renderApp();
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("has proper document structure", () => {
    renderApp();
    expect(screen.getByRole("banner")).toBeInTheDocument(); // header
    expect(screen.getByRole("main")).toBeInTheDocument(); // main
    expect(screen.getByRole("contentinfo")).toBeInTheDocument(); // footer
  });
});


import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header for funny ranking", () => {
  render(<App />);
  const linkElement = screen.getByText(/funny ranking/i);
  expect(linkElement).toBeInTheDocument();
});
